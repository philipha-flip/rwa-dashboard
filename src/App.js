import { useState, useEffect, useCallback, useRef } from "react";

const EXCHANGES_TIER1 = [
  { name: "Binance", api: "fapi.binance.com", status: "ok", rwa: 14 },
  { name: "OKX", api: "okx.com", status: "ok", rwa: 18 },
  { name: "Gate", api: "gateio.ws", status: "ok", rwa: 12 },
  { name: "Bitget", api: "bitget.com", status: "ok", rwa: 15 },
  { name: "MEXC", api: "contract.mexc.com", status: "ok", rwa: 9 },
  { name: "KuCoin", api: "kucoin.com", status: "ok", rwa: 11 },
  { name: "HTX", api: "hbdm.com", status: "ok", rwa: 8 },
  { name: "BingX", api: "bingx.com", status: "ok", rwa: 13 },
  { name: "Blofin", api: "blofin.com", status: "ok", rwa: 6 },
  { name: "Bitmex", api: "bitmex.com", status: "ok", rwa: 4 },
  { name: "Kraken", api: "futures.kraken.com", status: "ok", rwa: 3 },
  { name: "dYdX", api: "dydx.trade", status: "ok", rwa: 7 },
  { name: "Bitmart", api: "bitmart.com", status: "fail", rwa: 0 },
  { name: "Phemex", api: "phemex.com", status: "ok", rwa: 5 },
  { name: "CoinEx", api: "coinex.com", status: "ok", rwa: 4 },
  { name: "Toobit", api: "toobit.com", status: "fail", rwa: 0 },
  { name: "XT.COM", api: "xt.com", status: "ok", rwa: 6 },
  { name: "Pionex", api: "pionex.com", status: "ok", rwa: 2 },
  { name: "WEEX", api: "weex.com", status: "ok", rwa: 5 },
  { name: "Hyperliquid", api: "hyperliquid.xyz", status: "ok", rwa: 22 },
  { name: "Gains Network", api: "gains.trade", status: "ok", rwa: 19 },
  { name: "ApeX", api: "apex.exchange", status: "ok", rwa: 3 },
  { name: "Backpack", api: "backpack.exchange", status: "ok", rwa: 2 },
  { name: "Vest", api: "vest.exchange", status: "ok", rwa: 8 },
  { name: "Ostium", api: "ostium.io", status: "ok", rwa: 16 },
];

const EXCHANGES_TIER2_CG = [
  { name: "Vertex", rwa: 4 },
  { name: "RabbitX", rwa: 2 },
  { name: "Aevo", rwa: 3 },
  { name: "Drift", rwa: 5 },
  { name: "Zeta Markets", rwa: 1 },
];

const MANUAL_EXCHANGES = [
  { name: "Lighter", rwa: 20 },
  { name: "edgeX", rwa: 8 },
  { name: "Aster", rwa: 6 },
  { name: "BTCC", rwa: 20 },
  { name: "Avantis", rwa: 4 },
  { name: "Pacifica", rwa: 2 },
  { name: "StandX", rwa: 2 },
  { name: "SynFutures", rwa: 1 },
  { name: "CoinW", rwa: 2 },
  { name: "KCEX", rwa: 2 },
];

const SAMPLE_PAIRS = [
  { ex: "Binance", type: "Stock", pair: "TSLA-USDT", ticker: "TSLA", date: "2024-11-03", isNew: false },
  { ex: "Binance", type: "Stock", pair: "NVDA-USDT", ticker: "NVDA", date: "2024-11-03", isNew: false },
  { ex: "Binance", type: "Stock", pair: "COIN-USDT", ticker: "COIN", date: "2025-01-15", isNew: false },
  { ex: "Binance", type: "Commodities", pair: "XAU-USDT", ticker: "XAU", date: "2024-11-03", isNew: false },
  { ex: "OKX", type: "Stock", pair: "TSLA-USDT", ticker: "TSLA", date: "2024-12-01", isNew: false },
  { ex: "OKX", type: "Stock", pair: "NVDA-USDT", ticker: "NVDA", date: "2024-12-01", isNew: false },
  { ex: "OKX", type: "Stock", pair: "AAPL-USDT", ticker: "AAPL", date: "2025-02-10", isNew: false },
  { ex: "OKX", type: "Stock", pair: "MSFT-USDT", ticker: "MSFT", date: "2025-02-10", isNew: false },
  { ex: "OKX", type: "Stock", pair: "AMZN-USDT", ticker: "AMZN", date: "2025-02-10", isNew: false },
  { ex: "OKX", type: "ETF", pair: "SPY-USDT", ticker: "SPY", date: "2025-03-01", isNew: true },
  { ex: "OKX", type: "Commodities", pair: "XAU-USDT", ticker: "XAU", date: "2024-12-01", isNew: false },
  { ex: "OKX", type: "Forex", pair: "EUR-USDT", ticker: "EUR", date: "2025-03-14", isNew: true },
  { ex: "Gate", type: "Stock", pair: "TSLA-USDT", ticker: "TSLA", date: "2025-01-20", isNew: false },
  { ex: "Gate", type: "Stock", pair: "NVDA-USDT", ticker: "NVDA", date: "2025-01-20", isNew: false },
  { ex: "Gate", type: "Commodities", pair: "XAU-USDT", ticker: "XAU", date: "2025-01-20", isNew: false },
  { ex: "Bitget", type: "Stock", pair: "TSLA-USDT", ticker: "TSLA", date: "2025-01-05", isNew: false },
  { ex: "Bitget", type: "Stock", pair: "NVDA-USDT", ticker: "NVDA", date: "2025-01-05", isNew: false },
  { ex: "Bitget", type: "Stock", pair: "AAPL-USDT", ticker: "AAPL", date: "2025-02-20", isNew: false },
  { ex: "Bitget", type: "Stock", pair: "META-USDT", ticker: "META", date: "2025-03-14", isNew: true },
  { ex: "Bitget", type: "Commodities", pair: "XAU-USDT", ticker: "XAU", date: "2025-01-05", isNew: false },
  { ex: "Bitget", type: "Index", pair: "SPX500-USDT", ticker: "SPX500", date: "2025-03-14", isNew: true },
  { ex: "Hyperliquid", type: "Stock", pair: "TSLA-USDC", ticker: "TSLA", date: "2024-11-10", isNew: false },
  { ex: "Hyperliquid", type: "Stock", pair: "NVDA-USDC", ticker: "NVDA", date: "2024-11-10", isNew: false },
  { ex: "Hyperliquid", type: "Stock", pair: "AAPL-USDC", ticker: "AAPL", date: "2024-11-10", isNew: false },
  { ex: "Hyperliquid", type: "Stock", pair: "COIN-USDC", ticker: "COIN", date: "2024-11-10", isNew: false },
  { ex: "Hyperliquid", type: "Stock", pair: "PLTR-USDC", ticker: "PLTR", date: "2025-01-01", isNew: false },
  { ex: "Hyperliquid", type: "Stock", pair: "MSTR-USDC", ticker: "MSTR", date: "2025-01-01", isNew: false },
  { ex: "Hyperliquid", type: "Commodities", pair: "XAU-USDC", ticker: "XAU", date: "2024-11-10", isNew: false },
  { ex: "Hyperliquid", type: "Commodities", pair: "XAG-USDC", ticker: "XAG", date: "2025-02-01", isNew: false },
  { ex: "Hyperliquid", type: "Index", pair: "SPX500-USDC", ticker: "SPX500", date: "2025-02-01", isNew: false },
  { ex: "Hyperliquid", type: "Forex", pair: "EUR-USDC", ticker: "EUR", date: "2025-02-01", isNew: false },
  { ex: "Hyperliquid", type: "Forex", pair: "GBP-USDC", ticker: "GBP", date: "2025-02-01", isNew: false },
  { ex: "Gains Network", type: "Stock", pair: "TSLA-USD", ticker: "TSLA", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Stock", pair: "NVDA-USD", ticker: "NVDA", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Stock", pair: "AAPL-USD", ticker: "AAPL", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Stock", pair: "AMZN-USD", ticker: "AMZN", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Commodities", pair: "XAU-USD", ticker: "XAU", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Commodities", pair: "XAG-USD", ticker: "XAG", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Commodities", pair: "WTI-USD", ticker: "WTI", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Index", pair: "SPX500-USD", ticker: "SPX500", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Index", pair: "NAS100-USD", ticker: "NAS100", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Forex", pair: "EUR-USD", ticker: "EUR", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Forex", pair: "GBP-USD", ticker: "GBP", date: "2024-10-15", isNew: false },
  { ex: "Gains Network", type: "Forex", pair: "JPY-USD", ticker: "JPY", date: "2024-10-15", isNew: false },
  { ex: "Ostium", type: "Stock", pair: "TSLA-USD", ticker: "TSLA", date: "2025-01-10", isNew: false },
  { ex: "Ostium", type: "Stock", pair: "NVDA-USD", ticker: "NVDA", date: "2025-01-10", isNew: false },
  { ex: "Ostium", type: "Commodities", pair: "XAU-USD", ticker: "XAU", date: "2025-01-10", isNew: false },
  { ex: "Ostium", type: "Forex", pair: "EUR-USD", ticker: "EUR", date: "2025-01-10", isNew: false },
  { ex: "Ostium", type: "Index", pair: "SPX500-USD", ticker: "SPX500", date: "2025-01-10", isNew: false },
  { ex: "Lighter", type: "Stock", pair: "NVDA-USDC", ticker: "NVDA", date: "2025-02-15", isNew: false },
  { ex: "Lighter", type: "Stock", pair: "TSLA-USDC", ticker: "TSLA", date: "2025-02-15", isNew: false },
  { ex: "Lighter", type: "Commodities", pair: "XAU-USD", ticker: "XAU", date: "2025-02-15", isNew: false },
  { ex: "Lighter", type: "Forex", pair: "EUR-USD", ticker: "EUR", date: "2025-02-15", isNew: false },
  { ex: "BTCC", type: "Stock", pair: "TSLA-USDT", ticker: "TSLA", date: "2025-03-01", isNew: true },
  { ex: "BTCC", type: "Stock", pair: "NVDA-USDT", ticker: "NVDA", date: "2025-03-01", isNew: true },
  { ex: "BTCC", type: "Commodities", pair: "XAU-USDT", ticker: "XAU", date: "2025-03-01", isNew: true },
  { ex: "BTCC", type: "Index", pair: "SPX500-USDT", ticker: "SPX500", date: "2025-03-01", isNew: true },
  { ex: "MEXC", type: "Stock", pair: "TSLA-USDT", ticker: "TSLA", date: "2025-02-01", isNew: false },
  { ex: "MEXC", type: "Stock", pair: "NVDA-USDT", ticker: "NVDA", date: "2025-03-14", isNew: true },
  { ex: "KuCoin", type: "Stock", pair: "TSLA-USDT", ticker: "TSLA", date: "2025-01-20", isNew: false },
  { ex: "KuCoin", type: "Commodities", pair: "XAU-USDT", ticker: "XAU", date: "2025-01-20", isNew: false },
  { ex: "Vest", type: "Stock", pair: "TSLA-PERP", ticker: "TSLA", date: "2025-02-20", isNew: false },
  { ex: "Vest", type: "Commodities", pair: "XAU-PERP", ticker: "XAU", date: "2025-02-20", isNew: false },
  { ex: "edgeX", type: "Stock", pair: "TSLA-USDC", ticker: "TSLA", date: "2025-03-01", isNew: true },
  { ex: "edgeX", type: "Stock", pair: "NVDA-USDC", ticker: "NVDA", date: "2025-03-01", isNew: true },
  { ex: "edgeX", type: "Commodities", pair: "XAU-USD", ticker: "XAU", date: "2025-03-01", isNew: true },
  { ex: "Drift", type: "Stock", pair: "TSLA-PERP", ticker: "TSLA", date: "2025-03-14", isNew: true },
  { ex: "Drift", type: "Commodities", pair: "XAU-PERP", ticker: "XAU", date: "2025-03-14", isNew: true },
  { ex: "Unclassified_ex", type: "Unclassified", pair: "UNKNOWN1-USDT", ticker: "UNKNOWN1", date: "2025-03-14", isNew: true },
];

const TYPE_COLORS = {
  Stock: { bg: "#10b981", light: "#d1fae5", text: "#065f46" },
  Commodities: { bg: "#f59e0b", light: "#fef3c7", text: "#92400e" },
  Index: { bg: "#8b5cf6", light: "#ede9fe", text: "#5b21b6" },
  ETF: { bg: "#3b82f6", light: "#dbeafe", text: "#1e40af" },
  Forex: { bg: "#ec4899", light: "#fce7f3", text: "#9d174d" },
  Unclassified: { bg: "#6b7280", light: "#f3f4f6", text: "#374151" },
};

const FLOW_STEPS = [
  { id: 1, title: "RWA_DB 읽기", desc: "사용자가 수정한 분류(Stock/Commodities/Index/ETF/Forex) 반영. 첫 실행 시 자동 생성.", icon: "📂", duration: "~1s" },
  { id: 2, title: "기존 날짜 보존", desc: "Sheet16에서 기존 First Detected 날짜를 메모리에 저장. 덮어쓰기 방지.", icon: "📅", duration: "~0.5s" },
  { id: 3, title: "크립토 블랙리스트", desc: "CoinGecko 상위 1000개 크립토 수집 → 블랙리스트 구축. RWA 아닌 것 필터링.", icon: "🚫", duration: "~9s" },
  { id: 4, title: "Tier 1: Direct API", desc: "~26개 거래소 API 직접 호출. 전체 무기한 선물 페어 수집 후 크립토가 아닌 것 = RWA.", icon: "⚡", duration: "~15s" },
  { id: 5, title: "Tier 2: CoinGecko", desc: "Tier 1에 없는 거래소 ~5개를 CoinGecko 파생상품 API로 추가 수집.", icon: "🦎", duration: "~12s" },
  { id: 6, title: "Tier 3: 수동 목록", desc: "API 없는 소규모 거래소(Lighter, edgeX, BTCC 등) 수동 하드코딩.", icon: "✍️", duration: "~0s" },
  { id: 7, title: "중복 제거 + 정렬", desc: "거래소|티커 기준 dedup. 거래소 알파벳 → 유형 우선순위 → 티커 순.", icon: "🔄", duration: "~0.5s" },
  { id: 8, title: "신규 감지 + DB 갱신", desc: "First Detected 날짜 비교 → 신규 NEW 마킹. Unclassified는 RWA_DB에 자동 추가.", icon: "🆕", duration: "~1s" },
  { id: 9, title: "Sheet16 출력", desc: "헤더 + 데이터 + 색상 + 메타정보(카운트, 로그) 기록 완료.", icon: "📊", duration: "~2s" },
];

function Tab({ label, active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        border: "none",
        borderBottom: active ? "3px solid #6366f1" : "3px solid transparent",
        background: active ? "rgba(99,102,241,0.1)" : "transparent",
        color: active ? "#6366f1" : "#9ca3af",
        fontWeight: active ? 700 : 500,
        cursor: "pointer",
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        gap: 6,
        transition: "all 0.2s",
      }}
    >
      {label}
      {count !== undefined && (
        <span style={{
          background: active ? "#6366f1" : "#e5e7eb",
          color: active ? "#fff" : "#6b7280",
          borderRadius: 10, padding: "2px 8px", fontSize: 11, fontWeight: 600
        }}>{count}</span>
      )}
    </button>
  );
}

function StatCard({ label, value, sub, color }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 12, padding: "20px 24px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)", border: "1px solid #f3f4f6",
      flex: 1, minWidth: 150,
    }}>
      <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: color || "#111827" }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function PieChart({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  let cum = 0;
  const size = 180;
  const cx = size / 2, cy = size / 2, r = 70;

  const paths = data.map((d, i) => {
    const start = cum / total;
    cum += d.value;
    const end = cum / total;
    const sa = start * 2 * Math.PI - Math.PI / 2;
    const ea = end * 2 * Math.PI - Math.PI / 2;
    const large = end - start > 0.5 ? 1 : 0;
    const x1 = cx + r * Math.cos(sa), y1 = cy + r * Math.sin(sa);
    const x2 = cx + r * Math.cos(ea), y2 = cy + r * Math.sin(ea);
    return (
      <path key={i} d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`}
        fill={d.color} stroke="#fff" strokeWidth={2} />
    );
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <svg width={size} height={size}>{paths}</svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: d.color, flexShrink: 0 }} />
            <span style={{ color: "#374151" }}>{d.label}</span>
            <span style={{ color: "#9ca3af", fontWeight: 600 }}>{d.value}</span>
            <span style={{ color: "#d1d5db", fontSize: 10 }}>({((d.value / total) * 100).toFixed(0)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart({ data }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {data.slice(0, 15).map((d, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
          <div style={{ width: 90, textAlign: "right", color: "#6b7280", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.label}</div>
          <div style={{ flex: 1, height: 18, background: "#f3f4f6", borderRadius: 4, overflow: "hidden" }}>
            <div style={{
              width: `${(d.value / max) * 100}%`, height: "100%",
              background: `linear-gradient(90deg, #6366f1, #8b5cf6)`,
              borderRadius: 4, transition: "width 0.6s ease",
              display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 6,
              color: "#fff", fontSize: 10, fontWeight: 600
            }}>
              {d.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("dashboard");
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(-1);
  const [logs, setLogs] = useState([]);
  const [filterEx, setFilterEx] = useState("ALL");
  const [filterType, setFilterType] = useState("ALL");
  const [search, setSearch] = useState("");
  const timerRef = useRef(null);

  const pairs = SAMPLE_PAIRS;
  const totalPairs = pairs.length;
  const newPairs = pairs.filter(p => p.isNew).length;

  const typeCounts = {};
  pairs.forEach(p => { typeCounts[p.type] = (typeCounts[p.type] || 0) + 1; });
  const pieData = Object.entries(typeCounts).map(([k, v]) => ({
    label: k, value: v, color: TYPE_COLORS[k]?.bg || "#999"
  })).sort((a, b) => b.value - a.value);

  const exCounts = {};
  pairs.forEach(p => { exCounts[p.ex] = (exCounts[p.ex] || 0) + 1; });
  const barData = Object.entries(exCounts)
    .map(([k, v]) => ({ label: k, value: v }))
    .sort((a, b) => b.value - a.value);

  const exchanges = [...new Set(pairs.map(p => p.ex))].sort();
  const types = [...new Set(pairs.map(p => p.type))].sort();

  const filtered = pairs.filter(p => {
    if (filterEx !== "ALL" && p.ex !== filterEx) return false;
    if (filterType !== "ALL" && p.type !== filterType) return false;
    if (search && !p.ticker.includes(search.toUpperCase()) && !p.pair.toUpperCase().includes(search.toUpperCase())) return false;
    return true;
  });

  const runSimulation = useCallback(() => {
    setRunning(true);
    setStep(0);
    setLogs([]);
    let s = 0;
    const allExchanges = [...EXCHANGES_TIER1];

    const advance = () => {
      if (s < FLOW_STEPS.length) {
        setStep(s);
        const stepInfo = FLOW_STEPS[s];

        if (s === 3) {
          let exIdx = 0;
          const exTimer = setInterval(() => {
            if (exIdx < allExchanges.length) {
              const ex = allExchanges[exIdx];
              const icon = ex.status === "ok" ? "✅" : "❌";
              setLogs(prev => [...prev, `${icon} ${ex.name}: ${ex.status === "ok" ? ex.rwa + " RWA pairs" : "HTTP Error"}`]);
              exIdx++;
            } else {
              clearInterval(exTimer);
              s++;
              setTimeout(advance, 400);
            }
          }, 120);
          return;
        }

        if (s === 4) {
          EXCHANGES_TIER2_CG.forEach((ex, i) => {
            setTimeout(() => {
              setLogs(prev => [...prev, `✅ ${ex.name}: ${ex.rwa} RWA (CoinGecko)`]);
            }, i * 200);
          });
          setTimeout(() => { s++; advance(); }, EXCHANGES_TIER2_CG.length * 200 + 300);
          return;
        }

        if (s === 5) {
          setLogs(prev => [...prev, `📋 Manual: ${MANUAL_EXCHANGES.reduce((a, b) => a + b.rwa, 0)} pairs from ${MANUAL_EXCHANGES.length} exchanges`]);
        }
        if (s === 6) setLogs(prev => [...prev, `🔄 Dedup complete: ${totalPairs} unique pairs`]);
        if (s === 7) setLogs(prev => [...prev, `🆕 New pairs detected: ${newPairs}`]);
        if (s === 8) setLogs(prev => [...prev, `📊 Sheet16 written: ${totalPairs} rows, 5 columns`]);

        if (s <= 2) setLogs(prev => [...prev, `${stepInfo.icon} ${stepInfo.title} — ${stepInfo.desc.slice(0, 50)}...`]);

        s++;
        setTimeout(advance, s <= 3 ? 600 : 400);
      } else {
        setLogs(prev => [...prev, "", "═══════════════════════════════", `✅ 완료! Total: ${totalPairs} pairs | New: ${newPairs} | ~40s`]);
        setRunning(false);
      }
    };
    advance();
  }, [totalPairs, newPairs]);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
        padding: "24px 32px", color: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>
              🏛️ RWA Perp Pair Updater <span style={{ fontSize: 12, background: "rgba(255,255,255,0.15)", padding: "3px 8px", borderRadius: 6, marginLeft: 8 }}>v6 DEMO</span>
            </h1>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              30+ 거래소에서 RWA 무기한 선물 페어 자동 수집 · 분류 · 추적
            </p>
          </div>
          <button
            onClick={!running ? runSimulation : undefined}
            disabled={running}
            style={{
              padding: "10px 24px", borderRadius: 8, border: "none",
              background: running ? "rgba(255,255,255,0.2)" : "#10b981",
              color: "#fff", fontWeight: 700, fontSize: 14, cursor: running ? "default" : "pointer",
              display: "flex", alignItems: "center", gap: 8,
              opacity: running ? 0.7 : 1,
            }}
          >
            {running ? "⏳ 실행 중..." : "▶ 시뮬레이션 실행"}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #e5e7eb", background: "#fff", paddingLeft: 16, overflowX: "auto" }}>
        <Tab label="📊 대시보드" active={tab === "dashboard"} onClick={() => setTab("dashboard")} />
        <Tab label="📋 페어 목록" active={tab === "pairs"} onClick={() => setTab("pairs")} count={totalPairs} />
        <Tab label="⚙️ 실행 플로우" active={tab === "flow"} onClick={() => setTab("flow")} />
        <Tab label="📜 로그" active={tab === "logs"} onClick={() => setTab("logs")} count={logs.length || undefined} />
      </div>

      <div style={{ padding: "24px 32px", maxWidth: 1200 }}>
        {/* Dashboard */}
        {tab === "dashboard" && (
          <div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <StatCard label="총 RWA 페어" value={totalPairs} sub="across all exchanges" color="#4338ca" />
              <StatCard label="신규 감지 (오늘)" value={newPairs} sub="highlighted in yellow" color="#10b981" />
              <StatCard label="거래소 수" value={exchanges.length} sub="CEX + DEX" color="#f59e0b" />
              <StatCard label="유형 수" value={types.length} sub="Stock, Commodities, ..." color="#ec4899" />
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

        {/* Pairs Table */}
        {tab === "pairs" && (
          <div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <select value={filterEx} onChange={e => setFilterEx(e.target.value)}
                style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, background: "#fff" }}>
                <option value="ALL">모든 거래소</option>
                {exchanges.map(ex => <option key={ex} value={ex}>{ex}</option>)}
              </select>
              <select value={filterType} onChange={e => setFilterType(e.target.value)}
                style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, background: "#fff" }}>
                <option value="ALL">모든 유형</option>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <input placeholder="🔍 티커 검색..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, width: 180 }} />
              <span style={{ fontSize: 12, color: "#9ca3af" }}>{filtered.length}개 결과</span>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#1e1b4b", color: "#fff" }}>
                    <th style={{ padding: "10px 14px", textAlign: "left" }}>Exchange</th>
                    <th style={{ padding: "10px 14px", textAlign: "left" }}>Pair Type</th>
                    <th style={{ padding: "10px 14px", textAlign: "left" }}>Pair</th>
                    <th style={{ padding: "10px 14px", textAlign: "left" }}>Ticker</th>
                    <th style={{ padding: "10px 14px", textAlign: "left" }}>First Detected</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, i) => {
                    const tc = TYPE_COLORS[p.type] || TYPE_COLORS.Unclassified;
                    return (
                      <tr key={i} style={{ borderBottom: "1px solid #f3f4f6", background: p.isNew ? "#fffbeb" : (i % 2 === 0 ? "#fff" : "#fafafa") }}>
                        <td style={{ padding: "8px 14px", fontWeight: 500 }}>{p.ex}</td>
                        <td style={{ padding: "8px 14px" }}>
                          <span style={{
                            display: "inline-block", padding: "2px 10px", borderRadius: 12,
                            background: tc.light, color: tc.text, fontSize: 11, fontWeight: 600
                          }}>{p.type}</span>
                        </td>
                        <td style={{ padding: "8px 14px", fontFamily: "monospace", fontSize: 12 }}>{p.pair}</td>
                        <td style={{ padding: "8px 14px", fontWeight: 600 }}>{p.ticker}</td>
                        <td style={{ padding: "8px 14px", display: "flex", alignItems: "center", gap: 6 }}>
                          {p.date}
                          {p.isNew && <span style={{
                            background: "#fbbf24", color: "#92400e", padding: "1px 6px",
                            borderRadius: 4, fontSize: 10, fontWeight: 700
                          }}>NEW</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Flow */}
        {tab === "flow" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FLOW_STEPS.map((s, i) => {
              const active = step === i;
              const done = step > i;
              return (
                <div key={s.id} style={{ display: "flex", gap: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 40 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: done ? "#10b981" : active ? "#6366f1" : "#e5e7eb",
                      color: done || active ? "#fff" : "#9ca3af",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, fontWeight: 700, transition: "all 0.3s",
                      boxShadow: active ? "0 0 0 4px rgba(99,102,241,0.3)" : "none",
                    }}>
                      {done ? "✓" : s.id}
                    </div>
                    {i < FLOW_STEPS.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: done ? "#10b981" : "#e5e7eb", minHeight: 20, transition: "background 0.3s" }} />
                    )}
                  </div>
                  <div style={{
                    flex: 1, background: "#fff", borderRadius: 12, padding: "16px 20px", marginBottom: 12,
                    border: active ? "2px solid #6366f1" : "1px solid #f3f4f6",
                    boxShadow: active ? "0 4px 12px rgba(99,102,241,0.15)" : "0 1px 3px rgba(0,0,0,0.04)",
                    transition: "all 0.3s",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ margin: 0, fontSize: 14, color: "#111827" }}>{s.icon} {s.title}</h3>
                      <span style={{ fontSize: 11, color: "#9ca3af", background: "#f3f4f6", padding: "2px 8px", borderRadius: 4 }}>{s.duration}</span>
                    </div>
                    <p style={{ margin: "6px 0 0", fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Logs */}
        {tab === "logs" && (
          <div style={{
            background: "#0f172a", borderRadius: 12, padding: 20, color: "#e2e8f0",
            fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: 12, lineHeight: 1.8,
            minHeight: 400, maxHeight: 600, overflowY: "auto",
          }}>
            <div style={{ color: "#94a3b8", marginBottom: 8 }}>
              {logs.length === 0 ? "▶ 시뮬레이션을 실행하면 로그가 여기에 표시됩니다." : `[${new Date().toLocaleTimeString()}] RWA Perp Pair Updater v6 시작`}
            </div>
            {logs.map((l, i) => (
              <div key={i} style={{
                color: l.startsWith("✅") ? "#34d399" : l.startsWith("❌") ? "#f87171" : l.startsWith("⚠️") ? "#fbbf24" : l.startsWith("🆕") ? "#a78bfa" : "#e2e8f0",
                borderLeft: l === "" ? "none" : undefined,
              }}>{l || ""}</div>
            ))}
            {running && <div style={{ color: "#6366f1" }}>⏳ processing...</div>}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "16px 32px", borderTop: "1px solid #e5e7eb", background: "#fff", display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9ca3af" }}>
        <span>RWA Perp Pair Updater v6 — Demo Mode (시뮬레이션 데이터)</span>
        <span>Last Updated: 2025-03-14 09:00 KST</span>
      </div>
    </div>
  );
}