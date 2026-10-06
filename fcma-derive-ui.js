/* RiskAtlas · Interfaz del flujo "Generar framework desde un assessment existente".
   Depende de fcma-derive.js (núcleo), fcma-ai.js (estilos del modal y lector de PDF) y de los globales de index.html. */
(function () {
  if (typeof document === 'undefined' || !window.DERIVE) return;
  const D = window.DERIVE;
  const S = {
    en: { btn: 'Generate a framework from an existing assessment', cap: 'Already have an assessment done by the bank or sold by another provider? Upload it and RiskAtlas derives the pillars and components and recovers the original ratings.', title: 'Framework from an existing assessment', sub: 'Upload the assessment the institution already has (XLSX, CSV, PDF, TXT or MD). RiskAtlas detects its pillars, components and ratings and builds a framework you can use, edit and report on.', pick: '📎 Choose file', drop: 'XLSX, CSV, PDF, TXT, MD', reading: 'Reading the document…', errRead: 'The file could not be read.', errDocx: 'Word files are not supported. Export the assessment to PDF or XLSX and upload that.', errNone: 'No components were detected. The document needs a table or list with a component or control name and, ideally, a rating (for example: Ref, Control, Score).', pillars: 'Pillars', subs: 'Sub-dimensions', comps: 'Components', rated: 'With original rating', scale: 'Source rating scale', scaleNote: 'Ratings are converted to the 1–5 maturity scale.', name: 'Assessment name', detected: 'Detected structure', pillar: 'Pillar', n: 'Components', avg: 'Original avg (1–5)', back: 'Back', dl: 'Download framework (.md)', create: 'Create framework and load original assessment', cancel: 'Cancel', created: (p, c, r) => 'Framework created: ' + p + ' pillars, ' + c + ' components, ' + r + ' original ratings loaded.', w: { unrated: n => n + ' components have no rating in the source; they stay unanswered.', onepillar: 'Only one pillar was detected. If the source groups controls by domain, check the column or heading names.', rescaled: s => 'The source scale ' + s + ' was converted to 1–5.', skipped: n => n + ' lines were not recognized and ignored.' }, descNote: 'The source has no level descriptors, so standard five-level descriptors are generated. Replace them with the institution’s own criteria when you have them.', sheetUsed: s => 'Sheet used: ' + s },
    es: { btn: 'Generar un framework desde un assessment existente', cap: '¿Ya tienes un assessment hecho por el banco o vendido por otro proveedor? Súbelo y RiskAtlas deduce los pilares y componentes y recupera las calificaciones originales.', title: 'Framework desde un assessment existente', sub: 'Sube el assessment que la institución ya tiene (XLSX, CSV, PDF, TXT o MD). RiskAtlas detecta sus pilares, componentes y calificaciones y arma un framework que puedes usar, editar y reportar.', pick: '📎 Elegir archivo', drop: 'XLSX, CSV, PDF, TXT, MD', reading: 'Leyendo el documento…', errRead: 'No se pudo leer el archivo.', errDocx: 'Los archivos Word no están soportados. Exporta el assessment a PDF o XLSX y súbelo.', errNone: 'No se detectaron componentes. El documento necesita una tabla o lista con el nombre del componente o control y, idealmente, su calificación (por ejemplo: Ref, Control, Puntaje).', pillars: 'Pilares', subs: 'Subdimensiones', comps: 'Componentes', rated: 'Con calificación original', scale: 'Escala de calificación del origen', scaleNote: 'Las calificaciones se convierten a la escala de madurez 1–5.', name: 'Nombre del assessment', detected: 'Estructura detectada', pillar: 'Pilar', n: 'Componentes', avg: 'Prom. original (1–5)', back: 'Atrás', dl: 'Descargar framework (.md)', create: 'Crear framework y cargar el assessment original', cancel: 'Cancelar', created: (p, c, r) => 'Framework creado: ' + p + ' pilares, ' + c + ' componentes, ' + r + ' calificaciones originales cargadas.', w: { unrated: n => n + ' componentes no tienen calificación en el origen; quedan sin responder.', onepillar: 'Solo se detectó un pilar. Si el origen agrupa los controles por dominio, revisa los nombres de columna o de encabezado.', rescaled: s => 'La escala de origen ' + s + ' se convirtió a 1–5.', skipped: n => n + ' líneas no se reconocieron y se ignoraron.' }, descNote: 'El origen no trae descriptores por nivel, así que se generan descriptores estándar de cinco niveles. Reemplázalos por los criterios propios de la institución cuando los tengas.', sheetUsed: s => 'Hoja usada: ' + s },
    pt: { btn: 'Gerar um framework a partir de um assessment existente', cap: 'Já tem um assessment feito pelo banco ou vendido por outro fornecedor? Envie-o e o RiskAtlas deduz os pilares e componentes e recupera as classificações originais.', title: 'Framework a partir de um assessment existente', sub: 'Envie o assessment que a instituição já possui (XLSX, CSV, PDF, TXT ou MD). O RiskAtlas detecta pilares, componentes e classificações e monta um framework que você pode usar, editar e reportar.', pick: '📎 Escolher arquivo', drop: 'XLSX, CSV, PDF, TXT, MD', reading: 'Lendo o documento…', errRead: 'Não foi possível ler o arquivo.', errDocx: 'Arquivos Word não são suportados. Exporte o assessment para PDF ou XLSX e envie.', errNone: 'Nenhum componente foi detectado. O documento precisa de uma tabela ou lista com o nome do componente ou controle e, idealmente, a classificação (por exemplo: Ref, Controle, Nota).', pillars: 'Pilares', subs: 'Subdimensões', comps: 'Componentes', rated: 'Com classificação original', scale: 'Escala de classificação da origem', scaleNote: 'As classificações são convertidas para a escala de maturidade 1–5.', name: 'Nome do assessment', detected: 'Estrutura detectada', pillar: 'Pilar', n: 'Componentes', avg: 'Média original (1–5)', back: 'Voltar', dl: 'Baixar framework (.md)', create: 'Criar framework e carregar o assessment original', cancel: 'Cancelar', created: (p, c, r) => 'Framework criado: ' + p + ' pilares, ' + c + ' componentes, ' + r + ' classificações originais carregadas.', w: { unrated: n => n + ' componentes não têm classificação na origem; ficam sem resposta.', onepillar: 'Apenas um pilar foi detectado. Se a origem agrupa os controles por domínio, verifique os nomes das colunas ou títulos.', rescaled: s => 'A escala de origem ' + s + ' foi convertida para 1–5.', skipped: n => n + ' linhas não foram reconhecidas e foram ignoradas.' }, descNote: 'A origem não traz descritores por nível, então são gerados descritores padrão de cinco níveis. Substitua-os pelos critérios da instituição quando os tiver.', sheetUsed: s => 'Planilha usada: ' + s }
  };
  const T = () => S[(typeof LANG !== 'undefined' && S[LANG]) ? LANG : 'en'];
  const ST = { file: null, rows: null, text: null, sheet: '', opts: { scale: null }, model: null, name: '', err: '', busy: false };
  let ov = null;

  function safeTitle(s) { return D.clean(String(s).replace(/\.[a-z0-9]{2,4}$/i, '').replace(/[_]+/g, ' ').replace(/\b(vendor|third[\s\-]?party|tprm)\b/ig, '').replace(/\s+/g, ' ')) || 'Assessment'; }

  /* ───────────── lectura de archivos ───────────── */
  function parseCSV(text) {
    const first = text.split(/\r?\n/).slice(0, 5).join('\n');
    const delim = [',', ';', '\t', '|'].map(d => [d, first.split(d).length]).sort((a, b) => b[1] - a[1])[0][0];
    const rows = []; let row = [], cur = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (q) { if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
      else if (ch === '"') q = true;
      else if (ch === delim) { row.push(cur); cur = ''; }
      else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (ch !== '\r') cur += ch;
    }
    row.push(cur); rows.push(row);
    return rows.filter(r => r.some(x => String(x).trim() !== ''));
  }
  function mdTableRows(text) {
    const rows = text.split(/\r?\n/).filter(l => /^\s*\|/.test(l) && !/^\s*\|[\s:\-|]+\|\s*$/.test(l)).map(l => l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.replace(/\*\*/g, '').trim()));
    return rows.length > 3 ? rows : null;
  }
  function loadXLSX() {
    if (window.XLSX) return Promise.resolve(window.XLSX);
    return new Promise((res, rej) => { const s = document.createElement('script'); s.src = new URL('vendor/xlsx.full.min.js', document.baseURI).href; s.onload = () => res(window.XLSX); s.onerror = rej; document.head.append(s); });
  }

  /* PDF → filas de tabla usando las coordenadas: detecta el encabezado, asigna cada texto a su columna y une las líneas partidas de una misma celda */
  async function pdfTableRows(f) {
    const pdfjs = await import(new URL('vendor/pdf.min.mjs', document.baseURI).href);
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('vendor/pdf.worker.min.mjs', document.baseURI).href;
    const doc = await pdfjs.getDocument({ data: await f.arrayBuffer(), isEvalSupported: false }).promise;
    const out = []; let cols = null, anchor = 0, headerRow = null, cur = null, headerPushed = false;
    const flush = () => { if (cur) { out.push(cur.map(x => x.trim())); cur = null; } };
    const join = (a, b) => !a ? b : /[-‐‑]$/.test(a) ? a + b : a + ' ' + b;
    for (let pn = 1; pn <= Math.min(doc.numPages, 80); pn++) {
      const tc = await (await doc.getPage(pn)).getTextContent();
      const lines = [];
      tc.items.forEach(x => { if (!x.str || !x.str.trim()) return; const y = x.transform[5]; let l = lines.find(q => Math.abs(q.y - y) < 2.5); if (!l) { l = { y, it: [] }; lines.push(l); } l.it.push({ x: x.transform[4], w: x.width || 0, s: x.str }); });
      lines.sort((a, b) => b.y - a.y);
      lines.forEach(l => {
        l.it.sort((a, b) => a.x - b.x);
        const cells = []; l.it.forEach(i => { const last = cells[cells.length - 1]; if (last && i.x - (last.x + last.w) < 3) { last.s += (i.x - (last.x + last.w) > 0.6 ? ' ' : '') + i.s; last.w = i.x + i.w - last.x; } else cells.push({ x: i.x, w: i.w, s: i.s }); });
        const kinds = cells.map(c => D.classifyHeader(c.s));
        const isHeader = new Set(kinds.filter(Boolean)).size >= 3 && kinds.includes('comp');
        if (isHeader) {
          /* cada tabla puede tener anchos de columna distintos: se re-aprenden en cada encabezado */
          cols = cells.map(c => c.x); const lvI = kinds.indexOf('level'); anchor = lvI >= 0 ? lvI : Math.max(0, kinds.indexOf('id')); if (!headerRow) headerRow = cells.map(c => c.s);
          flush(); if (!headerPushed) { out.push(headerRow); headerPushed = true; } return;
        }
        if (!cols) { flush(); out.push([cells.map(c => c.s).join(' ')]); return; }
        const text = cells.map(c => c.s).join(' ');
        const isHead = cells.length === 1 && (/^(domain|pillar|pilar|dominio|domínio|section|secci[oó]n|area|área|chapter|cap[ií]tulo)\b/i.test(text) || /^\d{1,2}[.)]\s+\S/.test(text));
        if (isHead || cells.length === 1 && cells[0].x < cols[0] - 2) { flush(); out.push([text]); return; }
        const row = cols.map(() => ''); cells.forEach(c => { let k = 0; cols.forEach((cx, i) => { if (c.x >= cx - 2) k = i; }); row[k] = join(row[k], c.s); });
        const anchored = row[anchor] !== '';
        if (anchored) { flush(); cur = row; } else if (cur) { row.forEach((v, i) => { if (v) cur[i] = join(cur[i], v); }); }
      });
      flush();
    }
    flush();
    return out;
  }
  async function readSource(f) {
    const n = f.name.toLowerCase();
    if (/\.docx?$/.test(n)) throw { kind: 'docx' };
    if (/\.(xlsx|xlsm|xls)$/.test(n)) {
      const X = await loadXLSX(); const wb = X.read(await f.arrayBuffer(), { type: 'array' });
      let best = null;
      wb.SheetNames.forEach(sn => { const rows = X.utils.sheet_to_json(wb.Sheets[sn], { header: 1, defval: '' }); const r = D.derive({ rows }); if (!best || r.stats.comps > best.r.stats.comps) best = { sn, rows, r }; });
      return { rows: best ? best.rows : [], sheet: best ? best.sn : '' };
    }
    if (/\.pdf$/.test(n)) {
      try { const rows = await pdfTableRows(f); if (D.derive({ rows }).stats.comps) return { rows }; } catch (e) { }
      return { text: await window.AIX.readFileText(f) };
    }
    const text = await f.text();
    if (/\.csv$/.test(n) || (!/\.(md|txt)$/.test(n) && text.split(/\r?\n/)[0].split(',').length > 2)) return { rows: parseCSV(text) };
    const mt = mdTableRows(text);
    return mt ? { rows: mt } : { text };
  }

  function recompute() {
    const src = ST.rows ? { rows: ST.rows } : { text: ST.text };
    ST.model = D.derive(src, { scale: ST.opts.scale || undefined });
    if (!ST.opts.scale) ST.opts.scale = ST.model.scale;
  }

  /* ───────────── interfaz ───────────── */
  function open() {
    Object.assign(ST, { file: null, rows: null, text: null, sheet: '', opts: { scale: null }, model: null, name: '', err: '', busy: false });
    ov = document.createElement('div'); ov.className = 'aix-ov';
    ov.addEventListener('mousedown', e => { if (e.target === ov && !ST.busy) close(); });
    document.body.append(ov); paint();
  }
  function close() { if (ov) { ov.remove(); ov = null; } }
  function paint() {
    if (!ov) return; const t = T(); ov.innerHTML = '';
    const md = el('div', { className: 'aix-md' });
    md.append(el('div', { className: 'aix-hd' }, el('div', { style: { fontSize: '26px' } }, '🧬'),
      el('div', { style: { flex: '1' } }, el('div', { style: { fontSize: '19px', fontWeight: '800', letterSpacing: '-.3px' } }, t.title), el('div', { style: { fontSize: '13px', color: 'var(--dim)', marginTop: '3px', lineHeight: '1.5' } }, t.sub)),
      el('button', { className: 'btn', style: { padding: '6px 12px' }, onClick: close }, '✕')));
    const bd = el('div', { className: 'aix-bd' }), ft = el('div', { className: 'aix-ft' });
    md.append(bd, ft); ov.append(md);
    if (!ST.model || !ST.model.stats.comps) paintUpload(bd, ft); else paintPreview(bd, ft);
  }
  function paintUpload(bd, ft) {
    const t = T();
    const inp = el('input', { type: 'file', accept: '.xlsx,.xlsm,.xls,.csv,.pdf,.txt,.md,.docx', style: { display: 'none' } });
    inp.addEventListener('change', async () => {
      const f = inp.files[0]; if (!f) return; inp.value = '';
      ST.busy = true; ST.err = ''; paint();
      try {
        const src = await readSource(f);
        ST.file = f; ST.rows = src.rows || null; ST.text = src.text || null; ST.sheet = src.sheet || ''; ST.opts.scale = null;
        recompute(); ST.name = safeTitle(f.name);
        if (!ST.model.stats.comps) ST.err = t.errNone;
      } catch (e) { ST.err = e && e.kind === 'docx' ? t.errDocx : t.errRead; }
      ST.busy = false; paint();
    });
    const box = el('div', { style: { border: '2px dashed var(--brd)', borderRadius: '14px', padding: '36px 20px', textAlign: 'center', background: 'var(--bg)' } },
      ST.busy ? el('div', { style: { color: 'var(--dim)' } }, el('span', { className: 'aix-spin' }), ' ' + t.reading) : el('div', null,
        el('button', { className: 'btn aix-btn-ai', style: { padding: '12px 28px', fontSize: '14px' }, onClick: () => inp.click() }, t.pick),
        el('div', { style: { marginTop: '10px', fontSize: '12px', color: 'var(--mute)' } }, t.drop)), inp);
    bd.append(box);
    if (ST.err) bd.append(el('div', { style: { marginTop: '12px', color: 'var(--red)', fontSize: '13px', lineHeight: '1.5' } }, ST.err));
    ft.append(el('button', { className: 'btn', onClick: close }, t.cancel));
  }
  function paintPreview(bd, ft) {
    const t = T(), m = ST.model;
    const chip = (v, l) => el('div', { style: { flex: '1', minWidth: '110px', textAlign: 'center', padding: '12px', border: '1px solid var(--brd)', borderRadius: '10px', background: 'var(--bg)' } }, el('div', { style: { fontSize: '22px', fontWeight: '800' } }, String(v)), el('div', { style: { fontSize: '10px', fontWeight: '700', color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.6px' } }, l));
    bd.append(el('div', { style: { fontSize: '12px', color: 'var(--mute)', marginBottom: '10px' } }, '📄 ' + ST.file.name + (ST.sheet ? ' · ' + t.sheetUsed(ST.sheet) : '')));
    bd.append(el('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' } }, chip(m.stats.pillars, t.pillars), chip(m.stats.subs, t.subs), chip(m.stats.comps, t.comps), chip(m.stats.rated, t.rated)));
    const nm = el('input', { className: 'inp', style: { width: '100%' }, value: ST.name }); nm.addEventListener('input', () => { ST.name = nm.value; });
    const sc = el('select', { className: 'inp', style: { padding: '6px 10px', fontSize: '13px' } }, ...Object.keys(D.SCALES).map(k => el('option', { value: k }, k.replace('-', '–'))));
    sc.value = ST.opts.scale; sc.addEventListener('change', () => { ST.opts.scale = sc.value; recompute(); paint(); });
    bd.append(el('div', { style: { display: 'grid', gridTemplateColumns: '1fr 220px', gap: '12px', alignItems: 'end', marginBottom: '14px' } },
      el('div', null, el('div', { style: { fontSize: '12px', fontWeight: '700', color: 'var(--dim)', marginBottom: '5px' } }, t.name), nm),
      el('div', null, el('div', { style: { fontSize: '12px', fontWeight: '700', color: 'var(--dim)', marginBottom: '5px' } }, t.scale), sc)));
    bd.append(el('div', { style: { fontSize: '11.5px', color: 'var(--mute)', margin: '-6px 0 12px' } }, t.scaleNote + ' ' + t.descNote));
    m.warnings.forEach(w => { const [k, v] = w.split(':'); const f = t.w[k]; if (!f) return; bd.append(el('div', { style: { fontSize: '12.5px', color: '#92400e', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '8px 12px', marginBottom: '8px' } }, '⚠ ' + (typeof f === 'function' ? f(v) : f))); });
    const rows = m.pillars.map((p, i) => {
      const cs = p.subs.flatMap(s => s.comps), rt = cs.filter(c => c.level);
      return el('tr', null, el('td', { style: { padding: '8px 6px', fontWeight: '800', color: 'var(--teal)', whiteSpace: 'nowrap' } }, 'P' + (i + 1)), el('td', { style: { padding: '8px 6px' } }, p.name), el('td', { style: { padding: '8px 6px', textAlign: 'center' } }, String(cs.length)), el('td', { style: { padding: '8px 6px', textAlign: 'center', fontWeight: '700' } }, rt.length ? (rt.reduce((a, c) => a + c.level, 0) / rt.length).toFixed(2) : '—'));
    });
    bd.append(el('div', { style: { fontSize: '11px', fontWeight: '800', color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.8px', margin: '4px 0 6px' } }, t.detected),
      el('table', { style: { width: '100%', borderCollapse: 'collapse', fontSize: '13px' } }, el('thead', null, el('tr', null, ...['', t.pillar, t.n, t.avg].map(h => el('th', { style: { textAlign: 'left', fontSize: '10px', textTransform: 'uppercase', color: 'var(--mute)', padding: '6px', borderBottom: '1px solid var(--brd)' } }, h)))), el('tbody', null, ...rows)));
    ft.append(el('button', { className: 'btn', onClick: () => { ST.model = null; ST.err = ''; paint(); } }, t.back),
      el('button', { className: 'btn', onClick: download }, t.dl),
      el('button', { className: 'btn aix-btn-ai', style: { padding: '10px 22px' }, onClick: create }, t.create));
  }

  function build() {
    return D.buildFramework(ST.model, { title: ST.name, assessmentName: ST.name, framework: 'Derived from an existing assessment', lang: typeof LANG !== 'undefined' ? LANG : 'en' });
  }
  function download() {
    const f = build(); const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([f.md], { type: 'text/markdown' })); a.download = (ST.name || 'framework').replace(/[^\w\-]+/g, '_') + '_framework.md'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function note(msg) { const d = document.createElement('div'); d.textContent = msg; d.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#0f172a;color:#fff;padding:12px 20px;border-radius:10px;font-size:13px;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.25)'; document.body.append(d); setTimeout(() => d.remove(), 4500); }
  function create() {
    const t = T(), f = build(), r = parseMD(f.md);
    META = r.meta; try { localStorage.setItem('fcma_meta', JSON.stringify(META)); } catch (e) { }
    DATA = r.data; CORE = new Set(); ANSWERS = Object.assign({}, f.answers); FW_TYPE = 'generic';
    try { localStorage.removeItem('tprm_fw_inst'); localStorage.removeItem('tprm_active_node'); } catch (e) { }
    ACTIVE_NODE = null; ACTIVE_P = DATA.length ? 0 : null; ACTIVE_S = null; AQ_STARTED = false;
    /* trazabilidad: cada calificación recuerda de qué fila del documento original salió */
    const meta = {}; Object.keys(f.answers).forEach(id => { const n = f.notes[id] || {}; meta[id] = { level: f.answers[id], confidence: 'high', basis: 'imported', rationale: ((n.ref ? '[' + n.ref + '] ' : '') + (n.note || '') + ' — ' + (ST.file ? ST.file.name : '')).trim(), ts: Date.now(), confirmed: false, edited: false }; });
    try { localStorage.setItem('fcma_ai_meta_main', JSON.stringify(meta)); } catch (e) { }
    save(); const s = ST.model.stats; close(); render(); note(t.created(s.pillars, s.comps, Object.keys(f.answers).length));
  }

  window.DERIVE_UI = { open, label: () => T().btn, caption: () => T().cap };
})();
