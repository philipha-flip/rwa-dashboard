const CRYPTO_LIST = ["BTC","ETH","SOL","XRP","ADA","DOT","AVAX","LINK","UNI","AAVE","MATIC","ARB","OP","SUI","APT","SEI","TIA","JUP","WIF","PEPE","BONK","HYPE","PENDLE","ENA","EIGEN","DOGE","SHIB","FLOKI","MEME","WLD","FET","RENDER","RNDR","TAO","NEAR","FIL","ICP","INJ","TRX","TON","NOT","DOGS","HMSTR","CATI","ATOM","OSMO","LTC","BCH","ETC","XLM","ALGO","HBAR","VET","THETA","FTM","SAND","MANA","AXS","GALA","IMX","BLUR","APE","LDO","RPL","SSV","ANKR","GRT","OCEAN","AGIX","JASMY","CHZ","ENJ","DYDX","CRV","MKR","SNX","COMP","YFI","SUSHI","1INCH","BAL","ZRX","ENS","RUNE","KAVA","CAKE","JOE","GMX","GNS","RDNT","MAGIC","PERP","STX","ORDI","SATS","1000SATS","KAS","BOME","MEW","POPCAT","BRETT","TURBO","MYRO","ONDO","PYTH","JTO","W","STRK","ZK","BLAST","MANTA","ALT","PIXEL","PORTAL","AEVO","ETHFI","REZ","BB","IO","ZRO","LISTA","NEIRO","CELO","CKB","SC","ZEN","ZEC","DASH","XMR","DCR","KDA","AR","STORJ","MASK","RSR","DENT","HOT","ONE","ICX","IOTA","XTZ","FLOW","EGLD","ROSE","CRO","BNB","LEO","OKB","FTT","HT","GT","MX","KCS","NEXO","BSV","BTG","RVN","FLUX","ERG","CFX","ACH","API3","BAND","COTI","CTSI","DODO","HIGH","HOOK","ID","LEVER","LINA","LIT","LOOM","MDT","MTL","NKN","NTRN","OMG","ONT","PHB","QNT","QTUM","RAD","RLC","SKL","SLP","SNT","SPELL","STG","STMX","SXP","SYN","T","TFUEL","TLM","TRB","TWT","UMA","UNFI","WIN","WOO","XEC","XVS","YGG","ZIL","LQTY","MAV","MNT","CYBER","ACE","XAI","MAVIA","DYM","SUPER","RONIN","RON","AXL","TNSR","SAGA","OMNI","PRIME","PEOPLE","RARE","SUN","UTK","COMBO","EDU","ARKM","BIGTIME","SLERF","WEN","JITO","KMNO","CLOUD","GRASS","MOODENG","GOAT","PNUT","ACT","VIRTUAL","AI16Z","ZEREBRO","FARTCOIN","SWARMS","COOKIE","DEEP","ANIME","LAYER","TST","KAITO","IP","BERA","MOVE","FORM","S","BABY","B3","FUN","ORCA","DRIFT","PRCL","MOBILE","RAY","TRUMP","MELANIA","LIBRA","VINE","USDT","USDC","DAI","USDE","FDUSD","TUSD","BUSD","USDP","FRAX","LUSD","GUSD","WBTC","WETH","STETH","WSTETH","CBETH","RETH","WEETH","RSETH","EZETH","METH","MSOL","PURR","FRIEND","TOSHI","MODE","ZETA","PUMP","GIGA","PUPS","DOG","PONKE","MOTHER","BILLY","RATS","MUBI","SCRT","GRAIL","VELA","KWENTA","CELESTIA"];
const STOCKS_LIST = ["TSLA","NVDA","AAPL","MSFT","GOOG","GOOGL","AMZN","META","COIN","MSTR","PLTR","HOOD","CRCL","INTC","AMD","ORCL","MU","UNH","BABA","ASML","ACN","MCD","NFLX","IBM","RDDT","FUTU","LLY","CSCO","MRVL","TSM","MA","SMCI","ARM","V","JPM","GS","BAC","DIS","PYPL","SQ","SHOP","UBER","ABNB","SNOW","CRWD","NET","DDOG","ZS","WMT","COST","TGT","PFE","MRNA","JNJ","BA","LMT","RTX","XOM","CVX","RIOT","MARA","CLSK","HUT","BTBT","GME","AMC","NIO","RIVN","LCID","SOFI","RBLX","SNAP","ROKU","PINS","SPOT","SBET","GLXY","SKHX","DELL","AVGO","CRM","NOW","PANW","ADBE","ANET","QCOM","TXN","KLAC","LRCX","SNPS","CDNS","MELI","SE","PDD","JD","GRAB","CPNG","KO","PEP","NKE","SBUX","CMG","DASH","DKNG","WYNN","MGM","LVS","CELH","MNST","RACE","TM","SONY","BIDU","BILI","TME","XPEV","LI","IONQ","RGTI","QUBT","OKLO","VST","CEG","SMR","NNE","LEU","CCJ","RKLB","LUNR","ACHR","JOBY","CRSP","NTLA","BEAM","EDIT"];
const COMMODITIES_LIST = ["XAU","GOLD","GLD","XAG","SILVER","SLV","XPT","PLATINUM","XPD","PALLADIUM","WTI","CRUDE","CL","BRENT","BCO","OIL","NATGAS","NG","GAS","COPPER","HG","CU","WHEAT","ZW","CORN","ZC","SOYBEAN","SOY","SUGAR","SB","COFFEE","KC","COCOA","CC","COTTON","CT","URANIUM","LITHIUM","NICKEL","ALUMINUM","ZINC"];
const INDICES_LIST = ["SPX","SPX500","SP500","US500","NAS","NAS100","NDX","NASDAQ","US30","DJI","DOW","DJIA","UK100","FTSE","JP225","NIKKEI","NI225","DE40","DAX","GER40","AU200","ASX200","HK50","HSI","FR40","CAC","EU50","STOXX","SX5E","US2000","RUSSELL","RTY","VIX","CN50","CHINA50","A50","NIFTY","SENSEX","KOSPI","XYZ100"];
const ETFS_LIST = ["SPY","QQQ","IWM","DIA","EEM","EFA","TLT","HYG","LQD","GDX","ARKK","ARKG","ARKW","ARKF","IBIT","GBTC","ETHA","FBTC","XLF","XLE","XLK","XLV","XLI","XLY","XLP","XLU","XLB","XLRE","VOO","VTI","SOXL","SOXS","TQQQ","SQQQ","UPRO","SPXU","MSOS","YOLO","BOTZ","HACK","SCHD","JEPI","JEPQ","BITO","BITQ"];
const FX_LIST = ["EURUSD","GBPUSD","USDJPY","AUDUSD","NZDUSD","USDCAD","USDCHF","EURGBP","EURJPY","GBPJPY","AUDJPY","CADJPY","CHFJPY","NZDJPY","EURAUD","EURNZD","EURCAD","EURCHF","GBPAUD","GBPNZD","GBPCAD","AUDNZD","AUDCAD","USDMXN","USDSGD","USDCNH","USDZAR","USDTRY","EUR","GBP","JPY","AUD","NZD","CAD","CHF","MXN","ZAR","TRY","DXY","SGD","HKD","CNY","CNH","SEK","NOK","DKK","PLN","BRL","INR"];

const CRYPTO = {}, STOCKS = {}, COMMODITIES = {}, INDICES = {}, ETFS = {}, FX = {};
CRYPTO_LIST.forEach(t => CRYPTO[t] = true);
STOCKS_LIST.forEach(t => STOCKS[t] = true);
COMMODITIES_LIST.forEach(t => COMMODITIES[t] = true);
INDICES_LIST.forEach(t => INDICES[t] = true);
ETFS_LIST.forEach(t => ETFS[t] = true);
FX_LIST.forEach(t => FX[t] = true);

function clean(sym) {
  return (sym || "").toUpperCase().replace(/[-_\/]/g, "")
    .replace(/USDT$/, "").replace(/BUSD$/, "").replace(/USD$/, "").replace(/USDC$/, "")
    .replace(/^PF_/, "").replace(/^PI_/, "").replace(/^FI_/, "")
    .replace(/^XBT/, "BTC").replace(/USDTM$/, "").replace(/USDM$/, "")
    .replace(/PERP$/, "").trim();
}

function classify(raw) {
  const t = (raw || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!t || CRYPTO[t]) return null;
  if (FX[t]) return "Forex";
  if (ETFS[t]) return "ETF";
  if (INDICES[t]) return "Index";
  if (COMMODITIES[t]) return "Commodities";
  if (STOCKS[t]) return "Stock";
  return "Unclassified";
}

async function f(url, opts = {}) {
  const c = new AbortController();
  const tm = setTimeout(() => c.abort(), 3000);
  try {
    const r = await fetch(url, { ...opts, signal: c.signal });
    clearTimeout(tm);
    if (!r.ok) throw new Error("HTTP " + r.status);
    return await r.json();
  } catch (e) { clearTimeout(tm); throw e; }
}

async function ex(name, url, parser, sfx = "USDT", opts = {}) {
  try {
    const syms = parser(await f(url, opts));
    const res = [];
    for (const s of syms) {
      const t = clean(s), cls = classify(t);
      if (cls) res.push({ ex: name, type: cls, pair: t + "-" + sfx, ticker: t });
    }
    return { name, ok: true, c: res.length, pairs: res };
  } catch (e) {
    return { name, ok: false, err: e.message, pairs: [] };
  }
}

async function hlMain() {
  try {
    const r = await f("https://api.hyperliquid.xyz/info", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "meta" })
    });
    const p = [];
    for (const a of (r.universe || [])) {
      const cls = classify(a.name);
      if (cls) p.push({ ex: "Hyperliquid", type: cls, pair: a.name + "-USDC", ticker: a.name });
    }
    // perpDexs (서브 DEX)
    try {
      const dexes = await f("https://api.hyperliquid.xyz/info", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "perpDexs" })
      });
      for (const d of (dexes || [])) {
        if (!d || !d.name) continue;
        try {
          const m = await f("https://api.hyperliquid.xyz/info", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type: "meta", dex: d.name })
          });
          for (const a of (m.universe || [])) {
            const cls = classify(a.name);
            if (cls) p.push({ ex: "Hyperliquid - " + d.name, type: cls, pair: a.name + "-USDC", ticker: a.name });
          }
        } catch (e) {}
      }
    } catch (e) {}
    return { name: "Hyperliquid", ok: true, c: p.length, pairs: p };
  } catch (e) {
    return { name: "Hyperliquid", ok: false, err: e.message, pairs: [] };
  }
}

function manual() {
  const m = [
    ["Lighter","Stock","NVDA-USDC","NVDA"],["Lighter","Stock","TSLA-USDC","TSLA"],["Lighter","Stock","AAPL-USDC","AAPL"],["Lighter","Stock","MSFT-USDC","MSFT"],["Lighter","Stock","AMZN-USDC","AMZN"],["Lighter","Stock","META-USDC","META"],["Lighter","Stock","GOOG-USDC","GOOG"],["Lighter","Stock","COIN-USDC","COIN"],["Lighter","Stock","PLTR-USDC","PLTR"],["Lighter","Stock","HOOD-USDC","HOOD"],["Lighter","Stock","MSTR-USDC","MSTR"],["Lighter","Stock","CRCL-USDC","CRCL"],["Lighter","Stock","INTC-USDC","INTC"],["Lighter","Stock","SKHX-USDC","SKHX"],["Lighter","Forex","EUR-USD","EUR"],["Lighter","Forex","GBP-USD","GBP"],["Lighter","Commodities","XAU-USD","XAU"],["Lighter","Commodities","XAG-USD","XAG"],["Lighter","Index","SPX500-USD","SPX500"],["Lighter","ETF","SPY-USD","SPY"],
    ["edgeX","Stock","NVDA-USDC","NVDA"],["edgeX","Stock","TSLA-USDC","TSLA"],["edgeX","Stock","AAPL-USDC","AAPL"],["edgeX","Stock","COIN-USDC","COIN"],["edgeX","Stock","PLTR-USDC","PLTR"],["edgeX","Stock","HOOD-USDC","HOOD"],["edgeX","Stock","MSTR-USDC","MSTR"],["edgeX","Commodities","XAU-USD","XAU"],
    ["Aster","Stock","NVDA-USDC","NVDA"],["Aster","Stock","TSLA-USDC","TSLA"],["Aster","Stock","COIN-USDC","COIN"],["Aster","Stock","PLTR-USDC","PLTR"],["Aster","Commodities","XAU-USD","XAU"],["Aster","ETF","SPY-USD","SPY"],
    ["Avantis","Stock","NVDA-USD","NVDA"],["Avantis","Stock","TSLA-USD","TSLA"],["Avantis","Commodities","XAU-USD","XAU"],["Avantis","Forex","EUR-USD","EUR"],
    ["Pacifica","Stock","TSLA-USD","TSLA"],["Pacifica","Commodities","XAU-USD","XAU"],
    ["StandX","Commodities","XAU-USD","XAU"],["StandX","Commodities","XAG-USD","XAG"],
    ["ADEN","Stock","TSLA-USD","TSLA"],["ADEN","Commodities","XAU-USD","XAU"],
    ["PriveX","Stock","TSLA-USD","TSLA"],["PriveX","Commodities","XAU-USD","XAU"],
    ["Gmtrade","Stock","TSLA-USD","TSLA"],["Gmtrade","Commodities","XAU-USD","XAU"],
    ["SynFutures","Commodities","XAU-USD","XAU"],
    ["BTCC","Stock","TSLA-USDT","TSLA"],["BTCC","Stock","NVDA-USDT","NVDA"],["BTCC","Stock","AAPL-USDT","AAPL"],["BTCC","Stock","COIN-USDT","COIN"],["BTCC","Stock","PLTR-USDT","PLTR"],["BTCC","Stock","HOOD-USDT","HOOD"],["BTCC","Stock","MSTR-USDT","MSTR"],["BTCC","Stock","INTC-USDT","INTC"],["BTCC","Stock","AMZN-USDT","AMZN"],["BTCC","Stock","GOOG-USDT","GOOG"],["BTCC","Stock","META-USDT","META"],["BTCC","Stock","MSFT-USDT","MSFT"],["BTCC","Stock","AMD-USDT","AMD"],["BTCC","Stock","ORCL-USDT","ORCL"],["BTCC","Commodities","XAU-USDT","XAU"],["BTCC","Commodities","XAG-USDT","XAG"],["BTCC","Commodities","WTI-USDT","WTI"],["BTCC","Index","SPX500-USDT","SPX500"],["BTCC","Index","NAS100-USDT","NAS100"],["BTCC","Index","US30-USDT","US30"],
    ["CoinW","Commodities","XAU-USDT","XAU"],["CoinW","Commodities","XAG-USDT","XAG"],
    ["KCEX","Commodities","XAU-USDT","XAU"],["KCEX","Commodities","XAG-USDT","XAG"],
    ["Gains Network","Stock","TSLA-USD","TSLA"],["Gains Network","Stock","NVDA-USD","NVDA"],["Gains Network","Stock","AAPL-USD","AAPL"],["Gains Network","Stock","AMZN-USD","AMZN"],["Gains Network","Stock","META-USD","META"],["Gains Network","Stock","MSFT-USD","MSFT"],["Gains Network","Stock","GOOG-USD","GOOG"],["Gains Network","Stock","COIN-USD","COIN"],["Gains Network","Stock","PLTR-USD","PLTR"],["Gains Network","Stock","HOOD-USD","HOOD"],["Gains Network","Stock","MSTR-USD","MSTR"],["Gains Network","Commodities","XAU-USD","XAU"],["Gains Network","Commodities","XAG-USD","XAG"],["Gains Network","Commodities","WTI-USD","WTI"],["Gains Network","Index","SPX500-USD","SPX500"],["Gains Network","Index","NAS100-USD","NAS100"],["Gains Network","Forex","EUR-USD","EUR"],["Gains Network","Forex","GBP-USD","GBP"],["Gains Network","Forex","JPY-USD","JPY"],
    ["Ostium","Stock","TSLA-USD","TSLA"],["Ostium","Stock","NVDA-USD","NVDA"],["Ostium","Stock","AAPL-USD","AAPL"],["Ostium","Stock","AMZN-USD","AMZN"],["Ostium","Stock","META-USD","META"],["Ostium","Stock","MSFT-USD","MSFT"],["Ostium","Stock","GOOG-USD","GOOG"],["Ostium","Stock","COIN-USD","COIN"],["Ostium","Stock","MSTR-USD","MSTR"],["Ostium","Stock","PLTR-USD","PLTR"],["Ostium","Stock","HOOD-USD","HOOD"],["Ostium","Stock","CRCL-USD","CRCL"],["Ostium","Stock","INTC-USD","INTC"],["Ostium","Stock","AMD-USD","AMD"],["Ostium","Stock","ORCL-USD","ORCL"],["Ostium","Commodities","XAU-USD","XAU"],["Ostium","Commodities","XAG-USD","XAG"],["Ostium","Commodities","WTI-USD","WTI"],["Ostium","Commodities","NATGAS-USD","NATGAS"],["Ostium","Commodities","COPPER-USD","COPPER"],["Ostium","Commodities","WHEAT-USD","WHEAT"],["Ostium","Index","SPX500-USD","SPX500"],["Ostium","Index","NAS100-USD","NAS100"],["Ostium","Index","US30-USD","US30"],["Ostium","Index","UK100-USD","UK100"],["Ostium","Index","JP225-USD","JP225"],["Ostium","Index","DE40-USD","DE40"],["Ostium","Index","AU200-USD","AU200"],["Ostium","Index","HK50-USD","HK50"],["Ostium","Index","FR40-USD","FR40"],["Ostium","Forex","EUR-USD","EUR"],["Ostium","Forex","GBP-USD","GBP"],["Ostium","Forex","JPY-USD","JPY"],["Ostium","Forex","AUD-USD","AUD"],["Ostium","Forex","CAD-USD","CAD"],["Ostium","Forex","CHF-USD","CHF"],["Ostium","Forex","NZD-USD","NZD"],["Ostium","Forex","MXN-USD","MXN"],["Ostium","Forex","SGD-USD","SGD"]
  ];
  return m.map(r => ({ ex: r[0], type: r[1], pair: r[2], ticker: r[3] }));
}

// ═══ Phase 1: 빠른 거래소만 ═══
const PHASE1 = [
  ["Binance", "https://fapi.binance.com/fapi/v1/exchangeInfo", d => (d.symbols||[]).filter(s=>s.status==="TRADING").map(s=>s.symbol)],
  ["OKX", "https://www.okx.com/api/v5/public/instruments?instType=SWAP", d => (d.data||[]).map(s=>s.instId)],
  ["Bitget", "https://api.bitget.com/api/v2/mix/market/tickers?productType=USDT-FUTURES", d => (d.data||[]).map(s=>s.symbol)],
  ["Gate", "https://api.gateio.ws/api/v4/futures/usdt/contracts", d => (d||[]).map(s=>s.name)],
  ["KuCoin", "https://api-futures.kucoin.com/api/v1/contracts/active", d => (d.data||[]).map(s=>s.symbol)],
  ["MEXC", "https://contract.mexc.com/api/v1/contract/detail", d => (d.data||[]).map(s=>s.symbol)],
  ["Blofin", "https://openapi.blofin.com/api/v1/market/instruments?instType=SWAP", d => (d.data||[]).map(s=>s.instId)],
  ["BingX", "https://open-api.bingx.com/openApi/swap/v2/quote/contracts", d => (d.data||[]).map(s=>s.symbol)],
  ["dYdX", "https://indexer.dydx.trade/v4/perpetualMarkets", d => Object.keys(d.markets||{}), "USD"],
  ["CoinEx", "https://api.coinex.com/v2/futures/market", d => (d.data||[]).map(s=>s.market||"")],
];

// ═══ Phase 2: 느린 거래소 ═══
const PHASE2 = [
  ["HTX", "https://api.hbdm.com/linear-swap-api/v1/swap_contract_info", d => (d.data||[]).map(s=>s.contract_code)],
  ["Kraken", "https://futures.kraken.com/derivatives/api/v3/instruments", d => (d.instruments||[]).filter(s=>s.tradeable).map(s=>s.symbol)],
  ["Bitmart", "https://api-cloud.bitmart.com/contract/public/details", d => (d.data&&d.data.symbols||[]).map(s=>s.symbol||"")],
  ["Phemex", "https://api.phemex.com/public/products", d => { const l=d.data&&d.data.perpProductsV2||d.data&&d.data.products||[]; return l.map(s=>s.symbol||""); }],
  ["Bitmex", "https://www.bitmex.com/api/v1/instrument/active", d => (d||[]).filter(s=>s.state==="Open").map(s=>s.symbol)],
  ["Toobit", "https://api.toobit.com/api/v1/contract/public/param", d => (d.result||d.data||[]).map(s=>s.symbol||"")],
  ["XT.COM", "https://fapi.xt.com/future/market/v1/public/symbol/list", d => (d.result||[]).map(s=>(s.symbol||"").toUpperCase())],
  ["Pionex", "https://api.pionex.com/api/v1/common/symbols", d => (d.data&&d.data.symbols||[]).map(s=>s.baseCurrency||"")],
  ["WEEX", "https://api.weex.com/api/v2/mix/market/tickers?productType=USDT-FUTURES", d => (d.data||[]).map(s=>s.symbol||"")],
  ["Backpack", "https://api.backpack.exchange/api/v1/markets", d => (d||[]).map(s=>(s.symbol||"").replace("_USDC_PERP","").replace("_USDC","")), "USDC"],
  ["Vest Markets", "https://serverprod.vest.exchange/v2/exchangeInfo", d => (d.symbols||[]).map(s=>(s.symbol||"").replace("-PERP","")), "USDC"],
  ["ApeX Protocol", "https://pro.apex.exchange/api/v2/symbols", d => (d.data||[]).map(s=>(s.symbol||"").replace("-USDC","").replace("-USDT","")), "USDC"],
  ["Extended", "https://api.starknet.extended.exchange/api/v1/info/markets", d => { const l=Array.isArray(d)?d:(d.data||d.markets||[]); return l.map(m=>(m.market||m.symbol||m.name||"").replace("-USD","")); }, "USD"],
  ["Gains Network", "https://backend-gains.gains.trade/api/v1/pairs", d => (d||[]).map(p => p.from||p.name||""), "USD"],
];

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=600");

  const phase = req.query.phase || "1";
  const t0 = Date.now();
  const log = [];
  let allPairs = [];

  const list = phase === "2" ? PHASE2 : PHASE1;

  // 병렬 호출
  const jobs = list.map(([n, u, p, s]) => ex(n, u, p, s || "USDT"));
  if (phase === "1") jobs.push(hlMain());

  const results = await Promise.allSettled(jobs);
  for (const r of results) {
    if (r.status === "fulfilled") {
      const v = r.value;
      log.push(v.ok ? `✅ ${v.name}: ${v.c} RWA` : `❌ ${v.name}: ${v.err || "fail"}`);
      allPairs.push(...v.pairs);
    }
  }

  // Phase 1에만 수동 추가
  if (phase === "1") {
    const man = manual();
    const ek = new Set(allPairs.map(p => p.ex + "|" + p.ticker));
    let mc = 0;
    for (const m of man) {
      if (!ek.has(m.ex + "|" + m.ticker)) { allPairs.push(m); ek.add(m.ex + "|" + m.ticker); mc++; }
    }
    log.push(`📋 수동: ${mc}`);
  }

  // 중복 제거 + 정렬
  const seen = new Set(), deduped = [];
  for (const p of allPairs) {
    const k = p.ex + "|" + p.ticker;
    if (!seen.has(k)) { seen.add(k); deduped.push(p); }
  }
  const ord = { Stock: 0, Commodities: 1, Index: 2, ETF: 3, Forex: 4, Unclassified: 5 };
  deduped.sort((a, b) => a.ex !== b.ex ? a.ex.localeCompare(b.ex) : (ord[a.type]??9) - (ord[b.type]??9) || a.ticker.localeCompare(b.ticker));

  const today = new Date().toISOString().split("T")[0];
  const pairs = deduped.map(p => ({ ...p, date: today, isNew: false }));

  const exC = {}, tyC = {};
  pairs.forEach(p => { exC[p.ex] = (exC[p.ex]||0)+1; tyC[p.type] = (tyC[p.type]||0)+1; });

  res.status(200).json({
    pairs,
    phase: Number(phase),
    meta: {
      total: pairs.length,
      updated: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
      info: `Phase ${phase}: ${pairs.length} pairs | ${((Date.now()-t0)/1000).toFixed(1)}s`,
      exchangeCounts: exC,
      typeCounts: tyC,
    },
    log,
  });
}