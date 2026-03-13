import React, { useState, useEffect, useCallback } from "react";

const API_URL = "/api/pairs";
const API_URL2 = "/api/pairs?phase=2";

const TYPE_COLORS = {
  Stock: { bg: "#10b981", light: "#d1fae5", text: "#065f46" },
  Commodities: { bg: "#f59e0b", light: "#fef3c7", text: "#92400e" },
  Index: { bg: "#8b5cf6", light: "#ede9fe", text: "#5b21b6" },
  ETF: { bg: "#3b82f6", light: "#dbeafe", text: "#1e40af" },
  Forex: { bg: "#ec4899", light: "#fce7f3", text: "#9d174d" },
  Unclassified: { bg: "#6b7280", light: "#f3f4f6", text: "#374151" },
};

const FLOW_STEPS = [
  { id: 1, title: "RWA_DB 읽기", desc: "사용자가 수정한 분류 반영. 첫 실행 시 자동 생성.", icon: "📂" },
  { id: 2, title: "기존 날짜 보존", desc: "Sheet16의 기존 First Detected 날짜를 메모리에 저장.", icon: "📅" },
  { id: 3, title: "크립토 블랙리스트", desc: "CoinGecko 상위 1000개 크립토 → 블랙리스트 구축.", icon: "🚫" },
  { id: 4, title: "Tier 1: Direct API", desc: "~26개 거래소 API 직접 호출. 크립토 아닌 것 = RWA.", icon: "⚡" },
  { id: 5, title: "Tier 2: CoinGecko", desc: "Tier 1에 없는 거래소 ~5개를 CoinGecko로 추가 수집.", icon: "🦎" },
  { id: 6, title: "Tier 3: 수동", desc: "API 없는 소규모 거래소 하드코딩.", icon: "✍️" },
  { id: 7, title: "중복 제거 + 정렬", desc: "거래소|티커 기준 dedup → 정렬.", icon: "🔄" },
  { id: 8, title: "신규 감지", desc: "First Detected 비교 → NEW 마킹 + DB 갱신.", icon: "🆕" },
  { id: 9, title: "Sheet16 출력", desc: "헤더 + 데이터 + 색상 + 메타정보 기록.", icon: "📊" },
];

const PAGE_SIZE = 50;

function PieChart({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (!total) return null;
  let cum = 0;
  const sz = 170, cx = sz / 2, cy = sz / 2, r = 68;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
      <svg width={sz} height={sz}>
        {data.map((d, i) => {
          const st = cum / total; cum += d.value; const en = cum / total;
          const sa = st * 2 * Math.PI - Math.PI / 2, ea = en * 2 * Math.PI - Math.PI / 2;
          const x1 = cx + r * Math.cos(sa), y1 = cy + r * Math.sin(sa);
          const x2 = cx + r * Math.cos(ea), y2 = cy + r * Math.sin(ea);
          return <path key={i} d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${en - st > 0.5 ? 1 : 0} 1 ${x2},${y2} Z`} fill={d.color} stroke="#fff" strokeWidth={2} />;
        })}
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: d.color, flexShrink: 0 }} />
            <span>{d.label}</span>
            <span style={{ color: "#9ca3af", fontWeight: 600 }}>{d.value}</span>
            <span style={{ color: "#d1d5db", fontSize: 10 }}>({((d.value / total) * 100).toFixed(1)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart({ data }) {
  if (!data.length) return null;
  const mx = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, maxHeight: 400, overflowY: "auto" }}>
      {data.slice(0, 25).map((d, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
          <div style={{ width: 100, textAlign: "right", color: "#6b7280", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.label}</div>
          <div style={{ flex: 1, height: 18, background: "#f3f4f6", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ width: `${(d.value / mx) * 100}%`, height: "100%", background: "linear-gradient(90deg,#6366f1,#8b5cf6)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 6, color: "#fff", fontSize: 10, fontWeight: 600, minWidth: 28 }}>{d.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [tab, setTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [pairs, setPairs] = useState([]);
  const [meta, setMeta] = useState({});
  const [filterEx, setFilterEx] = useState("ALL");
  const [filterType, setFilterType] = useState("ALL");
  const [search, setSearch] = useState("");
  const [pg, setPg] = useState(1);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErr(null);
    try {
      // Phase 1: 주요 거래소 10개 + 수동
      const r1 = await fetch(API_URL);
      if (!r1.ok) throw new Error("HTTP " + r1.status);
      const j1 = await r1.json();
      if (j1.error) throw new Error(j1.error);

      let allPairs = [...(j1.pairs || [])];
      setPairs(allPairs);
      setMeta(j1.meta || {});
      setLoading(false);

      // Phase 2: 나머지 거래소 (백그라운드)
      try {
        const r2 = await fetch(API_URL2);
        if (r2.ok) {
          const j2 = await r2.json();
          allPairs = [...allPairs, ...(j2.pairs || [])];
          const seen2 = new Set(), deduped2 = [];
          for (const p of allPairs) {
            const k = p.ex + "|" + p.ticker;
            if (!seen2.has(k)) { seen2.add(k); deduped2.push(p); }
          }
          allPairs = deduped2;
          const exC = {}, tyC = {};
          allPairs.forEach(p => { exC[p.ex]=(exC[p.ex]||0)+1; tyC[p.type]=(tyC[p.type]||0)+1; });
          setPairs(allPairs);
          setMeta(prev => ({ ...prev, total: allPairs.length, info: `Total: ${allPairs.length} pairs`, exchangeCounts: exC, typeCounts: tyC }));
        }
      } catch(e2) {}

      // Phase 3: AI 분류 — Unclassified 티커 수집 → Claude 호출
      const uncTickers = [...new Set(allPairs.filter(p => p.type === "Unclassified").map(p => p.ticker))];
      if (uncTickers.length > 0) {
        try {
          const r3 = await fetch("/api/classify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tickers: uncTickers })
          });
          if (r3.ok) {
            const j3 = await r3.json();
            const cls = j3.classifications || {};
            const updated = allPairs.map(p => {
              if (p.type === "Unclassified" && cls[p.ticker]) {
                return { ...p, type: cls[p.ticker] };
              }
              return p;
            });
            const removedTickers = new Set((j3.removed || []).filter(r => r.reason === "Crypto").map(r => r.ticker.toUpperCase()));
            allPairs = updated.filter(p => !(p.type === "Unclassified" && removedTickers.has(p.ticker)));
            const exC3 = {}, tyC3 = {};
            allPairs.forEach(p => { exC3[p.ex]=(exC3[p.ex]||0)+1; tyC3[p.type]=(tyC3[p.type]||0)+1; });
            setPairs(allPairs);
            setMeta(prev => ({
              ...prev, total: allPairs.length,
              info: `Total: ${allPairs.length} pairs | AI: ${j3.classified || 0} classified`,
              exchangeCounts: exC3, typeCounts: tyC3, aiClassified: j3.classified || 0,
            }));
          }
        } catch(e3) {}
      }

      // Phase 4: CoinGecko Tier 2 — 추가 거래소 탐색
      try {
        const existExNames = [...new Set(allPairs.map(p => p.ex))];
        const r4 = await fetch("/api/coingecko", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ exchanges: existExNames })
        });
        if (r4.ok) {
          const j4 = await r4.json();
          if (j4.pairs && j4.pairs.length > 0) {
            allPairs = [...allPairs, ...j4.pairs];
            const seen4 = new Set(), deduped4 = [];
            for (const p of allPairs) {
              const k = p.ex + "|" + p.ticker;
              if (!seen4.has(k)) { seen4.add(k); deduped4.push(p); }
            }
            allPairs = deduped4;
            const exC4 = {}, tyC4 = {};
            allPairs.forEach(p => { exC4[p.ex]=(exC4[p.ex]||0)+1; tyC4[p.type]=(tyC4[p.type]||0)+1; });
            setPairs(allPairs);
            setMeta(prev => ({
              ...prev, total: allPairs.length,
              info: `Total: ${allPairs.length} pairs (CG +${j4.pairs.length})`,
              exchangeCounts: exC4, typeCounts: tyC4,
            }));
          }
        }
      } catch(e4) {}
    } catch (e) {
      setErr(e.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);
  useEffect(() => { setPg(1); }, [filterEx, filterType, search]);

  if (loading) {
    const isPlaceholder = API_URL.includes("YOUR_DEPLOYMENT_ID");
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#f8fafc", flexDirection: "column", gap: 16 }}>
        <div style={{ width: 48, height: 48, border: "4px solid #e5e7eb", borderTop: "4px solid #6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        <div style={{ color: "#6b7280", fontSize: 14 }}>Sheet16 데이터 로딩 중...</div>
        {isPlaceholder && (
          <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "12px 20px", maxWidth: 480, fontSize: 13, color: "#92400e" }}>
            ⚠️ <b>API_URL 미설정!</b> src/App.js 4번째 줄에 Apps Script 배포 URL을 넣어주세요.
          </div>
        )}
      </div>
    );
  }

  if (err) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#f8fafc" }}>
        <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 12, padding: "24px 32px", maxWidth: 480, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>❌</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#991b1b", marginBottom: 8 }}>데이터 로드 실패</div>
          <div style={{ fontSize: 13, color: "#b91c1c", marginBottom: 16 }}>{err}</div>
          <div style={{ fontSize: 12, color: "#6b7280", textAlign: "left", lineHeight: 1.7, marginBottom: 16 }}>
            1. Apps Script에 doGet() 추가했는지 확인<br/>
            2. 배포 → 웹 앱 → "모든 사용자" 접근 허용<br/>
            3. API_URL에 올바른 배포 URL 입력
          </div>
          <button onClick={fetchData} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#6366f1", color: "#fff", fontWeight: 600, cursor: "pointer" }}>다시 시도</button>
        </div>
      </div>
    );
  }

  const total = pairs.length;
  const newC = pairs.filter(p => p.isNew).length;
  const tyC = meta.typeCounts || {};
  const exC = meta.exchangeCounts || {};
  const pieData = Object.entries(tyC).map(([k, v]) => ({ label: k, value: v, color: (TYPE_COLORS[k] || {}).bg || "#999" })).sort((a, b) => b.value - a.value);
  const barData = Object.entries(exC).map(([k, v]) => ({ label: k, value: v })).sort((a, b) => b.value - a.value);
  const exList = [...new Set(pairs.map(p => p.ex))].sort();
  const tyList = [...new Set(pairs.map(p => p.type))].sort();

  const filtered = pairs.filter(p => {
    if (filterEx !== "ALL" && p.ex !== filterEx) return false;
    if (filterType !== "ALL" && p.type !== filterType) return false;
    if (search) {
      const q = search.toUpperCase();
      if (!p.ticker.toUpperCase().includes(q) && !p.pair.toUpperCase().includes(q)) return false;
    }
    return true;
  });
  const totalPg = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((pg - 1) * PAGE_SIZE, pg * PAGE_SIZE);

  const tabBtn = (label, key, count) => (
    <button key={key} onClick={() => setTab(key)} style={{
      padding: "10px 20px", border: "none",
      borderBottom: tab === key ? "3px solid #6366f1" : "3px solid transparent",
      background: tab === key ? "rgba(99,102,241,0.1)" : "transparent",
      color: tab === key ? "#6366f1" : "#9ca3af",
      fontWeight: tab === key ? 700 : 500, cursor: "pointer", fontSize: 14,
      display: "flex", alignItems: "center", gap: 6,
    }}>
      {label}
      {count != null && <span style={{ background: tab === key ? "#6366f1" : "#e5e7eb", color: tab === key ? "#fff" : "#6b7280", borderRadius: 10, padding: "2px 8px", fontSize: 11, fontWeight: 600 }}>{count}</span>}
    </button>
  );

  return (
    <div style={{ fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4338ca 100%)", padding: "24px 32px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
              🏛️ RWA Perp Pair Updater
              <span style={{ fontSize: 11, background: "rgba(255,255,255,0.15)", padding: "3px 8px", borderRadius: 6, marginLeft: 8 }}>v6 LIVE</span>
            </h1>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              Sheet16 실시간 연동 · {meta.updated || "N/A"} 기준 · {total.toLocaleString()}개 페어
            </p>
          </div>
          <button onClick={fetchData} style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: "#10b981", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>🔄 새로고침</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #e5e7eb", background: "#fff", paddingLeft: 16, overflowX: "auto" }}>
        {tabBtn("📊 대시보드", "dashboard")}
        {tabBtn("📋 페어 목록", "pairs", total.toLocaleString())}
        {tabBtn("⚙️ 실행 플로우", "flow")}
      </div>

      <div style={{ padding: "24px 32px", maxWidth: 1200 }}>

        {/* ===== DASHBOARD ===== */}
        {tab === "dashboard" && (
          <div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              {[
                { l: "총 RWA 페어", v: total.toLocaleString(), c: "#4338ca" },
                { l: "신규 감지", v: newC, c: "#10b981" },
                { l: "거래소 수", v: Object.keys(exC).length, c: "#f59e0b" },
                { l: "유형 수", v: Object.keys(tyC).length, c: "#ec4899" },
              ].map((s, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", border: "1px solid #f3f4f6", flex: 1, minWidth: 140 }}>
                  <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, marginBottom: 4 }}>{s.l}</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: s.c }}>{s.v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: 14, color: "#374151" }}>유형별 분포</h3>
                <PieChart data={pieData} />
              </div>
              <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: 14, color: "#374151" }}>거래소별 RWA 페어 수</h3>
                <BarChart data={barData} />
              </div>
            </div>
          </div>
        )}

        {/* ===== PAIRS TABLE ===== */}
        {tab === "pairs" && (
          <div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <select value={filterEx} onChange={e => setFilterEx(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, background: "#fff" }}>
                <option value="ALL">모든 거래소 ({exList.length})</option>
                {exList.map(ex => <option key={ex} value={ex}>{ex} ({exC[ex] || 0})</option>)}
              </select>
              <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, background: "#fff" }}>
                <option value="ALL">모든 유형 ({tyList.length})</option>
                {tyList.map(t => <option key={t} value={t}>{t} ({tyC[t] || 0})</option>)}
              </select>
              <input placeholder="🔍 티커 검색..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, width: 180 }} />
              <span style={{ fontSize: 12, color: "#9ca3af" }}>{filtered.length.toLocaleString()}개</span>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#1e1b4b", color: "#fff" }}>
                    {["#", "Exchange", "Type", "Pair", "Ticker", "First Detected"].map((h, i) => (
                      <th key={i} style={{ padding: "10px 12px", textAlign: "left", fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paged.map((p, i) => {
                    const tc = TYPE_COLORS[p.type] || TYPE_COLORS.Unclassified;
                    const rowNum = (pg - 1) * PAGE_SIZE + i + 1;
                    return (
                      <tr key={i} style={{ borderBottom: "1px solid #f3f4f6", background: p.isNew ? "#fffbeb" : i % 2 === 0 ? "#fff" : "#fafafa" }}>
                        <td style={{ padding: "7px 12px", color: "#9ca3af", fontSize: 11 }}>{rowNum}</td>
                        <td style={{ padding: "7px 12px", fontWeight: 500 }}>{p.ex}</td>
                        <td style={{ padding: "7px 12px" }}>
                          <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 12, background: tc.light, color: tc.text, fontSize: 11, fontWeight: 600 }}>{p.type}</span>
                        </td>
                        <td style={{ padding: "7px 12px", fontFamily: "monospace", fontSize: 12 }}>{p.pair}</td>
                        <td style={{ padding: "7px 12px", fontWeight: 600 }}>{p.ticker}</td>
                        <td style={{ padding: "7px 12px" }}>
                          {p.date}
                          {p.isNew && <span style={{ background: "#fbbf24", color: "#92400e", padding: "1px 6px", borderRadius: 4, fontSize: 10, fontWeight: 700, marginLeft: 6 }}>NEW</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPg > 1 && (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 16 }}>
                <button onClick={() => setPg(p => Math.max(1, p - 1))} disabled={pg === 1}
                  style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #d1d5db", background: pg === 1 ? "#f3f4f6" : "#fff", cursor: pg === 1 ? "default" : "pointer", fontSize: 13 }}>◀ 이전</button>
                <span style={{ fontSize: 13, color: "#6b7280" }}>{pg} / {totalPg}</span>
                <button onClick={() => setPg(p => Math.min(totalPg, p + 1))} disabled={pg === totalPg}
                  style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #d1d5db", background: pg === totalPg ? "#f3f4f6" : "#fff", cursor: pg === totalPg ? "default" : "pointer", fontSize: 13 }}>다음 ▶</button>
              </div>
            )}
          </div>
        )}

        {/* ===== FLOW ===== */}
        {tab === "flow" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FLOW_STEPS.map((s, i) => (
              <div key={s.id} style={{ display: "flex", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 40 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#6366f1", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{s.id}</div>
                  {i < FLOW_STEPS.length - 1 && <div style={{ width: 2, flex: 1, background: "#e5e7eb", minHeight: 16 }} />}
                </div>
                <div style={{ flex: 1, background: "#fff", borderRadius: 12, padding: "14px 20px", marginBottom: 10, border: "1px solid #f3f4f6", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ margin: 0, fontSize: 14, color: "#111827" }}>{s.icon} {s.title}</h3>
                  <p style={{ margin: "4px 0 0", fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: "16px 32px", borderTop: "1px solid #e5e7eb", background: "#fff", display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9ca3af" }}>
        <span>RWA Perp Pair Updater v6 — Live Data from Sheet16</span>
        <span>{meta.updated || ""}</span>
      </div>
    </div>
  );
}

export default App;