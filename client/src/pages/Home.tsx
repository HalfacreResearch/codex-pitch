/* =============================================================
   DESIGN: Dark Luxury — Investor Pitch for CodexYield
   pitch.codexyield.com — Private placement memorandum style
   Sections: Cover → Opportunity → Strategy → Intelligence
             → Performance → Terms → Founder → Apply
   Live data: BTC price + factor count from tradinghq API
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { useLiveStats } from "@/hooks/useLiveStats";
import {
  ArrowRight, Shield, TrendingUp, BarChart3, Lock,
  ChevronDown, Brain, Activity, Target, DollarSign,
  Zap, CheckCircle,
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

const PERF_DATA = [
  { coin: "SOL/BTC", factor: "RSI 14", btcReturn: "3.57%", stop: "Trail L", years: "2020–2026" },
  { coin: "SOL/BTC", factor: "Change 7D", btcReturn: "3.55%", stop: "Trail L", years: "2020–2026" },
  { coin: "ETH/BTC", factor: "RSI 14", btcReturn: "2.84%", stop: "Trail M", years: "2017–2026" },
  { coin: "XRP/BTC", factor: "Momentum 30D", btcReturn: "2.61%", stop: "Trail L", years: "2018–2026" },
  { coin: "LINK/BTC", factor: "RSI 14", btcReturn: "2.43%", stop: "Trail M", years: "2019–2026" },
];

export default function Home() {
  const stats = useLiveStats();
  const { ref: statsRef, inView: statsInView } = useInView();
  const factorCount = useCountUp(stats.totalFactors, 1600, statsInView);
  const [formData, setFormData] = useState({ name: "", email: "", investable: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0A", color: "#F5F0E8" }}>

      {/* ── TOP BAR ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 border-b"
        style={{ background: "rgba(10,10,10,0.96)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-base font-bold tracking-tight" style={{ color: ORANGE }}>CODEXYIELD</span>
          <span className="text-gray-600 text-sm hidden md:block">|</span>
          <span className="text-gray-500 text-xs uppercase tracking-widest hidden md:block">Investor Pitch</span>
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
            <span className="text-gray-400 text-xs">{stats.factorsSignaling}/{stats.totalFactors} factors live</span>
          </div>
        </div>
      </div>

      {/* ── COVER ── */}
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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tight">
            <span style={{ color: ORANGE }}>5%+</span><br />
            <span className="text-white">BTC / Year</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed">
            Bitcoin-denominated alpha from systematic altcoin rotation.
          </p>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-12">
            Not USD appreciation. Pure BTC stack growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="px-8 py-4 rounded font-bold text-black text-sm uppercase tracking-widest transition-all hover:opacity-90"
              style={{ background: ORANGE }}
              onClick={(e) => { e.preventDefault(); document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Request Access <ArrowRight className="inline-block ml-1 w-4 h-4" />
            </a>
            <a
              href="#opportunity"
              className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest border transition-all hover:bg-white/5"
              style={{ color: ORANGE, borderColor: ORANGE_BORDER }}
              onClick={(e) => { e.preventDefault(); document.querySelector("#opportunity")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              View the Pitch
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-8">CodexYield · Halfacre Research · $100K Minimum</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </section>

      {/* ── KEY STATS ── */}
      <section ref={statsRef} className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: statsInView ? `${factorCount}` : "—", label: "Quantitative Factors", sub: "Backtested 2015–2026" },
            { value: "7", label: "ML Models", sub: "XGBoost, daily retrain" },
            { value: "3.57%", label: "Top Factor BTC/yr", sub: "SOL/BTC RSI 14, Trail L" },
            { value: "4,100+", label: "Training Rows", sub: "Walk-forward validated" },
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

      {/* ── THE OPPORTUNITY ── */}
      <section id="opportunity" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Opportunity"
            title="Bitcoin Grows. We Grow It Faster."
            sub="Most Bitcoin holders earn only from USD appreciation. CodexYield earns additional BTC by rotating into altcoins at algorithmically optimal moments — then rotating back."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" style={{ color: ORANGE }} />,
                title: "The Gap",
                body: "Bitcoin has returned 27,248% over 10 years. But passive holders leave BTC alpha on the table. Systematic altcoin rotation generates 5%+ additional BTC per year.",
              },
              {
                icon: <Target className="w-6 h-6" style={{ color: ORANGE }} />,
                title: "The Method",
                body: "111 quantitative factors screen ETH, SOL, XRP, and LINK against BTC daily. When 3+ high-conviction factors align, we rotate. When they diverge, we hold BTC.",
              },
              {
                icon: <Shield className="w-6 h-6" style={{ color: ORANGE }} />,
                title: "The Discipline",
                body: "No leverage. No derivatives. No speculation. All commodities. Trailing stops protect every position. Algorithmic-assisted — Matthew makes the final call.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-lg border"
                style={{ background: "#111", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: ORANGE }}>{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE STRATEGY ── */}
      <section id="strategy" className="py-24 px-6 border-t border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Strategy"
            title="Two Engines. One Goal."
            sub="Every position is designed to return more BTC than it started with."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: "01", title: "DCA Optimization",
                body: "The same 111-factor engine identifies optimal USD → BTC entry points. Instead of fixed-interval DCA, clients buy at algorithmically timed moments — accumulating more BTC per dollar deployed.",
                bullets: ["Reduces average cost basis", "Avoids buying into local tops", "Signals from on-chain, macro, and technical data"],
              },
              {
                num: "02", title: "Altcoin Rotation",
                body: "When high-conviction signals align across ETH, SOL, XRP, or LINK, capital rotates from BTC into the target altcoin. When the altcoin outperforms, it converts back to more BTC than the rotation started with.",
                bullets: ["Tranche entries: T1 at signal, T2/T3 on pullbacks", "Trailing stops: 3%, 5%, or 10% by conviction", "All sells manual — Matthew's final call"],
              },
            ].map((s) => (
              <div key={s.num} className="p-8 rounded-lg border"
                style={{ background: "#111", borderColor: ORANGE_BORDER }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Strategy {s.num}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{s.body}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE INTELLIGENCE ── */}
      <section id="intelligence" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Intelligence"
            title="111 Factors. 7 Models. Daily."
            sub="The signal engine runs every day at 2 AM UTC. By market open, every factor is scored, every model retrained, every recommendation live."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: <Brain className="w-5 h-5" />, title: "7 XGBoost Models",
                body: "BTC direction (7d/30d), on-chain cycle, macro regime, rotation signal, DCA intensity, DCA timing",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />, title: "111 Factors",
                body: "Technical, on-chain, macro, and sentiment — all backtested against 4,100+ days of real data",
              },
              {
                icon: <Activity className="w-5 h-5" />, title: "Walk-Forward Validation",
                body: "Models validated on out-of-sample data only. No look-ahead bias. Real accuracy metrics.",
              },
              {
                icon: <Zap className="w-5 h-5" />, title: "Forward Tracking",
                body: "Every signal logged. 7/14/30-day outcomes resolve automatically to measure live accuracy.",
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
          <div className="p-5 rounded-lg border text-center"
            style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
            <p className="text-sm text-gray-300">
              Live signal engine:{" "}
              <a href="https://tradinghq.codexyield.com" target="_blank" rel="noopener noreferrer"
                className="font-semibold hover:underline" style={{ color: ORANGE }}>
                tradinghq.codexyield.com
              </a>
              {" "}— {stats.factorsSignaling}/{stats.totalFactors} factors signaling today
            </p>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE ── */}
      <section id="performance" className="py-24 px-6 border-t border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Backtested Performance"
            title="Top Factors by BTC Return"
            sub="1.6% round-trip cost applied (0.5% entry + 0.5% exit + 0.3% slippage per side). Trailing stops applied."
          />
          <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  {["Pair", "Factor", "BTC Return/yr", "Stop Type", "Period"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-bold uppercase tracking-widest"
                      style={{ color: ORANGE }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PERF_DATA.map((row, i) => (
                  <tr key={i} style={{
                    background: i % 2 === 0 ? "#0A0A0A" : "#0D0D0D",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <td className="px-5 py-4 font-mono font-semibold text-white">{row.coin}</td>
                    <td className="px-5 py-4 text-gray-300">{row.factor}</td>
                    <td className="px-5 py-4 font-mono font-bold" style={{ color: ORANGE }}>+{row.btcReturn}</td>
                    <td className="px-5 py-4 text-gray-400">{row.stop}</td>
                    <td className="px-5 py-4 text-gray-500">{row.years}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-xs mt-4 text-center">
            Past performance does not guarantee future results. All figures are backtested. Forward performance tracking began April 2026.
          </p>
        </div>
      </section>

      {/* ── TERMS ── */}
      <section id="terms" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Terms" title="Simple. Aligned. Transparent." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <DollarSign className="w-6 h-6" />, title: "$100,000", label: "Minimum Investment",
                body: "Institutional-grade strategy requires meaningful capital to execute properly across 4 altcoin pairs.",
              },
              {
                icon: <Activity className="w-6 h-6" />, title: "15 bps", label: "CodexYield Fee",
                body: "0.15% per trade. SFOX charges 25 bps total — CodexYield earns 15 bps, SFOX retains 10 bps. No management fee. No performance fee.",
              },
              {
                icon: <Lock className="w-6 h-6" />, title: "SAFE Custody", label: "Qualified Custodian",
                body: "Assets held with SAFE Qualified Custodian Trust. 30+ liquidity venues via SFOX. No counterparty risk to CodexYield.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-lg border text-center"
                style={{ background: "#111", borderColor: ORANGE_BORDER }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: ORANGE_DIM, color: ORANGE }}>{card.icon}</div>
                <div className="text-2xl font-bold mb-1" style={{ color: ORANGE }}>{card.title}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{card.label}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section id="team" className="py-24 px-6 border-t border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="The Team" title="Matthew Halfacre" />
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img
                src={FOUNDER_IMG}
                alt="Matthew Halfacre"
                className="w-48 h-48 rounded-full object-cover border-2"
                style={{ borderColor: ORANGE_BORDER }}
              />
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
                CEO · Halfacre Research · CodexYield
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                24 years of investment experience across traditional and digital asset markets.
                69-year family legacy in financial markets. Matthew built the CodexYield signal
                engine from the ground up — 111 factors, 7 ML models, and a backtesting
                methodology that accounts for real-world trading costs.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                The system is "algorithmic-assisted" — the engine generates signals, but Matthew
                makes every final trade decision. This combines the objectivity of quantitative
                analysis with the judgment of an experienced portfolio manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY ── */}
      <section id="apply" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="Request Access"
            title="Apply for Consideration"
            sub="CodexYield accepts qualified investors on a selective basis. Complete the form and Matthew will respond within 48 hours."
          />
          {submitted ? (
            <div className="p-8 rounded-lg border text-center"
              style={{ background: ORANGE_DIM, borderColor: ORANGE_BORDER }}>
              <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: ORANGE }} />
              <h3 className="text-xl font-bold text-white mb-2">Application Received</h3>
              <p className="text-gray-400">Matthew will review your application and respond within 48 hours.</p>
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email *</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded border text-white text-sm outline-none transition-colors"
                    style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.12)" }}
                    placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Investable Capital *</label>
                <select required value={formData.investable}
                  onChange={(e) => setFormData({ ...formData, investable: e.target.value })}
                  className="w-full px-4 py-3 rounded border text-white text-sm outline-none transition-colors"
                  style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.12)" }}>
                  <option value="">Select range</option>
                  <option value="100k-250k">$100K – $250K</option>
                  <option value="250k-500k">$250K – $500K</option>
                  <option value="500k-1m">$500K – $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message (Optional)</label>
                <textarea rows={4} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded border text-white text-sm outline-none transition-colors resize-none"
                  style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.12)" }}
                  placeholder="Tell us about your investment background or ask a question..." />
              </div>
              <button type="submit"
                className="w-full py-4 rounded font-bold text-black text-sm uppercase tracking-widest transition-all hover:opacity-90"
                style={{ background: ORANGE }}>
                Submit Application <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
              <p className="text-gray-600 text-xs text-center">
                This is not an offer to sell securities. For qualified investors only.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="text-lg font-bold mb-2" style={{ color: ORANGE }}>CODEXYIELD</div>
        <p className="text-gray-600 text-xs mb-4">Halfacre Research · Bitcoin Treasury Management</p>
        <div className="flex justify-center gap-6 text-xs text-gray-600">
          <a href="https://codexyield.com" className="hover:text-gray-400 transition-colors">codexyield.com</a>
          <a href="https://client.codexyield.com" className="hover:text-gray-400 transition-colors">Client Portal</a>
          <a href="https://tradinghq.codexyield.com" className="hover:text-gray-400 transition-colors">Signal Engine</a>
        </div>
        <p className="text-gray-700 text-xs mt-6 max-w-xl mx-auto">
          This presentation is for informational purposes only and does not constitute an offer or solicitation
          to buy or sell any security. Past performance is not indicative of future results.
        </p>
      </footer>
    </div>
  );
}
