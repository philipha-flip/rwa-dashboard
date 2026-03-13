export const config = { maxDuration: 10 };

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

function cleanTicker(sym) {
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

// ═══════════════════════════════════════════
// Claude AI 분류
// ═══════════════════════════════════════════
async function classifyWithAI(tickers, log) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || tickers.length === 0) {
    if (!apiKey) log.push("⚠️ AI분류: ANTHROPIC_API_KEY 미설정");
    return {};
  }

  // 최대 200개만 (비용 관리)
  const batch = tickers.slice(0, 200);
  log.push(`🤖 AI분류: ${batch.length}개 티커 분류 요청 중...`);

  const prompt = `You are a financial instrument classifier. Classify each ticker into EXACTLY one category.

Categories:
- Stock: Individual company equity (single company ticker like AAPL, TSLA)
- Commodities: Physical assets (gold, silver, oil, gas, metals, agricultural)
- Index: Market indices combining multiple stocks (SPX, NASDAQ, NIKKEI)
- ETF: Exchange-traded funds tracking indices/themes (SPY, QQQ, ARKK)
- Forex: Currency pairs and macro economic variables (EUR/USD, GBP)
- Crypto: Cryptocurrency tokens (if you think it's crypto)
- Unknown: Cannot determine with confidence

Tickers to classify:
${batch.join(", ")}

Respond ONLY with a JSON object mapping each ticker to its category. No explanation, no markdown, no backticks. Example:
{"AAPL":"Stock","XAU":"Commodities","SPX":"Index"}`;

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!r.ok) {
      log.push(`❌ AI분류: HTTP ${r.status}`);
      return {};
    }

    const data = await r.json();
    const text = (data.content || []).map(c => c.text || "").join("");
    const cleaned = text.replace(/```json|```/g, "").trim();
    const result = JSON.parse(cleaned);

    // Crypto나 Unknown은 제외, 나머지만 반환
    const valid = {};
    let classified = 0;
    for (const [ticker, cat] of Object.entries(result)) {
      if (["Stock", "Commodities", "Index", "ETF", "Forex"].includes(cat)) {
        valid[ticker.toUpperCase()] = cat;
        classified++;
      }
    }
    log.push(`✅ AI분류: ${classified}개 분류됨, ${batch.length - classified}개 제외(Crypto/Unknown)`);
    return valid;
  } catch (e) {
    log.push(`❌ AI분류: ${e.message}`);
    return {};
  }
}

// ═══════════════════════════════════════════
// 거래소 API 호출
// ═══════════════════════════════════════════
async function safeFetch(url, opts = {}) {
  const ctrl = new AbortController();
  const timeout = setTimeout(() => ctrl.abort(), 4000);
  try {
    const r = await fetch(url, { ...opts, signal: ctrl.signal });
    clearTimeout(timeout);
    if (!r.ok) throw new Error("HTTP " + r.status);
    return await r.json();
  } catch (e) { clearTimeout(timeout); throw e; }
}

async function fetchExchange(name, url, parser, suffix = "USDT", opts = {}) {
  try {
    const data = await safeFetch(url, opts);
    const syms = parser(data);
    const results = [];
    for (const s of syms) {
      const t = cleanTicker(s);
      const cls = classify(t);
      if (cls) results.push({ ex: name, type: cls, pair: t + "-" + suffix, ticker: t });
    }
    return { name, ok: true, count: results.length, pairs: results };
  } catch (e) {
    return { name, ok: false, error: e.message, pairs: [] };
  }
}

async function fetchHL() {
  try {
    const r = await safeFetch("https://api.hyperliquid.xyz/info", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "meta" })
    });
    const pairs = [];
    for (const a of (r.universe || [])) {
      const cls = classify(a.name);
      if (cls) pairs.push({ ex: "Hyperliquid", type: cls, pair: a.name + "-USDC", ticker: a.name });
    }
    try {
      const dexes = await safeFetch("https://api.hyperliquid.xyz/info", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "perpDexs" })
      });
      for (const d of (dexes || [])) {
        if (!d || !d.name) continue;
        try {
          const m = await safeFetch("https://api.hyperliquid.xyz/info", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type: "meta", dex: d.name })
          });
          for (const a of (m.universe || [])) {
            const cls = classify(a.name);
            if (cls) pairs.push({ ex: "Hyperliquid - " + d.name, type: cls, pair: a.name + "-USDC", ticker: a.name });
          }
        } catch (e) {}
      }
    } catch (e) {}
    return { name: "Hyperliquid", ok: true, count: pairs.length, pairs };
  } catch (e) {
    return { name: "Hyperliquid", ok: false, error: e.message, pairs: [] };
  }
}

function getManualPairs() {
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
    ["KCEX","Commodities","XAU-USDT","XAU"],["KCEX","Commodities","XAG-USDT","XAG"]
  ];
  return m.map(r => ({ ex: r[0], type: r[1], pair: r[2], ticker: r[3] }));
}

// ═══════════════════════════════════════════
// 메인 핸들러
// ═══════════════════════════════════════════
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=600");

  const t0 = Date.now();
  const log = [];

  // Tier 1: 병렬 호출
  const jobs = [
    fetchExchange("Binance", "https://fapi.binance.com/fapi/v1/exchangeInfo", d => (d.symbols||[]).filter(s=>s.status==="TRADING").map(s=>s.symbol)),
    fetchExchange("OKX", "https://www.okx.com/api/v5/public/instruments?instType=SWAP", d => (d.data||[]).map(s=>s.instId)),
    fetchExchange("Gate", "https://api.gateio.ws/api/v4/futures/usdt/contracts", d => (d||[]).map(s=>s.name)),
    fetchExchange("Bitget", "https://api.bitget.com/api/v2/mix/market/tickers?productType=USDT-FUTURES", d => (d.data||[]).map(s=>s.symbol)),
    fetchExchange("MEXC", "https://contract.mexc.com/api/v1/contract/detail", d => (d.data||[]).map(s=>s.symbol)),
    fetchExchange("KuCoin", "https://api-futures.kucoin.com/api/v1/contracts/active", d => (d.data||[]).map(s=>s.symbol)),
    fetchExchange("HTX", "https://api.hbdm.com/linear-swap-api/v1/swap_contract_info", d => (d.data||[]).map(s=>s.contract_code)),
    fetchExchange("BingX", "https://open-api.bingx.com/openApi/swap/v2/quote/contracts", d => (d.data||[]).map(s=>s.symbol)),
    fetchExchange("Blofin", "https://openapi.blofin.com/api/v1/market/instruments?instType=SWAP", d => (d.data||[]).map(s=>s.instId)),
    fetchExchange("Bitmex", "https://www.bitmex.com/api/v1/instrument/active", d => (d||[]).filter(s=>s.state==="Open").map(s=>s.symbol)),
    fetchExchange("Kraken", "https://futures.kraken.com/derivatives/api/v3/instruments", d => (d.instruments||[]).filter(s=>s.tradeable).map(s=>s.symbol)),
    fetchExchange("dYdX", "https://indexer.dydx.trade/v4/perpetualMarkets", d => Object.keys(d.markets||{}), "USD"),
    fetchExchange("Bitmart", "https://api-cloud.bitmart.com/contract/public/details", d => (d.data&&d.data.symbols||[]).map(s=>s.symbol||"")),
    fetchExchange("Phemex", "https://api.phemex.com/public/products", d => { const l=d.data&&d.data.perpProductsV2||d.data&&d.data.products||[]; return l.map(s=>s.symbol||""); }),
    fetchExchange("CoinEx", "https://api.coinex.com/v2/futures/market", d => (d.data||[]).map(s=>s.market||"")),
    fetchExchange("Toobit", "https://api.toobit.com/api/v1/contract/public/param", d => (d.result||d.data||[]).map(s=>s.symbol||"")),
    fetchExchange("XT.COM", "https://fapi.xt.com/future/market/v1/public/symbol/list", d => (d.result||[]).map(s=>(s.symbol||"").toUpperCase())),
    fetchExchange("Pionex", "https://api.pionex.com/api/v1/common/symbols", d => (d.data&&d.data.symbols||[]).map(s=>s.baseCurrency||"")),
    fetchExchange("WEEX", "https://api.weex.com/api/v2/mix/market/tickers?productType=USDT-FUTURES", d => (d.data||[]).map(s=>s.symbol||"")),
    fetchExchange("ApeX Protocol", "https://pro.apex.exchange/api/v2/symbols", d => (d.data||[]).map(s=>(s.symbol||"").replace("-USDC","").replace("-USDT","")), "USDC"),
    fetchExchange("Backpack", "https://api.backpack.exchange/api/v1/markets", d => (d||[]).map(s=>(s.symbol||"").replace("_USDC_PERP","").replace("_USDC","")), "USDC"),
    fetchExchange("Vest Markets", "https://serverprod.vest.exchange/v2/exchangeInfo", d => (d.symbols||[]).map(s=>(s.symbol||"").replace("-PERP","")), "USDC", { headers: { "xrestservermm": "restserver0" } }),
    fetchHL(),
  ];

  const results = await Promise.allSettled(jobs);

  let allPairs = [];
  for (const r of results) {
    if (r.status === "fulfilled") {
      const v = r.value;
      log.push(v.ok ? `✅ ${v.name}: ${v.count} RWA` : `❌ ${v.name}: ${v.error || "failed"}`);
      allPairs.push(...v.pairs);
    }
  }

  // Tier 3: 수동
  const manual = getManualPairs();
  const existKeys = new Set(allPairs.map(p => p.ex + "|" + p.ticker));
  let manualAdded = 0;
  for (const m of manual) {
    if (!existKeys.has(m.ex + "|" + m.ticker)) { allPairs.push(m); existKeys.add(m.ex + "|" + m.ticker); manualAdded++; }
  }
  log.push(`📋 수동: ${manualAdded}`);

  // ═══════════════════════════════════════
  // AI 분류: Unclassified 티커 수집 → Claude 호출
  // ═══════════════════════════════════════
  const unclassifiedTickers = [...new Set(
    allPairs.filter(p => p.type === "Unclassified").map(p => p.ticker)
  )];

  if (unclassifiedTickers.length > 0) {
    log.push(`❓ Unclassified: ${unclassifiedTickers.length}개 발견`);

    // 10초 제한 내에서만 AI 호출 (남은 시간 3초 이상일 때만)
    const elapsed = (Date.now() - t0) / 1000;
    if (elapsed < 6 && process.env.ANTHROPIC_API_KEY) {
      const aiResults = await classifyWithAI(unclassifiedTickers, log);
      let reclassified = 0;
      for (const p of allPairs) {
        if (p.type === "Unclassified" && aiResults[p.ticker]) {
          p.type = aiResults[p.ticker];
          reclassified++;
        }
      }
      if (reclassified > 0) log.push(`🏷️ 재분류: ${reclassified}개 페어 업데이트됨`);
    } else {
      log.push(`⏭️ AI분류 스킵 (시간부족: ${elapsed.toFixed(1)}s 경과)`);
    }

    // 여전히 Unclassified인 것들 (AI가 Unknown/Crypto로 판단)
    const stillUnc = allPairs.filter(p => p.type === "Unclassified").length;
    if (stillUnc > 0) log.push(`⚪ 미분류 잔여: ${stillUnc}개 (Crypto 또는 판별 불가)`);
  }

  // 중복 제거
  const seen = new Set();
  const deduped = [];
  for (const p of allPairs) {
    const k = p.ex + "|" + p.ticker;
    if (!seen.has(k)) { seen.add(k); deduped.push(p); }
  }

  // 정렬
  const ord = { Stock: 0, Commodities: 1, Index: 2, ETF: 3, Forex: 4, Unclassified: 5 };
  deduped.sort((a, b) => {
    if (a.ex !== b.ex) return a.ex.localeCompare(b.ex);
    const ta = ord[a.type] ?? 9, tb = ord[b.type] ?? 9;
    return ta !== tb ? ta - tb : a.ticker.localeCompare(b.ticker);
  });

  const today = new Date().toISOString().split("T")[0];
  const pairs = deduped.map(p => ({ ...p, date: today, isNew: false }));

  const exC = {}, tyC = {};
  pairs.forEach(p => { exC[p.ex] = (exC[p.ex] || 0) + 1; tyC[p.type] = (tyC[p.type] || 0) + 1; });
  const sec = ((Date.now() - t0) / 1000).toFixed(1);

  res.status(200).json({
    pairs,
    meta: {
      total: pairs.length,
      newCount: 0,
      updated: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
      info: `Total: ${pairs.length} | ${sec}s`,
      exchangeCounts: exC,
      typeCounts: tyC,
      aiClassified: unclassifiedTickers.length,
    },
    log,
  });
}