// Minimal Apps Script runtime mock + a fake "Claude" used by tests and the e2e run.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function makeRuntime(opts = {}) {
  const store = Object.assign({ ANTHROPIC_API_KEY: 'sk-test', ...(opts.props || {}) });
  const cache = {};
  const calls = [];
  const sandbox = {
    console,
    PropertiesService: {
      getScriptProperties: () => ({
        getProperty: k => (k in store ? store[k] : null),
        setProperty: (k, v) => { store[k] = String(v); },
        deleteProperty: k => { delete store[k]; },
        getProperties: () => ({ ...store })
      })
    },
    CacheService: { getScriptCache: () => ({ get: k => cache[k] || null, put: (k, v) => { cache[k] = v; } }) },
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    Utilities: {
      formatDate: (d, tz, f) => {
        const p = n => String(n).padStart(2, '0');
        const s = `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}${p(d.getUTCHours())}`;
        return f === 'yyyyMMdd' ? s.slice(0, 8) : s;
      }
    },
    ContentService: {
      MimeType: { JSON: 'json' },
      createTextOutput: t => ({ text: t, setMimeType() { return this; }, getContent() { return this.text; } })
    },
    UrlFetchApp: {
      fetch: (url, o) => {
        calls.push({ url, o });
        const handler = opts.claude || fakeClaude;
        const r = handler(JSON.parse(o.payload));
        return { getResponseCode: () => r.status || 200, getContentText: () => JSON.stringify(r.body) };
      }
    },
    module: { exports: {} }
  };
  vm.createContext(sandbox);
  const src = fs.readFileSync(path.join(__dirname, '..', 'apps-script', 'AI.gs'), 'utf8');
  vm.runInContext(src, sandbox);
  const api = sandbox.module.exports;
  return {
    api, calls, store,
    post: body => JSON.parse(api.doPost({ postData: { contents: typeof body === 'string' ? body : JSON.stringify(body) } }).getContent())
  };
}

// Deterministic stand-in for the model: derives plausible JSON from the prompt it receives.
function fakeClaude(body) {
  const user = body.messages[0].content;
  let text;
  if (user.includes('<components>')) {
    const ids = [...user.matchAll(/^\[([\d.]+)\]/gm)].map(m => m[1]);
    const ctx = user.slice(user.indexOf('<context>'), user.indexOf('</context>')).toLowerCase();
    text = JSON.stringify({
      results: ids.map((id, i) => {
        if (i % 7 === 6) return { id, level: null, confidence: 'low', basis: 'no_evidence', rationale: '' };
        const lvl = ((id.split('.').join('') * 1 + i) % 4) + 1;
        return {
          id, level: lvl, confidence: i % 3 === 0 ? 'high' : i % 3 === 1 ? 'medium' : 'low',
          basis: i % 3 === 2 ? 'inferred' : 'stated',
          rationale: 'Evidence in context' + (ctx.includes('falcon') ? ' (FICO Falcon mentioned)' : '') + ' supports level ' + lvl + '.'
        };
      })
    });
  } else if (user.includes('<gaps>')) {
    const facts = JSON.parse(user.match(/<facts>\n([\s\S]*?)\n<\/facts>/)[1]);
    const gaps = JSON.parse(user.match(/<gaps>\n([\s\S]*?)\n<\/gaps>/)[1]);
    text = JSON.stringify({
      findings: gaps.slice(0, 8).map(g => ({ id: g.id, title: 'Reinforce ' + g.name, risk: 'Weak control raises exposure in ' + g.pillar + '.', recommendation: 'Move from L' + g.level + ' to L' + (g.level + 1) + ': ' + g.next_level.slice(0, 80) })),
      roadmap: [
        { horizon: '0-90', initiative: 'Document and approve core fraud policies', rationale: 'Quick win closing governance gaps.', components: gaps.slice(0, 2).map(g => g.id), effort: 'low', impact: 'high' },
        { horizon: '0-90', initiative: 'Define fraud KPIs and monthly reporting', rationale: 'Needed to steer the program.', components: gaps.slice(2, 3).map(g => g.id), effort: 'low', impact: 'medium' },
        { horizon: '90-180', initiative: 'Formalize rule governance and tuning cycle', rationale: 'Reduces false positives.', components: gaps.slice(3, 5).map(g => g.id), effort: 'medium', impact: 'high' },
        { horizon: '180-365', initiative: 'Deploy behavioral analytics on digital channels', rationale: 'Structural detection capability.', components: gaps.slice(5, 7).map(g => g.id), effort: 'high', impact: 'high' },
        { horizon: 'bogus', initiative: 'Item with invalid horizon and fake ids', rationale: 'x', components: ['9.9.9'], effort: 'weird', impact: 'weird' }
      ],
      next_steps: ['Validate findings with owners', 'Approve the roadmap', 'Re-assess in six months']
    });
    if (!facts.pillars.length) text = '{}';
  } else {
    const facts = JSON.parse(user.match(/<facts>\n([\s\S]*?)\n<\/facts>/)[1]);
    const pc = {};
    facts.pillars.forEach(p => { if (p.answered > 0) pc[p.id] = 'Score ' + p.score + ' of 5 for ' + p.name + '.'; });
    text = '```json\n' + JSON.stringify({
      headline: 'Maturity is ' + facts.maturity_level + ' at ' + facts.global_score + ' out of 5.',
      executive_summary: facts.organization + ' scores ' + facts.global_score + '.\n\nPriority is closing ' + facts.critical_gap_count + ' critical gaps.',
      strengths: facts.pillars.filter(p => p.score >= 3).slice(0, 3).map(p => ({ pillar: p.id, text: p.name + ' is a relative strength.' }))
        .concat([{ pillar: 'P99', text: 'invented pillar' }]),
      pillar_commentary: Object.assign(pc, { P99: 'invented' })
    }) + '\n```';
  }
  return { status: 200, body: { content: [{ type: 'text', text }], stop_reason: 'end_turn' } };
}

module.exports = { makeRuntime, fakeClaude };
