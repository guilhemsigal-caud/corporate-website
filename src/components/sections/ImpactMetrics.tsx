"use client";

import { motion } from "framer-motion";

const METRICS = [
  {
    rank: "#1",
    title: "Ranked in Attention Score",
    description: "Teads-certified, our formats rank #1 in attention across premium inventory",
    source: "Lumen Research, 2024",
    accent: "#5b8cff",
    stats: [
      { value: "+40%", label: "Brand Lift" },
      { value: "34s", label: "Avg. attention" },
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="16" cy="16" r="13" />
        <path strokeLinecap="round" d="M10 16.5l4.5 4.5 7.5-8" />
      </svg>
    ),
  },
  {
    rank: "2×",
    title: "Attention strengthens brand & ROI",
    description: "High-attention formats deliver double the brand recall and measurable ROI lift",
    source: "WARC Meta-Analysis, 2024",
    accent: "#7df0c8",
    stats: [
      { value: ">1%", label: "Interaction rate" },
      { value: "3×", label: "Attribution" },
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M6 22l7-8 5 4 8-12" />
        <path strokeLinecap="round" d="M24 10h4v4" />
      </svg>
    ),
  },
  {
    rank: "Top 3",
    title: "Most effective MMM platform",
    description: "Independent econometric studies confirm Collective Audience's ROI contribution",
    source: "Analytic Partners, 2024",
    accent: "#7b3fff",
    stats: [
      { value: "200+", label: "Publishers" },
      { value: "150+", label: "Brands" },
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="18" width="7" height="10" rx="1.5" />
        <rect x="12.5" y="10" width="7" height="18" rx="1.5" />
        <rect x="21" y="4" width="7" height="24" rx="1.5" />
      </svg>
    ),
  },
];

export function ImpactMetrics() {
  return (
    <section className="bg-ca-surface border-y border-ca-border py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold tracking-widest uppercase text-ca-muted mb-12"
        >
          Proven performance
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="group relative rounded-2xl border overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: `${m.accent}22`,
                background: `linear-gradient(145deg, ${m.accent}0d 0%, #111420 50%)`,
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(to right, transparent 5%, ${m.accent} 40%, ${m.accent} 60%, transparent 95%)`,
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${m.accent}12 0%, transparent 65%)`,
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${m.accent}18`,
                    color: m.accent,
                    border: `1px solid ${m.accent}30`,
                  }}
                >
                  {m.icon}
                </div>

                {/* Rank */}
                <div
                  className="text-4xl font-bold tracking-tight mb-3"
                  style={{ color: m.accent }}
                >
                  {m.rank}
                </div>

                <h3 className="text-base font-semibold text-ca-text mb-2 leading-snug">{m.title}</h3>
                <p className="text-sm text-ca-muted leading-relaxed mb-5">{m.description}</p>

                {/* Mini stats */}
                <div className="flex gap-4 pt-4 border-t" style={{ borderColor: `${m.accent}20` }}>
                  {m.stats.map((s) => (
                    <div key={s.label}>
                      <div
                        className="text-xl font-bold"
                        style={{ color: m.accent }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs text-ca-muted">{s.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-ca-muted/60 mt-3">{m.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
