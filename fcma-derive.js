/* RiskAtlas · Generar un framework a partir de un assessment existente.
   Parte de un assessment que el banco ya tenía (hecho por ellos o vendido por otro proveedor, en XLSX/CSV/PDF/TXT/MD),
   deduce los pilares, sub-dimensiones y componentes, recupera las calificaciones originales y arma un framework nuevo
   en el mismo formato del motor. El núcleo (parseo y armado) no toca el DOM y se prueba en Node; la interfaz está al final. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.DERIVE = api;
})(typeof self !== 'undefined' ? self : this, function () {

  /* ───────────── utilidades ───────────── */
  const strip = s => String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const clean = s => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();

  const LABELS = [
    ['non-existent', 'nonexistent', 'non existent', 'none', 'not implemented', 'initial', 'inicial', 'inexistente', 'ninguno', 'no existe', 'nao existe', 'basic', 'basico'],
    ['informal', 'reactive', 'reactivo', 'reativo', 'repeatable', 'repetible', 'developing', 'en desarrollo', 'em desenvolvimento', 'ad hoc', 'ad-hoc'],
    ['defined', 'definido', 'definida'],
    ['managed', 'established', 'gestionado', 'gerenciado', 'establecido', 'estabelecido', 'quantitatively managed'],
    ['optimized', 'optimised', 'optimizing', 'advanced', 'optimizado', 'otimizado', 'avanzado', 'avancado', 'leading']
  ];
  function labelLevel(txt) {
    const t = strip(txt).replace(/[^a-z\- ]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!t) return null;
    for (let i = LABELS.length - 1; i >= 0; i--) if (LABELS[i].some(w => t === w)) return i + 1;
    return null;
  }

  const HDR = {
    target: /^(target|objetivo|meta|to[- ]?be|desired|deseado|esperado|expected|max|maximo|maximum|weight|peso|ponderacion)/,
    pillar: /^(pillar|pilar|domain|dominio|dominio|category|categoria|area|section|seccion|secao|function|funcion|funcao|theme|tema|capability|capacidad|capacidade|chapter|capitulo)$/,
    sub: /^(sub[- ]?(pillar|pilar|domain|dominio|category|categoria|dimension|dimension|area|topic)|subcategory|subcategoria|sub|topic|tema|group|grupo|subdomain|subdominio|subarea)$/,
    id: /^(id|ref|reference|referencia|referencia|code|codigo|cod|no|num|number|numero|#|control id|id control|item)$/,
    comp: /^(control|controls|question|questions|pregunta|preguntas|pergunta|component|componente|requirement|requisito|requerimiento|criterion|criterio|practice|practica|statement|enunciado|name|nombre|nome|control name|nombre del control|capability|assessment item|descripcion del control|control description)$/,
    desc: /^(description|descripcion|descricao|detail|detalle|detalhe)$/,
    level: /^(score|puntaje|puntuacion|pontuacao|rating|calificacion|classificacao|level|nivel|maturity|madurez|maturidade|current|actual|atual|result|resultado|assessed|as[- ]?is|response|respuesta|resposta|nota|maturity level|current score|current level|nivel actual|score actual)$/,
    note: /^(comment|comments|comentario|comentarios|comentarios|evidence|evidencia|observation|observations|observacion|observaciones|observacao|notes|notas|justification|justificacion|finding|hallazgo|rationale|remarks)$/
  };
  function classifyHeader(cell) {
    const t = strip(cell).replace(/[*_:]/g, '').replace(/\s+/g, ' ').trim();
    if (!t) return null;
    if (HDR.target.test(t)) return 'target';
    for (const k of ['sub', 'pillar', 'id', 'comp', 'desc', 'level', 'note']) if (HDR[k].test(t)) return k;
    if (/score|puntaj|rating|calific|maturity|madurez|nivel|level/.test(t) && !/target|objetivo|meta/.test(t)) return 'level';
    if (/comment|comentar|evidenc|observ|notes|justific/.test(t)) return 'note';
    if (/control|pregunta|question|requisit|component/.test(t)) return 'comp';
    return null;
  }

  /* ───────────── escala ───────────── */
  const SCALES = { '1-5': [1, 5], '0-4': [0, 4], '1-4': [1, 4], '1-10': [1, 10], '0-100': [0, 100] };
  function detectScale(vals) {
    if (!vals.length) return '1-5';
    const mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals);
    if (mx > 10) return '0-100';
    if (mx > 5) return '1-10';
    if (mn >= 1 && mx <= 5) return '1-5';
    if (mn >= 0 && mx <= 4) return '0-4';
    return '1-5';
  }
  function toLevel(v, scaleKey) {
    const sc = SCALES[scaleKey] || SCALES['1-5'];
    const x = Math.max(sc[0], Math.min(sc[1], v));
    return Math.max(1, Math.min(5, Math.round(1 + (x - sc[0]) * 4 / (sc[1] - sc[0]))));
  }

  /* ───────────── modo tabla (XLSX / CSV / tablas markdown) ───────────── */
  function parseTable(rows) {
    let hi = -1, map = null;
    for (let i = 0; i < Math.min(rows.length, 60); i++) {
      const m = {}; let n = 0;
      (rows[i] || []).forEach((c, j) => { const k = classifyHeader(c); if (k && m[k] == null) { m[k] = j; n++; } });
      if (m.comp != null || m.desc != null) { if (m.comp == null) { m.comp = m.desc; delete m.desc; } }
      if (m.comp != null && n >= 2 && (m.level != null || m.pillar != null || m.id != null)) { hi = i; map = m; break; }
    }
    if (hi < 0) return null;
    const comps = []; let curP = '', curS = '', pending = null;
    /* el título del primer bloque suele estar justo antes del encabezado de la tabla */
    if (map.pillar == null) for (let k = hi - 1; k >= Math.max(0, hi - 3); k--) { const rr = (rows[k] || []).filter(x => clean(x) !== ''); if (rr.length === 1 && clean(rr[0]).length < 90 && /^(pillar|pilar|domain|dominio|dom[ií]nio|section|secci[oó]n|area|[aá]rea|chapter|cap[ií]tulo|\d{1,2}[.)])/i.test(clean(rr[0]))) { curP = clean(rr[0]).replace(/^(pillar|pilar|domain|dominio|dom[ií]nio|section|secci[oó]n|area|[aá]rea|chapter|cap[ií]tulo)\s*[\w.]*\s*[:.\-–—]\s*/i, ''); break; } }
    const rawVals = [];
    for (let i = hi + 1; i < rows.length; i++) {
      const r = rows[i] || [];
      const cell = j => (j == null ? '' : clean(r[j]));
      const nonEmpty = r.filter(x => clean(x) !== '').length;
      const name = cell(map.comp);
      if (map.pillar != null && cell(map.pillar)) curP = cell(map.pillar);
      if (map.sub != null && cell(map.sub)) curS = cell(map.sub);
      if (!name) {
        /* fila de sección: una sola celda con texto, sin nombre de componente */
        if (nonEmpty === 1 && map.pillar == null) { const t = clean(r.find(x => clean(x) !== '')); if (t.length < 90) { curP = t.replace(/^(pillar|pilar|domain|dominio|section|seccion)\s*[\w.]*\s*[:.\-–—]\s*/i, ''); curS = ''; } }
        continue;
      }
      if (map.pillar == null && nonEmpty === 1 && name.length < 90 && map.level != null && cell(map.level) === '' && map.id == null) { curP = name; curS = ''; continue; }
      let lvTxt = cell(map.level), lv = null, raw = null;
      if (lvTxt !== '') {
        const num = parseFloat(lvTxt.replace(',', '.').replace('%', ''));
        if (!isNaN(num) && /^[\d.,]+%?$/.test(lvTxt)) { raw = num; rawVals.push(num); } else { const l = labelLevel(lvTxt); if (l) lv = l; }
      }
      comps.push({ pillar: curP, sub: curS, ref: cell(map.id), name, raw, level: lv, note: [map.note != null ? cell(map.note) : '', map.desc != null ? cell(map.desc) : ''].filter(Boolean).join(' · ') });
    }
    let scaleHint = null;
    const hm = clean((rows[hi] || [])[map.level]).replace(/[–—]/g, '-').match(/(\d{1,3})\s*(?:-|to|a|–)\s*(\d{1,3})/i);
    if (hm && SCALES[hm[1] + '-' + hm[2]]) scaleHint = hm[1] + '-' + hm[2];
    if (!scaleHint && map.level != null && /%/.test(clean((rows[hi] || [])[map.level]))) scaleHint = '0-100';
    if (!scaleHint) {
      const pre = rows.map(r => (r || []).join(' ')).join('\n').replace(/[–—]/g, '-');
      const sh = pre.match(/(?:scale|escala|scores?|notas?)[^.\n]{0,40}?(\d{1,3})\s*(?:-|to|a)\s*(\d{1,3})\s*(?:scale|escala)?/i);
      if (sh && SCALES[sh[1] + '-' + sh[2]]) scaleHint = sh[1] + '-' + sh[2];
    }
    return { comps, rawVals, headerRow: hi, scaleHint };
  }

  /* ───────────── modo texto (PDF / TXT / MD) ───────────── */
  const ID_RE = '(?:[A-Za-z]{1,6}[-_.]?\\d{1,3}(?:\\.\\d{1,3}){0,3}|\\d{1,2}(?:\\.\\d{1,3}){1,3})';
  const WORDS = LABELS.map(a => a.join('|')).join('|').replace(/\s/g, '\\s');
  function parseText(text) {
    const lines = String(text || '').split(/\r?\n/).map(l => l.replace(/ /g, ' ').trim()).filter(Boolean);
    const rowRe2 = new RegExp('^(' + ID_RE + ')\\s+(.{4,160}?)\\s+([0-5])(?:\\s*\\/\\s*5)?(?:\\s+(.*))?$', 'i');
    const headRe = /^(?:pillar|pilar|domain|dominio|domínio|area|área|section|secci[oó]n|chapter|cap[ií]tulo)\s*([A-Za-z0-9.]*)\s*[:.\-–—]\s*(.{3,90})$/i;
    const numHeadRe = /^(\d{1,2})(?:[.)]|\s)\s*([A-ZÁÉÍÓÚÑ][^\d|]{3,80})$/;
    const subHeadRe = /^(\d{1,2}\.\d{1,2})(?:[.)]|\s)\s*([A-ZÁÉÍÓÚÑ][^\d|]{3,80})$/;
    const comps = []; const rawVals = []; const heads = {}; const subHeads = {};
    let curP = '', curS = '', unknown = 0;
    lines.forEach(l => {
      const m = l.match(rowRe2);
      if (m) {
        let note = clean(m[4] || '').replace(new RegExp('^(?:' + WORDS + ')\\b[\\s\\-–—:]*', 'i'), '');
        const ref = m[1];
        const hasDigit = /\d/.test(ref);
        if (hasDigit) { rawVals.push(+m[3]); comps.push({ pillar: curP, sub: curS, ref, name: clean(m[2]), raw: +m[3], level: null, note }); return; }
      }
      let h = l.match(headRe);
      if (h) { curP = clean(h[2]); curS = ''; if (h[1]) heads[h[1]] = curP; return; }
      h = l.match(subHeadRe);
      if (h && !/\s\d+\s*(\/\s*5)?$/.test(l)) { curS = clean(h[2]); subHeads[h[1]] = curS; return; }
      h = l.match(numHeadRe);
      if (h && !/\d$/.test(l)) { curP = clean(h[2]); curS = ''; heads[h[1]] = curP; return; }
      unknown++;
    });
    let scaleHint = null; const sh = String(text || '').replace(/[–—]/g, '-').match(/(?:scale|escala)[^.\n]{0,40}?(\d{1,3})\s*(?:-|to|a)\s*(\d{1,3})|(\d{1,3})\s*(?:-|to|a)\s*(\d{1,3})\s*(?:scale|escala)/i);
    if (sh) { const k = (sh[1] || sh[3]) + '-' + (sh[2] || sh[4]); if (SCALES[k]) scaleHint = k; }
    return { comps, rawVals, heads, subHeads, unknown, scaleHint };
  }

  /* ───────────── modelo común ───────────── */
  function groupModel(comps, opts) {
    opts = opts || {};
    const prefix = c => { const m = /^([A-Za-z]{1,6})[-_.]?\d/.exec(c.ref || ''); if (m) return m[1].toUpperCase(); const n = /^(\d{1,2})\./.exec(c.ref || ''); return n ? n[1] : ''; };
    const order = []; const P = {};
    comps.forEach(c => {
      let pn = c.pillar || (opts.heads && opts.heads[prefix(c)]) || (prefix(c) ? 'Pillar ' + prefix(c) : 'Pillar 1');
      pn = clean(pn);
      if (!P[pn]) { P[pn] = { name: pn, subs: [], subMap: {} }; order.push(P[pn]); }
      const sn = clean(c.sub || (opts.subHeads && c.ref && opts.subHeads[(c.ref.match(/^(\d{1,2}\.\d{1,2})/) || [])[1]]) || pn);
      if (!P[pn].subMap[sn]) { const s = { name: sn, comps: [] }; P[pn].subMap[sn] = s; P[pn].subs.push(s); }
      P[pn].subMap[sn].comps.push(c);
    });
    return order.map(p => ({ name: p.name, subs: p.subs }));
  }

  /* Devuelve { pillars, scale, rawScale, stats, warnings, mode } */
  function derive(input, opts) {
    opts = opts || {};
    let parsed = null, mode = '';
    if (input && input.rows) { parsed = parseTable(input.rows); mode = 'table'; }
    if (!parsed || !parsed.comps.length) {
      const txt = input && input.text != null ? input.text : (input && input.rows ? input.rows.map(r => (r || []).join('  ')).join('\n') : '');
      const t = parseText(txt);
      if (t.comps.length) { parsed = t; mode = 'text'; }
    }
    const warnings = [];
    if (!parsed || !parsed.comps.length) return { pillars: [], scale: '1-5', mode: '', stats: { pillars: 0, subs: 0, comps: 0, rated: 0 }, warnings: ['none'] };
    const comps = parsed.comps;
    const scale = opts.scale || parsed.scaleHint || detectScale(parsed.rawVals);
    comps.forEach(c => { if (c.raw != null) c.level = toLevel(c.raw, scale); });
    const pillars = groupModel(comps, parsed);
    let subs = 0, rated = 0; pillars.forEach(p => { subs += p.subs.length; p.subs.forEach(s => s.comps.forEach(c => { if (c.level) rated++; })); });
    if (rated < comps.length) warnings.push('unrated:' + (comps.length - rated));
    if (pillars.length === 1) warnings.push('onepillar');
    if (scale !== '1-5') warnings.push('rescaled:' + scale);
    if (parsed.unknown > 0 && mode === 'text') warnings.push('skipped:' + parsed.unknown);
    return { pillars, scale, mode, stats: { pillars: pillars.length, subs, comps: comps.length, rated }, warnings };
  }

  /* ───────────── armado del framework (MD en el formato del motor) ───────────── */
  const GEN = {
    en: [n => `There is no capability for “${n}”. It is not performed or has not been recognized as a need.`, n => `“${n}” is performed informally and ad hoc, without documentation, defined ownership or consistent execution.`, n => `“${n}” is documented, has an assigned owner and is applied consistently across the organization.`, n => `“${n}” is measured with metrics, reviewed on a regular cadence and corrected when it deviates from target.`, n => `“${n}” is continuously improved, benchmarked against leading practice and adapted proactively to new threats.`],
    es: [n => `No existe capacidad para «${n}». No se realiza o no se ha reconocido como una necesidad.`, n => `«${n}» se realiza de manera informal y ad hoc, sin documentación, responsable definido ni ejecución consistente.`, n => `«${n}» está documentado, tiene un responsable asignado y se aplica de forma consistente en la organización.`, n => `«${n}» se mide con métricas, se revisa periódicamente y se corrige cuando se desvía de la meta.`, n => `«${n}» se mejora continuamente, se compara con las mejores prácticas y se adapta de forma proactiva a nuevas amenazas.`],
    pt: [n => `Não existe capacidade para «${n}». Não é realizado ou não foi reconhecido como necessidade.`, n => `«${n}» é realizado de modo informal e ad hoc, sem documentação, responsável definido nem execução consistente.`, n => `«${n}» está documentado, tem responsável designado e é aplicado de forma consistente na organização.`, n => `«${n}» é medido com métricas, revisado periodicamente e corrigido quando se desvia da meta.`, n => `«${n}» é continuamente aprimorado, comparado com as melhores práticas e adaptado proativamente a novas ameaças.`]
  };
  const SCALE_NOTE = { en: 'Level descriptors were generated from the standard five-level maturity scale because the source assessment did not include them. Replace them with the institution’s own criteria when available.', es: 'Los descriptores de nivel se generaron con la escala estándar de cinco niveles porque el assessment de origen no los incluía. Reemplázalos por los criterios propios de la institución cuando los tengas.', pt: 'Os descritores de nível foram gerados com a escala padrão de cinco níveis porque o assessment de origem não os incluía. Substitua-os pelos critérios da instituição quando disponíveis.' };

  function buildFramework(model, o) {
    o = o || {}; const lang = GEN[o.lang] ? o.lang : 'en';
    const title = clean(o.title) || 'Assessment';
    const L = [];
    L.push('<!-- title: ' + title + ' -->');
    L.push('<!-- assessmentName: ' + (clean(o.assessmentName) || title) + ' -->');
    L.push('<!-- framework: ' + (clean(o.framework) || 'Derived framework') + ' -->');
    L.push('<!-- frameworkShort: ' + (clean(o.frameworkShort) || 'DERIVED') + ' -->');
    L.push('');
    const answers = {}, notes = {}, refs = {};
    model.pillars.forEach((p, pi) => {
      const pid = 'P' + (pi + 1);
      L.push('# ' + pid + ': ' + p.name); L.push('');
      L.push('*' + SCALE_NOTE[lang] + '*'); L.push('');
      p.subs.forEach((s, si) => {
        L.push('## ' + (pi + 1) + '.' + (si + 1) + ' — ' + s.name); L.push('');
        s.comps.forEach((c, ci) => {
          const id = (pi + 1) + '.' + (si + 1) + '.' + (ci + 1);
          L.push('### ' + id + ' · ' + c.name.replace(/·/g, '-')); L.push('');
          L.push('| Level | Descriptor |'); L.push('|:---:|:---|');
          GEN[lang].forEach((f, i) => L.push('| **' + (i + 1) + '** | ' + f(c.name.replace(/\|/g, '/')) + ' |'));
          L.push('');
          if (c.level) answers[id] = c.level;
          if (c.note || c.ref) notes[id] = { ref: c.ref || '', note: c.note || '' };
          refs[id] = c.ref || '';
        });
      });
    });
    return { md: L.join('\n'), answers, notes, refs };
  }

  return { derive, buildFramework, classifyHeader, parseTable, parseText, detectScale, toLevel, labelLevel, SCALES, strip, clean };
});
