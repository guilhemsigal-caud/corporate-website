"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  {
    id: "reach",
    tab: "Reach",
    accent: "#5b8cff",
    headline: "Reach 200+ premium publishers",
    description:
      "Access Le Monde, Les Échos, Forbes, HuffPost and 200+ premium media environments. Your brand appears in high-quality, brand-safe editorial contexts.",
    bullets: [
      "Direct publisher relationships — no MFA, no resellers",
      "Brand-safe, fully viewable placements",
      "Pan-European + US reach from one platform",
    ],
    metric: "200+",
    metricLabel: "premium publishers",
    href: "/advertisers",
    visual: {
      items: ["Le Monde", "Les Échos", "Forbes", "HuffPost", "Libération", "L'Obs"],
      accent: "#5b8cff",
    },
  },
  {
    id: "timing",
    tab: "Right moment",
    accent: "#07e2dc",
    headline: "Be present at the right moment",
    description:
      "Our formats activate at the scroll — precisely when readers are most engaged. Semantic contextual targeting ensures brand relevance in real time.",
    bullets: [
      "Cookieless contextual targeting by Teads AI",
      "Scroll-triggered formats for peak attention",
      "Real-time brand safety classification",
    ],
    metric: "34s",
    metricLabel: "avg. attention per format",
    href: "/advertisers/targeting",
    visual: {
      items: ["Scroll Intent", "Context Score", "Brand Safety", "Attention AI"],
      accent: "#07e2dc",
    },
  },
  {
    id: "experience",
    tab: "Experience",
    accent: "#7b3fff",
    headline: "Create immersive brand experiences",
    description:
      "From conversational formats to immersive video, our creative studio and ad formats drive brand recall and genuine consumer interaction.",
    bullets: [
      "Conversational & interactive formats",
      "Audience Studio for creative production",
      "Formats gallery with live demos",
    ],
    metric: "+40%",
    metricLabel: "brand lift on avg.",
    href: "/gallery",
    visual: {
      items: ["Video", "Slider", "Immersive", "Conversational"],
      accent: "#7b3fff",
    },
  },
  {
    id: "performance",
    tab: "Performance",
    accent: "#5b8cff",
    headline: "Measure real business outcomes",
    description:
      "From brand lift studies to econometric ROI modeling, Collective Audience delivers the attribution proof your media plans need.",
    bullets: [
      "Brand lift measurement (Lucid/Dynata)",
      "Cookieless MMM integration",
      "3× brand attribution vs. display",
    ],
    metric: "3×",
    metricLabel: "brand attribution",
    href: "/advertisers/results",
    visual: {
      items: ["Brand Lift", "MMM ROI", "Attribution", "Foot Traffic"],
      accent: "#5b8cff",
    },
  },
];

function VisualPanel({ feature }: { feature: (typeof FEATURES)[0] }) {
  return (
    <div className="relative h-full min-h-[340px] flex flex-col justify-center p-8">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${feature.visual.accent}12 0%, transparent 70%)`,
        }}
      />

      {/* Grid cards */}
      <div className="relative grid grid-cols-2 gap-3">
        {feature.visual.items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="flex items-center gap-3 p-4 rounded-xl border"
            style={{
              borderColor: `${feature.visual.accent}25`,
              background: `${feature.visual.accent}0a`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: feature.visual.accent }}
            />
            <span className="text-sm font-medium text-ca-text">{item}</span>
          </motion.div>
        ))}

        {/* Big metric card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="col-span-2 flex items-center justify-between p-5 rounded-xl border"
          style={{
            borderColor: `${feature.visual.accent}30`,
            background: `${feature.visual.accent}12`,
          }}
        >
          <div>
            <div
              className="text-4xl font-bold"
              style={{
                background: `linear-gradient(135deg, ${feature.visual.accent}, #0e1025)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {feature.metric}
            </div>
            <div className="text-sm text-ca-muted mt-0.5">{feature.metricLabel}</div>
          </div>

          {/* Animated progress ring */}
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="24" fill="none" stroke={`${feature.visual.accent}20`} strokeWidth="4" />
            <motion.circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              stroke={feature.visual.accent}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 24}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 24 * 0.25 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ transformOrigin: "center", rotate: "-90deg" }}
            />
            <text x="30" y="35" textAnchor="middle" fontSize="11" fill={feature.visual.accent} fontWeight="700">
              {feature.metric}
            </text>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export function InteractiveFeatures() {
  const [active, setActive] = useState(0);
  const feature = FEATURES[active];

  return (
    <section className="bg-ca-dark py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
            style={{
              color: "#07e2dc",
              borderColor: "rgba(7,226,220,0.2)",
              background: "rgba(7,226,220,0.06)",
            }}
          >
            Elevate your impact
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Four pillars of audience performance
          </h2>
          <p className="text-ca-muted text-lg max-w-xl mx-auto">
            From media access to creative impact and measurable ROI — a full-stack approach to digital advertising.
          </p>
        </motion.div>

        {/* Tab nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FEATURES.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                active === i
                  ? {
                      background: f.accent,
                      color: "#0a0c14",
                      boxShadow: `0 0 24px ${f.accent}50`,
                    }
                  : {
                      border: `1px solid rgba(0,0,30,0.1)`,
                      color: "#5a6480",
                      background: "rgba(0,0,30,0.04)",
                    }
              }
            >
              {f.tab}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border overflow-hidden"
          style={{ borderColor: `${feature.accent}25` }}
        >
          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r"
              style={{
                borderColor: `${feature.accent}40`,
                background: `linear-gradient(145deg, ${feature.accent}1c 0%, #eef0fb 100%)`,
              }}
            >
              {/* Top line */}
              <div
                className="h-px w-16 mb-6 rounded-full"
                style={{ background: feature.accent }}
              />

              <span
                className="text-xs font-semibold tracking-widest uppercase mb-3 block"
                style={{ color: feature.accent }}
              >
                {feature.tab}
              </span>

              <h3 className="text-2xl font-bold text-ca-text mb-4 leading-snug">
                {feature.headline}
              </h3>

              <p className="text-ca-muted leading-relaxed mb-6">{feature.description}</p>

              <ul className="space-y-3 mb-8">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ca-muted">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: feature.accent }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href={feature.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                style={{ color: feature.accent }}
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right: visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`visual-${feature.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-ca-surface/40"
            >
              <VisualPanel feature={feature} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
