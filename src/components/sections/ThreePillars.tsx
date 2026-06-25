"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    href: "/publishers",
    accent: "#5b8cff",
    accentDim: "rgba(91,140,255,0.18)",
    accentBorder: "rgba(91,140,255,0.35)",
    tag: "Publishers",
    headline: "Monetize. Collect. Engage.",
    description:
      "Maximize yield across all your inventory, collect first-party audience data, and deploy conversational editorial formats that captivate readers.",
    features: ["Yield optimization & eCPM boost", "CRM/DMP & cookieless data", "Conversational ad formats"],
    metric: "200+",
    metricLabel: "media partners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    href: "/advertisers",
    accent: "#07e2dc",
    accentDim: "rgba(7,226,220,0.16)",
    accentBorder: "rgba(7,226,220,0.35)",
    tag: "Advertisers",
    headline: "Reach. Target. Measure.",
    description:
      "Run high-attention formats on premium media, leverage cookieless semantic targeting, and measure real brand impact with attribution.",
    features: ["Self-serve & managed buying", "Cookieless contextual targeting", "Brand lift measurement"],
    metric: "150+",
    metricLabel: "brand campaigns",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
      </svg>
    ),
  },
  {
    href: "/platform",
    accent: "#7b3fff",
    accentDim: "rgba(123,63,255,0.18)",
    accentBorder: "rgba(123,63,255,0.35)",
    tag: "Platform",
    headline: "AudienceCloud OS",
    description:
      "A modular, open platform connecting publishers and advertisers: AudienceDesk, AudienceAds, AudienceConnect, and AudienceMatching.",
    features: ["Trading desk & omnichannel", "Conversational ad formats", "Cookieless identity matching"],
    metric: "4",
    metricLabel: "platform modules",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

export function ThreePillars() {
  return (
    <section className="bg-ca-dark py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-blue mb-4 px-3 py-1 rounded-full border border-ca-blue/20 bg-ca-blue/8">
            Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span
              style={{
                background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One platform,<br />three superpowers
            </span>
          </h2>
          <p className="text-ca-muted text-lg max-w-xl mx-auto">
            Whether you publish content, run campaigns, or build data products: Collective Audience has your stack.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.tag}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href={pillar.href}
                className="group relative flex flex-col h-full rounded-2xl border bg-ca-surface overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: pillar.accentBorder,
                  background: `linear-gradient(145deg, ${pillar.accentDim} 0%, #eef0fb 100%)`,
                  boxShadow: "0 2px 16px rgba(0,0,40,0.07), 0 1px 3px rgba(0,0,40,0.05)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, transparent 5%, ${pillar.accent} 40%, ${pillar.accent} 60%, transparent 95%)`,
                  }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${pillar.accentDim} 0%, transparent 65%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${pillar.accent}18`,
                    color: pillar.accent,
                    border: `1px solid ${pillar.accentBorder}`,
                  }}
                >
                  {pillar.icon}
                </div>

                {/* Tag */}
                <span
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: pillar.accent }}
                >
                  {pillar.tag}
                </span>

                {/* Headline */}
                <h3 className="text-xl font-bold text-ca-text mb-3 leading-snug">
                  {pillar.headline}
                </h3>

                {/* Description */}
                <p className="text-ca-muted text-sm leading-relaxed mb-6 flex-1">
                  {pillar.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ca-muted">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: pillar.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Metric + CTA row */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: pillar.accentBorder }}>
                  <div>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: pillar.accent }}
                    >
                      {pillar.metric}
                    </span>
                    <span className="text-xs text-ca-muted ml-1.5">{pillar.metricLabel}</span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: pillar.accent }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
