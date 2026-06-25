"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const ROTATING_WORDS = ["publishers", "advertisers", "brands"];

const STATS = [
  { value: "+40%", label: "Brand Lift" },
  { value: "34s", label: "Time on Format" },
  { value: ">1%", label: "Interaction Rate" },
  { value: "3×", label: "Brand Attribution" },
  { value: "200+", label: "Publishers" },
  { value: "150+", label: "Brands" },
];

export function HeroHome() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ca-dark">
      {/* ── Animated gradient blobs ── */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-15%] left-[5%] w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(91,140,255,0.18) 0%, transparent 70%)",
            animation: "blob 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[30%] right-[0%] w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(123,63,255,0.14) 0%, transparent 70%)",
            animation: "blob 10s ease-in-out infinite 3.5s",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[25%] w-[480px] h-[480px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(7,226,220,0.1) 0%, transparent 70%)",
            animation: "blob 10s ease-in-out infinite 7s",
          }}
        />
      </div>

      {/* ── Grid overlay ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e2236 1px, transparent 1px), linear-gradient(to bottom, #1e2236 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 55%, transparent 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center py-32">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-ca-blue text-sm font-medium mb-10 backdrop-blur-sm"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-ca-mint"
            style={{ animation: "pulse-ring 2s ease-in-out infinite" }}
          />
          The Open Web Platform
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.06] mb-7"
        >
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Built for
          </span>

          {/* Rotating word */}
          <span className="relative block h-[1.12em] overflow-hidden">
            {ROTATING_WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="absolute inset-0 flex items-center justify-center gradient-text-blue-mint"
                initial={{ y: "110%", opacity: 0 }}
                animate={
                  wordIndex === i
                    ? { y: "0%", opacity: 1 }
                    : {
                        y: wordIndex > i ? "-110%" : "110%",
                        opacity: 0,
                      }
                }
                transition={{ type: "spring", stiffness: 55, damping: 22 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-ca-muted leading-relaxed mb-12"
        >
          Collective Audience unifies media monetization, audience data, and advertising
          into one open platform — cookieless, scalable, built for the open web.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/publishers"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-ca-blue text-white font-semibold text-[1.05rem] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_35px_rgba(91,140,255,0.45)] active:scale-[0.98]"
          >
            For Publishers
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/advertisers"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-ca-border bg-white/4 text-ca-text font-semibold text-[1.05rem] backdrop-blur-sm transition-all duration-200 hover:bg-white/8 hover:border-ca-blue/40 active:scale-[0.98]"
          >
            For Advertisers
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-ca-border/70 bg-ca-surface/70 backdrop-blur-sm"
            >
              <span className="text-base font-bold gradient-text-blue-mint">
                {stat.value}
              </span>
              <span className="text-xs text-ca-muted tracking-wide">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Floating platform cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          {
            accent: "#5b8cff",
            label: "Publishers",
            metric: "+40%",
            sub: "avg. brand lift",
            icon: "◈",
            bars: [65, 80, 55, 90, 72, 85, 95],
          },
          {
            accent: "#07e2dc",
            label: "Advertisers",
            metric: "34s",
            sub: "avg. time on format",
            icon: "⬡",
            bars: [40, 60, 75, 55, 85, 70, 90],
          },
          {
            accent: "#7b3fff",
            label: "Platform",
            metric: "3×",
            sub: "brand attribution",
            icon: "⬟",
            bars: [30, 50, 65, 80, 70, 88, 95],
          },
        ].map((card) => (
          <div
            key={card.label}
            className="relative rounded-2xl border border-ca-border bg-ca-surface/60 backdrop-blur-md p-6 overflow-hidden group hover:border-opacity-60 transition-all duration-300"
            style={{
              borderColor: `${card.accent}22`,
            }}
          >
            {/* top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
              style={{
                background: `linear-gradient(to right, transparent, ${card.accent}, transparent)`,
              }}
            />
            {/* glow bg */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${card.accent}14 0%, transparent 70%)`,
              }}
            />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-ca-muted">
                  {card.label}
                </span>
                <span className="text-lg" style={{ color: card.accent }}>
                  {card.icon}
                </span>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1 h-10 mb-4">
                {card.bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ background: `${card.accent}40` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                  />
                ))}
              </div>

              <div className="flex items-end gap-2">
                <span
                  className="text-3xl font-bold tracking-tight"
                  style={{ color: card.accent }}
                >
                  {card.metric}
                </span>
                <span className="text-xs text-ca-muted mb-1 leading-tight">
                  {card.sub}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #fafbff 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
