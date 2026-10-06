/* RiskAtlas · Interfaz del flujo "Generar framework desde un assessment existente".
   Depende de fcma-derive.js (núcleo), fcma-ai.js (estilos del modal y lector de PDF) y de los globales de index.html. */
(function () {
  if (typeof document === 'undefined' || !window.DERIVE) return;
  const D = window.DERIVE, clean = D.clean;
  const S = {
    en: { btn: 'Generate a framework from an existing assessment', cap: 'Already have an assessment done by the bank or sold by another provider? Upload it and RiskAtlas derives the pillars and components and recovers the original ratings.', title: 'Framework from an existing assessment', sub: 'Upload the assessment the institution already has (XLSX, CSV, PDF, PPTX, Word, TXT or MD). RiskAtlas detects its pillars, components and ratings and builds a framework you can use, edit and report on.', pick: '📎 Choose file', drop: 'XLSX, CSV, PDF, PPTX, DOCX, TXT, MD', reading: 'Reading the document…', errRead: 'The file could not be read.', errDoc: 'Legacy .doc/.ppt files are not supported. Save the document as .docx/.pptx or PDF and upload that.', errFrag: 'A table was found but its structure looks unreliable (too many groups with almost no components), so nothing was created. Upload the table as XLSX/CSV, or check that the ratings table has a clear header.', errScan: 'This PDF looks scanned (images, no selectable text). RiskAtlas cannot read it without OCR.', errPdf: 'No table with ratings was found in this PDF. If the scores are only drawn in charts or described in narrative text, they cannot be read reliably without the AI connection. Try the XLSX/CSV or a version with the results table.', rateCol: 'Rating taken from column', rateOther: 'Use a different column', rateMap: { numeric: '', legend: 'Labels are mapped with the maturity scale defined in the document.', ordinal: 'Labels are mapped to levels 1–5 by name.', strength: 'Control strength is mapped Strong = 5, Medium = 3, Weak = 1.', risk: 'This is a risk rating, so it is inverted: Low risk = 5, Medium = 3, High = 1.' }, descNoteLeg: 'The level descriptors come from the maturity scale defined in the source document.', errNone: 'No components were detected. The document needs a table or list with a component or control name and, ideally, a rating (for example: Ref, Control, Score).', pillars: 'Pillars', subs: 'Sub-dimensions', comps: 'Components', rated: 'With original rating', scale: 'Source rating scale', scaleNote: 'Ratings are converted to the 1–5 maturity scale.', name: 'Assessment name', detected: 'Detected structure', pillar: 'Pillar', n: 'Components', avg: 'Original avg (1–5)', back: 'Back', dl: 'Download framework (.md)', create: 'Create framework and load original assessment', cancel: 'Cancel', created: (p, c, r) => 'Framework created: ' + p + ' pillars, ' + c + ' components, ' + r + ' original ratings loaded.', w: { unrated: n => n + ' components have no rating in the source; they stay unanswered.', onepillar: 'Only one pillar was detected. If the source groups controls by domain, check the column or heading names.', rescaled: s => 'The source scale ' + s + ' was converted to 1–5.', skipped: n => n + ' lines were not recognized and ignored.' }, descNote: 'The source has no level descriptors, so standard five-level descriptors are generated. Replace them with the institution’s own criteria when you have them.', sheetUsed: s => 'Sheet used: ' + s },
    es: { btn: 'Generar un framework desde un assessment existente', cap: '¿Ya tienes un assessment hecho por el banco o vendido por otro proveedor? Súbelo y RiskAtlas deduce los pilares y componentes y recupera las calificaciones originales.', title: 'Framework desde un assessment existente', sub: 'Sube el assessment que la institución ya tiene (XLSX, CSV, PDF, PPTX, Word, TXT o MD). RiskAtlas detecta sus pilares, componentes y calificaciones y arma un framework que puedes usar, editar y reportar.', pick: '📎 Elegir archivo', drop: 'XLSX, CSV, PDF, PPTX, DOCX, TXT, MD', reading: 'Leyendo el documento…', errRead: 'No se pudo leer el archivo.', errDoc: 'Los archivos .doc/.ppt antiguos no están soportados. Guarda el documento como .docx/.pptx o PDF y súbelo.', errFrag: 'Se encontró una tabla pero su estructura parece poco confiable (demasiados grupos con casi ningún componente), así que no se creó nada. Sube la tabla como XLSX/CSV o revisa que la tabla de calificaciones tenga un encabezado claro.', errScan: 'Este PDF parece escaneado (imágenes, sin texto seleccionable). RiskAtlas no puede leerlo sin OCR.', errPdf: 'No se encontró una tabla con calificaciones en este PDF. Si los puntajes solo están dibujados en gráficos o descritos en texto narrativo, no se pueden leer de forma confiable sin la conexión de IA. Prueba con el XLSX/CSV o una versión con la tabla de resultados.', rateCol: 'Calificación tomada de la columna', rateOther: 'Usar otra columna', rateMap: { numeric: '', legend: 'Las etiquetas se mapean con la escala de madurez definida en el documento.', ordinal: 'Las etiquetas se mapean a niveles 1–5 por su nombre.', strength: 'La fortaleza del control se mapea: Fuerte = 5, Media = 3, Débil = 1.', risk: 'Es una calificación de riesgo, por eso se invierte: riesgo bajo = 5, medio = 3, alto = 1.' }, descNoteLeg: 'Los descriptores de nivel provienen de la escala de madurez definida en el documento de origen.', errNone: 'No se detectaron componentes. El documento necesita una tabla o lista con el nombre del componente o control y, idealmente, su calificación (por ejemplo: Ref, Control, Puntaje).', pillars: 'Pilares', subs: 'Subdimensiones', comps: 'Componentes', rated: 'Con calificación original', scale: 'Escala de calificación del origen', scaleNote: 'Las calificaciones se convierten a la escala de madurez 1–5.', name: 'Nombre del assessment', detected: 'Estructura detectada', pillar: 'Pilar', n: 'Componentes', avg: 'Prom. original (1–5)', back: 'Atrás', dl: 'Descargar framework (.md)', create: 'Crear framework y cargar el assessment original', cancel: 'Cancelar', created: (p, c, r) => 'Framework creado: ' + p + ' pilares, ' + c + ' componentes, ' + r + ' calificaciones originales cargadas.', w: { unrated: n => n + ' componentes no tienen calificación en el origen; quedan sin responder.', onepillar: 'Solo se detectó un pilar. Si el origen agrupa los controles por dominio, revisa los nombres de columna o de encabezado.', rescaled: s => 'La escala de origen ' + s + ' se convirtió a 1–5.', skipped: n => n + ' líneas no se reconocieron y se ignoraron.' }, descNote: 'El origen no trae descriptores por nivel, así que se generan descriptores estándar de cinco niveles. Reemplázalos por los criterios propios de la institución cuando los tengas.', sheetUsed: s => 'Hoja usada: ' + s },
    pt: { btn: 'Gerar um framework a partir de um assessment existente', cap: 'Já tem um assessment feito pelo banco ou vendido por outro fornecedor? Envie-o e o RiskAtlas deduz os pilares e componentes e recupera as classificações originais.', title: 'Framework a partir de um assessment existente', sub: 'Envie o assessment que a instituição já possui (XLSX, CSV, PDF, PPTX, Word, TXT ou MD). O RiskAtlas detecta pilares, componentes e classificações e monta um framework que você pode usar, editar e reportar.', pick: '📎 Escolher arquivo', drop: 'XLSX, CSV, PDF, PPTX, DOCX, TXT, MD', reading: 'Lendo o documento…', errRead: 'Não foi possível ler o arquivo.', errDoc: 'Arquivos .doc/.ppt antigos não são suportados. Salve o documento como .docx/.pptx ou PDF e envie.', errFrag: 'Foi encontrada uma tabela, mas sua estrutura parece pouco confiável (grupos demais com quase nenhum componente), então nada foi criado. Envie a tabela como XLSX/CSV ou verifique se a tabela de classificações tem um cabeçalho claro.', errScan: 'Este PDF parece digitalizado (imagens, sem texto selecionável). O RiskAtlas não consegue lê-lo sem OCR.', errPdf: 'Nenhuma tabela com classificações foi encontrada neste PDF. Se as notas só aparecem em gráficos ou em texto narrativo, não podem ser lidas de forma confiável sem a conexão de IA. Tente o XLSX/CSV ou uma versão com a tabela de resultados.', rateCol: 'Classificação tomada da coluna', rateOther: 'Usar outra coluna', rateMap: { numeric: '', legend: 'Os rótulos são mapeados com a escala de maturidade definida no documento.', ordinal: 'Os rótulos são mapeados para níveis 1–5 pelo nome.', strength: 'A força do controle é mapeada: Forte = 5, Média = 3, Fraca = 1.', risk: 'É uma classificação de risco, por isso é invertida: risco baixo = 5, médio = 3, alto = 1.' }, descNoteLeg: 'Os descritores de nível vêm da escala de maturidade definida no documento de origem.', errNone: 'Nenhum componente foi detectado. O documento precisa de uma tabela ou lista com o nome do componente ou controle e, idealmente, a classificação (por exemplo: Ref, Controle, Nota).', pillars: 'Pilares', subs: 'Subdimensões', comps: 'Componentes', rated: 'Com classificação original', scale: 'Escala de classificação da origem', scaleNote: 'As classificações são convertidas para a escala de maturidade 1–5.', name: 'Nome do assessment', detected: 'Estrutura detectada', pillar: 'Pilar', n: 'Componentes', avg: 'Média original (1–5)', back: 'Voltar', dl: 'Baixar framework (.md)', create: 'Criar framework e carregar o assessment original', cancel: 'Cancelar', created: (p, c, r) => 'Framework criado: ' + p + ' pilares, ' + c + ' componentes, ' + r + ' classificações originais carregadas.', w: { unrated: n => n + ' componentes não têm classificação na origem; ficam sem resposta.', onepillar: 'Apenas um pilar foi detectado. Se a origem agrupa os controles por domínio, verifique os nomes das colunas ou títulos.', rescaled: s => 'A escala de origem ' + s + ' foi convertida para 1–5.', skipped: n => n + ' linhas não foram reconhecidas e foram ignoradas.' }, descNote: 'A origem não traz descritores por nível, então são gerados descritores padrão de cinco níveis. Substitua-os pelos critérios da instituição quando os tiver.', sheetUsed: s => 'Planilha usada: ' + s }
  };
  const T = () => S[(typeof LANG !== 'undefined' && S[LANG]) ? LANG : 'en'];
  const ST = { file: null, tables: null, text: null, opts: { scale: null, ratingKey: null }, model: null, name: '', err: '', busy: false, scanned: false, isPdf: false };
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

  /* ───────────── ZIP nativo (PPTX / DOCX): sin librerías, con DecompressionStream ───────────── */
  async function unzip(buf) {
    const u8 = new Uint8Array(buf), dv = new DataView(buf); let e = -1;
    for (let i = u8.length - 22; i >= Math.max(0, u8.length - 66000); i--) if (dv.getUint32(i, true) === 0x06054b50) { e = i; break; }
    if (e < 0) throw new Error('zip');
    const n = dv.getUint16(e + 10, true); let p = dv.getUint32(e + 16, true); const files = {};
    for (let k = 0; k < n; k++) {
      if (dv.getUint32(p, true) !== 0x02014b50) break;
      const method = dv.getUint16(p + 10, true), csz = dv.getUint32(p + 20, true), nl = dv.getUint16(p + 28, true), el = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true), off = dv.getUint32(p + 42, true);
      const name = new TextDecoder().decode(u8.subarray(p + 46, p + 46 + nl)); p += 46 + nl + el + cl;
      files[name] = async () => {
        const ln = dv.getUint16(off + 26, true), le = dv.getUint16(off + 28, true), st = off + 30 + ln + le, data = u8.subarray(st, st + csz);
        if (method === 0) return new TextDecoder().decode(data);
        const ds = new DecompressionStream('deflate-raw'); const w = ds.writable.getWriter(); w.write(data); w.close();
        return new TextDecoder().decode(await new Response(ds.readable).arrayBuffer());
      };
    }
    return files;
  }
  const xml = t => new DOMParser().parseFromString(t, 'application/xml');
  const kids = (n, ln) => Array.from(n.childNodes).filter(c => c.localName === ln);
  const textOf = n => Array.from(n.getElementsByTagNameNS('*', 't')).map(x => x.textContent).join('');
  function paraText(p) { return textOf(p); }
  async function pptxTables(f) {
    const z = await unzip(await f.arrayBuffer()); const names = Object.keys(z).filter(k => /^ppt\/slides\/slide\d+\.xml$/.test(k)).sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));
    const tables = []; let text = '';
    for (const nm of names) {
      const d = xml(await z[nm]());
      const sps = Array.from(d.getElementsByTagNameNS('*', 'sp')); let title = '';
      for (const sp of sps) { const ph = sp.getElementsByTagNameNS('*', 'ph')[0]; const t = clean(textOf(sp)); if (ph && /title/i.test(ph.getAttribute('type') || '') && t) { title = t; break; } }
      if (!title) for (const sp of sps) { const t = clean(textOf(sp)); if (t && t.length < 90 && !/^draft$/i.test(t)) { title = t; break; } }
      text += '\n' + clean(textOf(d.documentElement));
      Array.from(d.getElementsByTagNameNS('*', 'tbl')).forEach(tb => {
        const rows = kids(tb, 'tr').map(tr => { const out = []; kids(tr, 'tc').forEach(tc => { out.push(clean(kids(tc, 'txBody').map(b => kids(b, 'p').map(paraText).join(' / ')).join(' ')).replace(/ \/ $/, '')); const gs = parseInt(tc.getAttribute('gridSpan') || '1', 10); for (let q = 1; q < gs; q++) out.push(''); }); return out; });
        tables.push({ title, rows });
      });
    }
    return { tables, text };
  }
  async function docxTables(f) {
    const z = await unzip(await f.arrayBuffer()); if (!z['word/document.xml']) throw new Error('docx');
    const d = xml(await z['word/document.xml']()); const body = d.getElementsByTagNameNS('*', 'body')[0];
    const tables = []; let text = '', last = [];
    Array.from(body.childNodes).forEach(n => {
      if (n.localName === 'p') { const t = clean(textOf(n)); if (t) { last.push(t); if (last.length > 4) last.shift(); text += '\n' + t; } }
      else if (n.localName === 'tbl') {
        const rows = kids(n, 'tr').map(tr => kids(tr, 'tc').map(tc => clean(kids(tc, 'p').map(paraText).join(' '))));
        /* los párrafos cortos justo antes de la tabla actúan como títulos (filas de una sola celda) */
        const pre = last.filter(x => x.length < 90).slice(-2).map(x => [x]);
        tables.push({ title: last.length ? last[last.length - 1] : '', rows: pre.concat(rows) }); last = [];
      }
    });
    return { tables, text };
  }

  /* ───────────── PDF → tablas con las coordenadas ─────────────
     Detecta el encabezado, asigna cada texto a su columna, junta las líneas partidas de una celda (incluidas las centradas
     verticalmente), corta la tabla cuando aparece un párrafo y conserva los títulos cortos como filas de una sola celda. */
  async function pdfTableRows(f) {
    const pdfjs = await import(new URL('vendor/pdf.min.mjs', document.baseURI).href);
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('vendor/pdf.worker.min.mjs', document.baseURI).href;
    const doc = await pdfjs.getDocument({ data: await f.arrayBuffer(), isEvalSupported: false }).promise;
    const join = (a, b) => !a ? b : /[-‐‑]$/.test(a) ? a + b : a + ' ' + b;
    const END = '\u2403'; const out = []; let cols = null, bounds = null, kinds = null, nameCol = 0, idCol = -1, textLen = 0, nPages = Math.min(doc.numPages, 120);
    let group = null; /* {items:[{y,pg,row,anchored}]} */
    const headingLike = t => t.length >= 3 && t.length < 90 && !/[.;,:]$/.test(t) && t.split(' ').length <= 12;
    const headingFn = x => { const t = x.row.join(' ').trim(); return headingLike(t) && (/^(domain|pillar|pilar|dominio|domínio|section|secci[oó]n|area|área|chapter|cap[ií]tulo)\b/i.test(t) || /^\d{1,2}[.)]\s+\S/.test(t) || x.single); };
    const flushGroup = () => {
      if (!group) return; const its = group.items;
      const anch = its.map((x, i) => x.anchored ? i : -1).filter(i => i >= 0);
      const owner = its.map((x, i) => { if (x.anchored) return i; let best = -1, bd = 1e9; anch.forEach(j => { if (its[j].pg !== x.pg) return; const d = Math.abs(its[j].y - x.y); if (d < bd || (d === bd && j < i)) { bd = d; best = j; } }); return bd <= 24 ? best : -2; });
      const rows = {}; its.forEach((x, i) => { const o = owner[i]; if (o === -2) { if (group.heading(x)) { rows['h' + i] = { heading: x.row.join(' ').trim() }; } return; } (rows[o] = rows[o] || { cells: its[0].row.map(() => '') , list: [] }).list.push(x); });
      Object.keys(rows).sort((a, b) => { const ia = parseInt(a.replace('h', ''), 10), ib = parseInt(b.replace('h', ''), 10); return ia - ib; }).forEach(k => {
        const r = rows[k]; if (r.heading) { out.push([r.heading]); return; }
        r.list.sort((a, b) => b.y - a.y); const cells = r.list[0].row.map(() => '');
        r.list.forEach(x => x.row.forEach((v, i) => { if (v) cells[i] = join(cells[i], v); }));
        out.push(cells.map(x => x.trim()));
      });
      group = null;
    };
    for (let pn = 1; pn <= nPages; pn++) {
      const tc = await (await doc.getPage(pn)).getTextContent();
      const lines = [];
      /* se descartan las llamadas de nota al pie (dígitos en superíndice, de letra más chica que el resto) */
      const hs = tc.items.filter(x => x.str && x.str.trim() && x.height).map(x => x.height).sort((a, b) => a - b), medH = hs.length ? hs[Math.floor(hs.length / 2)] : 0;
      tc.items.forEach(x => { if (!x.str || !x.str.trim()) return; if (medH && x.height && x.height < medH * 0.8 && /^\d{1,2}$/.test(x.str.trim())) return; const y = x.transform[5]; let l = lines.find(q => Math.abs(q.y - y) < 2.5); if (!l) { l = { y, it: [] }; lines.push(l); } l.it.push({ x: x.transform[4], w: x.width || 0, s: x.str }); });
      lines.sort((a, b) => b.y - a.y);
      lines.forEach(l => {
        l.it.sort((a, b) => a.x - b.x);
        const cells = []; l.it.forEach(i => { const last = cells[cells.length - 1]; if (last && i.x - (last.x + last.w) < 1.6) { last.s += (i.x - (last.x + last.w) > 0.6 ? ' ' : '') + i.s; last.w = i.x + i.w - last.x; } else cells.push({ x: i.x, w: i.w, s: i.s }); });
        l.cells = cells; l.text = cells.map(c => c.s).join(' ');
        l.hc = cells.length >= 3 && !!D.headerMap(cells.map(c => c.s)) && new Set(cells.map(c => D.classifyHeader(c.s)).filter(Boolean)).size >= 3;
      });
      /* encabezados de varias líneas: las líneas contiguas (≤16 pt) que solo traen palabras de encabezado se funden en uno solo,
         y las columnas salen de la unión de todas ellas (p. ej. «Inherent» / «Rating» apiladas) */
      const used = new Set();
      const HW = /^(rating|risk|score|level|weight(ing)?|category|factor|date|status|name|type|total|inherent|residual|control|mitigation|comments?|description|of risk|de riesgo)$/i;
      const hdrShort = l => l && l.cells.length >= 2 && l.cells.every(c => c.s.length <= 26 && !/^[\d.,%]+$/.test(c.s.trim()) && (D.classifyHeader(c.s) || HW.test(c.s.trim())));
      lines.forEach((l, i) => {
        if (!l.hc || used.has(i)) return;
        let lo = i, hi = i;
        while (lo > 0 && !used.has(lo - 1) && lines[lo - 1].y - lines[lo].y >= 0 && lines[lo - 1].y - lines[lo].y <= 16 && (lines[lo - 1].hc || hdrShort(lines[lo - 1])) && i - lo < 3) lo--;
        while (hi + 1 < lines.length && lines[hi].y - lines[hi + 1].y <= 16 && (lines[hi + 1].hc || hdrShort(lines[hi + 1])) && hi - i < 3) hi++;
        for (let k = lo; k <= hi; k++) used.add(k);
        lines[lo].hdr = lines.slice(lo, hi + 1);
      });
      lines.forEach((l, li) => {
        if (used.has(li) && !l.hdr) return;
        const cells = l.cells, line = l.text; textLen += line.length; out.text = (out.text || '') + line + '\n';
        if (l.hdr) {
          const flat = []; l.hdr.forEach(h => h.cells.forEach(c => flat.push({ x: c.x, w: c.w, s: c.s, y: h.y }))); flat.sort((a, b) => a.x - b.x);
          const ca = [];
          flat.forEach(c => { const x1 = c.x + c.w; let col = ca.find(k => c.x <= k.x1 + 2 && x1 >= k.x0 - 2); if (!col) { col = { x0: c.x, x1, parts: [] }; ca.push(col); } else { col.x0 = Math.min(col.x0, c.x); col.x1 = Math.max(col.x1, x1); } col.parts.push(c); });
          ca.sort((a, b) => a.x0 - b.x0);
          const texts = ca.map(k => k.parts.sort((a, b) => b.y - a.y).map(q => q.s).join(' '));
          const ks = texts.map(t => D.classifyHeader(t));
          flushGroup(); cols = ca.map(k => k.x0); kinds = ks; nameCol = ks.indexOf('comp'); idCol = ks.indexOf('id');
          bounds = cols.map(x => x - 2); if (nameCol > 0 && ca[nameCol - 1].x1 + 2 < cols[nameCol]) bounds[nameCol] = ca[nameCol - 1].x1 + 2; /* el encabezado del nombre suele ir centrado sobre texto alineado a la izquierda */
          out.push(texts); group = { items: [], heading: headingFn };
          return;
        }
        if (!cols) { const t = line.trim(); if (cells.length === 1 && headingLike(t)) out.push([t]); return; }
        /* ¿es un párrafo (texto que desborda su columna)? entonces la tabla terminó */
        if (cells.length === 1) { const c = cells[0]; let k = 0; cols.forEach((cx, i) => { if (c.x >= bounds[i]) k = i; }); const next = cols[k + 1]; if (c.s.length > 45 && next != null && c.x + c.w > next + 4) { flushGroup(); out.push([END]); cols = null; if (headingLike(line.trim())) out.push([line.trim()]); return; } }
        const row = cols.map(() => ''); cells.forEach(c => { let k = 0; cols.forEach((cx, i) => { if (c.x >= bounds[i]) k = i; }); row[k] = join(row[k], c.s); });
        const others = row.some((v, i) => v && i !== nameCol && i !== idCol && !['desc', 'note', 'sub', 'pillar'].includes(kinds[i]));
        const idv = idCol >= 0 ? row[idCol] : '';
        const prev = group.items.filter(x => x.anchored).pop(); const prevId = prev && idCol >= 0 ? prev.row[idCol] : '';
        let anchored = !!((row[nameCol] || idv) && others) || /^(total|subtotal|overall)\b/i.test(line.trim()) || /\b(sub-?total|total weighted)\b/i.test(line);
        if (!anchored && idv && row[nameCol] && /^(?:[A-Za-z]{1,6}[-_.]?)?\d+(?:\.\d+)*$/.test(idv) && !/[-_.]$/.test(prevId)) anchored = true;
        group.items.push({ y: l.y, pg: pn, row, anchored, single: cells.length === 1 && cells[0].x < cols[0] - 2 });
      });
      flushGroup(); if (cols) group = { items: [], heading: headingFn };
    }
    flushGroup(); out.scanned = textLen < nPages * 40;
    return out;
  }
  async function readSource(f) {
    const n = f.name.toLowerCase();
    if (/\.doc$/.test(n)) throw { kind: 'doc' };
    if (/\.docx$/.test(n)) { const r = await docxTables(f); return r; }
    if (/\.pptx$/.test(n)) { const r = await pptxTables(f); return r; }
    if (/\.ppt$/.test(n)) throw { kind: 'doc' };
    if (/\.(xlsx|xlsm|xls)$/.test(n)) {
      const X = await loadXLSX(); const wb = X.read(await f.arrayBuffer(), { type: 'array' });
      return { tables: wb.SheetNames.map(sn => ({ title: sn, rows: X.utils.sheet_to_json(wb.Sheets[sn], { header: 1, defval: '' }) })), sheets: wb.SheetNames.length };
    }
    if (/\.pdf$/.test(n)) {
      let rows = null, scanned = false;
      try { rows = await pdfTableRows(f); scanned = rows.scanned; } catch (e) { }
      const text = (rows && rows.text) || await window.AIX.readFileText(f);
      if (rows && D.derive({ tables: [{ rows }], text }).stats.comps) return { tables: [{ title: '', rows }], text };
      return { text, scanned };
    }
    const text = await f.text();
    if (/\.csv$/.test(n) || (!/\.(md|txt)$/.test(n) && text.split(/\r?\n/)[0].split(',').length > 2)) return { tables: [{ title: '', rows: parseCSV(text) }] };
    const mt = mdTableRows(text);
    return mt ? { tables: [{ title: '', rows: mt }], text } : { text };
  }

  function recompute() {
    ST.model = D.derive({ tables: ST.tables || [], text: ST.text || undefined }, { scale: ST.opts.scale || undefined, ratingKey: ST.opts.ratingKey || undefined, lang: typeof LANG !== 'undefined' ? LANG : 'en' });
    if (!ST.opts.scale) ST.opts.scale = ST.model.scale;
    if (!ST.opts.ratingKey && ST.model.rating) ST.opts.ratingKey = ST.model.rating.key;
  }

  /* ───────────── interfaz ───────────── */
  function open() {
    Object.assign(ST, { file: null, tables: null, text: null, opts: { scale: null, ratingKey: null }, model: null, name: '', err: '', busy: false, scanned: false, isPdf: false });
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
    const inp = el('input', { type: 'file', accept: '.xlsx,.xlsm,.xls,.csv,.pdf,.pptx,.docx,.txt,.md', style: { display: 'none' } });
    inp.addEventListener('change', async () => {
      const f = inp.files[0]; if (!f) return; inp.value = '';
      ST.busy = true; ST.err = ''; paint();
      try {
        const src = await readSource(f);
        ST.file = f; ST.tables = src.tables || null; ST.text = src.text || null; ST.opts.scale = null; ST.opts.ratingKey = null; ST.scanned = !!src.scanned; ST.isPdf = /\.pdf$/i.test(f.name);
        recompute(); ST.name = safeTitle(f.name);
        if (!ST.model.stats.comps) ST.err = ST.model.warnings.includes('fragmented') ? t.errFrag : ST.scanned ? t.errScan : ST.isPdf ? t.errPdf : t.errNone;
      } catch (e) { ST.err = e && e.kind === 'doc' ? t.errDoc : t.errRead; }
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
    bd.append(el('div', { style: { fontSize: '12px', color: 'var(--mute)', marginBottom: '10px' } }, '📄 ' + ST.file.name + ''));
    bd.append(el('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' } }, chip(m.stats.pillars, t.pillars), chip(m.stats.subs, t.subs), chip(m.stats.comps, t.comps), chip(m.stats.rated, t.rated)));
    const nm = el('input', { className: 'inp', style: { width: '100%' }, value: ST.name }); nm.addEventListener('input', () => { ST.name = nm.value; });
    const sc = el('select', { className: 'inp', style: { padding: '6px 10px', fontSize: '13px' } }, ...Object.keys(D.SCALES).map(k => el('option', { value: k }, k.replace('-', '–'))));
    sc.value = ST.opts.scale; sc.disabled = !!(m.rating && m.rating.type !== 'numeric'); sc.addEventListener('change', () => { ST.opts.scale = sc.value; recompute(); paint(); });
    bd.append(el('div', { style: { display: 'grid', gridTemplateColumns: '1fr 220px', gap: '12px', alignItems: 'end', marginBottom: '14px' } },
      el('div', null, el('div', { style: { fontSize: '12px', fontWeight: '700', color: 'var(--dim)', marginBottom: '5px' } }, t.name), nm),
      el('div', null, el('div', { style: { fontSize: '12px', fontWeight: '700', color: 'var(--dim)', marginBottom: '5px' } }, t.scale), sc)));
    bd.append(el('div', { style: { fontSize: '11.5px', color: 'var(--mute)', margin: '-6px 0 12px' } }, t.scaleNote + ' ' + (m.legend && m.legend.length === 5 ? t.descNoteLeg : t.descNote)));
    if (m.rating) {
      const opts = m.ratingOptions || [];
      const line = el('div', { style: { fontSize: '12.5px', color: 'var(--dim)', background: 'var(--bg)', border: '1px solid var(--brd)', borderRadius: '8px', padding: '8px 12px', marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' } },
        el('span', null, t.rateCol + ' '), el('b', null, '«' + m.rating.header + '»'), el('span', { style: { color: 'var(--mute)' } }, t.rateMap[m.rating.type] || ''));
      if (opts.length > 1) { const sel = el('select', { className: 'inp', style: { padding: '4px 8px', fontSize: '12px', marginLeft: 'auto' } }, ...opts.map(o => el('option', { value: o.key }, o.header + (o.type === 'risk' ? ' ↺' : '') + ' · ' + o.n))); sel.value = ST.opts.ratingKey; sel.addEventListener('change', () => { ST.opts.ratingKey = sel.value; ST.opts.scale = null; recompute(); paint(); }); line.append(sel); }
      bd.append(line);
    }
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

  async function analyze(f, opts) { const src = await readSource(f); return Object.assign({ src: { tables: (src.tables || []).length, text: !!src.text, scanned: !!src.scanned } }, D.derive({ tables: src.tables || [], text: src.text }, Object.assign({ lang: 'en' }, opts || {}))); }
  window.DERIVE_UI = { analyze, open, label: () => T().btn, caption: () => T().cap };
})();
