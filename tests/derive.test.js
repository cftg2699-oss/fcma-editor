const test = require('node:test'), assert = require('node:assert');
const D = require('../fcma-derive.js');
const rows = [
  ['Scores use a 0–4 scale'],
  ['Domain 1 — Governance'],
  ['Ref', 'Control', 'Score', 'Comment'],
  ['GOV-01', 'Board oversight', '4', 'ok'],
  ['GOV-02', 'Policy framework', '2', ''],
  ['Domain 2 — Monitoring'],
  ['MON-01', 'Rules tuning', '0', 'none'],
  ['MON-02', 'Alert triage', '3', ''],
];
test('table: pillars, comps and 0-4 rescale from preamble', () => {
  const r = D.derive({ rows });
  assert.equal(r.stats.pillars, 2); assert.equal(r.stats.comps, 4); assert.equal(r.scale, '0-4');
  const f = D.buildFramework(r, { title: 'T', lang: 'en' });
  assert.deepEqual(Object.values(f.answers).sort(), [1, 3, 4, 5]);
});
test('scale 1-4 and 0-100 map to 1-5', () => {
  assert.equal(D.toLevel(1, '1-4'), 1); assert.equal(D.toLevel(4, '1-4'), 5);
  assert.equal(D.toLevel(0, '0-100'), 1); assert.equal(D.toLevel(100, '0-100'), 5);
});
test('text mode finds rated rows', () => {
  const r = D.derive({ text: 'Domain 1 — Governance\nGOV-01 Board oversight 3 Established\nGOV-02 Policy 2 Developing\n' });
  assert.equal(r.stats.comps, 2);
});

test('level labels use the maturity legend defined in the document (not generic words)', () => {
  const tables = [
    { title: 'Scale', rows: [['Maturity Level Description', ''], ['Initial', 'Basic, undocumented and changing capability with limited tooling'], ['Managed', 'Partial capability with some technology and local processes'], ['Defined', 'Defined capability with significant technology and repeatable processes'], ['Quantitatively Managed', 'Advanced capability with consistent measured processes'], ['Optimized', 'Leading-edge capability with enterprise-wide improvement']] },
    { title: 'Summary', rows: [['Function', 'Category', 'Maturity Level', 'Benchmark', 'Risk Level'], ['Identify', 'Asset Management (ID.AM)', 'Defined', 'Managed', 'Medium'], ['', 'Governance (ID.GV)', 'Quantitatively Managed', 'Defined', 'Low'], ['Protect', 'Access Control (PR.AC)', 'Managed', 'Defined', 'Low']] }
  ];
  const r = D.derive({ tables });
  assert.equal(r.rating.type, 'legend'); assert.equal(r.stats.pillars, 2); assert.equal(r.stats.comps, 3);
  const lv = r.pillars.flatMap(p => p.subs.flatMap(s => s.comps)).map(c => c.level);
  assert.deepEqual(lv, [3, 4, 2]);                       /* «Managed» = 2 aquí, no 4 */
  assert.equal(r.pillars[0].subs[0].comps[0].ref, 'ID.AM');
  const f = D.buildFramework(r, { title: 'T', lang: 'en' });
  assert.match(f.md, /Quantitatively Managed — Advanced capability/);
});

test('risk assessment tables: control strength preferred, residual risk inverted on request', () => {
  const rows = [['BSA RISK ASSESSMENT'], ['Primary Factors'], ['#', 'Factor', 'Inherent Rating', 'Mitigation', 'Residual Risk', 'Weighting', 'Factor Score'],
    ['1', 'Consumer Customers', 'High', 'Strong', 'Medium', '28%', '0.56'], ['2', 'Commercial Customers', 'High', 'Strong', 'Medium', '32%', '0.64'],
    ['', 'Customer Risk Subtotal Weighted Score * 25% Weight', '', '', '', '', '2.00'],
    ['3', 'Deposit Operations', 'Medium', 'Strong', 'Low', '29%', '0.29'], ['4', 'Lending Operations', 'High', 'Medium', 'High', '30%', '0.60'],
    ['', 'Product Subtotal Weighted Score * 25% Weight', '', '', '', '', '1.70'], ['', 'TOTAL Weighted Composite Score:', '', '', '', '', '2.17']];
  const r = D.derive({ rows });
  assert.equal(r.rating.header, 'Mitigation'); assert.equal(r.rating.type, 'strength');
  assert.deepEqual(r.pillars.map(p => p.name), ['Customer Risk', 'Product']);   /* nombres tomados de los subtotales */
  assert.equal(r.stats.comps, 4);
  const q = D.derive({ rows }, { ratingKey: 'residual risk|risk' });
  assert.equal(q.rating.inverted, true);
  assert.deepEqual(q.pillars.flatMap(p => p.subs.flatMap(s => s.comps)).map(c => c.level), [3, 3, 5, 1]);
});

test('pillar names come from a summary table when components only carry dotted ids', () => {
  const rows = [['Pillar', 'Name', 'Components', 'Score'], ['P0', 'Strategy', '2', '4.0'], ['P1', 'Governance', '2', '3.0'], ['␃'],
    ['ID', 'Component', 'Level', 'Label'], ['0.1.1', 'Strategy exists', '4', 'Managed'], ['0.1.2', 'Strategy horizon', '4', 'Managed'], ['1.1.1', 'Policy exists', '3', 'Defined'], ['1.1.2', 'Risk appetite', '3', 'Defined']];
  const r = D.derive({ rows });
  assert.deepEqual(r.pillars.map(p => p.name), ['Strategy', 'Governance']); assert.equal(r.stats.comps, 4);
});

test('fragmented structure is rejected instead of producing garbage pillars', () => {
  const rows = [['Pillar', 'Name', 'Score']].concat(Array.from({ length: 12 }, (_, i) => ['P' + i + 'x' + i, 'Item ' + i, '3']));
  rows[0] = ['Domain', 'Control', 'Score'];
  const r = D.derive({ rows: rows.map((r, i) => i ? [r[0], r[1], r[2]] : r) });
  assert.ok(r.warnings.includes('fragmented') || r.stats.pillars <= r.stats.comps * 0.5);
});

test('long data rows are never mistaken for a header', () => {
  const long = ['2.1.1', 'Control testing and assurance of the fraud function', '3', 'Defined', 'The score reflects the level of the control environment and the component question coverage.'];
  assert.equal(D.headerMap(long), null);
});
