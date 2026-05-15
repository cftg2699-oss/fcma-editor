import { useState, useEffect, useCallback, useRef } from "react";

// ═══════════════════════════════════════════════════════════
// FCMA DATA — loaded from storage or default
// ═══════════════════════════════════════════════════════════
const DEFAULT_DATA_URL = "https://gist.githubusercontent.com/placeholder/fcma/raw/data.json";

function getDefaultData() {
  // Embedded minimal starter — the real data gets loaded from the MD import
  return [];
}

// ═══════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════
const T = {
  bg: "#0f172a", bgCard: "#1e293b", bgHover: "#334155",
  teal: "#0d9488", tealLight: "#14b8a6", tealDim: "#0d948833",
  text: "#e2e8f0", textDim: "#94a3b8", textMuted: "#64748b",
  border: "#334155", borderLight: "#475569",
  red: "#ef4444", redDim: "#ef444422",
  amber: "#f59e0b", green: "#22c55e",
  white: "#ffffff", black: "#000000",
  radius: "8px", radiusSm: "4px",
  font: "'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif",
  fontMono: "'IBM Plex Mono', 'Consolas', monospace",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: ${T.bg}; color: ${T.text}; font-family: ${T.font}; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: ${T.bg}; }
::-webkit-scrollbar-thumb { background: ${T.borderLight}; border-radius: 3px; }
::selection { background: ${T.tealDim}; color: ${T.tealLight}; }
input, textarea, select { font-family: ${T.font}; }
`;

// ═══════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════
const Btn = ({ children, onClick, variant = "default", size = "md", disabled, style }) => {
  const base = {
    border: "1px solid",
    borderRadius: T.radiusSm,
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: T.font,
    fontWeight: 500,
    transition: "all 0.15s",
    opacity: disabled ? 0.4 : 1,
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    whiteSpace: "nowrap",
    ...(size === "sm" ? { padding: "4px 10px", fontSize: "12px" } :
      size === "lg" ? { padding: "10px 20px", fontSize: "15px" } :
        { padding: "6px 14px", fontSize: "13px" }),
    ...(variant === "teal" ? { background: T.teal, borderColor: T.teal, color: T.white } :
      variant === "red" ? { background: "transparent", borderColor: T.red, color: T.red } :
        variant === "ghost" ? { background: "transparent", borderColor: "transparent", color: T.textDim } :
          { background: T.bgCard, borderColor: T.border, color: T.text }),
    ...style,
  };
  return <button style={base} onClick={onClick} disabled={disabled}>{children}</button>;
};

const Input = ({ value, onChange, placeholder, style, multiline, rows = 3 }) => {
  const base = {
    background: T.bg, border: `1px solid ${T.border}`, borderRadius: T.radiusSm,
    color: T.text, padding: "8px 12px", fontSize: "13px", width: "100%",
    outline: "none", transition: "border-color 0.15s", fontFamily: T.font,
    ...style,
  };
  if (multiline) return <textarea style={{ ...base, resize: "vertical", lineHeight: 1.5 }} rows={rows} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />;
  return <input style={base} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />;
};

const Badge = ({ children, color = T.teal }) => (
  <span style={{
    background: color + "22", color, fontSize: "11px", fontWeight: 600,
    padding: "2px 8px", borderRadius: "10px", fontFamily: T.fontMono,
  }}>{children}</span>
);

const Pill = ({ active, onClick, children }) => (
  <button onClick={onClick} style={{
    background: active ? T.teal : "transparent",
    color: active ? T.white : T.textDim,
    border: `1px solid ${active ? T.teal : T.border}`,
    borderRadius: "20px", padding: "6px 16px", fontSize: "13px",
    cursor: "pointer", fontWeight: active ? 600 : 400,
    transition: "all 0.15s", fontFamily: T.font,
  }}>{children}</button>
);

// ═══════════════════════════════════════════════════════════
// LEVEL EDITOR
// ═══════════════════════════════════════════════════════════
const LevelEditor = ({ levels, onChange }) => {
  const colors = [T.red, "#f97316", T.amber, "#3b82f6", T.green];
  const labels = ["Nivel 1 — Inexistente", "Nivel 2 — Informal", "Nivel 3 — Definido", "Nivel 4 — Gestionado", "Nivel 5 — Optimizado"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {levels.map((lv, i) => (
        <div key={i} style={{
          display: "flex", gap: "10px", alignItems: "flex-start",
          background: i % 2 === 0 ? T.tealDim + "33" : "transparent",
          borderRadius: T.radiusSm, padding: "8px",
          borderLeft: `3px solid ${colors[i]}`,
        }}>
          <div style={{
            minWidth: "28px", height: "28px", borderRadius: "50%",
            background: colors[i], color: T.white, display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: "14px", fontWeight: 700,
          }}>{i + 1}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "10px", color: colors[i], fontWeight: 600, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {labels[i]}
            </div>
            <Input multiline rows={2} value={lv} onChange={v => {
              const next = [...levels];
              next[i] = v;
              onChange(next);
            }} placeholder={`Descriptor nivel ${i + 1}...`} />
          </div>
        </div>
      ))}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// COMPONENT CARD
// ═══════════════════════════════════════════════════════════
const CompCard = ({ comp, onUpdate, onDelete, onToggleCore, isCore, expanded, onToggleExpand }) => (
  <div style={{
    background: T.bgCard, border: `1px solid ${isCore ? T.teal : T.border}`,
    borderRadius: T.radius, overflow: "hidden",
    borderLeft: isCore ? `4px solid ${T.teal}` : `4px solid ${T.border}`,
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px",
      cursor: "pointer", userSelect: "none",
    }} onClick={onToggleExpand}>
      <span style={{ fontSize: "11px", color: T.textMuted, fontFamily: T.fontMono, minWidth: "40px" }}>{comp.id}</span>
      {isCore && <Badge color={T.teal}>CORE</Badge>}
      <span style={{ flex: 1, fontSize: "13px", fontWeight: 500 }}>{comp.name}</span>
      <Btn variant="ghost" size="sm" onClick={e => { e.stopPropagation(); onToggleCore(); }}>
        {isCore ? "★" : "☆"}
      </Btn>
      <Btn variant="red" size="sm" onClick={e => { e.stopPropagation(); if (confirm("¿Eliminar componente " + comp.id + "?")) onDelete(); }}>✕</Btn>
      <span style={{ fontSize: "16px", color: T.textMuted, transition: "transform 0.2s", transform: expanded ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
    </div>
    {expanded && (
      <div style={{ padding: "0 14px 14px", borderTop: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px", marginBottom: "12px" }}>
          <Input value={comp.id} onChange={v => onUpdate({ ...comp, id: v })} style={{ width: "100px", fontFamily: T.fontMono }} placeholder="ID" />
          <Input value={comp.name} onChange={v => onUpdate({ ...comp, name: v })} style={{ flex: 1 }} placeholder="Nombre del componente" />
        </div>
        <LevelEditor levels={comp.L} onChange={L => onUpdate({ ...comp, L })} />
      </div>
    )}
  </div>
);

// ═══════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════
export default function App() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("editor"); // editor | preview | stats
  const [activePilar, setActivePilar] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [expandedComps, setExpandedComps] = useState(new Set());
  const [coreSet, setCoreSet] = useState(new Set());
  const [search, setSearch] = useState("");
  const fileRef = useRef(null);

  // Load from storage
  useEffect(() => {
    try {
      const stored = window.localStorage?.getItem?.("fcma_data");
      const storedCore = window.localStorage?.getItem?.("fcma_core");
      if (stored) {
        setData(JSON.parse(stored));
        if (storedCore) setCoreSet(new Set(JSON.parse(storedCore)));
        setLoaded(true);
        return;
      }
    } catch (e) { /* ignore */ }
    setLoaded(true);
  }, []);

  // Save to storage on change
  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage?.setItem?.("fcma_data", JSON.stringify(data));
      window.localStorage?.setItem?.("fcma_core", JSON.stringify([...coreSet]));
    } catch (e) { /* ignore */ }
  }, [data, coreSet, loaded]);

  // ── Import MD ──
  const importMD = useCallback((text) => {
    const pilars = [];
    let curP = null, curS = null, curC = null;
    const lines = text.split("\n");
    for (const line of lines) {
      // Pilar: # P0: Name
      const pm = line.match(/^# (P\d+):\s*(.+)/);
      if (pm) {
        curP = { id: pm[1], name: pm[2].trim(), desc: "", subs: [] };
        pilars.push(curP);
        curS = null; curC = null;
        continue;
      }
      // Description (italic after pilar)
      if (curP && !curP.desc && line.startsWith("*") && line.endsWith("*")) {
        curP.desc = line.slice(1, -1);
        continue;
      }
      // Sub: ## 0.1 — Name
      const sm = line.match(/^## (\d+\.\d+)\s*[—–-]\s*(.+)/);
      if (sm && curP) {
        curS = { id: sm[1], name: sm[2].trim(), comps: [] };
        curP.subs.push(curS);
        curC = null;
        continue;
      }
      // Component: ### 🔷 CORE · 0.1.1 · Name  OR  ### 0.1.1 · Name
      const cm = line.match(/^### (?:🔷\s*CORE\s*·\s*)?(\d+\.\d+\.\d+)\s*·\s*(.+)/);
      if (cm && curS) {
        const isCore = line.includes("🔷 CORE");
        curC = { id: cm[1], name: cm[2].trim(), L: [] };
        curS.comps.push(curC);
        if (isCore) setCoreSet(prev => new Set([...prev, cm[1]]));
        continue;
      }
      // Level row: | **1** | descriptor |
      const lm = line.match(/^\|\s*\*\*(\d)\*\*\s*\|\s*(.+?)\s*\|$/);
      if (lm && curC) {
        curC.L.push(lm[2]);
        continue;
      }
    }
    // Fill missing levels
    pilars.forEach(p => p.subs.forEach(s => s.comps.forEach(c => {
      while (c.L.length < 5) c.L.push("");
    })));
    setData(pilars);
    if (pilars.length > 0) setActivePilar(0);
  }, []);

  // ── Export MD ──
  const exportMD = useCallback(() => {
    let md = "# FINANCIAL CRIME MATURITY ASSESSMENT\n\n";
    md += "## MÓDULO A: FRAUD RISK MANAGEMENT PROGRAM\n\n---\n\n";
    let tC = 0, tS = 0;
    data.forEach(p => { tS += p.subs.length; p.subs.forEach(s => tC += s.comps.length); });
    md += `**${data.length} Pilares · ${tS} Sub-dimensiones · ${tC} Componentes · ${coreSet.size} Core**\n\n---\n\n`;
    data.forEach(p => {
      md += `# ${p.id}: ${p.name}\n\n`;
      if (p.desc) md += `*${p.desc}*\n\n`;
      p.subs.forEach(s => {
        md += `## ${s.id} — ${s.name}\n\n`;
        s.comps.forEach(c => {
          const tag = coreSet.has(c.id) ? "🔷 CORE · " : "";
          md += `### ${tag}${c.id} · ${c.name}\n\n`;
          md += "| Nivel | Descriptor |\n|:---:|:---|\n";
          c.L.forEach((l, i) => { md += `| **${i + 1}** | ${l} |\n`; });
          md += "\n";
        });
      });
      md += "---\n\n";
    });
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "FCMA_Assessment.md"; a.click();
    URL.revokeObjectURL(url);
  }, [data, coreSet]);

  // ── Export JSON ──
  const exportJSON = useCallback(() => {
    const payload = { version: "2.0", data, core: [...coreSet] };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "FCMA_Assessment.json"; a.click();
    URL.revokeObjectURL(url);
  }, [data, coreSet]);

  // ── Import JSON ──
  const importJSON = useCallback((text) => {
    try {
      const payload = JSON.parse(text);
      if (payload.data) { setData(payload.data); setCoreSet(new Set(payload.core || [])); }
      else if (Array.isArray(payload)) { setData(payload); }
    } catch (e) { alert("Error parsing JSON: " + e.message); }
  }, []);

  // ── File handler ──
  const handleFile = useCallback((e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      if (file.name.endsWith(".json")) importJSON(text);
      else importMD(text);
    };
    reader.readAsText(file);
    e.target.value = "";
  }, [importMD, importJSON]);

  // ── CRUD helpers ──
  const updateData = (fn) => setData(prev => { const next = JSON.parse(JSON.stringify(prev)); fn(next); return next; });

  const addPilar = () => updateData(d => {
    const n = d.length;
    d.push({ id: `P${n}`, name: "Nuevo Pilar", desc: "", subs: [] });
    setActivePilar(d.length - 1);
  });

  const deletePilar = (idx) => updateData(d => {
    d.splice(idx, 1);
    setActivePilar(Math.max(0, idx - 1));
  });

  const addSub = (pIdx) => updateData(d => {
    const p = d[pIdx];
    const n = p.subs.length;
    const sid = `${p.id.replace("P", "")}.${n + 1}`;
    p.subs.push({ id: sid, name: "Nueva Sub-dimensión", comps: [] });
    setActiveSub(p.subs.length - 1);
  });

  const deleteSub = (pIdx, sIdx) => updateData(d => {
    d[pIdx].subs.splice(sIdx, 1);
    setActiveSub(null);
  });

  const addComp = (pIdx, sIdx) => updateData(d => {
    const s = d[pIdx].subs[sIdx];
    const n = s.comps.length;
    const cid = `${s.id}.${n + 1}`;
    s.comps.push({ id: cid, name: "Nuevo Componente", L: ["", "", "", "", ""] });
  });

  const deleteComp = (pIdx, sIdx, cIdx) => updateData(d => {
    d[pIdx].subs[sIdx].comps.splice(cIdx, 1);
  });

  const updateComp = (pIdx, sIdx, cIdx, comp) => updateData(d => {
    d[pIdx].subs[sIdx].comps[cIdx] = comp;
  });

  const toggleCore = (compId) => setCoreSet(prev => {
    const next = new Set(prev);
    if (next.has(compId)) next.delete(compId); else next.add(compId);
    return next;
  });

  // ── Stats ──
  let totalComps = 0, totalSubs = 0;
  data.forEach(p => { totalSubs += p.subs.length; p.subs.forEach(s => totalComps += s.comps.length); });

  // ── Filter ──
  const matchSearch = (comp) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return comp.id.toLowerCase().includes(q) || comp.name.toLowerCase().includes(q) ||
      comp.L.some(l => l.toLowerCase().includes(q));
  };

  // ── Active pilar/sub data ──
  const curPilar = data[activePilar] || null;
  const curSub = curPilar?.subs[activeSub] || null;

  return (
    <>
      <style>{css}</style>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* ═══ HEADER ═══ */}
        <header style={{
          background: T.bgCard, borderBottom: `1px solid ${T.border}`,
          padding: "12px 24px", display: "flex", alignItems: "center", gap: "16px",
          position: "sticky", top: 0, zIndex: 100,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "6px",
              background: `linear-gradient(135deg, ${T.teal}, ${T.tealLight})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", fontWeight: 800, color: T.white,
            }}>F</div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.3px" }}>FCMA</div>
              <div style={{ fontSize: "10px", color: T.textMuted, letterSpacing: "1px", textTransform: "uppercase" }}>Assessment Editor</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "4px", marginLeft: "20px" }}>
            <Pill active={view === "editor"} onClick={() => setView("editor")}>Editor</Pill>
            <Pill active={view === "preview"} onClick={() => setView("preview")}>Preview</Pill>
            <Pill active={view === "stats"} onClick={() => setView("stats")}>Stats</Pill>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <Badge>{data.length}P</Badge>
            <Badge>{totalSubs}S</Badge>
            <Badge>{totalComps}C</Badge>
            <Badge color={T.teal}>{coreSet.size} Core</Badge>
          </div>

          <div style={{ display: "flex", gap: "6px" }}>
            <input ref={fileRef} type="file" accept=".md,.json" onChange={handleFile} style={{ display: "none" }} />
            <Btn size="sm" onClick={() => fileRef.current?.click()}>📂 Importar</Btn>
            <Btn size="sm" variant="teal" onClick={exportMD}>📄 Exportar MD</Btn>
            <Btn size="sm" onClick={exportJSON}>💾 JSON</Btn>
          </div>
        </header>

        {/* ═══ MAIN ═══ */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {view === "editor" && (
            <>
              {/* ── LEFT: Pilars ── */}
              <div style={{
                width: "220px", borderRight: `1px solid ${T.border}`,
                overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "4px",
                flexShrink: 0,
              }}>
                <div style={{ fontSize: "10px", color: T.textMuted, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontWeight: 600 }}>
                  Pilares
                </div>
                {data.map((p, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "8px 10px", borderRadius: T.radiusSm, cursor: "pointer",
                    background: activePilar === i ? T.tealDim : "transparent",
                    border: `1px solid ${activePilar === i ? T.teal : "transparent"}`,
                    transition: "all 0.1s",
                  }} onClick={() => { setActivePilar(i); setActiveSub(null); }}>
                    <span style={{ fontSize: "11px", fontFamily: T.fontMono, color: T.teal, fontWeight: 700, minWidth: "24px" }}>{p.id}</span>
                    <span style={{ fontSize: "12px", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</span>
                    <Btn variant="red" size="sm" onClick={e => { e.stopPropagation(); if (confirm("¿Eliminar " + p.id + "?")) deletePilar(i); }}
                      style={{ padding: "2px 5px", fontSize: "10px" }}>✕</Btn>
                  </div>
                ))}
                <Btn size="sm" variant="teal" onClick={addPilar} style={{ marginTop: "8px" }}>+ Pilar</Btn>

                {data.length === 0 && (
                  <div style={{ marginTop: "20px", padding: "16px", border: `1px dashed ${T.border}`, borderRadius: T.radius, textAlign: "center" }}>
                    <div style={{ fontSize: "13px", color: T.textDim, marginBottom: "8px" }}>Sin datos</div>
                    <div style={{ fontSize: "11px", color: T.textMuted, marginBottom: "12px" }}>
                      Importa tu archivo FCMA_Assessment_Final_v2.md usando el botón 📂 Importar
                    </div>
                  </div>
                )}
              </div>

              {/* ── MIDDLE: Sub-dimensions ── */}
              {curPilar && (
                <div style={{
                  width: "240px", borderRight: `1px solid ${T.border}`,
                  overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "4px",
                  flexShrink: 0,
                }}>
                  {/* Pilar header editable */}
                  <Input value={curPilar.id} onChange={v => updateData(d => { d[activePilar].id = v; })}
                    style={{ fontFamily: T.fontMono, fontSize: "12px", marginBottom: "4px", width: "60px" }} />
                  <Input value={curPilar.name} onChange={v => updateData(d => { d[activePilar].name = v; })}
                    style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px" }} />
                  <Input multiline rows={2} value={curPilar.desc || ""} onChange={v => updateData(d => { d[activePilar].desc = v; })}
                    style={{ fontSize: "11px", marginBottom: "12px" }} placeholder="Descripción del pilar..." />

                  <div style={{ fontSize: "10px", color: T.textMuted, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontWeight: 600 }}>
                    Sub-dimensiones ({curPilar.subs.length})
                  </div>
                  {curPilar.subs.map((s, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      padding: "8px 10px", borderRadius: T.radiusSm, cursor: "pointer",
                      background: activeSub === i ? T.tealDim : "transparent",
                      border: `1px solid ${activeSub === i ? T.teal : "transparent"}`,
                    }} onClick={() => setActiveSub(i)}>
                      <span style={{ fontSize: "10px", fontFamily: T.fontMono, color: T.tealLight, minWidth: "24px" }}>{s.id}</span>
                      <span style={{ fontSize: "12px", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.name}</span>
                      <Badge>{s.comps.length}</Badge>
                      <Btn variant="red" size="sm" onClick={e => { e.stopPropagation(); if (confirm("¿Eliminar sub " + s.id + "?")) deleteSub(activePilar, i); }}
                        style={{ padding: "2px 5px", fontSize: "10px" }}>✕</Btn>
                    </div>
                  ))}
                  <Btn size="sm" variant="teal" onClick={() => addSub(activePilar)} style={{ marginTop: "8px" }}>+ Sub-dimensión</Btn>
                </div>
              )}

              {/* ── RIGHT: Components ── */}
              <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
                {curSub ? (
                  <>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <Input value={curSub.id} onChange={v => updateData(d => { d[activePilar].subs[activeSub].id = v; })}
                        style={{ width: "60px", fontFamily: T.fontMono }} />
                      <Input value={curSub.name} onChange={v => updateData(d => { d[activePilar].subs[activeSub].name = v; })}
                        style={{ flex: 1, fontWeight: 600 }} />
                      <Badge>{curSub.comps.length} comps</Badge>
                    </div>

                    <Input value={search} onChange={setSearch} placeholder="🔍 Buscar componente..." style={{ marginBottom: "12px" }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {curSub.comps.filter(matchSearch).map((c, i) => {
                        const realIdx = curSub.comps.indexOf(c);
                        return (
                          <CompCard key={c.id + i}
                            comp={c}
                            isCore={coreSet.has(c.id)}
                            expanded={expandedComps.has(c.id)}
                            onToggleExpand={() => setExpandedComps(prev => {
                              const next = new Set(prev);
                              if (next.has(c.id)) next.delete(c.id); else next.add(c.id);
                              return next;
                            })}
                            onUpdate={v => updateComp(activePilar, activeSub, realIdx, v)}
                            onDelete={() => deleteComp(activePilar, activeSub, realIdx)}
                            onToggleCore={() => toggleCore(c.id)}
                          />
                        );
                      })}
                    </div>
                    <Btn size="sm" variant="teal" onClick={() => addComp(activePilar, activeSub)} style={{ marginTop: "12px" }}>+ Componente</Btn>
                  </>
                ) : curPilar ? (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: T.textMuted }}>
                    ← Selecciona una sub-dimensión
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: T.textMuted }}>
                    ← Selecciona un pilar o importa un archivo
                  </div>
                )}
              </div>
            </>
          )}

          {/* ═══ PREVIEW ═══ */}
          {view === "preview" && (
            <div style={{ flex: 1, overflowY: "auto", padding: "32px", maxWidth: "900px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px", letterSpacing: "-0.5px" }}>
                Financial Crime Maturity Assessment
              </h1>
              <p style={{ color: T.textDim, fontSize: "14px", marginBottom: "24px" }}>
                {data.length} Pilares · {totalSubs} Sub-dimensiones · {totalComps} Componentes · {coreSet.size} Core
              </p>
              {data.map((p, pi) => (
                <div key={pi} style={{ marginBottom: "32px" }}>
                  <h2 style={{ fontSize: "20px", fontWeight: 700, color: T.tealLight, marginBottom: "4px" }}>
                    {p.id}: {p.name}
                  </h2>
                  {p.desc && <p style={{ color: T.textMuted, fontSize: "13px", fontStyle: "italic", marginBottom: "16px" }}>{p.desc}</p>}
                  {p.subs.map((s, si) => (
                    <div key={si} style={{ marginBottom: "20px", marginLeft: "16px" }}>
                      <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
                        {s.id} — {s.name}
                      </h3>
                      {s.comps.map((c, ci) => (
                        <div key={ci} style={{
                          marginBottom: "12px", marginLeft: "8px",
                          borderLeft: coreSet.has(c.id) ? `3px solid ${T.teal}` : `3px solid ${T.border}`,
                          paddingLeft: "12px",
                        }}>
                          <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                            {coreSet.has(c.id) && <span style={{ color: T.teal, marginRight: "6px" }}>🔷 CORE</span>}
                            <span style={{ fontFamily: T.fontMono, color: T.textMuted, marginRight: "8px" }}>{c.id}</span>
                            {c.name}
                          </div>
                          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                            <tbody>
                              {c.L.map((l, li) => (
                                <tr key={li}>
                                  <td style={{
                                    width: "32px", padding: "4px 8px", fontWeight: 700, textAlign: "center",
                                    color: [T.red, "#f97316", T.amber, "#3b82f6", T.green][li],
                                    borderBottom: `1px solid ${T.border}`,
                                  }}>{li + 1}</td>
                                  <td style={{ padding: "4px 8px", borderBottom: `1px solid ${T.border}`, color: T.textDim }}>{l}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* ═══ STATS ═══ */}
          {view === "stats" && (
            <div style={{ flex: 1, overflowY: "auto", padding: "32px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>Estadísticas del Assessment</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "32px" }}>
                {[
                  { label: "Pilares", value: data.length, color: T.teal },
                  { label: "Sub-dimensiones", value: totalSubs, color: T.tealLight },
                  { label: "Componentes", value: totalComps, color: "#3b82f6" },
                  { label: "Core", value: coreSet.size, color: T.amber },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: T.bgCard, border: `1px solid ${T.border}`,
                    borderRadius: T.radius, padding: "16px", textAlign: "center",
                    borderTop: `3px solid ${s.color}`,
                  }}>
                    <div style={{ fontSize: "32px", fontWeight: 800, color: s.color, fontFamily: T.fontMono }}>{s.value}</div>
                    <div style={{ fontSize: "12px", color: T.textMuted, marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px" }}>Detalle por Pilar</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Pilar", "Nombre", "Subs", "Comps", "Core", "Completitud"].map((h, i) => (
                      <th key={i} style={{
                        padding: "10px", textAlign: i > 1 ? "center" : "left",
                        borderBottom: `2px solid ${T.teal}`, fontSize: "12px",
                        color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.5px",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((p, i) => {
                    let pc = 0, pcore = 0, filled = 0, total = 0;
                    p.subs.forEach(s => s.comps.forEach(c => {
                      pc++;
                      if (coreSet.has(c.id)) pcore++;
                      c.L.forEach(l => { total++; if (l.trim()) filled++; });
                    }));
                    const pct = total > 0 ? Math.round(filled / total * 100) : 0;
                    return (
                      <tr key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
                        <td style={{ padding: "8px", fontFamily: T.fontMono, color: T.teal, fontWeight: 700 }}>{p.id}</td>
                        <td style={{ padding: "8px", fontSize: "13px" }}>{p.name}</td>
                        <td style={{ padding: "8px", textAlign: "center", fontSize: "13px" }}>{p.subs.length}</td>
                        <td style={{ padding: "8px", textAlign: "center", fontSize: "13px" }}>{pc}</td>
                        <td style={{ padding: "8px", textAlign: "center" }}><Badge color={T.teal}>{pcore}</Badge></td>
                        <td style={{ padding: "8px", textAlign: "center" }}>
                          <div style={{
                            width: "100%", height: "8px", background: T.border,
                            borderRadius: "4px", overflow: "hidden",
                          }}>
                            <div style={{
                              width: `${pct}%`, height: "100%",
                              background: pct === 100 ? T.green : pct > 80 ? T.teal : T.amber,
                              borderRadius: "4px", transition: "width 0.3s",
                            }} />
                          </div>
                          <div style={{ fontSize: "10px", color: T.textMuted, marginTop: "2px" }}>{pct}%</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div style={{ marginTop: "32px", padding: "16px", background: T.bgCard, borderRadius: T.radius, border: `1px solid ${T.border}` }}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>Total de Descriptores</h4>
                <p style={{ fontSize: "13px", color: T.textDim }}>
                  {totalComps} componentes × 5 niveles = <strong style={{ color: T.tealLight }}>{totalComps * 5} descriptores únicos</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
