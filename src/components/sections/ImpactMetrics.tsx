"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const ICONS = [
  <svg key="0" viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} aria-hidden><circle cx="16" cy="16" r="13" /><path strokeLinecap="round" d="M10 16.5l4.5 4.5 7.5-8" /></svg>,
  <svg key="1" viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} aria-hidden><path strokeLinecap="round" d="M6 22l7-8 5 4 8-12" /><path strokeLinecap="round" d="M24 10h4v4" /></svg>,
  <svg key="2" viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} aria-hidden><rect x="4" y="18" width="7" height="10" rx="1.5" /><rect x="12.5" y="10" width="7" height="18" rx="1.5" /><rect x="21" y="4" width="7" height="24" rx="1.5" /></svg>,
];

const ACCENTS = ["#5b8cff", "#07e2dc", "#7b3fff"];

const COPY = {
  en: {
    eyebrow: "Proven performance",
    metrics: [
      { rank: "#1", title: "Ranked in Attention Score", description: "Teads-certified, our formats rank #1 in attention across premium inventory", source: "Lumen Research, 2024", stats: [{ value: "+40%", label: "Brand Lift" }, { value: "34s", label: "Avg. attention" }] },
      { rank: "2×", title: "Attention strengthens brand & ROI", description: "High-attention formats deliver double the brand recall and measurable ROI lift", source: "WARC Meta-Analysis, 2024", stats: [{ value: ">1%", label: "Interaction rate" }, { value: "3×", label: "Attribution" }] },
      { rank: "Top 3", title: "Most effective MMM platform", description: "Independent econometric studies confirm Collective Audience's ROI contribution", source: "Analytic Partners, 2024", stats: [{ value: "200+", label: "Publishers" }, { value: "150+", label: "Brands" }] },
    ],
  },
  fr: {
    eyebrow: "Performance prouvée",
    metrics: [
      { rank: "#1", title: "Classé #1 en score d'attention", description: "Certifié Teads, nos formats sont #1 en attention sur inventaire premium", source: "Lumen Research, 2024", stats: [{ value: "+40%", label: "Lift de marque" }, { value: "34s", label: "Attention moy." }] },
      { rank: "2×", title: "L'attention renforce la marque & le ROI", description: "Les formats haute attention génèrent 2× le souvenir de marque et un ROI mesurable", source: "WARC Meta-Analysis, 2024", stats: [{ value: ">1%", label: "Taux d'interaction" }, { value: "3×", label: "Attribution" }] },
      { rank: "Top 3", title: "Plateforme MMM la plus efficace", description: "Des études économétriques indépendantes confirment la contribution ROI de Collective Audience", source: "Analytic Partners, 2024", stats: [{ value: "200+", label: "Éditeurs" }, { value: "150+", label: "Marques" }] },
    ],
  },
};

export function ImpactMetrics() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="bg-ca-surface border-y border-ca-border py-20 md:py-24 overflow-hidden" aria-labelledby="proven-performance">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.p
          id="proven-performance"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left text-base font-semibold tracking-widest uppercase text-ca-muted mb-10 md:mb-12"
        >
          {c.eyebrow}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {c.metrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="group relative rounded-2xl border overflow-hidden p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 min-h-[280px]"
              style={{
                borderColor: `${ACCENTS[i]}45`,
                background: `linear-gradient(145deg, ${ACCENTS[i]}20 0%, #eef0fb 100%)`,
                boxShadow: "0 2px 16px rgba(0,0,40,0.07), 0 1px 3px rgba(0,0,40,0.05)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, transparent 5%, ${ACCENTS[i]} 40%, ${ACCENTS[i]} 60%, transparent 95%)` }} aria-hidden />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${ACCENTS[i]}12 0%, transparent 65%)` }} aria-hidden />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${ACCENTS[i]}18`, color: ACCENTS[i], border: `1px solid ${ACCENTS[i]}30` }}>
                  {ICONS[i]}
                </div>
                <div className="text-5xl font-bold tracking-tight mb-4" style={{ color: ACCENTS[i] }}>{m.rank}</div>
                <h3 className="text-xl font-semibold text-ca-text mb-3 leading-snug">{m.title}</h3>
                <p className="text-base text-ca-muted leading-relaxed mb-6">{m.description}</p>
                <div className="flex gap-6 pt-5 border-t" style={{ borderColor: `${ACCENTS[i]}20` }}>
                  {m.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold" style={{ color: ACCENTS[i] }}>{s.value}</div>
                      <div className="text-sm text-ca-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-ca-muted mt-4">{m.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
