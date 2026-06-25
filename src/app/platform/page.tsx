import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Platform — AudienceCloud — Collective Audience",
  description: "AudienceCloud — The open, modular OS connecting publishers and advertisers. Four integrated modules, zero cookies.",
};

function FeatureLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-ca-muted">
      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-ca-violet" />
      {text}
    </li>
  );
}

const MODULES = [
  { name: "AudienceDesk", href: "/platform/desk", desc: "Self-serve & managed trading desk for omnichannel media buying.", accent: "#7b3fff", icon: "🖥️" },
  { name: "AudienceAds", href: "/platform/ads", desc: "Conversational & high-attention ad format engine.", accent: "#5b8cff", icon: "💬" },
  { name: "AudienceConnect", href: "/platform/connect", desc: "Omnichannel distribution: display, video, social, email, push.", accent: "#07e2dc", icon: "🔗" },
  { name: "AudienceMatching", href: "/platform/matching", desc: "Cookieless identity matching via first-party signals and AI.", accent: "#7b3fff", icon: "🔒" },
];

export default function PlatformPage() {
  return (
    <main>

      {/* ══ 1. HERO ══ */}
      <section className="relative bg-ca-dark overflow-hidden py-28">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(123,63,255,0.16) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
          <div className="absolute bottom-[-5%] right-[10%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(91,140,255,0.12) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite 6s" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-violet/30 bg-ca-violet/8 text-xs font-semibold tracking-widest uppercase text-ca-violet mb-8">
            Platform
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.07] mb-6"
            style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            AudienceCloud —<br />The Open Web OS.
          </h1>
          <p className="text-ca-muted text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            A modular, open platform connecting publishers and advertisers. Four integrated modules. One unified data layer. Zero cookies required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-ca-violet text-white font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_30px_rgba(123,63,255,0.4)]">
              Request a demo <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a href="https://docs.collectiveaudience.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-ca-border bg-white/4 text-ca-text font-semibold hover:bg-white/8 transition-all">
              Read the docs →
            </a>
          </div>
        </div>
      </section>

      {/* ══ 2. FOUR MODULES ══ */}
      <section className="bg-ca-surface border-y border-ca-border py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-ca-muted mb-8">Four integrated modules</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MODULES.map(m => (
              <Link key={m.name} href={m.href}
                className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${m.accent}25`, background: `${m.accent}08` }}>
                <div className="text-2xl mb-3">{m.icon}</div>
                <div className="text-base font-bold mb-2" style={{ color: m.accent }}>{m.name}</div>
                <p className="text-xs text-ca-muted leading-relaxed mb-3">{m.desc}</p>
                <div className="text-xs font-semibold flex items-center gap-1 transition-all group-hover:gap-2" style={{ color: m.accent }}>Learn more <ArrowRight className="w-3.5 h-3.5" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. AUDIENCE DESK ══ */}
      <section className="bg-ca-dark py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 mb-6 rounded-full" style={{ background: "#7b3fff" }} />
            <span className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: "#7b3fff" }}>AudienceDesk</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Your media buying command center.
            </h2>
            <p className="text-ca-muted leading-relaxed mb-6">A self-serve and managed trading desk for omnichannel media buying across our publisher network — campaign setup, targeting, pacing, and reporting in one interface.</p>
            <ul className="space-y-3">
              {["Campaign builder with audience, format & budget controls","Real-time bidding across guaranteed and programmatic","Intelligent budget pacing & floor optimization","Live KPI reporting: impressions, attention, conversion","Self-serve or fully managed by our trading team","Full REST API for programmatic integration"].map(f => <FeatureLine key={f} text={f} />)}
            </ul>
          </div>
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "rgba(123,63,255,0.25)", background: "linear-gradient(145deg,rgba(123,63,255,0.08) 0%,#111420 60%)" }}>
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">AudienceDesk Dashboard</span></div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[["Active campaigns","12","#7b3fff"],["Total impressions","24.8M","#5b8cff"],["Avg. attention","34s","#07e2dc"],["Brand lift","+40%","#7b3fff"]].map(([l,v,c]) => (
                  <div key={l as string} className="rounded-xl border border-ca-border bg-ca-dark p-3">
                    <div className="text-[10px] text-ca-muted mb-1">{l as string}</div>
                    <div className="text-lg font-bold" style={{ color: c as string }}>{v as string}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-end gap-1 h-16">
                {[40,55,48,70,62,78,85,72,90,88,95,100].map((h,i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, background:`linear-gradient(to top,rgba(123,63,255,0.3),rgba(123,63,255,0.7))` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. AUDIENCE MATCHING ══ */}
      <section className="bg-ca-surface border-t border-ca-border py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="rounded-2xl border border-ca-border bg-ca-dark overflow-hidden">
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">AudienceMatching — Identity Resolution</span></div>
            <div className="p-6 space-y-3">
              {[
                { from: "Publisher first-party signal", to: "Audience profile", accent: "#5b8cff" },
                { from: "Article context (NLP)", to: "Intent score", accent: "#07e2dc" },
                { from: "Advertiser CRM", to: "Matched segment", accent: "#7b3fff" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1 text-xs text-ca-muted rounded-lg border border-ca-border bg-ca-surface px-3 py-2">{row.from}</div>
                  <div className="text-ca-muted">→</div>
                  <div className="flex-1 text-xs font-semibold rounded-lg px-3 py-2 border" style={{ color: row.accent, borderColor: `${row.accent}30`, background: `${row.accent}0a` }}>{row.to}</div>
                </div>
              ))}
              <div className="pt-3 border-t border-ca-border grid grid-cols-3 gap-2 text-center">
                {[["No cookies","✓"],["GDPR-safe","✓"],["Real-time","<50ms"]].map(([l,v]) => (
                  <div key={l as string} className="rounded-lg border border-ca-border bg-ca-surface p-2">
                    <div className="text-ca-mint font-bold text-sm">{v as string}</div>
                    <div className="text-[10px] text-ca-muted">{l as string}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="h-px w-12 mb-6 rounded-full" style={{ background: "#7b3fff" }} />
            <span className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: "#7b3fff" }}>AudienceMatching</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Identity without cookies.
            </h2>
            <p className="text-ca-muted leading-relaxed mb-6">AudienceMatching resolves identities across devices and contexts using consented first-party signals — no cookies, no fingerprinting, no compromises.</p>
            <ul className="space-y-3">
              {["Privacy-first: only consented first-party signals","AI-powered probabilistic lookalike modeling","Cross-device graph (mobile, desktop, CTV)","Data clean room for publisher-advertiser matching","IAB TCF 2.x compliant by design","Segment activation to AudienceDesk or any DSP"].map(f => <FeatureLine key={f} text={f} />)}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 5. AUDIENCE ADS + CONNECT ══ */}
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "AudienceAds", href: "/platform/ads", accent: "#5b8cff", desc: "The conversational ad format engine — powering every high-attention and interactive creative served across our network.", features: ["Q&A, polls, quizzes, dialogue formats","Scroll-triggered inline video","Sub-50ms serving latency","Pre-bid brand safety classification","Attention tracking per impression"] },
              { name: "AudienceConnect", href: "/platform/connect", accent: "#07e2dc", desc: "Omnichannel distribution hub — activate your audiences across display, video, social, email, and push from one platform.", features: ["Display & native programmatic","Video outstream & instream","Social sync (Meta, LinkedIn, TikTok)","Email partner network activation","Unified cross-channel reporting"] },
            ].map(mod => (
              <div key={mod.name} className="rounded-2xl border p-7" style={{ borderColor: `${mod.accent}25`, background: `${mod.accent}08` }}>
                <div className="h-px w-10 mb-5 rounded-full" style={{ background: mod.accent }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: mod.accent }}>{mod.name}</h3>
                <p className="text-sm text-ca-muted leading-relaxed mb-5">{mod.desc}</p>
                <ul className="space-y-2 mb-6">
                  {mod.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-ca-muted">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: mod.accent }} />{f}
                    </li>
                  ))}
                </ul>
                <Link href={mod.href} className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: mod.accent }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. OPEN API ══ */}
      <section className="bg-ca-surface border-t border-ca-border py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl font-bold text-ca-text mb-3">Open by design. API-first architecture.</h2>
          <p className="text-ca-muted max-w-xl mx-auto mb-8">AudienceCloud is fully accessible via REST and GraphQL APIs — integrate it with your existing stack, CMS, DMP, or DSP.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["REST API","GraphQL","Webhooks","OpenRTB 2.x","IAB TCF 2.x","Prebid.js","Google AdManager","Xandr"].map(t => (
              <div key={t} className="px-4 py-2 rounded-xl border border-ca-border bg-ca-dark text-xs font-mono text-ca-muted">{t}</div>
            ))}
          </div>
          <a href="https://docs.collectiveaudience.co" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ca-violet text-white font-semibold text-sm hover:brightness-110 transition-all">
            Read the documentation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
