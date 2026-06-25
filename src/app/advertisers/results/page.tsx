"use client";
import { PillarHero } from "@/components/sections/PillarHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    hero: { eyebrow: "Advertisers · Results", headline: "Real campaigns. Proven outcomes.", subtitle: "From automotive to fintech, Collective Audience consistently delivers above-benchmark performance across brand and performance metrics.", accent: "#07e2dc", stats: [{ value: "+40%", label: "avg. brand lift" }, { value: "3×", label: "avg. attribution" }, { value: "150+", label: "brand campaigns" }] },
    caseStudiesTitle: "Case studies",
    cases: [
      { brand: "Audi", sector: "Automotive", metric: "+52%", metricLabel: "brand recall", kpis: ["+52% brand recall", "38s avg. attention", "1.4% interaction rate"], accent: "#5b8cff" },
      { brand: "L'Oréal", sector: "Beauty", metric: "+44%", metricLabel: "purchase intent", kpis: ["+44% purchase intent", "+38% brand lift", "92% viewability"], accent: "#07e2dc" },
      { brand: "Carrefour", sector: "Retail", metric: "3.2×", metricLabel: "ROAS", kpis: ["3.2× ROAS", "+29% foot traffic", "150k+ interactions"], accent: "#7b3fff" },
      { brand: "Samsung", sector: "Tech", metric: "+61%", metricLabel: "consideration", kpis: ["+61% consideration", "42s avg. attention", "Top 1% attention score"], accent: "#5b8cff" },
      { brand: "Boursorama", sector: "Fintech", metric: "+35%", metricLabel: "sign-up intent", kpis: ["+35% sign-up intent", "2.1% click rate", "0 cookie dependency"], accent: "#07e2dc" },
      { brand: "Nestlé", sector: "FMCG", metric: "+41%", metricLabel: "brand lift", kpis: ["+41% brand lift", "3× attribution", "Deployed in 5 markets"], accent: "#7b3fff" },
    ],
  },
  fr: {
    hero: { eyebrow: "Annonceurs · Résultats", headline: "Vraies campagnes. Résultats prouvés.", subtitle: "De l'automobile à la fintech, Collective Audience délivre constamment des performances au-dessus des benchmarks sur les métriques de marque et de performance.", accent: "#07e2dc", stats: [{ value: "+40%", label: "lift de marque moy." }, { value: "3×", label: "attribution moy." }, { value: "150+", label: "campagnes marques" }] },
    caseStudiesTitle: "Cas clients",
    cases: [
      { brand: "Audi", sector: "Automobile", metric: "+52%", metricLabel: "souvenir de marque", kpis: ["+52% souvenir de marque", "38s attention moy.", "1,4% taux d'interaction"], accent: "#5b8cff" },
      { brand: "L'Oréal", sector: "Beauté", metric: "+44%", metricLabel: "intention d'achat", kpis: ["+44% intention d'achat", "+38% brand lift", "92% visibilité"], accent: "#07e2dc" },
      { brand: "Carrefour", sector: "Retail", metric: "3,2×", metricLabel: "ROAS", kpis: ["3,2× ROAS", "+29% trafic en point de vente", "150k+ interactions"], accent: "#7b3fff" },
      { brand: "Samsung", sector: "Tech", metric: "+61%", metricLabel: "considération", kpis: ["+61% considération", "42s attention moy.", "Top 1% score d'attention"], accent: "#5b8cff" },
      { brand: "Boursorama", sector: "Fintech", metric: "+35%", metricLabel: "intention d'inscription", kpis: ["+35% intention d'inscription", "2,1% taux de clic", "0 dépendance aux cookies"], accent: "#07e2dc" },
      { brand: "Nestlé", sector: "FMCG", metric: "+41%", metricLabel: "brand lift", kpis: ["+41% brand lift", "3× attribution", "Déployé sur 5 marchés"], accent: "#7b3fff" },
    ],
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      <PillarHero {...c.hero} />
      <section className="bg-ca-dark py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.caseStudiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.cases.map((cs) => (
              <div key={cs.brand} className="relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${cs.accent}35`, background: `linear-gradient(145deg, ${cs.accent}15 0%, #eef0fb 100%)`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${cs.accent} 40%,${cs.accent} 60%,transparent 95%)` }} />
                <div className="flex items-center justify-between mb-4">
                  <div><div className="text-base font-bold text-ca-text">{cs.brand}</div><div className="text-xs text-ca-muted">{cs.sector}</div></div>
                  <div className="text-right"><div className="text-2xl font-bold" style={{ color: cs.accent }}>{cs.metric}</div><div className="text-[10px] text-ca-muted">{cs.metricLabel}</div></div>
                </div>
                <ul className="space-y-1.5">{cs.kpis.map(k => <li key={k} className="flex items-center gap-2 text-xs text-ca-muted"><span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: cs.accent }} />{k}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
