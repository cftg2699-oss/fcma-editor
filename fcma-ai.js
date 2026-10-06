/* FCMA AI layer: AI-assisted fill, AI report, and the shared data model used by the PDF/PPT exports.
 * Loaded after the main script in index.html; relies on its globals (DATA, ANSWERS, CORE, REG_DATA, LANG, ...).
 * Numbers are always computed here from ANSWERS; the AI only writes narrative around them. */
(function () {
  'use strict';

  /* ───────────── i18n ───────────── */
  const S = {
    es: {
      fillBtn: '✨ Rellenar con IA', fillTitle: 'Pre-evaluación con IA', fillSub: 'Describe la institución o sube sus documentos. La IA propone un nivel por componente con su justificación; tú revisas y aplicas.',
      ctxLabel: 'Contexto de la institución', ctxPh: tp => 'Describe la organización con el mayor detalle posible: tamaño y sector, sistemas y canales, equipos, herramientas, políticas y controles que ya existen, y lo que todavía no tienen.' + (tp ? '\n\nPuedes cubrir temas como: ' + tp + '.' : ''),
      upload: '📎 Adjuntar documentos (PDF, TXT, MD, CSV)', chars: 'caracteres', onlyEmpty: 'Solo componentes sin responder', scope: 'Alcance', scopeAll: 'Todos los componentes', scopeCore: 'Solo Core',
      analyze: 'Analizar con IA', analyzing: 'Analizando…', cancel: 'Cancelar', close: 'Cerrar', tooShort: 'Agrega más contexto (mínimo ~40 caracteres) para que la IA pueda evaluar.', nothing: 'No hay componentes por completar con esa configuración.',
      jobsTitle: 'Progreso por pilar', jobWait: 'En cola', jobRun: 'Analizando', jobOk: 'Listo', jobErr: 'Error', retry: 'Reintentar fallidos',
      review: 'Revisión de propuestas', summary: (n, ne, lo) => `${n} propuestas · ${ne} sin evidencia · ${lo} con confianza baja`, filterAll: 'Todas', fHigh: 'Alta', fMed: 'Media', fLow: 'Baja', fNone: 'Sin evidencia',
      conf: { high: 'Confianza alta', medium: 'Confianza media', low: 'Confianza baja' }, basis: { stated: 'Declarado', inferred: 'Inferido', no_evidence: 'Sin evidencia' },
      applySel: n => `Aplicar ${n} seleccionadas`, applyOk: 'Aplicar alta y media', selAll: 'Seleccionar todas', selNone: 'Ninguna', bulkLbl: n => `${n} sin evidencia: asignar el mismo nivel a todas`, bulkBtn: 'Asignar', bulkPick: '— elige nivel —', selHint: n => `${n} sin nivel no se pueden marcar: asígnales un nivel (arriba, a todas a la vez, o una por una).`, applied: n => `${n} respuestas aplicadas`, noLevel: '— sin nivel —',
      aiNote: (c, b) => `✨ Sugerido por IA · ${c} · ${b}`, aiNoteOk: 'confirmado por ti',
      errNotConfigured: 'El servicio de IA aún no está configurado.', errGeneric: 'No se pudo completar la solicitud de IA.', errLimit: 'Se alcanzó el límite de uso de IA. Inténtalo más tarde.', errBusy: 'El servicio de IA está ocupado. Inténtalo de nuevo en un momento.', errPdf: 'No se pudo leer el PDF.',
      tab: 'Reporte IA', repTitle: 'Reporte ejecutivo', repSub: 'Narrativa y plan de acción generados por IA a partir de tus resultados. Todas las cifras provienen del cálculo del assessment.',
      gen: '✨ Generar reporte con IA', regen: '↻ Regenerar', generating: 'Generando reporte con IA…', stale: 'Las respuestas cambiaron desde que se generó este reporte. Regenera para actualizarlo.', needAnswers: 'Responde al menos un componente para generar el reporte.',
      emptyTitle: 'Reporte ejecutivo con IA', emptyBody: 'Genera un resumen ejecutivo, hallazgos críticos priorizados y una hoja de ruta a 12 meses basada en tus respuestas. Después podrás descargarlo en PDF o PowerPoint.',
      dlPdf: '⬇ PDF', dlPpt: '⬇ PowerPoint', strengths: 'Fortalezas', pillarsT: 'Lectura por pilar', findings: 'Hallazgos críticos', risk: 'Riesgo', reco: 'Recomendación', current: 'Nivel actual', nextL: 'Siguiente nivel',
      roadmap: 'Hoja de ruta', h: { '0-90': '0–90 días', '90-180': '3–6 meses', '180-365': '6–12 meses' }, effort: 'Esfuerzo', impact: 'Impacto', lvl: { low: 'Bajo', medium: 'Medio', high: 'Alto' }, nextSteps: 'Próximos pasos',
      exposure: 'Exposición residual', score: 'Score', answered: 'respondidas', notAssessed: 'No evaluado', aiShare: (a, c) => `${a}% de las respuestas fueron pre-llenadas con IA${a ? ` (${c}% confirmadas por el evaluador)` : ''}.`,
      exportNoAI: 'No se pudo generar la narrativa con IA. ¿Exportar solo con los datos calculados?', exporting: 'Preparando archivo…', gaps: 'Brechas críticas', completion: 'Completitud', globalScore: 'Score global', maturity: 'Nivel de madurez',
      matDesc: ['Sin estructura formal. Las decisiones son reactivas. Exposición regulatoria y financiera significativa.', 'Controles básicos informales. El programa responde a incidentes en lugar de prevenirlos.', 'Procesos documentados y repetibles. Gobernanza establecida. Brechas en automatización y coordinación interfuncional.', 'Impulsado por métricas y gestión proactiva. Monitoreo automatizado y basado en datos. Mejora continua establecida.', 'Programa de clase mundial con controles adaptativos en tiempo real y convergencia interfuncional total.'],
      matLbl: ['Inexistente', 'Reactivo', 'Definido', 'Gestionado', 'Optimizado']
    },
    en: {
      fillBtn: '✨ Fill with AI', fillTitle: 'AI pre-assessment', fillSub: 'Describe the institution or upload its documents. The AI proposes a level per component with its rationale; you review and apply.',
      ctxLabel: 'Institution context', ctxPh: tp => 'Describe the organization in as much detail as you can: size and sector, systems and channels, teams, tools, policies and controls already in place, and what is still missing.' + (tp ? '\n\nYou can cover topics such as: ' + tp + '.' : ''),
      upload: '📎 Attach documents (PDF, TXT, MD, CSV)', chars: 'characters', onlyEmpty: 'Only unanswered components', scope: 'Scope', scopeAll: 'All components', scopeCore: 'Core only',
      analyze: 'Analyze with AI', analyzing: 'Analyzing…', cancel: 'Cancel', close: 'Close', tooShort: 'Add more context (at least ~40 characters) so the AI can assess.', nothing: 'There are no components left to fill with this setup.',
      jobsTitle: 'Progress by pillar', jobWait: 'Queued', jobRun: 'Analyzing', jobOk: 'Done', jobErr: 'Error', retry: 'Retry failed',
      review: 'Review proposals', summary: (n, ne, lo) => `${n} proposals · ${ne} without evidence · ${lo} low confidence`, filterAll: 'All', fHigh: 'High', fMed: 'Medium', fLow: 'Low', fNone: 'No evidence',
      conf: { high: 'High confidence', medium: 'Medium confidence', low: 'Low confidence' }, basis: { stated: 'Stated', inferred: 'Inferred', no_evidence: 'No evidence' },
      applySel: n => `Apply ${n} selected`, applyOk: 'Apply high & medium', selAll: 'Select all', selNone: 'None', bulkLbl: n => `${n} with no evidence: set the same level for all`, bulkBtn: 'Set', bulkPick: '— pick a level —', selHint: n => `${n} without a level cannot be ticked: give them a level (above, all at once, or one by one).`, applied: n => `${n} answers applied`, noLevel: '— no level —',
      aiNote: (c, b) => `✨ AI suggested · ${c} · ${b}`, aiNoteOk: 'confirmed by you',
      errNotConfigured: 'The AI service is not configured yet.', errGeneric: 'The AI request could not be completed.', errLimit: 'AI usage limit reached. Please try again later.', errBusy: 'The AI service is busy. Try again in a moment.', errPdf: 'Could not read the PDF.',
      tab: 'AI Report', repTitle: 'Executive report', repSub: 'Narrative and action plan generated by AI from your results. All figures come from the assessment calculation.',
      gen: '✨ Generate AI report', regen: '↻ Regenerate', generating: 'Generating AI report…', stale: 'Answers changed since this report was generated. Regenerate to update it.', needAnswers: 'Answer at least one component to generate the report.',
      emptyTitle: 'AI executive report', emptyBody: 'Generate an executive summary, prioritized critical findings and a 12-month roadmap based on your answers. Then download it as PDF or PowerPoint.',
      dlPdf: '⬇ PDF', dlPpt: '⬇ PowerPoint', strengths: 'Strengths', pillarsT: 'Pillar reading', findings: 'Critical findings', risk: 'Risk', reco: 'Recommendation', current: 'Current level', nextL: 'Next level',
      roadmap: 'Roadmap', h: { '0-90': '0–90 days', '90-180': '3–6 months', '180-365': '6–12 months' }, effort: 'Effort', impact: 'Impact', lvl: { low: 'Low', medium: 'Medium', high: 'High' }, nextSteps: 'Next steps',
      exposure: 'Residual exposure', score: 'Score', answered: 'answered', notAssessed: 'Not assessed', aiShare: (a, c) => `${a}% of answers were pre-filled with AI${a ? ` (${c}% confirmed by the assessor)` : ''}.`,
      exportNoAI: 'The AI narrative could not be generated. Export with the calculated data only?', exporting: 'Preparing file…', gaps: 'Critical gaps', completion: 'Completion', globalScore: 'Global score', maturity: 'Maturity level',
      matDesc: ['No formal program structure. Decisions are reactive and ad hoc. Significant regulatory and financial exposure.', 'Basic controls exist but informal and undocumented. Program responds to incidents rather than preventing them.', 'Core processes documented and repeatable. Governance in place. Gaps remain in automation and cross-functional integration.', 'Metrics-driven and proactively managed. Monitoring is automated and data-driven. Continuous improvement established.', 'Best-in-class program with real-time adaptive controls, full cross-functional convergence, continuous optimization.'],
      matLbl: ['Non-Existent', 'Reactive', 'Defined', 'Managed', 'Optimized']
    },
    pt: {
      fillBtn: '✨ Preencher com IA', fillTitle: 'Pré-avaliação com IA', fillSub: 'Descreva a instituição ou envie seus documentos. A IA propõe um nível por componente com a justificativa; você revisa e aplica.',
      ctxLabel: 'Contexto da instituição', ctxPh: tp => 'Descreva a organização com o máximo de detalhe: porte e setor, sistemas e canais, equipes, ferramentas, políticas e controles existentes e o que ainda falta.' + (tp ? '\n\nVocê pode abordar temas como: ' + tp + '.' : ''),
      upload: '📎 Anexar documentos (PDF, TXT, MD, CSV)', chars: 'caracteres', onlyEmpty: 'Somente componentes sem resposta', scope: 'Escopo', scopeAll: 'Todos os componentes', scopeCore: 'Somente Core',
      analyze: 'Analisar com IA', analyzing: 'Analisando…', cancel: 'Cancelar', close: 'Fechar', tooShort: 'Adicione mais contexto (mínimo ~40 caracteres) para a IA avaliar.', nothing: 'Não há componentes a preencher com essa configuração.',
      jobsTitle: 'Progresso por pilar', jobWait: 'Na fila', jobRun: 'Analisando', jobOk: 'Pronto', jobErr: 'Erro', retry: 'Repetir falhas',
      review: 'Revisão das propostas', summary: (n, ne, lo) => `${n} propostas · ${ne} sem evidência · ${lo} com confiança baixa`, filterAll: 'Todas', fHigh: 'Alta', fMed: 'Média', fLow: 'Baixa', fNone: 'Sem evidência',
      conf: { high: 'Confiança alta', medium: 'Confiança média', low: 'Confiança baixa' }, basis: { stated: 'Declarado', inferred: 'Inferido', no_evidence: 'Sem evidência' },
      applySel: n => `Aplicar ${n} selecionadas`, applyOk: 'Aplicar alta e média', selAll: 'Selecionar todas', selNone: 'Nenhuma', bulkLbl: n => `${n} sem evidência: definir o mesmo nível para todas`, bulkBtn: 'Definir', bulkPick: '— escolha o nível —', selHint: n => `${n} sem nível não podem ser marcadas: atribua um nível (acima, todas de uma vez, ou uma a uma).`, applied: n => `${n} respostas aplicadas`, noLevel: '— sem nível —',
      aiNote: (c, b) => `✨ Sugerido por IA · ${c} · ${b}`, aiNoteOk: 'confirmado por você',
      errNotConfigured: 'O serviço de IA ainda não está configurado.', errGeneric: 'Não foi possível concluir a solicitação de IA.', errLimit: 'Limite de uso de IA atingido. Tente mais tarde.', errBusy: 'O serviço de IA está ocupado. Tente novamente em instantes.', errPdf: 'Não foi possível ler o PDF.',
      tab: 'Relatório IA', repTitle: 'Relatório executivo', repSub: 'Narrativa e plano de ação gerados por IA a partir dos seus resultados. Todos os números vêm do cálculo do assessment.',
      gen: '✨ Gerar relatório com IA', regen: '↻ Regenerar', generating: 'Gerando relatório com IA…', stale: 'As respostas mudaram desde a geração deste relatório. Regenere para atualizá-lo.', needAnswers: 'Responda ao menos um componente para gerar o relatório.',
      emptyTitle: 'Relatório executivo com IA', emptyBody: 'Gere um resumo executivo, achados críticos priorizados e um roadmap de 12 meses com base nas suas respostas. Depois baixe em PDF ou PowerPoint.',
      dlPdf: '⬇ PDF', dlPpt: '⬇ PowerPoint', strengths: 'Pontos fortes', pillarsT: 'Leitura por pilar', findings: 'Achados críticos', risk: 'Risco', reco: 'Recomendação', current: 'Nível atual', nextL: 'Próximo nível',
      roadmap: 'Roadmap', h: { '0-90': '0–90 dias', '90-180': '3–6 meses', '180-365': '6–12 meses' }, effort: 'Esforço', impact: 'Impacto', lvl: { low: 'Baixo', medium: 'Médio', high: 'Alto' }, nextSteps: 'Próximos passos',
      exposure: 'Exposição residual', score: 'Score', answered: 'respondidas', notAssessed: 'Não avaliado', aiShare: (a, c) => `${a}% das respostas foram pré-preenchidas com IA${a ? ` (${c}% confirmadas pelo avaliador)` : ''}.`,
      exportNoAI: 'Não foi possível gerar a narrativa com IA. Exportar apenas com os dados calculados?', exporting: 'Preparando arquivo…', gaps: 'Lacunas críticas', completion: 'Completude', globalScore: 'Score global', maturity: 'Nível de maturidade',
      matDesc: ['Sem estrutura formal. Decisões reativas. Exposição regulatória e financeira significativa.', 'Controles básicos informais. Programa responde a incidentes em vez de preveni-los.', 'Processos documentados e repetíveis. Governança estabelecida. Lacunas em automação e integração interfuncional.', 'Orientado por métricas e gestão proativa. Monitoramento automatizado e baseado em dados. Melhoria contínua estabelecida.', 'Programa de classe mundial com controles adaptativos em tempo real e convergência total interfuncional.'],
      matLbl: ['Inexistente', 'Reativo', 'Definido', 'Gerenciado', 'Otimizado']
    }
  };
  const T = () => S[LANG] || S.en;

  const BANDS = [
    { min: 0, color: '#ef4444' }, { min: 1.5, color: '#f97316' }, { min: 2.5, color: '#f59e0b' }, { min: 3.5, color: '#3b82f6' }, { min: 4.25, color: '#22c55e' }
  ];
  function bandIdx(s) { let k = 0; BANDS.forEach((b, i) => { if (s >= b.min) k = i; }); return k; }
  function band(s) { const i = bandIdx(s); return { idx: i, color: BANDS[i].color, label: T().matLbl[i], desc: T().matDesc[i] }; }
  function scoreColor(s) { if (s <= 0) return '#94a3b8'; if (s < 2) return '#ef4444'; if (s < 3) return '#f97316'; if (s < 3.5) return '#f59e0b'; if (s < 4.25) return '#3b82f6'; return '#22c55e'; }

  /* ───────────── storage ───────────── */
  const scope = () => (typeof ACTIVE_NODE !== 'undefined' && ACTIVE_NODE) || 'main';
  const kMeta = () => 'fcma_ai_meta_' + scope();
  const kRep = () => 'fcma_ai_report_' + scope();
  const kCtx = () => 'fcma_ai_ctx_' + scope();
  const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* quota or private mode */ } };
  const getMeta = () => lsGet(kMeta(), {});
  const setMeta = m => lsSet(kMeta(), m);

  /* ───────────── data model (single source of truth for UI, PDF and PPT) ───────────── */
  const cmpId = (a, b) => { const x = a.split('.').map(Number), y = b.split('.').map(Number); for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d; } return 0; };

  function buildModel() {
    const sc = getScores();
    const LBL = getLBL();
    const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const gaps = [];
    let totalQ = 0, answered = 0;
    const pillars = DATA.map((p, i) => {
      let tq = 0, aq = 0, g = 0;
      p.subs.forEach(s => s.comps.forEach(c => {
        tq++;
        const a = ANSWERS[c.id];
        if (a >= 1 && a <= 5) {
          aq++; dist[a]++;
          if (a <= 2) { g++; gaps.push({ id: c.id, name: c.name, level: a, pillar: p.id, pillarName: p.name, sub: s.name, core: CORE.has(c.id), current: c.L[a - 1] || '', next: c.L[a] || '' }); }
        }
      }));
      totalQ += tq; answered += aq;
      const score = sc[p.id] || 0;
      return { id: p.id, name: p.name, idx: i, score, exposure: score > 0 ? Math.round((5 - score) / 4 * 100) : null, gapToTarget: score > 0 ? Math.max(0, +(4 - score).toFixed(2)) : null, answered: aq, total: tq, gaps: g, band: band(score) };
    });
    gaps.sort((a, b) => a.level - b.level || (b.core - a.core) || cmpId(a.id, b.id));
    const total = sc._total || 0;
    const meta = getMeta();
    let aiN = 0, aiConf = 0;
    Object.keys(meta).forEach(id => { if (ANSWERS[id] && ANSWERS[id] === meta[id].level) { aiN++; if (meta[id].confirmed) aiConf++; } });
    const reg = REG_DATA || {};
    return {
      lang: LANG, levels: LBL, framework: (META && (META.title || META.assessmentName)) || 'Financial Crime Maturity Assessment', brand: (META && META.assessmentName) || 'FCMA',
      org: { company: reg.company || '', contact: reg.contact || '', role: reg.role || '', country: reg.country || '', sector: reg.sector || '', email: reg.email || '' },
      date: new Date(), total, maturity: band(total), maturityLabel: band(total).label,
      totalQ, answered, completionPct: totalQ ? Math.round(answered / totalQ * 100) : 0, dist, gaps, gapCount: gaps.length, pillars,
      exposureTotal: total > 0 ? Math.round((5 - total) / 4 * 100) : null,
      aiAssistedPct: answered ? Math.round(aiN / answered * 100) : 0, aiConfirmedPct: aiN ? Math.round(aiConf / aiN * 100) : 0, aiAssisted: aiN
    };
  }
  function serverModel(m) {
    return {
      org: m.org, framework: m.framework, total: +m.total.toFixed(2), maturity: m.maturityLabel, completionPct: m.completionPct, answered: m.answered, totalQ: m.totalQ, gapCount: m.gapCount, dist: m.dist,
      pillars: m.pillars.map(p => ({ id: p.id, name: p.name, score: +p.score.toFixed(2), exposure: p.exposure, answered: p.answered, total: p.total, gaps: p.gaps })),
      gaps: m.gaps.slice(0, 14).map(g => ({ id: g.id, name: g.name, level: g.level, pillar: g.pillar, core: g.core, current: g.current, next: g.next }))
    };
  }
  const dataHash = () => String(hashStr(JSON.stringify(ANSWERS) + '|' + LANG));

  /* ───────────── AI endpoint client ───────────── */
  const aiUrl = () => (typeof AI_URL !== 'undefined' ? AI_URL : '');
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  async function callAI(task, payload, tries = 2) {
    if (!aiUrl()) {
      if (window.AIX_SIM) { try { return await window.AIX_SIM.run(task, Object.assign({ lang: LANG }, payload)); } catch (e) { e.fatal = true; throw e; } }
      const e = new Error('not_configured'); e.kind = 'cfg'; throw e;
    }
    let last;
    for (let a = 0; a < tries; a++) {
      try {
        const r = await fetch(aiUrl(), { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(Object.assign({ task, lang: LANG, code: (typeof ACCESS_CODE !== 'undefined' && ACCESS_CODE) || '' }, payload)) });
        const j = await r.json();
        if (j.ok) return j.data;
        const e = new Error(j.error || 'error'); e.code = j.code; last = e;
        if (j.code === 503 && /not configured/i.test(j.error || '')) e.kind = 'cfg';
        else if (j.code === 429) e.kind = 'limit';
        else if (j.code === 503) e.kind = 'busy';
        if (e.kind === 'cfg' || e.kind === 'limit' || j.code === 400 || j.code === 413) { e.fatal = true; throw e; }
      } catch (e) { last = e; if (e.fatal) throw e; }
      if (a < tries - 1) await sleep(1500);
    }
    throw last;
  }
  function errText(e) {
    const t = T();
    if (e && e.kind === 'cfg') return t.errNotConfigured;
    if (e && e.kind === 'limit') return t.errLimit;
    if (e && e.kind === 'busy') return t.errBusy;
    return t.errGeneric + (e && e.message && e.message !== 'Failed to fetch' ? ' (' + e.message + ')' : '');
  }

  /* ───────────── small UI helpers ───────────── */
  (function css() {
    if (document.getElementById('aix-css')) return;
    const st = document.createElement('style'); st.id = 'aix-css';
    st.textContent = `
.aix-ov{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:18px;backdrop-filter:blur(2px)}
.aix-md{background:var(--wh,#fff);border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.28);width:min(920px,100%);max-height:calc(100vh - 36px);display:flex;flex-direction:column;overflow:hidden}
.aix-hd{padding:20px 26px 14px;border-bottom:1px solid var(--brd);display:flex;gap:14px;align-items:flex-start}
.aix-bd{padding:20px 26px;overflow-y:auto;flex:1}
.aix-ft{padding:14px 26px;border-top:1px solid var(--brd);display:flex;gap:10px;align-items:center;justify-content:flex-end;flex-wrap:wrap;background:var(--bg)}
.aix-ta{width:100%;min-height:150px;resize:vertical;padding:12px 14px;border:1px solid var(--brd);border-radius:10px;font:14px/1.6 var(--f);color:var(--text);background:#fff}
.aix-ta:focus{outline:none;border-color:var(--teal);box-shadow:0 0 0 3px rgba(5,150,105,.1)}
.aix-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;padding:3px 9px;border-radius:99px;border:1px solid var(--brd);background:var(--bg);color:var(--dim);white-space:nowrap}
.aix-chip.on{background:var(--tealD);border-color:var(--tealBrd);color:var(--teal)}
.btn.aix-btn-ai,.btn.aix-btn-ai:hover{background:linear-gradient(135deg,#059669,#0d9488);color:#fff;border-color:transparent;font-weight:700;box-shadow:0 4px 14px rgba(5,150,105,.28)}
.btn.aix-btn-ai:hover{filter:brightness(1.07)}
.btn.aix-btn-ai:disabled{opacity:.5;cursor:not-allowed;filter:none}
.aix-row{display:grid;grid-template-columns:22px 64px 1fr 150px;gap:10px;align-items:start;padding:10px 12px;border-bottom:1px solid var(--brd);font-size:13px}
.aix-row:last-child{border-bottom:none}
.aix-spin{width:14px;height:14px;border:2px solid var(--brd);border-top-color:var(--teal);border-radius:50%;animation:aixsp .8s linear infinite;display:inline-block}
@keyframes aixsp{to{transform:rotate(360deg)}}
.aix-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0f172a;color:#fff;padding:12px 20px;border-radius:10px;font-size:13px;z-index:9500;box-shadow:0 10px 30px rgba(0,0,0,.3)}
.aix-card{background:var(--card);border:1px solid var(--brd);border-radius:12px;padding:20px 22px;margin-bottom:16px}
.aix-h{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1.1px;color:var(--mute);margin-bottom:10px}
@media(max-width:700px){.aix-row{grid-template-columns:22px 52px 1fr}.aix-row .aix-lv{grid-column:2 / 4}}
`;
    document.head.append(st);
  })();

  function toast(msg, ms = 3200) { const t = el('div', { className: 'aix-toast' }, msg); document.body.append(t); setTimeout(() => t.remove(), ms); }
  function busy(msg) {
    const lab = el('div', { style: { fontSize: '14px', fontWeight: '600', color: 'var(--text)' } }, msg);
    const ov = el('div', { className: 'aix-ov', style: { zIndex: '9400' } }, el('div', { style: { background: '#fff', borderRadius: '14px', padding: '26px 34px', display: 'flex', gap: '14px', alignItems: 'center', boxShadow: 'var(--sh3)' } }, el('span', { className: 'aix-spin', style: { width: '22px', height: '22px', borderWidth: '3px' } }), lab));
    document.body.append(ov);
    return { set: m => { lab.textContent = m; }, close: () => ov.remove() };
  }
  const levelName = n => (getLBL()[n - 1] || '');

  /* ───────────── file reading ───────────── */
  async function readFileText(f) {
    const name = f.name.toLowerCase();
    if (name.endsWith('.pdf')) {
      const pdfjs = await import(new URL('vendor/pdf.min.mjs', document.baseURI).href);
      pdfjs.GlobalWorkerOptions.workerSrc = new URL('vendor/pdf.worker.min.mjs', document.baseURI).href;
      const doc = await pdfjs.getDocument({ data: await f.arrayBuffer(), isEvalSupported: false }).promise;
      let out = '';
      for (let i = 1; i <= Math.min(doc.numPages, 60); i++) {
        const pg = await doc.getPage(i);
        const tc = await pg.getTextContent();
        out += tc.items.map(x => x.str).join(' ') + '\n';
      }
      return out;
    }
    return await f.text();
  }

  /* ───────────── AI-assisted fill ───────────── */
  const CAP = 60000;
  const FILL = { ctx: '', files: [], onlyEmpty: true, scopeCore: false, running: false, cancel: false, jobs: [], items: {}, filter: 'all', phase: 'input', err: '' };
  let fillOv = null;

  function fullContext() {
    const reg = REG_DATA || {};
    const head = [reg.company && 'Organization: ' + reg.company, reg.sector && 'Sector: ' + reg.sector, reg.country && 'Country: ' + reg.country].filter(Boolean).join('\n');
    const parts = [FILL.ctx.trim()];
    FILL.files.forEach(f => parts.push('--- Document: ' + f.name + ' ---\n' + f.text));
    let body = parts.filter(Boolean).join('\n\n');
    if (body.length > CAP) body = body.slice(0, CAP);
    return (head ? head + '\n\n' : '') + body;
  }
  function fillTargets() {
    const out = [];
    DATA.forEach(p => p.subs.forEach(s => s.comps.forEach(c => {
      if (FILL.scopeCore && CORE.size && !CORE.has(c.id)) return;
      if (FILL.onlyEmpty && ANSWERS[c.id]) return;
      out.push({ p, c });
    })));
    return out;
  }

  function openFill() {
    if (!DATA.length) return;
    if (FILL.scope !== scope()) {
      Object.assign(FILL, { scope: scope(), files: [], jobs: [], items: {}, phase: 'input', err: '', running: false, filter: 'all' });
      FILL.scopeCore = (typeof AQ_MODE !== 'undefined' && AQ_MODE === 'core' && CORE.size > 0);
      FILL.ctx = (lsGet(kCtx(), {}) || {}).text || '';
    }
    fillOv = el('div', { className: 'aix-ov' });
    fillOv.addEventListener('mousedown', e => { if (e.target === fillOv && !FILL.running) closeFill(); });
    document.body.append(fillOv);
    paintFill();
  }
  function closeFill() { if (fillOv) { fillOv.remove(); fillOv = null; } }

  function paintFill() {
    if (!fillOv) return;
    const t = T();
    fillOv.innerHTML = '';
    const md = el('div', { className: 'aix-md' });
    md.append(el('div', { className: 'aix-hd' },
      el('div', { style: { fontSize: '26px' } }, '✨'),
      el('div', { style: { flex: '1' } }, el('div', { style: { fontSize: '19px', fontWeight: '800', letterSpacing: '-.3px' } }, t.fillTitle), el('div', { style: { fontSize: '13px', color: 'var(--dim)', marginTop: '3px', lineHeight: '1.5' } }, t.fillSub)),
      el('button', { className: 'btn', style: { padding: '6px 12px' }, onClick: () => { if (FILL.running) FILL.cancel = true; closeFill(); } }, '✕')));
    const bd = el('div', { className: 'aix-bd' });
    const ft = el('div', { className: 'aix-ft' });
    md.append(bd, ft);
    fillOv.append(md);

    if (FILL.phase === 'input') paintFillInput(bd, ft);
    else if (FILL.phase === 'running') paintFillRunning(bd, ft);
    else paintFillReview(bd, ft);
  }

  const topicsHint = () => (typeof DATA !== 'undefined' ? DATA : []).slice(0, 4).map(p => String(p.name || '').replace(/\s*[\(—–-].*$/, '').trim()).filter(Boolean).map(x => x.length > 44 ? x.slice(0, 43) + '…' : x).join('; ');

  function paintFillInput(bd, ft) {
    const t = T();
    const ta = el('textarea', { className: 'aix-ta', placeholder: t.ctxPh(topicsHint()) });
    ta.value = FILL.ctx;
    const counter = el('span', { style: { fontSize: '11px', color: 'var(--mute)', fontFamily: 'var(--fm)' } });
    const upd = () => { const n = fullContext().length; counter.textContent = n.toLocaleString() + ' / ' + CAP.toLocaleString() + ' ' + t.chars; counter.style.color = n >= CAP ? 'var(--red)' : 'var(--mute)'; };
    ta.addEventListener('input', () => { FILL.ctx = ta.value; upd(); });
    bd.append(el('div', { style: { fontSize: '12px', fontWeight: '700', color: 'var(--dim)', marginBottom: '6px' } }, t.ctxLabel), ta);

    const filesBox = el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '12px 0' } });
    const paintFiles = () => {
      filesBox.innerHTML = '';
      FILL.files.forEach((f, i) => filesBox.append(el('span', { className: 'aix-chip on' }, '📄 ' + f.name + ' · ' + Math.round(f.text.length / 1000) + 'k ', el('span', { style: { cursor: 'pointer', marginLeft: '4px' }, onClick: () => { FILL.files.splice(i, 1); paintFiles(); upd(); } }, '✕'))));
    };
    paintFiles();
    const fileIn = el('input', { type: 'file', accept: '.pdf,.txt,.md,.csv,.json', multiple: '', style: { display: 'none' } });
    fileIn.addEventListener('change', async () => {
      for (const f of Array.from(fileIn.files)) {
        try {
          const text = (await readFileText(f)).replace(/\s+\n/g, '\n').trim();
          if (text) FILL.files.push({ name: f.name, text: text.slice(0, 40000) });
        } catch (e) { toast(t.errPdf + ' ' + f.name); }
      }
      fileIn.value = ''; paintFiles(); upd();
    });
    bd.append(el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' } }, el('button', { className: 'btn', onClick: () => fileIn.click() }, t.upload), fileIn, counter), filesBox);

    const optRow = el('div', { style: { display: 'flex', gap: '22px', flexWrap: 'wrap', alignItems: 'center', padding: '14px 16px', background: 'var(--bg)', border: '1px solid var(--brd)', borderRadius: '10px' } });
    const cb = el('input', { type: 'checkbox' }); cb.checked = FILL.onlyEmpty; cb.addEventListener('change', () => { FILL.onlyEmpty = cb.checked; updTargets(); });
    optRow.append(el('label', { style: { display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', cursor: 'pointer' } }, cb, t.onlyEmpty));
    const sel = el('select', { className: 'inp', style: { padding: '6px 10px', fontSize: '13px' } }, el('option', { value: 'all' }, t.scopeAll), el('option', { value: 'core' }, t.scopeCore));
    sel.value = FILL.scopeCore ? 'core' : 'all'; sel.disabled = !CORE.size;
    sel.addEventListener('change', () => { FILL.scopeCore = sel.value === 'core'; updTargets(); });
    optRow.append(el('label', { style: { display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px' } }, t.scope + ':', sel));
    const tg = el('span', { className: 'aix-chip on' });
    const updTargets = () => { tg.textContent = fillTargets().length + ' ' + (LANG === 'en' ? 'components' : LANG === 'pt' ? 'componentes' : 'componentes'); };
    updTargets(); optRow.append(tg);
    bd.append(el('div', { style: { height: '14px' } }), optRow);
    if (FILL.err) bd.append(el('div', { style: { marginTop: '12px', color: 'var(--red)', fontSize: '13px' } }, FILL.err));
    upd();

    ft.append(el('button', { className: 'btn', onClick: closeFill }, t.close),
      el('button', { className: 'btn aix-btn-ai', style: { padding: '10px 26px', fontSize: '14px' }, onClick: () => { FILL.err = ''; startFill(); } }, t.analyze));
  }

  function paintFillRunning(bd, ft) {
    const t = T();
    bd.append(el('div', { className: 'aix-h' }, t.jobsTitle));
    FILL.jobs.forEach(j => {
      const st = j.state === 'ok' ? el('span', { style: { color: 'var(--teal)', fontWeight: '700' } }, '✓ ' + t.jobOk) : j.state === 'err' ? el('span', { style: { color: 'var(--red)', fontWeight: '700' }, title: j.err || '' }, '⚠ ' + t.jobErr) : j.state === 'run' ? el('span', { style: { display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--dim)' } }, el('span', { className: 'aix-spin' }), t.jobRun) : el('span', { style: { color: 'var(--mute)' } }, t.jobWait);
      bd.append(el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', border: '1px solid var(--brd)', borderRadius: '9px', marginBottom: '8px', fontSize: '13px' } },
        el('span', { style: { fontFamily: 'var(--fm)', fontWeight: '700', color: 'var(--teal)', minWidth: '30px' } }, j.pid), el('span', { style: { flex: '1' } }, j.name + ' · ' + j.n), st));
    });
    if (FILL.err) bd.append(el('div', { style: { marginTop: '10px', color: 'var(--red)', fontSize: '13px' } }, FILL.err));
    const done = FILL.jobs.every(j => j.state === 'ok' || j.state === 'err');
    if (FILL.running) ft.append(el('button', { className: 'btn', onClick: () => { FILL.cancel = true; } }, t.cancel));
    else {
      if (FILL.jobs.some(j => j.state === 'err')) ft.append(el('button', { className: 'btn', onClick: retryFailed }, t.retry));
      if (done) ft.append(el('button', { className: 'btn aix-btn-ai', onClick: () => { FILL.phase = 'review'; paintFill(); } }, t.review + ' →'));
    }
  }

  async function startFill() {
    const t = T();
    const ctx = fullContext();
    if (ctx.replace(/^(Organization|Sector|Country):.*\n?/gm, '').trim().length < 40) { FILL.err = t.tooShort; paintFill(); return; }
    const tg = fillTargets();
    if (!tg.length) { FILL.err = t.nothing; paintFill(); return; }
    lsSet(kCtx(), { text: FILL.ctx });
    FILL.jobs = []; FILL.items = {}; FILL.filter = 'all';
    DATA.forEach(p => {
      const cs = tg.filter(x => x.p.id === p.id).map(x => x.c);
      for (let i = 0; i < cs.length; i += 12) FILL.jobs.push({ pid: p.id, name: p.name, n: cs.slice(i, i + 12).length, comps: cs.slice(i, i + 12), state: 'wait' });
    });
    FILL.ctxSent = ctx; FILL.phase = 'running'; paintFill();
    await runJobs(FILL.jobs);
  }
  async function retryFailed() { const j = FILL.jobs.filter(x => x.state === 'err'); j.forEach(x => { x.state = 'wait'; x.err = ''; }); FILL.err = ''; await runJobs(j); }

  async function runJobs(jobs) {
    FILL.running = true; FILL.cancel = false; paintFill();
    const queue = jobs.slice();
    const worker = async () => {
      while (queue.length && !FILL.cancel) {
        const job = queue.shift();
        job.state = 'run'; if (fillOv) paintFill();
        try {
          const data = await callAI('fill', { pillar: { id: job.pid, name: job.name }, framework: (META && (META.title || META.assessmentName)) || '', context: FILL.ctxSent, components: job.comps.map(c => ({ id: c.id, name: c.name, levels: c.L })) });
          (data.results || []).forEach(r => { FILL.items[r.id] = Object.assign({}, r, { keep: r.level != null && r.confidence !== 'low' }); });
          job.state = 'ok';
        } catch (e) {
          job.state = 'err'; job.err = errText(e);
          if (e.kind === 'cfg' || e.kind === 'limit') { FILL.err = errText(e); FILL.cancel = true; queue.length = 0; }
        }
        if (fillOv) paintFill();
      }
    };
    await Promise.all([worker(), worker(), worker()]);
    FILL.running = false;
    jobs.forEach(j => { if (j.state === 'wait') j.state = 'err'; });
    if (fillOv) {
      const anyOk = FILL.jobs.some(j => j.state === 'ok');
      if (FILL.jobs.every(j => j.state === 'ok')) FILL.phase = 'review';
      else if (!anyOk && FILL.err) FILL.phase = 'input';
      paintFill();
    }
  }

  function paintFillReview(bd, ft) {
    const t = T();
    const ids = Object.keys(FILL.items);
    const list = ids.map(id => FILL.items[id]);
    const ne = list.filter(x => x.level == null).length, lo = list.filter(x => x.level != null && x.confidence === 'low').length;
    bd.append(el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '14px' } },
      el('div', { style: { fontSize: '13px', color: 'var(--dim)', flex: '1', minWidth: '220px' } }, t.summary(list.length - ne, ne, lo)),
      ...[['all', t.filterAll], ['high', t.fHigh], ['medium', t.fMed], ['low', t.fLow], ['none', t.fNone]].map(([k, lab]) => el('span', { className: 'aix-chip' + (FILL.filter === k ? ' on' : ''), style: { cursor: 'pointer' }, onClick: () => { FILL.filter = k; paintFill(); } }, lab))));
    if (ne) {
      const bsel = el('select', { className: 'inp', style: { padding: '6px 8px', fontSize: '12px', width: '230px', flex: 'none' } }, el('option', { value: '' }, t.bulkPick), ...[1, 2, 3, 4, 5].map(n => el('option', { value: String(n) }, n + ' · ' + getLBL()[n - 1])));
      const bbtn = el('button', { className: 'btn', onClick: () => {
        const lv = parseInt(bsel.value, 10); if (!(lv >= 1 && lv <= 5)) return;
        list.forEach(x => { if (x.level == null) { x.level = lv; x.keep = true; x.edited = true; } });
        paintFill();
      } }, t.bulkBtn);
      bd.append(el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '14px', padding: '10px 14px', background: 'var(--bg)', border: '1px solid var(--brd)', borderRadius: '10px' } },
        el('div', { style: { fontSize: '12px', color: 'var(--dim)', flex: '1', minWidth: '200px' } }, t.bulkLbl(ne)), bsel, bbtn));
    }
    const pass = x => FILL.filter === 'all' || (FILL.filter === 'none' ? x.level == null : x.level != null && x.confidence === FILL.filter);
    const lbl = getLBL();
    DATA.forEach(p => {
      const rows = [];
      p.subs.forEach(s => s.comps.forEach(c => { const it = FILL.items[c.id]; if (it && pass(it)) rows.push({ c, it }); }));
      if (!rows.length) return;
      const box = el('div', { style: { border: '1px solid var(--brd)', borderRadius: '12px', marginBottom: '14px', overflow: 'hidden' } });
      box.append(el('div', { style: { padding: '10px 14px', background: 'var(--bg)', fontSize: '12px', fontWeight: '800', color: 'var(--text)', borderBottom: '1px solid var(--brd)' } }, p.id + ' · ' + p.name));
      rows.forEach(({ c, it }) => {
        const ck = el('input', { type: 'checkbox' }); ck.checked = !!it.keep && it.level != null; ck.disabled = it.level == null;
        ck.addEventListener('change', () => { it.keep = ck.checked; paintFooter(); });
        const sel = el('select', { className: 'inp', style: { padding: '5px 8px', fontSize: '12px', width: '100%' } }, el('option', { value: '' }, t.noLevel), ...[1, 2, 3, 4, 5].map(n => el('option', { value: String(n) }, n + ' · ' + lbl[n - 1])));
        sel.value = it.level == null ? '' : String(it.level);
        sel.addEventListener('change', () => { it.level = sel.value ? parseInt(sel.value, 10) : null; if (it.level == null) { it.keep = false; ck.checked = false; } ck.disabled = it.level == null; it.edited = true; paintFooter(); });
        const confCol = it.confidence === 'high' ? 'var(--teal)' : it.confidence === 'medium' ? 'var(--amb)' : 'var(--red)';
        box.append(el('div', { className: 'aix-row' }, ck,
          el('span', { style: { fontFamily: 'var(--fm)', fontWeight: '700', color: 'var(--teal)' } }, c.id),
          el('div', null, el('div', { style: { fontWeight: '600' } }, c.name),
            el('div', { style: { fontSize: '12px', color: 'var(--dim)', marginTop: '3px', lineHeight: '1.5' } }, it.rationale || '—'),
            el('div', { style: { display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' } }, el('span', { className: 'aix-chip', style: { color: confCol } }, t.conf[it.confidence] || ''), el('span', { className: 'aix-chip' }, t.basis[it.basis] || ''))),
          el('div', { className: 'aix-lv' }, sel)));
      });
      bd.append(box);
    });
    if (!ids.length) bd.append(el('div', { style: { color: 'var(--mute)', textAlign: 'center', padding: '30px' } }, t.nothing));

    const applyBtn = el('button', { className: 'btn aix-btn-ai', style: { padding: '10px 24px' } });
    const paintFooter = () => { const n = Object.values(FILL.items).filter(x => x.keep && x.level != null).length; applyBtn.textContent = t.applySel(n); applyBtn.disabled = !n; };
    applyBtn.onclick = () => applyFill();
    paintFooter();
    if (ne) ft.append(el('div', { style: { flexBasis: '100%', fontSize: '11px', color: 'var(--mute)', marginBottom: '4px' } }, t.selHint(ne)));
    ft.append(el('button', { className: 'btn', onClick: () => { Object.values(FILL.items).forEach(x => { x.keep = x.level != null; }); paintFill(); } }, t.selAll),
      el('button', { className: 'btn', onClick: () => { Object.values(FILL.items).forEach(x => { x.keep = false; }); paintFill(); } }, t.selNone),
      el('button', { className: 'btn', onClick: () => { Object.values(FILL.items).forEach(x => { x.keep = x.level != null && x.confidence !== 'low'; }); paintFill(); } }, t.applyOk),
      el('button', { className: 'btn', onClick: () => { FILL.phase = 'input'; paintFill(); } }, '←'), applyBtn);
  }

  function applyFill() {
    const meta = getMeta(); let n = 0;
    Object.keys(FILL.items).forEach(id => {
      const it = FILL.items[id];
      if (!it.keep || it.level == null) return;
      ANSWERS[id] = it.level; n++;
      meta[id] = { level: it.level, confidence: it.confidence, basis: it.basis, rationale: it.rationale, ts: Date.now(), confirmed: false, edited: !!it.edited };
    });
    setMeta(meta); save();
    FILL.phase = 'input'; FILL.items = {}; FILL.jobs = [];
    closeFill(); render(); toast(T().applied(n));
  }

  /* hooks used by the quiz */
  function noteFor(id, cur) {
    const m = getMeta()[id];
    if (!m || m.level !== cur) return null;
    const t = T();
    return el('div', { style: { marginTop: '14px', padding: '12px 16px', background: 'var(--tealD)', border: '1px solid var(--tealBrd)', borderRadius: '10px', fontSize: '13px', color: 'var(--dim)', lineHeight: '1.6' } },
      el('div', { style: { fontWeight: '700', color: 'var(--teal)', marginBottom: '3px' } }, t.aiNote(t.conf[m.confidence] || '', t.basis[m.basis] || '') + (m.confirmed ? ' · ' + t.aiNoteOk : '')), m.rationale || '');
  }
  function onManual(id, level) {
    const meta = getMeta(); const m = meta[id]; if (!m) return;
    if (m.level === level) m.confirmed = true; else delete meta[id];
    setMeta(meta);
  }
  function onClear(id) { const meta = getMeta(); if (meta[id]) { delete meta[id]; setMeta(meta); } }

  /* ───────────── AI report ───────────── */
  function getReport() { const r = lsGet(kRep(), null); return r && r.summary ? r : null; }
  const isStale = r => !r || r.hash !== dataHash();

  async function generateReport() {
    const m = buildModel();
    if (!m.answered) throw Object.assign(new Error(T().needAnswers), { kind: 'none' });
    const profile = ((lsGet(kCtx(), {}) || {}).text || '').slice(0, 6000);
    const sm = serverModel(m);
    const [summary, plan] = await Promise.all([callAI('report', { part: 'summary', model: sm, profile }), callAI('report', { part: 'plan', model: sm, profile })]);
    const rep = { hash: dataHash(), lang: LANG, ts: Date.now(), summary, plan };
    lsSet(kRep(), rep);
    return rep;
  }

  async function ensureReport() {
    const cur = getReport();
    if (cur && !isStale(cur)) return cur;
    const b = busy(T().generating);
    try { return await generateReport(); }
    catch (e) { b.close(); if (e.kind === 'none') { toast(e.message); return null; } toast(errText(e), 5000); if (confirm(T().exportNoAI)) return {}; return null; }
    finally { b.close(); }
  }

  function renderReportSection(content, rerender) {
    const t = T(); const m = buildModel(); const rep = getReport();
    content.append(el('div', { style: { marginBottom: '22px', display: 'flex', gap: '14px', alignItems: 'flex-start', flexWrap: 'wrap' } },
      el('div', { style: { flex: '1', minWidth: '260px' } }, el('div', { style: { fontSize: '20px', fontWeight: '800', letterSpacing: '-.4px' } }, t.repTitle), el('div', { style: { fontSize: '12px', color: 'var(--mute)', marginTop: '4px', lineHeight: '1.5' } }, t.repSub)),
      el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
        el('button', { className: 'btn', onClick: () => window.AIX.exportPDF() }, t.dlPdf), el('button', { className: 'btn', onClick: () => window.AIX.exportPPT() }, t.dlPpt),
        el('button', { className: 'btn aix-btn-ai', onClick: async () => { const b = busy(t.generating); try { await generateReport(); } catch (e) { toast(e.kind === 'none' ? e.message : errText(e), 5000); } b.close(); rerender(); } }, rep ? t.regen : t.gen))));

    if (!rep) {
      content.append(el('div', { className: 'aix-card', style: { textAlign: 'center', padding: '44px 28px' } }, el('div', { style: { fontSize: '40px', marginBottom: '10px' } }, '✨'), el('div', { style: { fontSize: '17px', fontWeight: '800', marginBottom: '8px' } }, t.emptyTitle), el('div', { style: { fontSize: '13px', color: 'var(--dim)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' } }, t.emptyBody)));
      return;
    }
    if (isStale(rep)) content.append(el('div', { style: { padding: '12px 16px', background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.35)', borderRadius: '10px', fontSize: '13px', color: '#92400e', marginBottom: '16px' } }, '⚠ ' + t.stale));
    const s = rep.summary || {}, p = rep.plan || {};
    const mb = m.maturity;

    content.append(el('div', { className: 'aix-card', style: { borderLeft: '4px solid ' + mb.color } },
      el('div', { style: { display: 'flex', gap: '22px', alignItems: 'center', flexWrap: 'wrap' } },
        el('div', { style: { textAlign: 'center', minWidth: '90px' } }, el('div', { style: { fontSize: '40px', fontWeight: '800', fontFamily: 'var(--fm)', color: mb.color, lineHeight: '1' } }, m.total.toFixed(1)), el('div', { style: { fontSize: '11px', fontWeight: '700', color: mb.color, marginTop: '4px' } }, mb.label)),
        el('div', { style: { flex: '1', minWidth: '240px' } }, el('div', { style: { fontSize: '17px', fontWeight: '800', lineHeight: '1.4', letterSpacing: '-.2px' } }, s.headline || ''))),
      ...(s.executive_summary || '').split(/\n\n+/).map(x => el('p', { style: { fontSize: '14px', lineHeight: '1.75', color: 'var(--dim)', marginTop: '14px' } }, x))));

    if ((s.strengths || []).length) {
      const c = el('div', { className: 'aix-card' }, el('div', { className: 'aix-h' }, t.strengths));
      s.strengths.forEach(x => c.append(el('div', { style: { display: 'flex', gap: '10px', fontSize: '13px', lineHeight: '1.6', marginBottom: '6px' } }, el('span', { style: { color: 'var(--teal)', fontWeight: '800', fontFamily: 'var(--fm)' } }, x.pillar), el('span', { style: { color: 'var(--dim)' } }, x.text))));
      content.append(c);
    }

    const pc = el('div', { className: 'aix-card' }, el('div', { className: 'aix-h' }, t.pillarsT));
    m.pillars.forEach(pl => {
      const note = (s.pillar_commentary || {})[pl.id];
      const col = scoreColor(pl.score);
      pc.append(el('div', { style: { padding: '12px 0', borderBottom: '1px solid var(--brd)' } },
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
          el('span', { style: { fontFamily: 'var(--fm)', fontWeight: '800', color: col, minWidth: '34px', fontSize: '12px' } }, pl.id),
          el('span', { style: { flex: '1', fontWeight: '600', fontSize: '13px' } }, pl.name),
          pl.score > 0 ? el('span', { style: { fontFamily: 'var(--fm)', fontWeight: '800', color: col } }, pl.score.toFixed(1)) : el('span', { className: 'aix-chip' }, t.notAssessed)),
        pl.score > 0 ? el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', margin: '8px 0 0 46px' } }, el('div', { style: { flex: '1', height: '6px', background: 'var(--brd)', borderRadius: '3px', overflow: 'hidden' } }, el('div', { style: { width: (pl.score / 5 * 100) + '%', height: '100%', background: col } })), el('span', { style: { fontSize: '11px', color: 'var(--mute)', fontFamily: 'var(--fm)', minWidth: '120px', textAlign: 'right' } }, t.exposure + ' ' + pl.exposure + '%')) : null,
        note ? el('div', { style: { fontSize: '12.5px', color: 'var(--dim)', lineHeight: '1.65', margin: '7px 0 0 46px' } }, note) : null));
    });
    content.append(pc);

    if ((p.findings || []).length) {
      const c = el('div', { className: 'aix-card' }, el('div', { className: 'aix-h' }, t.findings));
      p.findings.forEach(f => {
        const g = m.gaps.find(x => x.id === f.id) || {}; const gc = g.level === 1 ? '#ef4444' : '#f97316';
        c.append(el('div', { style: { border: '1px solid var(--brd)', borderLeft: '4px solid ' + gc, borderRadius: '9px', padding: '14px 16px', marginBottom: '10px' } },
          el('div', { style: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' } }, el('span', { className: 'aix-chip', style: { color: gc, borderColor: gc + '55' } }, 'L' + (g.level || '?')), el('span', { style: { fontFamily: 'var(--fm)', fontSize: '12px', color: 'var(--mute)' } }, f.id), el('span', { style: { fontWeight: '700', fontSize: '14px' } }, f.title)),
          el('div', { style: { fontSize: '12.5px', lineHeight: '1.65', color: 'var(--dim)', marginTop: '8px' } }, el('b', null, t.risk + ': '), f.risk),
          el('div', { style: { fontSize: '12.5px', lineHeight: '1.65', color: 'var(--dim)', marginTop: '4px' } }, el('b', null, t.reco + ': '), f.recommendation)));
      });
      content.append(c);
    }

    if ((p.roadmap || []).length) {
      const c = el('div', { className: 'aix-card' }, el('div', { className: 'aix-h' }, t.roadmap));
      const grid = el('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px' } });
      ['0-90', '90-180', '180-365'].forEach((hz, i) => {
        const col = el('div', { style: { background: 'var(--bg)', border: '1px solid var(--brd)', borderRadius: '10px', padding: '14px' } }, el('div', { style: { fontSize: '12px', fontWeight: '800', color: ['#059669', '#2563eb', '#7c3aed'][i], marginBottom: '10px' } }, t.h[hz]));
        p.roadmap.filter(r => r.horizon === hz).forEach(r => col.append(el('div', { style: { background: '#fff', border: '1px solid var(--brd)', borderRadius: '8px', padding: '10px 12px', marginBottom: '8px' } },
          el('div', { style: { fontWeight: '700', fontSize: '13px', lineHeight: '1.4' } }, r.initiative), el('div', { style: { fontSize: '12px', color: 'var(--dim)', margin: '4px 0 6px', lineHeight: '1.55' } }, r.rationale),
          el('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } }, el('span', { className: 'aix-chip' }, t.effort + ': ' + t.lvl[r.effort]), el('span', { className: 'aix-chip' }, t.impact + ': ' + t.lvl[r.impact]), ...(r.components || []).slice(0, 3).map(id => el('span', { className: 'aix-chip', style: { fontFamily: 'var(--fm)' } }, id))))));
        grid.append(col);
      });
      c.append(grid); content.append(c);
    }
    if ((p.next_steps || []).length) { const c = el('div', { className: 'aix-card' }, el('div', { className: 'aix-h' }, t.nextSteps)); p.next_steps.forEach((x, i) => c.append(el('div', { style: { fontSize: '13px', color: 'var(--dim)', lineHeight: '1.7' } }, (i + 1) + '. ' + x))); content.append(c); }
    if (m.aiAssisted) content.append(el('div', { style: { fontSize: '11.5px', color: 'var(--mute)', marginTop: '6px' } }, t.aiShare(m.aiAssistedPct, m.aiConfirmedPct)));
  }

  window.AIX = { S, T, band, bandIdx, scoreColor, buildModel, serverModel, getReport, isStale, ensureReport, generateReport, openFill, noteFor, onManual, onClear, getMeta, renderReportSection, busy, toast, levelName, configured: () => !!aiUrl() };
})();
