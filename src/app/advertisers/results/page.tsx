import type { Metadata } from "next";
import { PillarHero } from "@/components/sections/PillarHero";
import { CTABanner } from "@/components/sections/CTABanner";
export const metadata: Metadata = { title: "Results & Case Studies — Advertisers — Collective Audience" };
const CASES = [
  { brand: "Audi", sector: "Automotive", metric: "+52%", metricLabel: "brand recall", kpis: ["+52% brand recall", "38s avg. attention", "1.4% interaction rate"], accent: "#5b8cff" },
  { brand: "L'Oréal", sector: "Beauty", metric: "+44%", metricLabel: "purchase intent", kpis: ["+44% purchase intent", "+38% brand lift", "92% viewability"], accent: "#07e2dc" },
  { brand: "Carrefour", sector: "Retail", metric: "3.2×", metricLabel: "ROAS", kpis: ["3.2× ROAS", "+29% foot traffic", "150k+ interactions"], accent: "#7b3fff" },
  { brand: "Samsung", sector: "Tech", metric: "+61%", metricLabel: "consideration", kpis: ["+61% consideration", "42s avg. attention", "Top 1% attention score"], accent: "#5b8cff" },
  { brand: "Boursorama", sector: "Fintech", metric: "+35%", metricLabel: "sign-up intent", kpis: ["+35% sign-up intent", "2.1% click rate", "0 cookie dependency"], accent: "#07e2dc" },
  { brand: "Nestlé", sector: "FMCG", metric: "+41%", metricLabel: "brand lift", kpis: ["+41% brand lift", "3× attribution", "Deployed in 5 markets"], accent: "#7b3fff" },
];
export default function Page() {
  return (
    <main>
      <PillarHero eyebrow="Advertisers · Results" headline="Real campaigns. Proven outcomes." subtitle="From automotive to fintech, Collective Audience consistently delivers above-benchmark performance across brand and performance metrics." accent="#07e2dc" stats={[{ value: "+40%", label: "avg. brand lift" }, { value: "3×", label: "avg. attribution" }, { value: "150+", label: "brand campaigns" }]} />
      <section className="bg-ca-dark py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASES.map((c) => (
              <div key={c.brand} className="relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${c.accent}22`, background: `linear-gradient(145deg,${c.accent}0a 0%,#111420 55%)` }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${c.accent} 40%,${c.accent} 60%,transparent 95%)` }} />
                <div className="flex items-center justify-between mb-4">
                  <div><div className="text-base font-bold text-ca-text">{c.brand}</div><div className="text-xs text-ca-muted">{c.sector}</div></div>
                  <div className="text-right"><div className="text-2xl font-bold" style={{ color: c.accent }}>{c.metric}</div><div className="text-[10px] text-ca-muted">{c.metricLabel}</div></div>
                </div>
                <ul className="space-y-1.5">{c.kpis.map(k => <li key={k} className="flex items-center gap-2 text-xs text-ca-muted"><span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: c.accent }} />{k}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
