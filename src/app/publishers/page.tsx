import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Publishers — Collective Audience",
  description: "Maximize yield, collect first-party data, and engage readers with high-attention editorial formats.",
};

/* ─── Reusable mini components ─── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold gradient-text-blue-mint">{value}</span>
      <span className="text-sm text-ca-muted mt-1">{label}</span>
    </div>
  );
}

function FeatureLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-ca-muted">
      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-ca-blue" />
      {text}
    </li>
  );
}

/* ─── Page ─── */
export default function PublishersPage() {
  return (
    <main>

      {/* ══ 1. HERO ══ */}
      <section className="relative bg-ca-dark overflow-hidden py-28">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[5%] w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(91,140,255,0.16) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
          <div className="absolute bottom-[-5%] right-[10%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(7,226,220,0.1) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite 5s" }} />
        </div>
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-25"
          style={{ backgroundImage: "linear-gradient(to right,#1e2236 1px,transparent 1px),linear-gradient(to bottom,#1e2236 1px,transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,#000 50%,transparent 100%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-8">
            For Publishers
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.07] mb-6"
            style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            A new model for publishers.
          </h1>
          <p className="text-ca-muted text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Sell premium inventory, collect first-party audience data, and engage readers with editorial formats that generate real attention — all from one open platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-ca-blue text-white font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_30px_rgba(91,140,255,0.4)]">
              Become a partner <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/gallery" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-ca-border bg-white/4 text-ca-text font-semibold hover:bg-white/8 transition-all">
              See ad formats
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <Stat value="+40%" label="Brand lift on our formats" />
            <Stat value="34s" label="Avg. attention per ad unit" />
            <Stat value=">1%" label="Interaction rate" />
            <Stat value="200+" label="Publisher partners" />
          </div>
        </div>
      </section>

      {/* ══ 2. THREE PILLARS ══ */}
      <section className="bg-ca-surface border-y border-ca-border py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "💰", title: "Sell", subtitle: "Monetize every impression", desc: "Header bidding, direct deals, programmatic — one unified platform to maximise your ad revenue without complexity.", color: "#5b8cff" },
              { icon: "📊", title: "Collect", subtitle: "Own your audience data", desc: "Build a first-party CRM/DMP from every article read. Cookieless, GDPR-compliant, 100% owned by you.", color: "#07e2dc" },
              { icon: "💬", title: "Engage", subtitle: "Activate your readers", desc: "Inline conversational and editorial formats that turn passive readers into engaged audiences — without disrupting editorial.", color: "#7b3fff" },
            ].map(p => (
              <div key={p.title} className="rounded-2xl border p-7 text-center" style={{ borderColor: `${p.color}22`, background: `${p.color}08` }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="text-2xl font-bold mb-1" style={{ color: p.color }}>{p.title}</div>
                <div className="text-sm font-semibold text-ca-text mb-3">{p.subtitle}</div>
                <p className="text-sm text-ca-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. MONETIZATION (split) ══ */}
      <section className="bg-ca-dark py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 bg-ca-blue mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-blue block mb-3">Sales teams</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              The simplest ad platform for publishers.
            </h2>
            <p className="text-ca-muted leading-relaxed mb-6">One platform to manage header bidding, direct deals, and programmatic — with real-time floor pricing and intelligent backfill. No black boxes.</p>
            <ul className="space-y-3 mb-8">
              {["Header bidding with 30+ SSP connections","Dynamic floor pricing & yield optimization","Direct deal management (guaranteed + preferred)","Real-time eCPM, RPM & revenue reporting","Cookie-free, privacy-first buying","Semantic forecasting for demand planning"].map(f => <FeatureLine key={f} text={f} />)}
            </ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">
              <Stat value="+28%" label="avg. eCPM uplift" />
              <Stat value="94%" label="fill rate" />
              <Stat value="<50ms" label="latency" />
            </div>
          </div>
          {/* Visual */}
          <div className="rounded-2xl border border-ca-border bg-ca-surface overflow-hidden">
            <div className="px-5 py-3 border-b border-ca-border flex items-center gap-3">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/40" /><div className="w-3 h-3 rounded-full bg-yellow-500/40" /><div className="w-3 h-3 rounded-full bg-green-500/40" /></div>
              <span className="text-xs text-ca-muted">Publisher Revenue Dashboard</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div><div className="text-xs text-ca-muted mb-1">Today's revenue</div><div className="text-3xl font-bold text-ca-blue">€4,821</div></div>
                <div className="text-xs px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 font-semibold">+28% vs last month</div>
              </div>
              <div className="flex items-end gap-1.5 h-24 mb-4">
                {[55,65,48,78,62,85,72,90,80,95,88,100].map((h,i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, background:`linear-gradient(to top,rgba(91,140,255,0.3),rgba(91,140,255,0.7))`, borderTop:"1px solid rgba(91,140,255,0.5)" }} />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[["eCPM","€3.42","↑ 28%"],["Fill Rate","94.2%","↑ 2.1%"],["RPM","€3.22","↑ 24%"]].map(([l,v,c]) => (
                  <div key={l as string} className="rounded-xl border border-ca-border bg-ca-dark p-3">
                    <div className="text-[10px] text-ca-muted mb-1">{l as string}</div>
                    <div className="text-base font-bold text-ca-blue">{v as string}</div>
                    <div className="text-[10px] text-green-400">{c as string}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. DATA & CRM (reversed) ══ */}
      <section className="bg-ca-surface border-t border-ca-border py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual first on desktop */}
          <div className="rounded-2xl border border-ca-border bg-ca-dark overflow-hidden lg:order-1 order-2">
            <div className="px-5 py-3 border-b border-ca-border flex items-center gap-3">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/40" /><div className="w-3 h-3 rounded-full bg-yellow-500/40" /><div className="w-3 h-3 rounded-full bg-green-500/40" /></div>
              <span className="text-xs text-ca-muted">Audience Intelligence</span>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Engaged readers", value: "1.2M", color: "#07e2dc", pct: 82 },
                { label: "Active subscribers", value: "340k", color: "#5b8cff", pct: 55 },
                { label: "High-intent profiles", value: "89k", color: "#7b3fff", pct: 28 },
              ].map(s => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-ca-muted">{s.label}</span>
                    <span className="text-sm font-bold" style={{ color: s.color }}>{s.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-ca-border overflow-hidden">
                    <div className="h-full rounded-full" style={{ width:`${s.pct}%`, background: s.color }} />
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t border-ca-border grid grid-cols-2 gap-3">
                {[["GDPR compliant","✓"],["Cookieless","✓"],["First-party only","✓"],["Data ownership","100%"]].map(([l,v]) => (
                  <div key={l as string} className="flex items-center gap-2 text-xs text-ca-muted">
                    <span className="text-ca-mint font-bold">{v as string}</span>{l as string}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:order-2 order-1">
            <div className="h-px w-12 bg-ca-mint mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-mint block mb-3">Marketing teams</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Own your audience. No intermediaries.
            </h2>
            <p className="text-ca-muted leading-relaxed mb-6">Every reader who interacts with your content enriches your first-party CRM. Build real audience intelligence without relying on third-party data brokers.</p>
            <ul className="space-y-3 mb-8">
              {["CRM & DMP built directly into editorial flow","Cookieless audience profiles via AudienceMatching","Behavioral, contextual & declared data collection","GDPR-compliant consent management (Didomi/OneTrust)","Export segments to any DSP or direct deal","Data clean room for advertiser matching"].map(f => <FeatureLine key={f} text={f} />)}
            </ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">
              <Stat value="100%" label="first-party data" />
              <Stat value="0" label="cookie dependency" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. EDITORIAL (split) ══ */}
      <section className="bg-ca-dark py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 bg-ca-violet mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-violet block mb-3">Editorial teams</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Formats your readers actually engage with.
            </h2>
            <p className="text-ca-muted leading-relaxed mb-6">Inline conversational and interactive formats deployed directly within your articles. They generate 34 seconds of average attention — and never interrupt the reading experience.</p>
            <ul className="space-y-3 mb-8">
              {["Q&A, poll, quiz & conversational formats","Scroll-triggered inline video","Before/after sliders & interactive galleries","Drag-and-drop inline editor — no dev needed","Zero impact on Core Web Vitals","Fully responsive across all devices"].map(f => <FeatureLine key={f} text={f} />)}
            </ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">
              <Stat value="34s" label="avg. time on format" />
              <Stat value=">1%" label="interaction rate" />
            </div>
          </div>
          {/* Format preview */}
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "rgba(123,63,255,0.25)", background: "linear-gradient(145deg,rgba(123,63,255,0.08) 0%,#111420 60%)" }}>
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">lemonde.fr · Article preview</span></div>
            <div className="p-5">
              <div className="h-4 rounded bg-ca-border/40 w-3/4 mb-2" />
              <div className="h-3 rounded bg-ca-border/25 w-full mb-1.5" />
              <div className="h-3 rounded bg-ca-border/25 w-5/6 mb-5" />
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(123,63,255,0.3)", background: "rgba(123,63,255,0.08)" }}>
                <div className="absolute h-[2px] left-0 right-0 top-0" style={{ background: "linear-gradient(to right,transparent,#7b3fff,transparent)" }} />
                <div className="p-4">
                  <div className="text-[10px] uppercase tracking-widest text-ca-violet mb-2 font-semibold">Sponsored · Conversational Format</div>
                  <div className="text-sm font-bold text-ca-text mb-1">Quelle voiture électrique vous correspond ?</div>
                  <div className="text-xs text-ca-muted mb-3">Répondez à 3 questions pour découvrir votre modèle idéal</div>
                  <div className="flex gap-2">
                    {["Citadine","SUV","Berline"].map(o => (
                      <button key={o} className="text-xs px-3 py-1.5 rounded-lg border border-ca-violet/40 text-ca-violet hover:bg-ca-violet/10 transition-colors">{o}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-3 rounded bg-ca-border/20 w-full mt-4 mb-1.5" />
              <div className="h-3 rounded bg-ca-border/20 w-3/4" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. FEATURE GRID ══ */}
      <section className="bg-ca-surface border-t border-ca-border py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-xl font-bold text-center text-ca-text mb-10">Everything publishers need, in one platform</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              ["Header bidding","Unified SSP auction"],["Direct deals","Guaranteed + preferred"],["Data clean room","Privacy-safe matching"],["Real-time analytics","Live revenue dashboard"],
              ["Cookieless CRM","First-party profiles"],["GDPR compliance","Didomi / OneTrust"],["Conversational formats","Editorial engagement"],["Inline editor","No dev required"],
              ["Semantic targeting","Contextual forecasting"],["Page speed","Zero CWV impact"],["Multi-site broadcast","Central management"],["API access","Full integration"],
            ].map(([title, sub]) => (
              <div key={title as string} className="rounded-xl border border-ca-border bg-ca-dark p-4">
                <div className="text-sm font-semibold text-ca-text mb-0.5">{title as string}</div>
                <div className="text-xs text-ca-muted">{sub as string}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. TESTIMONIALS ══ */}
      <section className="bg-ca-dark py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-xl font-bold text-center text-ca-text mb-10">What our publisher partners say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { quote: "Collective Audience helped us unlock a new revenue stream while keeping our editorial identity intact. The conversational formats resonate with our readers.", author: "Digital Director", company: "Le Monde" },
              { quote: "The first-party data layer changed how we think about audience monetization. We now own real profiles, not just anonymous cookies.", author: "Head of Ad Tech", company: "Les Échos" },
              { quote: "Simple to integrate, powerful results. Our eCPM improved +31% in the first quarter and fill rates have been consistently above 90%.", author: "CTO", company: "HuffPost France" },
            ].map(t => (
              <div key={t.company} className="rounded-2xl border border-ca-border bg-ca-surface p-6">
                <p className="text-sm text-ca-muted leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div>
                  <div className="text-xs font-semibold text-ca-text">{t.author}</div>
                  <div className="text-xs text-ca-blue">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
