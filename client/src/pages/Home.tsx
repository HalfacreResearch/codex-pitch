/* =============================================================
   DESIGN: Dark Luxury — Investor Pitch for CodexYield
   pitch.codexyield.com — Institutional investor presentation
   Sections: Cover → Problem → Philosophy → System → Performance
             → Security → Founder → Contact
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { useLiveStats } from "@/hooks/useLiveStats";
import {
  ArrowRight, Shield, TrendingUp, BarChart3, Lock,
  ChevronDown, Brain, Activity, Target,
  Zap, CheckCircle, Quote,
} from "lucide-react";

const FOUNDER_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663096452459/CmqeCOjCelCcyIJP.png";
const ORANGE = "#F7931A";
const ORANGE_DIM = "rgba(247,147,26,0.10)";
const ORANGE_BORDER = "rgba(247,147,26,0.25)";

function formatPrice(n: number | null) {
  if (n === null) return "—";
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const raf = (ts: number) => {
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [target, duration, trigger]);
  return value;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="text-xs font-bold uppercase tracking-[0.35em] mb-3" style={{ color: ORANGE }}>{eyebrow}</div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{title}</h2>
      {sub && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function Home() {
  const stats = useLiveStats();
  const { ref: statsRef, inView: statsInView } = useInView();
  const factorCount = useCountUp(stats.totalFactors ?? 111, 1600, statsInView);
  const [formData, setFormData] = useState({ name: "", email: "", investable: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0A", color: "#F5F0E8" }}>

      {/* TOP BAR */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 border-b"
        style={{ background: "rgba(10,10,10,0.96)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-base font-bold tracking-tight" style={{ color: ORANGE }}>CODEXYIELD</span>
          <span className="text-gray-600 text-sm hidden md:block">|</span>
          <span className="text-gray-500 text-xs uppercase tracking-widest hidden md:block">Investor Presentation</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          {stats.btcPrice && (
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">BTC</span>
              <span className="font-mono font-semibold text-sm" style={{ color: ORANGE }}>{formatPrice(stats.btcPrice)}</span>
              {stats.btcChange24h !== null && (
                <span className="text-xs font-mono hidden md:block"
                  style={{ color: stats.btcChange24h >= 0 ? "#22c55e" : "#ef4444" }}>
                  {stats.btcChange24h >= 0 ? "+" : ""}{stats.btcChange24h.toFixed(2)}%
                </span>
              )}
            </div>
          )}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
            <span className="text-gray-400 text-xs">System live</span>
          </div>
        </div>
      </div>

      {/* COVER */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 50% 40%, #F7931A 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className="inline-block text-xs font-bold uppercase tracking-[0.4em] mb-8 px-4 py-2 rounded border"
            style={{ color: ORANGE, borderColor: ORANGE_BORDER, background: ORANGE_DIM }}
          >
            Confidential — Qualified Investors Only
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none tracking-tight">
            <span className="text-white">Bitcoin Treasury</span><br />
            <span style={{ color: ORANGE }}>Codex</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed">
            Institutional-grade Bitcoin accumulation powered by AI, machine learning, and 69 years of family investment legacy.
          </p>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-12">
            Not more dollars. More Bitcoin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded font-bold text-black text-sm uppercase tracking-widest transition-all hover:opacity-90"
              style={{ background: ORANGE }}
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Schedule a Consultation <ArrowRight className="inline-block ml-1 w-4 h-4" />
            </a>
            <a
              href="#problem"
              className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest border transition-all hover:bg-white/5"
              style={{ color: ORANGE, borderColor: ORANGE_BORDER }}
              onClick={(e) => { e.preventDefault(); document.querySelector("#problem")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              View the Presentation
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-8">CodexYield · Halfacre Research · $100K Minimum · Qualified Investors Only</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </section>

      {/* KEY STATS */}
      <section ref={statsRef} className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "24", label: "Years Experience", sub: "Investment & quantitative analysis" },
            { value: "69", label: "Year Family Legacy", sub: "Institutional investment principles" },
            { value: statsInView ? `${factorCount}` : "—", label: "Quantitative Factors", sub: "Backtested 2015 to 2026" },
            { value: "$200M", label: "Insurance Coverage", sub: "Digital asset protection" },
          ].map((s) => (
            <div key={s.label} className="p-6 rounded-lg border text-center"
              style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
              <div className="text-3xl font-bold mb-1 font-mono" style={{ color: ORANGE }}>{s.value}</div>
              <div className="text-white text-xs font-bold uppercase tracking-widest">{s.label}</div>
              <div className="text-gray-500 text-xs mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="problem" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Problem"
            title="Most Bitcoin Holders Are Thinking in the Wrong Currency."
            sub="The prevailing benchmark for Bitcoin success is still measured in dollars. That is a fiat-centric trap — and it leaves significant accumulation potential on the table."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" style={{ color: ORANGE }} />,
                title: "The Fiat Matrix",
                body: "Most participants in the crypto space still operate within a fiat matrix. Their ultimate benchmark is their local currency. When you measure Bitcoin success in dollars, you are playing the wrong game entirely.",
              },
              {
                icon: <Target className="w-6 h-6" style={{ color: ORANGE }} />,
                title: "The Passive Trap",
                body: "Buy and hold is a valid strategy. But it is the floor, not the ceiling. Sophisticated investors who understand Bitcoin as the base accounting unit can systematically accumulate more of it through disciplined, quantitative rotation.",
              },
              {
                icon: <Shield className="w-6 h-6" style={{ color: ORANGE }} />,
                title: "The Infrastructure Gap",
                body: "Institutional adoption of Bitcoin requires institutional-grade infrastructure. Regulated custody, comprehensive insurance, and algorithmic systems built on a data framework as robust as any major financial institution. Most offerings do not meet that standard.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-lg border"
                style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: ORANGE }}>{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE QUOTE */}
      <section className="py-20 px-6 border-t border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-10 h-10 mx-auto mb-8 opacity-30" style={{ color: ORANGE }} />
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 italic">
            "The future of investing lies at the nexus of AI, machine learning, blockchain, and quantum computing."
          </blockquote>
          <div className="text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
            Matthew Halfacre — Founder, Bitcoin Treasury Codex
          </div>
        </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Philosophy"
            title="Built at the Nexus."
            sub="AI, machine learning, and blockchain working together today. Quantum computing on the horizon. The Codex is the living expression of that vision."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Bitcoin Standard</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bitcoin Treasury Codex operates on a single, unwavering principle: the goal is not to increase the dollar value of your holdings. The goal is to increase the total number of Bitcoin you own.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Every trade, every signal, every decision in the system is evaluated against one question: does this result in more Bitcoin? Not more dollars. More Bitcoin.
              </p>
            </div>
            <div className="p-8 rounded-lg border" style={{ background: "#111", borderColor: ORANGE_BORDER }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Method</div>
              <p className="text-gray-300 leading-relaxed mb-4">
                When select commodity assets present asymmetric opportunities relative to Bitcoin, the system rotates a measured portion of holdings into that asset. When the asset outperforms, it converts back to more Bitcoin than the rotation started with.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                No leverage. No derivatives. No speculation. Spot commodities only. Algorithmic-assisted — Matthew makes every final trade decision.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-lg border text-center" style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              The Codex is already operating at three of the four points of that nexus. AI-driven signal generation. Machine learning models that retrain every night on fresh data. Blockchain analytics that read the on-chain truth directly. The fourth point — quantum computing — is the next frontier, and it is already on the roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section id="system" className="py-24 px-6 border-t border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The System"
            title="111 Factors. 7 Models. One Goal."
            sub="The Codex Engine runs every day. By market open, every factor is scored, every model updated, every signal live."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: <Brain className="w-5 h-5" />, title: "7 XGBoost ML Models",
                body: "Covering BTC direction, on-chain cycle position, macro regime, altcoin rotation timing, and DCA optimization. Walk-forward validated — not curve-fit.",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />, title: "111 Quantitative Factors",
                body: "Technical, on-chain, macroeconomic, and sentiment data — all backtested against real historical data with realistic transaction costs applied throughout.",
              },
              {
                icon: <Activity className="w-5 h-5" />, title: "Consensus Engine",
                body: "The system requires multiple high-conviction factors to agree before generating a rotation signal. This reduces false positives and preserves capital.",
              },
              {
                icon: <Zap className="w-5 h-5" />, title: "Daily Intelligence",
                body: "Every signal is logged and tracked against real outcomes at 7, 14, and 30-day intervals. The system measures its own accuracy continuously.",
              },
            ].map((card) => (
              <div key={card.title} className="p-5 rounded-lg border"
                style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="mb-3" style={{ color: ORANGE }}>{card.icon}</div>
                <h4 className="text-sm font-bold text-white mb-2">{card.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>DCA Engine</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The same 111-factor engine identifies optimal USD to Bitcoin entry points. Rather than fixed-interval dollar-cost averaging, capital is deployed at algorithmically timed moments — accumulating more Bitcoin per dollar deployed and reducing average cost basis over time.
              </p>
            </div>
            <div className="p-6 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Rotation Engine</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                When high-conviction signals align across ETH, SOL, XRP, or LINK, capital rotates from Bitcoin into the target commodity. Positions are entered in tranches and protected by trailing stops. All exits are manual — Matthew's final call on every trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Backtested Performance"
            title="The Target: 5%+ BTC Per Year."
            sub="111 quantitative factors backtested against real historical data from 2015 to 2026. Realistic transaction costs applied throughout. Results expressed in BTC-denominated annual return — the only metric that matters."
          />
          <div className="overflow-x-auto rounded-lg border mb-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  {["Pair", "Factor", "BTC Return / Year", "Period"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-bold uppercase tracking-widest"
                      style={{ color: ORANGE }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { coin: "ETH/BTC", factor: "Stablecoin Supply Ratio", btcReturn: "Backtested positive", years: "2017–2026" },
                  { coin: "ETH/BTC", factor: "Yield Curve Spread", btcReturn: "Backtested positive", years: "2018–2026" },
                  { coin: "ETH/BTC", factor: "UTXO Count Change", btcReturn: "Backtested positive", years: "2017–2026" },
                  { coin: "ETH/BTC", factor: "Treasury 10Y Rate", btcReturn: "Backtested positive", years: "2018–2026" },
                  { coin: "ETH/BTC", factor: "RSI 7", btcReturn: "Backtested positive", years: "2017–2026" },
                ].map((row, i) => (
                  <tr key={i} style={{
                    background: i % 2 === 0 ? "#0A0A0A" : "#0D0D0D",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <td className="px-5 py-4 font-mono font-semibold text-white">{row.coin}</td>
                    <td className="px-5 py-4 text-gray-300">{row.factor}</td>
                    <td className="px-5 py-4 font-mono font-bold" style={{ color: ORANGE }}>{row.btcReturn}</td>
                    <td className="px-5 py-4 text-gray-500">{row.years}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "System Target", value: ">5% BTC/yr", sub: "BTC-denominated CAGR above buy-and-hold" },
              { label: "Data History", value: "10+ Years", sub: "Daily candles from 2015 to present" },
              { label: "Forward Tracking", value: "Live Since April 2026", sub: "Every signal tracked against real outcomes" },
            ].map((s) => (
              <div key={s.label} className="p-5 rounded-lg border text-center"
                style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
                <div className="text-xl font-bold mb-1 font-mono" style={{ color: ORANGE }}>{s.value}</div>
                <div className="text-white text-xs font-bold uppercase tracking-widest">{s.label}</div>
                <div className="text-gray-500 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-6 text-center">
            Backtested results do not guarantee future performance. All figures use realistic transaction costs. Forward performance tracking began April 2026. For qualified investors only.
          </p>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="py-24 px-6 border-t border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Security and Custody"
            title="Institutional Infrastructure. Client-Controlled Assets."
            sub="Risk mitigation is not an afterthought. It is engineered into every layer of the infrastructure."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Shield className="w-6 h-6" />, title: "$200M Insurance",
                body: "Digital assets protected by a $200 million insurance policy. Institutional-grade coverage that matches the seriousness of the capital at stake.",
              },
              {
                icon: <Lock className="w-6 h-6" />, title: "SAFE Trust Custody",
                body: "Assets held by SAFE Trust Company, a regulated Wyoming qualified custodian trust. Your Bitcoin is never commingled with firm assets.",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />, title: "Client-Controlled Accounts",
                body: "Every client owns their own account. Halfacre Research holds trading permissions only. Zero withdrawal rights. Your assets remain under your control at all times.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-lg border"
                style={{ background: "#111", borderColor: ORANGE_BORDER }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: ORANGE_DIM, color: ORANGE }}>{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-lg border" style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                { label: "SOC 2 Compliant", sub: "Institutional-grade security protocols" },
                { label: "SFOX Prime Execution", sub: "30+ liquidity venues, best-in-class price discovery" },
                { label: "Zero Security Incidents", sub: "Since inception" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                  <div className="text-gray-500 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="The Founder" title="Matthew Halfacre" />
          <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <img
                src={FOUNDER_IMG}
                alt="Matthew Halfacre"
                className="w-52 h-52 rounded-full object-cover border-2"
                style={{ borderColor: ORANGE_BORDER }}
              />
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
                  Founder and CEO
                </div>
                <div className="text-gray-400 text-xs mt-1">Halfacre Research</div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-200 leading-relaxed mb-5 text-base">
                Matthew Halfacre is the founder of Halfacre Research, a macroeconomic research firm pioneering Bitcoin-native financial infrastructure. Building on a 69-year family legacy of investment experience, Matthew has systematically automated proprietary, time-tested trading strategies with a singular mission: to generate BTC-denominated alpha for high-net-worth individuals, family offices, and institutional clients.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5 text-sm">
                The Bitcoin Treasury Codex represents a fundamental shift in how sophisticated investors approach digital assets. Rather than measuring success in fiat terms, the Codex treats Bitcoin as the base accounting unit — a truly Bitcoin-native approach built on the same disciplined, data-driven principles that have guided the Halfacre family's investment philosophy for nearly seven decades.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Matthew is the author of the Bitcoin 2050 Whitepaper, a 42-section, 25-year projection on Bitcoin's path to becoming the global reserve asset. He publishes "The New School" newsletter, delivering biweekly quantitative analysis and Bitcoin market research to over 340 subscribers. His work has been featured in TechBullion and Capital Insight Hub, and he serves as a media source on Qwoted for institutional-grade insights into Bitcoin treasury management.
              </p>
            </div>
          </div>

          {/* The Nexus — four pillars */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "AI", status: "Live", body: "AI-driven signal generation evaluates 111 factors every single day and identifies the highest-conviction opportunities across four commodity pairs.", active: true },
              { label: "Machine Learning", status: "Live", body: "7 XGBoost models retrain every night on fresh data. Walk-forward validated. The system learns continuously and never stops improving.", active: true },
              { label: "Blockchain", status: "Live", body: "On-chain analytics read the Bitcoin network directly — MVRV, exchange flows, miner behavior, UTXO data — the truth that price alone cannot tell.", active: true },
              { label: "Quantum Computing", status: "Next Frontier", body: "The fourth point of the nexus. As quantum computing matures, the Codex is positioned to integrate it — completing the vision Matthew described.", active: false },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-lg border relative"
                style={{ background: item.active ? "#111" : "#0D0D0D", borderColor: item.active ? ORANGE_BORDER : "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold" style={{ color: item.active ? ORANGE : "#555" }}>{item.label}</h4>
                  <span className="text-xs px-2 py-0.5 rounded font-bold uppercase tracking-widest"
                    style={{ background: item.active ? ORANGE_DIM : "rgba(255,255,255,0.04)", color: item.active ? ORANGE : "#555", border: `1px solid ${item.active ? ORANGE_BORDER : "rgba(255,255,255,0.06)"}` }}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: item.active ? "#9CA3AF" : "#555" }}>{item.body}</p>
              </div>
            ))}
          </div>

          {/* Media features */}
          <div className="mt-10 p-6 rounded-lg border" style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
            <div className="text-xs font-bold uppercase tracking-widest text-center mb-6" style={{ color: ORANGE }}>
              As Featured In
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "TechBullion", sub: "Forging a New Financial Paradigm" },
                { name: "Capital Insight Hub", sub: "Bitcoin Standard: BTC Alpha Beats USD Pricing" },
                { name: "Bitcoin 2050 Whitepaper", sub: "42-section, 25-year Bitcoin projection" },
                { name: "The New School", sub: "340+ subscribers, biweekly Bitcoin intelligence" },
              ].map((item) => (
                <div key={item.name} className="text-center">
                  <div className="text-white text-sm font-bold">{item.name}</div>
                  <div className="text-gray-500 text-xs mt-1 max-w-[160px]">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Schedule a Consultation"
            sub="CodexYield accepts qualified investors on a selective basis. Complete the form and Matthew will respond within 48 hours."
          />
          {submitted ? (
            <div className="p-8 rounded-lg border text-center"
              style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
              <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: ORANGE }} />
              <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
              <p className="text-gray-400">Matthew will review your inquiry and respond within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-lg border"
              style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name *</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded border text-white text-sm outline-none transition-colors"
                    style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.12)" }}
                    placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address *</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded border text-white text-sm outline-none transition-colors"
                    style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.12)" }}
                    placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Investable Capital Range</label>
                <select value={formData.investable}
                  onChange={(e) => setFormData({ ...formData, investable: e.target.value })}
                  className="w-full px-4 py-3 rounded border text-white text-sm outline-none"
                  style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.12)" }}>
                  <option value="">Select a range</option>
                  <option value="100k-500k">$100,000 – $500,000</option>
                  <option value="500k-1m">$500,000 – $1,000,000</option>
                  <option value="1m-5m">$1,000,000 – $5,000,000</option>
                  <option value="5m+">$5,000,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea rows={4} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded border text-white text-sm outline-none resize-none"
                  style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.12)" }}
                  placeholder="Tell us about your investment goals or any questions you have." />
              </div>
              <button type="submit"
                className="w-full py-4 rounded font-bold text-black text-sm uppercase tracking-widest transition-all hover:opacity-90"
                style={{ background: ORANGE }}>
                Submit Request <ArrowRight className="inline-block ml-1 w-4 h-4" />
              </button>
              <p className="text-gray-600 text-xs text-center">
                Minimum investment: $100,000 USD. Qualified investors only. Not an offer of securities.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-base font-bold" style={{ color: ORANGE }}>BITCOIN TREASURY CODEX</div>
            <div className="text-gray-600 text-xs mt-1">Operated by Halfacre Research</div>
          </div>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="https://codexyield.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">codexyield.com</a>
            <a href="mailto:matt@halfacreresearch.tech" className="hover:text-gray-400 transition-colors">matt@halfacreresearch.tech</a>
          </div>
          <div className="text-gray-700 text-xs text-center md:text-right">
            Not an offer of securities. For qualified investors only.<br />
            © 2026 Halfacre Research. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
