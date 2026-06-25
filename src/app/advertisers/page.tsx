import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Advertisers — Collective Audience",
  description: "High-performance advertising on 200+ premium publishers. Cookieless targeting, high-attention formats, real brand lift.",
};

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
      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-ca-mint" />
      {text}
    </li>
  );
}

const BRANDS = ["Audi","BMW","L'Oréal","Carrefour","Nestlé","Samsung","Coca-Cola","Orange","SFR","BNP Paribas","Renault","LVMH","Sanofi","Total","Boursorama","Fnac"];

export default function AdvertisersPage() {
  return (
    <main>

      {/* ══ 1. HERO ══ */}
      <section className="relative bg-ca-dark overflow-hidden py-28">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[5%] w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(7,226,220,0.14) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
          <div className="absolute bottom-[-5%] left-[10%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(91,140,255,0.1) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite 6s" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-mint/30 bg-ca-mint/8 text-xs font-semibold tracking-widest uppercase text-ca-mint mb-8">
            For Advertisers
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.07] mb-6"
            style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            High performance advertising platform.
          </h1>
          <p className="text-ca-muted text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Reach engaged readers on 200+ premium publishers with high-attention formats, cookieless targeting, and measurable brand outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-ca-mint text-[#0a0c14] font-semibold hover:brightness-105 transition-all hover:shadow-[0_0_30px_rgba(7,226,220,0.35)]">
              Contact our sales team <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/gallery" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-ca-border bg-white/4 text-ca-text font-semibold hover:bg-white/8 transition-all">
              Explore formats →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 2. BRAND LOGOS ══ */}
      <section className="bg-ca-surface border-y border-ca-border py-12 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-ca-muted mb-8">Trusted by 150+ brands</p>
          <div className="flex flex-wrap justify-center gap-3">
            {BRANDS.map(b => (
              <div key={b} className="px-5 py-2 rounded-xl border border-ca-border bg-ca-dark text-sm font-medium text-ca-muted">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. OLD vs CA COMPARISON ══ */}
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14"
            style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Why standard advertising isn't enough.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Old standard */}
            <div className="rounded-2xl border border-ca-border bg-ca-surface p-7">
              <div className="text-sm font-semibold text-ca-muted uppercase tracking-widest mb-5">Standard display advertising</div>
              <div className="space-y-4">
                {[["CTR","0.1%"],["Time on format","2 seconds"],["Brand attribution","14%"],["Data capture","None"],["Cookie dependency","Required"],["Publisher quality","MFA & resellers"]].map(([l,v]) => (
                  <div key={l as string} className="flex items-center justify-between py-2 border-b border-ca-border last:border-0">
                    <span className="text-sm text-ca-muted">{l as string}</span>
                    <span className="text-sm font-semibold text-ca-muted/60">{v as string}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* CA */}
            <div className="rounded-2xl border p-7 relative overflow-hidden" style={{ borderColor: "rgba(7,226,220,0.3)", background: "linear-gradient(145deg,rgba(7,226,220,0.08) 0%,#111420 60%)" }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(to right,transparent,#07e2dc,transparent)" }} />
              <div className="text-sm font-semibold text-ca-mint uppercase tracking-widest mb-5">Collective Audience</div>
              <div className="space-y-4">
                {[[">1%","Interaction rate","#07e2dc"],["34 seconds","Avg. time on format","#5b8cff"],["+40%","Brand lift","#07e2dc"],["First-party","Rich audience data","#7b3fff"],["Cookieless","No cookie required","#07e2dc"],["Premium only","200+ vetted publishers","#5b8cff"]].map(([v,l,c]) => (
                  <div key={l as string} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: "rgba(7,226,220,0.1)" }}>
                    <span className="text-sm text-ca-muted">{l as string}</span>
                    <span className="text-sm font-bold" style={{ color: c as string }}>{v as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 big KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-8 rounded-2xl border border-ca-border bg-ca-surface">
            <Stat value="+40%" label="Brand lift" />
            <Stat value="34s" label="Time on format" />
            <Stat value=">1%" label="Interaction rate" />
            <Stat value="3×" label="Brand attribution" />
          </div>
        </div>
      </section>

      {/* ══ 4. SELF-SERVE PLATFORM ══ */}
      <section className="bg-ca-surface border-t border-ca-border py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="rounded-2xl border border-ca-border bg-ca-dark overflow-hidden">
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">AudienceDesk — Campaign Manager</span></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div><div className="text-xs text-ca-muted mb-1">Campaign: BMW M Series — FR</div><div className="text-xl font-bold text-ca-mint">Active</div></div>
                <div className="text-xs px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">Live</div>
              </div>
              {[["Brand Lift","78%","#07e2dc"],["Attention Score","92%","#5b8cff"],["Interaction Rate","1.4%","#7b3fff"]].map(([l,v,c]) => (
                <div key={l as string} className="mb-3">
                  <div className="flex justify-between mb-1"><span className="text-xs text-ca-muted">{l as string}</span><span className="text-xs font-bold" style={{ color: c as string }}>{v as string}</span></div>
                  <div className="h-1.5 rounded-full bg-ca-border overflow-hidden"><div className="h-full rounded-full" style={{ width: v as string, background: c as string }} /></div>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-ca-border">
                {[["Impressions","2.4M"],["Spend","€12,400"],["eCPA","€5.17"]].map(([l,v]) => (
                  <div key={l as string} className="rounded-lg bg-ca-surface border border-ca-border p-2 text-center"><div className="text-[10px] text-ca-muted">{l as string}</div><div className="text-sm font-bold text-ca-text">{v as string}</div></div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="h-px w-12 bg-ca-mint mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-mint block mb-3">Self-serve platform</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Launch in minutes. Optimize in real time.
            </h2>
            <p className="text-ca-muted leading-relaxed mb-6">AudienceDesk gives you full control over your campaigns — or let our managed service team run them for you.</p>
            <ul className="space-y-3 mb-8">
              {["Campaign builder with audience & format controls","Real-time bidding across all 200+ publishers","Intelligent budget pacing & floor pricing","Live KPI dashboard (impressions, attention, lift)","Self-serve or fully managed service","API access for programmatic integration"].map(f => <FeatureLine key={f} text={f} />)}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 5. COOKIELESS TARGETING ══ */}
      <section className="bg-ca-dark py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 bg-ca-blue mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-blue block mb-3">Cookieless targeting</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Precise targeting without cookies.
            </h2>
            <p className="text-ca-muted leading-relaxed mb-6">Our semantic AI reads every article in real time to deliver your message at the exact right moment — no user tracking required.</p>
            <ul className="space-y-3 mb-8">
              {["NLP-based semantic & contextual targeting","AudienceMatching cookieless identity resolution","4 billion+ contextual signals processed per day","Brand safety classification in <50ms","IAB category targeting + custom keyword lists","Geo, device, time & daypart targeting"].map(f => <FeatureLine key={f} text={f} />)}
            </ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">
              <Stat value="0" label="cookies required" />
              <Stat value="4B+" label="signals/day" />
            </div>
          </div>

          <div className="rounded-2xl border border-ca-border bg-ca-surface overflow-hidden">
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">Semantic Targeting Engine</span></div>
            <div className="p-6 space-y-3">
              {[
                { label: "Article topic", value: "Electric vehicles — Test drive review", score: 98, color: "#5b8cff" },
                { label: "Brand safety", value: "Premium / Safe", score: 100, color: "#07e2dc" },
                { label: "Context match", value: "Automotive — High intent", score: 94, color: "#7b3fff" },
                { label: "Attention prediction", value: "Very high (>40s)", score: 88, color: "#5b8cff" },
              ].map(s => (
                <div key={s.label} className="rounded-xl border border-ca-border bg-ca-dark p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-ca-muted">{s.label}</span>
                    <span className="text-xs font-bold" style={{ color: s.color }}>{s.score}%</span>
                  </div>
                  <div className="text-xs font-semibold text-ca-text mb-2">{s.value}</div>
                  <div className="h-1 rounded-full bg-ca-border overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${s.score}%`, background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. FORMATS ══ */}
      <section className="bg-ca-surface border-t border-ca-border py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-ca-violet block mb-3">High-attention formats</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Formats readers actually engage with.
          </h2>
          <p className="text-ca-muted mb-10 max-w-xl mx-auto">From conversational Q&A to immersive video — discover all our interactive ad formats with live demos and real KPIs.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[["Conversational","Q&A & dialogue formats","#5b8cff"],["Focus Vidéo","Scroll-triggered video","#07e2dc"],["Immersif","Full-immersion formats","#7b3fff"],["Slider","Before/after comparison","#5b8cff"],["Branded Content","Native editorial integration","#07e2dc"],["Rich Media","Expandable & animated","#7b3fff"]].map(([n,d,c]) => (
              <Link key={n as string} href="/gallery"
                className="group rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: `${c as string}22`, background: `${c as string}08` }}>
                <div className="text-sm font-bold mb-1" style={{ color: c as string }}>{n as string}</div>
                <div className="text-xs text-ca-muted">{d as string}</div>
              </Link>
            ))}
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ca-violet text-white font-semibold text-sm hover:brightness-110 transition-all">
            See all formats with live demos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══ 7. TESTIMONIALS ══ */}
      <section className="bg-ca-dark py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-xl font-bold text-center text-ca-text mb-10">What agency partners say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { quote: "The interactive formats from Collective Audience consistently outperform our standard display spend — both on attention and brand lift metrics.", author: "Head of Programmatic", company: "Publicis Media" },
              { quote: "We appreciate the cookieless approach. In a post-cookie world, being able to target by context and first-party signals is a real competitive advantage.", author: "Investment Director", company: "GroupM" },
              { quote: "The reporting is transparent and the team is responsive. Brand lift studies confirmed what we expected: significantly higher recall than traditional display.", author: "Media Manager", company: "Starcom" },
            ].map(t => (
              <div key={t.company} className="rounded-2xl border border-ca-border bg-ca-surface p-6">
                <p className="text-sm text-ca-muted leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div>
                  <div className="text-xs font-semibold text-ca-text">{t.author}</div>
                  <div className="text-xs text-ca-mint">{t.company}</div>
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
