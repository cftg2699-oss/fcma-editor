/* Puente para fcma_report.html: expone al módulo de IA/exportación (fcma-ai.js, fcma-export.js) los mismos
   globales que define index.html, leyendo el assessment desde localStorage. Solo lectura: no escribe el assessment. */
var DATA = [], ANSWERS = {}, CORE = new Set(), META = {}, REG_DATA = null;
var LANG = (function () { try { return localStorage.getItem('fcma_lang') || 'en'; } catch (e) { return 'en'; } })();
var ACTIVE_NODE = (function () { try { return localStorage.getItem('tprm_active_node') || null; } catch (e) { return null; } })();
(function () {
  function rd(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  DATA = rd('fcma_data', []) || []; ANSWERS = rd('fcma_answers', {}) || {}; CORE = new Set(rd('fcma_core', []) || []);
  META = rd('fcma_meta', {}) || {}; REG_DATA = rd('fcma_reg', null);
})();
var _LEVELS = { en: ['Non-existent', 'Informal', 'Defined', 'Managed', 'Optimized'], es: ['Inexistente', 'Informal', 'Definido', 'Gestionado', 'Optimizado'], pt: ['Inexistente', 'Informal', 'Definido', 'Gerenciado', 'Otimizado'] };
function getLBL() { return _LEVELS[LANG] || _LEVELS.en; }
function hashStr(x) { var h = 0, i; for (i = 0; i < x.length; i++) { h = ((h << 5) - h + x.charCodeAt(i)) | 0; } return h; }
function getScores() { var sc = {}; DATA.forEach(function (p) { var sum = 0, cnt = 0; p.subs.forEach(function (s) { s.comps.forEach(function (c) { if (ANSWERS[c.id]) { sum += ANSWERS[c.id]; cnt++; } }); }); sc[p.id] = cnt > 0 ? sum / cnt : 0; }); var tS = 0, tC = 0; Object.keys(sc).forEach(function (k) { if (sc[k] > 0) { tS += sc[k]; tC++; } }); sc._total = tC > 0 ? tS / tC : 0; return sc; }
function save() { }
function render() { }
var el = function (tag, attrs) {
  var kids = Array.prototype.slice.call(arguments, 2);
  var e = document.createElement(tag);
  if (attrs) Object.keys(attrs).forEach(function (k) {
    var v = attrs[k];
    if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'className') e.className = v;
    else if (k === 'innerHTML') e.innerHTML = v;
    else e.setAttribute(k, v);
  });
  (function add(list) { list.forEach(function (c) { if (Array.isArray(c)) return add(c); if (c != null) e.append(typeof c === 'string' ? document.createTextNode(c) : c); }); })(kids);
  return e;
};
/* Tema oscuro + estilos base que fcma-ai.js espera (en index.html vienen del CSS de la página). */
(function () {
  var st = document.createElement('style');
  st.textContent = ':root{--bg:#0b1220;--card:#0f172a;--hover:#1e293b;--hover2:#14302b;--teal:#14b8a6;--tealL:#2dd4bf;--tealD:rgba(20,184,166,.12);--tealBrd:rgba(20,184,166,.35);--text:#f1f5f9;--dim:#cbd5e1;--mute:#94a3b8;--brd:#1e293b;--brdL:#334155;--red:#f87171;--redL:#fca5a5;--amb:#fbbf24;--grn:#34d399;--wh:#fff;--r:10px;--rs:7px;--fm:"IBM Plex Mono",monospace}'
    + '.btn{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border:1px solid var(--brdL);border-radius:9px;background:var(--card);color:var(--text);font-size:12px;font-weight:700;cursor:pointer;font-family:inherit}.btn:hover{background:var(--hover)}'
    + '.inp{border:1px solid var(--brdL);border-radius:8px;background:var(--bg);color:var(--text);font-family:inherit}';
  document.head.appendChild(st);
})();
