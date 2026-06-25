"use client";

import { motion } from "framer-motion";

const PUBLISHERS = ["Le Monde", "Les Échos", "Forbes", "HuffPost", "Libération"];
const BRANDS = ["Audi", "BMW", "L'Oréal", "Carrefour", "Samsung"];

function NodePill({
  label,
  accent,
  delay,
}: {
  label: string;
  accent: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: accent === "#5b8cff" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium text-ca-text"
      style={{
        boxShadow: "0 1px 6px rgba(0,0,40,0.06)",
        borderColor: `${accent}45`,
        background: `${accent}0c`,
      }}
    >
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
      {label}
    </motion.div>
  );
}

export function PowerGrid() {
  return (
    <section className="bg-ca-surface border-y border-ca-border py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
            style={{ color: "#7b3fff", borderColor: "rgba(123,63,255,0.2)", background: "rgba(123,63,255,0.06)" }}
          >
            How it works
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The audience intelligence engine
          </h2>
        </motion.div>

        {/* Grid visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Publishers column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-ca-blue mb-4">
              Publishers
            </div>
            {PUBLISHERS.map((p, i) => (
              <NodePill key={p} label={p} accent="#5b8cff" delay={i * 0.06} />
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="px-4 py-2.5 rounded-xl border border-ca-blue/20 bg-ca-blue/8 text-sm text-ca-blue font-semibold text-center"
            >
              +195 more
            </motion.div>
          </div>

          {/* Center: Platform engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl border border-ca-border p-6 text-center"
            style={{ background: "linear-gradient(145deg, rgba(123,63,255,0.15) 0%, #eef0fb 100%)", boxShadow: "0 2px 20px rgba(0,0,40,0.08), 0 1px 4px rgba(0,0,40,0.05)", borderColor: "rgba(123,63,255,0.35)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
              style={{
                background: "linear-gradient(to right, transparent, #7b3fff, #5b8cff, #07e2dc, transparent)",
              }}
            />

            <div className="mb-5">
              <div
                className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-3"
                style={{ background: "rgba(123,63,255,0.15)", border: "1px solid rgba(123,63,255,0.3)" }}
              >
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="#7b3fff" strokeWidth={1.5}>
                  <path strokeLinecap="round" d="M16 4v4M16 24v4M4 16h4M24 16h4" />
                  <circle cx="16" cy="16" r="7" />
                  <circle cx="16" cy="16" r="3" fill="rgba(123,63,255,0.4)" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ca-text mb-1">AudienceCloud</h3>
              <p className="text-xs text-ca-muted">Open Platform OS</p>
            </div>

            <div className="space-y-3">
              {[
                { label: "Audience signals / day", value: "4B+", accent: "#5b8cff" },
                { label: "Cookieless matching", value: "AI", accent: "#07e2dc" },
                { label: "Real-time targeting", value: "<50ms", accent: "#7b3fff" },
                { label: "Brand safety score", value: "99%", accent: "#07e2dc" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl border"
                  style={{ borderColor: `${stat.accent}20`, background: `${stat.accent}08` }}
                >
                  <span className="text-xs text-ca-muted">{stat.label}</span>
                  <span className="text-sm font-bold" style={{ color: stat.accent }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Animated connection lines — decorative */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-px w-5 rounded-full"
                  style={{ background: "#5b8cff" }}
                  animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-px w-5 rounded-full"
                  style={{ background: "#07e2dc" }}
                  animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, delay: i * 0.2 + 0.75, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>

          {/* Brands column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-ca-mint mb-4">
              Advertisers
            </div>
            {BRANDS.map((b, i) => (
              <NodePill key={b} label={b} accent="#07e2dc" delay={i * 0.06 + 0.3} />
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="px-4 py-2.5 rounded-xl border border-ca-mint/20 bg-ca-mint/8 text-sm text-ca-mint font-semibold text-center"
            >
              +145 more
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
