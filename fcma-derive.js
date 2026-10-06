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
  const norm = s => strip(s).replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

  /* palabras de madurez (cuando el documento no trae su propia leyenda) */
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
  /* controles: fuerza de mitigación y riesgo (el riesgo se invierte: menos riesgo = más madurez) */
  const STRENGTH_ONLY = /^(strong|fuerte|forte|effective|efectivo|efetivo|satisfactory|satisfactorio|adequate|adecuado|adequado|weak|debil|fraco|ineffective|inefectivo|inadequate|inadecuado|unsatisfactory|needs improvement|partially effective)$/;
  const STRENGTH = { strong: 5, fuerte: 5, forte: 5, effective: 5, efectivo: 5, efetivo: 5, satisfactory: 4, satisfactorio: 4, adequate: 3, adecuado: 3, adequado: 3, moderate: 3, medium: 3, medio: 3, 'partially effective': 3, 'needs improvement': 2, weak: 1, debil: 1, fraco: 1, ineffective: 1, inefectivo: 1, inadequate: 1, inadecuado: 1, unsatisfactory: 1 };
  const RISK_ONLY = /^(low|bajo|baixo|high|alto|very low|very high|critical|critico|extreme|muy alto|muy bajo|elevated)$/;
  function riskMap(distinct) {
    const d = distinct.map(norm);
    const five = d.some(x => /^(very high|very low|critical|critico|extreme|muy alto|muy bajo)$/.test(x));
    const m = {};
    ['low', 'bajo', 'baixo'].forEach(k => m[k] = five ? 4 : 5); ['very low', 'muy bajo'].forEach(k => m[k] = 5);
    ['medium', 'moderate', 'medio', 'moderado', 'media'].forEach(k => m[k] = 3);
    ['high', 'alto', 'alta', 'elevated'].forEach(k => m[k] = five ? 2 : 1); ['very high', 'muy alto', 'critical', 'critico', 'extreme'].forEach(k => m[k] = 1);
    return m;
  }

  /* ───────────── encabezados ───────────── */
  const HDR = {
    skip: /benchmark|industry|comparison|comparacion|direction|trend|tendencia|subtotal|composite|factor score|category score|weighted|ponderado|\bgap\b|brecha/,
    target: /^(target|objetivo|meta|to[- ]?be|desired|deseado|esperado|expected|max|maximo|maximum)\b/,
    weight: /weight|weighting|ponderacion|^peso\b/,
    risk: /inherent|inherente|residual|\brisk\b|riesgo|risco/,
    mitig: /mitigat|mitigacion|control strength|control effectiveness|effectiveness|efectividad|eficacia|fortaleza del control/,
    pillar: /^(pillar|pilar|domain|dominio|category|categoria|area|section|seccion|secao|function|funcion|funcao|theme|tema|chapter|capitulo)$/,
    sub: /^(sub[- ]?(pillar|pilar|domain|dominio|category|categoria|dimension|area|topic)|subcategory|subcategoria|sub|topic|group|grupo|subdomain|subdominio|subarea)$/,
    id: /^(id|ref|reference|referencia|code|codigo|cod|no|num|number|numero|#|control id|id control|item|nº|n)$/,
    comp: /^(control|controls|question|questions|pregunta|preguntas|pergunta|component|componente|requirement|requisito|requerimiento|criterion|criterio|practice|practica|statement|enunciado|name|nombre|nome|control name|nombre del control|capability|capacidad|capacidade|assessment item|descripcion del control|control description|factor|factors|factor name|subcategory name)$/,
    desc: /^(description|descripcion|descricao|detail|detalle|detalhe)$/,
    level: /^(score|puntaje|puntuacion|pontuacao|rating|calificacion|classificacao|level|nivel|maturity|madurez|maturidade|current|actual|atual|result|resultado|assessed|as[- ]?is|response|respuesta|resposta|nota|maturity level|current score|current level|nivel actual|score actual)$/,
    note: /^(comment|comments|comentario|comentarios|evidence|evidencia|observation|observations|observacion|observaciones|observacao|notes|notas|justification|justificacion|finding|hallazgo|rationale|remarks)$/
  };
  function classifyHeader(cell) {
    const t = strip(cell).replace(/[*_:()0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    const raw = strip(cell).replace(/[*_:]/g, '').trim();
    if (raw.length > 40 || t.split(' ').length > 5) return null; /* un encabezado es corto */
    const loose = t.split(' ').length <= 3;
    if (!t && raw !== '#') return null;
    if (raw === '#') return 'id';
    if (HDR.skip.test(t)) return 'skip';
    if (HDR.target.test(t)) return 'target';
    if (HDR.weight.test(t)) return 'weight';
    if (HDR.mitig.test(t)) return 'mitig';
    if (/(^|\s)(inherent|inherente|residual)(\s|$)/.test(t)) return 'risk';
    for (const k of ['sub', 'pillar', 'id', 'comp', 'desc', 'level', 'note']) if (HDR[k].test(t)) return k;
    if (HDR.risk.test(t) && /level|nivel|rating|score|residual/.test(t)) return 'risk';
    if (loose && /score|puntaj|rating|calific|maturity|madurez|nivel|level/.test(t)) return 'level';
    if (loose && /comment|comentar|evidenc|observ|notes|justific/.test(t)) return 'note';
    if (/(^| )(function|funcion|domain|dominio|pillar|pilar|category|categoria|area|theme)( |$)/.test(t)) return 'pillar';
    if (loose && /control|pregunta|question|requisit|component/.test(t)) return 'comp';
    return null;
  }
  function headerMap(cells) {
    const m = {}; let n = 0; const dup = [];
    (cells || []).forEach((c, j) => { const k = classifyHeader(c); if (!k) return; if (k === 'pillar' && m.pillar != null) { dup.push(j); return; } if (m[k] == null) { m[k] = j; n++; } });
    dup.forEach(j => { if (m.comp == null) { m.comp = j; n++; } else if (m.sub == null) { m.sub = j; n++; } });
    if (m.comp == null && m.desc != null) { m.comp = m.desc; delete m.desc; }
    const filled = (cells || []).filter(c => clean(c) !== '').length;
    const ok = filled > 0 && n >= filled * 0.5 && m.comp != null && n >= 2 && (m.level != null || m.pillar != null || m.id != null || m.mitig != null || m.risk != null);
    return ok ? m : null;
  }

  /* ───────────── escala numérica ───────────── */
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
  const NUM_RE = /^\s*(\d+(?:[.,]\d+)?)\s*(%|\/\s*\d+)?\s*$/;
  function parseNum(t) { const m = NUM_RE.exec(String(t == null ? '' : t)); return m ? parseFloat(m[1].replace(',', '.')) : null; }
  function scaleFromText(text) {
    const sh = String(text || '').replace(/[–—]/g, '-').match(/(?:scale|escala|scores?|notas?|ratings?)[^.\n]{0,40}?(\d{1,3})\s*(?:-|to|a)\s*(\d{1,3})\s*(?:scale|escala)?/i);
    return sh && SCALES[sh[1] + '-' + sh[2]] ? sh[1] + '-' + sh[2] : null;
  }

  /* ───────────── leyenda de niveles del propio documento ───────────── */
  function findLegend(tables) {
    for (const t of tables) {
      const rows = (t.rows || []).map(r => (r || []).map(clean));
      for (let i = 0; i < rows.length; i++) {
        const run = [];
        let j = i;
        while (j < rows.length && rows[j][0] && /^[A-Za-z][A-Za-z \-]+$/.test(rows[j][0]) && rows[j][0].length <= 40 && rows[j][0].split(' ').length <= 4 && (rows[j][1] || '').length >= 25 && !/^\d+%?$/.test(rows[j][0])) { run.push({ label: rows[j][0], desc: rows[j][1] }); j++; }
        if (run.length < 3 || run.length > 7) { if (run.length) i = j; continue; }
        const head = (rows[i - 1] || []).join(' ');
        const labs = run.map(r => norm(r.label));
        const known = labs.filter(l => labelLevel(l)).length;
        if (new Set(labs).size !== labs.length) continue;
        if (/risk|riesgo|risco/i.test(head) && known < 2) continue;
        if (/maturity|madurez|maturidade|capability level|nivel de/i.test(head) || known >= 2) return run.map((r, k) => ({ label: r.label, desc: r.desc, level: run.length === 5 ? k + 1 : Math.round(1 + k * 4 / (run.length - 1)) }));
        i = j;
      }
    }
    return null;
  }

  /* ───────────── bloques de tabla ───────────── */
  const TOTAL_RE = /^(total|subtotal|overall|grand total|promedio|average|global|composite|summary)\b|sub-?total|weighted (composite )?score|total weighted/i;
  const HEADING_RE = /^(pillar|pilar|domain|dominio|dom[ií]nio|section|secci[oó]n|area|[aá]rea|chapter|cap[ií]tulo|function|funci[oó]n|\d{1,2}[.)])/i;
  const looksHeading = t => t.length >= 3 && t.length < 90 && !/[.;,]$/.test(t) && t.split(' ').length <= 12;
  const ACR = /^(OFAC|BSA|AML|KYC|CDD|EDD|SAR|CTR|NIST|CSF|ISO|PCI|GDPR|FATF|ERM|TPRM|IT|ID|AI|ML|IAM|SOC|DLP|PII|FFIEC|COBIT|CIS|SWIFT|PIX)$/;
  const tidyCaps = t => { t = clean(t); if (t.length < 4 || t !== t.toUpperCase() || !/[A-Z]{3}/.test(t)) return t; return t.replace(/[A-Za-z]+/g, w => ACR.test(w) || w.length <= 2 ? w : w[0] + w.slice(1).toLowerCase()); };
  const stripHead = t => clean(t).replace(/^(pillar|pilar|domain|dominio|dom[ií]nio|section|secci[oó]n|area|[aá]rea|chapter|cap[ií]tulo)\s*[\w.]*\s*[:.\-–—]\s*/i, '');

  function findBlocks(rows, tableTitle) {
    const blocks = []; let cur = null; let titleRows = [];
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i] || [];
      if (r.length === 1 && r[0] === '\u2403') { cur = null; titleRows = []; continue; } /* fin de tabla (lo marca el lector de PDF) */
      const m = headerMap(r);
      if (m) {
        const sig = JSON.stringify(m) + '|' + r.map(c => norm(c)).join('~');
        if (cur && cur.sig === sig) continue; /* encabezado repetido (salto de página) */
        const last = titleRows.slice(-3).filter(x => x.length >= 3 && x.length < 90);
        let initP = '';
        if (m.pillar == null) { const h = last.slice().reverse().find(x => HEADING_RE.test(x)); if (h) initP = stripHead(h); }
        cur = { sig, map: m, header: r, rows: [], title: clean(last.length ? last[last.length - 1] : (tableTitle || '')), initP, startRow: i };
        blocks.push(cur); titleRows = []; continue;
      }
      const ne = r.filter(x => clean(x) !== '');
      if (ne.length === 1) { titleRows.push(clean(ne[0])); if (titleRows.length > 6) titleRows.shift(); } else if (ne.length > 1) titleRows = [];
      if (cur) cur.rows.push(r);
    }
    return blocks;
  }

  function colType(vals, legendMap) {
    const v = vals.map(clean).filter(x => x !== '' && !/^(n\/?a|na|-|—|–)$/i.test(x));
    if (v.length < 2) return null;
    const need = Math.ceil(v.length * 0.7);
    if (v.filter(x => { const n = parseNum(x); return n != null && n >= 0 && n <= 100; }).length >= need) return 'numeric';
    const nv = v.map(norm);
    if (legendMap && nv.filter(x => legendMap[x] != null).length >= need) return 'legend';
    if (nv.filter(x => STRENGTH_ONLY.test(x)).length >= 1 && nv.filter(x => STRENGTH[x] != null).length >= need) return 'strength';
    if (nv.filter(x => RISK_ONLY.test(x)).length >= 1 && nv.filter(x => riskMap([x])[x] != null).length >= need) return 'risk';
    if (nv.filter(x => labelLevel(x)).length >= need) return 'ordinal';
    return null;
  }
  const RANK = { level: 1, mitig: 2, risk: 5 };
  function candidatesOf(block, legendMap) {
    const out = [];
    ['level', 'mitig', 'risk'].forEach(kind => {
      (block.header || []).forEach((h, j) => {
        if (classifyHeader(h) !== kind || j === block.map.comp) return;
        const type = colType(block.items.map(it => it.r[j]), legendMap);
        if (!type) return;
        let rank = RANK[kind];
        if (kind === 'risk') rank = /residual/.test(strip(h)) ? 3 : /inherent|inherente/.test(strip(h)) ? 4 : 5;
        if (kind === 'level' && type === 'risk') rank = 5;
        out.push({ col: j, header: clean(h).replace(/\d+$/, ''), kind, type, rank, key: norm(h).replace(/\d+$/, '').trim() + '|' + type, inverted: type === 'risk' });
      });
    });
    return out.sort((a, b) => a.rank - b.rank);
  }

  function parseBlock(block, legendMap) {
    const map = Object.assign({}, block.map); const items = []; let curP = block.initP || '', curS = ''; let pending = [];
    const rows = block.rows;
    /* una columna «Pilar» que solo trae códigos (P0, P1…) es un id, no un nombre de pilar */
    if (map.pillar != null && map.id == null) { const v = rows.filter(r => r.filter(x => clean(x) !== '').length > 1).map(r => clean(r[map.pillar])).filter(Boolean); if (v.length >= 2 && v.every(x => /^[A-Za-z]{0,2}\d{1,2}$/.test(x))) { map.id = map.pillar; delete map.pillar; } }
    let lastItemRow = -9;
    rows.forEach((r, ri) => {
      const cell = j => (j == null ? '' : clean(r[j]));
      const ne = r.filter(x => clean(x) !== '').length;
      let name = cell(map.comp);
      if (map.pillar != null && cell(map.pillar)) curP = cell(map.pillar);
      if (map.sub != null && cell(map.sub)) curS = cell(map.sub);
      const rowText = clean(r.join(' '));
      if (TOTAL_RE.test(name) || (!name && TOTAL_RE.test(rowText))) {
        const tn = (name || rowText).replace(/\s*(sub-?total|weighted|composite|total)\b.*$/i, '').replace(/[*:]+$/, '').trim();
        const hasNum = r.some(x => /^\s*\d+([.,]\d+)?%?\s*$/.test(clean(x)));
        if (hasNum && pending.length && lastItemRow === ri - 1 && tn && tn.length < 60 && !/^(total|overall|grand)$/i.test(tn)) { pending.forEach(it => { if (!it.pillar) it.pillar = tn; }); }
        pending = []; return;
      }
      if (!name) {
        if (ne === 1 && map.pillar == null) { const t = clean(r.find(x => clean(x) !== '')); if (looksHeading(t) && (HEADING_RE.test(t) || t === t.toUpperCase() || t.split(' ').length <= 6)) { curP = stripHead(t); curS = ''; } }
        return;
      }
      if (map.pillar == null && ne === 1 && name.length < 90 && map.id == null && looksHeading(name)) { curP = name; curS = ''; return; }
      let ref = cell(map.id), nm = name;
      const pm = /\(([A-Za-z]{1,5}[.\-][A-Za-z0-9]{1,5})\)\s*$/.exec(nm); if (pm) { ref = ref || pm[1]; nm = nm.replace(pm[0], '').trim(); }
      nm = nm.replace(/(?<=[a-z])\d{1,2}$/, '');
      const it = { r, pillar: curP, sub: curS, ref, name: nm, note: [map.note != null ? cell(map.note) : '', map.desc != null ? cell(map.desc) : ''].filter(Boolean).join(' · ') };
      items.push(it); lastItemRow = ri; if (!curP) pending.push(it);
    });
    block.items = items;
    block.cands = candidatesOf(block, legendMap);
    block.hasPending = items.some(it => !it.pillar);
    return block;
  }

  /* ───────────── modo texto (PDF / TXT / MD sin tablas) ───────────── */
  const ID_RE = '(?:[A-Za-z]{1,6}[-_.]?\\d{1,3}(?:\\.\\d{1,3}){0,3}|\\d{1,2}(?:\\.\\d{1,3}){1,3})';
  const WORDS = LABELS.map(a => a.join('|')).join('|').replace(/\s/g, '\\s');
  function parseText(text) {
    const lines = String(text || '').split(/\r?\n/).map(l => l.replace(/ /g, ' ').trim()).filter(Boolean);
    const rowRe2 = new RegExp('^(' + ID_RE + ')\\s+(.{4,160}?)\\s+([0-5])(?:\\s*\\/\\s*5)?(?:\\s+(.*))?$', 'i');
    const headRe = /^(?:pillar|pilar|domain|dominio|domínio|area|área|section|secci[oó]n|chapter|cap[ií]tulo)\s*([A-Za-z0-9.]*)\s*[:.\-–—]\s*(.{3,90})$/i;
    const numHeadRe = /^(\d{1,2})(?:[.)]|\s)\s*([A-ZÁÉÍÓÚÑ][^\d|]{3,80})$/;
    const subHeadRe = /^(\d{1,2}\.\d{1,2})(?:[.)]|\s)\s*([A-ZÁÉÍÓÚÑ][^\d|]{3,80})$/;
    const comps = []; const rawVals = []; const heads = {}; const subHeads = {};
    let curP = '', curS = '', unknown = 0;
    lines.forEach(l => {
      const m = l.match(rowRe2);
      if (m) {
        const note = clean(m[4] || '').replace(new RegExp('^(?:' + WORDS + ')\\b[\\s\\-–—:]*', 'i'), '');
        if (/\d/.test(m[1])) { rawVals.push(+m[3]); comps.push({ pillar: curP, sub: curS, ref: m[1], name: clean(m[2]), raw: +m[3], level: null, note }); return; }
      }
      let h = l.match(headRe);
      if (h) { curP = clean(h[2]); curS = ''; if (h[1]) heads[h[1]] = curP; return; }
      h = l.match(subHeadRe);
      if (h && !/\s\d+\s*(\/\s*5)?$/.test(l)) { curS = clean(h[2]); subHeads[h[1]] = curS; return; }
      h = l.match(numHeadRe);
      if (h && !/\d$/.test(l)) { curP = clean(h[2]); curS = ''; heads[h[1]] = curP; return; }
      unknown++;
    });
    return { comps, rawVals, heads, subHeads, unknown, scaleHint: scaleFromText(text) };
  }

  /* ───────────── modelo común ───────────── */
  const SUB_LBL = { en: 'Sub-dimension', es: 'Subdimensión', pt: 'Subdimensão' }, PIL_LBL = { en: 'Pillar', es: 'Pilar', pt: 'Pilar' };
  function groupModel(comps, o) {
    o = o || {}; const lang = SUB_LBL[o.lang] ? o.lang : 'en';
    const prefix = c => { const m = /^([A-Za-z]{1,6})[-_.]?\d/.exec(c.ref || ''); if (m) return m[1].toUpperCase(); const n = /^(\d{1,2})\./.exec(c.ref || ''); return n ? n[1] : ''; };
    const dotted = comps.filter(c => /^\d{1,2}\.\d{1,2}\.\d{1,3}$/.test(c.ref || '')).length >= comps.length * 0.8;
    const order = []; const P = {};
    comps.forEach(c => {
      const dm = /^(\d{1,2})\.(\d{1,2})\./.exec(c.ref || '');
      let pn = c.pillar || (dm && o.dict && o.dict[+dm[1]]) || (o.heads && o.heads[prefix(c)]) || (prefix(c) ? PIL_LBL[lang] + ' ' + prefix(c) : PIL_LBL[lang] + ' 1');
      pn = tidyCaps(pn);
      if (!P[pn]) { P[pn] = { name: pn, subs: [], subMap: {} }; order.push(P[pn]); }
      let sn = c.sub || (o.subHeads && c.ref && o.subHeads[(c.ref.match(/^(\d{1,2}\.\d{1,2})/) || [])[1]]);
      if (!sn && dotted && dm) sn = SUB_LBL[lang] + ' ' + dm[1] + '.' + dm[2];
      sn = clean(sn || pn);
      if (!P[pn].subMap[sn]) { const s = { name: sn, comps: [] }; P[pn].subMap[sn] = s; P[pn].subs.push(s); }
      P[pn].subMap[sn].comps.push(c);
    });
    return order.map(p => ({ name: p.name, subs: p.subs }));
  }
  function summarize(pillars, comps) {
    let subs = 0, rated = 0; pillars.forEach(p => { subs += p.subs.length; p.subs.forEach(s => s.comps.forEach(c => { if (c.level) rated++; })); });
    return { pillars: pillars.length, subs, comps: comps.length, rated };
  }
  const NONE = w => ({ pillars: [], scale: '1-5', mode: '', stats: { pillars: 0, subs: 0, comps: 0, rated: 0 }, warnings: [w || 'none'], ratingOptions: [], rating: null, legend: null });

  /* Entrada: { tables:[{title,rows}] } | { rows } | { text }. Salida: pillars/stats/warnings/rating/legend/ratingOptions */
  function derive(input, opts) {
    opts = opts || {}; input = input || {};
    const tables = input.tables ? input.tables : (input.rows ? [{ title: '', rows: input.rows }] : []);
    const warnings = [];
    const legend = findLegend(tables); const legendMap = {}; if (legend) legend.forEach(l => { legendMap[norm(l.label)] = l.level; });
    let blocks = [];
    tables.forEach(t => findBlocks(t.rows || [], t.title).forEach(b => blocks.push(parseBlock(b, legendMap))));
    blocks = blocks.filter(b => b.items.length);
    let parsed = null, mode = '', ratingOptions = [], rating = null;
    if (blocks.length) {
      /* opciones de columna de calificación (por clave) */
      const stat = {};
      blocks.forEach(b => b.cands.forEach(c => { const s = stat[c.key] || (stat[c.key] = { key: c.key, header: c.header, type: c.type, rank: c.rank, inverted: c.inverted, n: 0 }); s.n += b.items.length; s.rank = Math.min(s.rank, c.rank); }));
      ratingOptions = Object.values(stat).sort((a, b) => a.rank - b.rank || b.n - a.n);
      const chosenKey = opts.ratingKey && stat[opts.ratingKey] ? opts.ratingKey : (ratingOptions[0] && ratingOptions[0].key);
      rating = chosenKey ? stat[chosenKey] : null;
      /* tablas que comparten la columna elegida; si no hay columna de calificación se usa el bloque más grande */
      let used = rating ? blocks.filter(b => b.cands.some(c => c.key === chosenKey)) : [blocks.slice().sort((a, b) => b.items.length - a.items.length)[0]];
      /* diccionario de pilares: tabla-resumen con ids tipo P0, P1… que NO es la tabla usada */
      const dict = {};
      blocks.filter(b => !used.includes(b)).forEach(b => { const ids = b.items.filter(it => /^[A-Za-z]{0,2}\d{1,2}$/.test(it.ref)); if (ids.length >= 2 && ids.length === b.items.length) ids.forEach(it => { const n = parseInt(it.ref.replace(/\D/g, ''), 10); if (dict[n] == null) dict[n] = it.name; }); });
      const comps = []; const rawVals = []; let hint = null;
      used.forEach(b => {
        const cd = rating ? b.cands.find(c => c.key === chosenKey) : null;
        b.items.forEach(it => {
          let pillar = it.pillar || '';
          const dm0 = /^(\d{1,2})\./.exec(it.ref || ''); if (!pillar && !(dm0 && dict[+dm0[1]]) && b.title) pillar = stripHead(b.title);
          const c = { pillar, sub: it.sub, ref: it.ref, name: it.name, note: it.note, raw: null, level: null, val: cd ? clean(it.r[cd.col]) : '' };
          if (cd && c.val !== '') {
            if (cd.type === 'numeric') { const n = parseNum(c.val); if (n != null) { c.raw = n; rawVals.push(n); } }
          }
          comps.push(c);
        });
        if (cd && cd.type === 'numeric' && !hint) { const hm = clean(b.header[cd.col]).replace(/[–—]/g, '-').match(/(\d{1,3})\s*(?:-|to|a)\s*(\d{1,3})/i); if (hm && SCALES[hm[1] + '-' + hm[2]]) hint = hm[1] + '-' + hm[2]; else if (/%/.test(b.header[cd.col] || '')) hint = '0-100'; }
      });
      let scaleHint = hint || scaleFromText(tables.map(t => (t.rows || []).map(r => (r || []).join(' ')).join('\n')).join('\n') + '\n' + (input.text || ''));
      parsed = { comps, rawVals, scaleHint, heads: null, subHeads: null, dict };
      mode = 'table';
    }
    if (!parsed || !parsed.comps.length) {
      const txt = input.text != null ? input.text : tables.map(t => (t.rows || []).map(r => (r || []).join('  ')).join('\n')).join('\n');
      const t = parseText(txt);
      if (t.comps.length) { parsed = t; mode = 'text'; }
    }
    if (!parsed || !parsed.comps.length) return NONE('none');
    const comps = parsed.comps;
    const scale = opts.scale || parsed.scaleHint || detectScale(parsed.rawVals);
    let map = null;
    if (mode === 'table' && rating) {
      if (rating.type === 'risk') { const d = [...new Set(comps.map(c => c.val).filter(Boolean))]; map = riskMap(d); }
    }
    comps.forEach(c => {
      if (mode === 'text') { if (c.raw != null) c.level = toLevel(c.raw, scale); return; }
      if (!c.val) return;
      const v = norm(c.val);
      if (rating.type === 'numeric') { if (c.raw != null) c.level = toLevel(c.raw, scale); }
      else if (rating.type === 'legend') c.level = legendMap[v] || null;
      else if (rating.type === 'strength') c.level = STRENGTH[v] || null;
      else if (rating.type === 'risk') c.level = map[v] || null;
      else if (rating.type === 'ordinal') c.level = labelLevel(c.val);
    });
    const pillars = groupModel(comps, { heads: parsed.heads, subHeads: parsed.subHeads, dict: parsed.dict, lang: opts.lang });
    const stats = summarize(pillars, comps);
    if (stats.rated < comps.length) warnings.push('unrated:' + (comps.length - stats.rated));
    if (pillars.length === 1) warnings.push('onepillar');
    if (mode === 'table' && rating && rating.type === 'numeric' && scale !== '1-5') warnings.push('rescaled:' + scale);
    if (parsed.unknown > 0 && mode === 'text') warnings.push('skipped:' + parsed.unknown);
    /* gate de cordura: demasiados pilares con casi ningún componente = estructura mal detectada */
    if (stats.comps >= 6 && stats.pillars > stats.comps * 0.5) return Object.assign(NONE('fragmented'), { stats });
    if (stats.rated === 0 && mode === 'text') return NONE('none');
    return { pillars, scale: mode === 'table' && rating && rating.type !== 'numeric' ? '1-5' : scale, mode, stats, warnings, ratingOptions, rating: rating ? { header: rating.header, key: rating.key, type: rating.type, inverted: rating.type === 'risk', map: rating.type === 'risk' ? map : rating.type === 'strength' ? { Strong: 5, Medium: 3, Weak: 1 } : null } : null, legend };
  }

  /* ───────────── armado del framework (MD en el formato del motor) ───────────── */
  const GEN = {
    en: [n => `There is no capability for “${n}”. It is not performed or has not been recognized as a need.`, n => `“${n}” is performed informally and ad hoc, without documentation, defined ownership or consistent execution.`, n => `“${n}” is documented, has an assigned owner and is applied consistently across the organization.`, n => `“${n}” is measured with metrics, reviewed on a regular cadence and corrected when it deviates from target.`, n => `“${n}” is continuously improved, benchmarked against leading practice and adapted proactively to new threats.`],
    es: [n => `No existe capacidad para «${n}». No se realiza o no se ha reconocido como una necesidad.`, n => `«${n}» se realiza de manera informal y ad hoc, sin documentación, responsable definido ni ejecución consistente.`, n => `«${n}» está documentado, tiene un responsable asignado y se aplica de forma consistente en la organización.`, n => `«${n}» se mide con métricas, se revisa periódicamente y se corrige cuando se desvía de la meta.`, n => `«${n}» se mejora continuamente, se compara con las mejores prácticas y se adapta de forma proactiva a nuevas amenazas.`],
    pt: [n => `Não existe capacidade para «${n}». Não é realizado ou não foi reconhecido como necessidade.`, n => `«${n}» é realizado de modo informal e ad hoc, sem documentação, responsável definido nem execução consistente.`, n => `«${n}» está documentado, tem responsável designado e é aplicado de forma consistente na organização.`, n => `«${n}» é medido com métricas, revisado periodicamente e corrigido quando se desvia da meta.`, n => `«${n}» é continuamente aprimorado, comparado com as melhores práticas e adaptado proativamente a novas ameaças.`]
  };
  const SCALE_NOTE = { en: 'Level descriptors were generated from the standard five-level maturity scale because the source assessment did not include them. Replace them with the institution’s own criteria when available.', es: 'Los descriptores de nivel se generaron con la escala estándar de cinco niveles porque el assessment de origen no los incluía. Reemplázalos por los criterios propios de la institución cuando los tengas.', pt: 'Os descritores de nível foram gerados com a escala padrão de cinco níveis porque o assessment de origem não os incluía. Substitua-os pelos critérios da instituição quando disponíveis.' };

  const LEG_NOTE = { en: 'Level descriptors come from the maturity scale defined in the source assessment (the same definition applies to every component).', es: 'Los descriptores de nivel provienen de la escala de madurez definida en el assessment de origen (la misma definición aplica a todos los componentes).', pt: 'Os descritores de nível vêm da escala de maturidade definida no assessment de origem (a mesma definição vale para todos os componentes).' };
  function buildFramework(model, o) {
    o = o || {}; const lang = GEN[o.lang] ? o.lang : 'en';
    const leg = model.legend && model.legend.length === 5 ? model.legend : null;
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
      L.push('*' + (leg ? LEG_NOTE[lang] : SCALE_NOTE[lang]) + '*'); L.push('');
      p.subs.forEach((s, si) => {
        L.push('## ' + (pi + 1) + '.' + (si + 1) + ' — ' + s.name); L.push('');
        s.comps.forEach((c, ci) => {
          const id = (pi + 1) + '.' + (si + 1) + '.' + (ci + 1);
          L.push('### ' + id + ' · ' + c.name.replace(/·/g, '-')); L.push('');
          L.push('| Level | Descriptor |'); L.push('|:---:|:---|');
          GEN[lang].forEach((f, i) => L.push('| **' + (i + 1) + '** | ' + (leg ? (leg[i].label + ' — ' + leg[i].desc).replace(/\|/g, '/') : f(c.name.replace(/\|/g, '/'))) + ' |'));
          L.push('');
          if (c.level) answers[id] = c.level;
          if (c.note || c.ref) notes[id] = { ref: c.ref || '', note: c.note || '' };
          refs[id] = c.ref || '';
        });
      });
    });
    return { md: L.join('\n'), answers, notes, refs };
  }

  return { derive, buildFramework, classifyHeader, headerMap, parseText, findLegend, detectScale, toLevel, labelLevel, SCALES, strip, clean };
});
