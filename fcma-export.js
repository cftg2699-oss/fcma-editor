/* FCMA exports: PDF (jsPDF, vector) and PowerPoint (PptxGenJS, native editable charts).
 * Everything numeric comes from AIX.buildModel(); the AI narrative (if any) comes from AIX.ensureReport(). */
(function () {
  'use strict';

  /* ───────────── strings ───────────── */
  const X = {
    es: { conf: 'CONFIDENCIAL', prepared: 'Preparado para', date: 'Fecha', exec: 'Resumen ejecutivo', dist: 'Distribución por nivel', pillars: 'Resultados por pilar', findings: 'Hallazgos críticos', roadmap: 'Hoja de ruta', next: 'Próximos pasos', method: 'Metodología y alcance', radar: 'Perfil de madurez', target: 'Meta 4.0', level: 'Nivel', comps: 'componentes', page: 'Página', noAI: 'Narrativa de IA no disponible en este reporte.', strengths: 'Fortalezas',
      m: ['Cada componente se evalúa en una escala de 1 (inexistente) a 5 (optimizado).', 'El score de un pilar es el promedio de sus componentes respondidos; el score global es el promedio de los pilares evaluados. Los pilares sin respuestas no se incluyen.', 'Bandas de madurez: Inexistente < 1,5 · Reactivo 1,5–2,49 · Definido 2,5–3,49 · Gestionado 3,5–4,24 · Optimizado ≥ 4,25.', 'Exposición residual = (5 − score) / 4, expresada en %. 0 % equivale a nivel 5 y 100 % a nivel 1.', 'Brecha crítica = componente evaluado en nivel 1 o 2. La meta de referencia es 4,0.', 'Los resultados reflejan las respuestas declaradas; no constituyen una auditoría independiente.'],
      ai: 'La narrativa (resumen, lecturas por pilar, hallazgos y hoja de ruta) fue generada con IA a partir de los resultados calculados y debe ser validada por el responsable.' },
    en: { conf: 'CONFIDENTIAL', prepared: 'Prepared for', date: 'Date', exec: 'Executive summary', dist: 'Distribution by level', pillars: 'Results by pillar', findings: 'Critical findings', roadmap: 'Roadmap', next: 'Next steps', method: 'Methodology and scope', radar: 'Maturity profile', target: 'Target 4.0', level: 'Level', comps: 'components', page: 'Page', noAI: 'AI narrative not available in this report.', strengths: 'Strengths',
      m: ['Each component is rated on a scale from 1 (non-existent) to 5 (optimized).', 'A pillar score is the average of its answered components; the global score is the average of assessed pillars. Pillars with no answers are excluded.', 'Maturity bands: Non-Existent < 1.5 · Reactive 1.5–2.49 · Defined 2.5–3.49 · Managed 3.5–4.24 · Optimized ≥ 4.25.', 'Residual exposure = (5 − score) / 4, shown as %. 0% equals level 5 and 100% equals level 1.', 'Critical gap = component rated level 1 or 2. The reference target is 4.0.', 'Results reflect declared answers; they are not an independent audit.'],
      ai: 'The narrative (summary, pillar readings, findings and roadmap) was generated with AI from the calculated results and must be validated by the owner.' },
    pt: { conf: 'CONFIDENCIAL', prepared: 'Preparado para', date: 'Data', exec: 'Resumo executivo', dist: 'Distribuição por nível', pillars: 'Resultados por pilar', findings: 'Achados críticos', roadmap: 'Roadmap', next: 'Próximos passos', method: 'Metodologia e escopo', radar: 'Perfil de maturidade', target: 'Meta 4.0', level: 'Nível', comps: 'componentes', page: 'Página', noAI: 'Narrativa de IA não disponível neste relatório.', strengths: 'Pontos fortes',
      m: ['Cada componente é avaliado em uma escala de 1 (inexistente) a 5 (otimizado).', 'O score de um pilar é a média dos componentes respondidos; o score global é a média dos pilares avaliados. Pilares sem respostas são excluídos.', 'Faixas de maturidade: Inexistente < 1,5 · Reativo 1,5–2,49 · Definido 2,5–3,49 · Gerenciado 3,5–4,24 · Otimizado ≥ 4,25.', 'Exposição residual = (5 − score) / 4, em %. 0 % equivale ao nível 5 e 100 % ao nível 1.', 'Lacuna crítica = componente avaliado no nível 1 ou 2. A meta de referência é 4,0.', 'Os resultados refletem as respostas declaradas; não constituem auditoria independente.'],
      ai: 'A narrativa (resumo, leituras por pilar, achados e roadmap) foi gerada com IA a partir dos resultados calculados e deve ser validada pelo responsável.' }
  };
  const XT = () => X[LANG] || X.en;

  /* ───────────── helpers ───────────── */
  const loaded = {};
  function loadScript(src) {
    if (!loaded[src]) loaded[src] = new Promise((res, rej) => { const s = document.createElement('script'); s.src = new URL(src, document.baseURI).href; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src)); document.head.append(s); });
    return loaded[src];
  }
  const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const noHash = h => h.replace('#', '').toUpperCase();
  const clean = s => String(s == null ? '' : s).replace(/[‘’‚]/g, "'").replace(/[“”„]/g, '"').replace(/[–—−]/g, '-').replace(/…/g, '...').replace(/[•●]/g, '-').replace(/→/g, '->').replace(/≥/g, '>=').replace(/≤/g, '<=').replace(/ /g, ' ').replace(/[^\x09\x0A\x0D\x20-\x7E¡-ÿ]/g, '');
  const slug = s => String(s || 'report').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 40) || 'report';
  const fileBase = m => 'FCMA_Report_' + slug(m.org.company) + '_' + m.date.toISOString().slice(0, 10);
  const fmtDate = (d, lang) => d.toLocaleDateString(lang === 'es' ? 'es-CO' : lang === 'pt' ? 'pt-BR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const fmtScore = n => n.toFixed(1);
  /* Shorten a pillar name on word boundaries without leaving dangling "and"/commas. */
  function short(name, n) {
    let out = '';
    for (const w of String(name).split(/\s+/)) { if ((out + ' ' + w).trim().length > n) break; out = (out + ' ' + w).trim(); }
    for (let k = 0; k < 3; k++) out = out.replace(/\s+(and|y|e|of|de|&)$/i, '').replace(/[,;:(]+$/, '');
    return out || String(name).slice(0, n);
  }
  function sortedGaps(m) { return m.gaps.slice(); }
  function findingsOf(m, rep) {
    const ai = (rep && rep.plan && rep.plan.findings) || [];
    if (ai.length) return ai.map(f => Object.assign({ gap: m.gaps.find(g => g.id === f.id) }, f)).filter(f => f.gap);
    return sortedGaps(m).slice(0, 8).map(g => ({ id: g.id, title: g.name, gap: g }));
  }

  /* ═════════════════════════ PDF ═════════════════════════ */
  async function buildPdf(m, rep) {
    await loadScript('vendor/jspdf.umd.min.js');
    const { jsPDF } = window.jspdf;
    const A = window.AIX, t = A.T(), x = XT();
    const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    const W = 210, H = 297, M = 16, CW = W - 2 * M, FOOT = 16;
    const INK = [15, 23, 42], DIM = [71, 85, 105], MUTE = [148, 163, 184], LINE = [226, 232, 240], BG = [248, 250, 252], TEAL = [5, 150, 105];
    const ptmm = 0.3528;
    const s = (rep && rep.summary) || null, p = (rep && rep.plan) || null;
    let y = M;

    const font = (st, size, col) => { doc.setFont('helvetica', st); doc.setFontSize(size); if (col) doc.setTextColor(col[0], col[1], col[2]); };
    const wrap = (str, w, size, st) => { doc.setFont('helvetica', st || 'normal'); doc.setFontSize(size); return doc.splitTextToSize(clean(str), w); };
    function newPage() { doc.addPage(); y = M + 6; }
    function ensure(h) { if (y + h > H - FOOT - 4) newPage(); }
    function para(str, o) {
      o = Object.assign({ x: M, w: CW, size: 10, st: 'normal', col: DIM, lh: 1.5, after: 3 }, o || {});
      const L = wrap(str, o.w, o.size, o.st), step = o.size * ptmm * o.lh;
      for (let i = 0; i < L.length; i++) { ensure(step); font(o.st, o.size, o.col); doc.text(L[i], o.x, y + o.size * ptmm * 0.9); y += step; }
      y += o.after;
    }
    function h1(str) { ensure(16); font('bold', 17, INK); doc.text(clean(str), M, y + 6); doc.setDrawColor(...TEAL); doc.setLineWidth(0.9); doc.line(M, y + 9.5, M + 14, y + 9.5); y += 16; }
    function h2(str) { ensure(10); font('bold', 8.5, MUTE); doc.text(clean(str).toUpperCase(), M, y + 3, { charSpace: 0.4 }); y += 7; }
    function rrect(xx, yy, w, h, fill, line, r) { if (fill) doc.setFillColor(...fill); if (line) { doc.setDrawColor(...line); doc.setLineWidth(0.25); } doc.roundedRect(xx, yy, w, h, r || 2, r || 2, fill && line ? 'FD' : fill ? 'F' : 'S'); }
    function poly(pts, style) { const a = pts[0]; const seg = []; for (let i = 1; i < pts.length; i++) seg.push([pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]]); doc.lines(seg, a[0], a[1], [1, 1], style, true); }
    function arc(cx, cy, r, a0, a1, col, lw) {
      const pts = []; for (let a = a0; a <= a1 + 0.0001; a += Math.PI / 90) pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
      const seg = []; for (let i = 1; i < pts.length; i++) seg.push([pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]]);
      doc.setDrawColor(...col); doc.setLineWidth(lw); doc.setLineCap('round'); doc.lines(seg, pts[0][0], pts[0][1], [1, 1], 'S', false); doc.setLineCap('butt');
    }
    function ring(cx, cy, r, score, col, lw, track) { arc(cx, cy, r, -Math.PI / 2, 1.5 * Math.PI - 0.001, track || [226, 232, 240], lw); if (score > 0) arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * Math.min(score / 5, 0.9999), col, lw); }

    /* ── cover ── */
    doc.setFillColor(...INK); doc.rect(0, 0, W, H, 'F');
    doc.setFillColor(...TEAL); doc.rect(0, 0, 5, H, 'F');
    font('bold', 9, [110, 231, 183]); doc.text(clean(m.brand).toUpperCase(), 24, 30, { charSpace: 1.4 });
    font('bold', 31, [255, 255, 255]);
    const tl = wrap(m.framework, W - 24 - 24, 31, 'bold'); tl.forEach((ln, i) => doc.text(ln, 24, 70 + i * 13));
    font('normal', 15, [148, 163, 184]); doc.text(clean(t.repTitle), 24, 70 + tl.length * 13 + 4);
    doc.setDrawColor(...TEAL); doc.setLineWidth(1); doc.line(24, 70 + tl.length * 13 + 12, 44, 70 + tl.length * 13 + 12);
    let cy0 = 70 + tl.length * 13 + 30;
    if (m.org.company) { font('normal', 9, MUTE); doc.text(clean(x.prepared).toUpperCase(), 24, cy0, { charSpace: 0.8 }); font('bold', 21, [255, 255, 255]); const cl = wrap(m.org.company, 110, 21, 'bold'); cl.forEach((ln, i) => doc.text(ln, 24, cy0 + 9 + i * 9)); cy0 += 9 + cl.length * 9; }
    font('normal', 10.5, [203, 213, 225]);
    const sub = [m.org.contact && (m.org.contact + (m.org.role ? ', ' + m.org.role : '')), [m.org.sector, m.org.country].filter(Boolean).join(' | '), fmtDate(m.date, m.lang)].filter(Boolean);
    sub.forEach((ln, i) => doc.text(clean(ln), 24, cy0 + 6 + i * 6));
    const col = hex(m.maturity.color); /* la calificación va en la página 2, no en la portada (documento confidencial) */
    font('normal', 8, MUTE); doc.text(clean(x.conf), 24, H - 16, { charSpace: 1.2 });

    /* ── page 2: executive summary ── */
    newPage(); y = M;
    h1(x.exec);
    if (s && s.headline) para(s.headline, { size: 12.5, st: 'bold', col: INK, lh: 1.4, after: 5 });
    const kp = [[t.globalScore, fmtScore(m.total), col], [t.maturity, m.maturity.label, col], [t.completion, m.completionPct + '%', TEAL], [t.gaps, String(m.gapCount), m.gapCount ? [239, 68, 68] : [34, 197, 94]]];
    const kw = (CW - 9) / 4;
    kp.forEach((k, i) => { const kx = M + i * (kw + 3); rrect(kx, y, kw, 22, BG, LINE, 2.5); font('bold', k[1].length > 7 ? 11.5 : 19, k[2]); doc.text(clean(k[1]), kx + kw / 2, y + 11.5, { align: 'center' }); font('bold', 7, MUTE); doc.text(clean(k[0]).toUpperCase(), kx + kw / 2, y + 18.2, { align: 'center', charSpace: 0.3 }); });
    y += 29;
    if (s && s.executive_summary) s.executive_summary.split(/\n\n+/).forEach(q => para(q, { size: 10.5, lh: 1.55, after: 3.5 }));
    else para(m.maturity.desc, { size: 10.5, lh: 1.55, after: 3.5 });
    y += 3;

    /* radar + distribution */
    ensure(88);
    const top = y; const rc = { x: M + 46, y: top + 42, R: 29 };
    h2(x.radar);
    const N = m.pillars.length; const ang = i => (2 * Math.PI * i) / N - Math.PI / 2; const pt = (i, v) => [rc.x + rc.R * (v / 5) * Math.cos(ang(i)), rc.y + 3 + rc.R * (v / 5) * Math.sin(ang(i))];
    doc.setLineWidth(0.18); doc.setDrawColor(203, 213, 225);
    for (let lv = 1; lv <= 5; lv++) { const pts = []; for (let i = 0; i < N; i++) pts.push(pt(i, lv)); poly(pts, 'S'); }
    for (let i = 0; i < N; i++) { const e = pt(i, 5); doc.line(rc.x, rc.y + 3, e[0], e[1]); }
    doc.setDrawColor(...TEAL); doc.setLineWidth(0.4); doc.setLineDashPattern([1.2, 1.2], 0); { const pts = []; for (let i = 0; i < N; i++) pts.push(pt(i, 4)); poly(pts, 'S'); } doc.setLineDashPattern([], 0);
    const sp = m.pillars.map((q, i) => pt(i, q.score));
    doc.saveGraphicsState(); doc.setGState(new doc.GState({ opacity: 0.16 })); doc.setFillColor(37, 99, 235); poly(sp, 'F'); doc.restoreGraphicsState();
    doc.setDrawColor(37, 99, 235); doc.setLineWidth(0.7); poly(sp, 'S');
    m.pillars.forEach((q, i) => {
      if (q.score > 0) { const d = pt(i, q.score); doc.setFillColor(...hex(A.scoreColor(q.score))); doc.setDrawColor(255, 255, 255); doc.setLineWidth(0.4); doc.circle(d[0], d[1], 1.2, 'FD'); }
      const lp = [rc.x + (rc.R + 7) * Math.cos(ang(i)), rc.y + 3 + (rc.R + 7) * Math.sin(ang(i))]; const al = Math.abs(Math.cos(ang(i))) < 0.2 ? 'center' : Math.cos(ang(i)) > 0 ? 'left' : 'right';
      font('bold', 8, hex(A.scoreColor(q.score))); doc.text(clean(q.id), lp[0], lp[1] + 0.5, { align: al });
      font('normal', 7, MUTE); doc.text(q.score > 0 ? fmtScore(q.score) : '-', lp[0], lp[1] + 3.6, { align: al });
    });
    font('normal', 7, TEAL); doc.text('- - ' + clean(x.target), M, top + 84);
    /* distribution */
    const dx = M + 104, dw = CW - 104; let dy = top;
    font('bold', 8.5, MUTE); doc.text(clean(x.dist).toUpperCase(), dx, dy + 3, { charSpace: 0.4 }); dy += 9;
    const maxD = Math.max(1, ...Object.values(m.dist));
    [1, 2, 3, 4, 5].forEach(lv => {
      const c = hex(['#ef4444', '#f97316', '#f59e0b', '#3b82f6', '#22c55e'][lv - 1]);
      font('bold', 8, DIM); doc.text('L' + lv, dx, dy + 5);
      font('normal', 7.5, DIM); doc.text(clean(m.levels[lv - 1]), dx + 8, dy + 5);
      doc.setFillColor(...LINE); doc.roundedRect(dx + 34, dy + 1.6, dw - 48, 4.2, 1, 1, 'F');
      if (m.dist[lv]) { doc.setFillColor(...c); doc.roundedRect(dx + 34, dy + 1.6, Math.max(2, (dw - 48) * m.dist[lv] / maxD), 4.2, 1, 1, 'F'); }
      font('bold', 8, INK); doc.text(String(m.dist[lv]), dx + dw, dy + 5, { align: 'right' });
      dy += 9;
    });
    font('normal', 7.5, MUTE); doc.text(m.answered + ' / ' + m.totalQ + ' ' + clean(x.comps), dx, dy + 3);
    y = top + 90;

    if (s && (s.strengths || []).length) { h2(x.strengths); s.strengths.forEach(q => para(q.pillar + '  ' + q.text, { size: 9.5, after: 1.6 })); }

    /* ── pillars ── */
    y += 4; h1(x.pillars);
    font('normal', 7.5, MUTE); doc.text('|  ' + clean(x.target), W - M, y - 9, { align: 'right' });
    m.pillars.forEach(q => {
      const note = s && s.pillar_commentary && s.pillar_commentary[q.id];
      const nl = note ? wrap(note, CW - 12, 8.8, 'normal').length : 0;
      ensure(18 + nl * 4.3);
      const c = hex(A.scoreColor(q.score));
      doc.setFillColor(...c); doc.roundedRect(M, y, 9, 6.5, 1.4, 1.4, 'F'); font('bold', 7.5, [255, 255, 255]); doc.text(clean(q.id), M + 4.5, y + 4.5, { align: 'center' });
      font('bold', 10.5, INK); doc.text(clean(q.name), M + 12, y + 4.6);
      if (q.score > 0) { font('bold', 12, c); doc.text(fmtScore(q.score), W - M, y + 4.8, { align: 'right' }); }
      else { font('normal', 8.5, MUTE); doc.text(clean(t.notAssessed), W - M, y + 4.6, { align: 'right' }); }
      y += 9;
      if (q.score > 0) {
        doc.setFillColor(...LINE); doc.roundedRect(M + 12, y, CW - 12, 2.4, 1.2, 1.2, 'F'); doc.setFillColor(...c); doc.roundedRect(M + 12, y, Math.max(2, (CW - 12) * q.score / 5), 2.4, 1.2, 1.2, 'F');
        doc.setDrawColor(...TEAL); doc.setLineWidth(0.3); const tx = M + 12 + (CW - 12) * 0.8; doc.line(tx, y - 1, tx, y + 3.4);
        y += 5.2; font('normal', 7.8, MUTE);
        doc.text(clean(t.exposure + ' ' + q.exposure + '%  |  ' + q.answered + '/' + q.total + ' ' + t.answered + '  |  ' + q.gaps + ' ' + t.gaps.toLowerCase()), M + 12, y);
        y += 3;
      }
      if (note) { y += 1.2; para(note, { x: M + 12, w: CW - 12, size: 8.8, lh: 1.45, after: 0 }); }
      y += 4.5; doc.setDrawColor(...LINE); doc.setLineWidth(0.2); doc.line(M, y - 2.2, W - M, y - 2.2);
    });

    /* ── findings ── */
    const fin = findingsOf(m, rep);
    if (fin.length) {
      newPage(); h1(x.findings);
      fin.forEach(f => {
        const g = f.gap, gc = g.level === 1 ? [239, 68, 68] : [249, 115, 22];
        const blocks = [];
        if (f.risk) blocks.push([t.risk, f.risk]);
        if (f.recommendation) blocks.push([t.reco, f.recommendation]);
        blocks.push([t.current + ' (L' + g.level + ')', g.current || '-']);
        if (g.next) blocks.push([t.nextL + ' (L' + (g.level + 1) + ')', g.next]);
        const w = CW - 10; let hgt = 11;
        const meas = blocks.map(b => { const L = wrap(b[1], w, 8.8, 'normal'); hgt += 4.2 + L.length * 4.1 + 1.2; return L; });
        const tt = wrap(f.title, CW - 34, 10.5, 'bold'); hgt += (tt.length - 1) * 4.6;
        ensure(hgt + 4);
        rrect(M, y, CW, hgt, [255, 255, 255], LINE, 2);
        doc.setFillColor(...gc); doc.roundedRect(M, y, 1.8, hgt, 0.9, 0.9, 'F');
        font('bold', 7.5, gc); doc.text('L' + g.level, M + 6, y + 6.3);
        font('normal', 7.5, MUTE); doc.text(clean(f.id + (g.core ? '  CORE' : '')), M + 14, y + 6.3);
        font('bold', 10.5, INK); tt.forEach((ln, i) => doc.text(ln, M + 6 + 28, y + 6.3 + i * 4.6));
        let by = y + 11 + (tt.length - 1) * 4.6;
        blocks.forEach((b, i) => { font('bold', 7.5, MUTE); doc.text(clean(b[0]).toUpperCase(), M + 6, by + 2.2, { charSpace: 0.25 }); by += 4.2; font('normal', 8.8, DIM); meas[i].forEach(ln => { doc.text(ln, M + 6, by + 2.4); by += 4.1; }); by += 1.2; });
        y += hgt + 4;
      });
    }

    /* ── roadmap ── */
    if (p && (p.roadmap || []).length) {
      newPage(); h1(x.roadmap);
      [['0-90', [5, 150, 105]], ['90-180', [37, 99, 235]], ['180-365', [124, 58, 237]]].forEach(([hz, hc]) => {
        const items = p.roadmap.filter(r => r.horizon === hz); if (!items.length) return;
        ensure(18); doc.setFillColor(...hc); doc.roundedRect(M, y, CW, 7, 1.6, 1.6, 'F'); font('bold', 9.5, [255, 255, 255]); doc.text(clean(t.h[hz]), M + 4, y + 4.9); y += 11;
        items.forEach(r => {
          const L1 = wrap(r.initiative, CW - 8, 10, 'bold'), L2 = wrap(r.rationale, CW - 8, 8.8, 'normal');
          ensure(8 + L1.length * 4.5 + L2.length * 4.1 + 6);
          doc.setFillColor(...hc); doc.rect(M + 1, y + 1.2, 1.8, 1.8, 'F');
          font('bold', 10, INK); L1.forEach((ln, i) => doc.text(ln, M + 6, y + 3 + i * 4.5)); y += L1.length * 4.5 + 0.8;
          font('normal', 8.8, DIM); L2.forEach(ln => { doc.text(ln, M + 6, y + 2.6); y += 4.1; });
          font('bold', 7.5, MUTE); doc.text(clean(t.effort + ': ' + t.lvl[r.effort] + '   |   ' + t.impact + ': ' + t.lvl[r.impact] + (r.components && r.components.length ? '   |   ' + r.components.join(', ') : '')), M + 6, y + 3.2); y += 8;
        });
        y += 2;
      });
      if ((p.next_steps || []).length) { ensure(26); h2(x.next); p.next_steps.forEach((q, i) => para((i + 1) + '.  ' + q, { size: 9.5, after: 1.4 })); }
    }

    /* ── methodology ── */
    newPage(); h1(x.method);
    x.m.forEach(q => para('-  ' + q, { size: 9.5, lh: 1.55, after: 2 }));
    y += 3;
    if (s || p) para(x.ai, { size: 9, st: 'italic', col: DIM, after: 2 });
    else para(x.noAI, { size: 9, st: 'italic', col: DIM, after: 2 });
    if (m.aiAssisted) para(t.aiShare(m.aiAssistedPct, m.aiConfirmedPct), { size: 9, st: 'italic', col: DIM });

    /* ── footer on every page but the cover ── */
    const n = doc.getNumberOfPages();
    for (let i = 2; i <= n; i++) {
      doc.setPage(i); doc.setDrawColor(...LINE); doc.setLineWidth(0.2); doc.line(M, H - 12, W - M, H - 12);
      font('normal', 7.5, MUTE); doc.text(clean([m.org.company, m.brand].filter(Boolean).join('  |  ')), M, H - 7.5);
      doc.text(clean(x.page + ' ' + (i - 1) + ' / ' + (n - 1)), W - M, H - 7.5, { align: 'right' });
    }
    return doc;
  }

  /* ═════════════════════════ PPT ═════════════════════════ */
  async function buildPpt(m, rep) {
    await loadScript('vendor/pptxgen.bundle.js');
    const A = window.AIX, t = A.T(), x = XT();
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 in
    pptx.title = m.framework + ' - ' + m.org.company; pptx.author = m.brand; pptx.company = m.org.company;
    const F = 'Calibri', INK = '0F172A', DIM = '475569', MUTE = '94A3B8', LINE = 'E2E8F0', TEAL = '059669', BG = 'F8FAFC';
    const s = (rep && rep.summary) || null, p = (rep && rep.plan) || null;
    const mc = noHash(m.maturity.color);
    let n = 0;
    function base(title, sub) {
      const sl = pptx.addSlide(); n++; sl.background = { color: 'FFFFFF' };
      sl.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
      sl.addText(title, { x: 0.6, y: 0.35, w: 12.1, h: 0.6, fontFace: F, fontSize: 26, bold: true, color: INK, margin: 0 });
      if (sub) sl.addText(sub, { x: 0.6, y: 0.98, w: 12.1, h: 0.4, fontFace: F, fontSize: 13, color: DIM, margin: 0 });
      sl.addShape(pptx.ShapeType.line, { x: 0.6, y: 7.0, w: 12.1, h: 0, line: { color: LINE, width: 0.75 } });
      sl.addText([m.org.company, m.brand].filter(Boolean).join('  |  '), { x: 0.6, y: 7.05, w: 9, h: 0.3, fontFace: F, fontSize: 9, color: MUTE, margin: 0 });
      sl.addText(String(n), { x: 11.7, y: 7.05, w: 1, h: 0.3, fontFace: F, fontSize: 9, color: MUTE, align: 'right', margin: 0 });
      return sl;
    }
    function kpi(sl, xx, yy, w, val, label, color) {
      sl.addShape(pptx.ShapeType.roundRect, { x: xx, y: yy, w, h: 1.15, fill: { color: BG }, line: { color: LINE, width: 0.75 }, rectRadius: 0.08 });
      sl.addText(val, { x: xx, y: yy + 0.1, w, h: 0.62, fontFace: F, fontSize: String(val).length > 8 ? 17 : 28, bold: true, color, align: 'center', valign: 'middle', margin: 0 });
      sl.addText(label.toUpperCase(), { x: xx, y: yy + 0.76, w, h: 0.3, fontFace: F, fontSize: 9, bold: true, color: MUTE, align: 'center', margin: 0 });
    }

    /* 1 cover */
    { const sl = pptx.addSlide(); n++; sl.background = { color: INK };
      sl.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.3, h: 7.5, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
      sl.addText(m.brand.toUpperCase(), { x: 0.9, y: 0.7, w: 8, h: 0.4, fontFace: F, fontSize: 13, bold: true, color: '6EE7B7', charSpacing: 4, margin: 0 });
      sl.addText(m.framework, { x: 0.9, y: 1.9, w: 8.2, h: 1.9, fontFace: F, fontSize: 38, bold: true, color: 'FFFFFF', valign: 'top', margin: 0 });
      sl.addText(t.repTitle, { x: 0.9, y: 3.85, w: 8, h: 0.5, fontFace: F, fontSize: 20, color: MUTE, margin: 0 });
      if (m.org.company) { sl.addText(x.prepared.toUpperCase(), { x: 0.9, y: 5.05, w: 6, h: 0.3, fontFace: F, fontSize: 10, color: MUTE, charSpacing: 2, margin: 0 }); sl.addText(m.org.company, { x: 0.9, y: 5.35, w: 8, h: 0.55, fontFace: F, fontSize: 26, bold: true, color: 'FFFFFF', margin: 0 }); }
      sl.addText([m.org.contact && (m.org.contact + (m.org.role ? ', ' + m.org.role : '')), fmtDate(m.date, m.lang)].filter(Boolean).join('   |   '), { x: 0.9, y: 6.0, w: 8, h: 0.35, fontFace: F, fontSize: 13, color: 'CBD5E1', margin: 0 });
      sl.addText(x.conf, { x: 0.9, y: 7.0, w: 4, h: 0.3, fontFace: F, fontSize: 9, color: MUTE, charSpacing: 3, margin: 0 }); }

    /* 2 executive summary */
    { const sl = base(x.exec, s && s.headline ? s.headline : null);
      const paras = s && s.executive_summary ? s.executive_summary.split(/\n\n+/) : [m.maturity.desc];
      sl.addText(paras.map((q, i) => ({ text: q, options: { breakLine: true, paraSpaceAfter: 10 } })), { x: 0.6, y: 1.65, w: 7.0, h: 5.1, fontFace: F, fontSize: 15, color: DIM, valign: 'top', margin: 0, lineSpacingMultiple: 1.15 });
      const gx = 8.1, gw = 2.35;
      kpi(sl, gx, 1.65, gw, fmtScore(m.total), t.globalScore, mc); kpi(sl, gx + gw + 0.15, 1.65, gw, m.maturity.label, t.maturity, mc);
      kpi(sl, gx, 3.0, gw, m.completionPct + '%', t.completion, TEAL); kpi(sl, gx + gw + 0.15, 3.0, gw, String(m.gapCount), t.gaps, m.gapCount ? 'EF4444' : '22C55E');
      kpi(sl, gx, 4.35, gw, m.exposureTotal == null ? '-' : m.exposureTotal + '%', t.exposure, 'F97316'); kpi(sl, gx + gw + 0.15, 4.35, gw, m.answered + '/' + m.totalQ, t.answered, DIM);
      sl.addText(m.maturity.desc, { x: gx, y: 5.7, w: 4.85, h: 1.1, fontFace: F, fontSize: 11, italic: true, color: DIM, valign: 'top', margin: 0 }); }

    /* 3 maturity profile (radar) */
    { const sl = base(x.radar, null);
      const labels = m.pillars.map(q => q.id + ' ' + short(q.name, 22));
      sl.addChart(pptx.ChartType.radar, [{ name: t.score, labels, values: m.pillars.map(q => +q.score.toFixed(2)) }, { name: x.target, labels, values: m.pillars.map(() => 4) }],
        { x: 0.5, y: 1.2, w: 7.3, h: 5.7, radarStyle: 'marker', chartColors: ['2563EB', TEAL], lineSize: 2, lineDataSymbolSize: 7, valAxisMinVal: 0, valAxisMaxVal: 5, valAxisMajorUnit: 1, valAxisLabelFontSize: 9, catAxisLabelFontSize: 10, catAxisLabelFontFace: F, showLegend: true, legendPos: 'b', legendFontSize: 11, legendFontFace: F, valGridLine: { color: 'CBD5E1', size: 0.5 } });
      const rows = [[{ text: 'ID', options: { bold: true, color: 'FFFFFF', fill: { color: INK } } }, { text: t.score, options: { bold: true, color: 'FFFFFF', fill: { color: INK }, align: 'center' } }, { text: t.exposure, options: { bold: true, color: 'FFFFFF', fill: { color: INK }, align: 'center' } }]];
      m.pillars.forEach(q => rows.push([{ text: q.id + '  ' + q.name, options: { color: INK } }, { text: q.score > 0 ? fmtScore(q.score) : '-', options: { bold: true, align: 'center', color: noHash(A.scoreColor(q.score)) } }, { text: q.exposure == null ? '-' : q.exposure + '%', options: { align: 'center', color: DIM } }]));
      sl.addTable(rows, { x: 8.0, y: 1.5, w: 4.75, colW: [2.95, 0.8, 1.0], fontFace: F, fontSize: 10.5, border: { type: 'solid', pt: 0.5, color: LINE }, valign: 'middle', rowH: 0.42 }); }

    /* 4 pillar scores + exposure bars */
    { const sl = base(x.pillars, LANG === 'es' ? 'Score por pilar (1-5) y exposición residual (%)' : LANG === 'pt' ? 'Score por pilar (1-5) e exposição residual (%)' : 'Pillar score (1-5) and residual exposure (%)');
      const labels = m.pillars.map(q => q.id + ' ' + short(q.name, 28));
      sl.addChart(pptx.ChartType.bar, [{ name: t.score, labels, values: m.pillars.map(q => +q.score.toFixed(2)) }], { x: 0.5, y: 1.5, w: 6.2, h: 5.3, barDir: 'bar', chartColors: m.pillars.map(q => noHash(A.scoreColor(q.score))), valAxisMinVal: 0, valAxisMaxVal: 5, valAxisMajorUnit: 1, showValue: true, dataLabelFontSize: 10, dataLabelFormatCode: '0.0', catAxisLabelFontSize: 10, catAxisLabelFontFace: F, catAxisOrientation: 'maxMin', valAxisLabelFontSize: 9, showLegend: false, valGridLine: { color: 'E2E8F0', size: 0.5 }, barGapWidthPct: 45 });
      sl.addChart(pptx.ChartType.bar, [{ name: t.exposure, labels, values: m.pillars.map(q => q.exposure == null ? 0 : q.exposure) }], { x: 6.8, y: 1.5, w: 6.0, h: 5.3, barDir: 'bar', chartColors: m.pillars.map(q => q.exposure == null ? 'CBD5E1' : q.exposure >= 70 ? 'EF4444' : q.exposure >= 50 ? 'F97316' : q.exposure >= 30 ? 'F59E0B' : '3B82F6'), valAxisMinVal: 0, valAxisMaxVal: 100, valAxisMajorUnit: 25, showValue: true, dataLabelFontSize: 10, dataLabelFormatCode: '0"%"', catAxisLabelFontSize: 10, catAxisLabelFontFace: F, catAxisOrientation: 'maxMin', valAxisLabelFontSize: 9, showLegend: false, valGridLine: { color: 'E2E8F0', size: 0.5 }, barGapWidthPct: 45 }); }

    /* 5 pillar reading (AI) */
    if (s && s.pillar_commentary) {
      const list = m.pillars.filter(q => s.pillar_commentary[q.id]);
      for (let i = 0; i < list.length; i += 5) {
        const sl = base(t.pillarsT, i ? '(' + (i / 5 + 1) + ')' : null);
        const rows = list.slice(i, i + 5).map(q => [{ text: q.id, options: { bold: true, color: noHash(A.scoreColor(q.score)), valign: 'middle' } }, { text: q.name, options: { bold: true, color: INK, valign: 'middle' } }, { text: fmtScore(q.score), options: { bold: true, color: noHash(A.scoreColor(q.score)), align: 'center', valign: 'middle', fontSize: 18 } }, { text: s.pillar_commentary[q.id], options: { color: DIM, valign: 'middle' } }]);
        sl.addTable(rows, { x: 0.6, y: 1.4, w: 12.1, colW: [0.7, 2.8, 0.9, 7.7], fontFace: F, fontSize: 12, border: { type: 'solid', pt: 0.5, color: LINE }, rowH: 1.0, margin: [0.06, 0.12, 0.06, 0.12] });
      }
    }

    /* 6 strengths + distribution */
    { const sl = base(x.dist, null);
      sl.addChart(pptx.ChartType.doughnut, [{ name: x.dist, labels: [1, 2, 3, 4, 5].map(l => 'L' + l + ' ' + m.levels[l - 1]), values: [1, 2, 3, 4, 5].map(l => m.dist[l]) }], { x: 0.5, y: 1.3, w: 6.0, h: 5.5, holeSize: 58, chartColors: ['EF4444', 'F97316', 'F59E0B', '3B82F6', '22C55E'], showLegend: true, legendPos: 'b', legendFontSize: 11, legendFontFace: F, showPercent: false, showValue: true, dataLabelColor: 'FFFFFF', dataLabelFontSize: 12 });
      const st = (s && s.strengths) || [];
      let ry = 1.6;
      if (st.length) {
        sl.addText(x.strengths.toUpperCase(), { x: 7.0, y: 1.5, w: 5.7, h: 0.3, fontFace: F, fontSize: 11, bold: true, color: MUTE, charSpacing: 2, margin: 0 });
        sl.addText(st.flatMap(q => [{ text: q.pillar + '  ', options: { bold: true, color: TEAL } }, { text: q.text, options: { color: DIM, breakLine: true, paraSpaceAfter: 10 } }]), { x: 7.0, y: 1.9, w: 5.7, h: 2.4, fontFace: F, fontSize: 13, valign: 'top', margin: 0, fit: 'shrink' });
        ry = 4.5;
      }
      const hd = (txt, al) => ({ text: txt, options: { bold: true, color: 'FFFFFF', fill: { color: INK }, align: al || 'left' } });
      const drows = [[hd(x.level), hd(x.comps, 'center'), hd('%', 'center')]].concat([1, 2, 3, 4, 5].map(l => [
        { text: [{ text: 'L' + l + '  ', options: { bold: true, color: ['EF4444', 'F97316', 'F59E0B', '3B82F6', '22C55E'][l - 1] } }, { text: m.levels[l - 1], options: { color: INK } }] },
        { text: String(m.dist[l]), options: { align: 'center', bold: true, color: INK } },
        { text: (m.answered ? Math.round(m.dist[l] / m.answered * 100) : 0) + '%', options: { align: 'center', color: DIM } }]));
      sl.addTable(drows, { x: 7.0, y: ry, w: 5.7, colW: [3.1, 1.3, 1.3], fontFace: F, fontSize: 12, border: { type: 'solid', pt: 0.5, color: LINE }, valign: 'middle', rowH: 0.45 }); }

    /* 7 critical findings */
    const fin = findingsOf(m, rep);
    for (let i = 0; i < fin.length; i += 4) {
      const sl = base(x.findings, fin.length > 4 ? (i / 4 + 1) + ' / ' + Math.ceil(fin.length / 4) : null);
      const head = ['L', LANG === 'en' ? 'Component' : 'Componente', t.risk, t.reco].map((h, k) => ({ text: h, options: { bold: true, color: 'FFFFFF', fill: { color: INK }, align: k === 0 ? 'center' : 'left' } }));
      const rows = [head].concat(fin.slice(i, i + 4).map(f => {
        const gc = f.gap.level === 1 ? 'EF4444' : 'F97316';
        return [{ text: 'L' + f.gap.level, options: { bold: true, color: gc, align: 'center', valign: 'middle', fontSize: 14 } }, { text: [{ text: f.id + (f.gap.core ? '  CORE' : ''), options: { fontSize: 9, color: MUTE, breakLine: true } }, { text: f.title, options: { bold: true, color: INK } }], options: { valign: 'middle' } },
          { text: f.risk || f.gap.current, options: { color: DIM, valign: 'middle' } }, { text: f.recommendation || f.gap.next || '-', options: { color: DIM, valign: 'middle' } }];
      }));
      sl.addTable(rows, { x: 0.6, y: 1.35, w: 12.1, colW: [0.7, 3.0, 4.2, 4.2], fontFace: F, fontSize: 11, border: { type: 'solid', pt: 0.5, color: LINE }, rowH: [0.4, 1.2, 1.2, 1.2, 1.2], margin: [0.05, 0.1, 0.05, 0.1] });
    }

    /* 8 roadmap */
    if (p && (p.roadmap || []).length) {
      const sl = base(x.roadmap, null);
      [['0-90', '059669'], ['90-180', '2563EB'], ['180-365', '7C3AED']].forEach(([hz, hc], i) => {
        const cx = 0.6 + i * 4.1, items = p.roadmap.filter(r => r.horizon === hz).slice(0, 4);
        sl.addShape(pptx.ShapeType.roundRect, { x: cx, y: 1.4, w: 3.9, h: 0.5, fill: { color: hc }, line: { color: hc, width: 0 }, rectRadius: 0.06 });
        sl.addText(t.h[hz], { x: cx, y: 1.4, w: 3.9, h: 0.5, fontFace: F, fontSize: 14, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0 });
        const hh = 4.85 / Math.max(items.length, 1), h = Math.min(hh - 0.1, 1.6);
        items.forEach((r, k) => {
          const yy = 2.05 + k * (h + 0.1);
          sl.addShape(pptx.ShapeType.roundRect, { x: cx, y: yy, w: 3.9, h, fill: { color: BG }, line: { color: LINE, width: 0.75 }, rectRadius: 0.06 });
          sl.addText([{ text: r.initiative, options: { bold: true, color: INK, fontSize: 13, breakLine: true, paraSpaceAfter: 3 } }, { text: r.rationale, options: { color: DIM, fontSize: 11, breakLine: true, paraSpaceAfter: 3 } }, { text: t.effort + ': ' + t.lvl[r.effort] + '  |  ' + t.impact + ': ' + t.lvl[r.impact], options: { color: hc, fontSize: 10, bold: true } }], { x: cx + 0.12, y: yy + 0.06, w: 3.66, h: h - 0.12, fontFace: F, valign: 'top', margin: 0, fit: 'shrink' });
        });
      });
    }

    /* 9 next steps + methodology */
    { const sl = base((p && (p.next_steps || []).length) ? x.next : x.method, null);
      let yy = 1.4;
      if (p && (p.next_steps || []).length) {
        sl.addText(p.next_steps.map((q, i) => ({ text: (i + 1) + '.  ' + q, options: { breakLine: true, paraSpaceAfter: 8 } })), { x: 0.6, y: yy, w: 12.1, h: 1.7, fontFace: F, fontSize: 15, color: INK, valign: 'top', margin: 0 });
        yy = 3.2; sl.addText(x.method.toUpperCase(), { x: 0.6, y: yy, w: 12, h: 0.3, fontFace: F, fontSize: 11, bold: true, color: MUTE, charSpacing: 2, margin: 0 }); yy += 0.4;
      }
      const notes = x.m.slice(); if (s || p) notes.push(x.ai); if (m.aiAssisted) notes.push(t.aiShare(m.aiAssistedPct, m.aiConfirmedPct));
      sl.addText(notes.map(q => ({ text: q, options: { bullet: true, breakLine: true, paraSpaceAfter: 4 } })), { x: 0.6, y: yy, w: 12.1, h: 7.0 - yy - 0.15, fontFace: F, fontSize: 11, color: DIM, valign: 'top', margin: 0, fit: 'shrink' }); }

    return pptx;
  }

  /* ───────────── public API ───────────── */
  async function prepare() {
    const A = window.AIX;
    const m = A.buildModel();
    if (!m.answered) { A.toast(A.T().needAnswers); return null; }
    const rep = await A.ensureReport();
    if (rep === null) return null;
    return { m, rep };
  }
  async function exportPDF() {
    const A = window.AIX; const pr = await prepare(); if (!pr) return;
    const b = A.busy(A.T().exporting);
    try { const doc = await buildPdf(pr.m, pr.rep); doc.save(fileBase(pr.m) + '.pdf'); }
    catch (e) { console.error(e); A.toast('PDF: ' + e.message, 6000); }
    finally { b.close(); }
  }
  async function exportPPT() {
    const A = window.AIX; const pr = await prepare(); if (!pr) return;
    const b = A.busy(A.T().exporting);
    try { const pptx = await buildPpt(pr.m, pr.rep); await pptx.writeFile({ fileName: fileBase(pr.m) + '.pptx' }); }
    catch (e) { console.error(e); A.toast('PPT: ' + e.message, 6000); }
    finally { b.close(); }
  }
  window.AIX_EXPORT = { buildPdf, buildPpt };
  /* fcma-ai.js is loaded first (see index.html), so AIX exists here. */
  window.AIX.exportPDF = exportPDF;
  window.AIX.exportPPT = exportPPT;
})();
