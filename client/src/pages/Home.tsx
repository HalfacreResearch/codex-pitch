import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Shield, Lock, CheckCircle, Target, TrendingUp, Cpu } from "lucide-react";

const ORANGE = "#F7931A";
const ORANGE_DIM = "rgba(247,147,26,0.10)";
const ORANGE_BORDER = "rgba(247,147,26,0.28)";
const BG = "#0A0A0A";
const BG2 = "#0E0E0E";

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

        {/* Logo mark */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border-2" style={{ borderColor: ORANGE, background: ORANGE_DIM }}>
            <span className="text-2xl font-bold" style={{ color: ORANGE }}>₿</span>
          </div>
        </div>

        <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-gray-500">
          Halfacre Research Presents
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-none tracking-tight text-white">
          Bitcoin Treasury<br />
          <span style={{ color: ORANGE }}>Codex</span>
        </h1>

        {/* Quote as slogan */}
        <p className="text-sm italic text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
          "The future of investing lies at the nexus of AI, machine learning, blockchain, and quantum computing."
        </p>

        <div className="h-px w-16 mx-auto mb-6" style={{ background: ORANGE_BORDER }} />

        <p className="text-base font-semibold uppercase tracking-widest mb-10" style={{ color: ORANGE }}>
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

/* ─── SLIDE 3: THE SOLUTION ──────────────────────────────────── */
function Solution() {
  return (
    <Slide>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow text="The Solution" />
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Accumulate More Bitcoin.<br />Systematically.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
            The Bitcoin Treasury Codex uses AI-driven signal generation, machine learning models, and on-chain blockchain analytics to identify moments when select commodity assets present asymmetric opportunities relative to Bitcoin. When those moments occur, the system rotates a measured portion of holdings into the target asset. When the asset outperforms, it converts back, resulting in more Bitcoin than the rotation started with.
          </p>
          <div className="space-y-3">
            {[
              "Spot commodities only. No leverage. No derivatives. No speculation.",
              "Algorithmic-assisted. Matthew makes every final trade decision.",
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

/* ─── SLIDE 4: THE TECHNOLOGY ────────────────────────────────── */
function Technology() {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6" />,
      label: "Artificial Intelligence",
      body: "AI-driven signal generation evaluates over 100 quantitative factors every day across four commodity pairs, identifying the highest-conviction rotation opportunities.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Machine Learning",
      body: "Predictive models retrain nightly on fresh data. Walk-forward validated against more than a decade of history. The system learns continuously and adapts to changing market conditions.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: "Blockchain Analytics",
      body: "On-chain analytics read the Bitcoin network directly. Miner behavior, exchange flows, network activity, and holder patterns are all factored into every signal the system generates.",
    },
  ];
  return (
    <Slide bg={BG2}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow text="The Technology" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Three Pillars. One System.</h2>
          <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            The Codex sits at the intersection of artificial intelligence, machine learning, and blockchain analytics. Each pillar reinforces the others.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.label} className="p-8 rounded-lg border flex flex-col"
              style={{ background: "#111", borderColor: ORANGE_BORDER }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: ORANGE_DIM, color: ORANGE }}>
                {p.icon}
              </div>
              <h4 className="text-base font-bold mb-4 text-white">{p.label}</h4>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 5: HOW IT WORKS ──────────────────────────────────── */
function HowItWorks() {
  const stats = [
    { value: "100+", label: "Quantitative Factors" },
    { value: "4", label: "Rotation Pairs" },
    { value: "10+", label: "Years of History" },
    { value: "Daily", label: "Signal Generation" },
  ];
  return (
    <Slide>
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
              The system identifies optimal USD-to-Bitcoin entry points using the same quantitative intelligence that powers the rotation engine. Rather than fixed-interval dollar-cost averaging, capital is deployed at algorithmically timed moments, accumulating more Bitcoin per dollar deployed.
            </p>
          </div>
          <div className="p-8 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Rotation Engine</div>
            <h3 className="text-lg font-bold text-white mb-4">Systematic Bitcoin Growth</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              When high-conviction signals align across ETH, SOL, XRP, or LINK, capital rotates from Bitcoin into the target commodity. Positions are entered in tranches. All exits are manual. Matthew makes every final call on every trade.
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

/* ─── SLIDE 6: PERFORMANCE ───────────────────────────────────── */
function Performance() {
  return (
    <Slide bg={BG2}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Eyebrow text="Performance" />
          <h2 className="text-4xl font-bold text-white mb-3">The Target: More Than 5% Additional Bitcoin Per Year.</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            The Codex is built to one standard. Every signal, every model, every trade decision is evaluated against a single question: does this accumulate more Bitcoin?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="p-8 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>How We Measure</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Performance is measured exclusively in Bitcoin-denominated terms. Not dollar returns. Not percentage gains on fiat. The only number that matters is: how much more Bitcoin does a client hold after each completed rotation?
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every strategy is backtested against more than a decade of real historical data with realistic transaction costs applied throughout. Forward performance tracking began April 2026.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { value: ">5% BTC/yr", label: "System Target", sub: "Additional Bitcoin above buy-and-hold" },
              { value: "10+ Years", label: "Backtested History", sub: "Real historical data, 2015 to present" },
              { value: "Live April 2026", label: "Forward Tracking", sub: "Every signal tracked against real outcomes" },
            ].map((s) => (
              <div key={s.label} className="p-5 rounded-lg border flex items-center gap-5" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="text-xl font-bold font-mono flex-shrink-0 w-32 text-right" style={{ color: ORANGE }}>{s.value}</div>
                <div>
                  <div className="text-white text-xs font-bold uppercase tracking-widest">{s.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 text-xs text-center">
          Backtested results do not guarantee future performance. Realistic transaction costs applied throughout. For qualified investors only.
        </p>
      </div>
    </Slide>
  );
}

/* ─── SLIDE 7: SECURITY ──────────────────────────────────────── */
function Security() {
  const cards = [
    { icon: <Shield className="w-6 h-6" />, title: "$200M Insurance", body: "Digital assets protected by a $200 million insurance policy. Institutional-grade coverage that matches the seriousness of the capital at stake." },
    { icon: <Lock className="w-6 h-6" />, title: "SAFE Trust Custody", body: "Assets held by SAFE Trust Company, a regulated Wyoming qualified custodian trust. Your Bitcoin is never commingled with firm assets." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Client-Controlled Accounts", body: "Every client owns their own account. Halfacre Research holds trading permissions only. Zero withdrawal rights. Your assets remain under your control at all times." },
  ];
  return (
    <Slide>
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

/* ─── SLIDE 8: THE FOUNDER ───────────────────────────────────── */
function Founder() {
  return (
    <Slide bg={BG2}>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center text-center">
          <img
            src="/matt-headshot.png"
            alt="Matthew Halfacre"
            className="w-52 h-64 object-contain mb-6"
            style={{ filter: "drop-shadow(0 0 24px rgba(247,147,26,0.15))" }}
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
            Matthew Halfacre is the founder of Halfacre Research, a quantitative research firm building Bitcoin-native financial infrastructure. Drawing on a 69-year family legacy of investment experience, Matthew has systematically translated time-tested, disciplined investment principles into the native language of Bitcoin, with a singular mission: to generate BTC-denominated alpha for serious Bitcoin holders.
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

/* ─── SLIDE 9: NEXT STEPS ───────────────────────────────────── */
function NextSteps() {
  return (
    <Slide>
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
          Halfacre Research is not a licensed financial advisor. Copyright 2026 Halfacre Research. All rights reserved.
        </p>
      </div>
    </Slide>
  );
}

/* ─── SLIDES ARRAY ───────────────────────────────────────────── */
const SLIDES = [
  { id: 1, label: "Cover", component: <Cover /> },
  { id: 2, label: "The Problem", component: <Problem /> },
  { id: 3, label: "The Solution", component: <Solution /> },
  { id: 4, label: "The Technology", component: <Technology /> },
  { id: 5, label: "How It Works", component: <HowItWorks /> },
  { id: 6, label: "Performance", component: <Performance /> },
  { id: 7, label: "Security", component: <Security /> },
  { id: 8, label: "The Founder", component: <Founder /> },
  { id: 9, label: "Next Steps", component: <NextSteps /> },
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

      {/* Dot navigation */}
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

      <div className="fixed bottom-6 right-6 text-gray-700 text-xs hidden md:block">
        Use arrow keys to navigate
      </div>
    </div>
  );
}
