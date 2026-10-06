/* FCMA — motor de IA SIMULADO (modo demo, sin API key).
   Se usa solo cuando AI_URL está vacío. Devuelve exactamente las mismas estructuras que apps-script/AI.gs,
   así que al configurar AI_URL la app pasa a la IA real sin tocar nada más.
   Es determinista: no inventa cifras; todo número del reporte sale del cálculo del assessment. */
(function () {
  'use strict';
  const STOP = new Set(('para como esta este esto esos esas sobre entre desde hasta cuando donde porque pero tambien mediante segun dentro cada todo toda todos todas '
    + 'with that this from have been which their they them into such also than then these those over under about through between during using used '
    + 'para como esta esse essa isso quando onde porque mais tambem sobre entre desde ate cada todo toda todos todas com uma uns umas dos das nos nas '
    + 'tiene tienen cuenta cuentan existe existen nivel proceso procesos').split(/\s+/));
  const GENERIC = new Set(['fraude','fraud','banco','bank','estrat','strate','docume','organi','instit','proces','gestio','manage','contro','riesgo','risk','equipo','sistem','tiempo','nivel','existe','empres','compan','client','custom','servic','produc','canale','channe','exists','exist','aproba','approv','revisa','review','anual','annual','report','regula','tiempo','real']);
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const stem = w => w.slice(0, 6);
  function toks(s, keepGeneric) {
    const out = new Map();
    norm(s).split(/[^a-z0-9]+/).forEach(w => { if (w.length >= 4 && !STOP.has(w)) { const k = stem(w); if (GENERIC.has(k) && !keepGeneric) return; if (!out.has(k)) out.set(k, w); } });
    return out;
  }
  const clip = (s, n) => { const w = String(s || '').replace(/\s+/g, ' ').trim().split(' '); return w.length > n ? w.slice(0, n).join(' ').replace(/[,;:.\-–]+$/, '') + '…' : w.join(' '); };
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const jitter = (a, b) => a + Math.random() * (b - a);

  const TX = {
    es: {
      rat: (w, l, d) => `El contexto menciona «${w}»; coincide con el nivel ${l}: ${d}`,
      ratInf: (w, l) => `Evidencia indirecta (${w}); se propone el nivel ${l} de forma conservadora.`,
      head: (o, s, m) => `${o} alcanza ${s} sobre 5.00 (${m}): ${s >= 3.5 ? 'base sólida con espacio para optimizar' : s >= 2.5 ? 'controles definidos que aún no se gestionan con métricas' : 'controles aún reactivos que requieren un plan de cierre de brechas'}.`,
      p1: (o, s, m, a, t, c, e) => `${o} obtiene un score global de ${s} / 5.00, equivalente al nivel «${m}». Se evaluaron ${a} de ${t} componentes (${c}% de completitud) y la exposición residual global es de ${e}%, frente a una meta de referencia de 4.0.`,
      p2: (hi, lo, g, un) => `El pilar más fuerte es «${hi.name}» (${hi.score}) y el más débil «${lo.name}» (${lo.score}). Se identificaron ${g} brecha(s) crítica(s), es decir componentes en nivel 1 o 2.` + (un ? ` ${un} pilar(es) no fueron evaluados y no se incluyen en la lectura.` : ''),
      str: (p, n, m) => `«${p.name}» alcanza ${p.score} con ${n} de ${m} componentes evaluados, por encima del nivel Definido.`,
      pc: (b, p, d) => `Nivel ${b}: score ${p.score}, exposición ${p.exposure}%. ${p.gaps ? `${p.gaps} brecha(s) crítica(s) de ${p.answered} componentes evaluados.` : 'Sin brechas críticas en lo evaluado.'} ${d > 0 ? `Faltan ${d.toFixed(2)} pts para la meta de 4.0.` : 'Supera la meta de referencia de 4.0.'}`,
      risk: (l, ln, p) => `Con nivel ${l} (${ln}) en «${p}», la organización queda expuesta a riesgos que se detectan tarde o no se mitigan.`,
      rec: (a, b, n) => `Avanzar del nivel ${a} al ${b}: ${n}`,
      ini: p => `Cerrar brechas críticas en ${p}`,
      iniR: (n, a, b, core) => `Agrupa ${n} brecha(s) crítica(s) (niveles ${a}–${b})${core ? ', incluidos componentes núcleo' : ''}.`,
      gov: 'Gobierno del plan: responsables, presupuesto y comité de seguimiento', govR: 'Sin dueño y calendario, las brechas cerradas en papel no se sostienen.',
      kpi: 'Medición continua y reevaluación FCMA a 12 meses', kpiR: 'Permite demostrar la mejora del score frente a la línea base actual.',
      ns: [s => `Validar los resultados con los responsables de cada pilar (${s}).`, () => 'Aprobar el plan de 0–90 días y asignar un responsable por iniciativa.', () => 'Reevaluar con el mismo assessment en 6 meses para medir el avance del score.']
    },
    en: {
      rat: (w, l, d) => `The context mentions “${w}”; matches level ${l}: ${d}`,
      ratInf: (w, l) => `Indirect evidence (${w}); level ${l} proposed conservatively.`,
      head: (o, s, m) => `${o} scores ${s} out of 5.00 (${m}): ${s >= 3.5 ? 'a solid base with room to optimize' : s >= 2.5 ? 'defined controls not yet managed with metrics' : 'still-reactive controls that need a gap-closure plan'}.`,
      p1: (o, s, m, a, t, c, e) => `${o} obtains a global score of ${s} / 5.00, equivalent to the “${m}” level. ${a} of ${t} components were assessed (${c}% completion) and global residual exposure is ${e}%, against a reference target of 4.0.`,
      p2: (hi, lo, g, un) => `The strongest pillar is “${hi.name}” (${hi.score}) and the weakest “${lo.name}” (${lo.score}). ${g} critical gap(s) were identified, i.e. components at level 1 or 2.` + (un ? ` ${un} pillar(s) were not assessed and are excluded from the reading.` : ''),
      str: (p, n, m) => `“${p.name}” reaches ${p.score} with ${n} of ${m} components assessed, above the Defined level.`,
      pc: (b, p, d) => `Level ${b}: score ${p.score}, exposure ${p.exposure}%. ${p.gaps ? `${p.gaps} critical gap(s) out of ${p.answered} assessed components.` : 'No critical gaps in what was assessed.'} ${d > 0 ? `${d.toFixed(2)} pts short of the 4.0 target.` : 'Exceeds the 4.0 reference target.'}`,
      risk: (l, ln, p) => `At level ${l} (${ln}) in “${p}”, the organization is exposed to risks that are detected late or not mitigated.`,
      rec: (a, b, n) => `Move from level ${a} to ${b}: ${n}`,
      ini: p => `Close critical gaps in ${p}`,
      iniR: (n, a, b, core) => `Groups ${n} critical gap(s) (levels ${a}–${b})${core ? ', including core components' : ''}.`,
      gov: 'Plan governance: owners, budget and a follow-up committee', govR: 'Without an owner and a calendar, gaps closed on paper do not hold.',
      kpi: 'Continuous measurement and FCMA reassessment at 12 months', kpiR: 'Shows the score improvement against today’s baseline.',
      ns: [s => `Validate the results with each pillar owner (${s}).`, () => 'Approve the 0–90 day plan and assign an owner per initiative.', () => 'Reassess with the same assessment in 6 months to measure score progress.']
    },
    pt: {
      rat: (w, l, d) => `O contexto menciona «${w}»; coincide com o nível ${l}: ${d}`,
      ratInf: (w, l) => `Evidência indireta (${w}); nível ${l} proposto de forma conservadora.`,
      head: (o, s, m) => `${o} atinge ${s} de 5.00 (${m}): ${s >= 3.5 ? 'base sólida com espaço para otimizar' : s >= 2.5 ? 'controles definidos ainda sem gestão por métricas' : 'controles ainda reativos que exigem um plano de fechamento de lacunas'}.`,
      p1: (o, s, m, a, t, c, e) => `${o} obtém um score global de ${s} / 5.00, equivalente ao nível «${m}». Foram avaliados ${a} de ${t} componentes (${c}% de completude) e a exposição residual global é de ${e}%, frente a uma meta de referência de 4.0.`,
      p2: (hi, lo, g, un) => `O pilar mais forte é «${hi.name}» (${hi.score}) e o mais fraco «${lo.name}» (${lo.score}). Foram identificadas ${g} lacuna(s) crítica(s), ou seja, componentes no nível 1 ou 2.` + (un ? ` ${un} pilar(es) não foram avaliados e ficam fora da leitura.` : ''),
      str: (p, n, m) => `«${p.name}» atinge ${p.score} com ${n} de ${m} componentes avaliados, acima do nível Definido.`,
      pc: (b, p, d) => `Nível ${b}: score ${p.score}, exposição ${p.exposure}%. ${p.gaps ? `${p.gaps} lacuna(s) crítica(s) em ${p.answered} componentes avaliados.` : 'Sem lacunas críticas no que foi avaliado.'} ${d > 0 ? `Faltam ${d} pontos para a meta de 4.0.` : 'Supera a meta de referência de 4.0.'}`,
      risk: (l, ln, p) => `Com nível ${l} (${ln}) em «${p}», a organização fica exposta a riscos detectados tarde ou não mitigados.`,
      rec: (a, b, n) => `Avançar do nível ${a} para ${b}: ${n}`,
      ini: p => `Fechar lacunas críticas em ${p}`,
      iniR: (n, a, b, core) => `Agrupa ${n} lacuna(s) crítica(s) (níveis ${a}–${b})${core ? ', incluindo componentes núcleo' : ''}.`,
      gov: 'Governança do plano: responsáveis, orçamento e comitê de acompanhamento', govR: 'Sem dono e calendário, lacunas fechadas no papel não se sustentam.',
      kpi: 'Medição contínua e reavaliação FCMA em 12 meses', kpiR: 'Permite demonstrar a melhora do score frente à linha de base atual.',
      ns: [s => `Validar os resultados com os responsáveis de cada pilar (${s}).`, () => 'Aprovar o plano de 0–90 dias e atribuir um responsável por iniciativa.', () => 'Reavaliar com o mesmo assessment em 6 meses para medir o avanço do score.']
    }
  };
  const tx = lang => TX[lang] || TX.es;


  /* Si el contexto viene organizado por secciones ("P4 — DETECTION ...", "PILLAR 3: ..."), el motor solo usa la
     sección que corresponde al pilar que está evaluando; así el texto de otros pilares no genera coincidencias falsas.
     Si no hay secciones reconocibles, usa todo el contexto. */
  const HEAD = /^\s*(?:pilar|pillar|p)?\s*\d+\s*[—–:.\-]\s*(.{3,120})$/i;
  function sectionsOf(text) {
    const lines = String(text || '').split(/\r?\n/); const secs = []; let cur = { title: '', body: [] };
    lines.forEach(l => {
      const m = l.match(HEAD);
      if (m && l.trim().length < 130 && !/[a-z]{3,}\s+[a-z]{3,}\s+[a-z]{3,}.*[a-z]\.$/.test(l)) { secs.push(cur); cur = { title: m[1], body: [] }; }
      else if (/^\s*PART\s+[A-Z]\b/i.test(l)) { secs.push(cur); cur = { title: '', body: [] }; }
      else cur.body.push(l);
    });
    secs.push(cur);
    return secs.filter(x => x.title).map(x => ({ stems: new Set(toks(x.title, true).keys()), text: x.body.join('\n') }));
  }
  function evidenceFor(context, pillar) {
    if (!pillar || !pillar.name) return context;
    const secs = sectionsOf(context); if (secs.length < 2) return context;
    const pn = new Set(toks(pillar.name, true).keys()); let best = null, bs = 0;
    secs.forEach(s => { let n = 0; s.stems.forEach(k => { if (pn.has(k)) n++; }); if (n > bs) { bs = n; best = s; } });
    return best && bs >= 2 ? best.text : context;
  }

  /* ───────── relleno ───────── */
  function fill(req) {
    const t = tx(req.lang);
    const NEG = /\b(no (tiene|tenemos|existe|hay|cuenta|contamos)|sin |carece|inexistente|ninguno|manual|informal|ad hoc|not have|no formal|lack|nao tem|nao existe)\b/;
    const pos = String(evidenceFor(req.context, req.pillar) || '').split(/[.\n;]+/).filter(x => !NEG.test(norm(x))).join('. ');
    const ctx = toks(pos);
    const negText = String(evidenceFor(req.context, req.pillar) || '').split(/[.\n;]+/).filter(x => NEG.test(norm(x))).join('. ');
    const ctxNeg = toks(negText);
    const results = (req.components || []).map(c => {
      const nameT = toks(c.name);
      const lv = (c.levels || []).map(toks);
      const freq = new Map(); lv.forEach(m => m.forEach((_, k) => freq.set(k, (freq.get(k) || 0) + 1)));
      const nameHits = [...nameT.keys()].filter(k => ctx.has(k));
      const d = lv.map((m, i) => [...m.keys()].filter(k => (i === 0 ? ctxNeg : ctx).has(k) && (freq.get(k) || 0) <= 2));
      /* Puntaje normalizado por el largo del descriptor: evita que los niveles altos (descriptores más largos)
         ganen solo por acumular coincidencias casuales. Empates -> nivel más bajo (conservador). */
      let best = -1, mx = 0, bestScore = 0;
      d.forEach((h, i) => { const sc = h.length / Math.sqrt(Math.max(4, lv[i].size)); if (h.length >= 2 && sc > bestScore + 1e-9) { bestScore = sc; best = i; mx = h.length; } });
      const evidence = nameHits.length * 2 + mx;
      const solid = mx >= 2;
      if (!solid) return { id: c.id, level: null, confidence: 'low', basis: 'no_evidence', rationale: '' };
      if (mx >= 1) {
        const words = d[best].map(k => ctx.get(k)).sort((a, b) => b.length - a.length).slice(0, 3).join(', ');
        const basis = mx >= 2 ? 'stated' : 'inferred';
        const conf = mx >= 3 ? 'high' : 'medium';
        const lvl = best === 4 && mx < 4 ? 3 : (best === 3 && mx < 3 ? 3 : best + 1);
        return { id: c.id, level: lvl, confidence: lvl !== best + 1 ? 'medium' : conf, basis, rationale: t.rat(words, lvl, clip(c.levels[lvl - 1], 14)) };
      }
      return { id: c.id, level: null, confidence: 'low', basis: 'no_evidence', rationale: '' };
    });
    return { results };
  }

  /* ───────── reporte ───────── */
  const lname = l => (window.AIX && window.AIX.levelName ? window.AIX.levelName(l) : String(l));
  const bandName = s => (window.AIX && window.AIX.band ? (window.AIX.band(s).label || window.AIX.band(s).name || '') : '');
  function report(req) {
    const t = tx(req.lang), m = req.model;
    const org = (m.org && m.org.company) || '';
    const assessed = m.pillars.filter(p => p.answered > 0);
    if (req.part === 'plan') {
      const gaps = m.gaps || [];
      const findings = gaps.slice(0, 8).map(g => {
        const p = m.pillars.find(x => x.id === g.pillar) || { name: g.pillar };
        return { id: g.id, title: clip(g.name, 12), risk: t.risk(g.level, lname(g.level), p.name), recommendation: t.rec(g.level, Math.min(5, g.level + 1), clip(g.next, 30)) };
      });
      const byP = {}; gaps.forEach(g => { (byP[g.pillar] = byP[g.pillar] || []).push(g); });
      const groups = Object.keys(byP).map(id => ({ p: m.pillars.find(x => x.id === id) || { name: id, score: 0 }, g: byP[id] }))
        .sort((a, b) => b.g.filter(x => x.core).length - a.g.filter(x => x.core).length || b.g.length - a.g.length || a.p.score - b.p.score);
      const n = groups.length, hz = ['0-90', '90-180', '180-365'];
      const roadmap = groups.slice(0, 7).map((x, i) => {
        const lv = x.g.map(g => g.level), core = x.g.some(g => g.core);
        return { horizon: hz[Math.min(2, Math.floor(i * 3 / Math.max(1, n)))], initiative: clip(t.ini(x.p.name), 14), rationale: clip(t.iniR(x.g.length, Math.min(...lv), Math.max(...lv), core), 30),
          components: x.g.map(g => g.id).slice(0, 8), effort: x.g.length >= 4 ? 'high' : x.g.length >= 2 ? 'medium' : 'low', impact: core ? 'high' : 'medium' };
      });
      roadmap.unshift({ horizon: '0-90', initiative: clip(t.gov, 14), rationale: t.govR, components: [], effort: 'low', impact: 'high' });
      roadmap.push({ horizon: '180-365', initiative: clip(t.kpi, 14), rationale: t.kpiR, components: [], effort: 'medium', impact: 'medium' });
      const lowest = assessed.slice().sort((a, b) => a.score - b.score).slice(0, 2).map(p => p.id).join(', ');
      return { findings, roadmap, next_steps: t.ns.map(f => f(lowest)) };
    }
    const e = Math.round((5 - m.total) / 4 * 100);
    const sorted = assessed.slice().sort((a, b) => b.score - a.score);
    const hi = sorted[0], lo = sorted[sorted.length - 1];
    const pc = {};
    assessed.forEach(p => { pc[p.id] = clip(t.pc(bandName(p.score), p, +(4 - p.score).toFixed(2)), 40); });
    const strengths = sorted.filter(p => p.score >= 3.0).slice(0, 3).map(p => ({ pillar: p.id, text: t.str(p, p.answered, p.total) }));
    return {
      headline: clip(t.head(org || ({ en: 'The organization', pt: 'A organização' }[req.lang] || 'La organización'), m.total.toFixed(2), m.maturity), 22),
      executive_summary: t.p1(org || ({ en: 'The organization', pt: 'A organização' }[req.lang] || 'La organización'), m.total.toFixed(2), m.maturity, m.answered, m.totalQ, m.completionPct, e) + '\n\n' + t.p2(hi, lo, m.gapCount, m.pillars.length - assessed.length),
      strengths, pillar_commentary: pc
    };
  }

  async function run(task, payload) {
    if (task === 'fill') {
      if (String(payload.context || '').trim().length < 40) { const e = new Error('Context too short'); e.code = 400; e.fatal = true; throw e; }
      await sleep(jitter(700, 1600)); return fill(payload);
    }
    if (task === 'report') { await sleep(jitter(1400, 2400)); return report(payload); }
    throw new Error('Unknown task');
  }
  window.AIX_SIM = { run, fill, report };
})();
