import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Shield, Brain, Activity, Zap, Lock, CheckCircle, Quote, Target, TrendingUp } from "lucide-react";

const ORANGE = "#F7931A";
const ORANGE_DIM = "rgba(247,147,26,0.10)";
const ORANGE_BORDER = "rgba(247,147,26,0.28)";
const BG = "#0A0A0A";
const BG2 = "#0E0E0E";

/* ─── Shared layout wrapper ─────────────────────────────────── */
function Slide({ children, bg = BG }: { children: React.ReactNode; bg?: string }) {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center px-12 py-10 overflow-hidden"
      style={{ background: bg, minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: ORANGE }}>
      {text}
    </div>
  );
}

/* ─── SLIDE 1: COVER ─────────────────────────────────────────── */
function Cover() {
  return (
    <Slide>
      <div className="text-center max-w-3xl mx-auto">
        <div
          className="inline-block text-xs font-bold uppercase tracking-[0.4em] mb-10 px-4 py-2 rounded border"
          style={{ color: ORANGE, borderColor: ORANGE_BORDER, background: ORANGE_DIM }}
        >
          Confidential — Qualified Investors Only
        </div>
        <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-gray-500">
          HALFACRE RESEARCH PRESENTS
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-none tracking-tight text-white">
          BITCOIN TREASURY<br />
          <span style={{ color: ORANGE }}>CODEX</span>
        </h1>
        <p className="text-lg text-gray-400 mb-4 max-w-xl mx-auto leading-relaxed">
          Institutional-grade Bitcoin accumulation powered by AI, machine learning, and blockchain
        </p>
        <p className="text-base font-semibold uppercase tracking-widest mb-12" style={{ color: ORANGE }}>
          Not more dollars. More Bitcoin.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-600 uppercase tracking-widest">
          <span>Halfacre Research</span>
          <span style={{ color: ORANGE }}>·</span>
          <span>April 2026</span>
          <span style={{ color: ORANGE }}>·</span>
          <span>$100,000 Minimum</span>
          <span style={{ color: ORANGE }}>·</span>
          <span>Qualified Investors Only</span>
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 2: THE PROBLEM ───────────────────────────────────── */
function Problem() {
  const cards = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "The Fiat Matrix",
      body: "When you measure Bitcoin success in dollars, you are playing the wrong game. The goal is not to grow your dollar balance. The goal is to grow your Bitcoin balance.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "The Passive Trap",
      body: "Buy and hold is the floor, not the ceiling. Disciplined, data-driven rotation can systematically accumulate more Bitcoin than passive holding alone.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "The Infrastructure Gap",
      body: "Institutional Bitcoin adoption requires institutional infrastructure. Regulated custody, comprehensive insurance, and algorithmic systems built to professional standards. Most offerings do not meet that bar.",
    },
  ];
  return (
    <Slide bg={BG2}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow text="The Problem" />
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Most Bitcoin holders are measuring<br />success in the wrong currency.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="p-6 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: ORANGE_DIM, color: ORANGE }}>
                {c.icon}
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: ORANGE }}>{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 3: THE VISION ────────────────────────────────────── */
function Vision() {
  return (
    <Slide>
      <div className="text-center max-w-3xl mx-auto">
        <Eyebrow text="The Vision" />
        <Quote className="w-10 h-10 mx-auto mb-8 opacity-25" style={{ color: ORANGE }} />
        <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8 italic">
          "The future of investing lies at the nexus of AI, machine learning, blockchain, and quantum computing."
        </blockquote>
        <div className="text-sm font-bold uppercase tracking-widest mb-10" style={{ color: ORANGE }}>
          Matthew Halfacre — Founder, Bitcoin Treasury Codex
        </div>
        <div className="h-px w-24 mx-auto mb-8" style={{ background: ORANGE_BORDER }} />
        <p className="text-gray-400 text-base leading-relaxed">
          The Codex is the living expression of that vision. Three of the four pillars are live today. The fourth is on the roadmap.
        </p>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 4: THE SOLUTION ──────────────────────────────────── */
function Solution() {
  return (
    <Slide bg={BG2}>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow text="The Solution" />
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Accumulate More Bitcoin.<br />Systematically.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
            The Bitcoin Treasury Codex uses AI-driven signal generation, machine learning models, and on-chain blockchain analytics to identify moments when select commodity assets present asymmetric opportunities relative to Bitcoin. When those moments occur, the system rotates a measured portion of holdings into the target asset. When the asset outperforms, it converts back — resulting in more Bitcoin than the rotation started with.
          </p>
          <div className="space-y-3">
            {[
              "Spot commodities only. No leverage. No derivatives. No speculation.",
              "Algorithmic-assisted — Matthew makes every final trade decision.",
              "Bitcoin is always the base accounting unit. Every result is measured in BTC.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: ORANGE }} />
                <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-6 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Goal</div>
            <p className="text-white text-2xl font-bold">More Bitcoin.</p>
            <p className="text-gray-500 text-sm mt-2">Not more dollars. The entire system is calibrated to this single standard.</p>
          </div>
          <div className="p-6 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Method</div>
            <p className="text-gray-300 text-sm leading-relaxed">Rotate a measured portion of Bitcoin holdings into a commodity asset when the data says the timing is right. Convert back when the asset outperforms. Net result: more Bitcoin.</p>
          </div>
          <div className="p-6 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Discipline</div>
            <p className="text-gray-300 text-sm leading-relaxed">69 years of family investment principles translated into the native language of Bitcoin. Disciplined, data-driven, and always measured in BTC.</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 5: THE TECHNOLOGY ────────────────────────────────── */
function Technology() {
  const pillars = [
    { label: "Artificial Intelligence", status: "LIVE", body: "AI-driven signal generation evaluates 111 quantitative factors every day across four commodity pairs, identifying the highest-conviction rotation opportunities.", active: true },
    { label: "Machine Learning", status: "LIVE", body: "7 XGBoost models retrain nightly on fresh data. Walk-forward validated against 10+ years of history. The system learns continuously.", active: true },
    { label: "Blockchain", status: "LIVE", body: "On-chain analytics read the Bitcoin network directly: MVRV ratio, exchange net flows, miner behavior, UTXO data, and 40+ additional on-chain signals.", active: true },
    { label: "Quantum Computing", status: "NEXT FRONTIER", body: "The fourth point of the nexus. As quantum computing matures, the Codex is positioned to integrate it — completing the vision.", active: false },
  ];
  return (
    <Slide>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow text="The Technology" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Built at the Nexus.</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {pillars.map((p) => (
            <div key={p.label} className="p-6 rounded-lg border flex flex-col"
              style={{ background: p.active ? "#111" : "#0C0C0C", borderColor: p.active ? ORANGE_BORDER : "rgba(255,255,255,0.05)" }}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold leading-tight" style={{ color: p.active ? ORANGE : "#444" }}>{p.label}</h4>
              </div>
              <span className="text-xs px-2 py-1 rounded font-bold uppercase tracking-widest self-start mb-4"
                style={{ background: p.active ? ORANGE_DIM : "rgba(255,255,255,0.03)", color: p.active ? ORANGE : "#444", border: `1px solid ${p.active ? ORANGE_BORDER : "rgba(255,255,255,0.05)"}` }}>
                {p.status}
              </span>
              <p className="text-xs leading-relaxed flex-1" style={{ color: p.active ? "#9CA3AF" : "#444" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 6: HOW IT WORKS ──────────────────────────────────── */
function HowItWorks() {
  const stats = [
    { value: "111", label: "Quantitative Factors" },
    { value: "4", label: "Rotation Pairs" },
    { value: "10+", label: "Years of History" },
    { value: "Daily", label: "Signal Generation" },
  ];
  return (
    <Slide bg={BG2}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow text="The System" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Two Engines. One Goal. More Bitcoin.</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="p-8 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>DCA Engine</div>
            <h3 className="text-lg font-bold text-white mb-4">Smarter Bitcoin Accumulation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The same 111-factor system identifies optimal USD-to-Bitcoin entry points. Rather than fixed-interval dollar-cost averaging, capital is deployed at algorithmically timed moments — accumulating more Bitcoin per dollar deployed and reducing average cost basis over time.
            </p>
          </div>
          <div className="p-8 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Rotation Engine</div>
            <h3 className="text-lg font-bold text-white mb-4">Systematic Bitcoin Growth</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              When high-conviction signals align across ETH, SOL, XRP, or LINK, capital rotates from Bitcoin into the target commodity. Positions are entered in tranches. All exits are manual — Matthew's final call on every trade.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="p-4 rounded-lg border text-center" style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
              <div className="text-2xl font-bold font-mono mb-1" style={{ color: ORANGE }}>{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 7: PERFORMANCE ───────────────────────────────────── */
function Performance() {
  const rows = [
    { pair: "ETH/BTC", factor: "Stablecoin Supply Ratio", type: "On-Chain", period: "2017–2026" },
    { pair: "ETH/BTC", factor: "Yield Curve Spread", type: "Macro", period: "2018–2026" },
    { pair: "ETH/BTC", factor: "UTXO Count Change", type: "On-Chain", period: "2017–2026" },
    { pair: "ETH/BTC", factor: "Treasury 10Y Rate", type: "Macro", period: "2018–2026" },
    { pair: "ETH/BTC", factor: "RSI 7", type: "Technical", period: "2017–2026" },
  ];
  return (
    <Slide>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Eyebrow text="Backtested Performance" />
          <h2 className="text-4xl font-bold text-white mb-3">The Target: More Than 5% Additional Bitcoin Per Year.</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            111 factors backtested against real historical data from 2015 to 2026. Realistic transaction costs applied throughout. Results expressed in BTC-denominated annual return.
          </p>
        </div>
        <div className="rounded-lg border overflow-hidden mb-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {["Pair", "Factor", "Signal Type", "Period"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest" style={{ color: ORANGE }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? BG : BG2, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td className="px-5 py-3 font-mono font-semibold text-white">{r.pair}</td>
                  <td className="px-5 py-3 text-gray-300">{r.factor}</td>
                  <td className="px-5 py-3 text-gray-400">{r.type}</td>
                  <td className="px-5 py-3 text-gray-500">{r.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: "System Target", value: ">5% BTC/yr", sub: "Above buy-and-hold" },
            { label: "Data History", value: "10+ Years", sub: "Daily candles, 2015–present" },
            { label: "Forward Tracking", value: "Live April 2026", sub: "Every signal tracked vs. real outcomes" },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-lg border text-center" style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
              <div className="text-lg font-bold font-mono mb-1" style={{ color: ORANGE }}>{s.value}</div>
              <div className="text-white text-xs font-bold uppercase tracking-widest">{s.label}</div>
              <div className="text-gray-600 text-xs mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-xs text-center">
          Backtested results do not guarantee future performance. Realistic transaction costs applied throughout. Forward performance tracking began April 2026. For qualified investors only.
        </p>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 8: SECURITY ──────────────────────────────────────── */
function Security() {
  const cards = [
    { icon: <Shield className="w-6 h-6" />, title: "$200M Insurance", body: "Digital assets protected by a $200 million insurance policy. Institutional-grade coverage that matches the seriousness of the capital at stake." },
    { icon: <Lock className="w-6 h-6" />, title: "SAFE Trust Custody", body: "Assets held by SAFE Trust Company, a regulated Wyoming qualified custodian trust. Your Bitcoin is never commingled with firm assets." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Client-Controlled Accounts", body: "Every client owns their own account. Halfacre Research holds trading permissions only. Zero withdrawal rights. Your assets remain under your control at all times." },
  ];
  return (
    <Slide bg={BG2}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow text="Security and Custody" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Institutional Infrastructure.<br />Client-Controlled Assets.</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {cards.map((c) => (
            <div key={c.title} className="p-6 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: ORANGE_DIM, color: ORANGE }}>{c.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="p-5 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "SOC 2 Compliant", sub: "Institutional-grade security protocols" },
              { label: "SFOX Prime Execution", sub: "30+ liquidity venues, best-in-class price discovery" },
              { label: "Zero Security Incidents", sub: "Since inception" },
            ].map((b) => (
              <div key={b.label}>
                <div className="text-sm font-bold text-white mb-1">{b.label}</div>
                <div className="text-gray-500 text-xs">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 9: THE FOUNDER ───────────────────────────────────── */
function Founder() {
  return (
    <Slide>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-16 items-start">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663096452459/CmqeCOjCelCcyIJP.png"
            alt="Matthew Halfacre"
            className="w-48 h-48 rounded-full object-cover border-2 mb-6"
            style={{ borderColor: ORANGE_BORDER }}
          />
          <h2 className="text-3xl font-bold text-white mb-1">Matthew Halfacre</h2>
          <div className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: ORANGE }}>
            Founder and CEO, Halfacre Research
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            {[
              { value: "24 yrs", label: "Experience" },
              { value: "69 yr", label: "Family Legacy" },
              { value: "340+", label: "Newsletter Subscribers" },
              { value: "42 sec", label: "BTC 2050 Whitepaper" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded border text-center" style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
                <div className="text-base font-bold font-mono" style={{ color: ORANGE }}>{s.value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow text="The Founder" />
          <p className="text-gray-200 leading-relaxed mb-5 text-sm">
            Matthew Halfacre is the founder of Halfacre Research, a quantitative research firm building Bitcoin-native financial infrastructure. Drawing on a 69-year family legacy of investment experience, Matthew has systematically translated time-tested, disciplined investment principles into the native language of Bitcoin — with a singular mission: to generate BTC-denominated alpha for serious Bitcoin holders.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm">
            Matthew is the author of the Bitcoin 2050 Whitepaper, a 42-section, 25-year projection on Bitcoin's path to global reserve asset status. He publishes The New School newsletter, delivering biweekly quantitative Bitcoin intelligence to over 340 subscribers. His work has been featured in TechBullion and Capital Insight Hub, and he serves as a media source on Qwoted for institutional Bitcoin insights.
          </p>
          <div className="p-5 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>As Featured In</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "TechBullion", sub: "Forging a New Financial Paradigm" },
                { name: "Capital Insight Hub", sub: "Bitcoin Standard: BTC Alpha" },
                { name: "Bitcoin 2050 Whitepaper", sub: "25-year Bitcoin projection" },
                { name: "The New School", sub: "340+ subscribers, biweekly" },
              ].map((m) => (
                <div key={m.name}>
                  <div className="text-white text-xs font-bold">{m.name}</div>
                  <div className="text-gray-600 text-xs">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 10: NEXT STEPS ───────────────────────────────────── */
function NextSteps() {
  return (
    <Slide bg={BG2}>
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow text="Get in Touch" />
        <h2 className="text-5xl font-bold text-white mb-6">Schedule a Consultation.</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          The Bitcoin Treasury Codex accepts qualified investors on a selective basis. If you are serious about growing your Bitcoin holdings with institutional-grade infrastructure, we want to hear from you.
        </p>
        <div className="flex flex-col gap-4 items-center mb-10">
          {[
            { label: "Email", value: "matt@halfacreresearch.tech" },
            { label: "Website", value: "codexyield.com" },
            { label: "Minimum", value: "$100,000 USD" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-4 px-8 py-4 rounded-lg border w-full max-w-sm justify-between"
              style={{ background: "#111", borderColor: ORANGE_BORDER }}>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{c.label}</span>
              <span className="text-sm font-semibold" style={{ color: ORANGE }}>{c.value}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-xs leading-relaxed">
          Not an offer of securities. All assets are spot commodities. For qualified investors only.<br />
          Halfacre Research is not a licensed financial advisor. © 2026 Halfacre Research. All rights reserved.
        </p>
      </div>
    </Slide>
  );
}

/* ─── SLIDES ARRAY ───────────────────────────────────────────── */
const SLIDES = [
  { id: 1, label: "Cover", component: <Cover /> },
  { id: 2, label: "The Problem", component: <Problem /> },
  { id: 3, label: "The Vision", component: <Vision /> },
  { id: 4, label: "The Solution", component: <Solution /> },
  { id: 5, label: "The Technology", component: <Technology /> },
  { id: 6, label: "How It Works", component: <HowItWorks /> },
  { id: 7, label: "Performance", component: <Performance /> },
  { id: 8, label: "Security", component: <Security /> },
  { id: 9, label: "The Founder", component: <Founder /> },
  { id: 10, label: "Next Steps", component: <NextSteps /> },
];

/* ─── MAIN DECK COMPONENT ────────────────────────────────────── */
export default function Home() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: BG }}>
      {/* Slide content */}
      <div className="w-full h-full">
        {SLIDES[current].component}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5"
        style={{ background: "rgba(10,10,10,0.8)", borderColor: ORANGE_BORDER, color: ORANGE }}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        disabled={current === total - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5"
        style={{ background: "rgba(10,10,10,0.8)", borderColor: ORANGE_BORDER, color: ORANGE }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide counter */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full border"
        style={{ background: "rgba(10,10,10,0.9)", borderColor: ORANGE_BORDER }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              background: i === current ? ORANGE : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
        <span className="text-xs font-mono ml-1" style={{ color: ORANGE }}>
          {current + 1} / {total}
        </span>
      </div>

      {/* Slide label */}
      <div
        className="fixed top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
        style={{ background: "rgba(10,10,10,0.9)", borderColor: ORANGE_BORDER, color: ORANGE }}
      >
        {SLIDES[current].label}
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-6 right-6 text-gray-700 text-xs hidden md:block">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
}
