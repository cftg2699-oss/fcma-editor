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
