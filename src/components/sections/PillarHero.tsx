"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PillarHeroProps {
  eyebrow: string;
  headline: string;
  subtitle: string;
  accent: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  stats?: { value: string; label: string }[];
}

export function PillarHero({ eyebrow, headline, subtitle, accent, ctaPrimary, ctaSecondary, stats }: PillarHeroProps) {
  return (
    <section className="relative bg-ca-dark overflow-hidden py-24 md:py-32">
      {/* Blob */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`, animation: "blob 12s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}0e 0%, transparent 70%)`, animation: "blob 12s ease-in-out infinite 5s" }}
        />
      </div>

      {/* Grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "linear-gradient(to right, #c4d0f0 1px, transparent 1px), linear-gradient(to bottom, #c4d0f0 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] text-left">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm md:text-base font-semibold tracking-widest uppercase mb-8"
          style={{ color: accent, borderColor: `${accent}30`, background: `${accent}0a` }}
        >
          {eyebrow}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
          style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          {headline}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-xl md:text-2xl text-ca-muted leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        {(ctaPrimary || ctaSecondary) && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            {ctaPrimary && (
              <Link href={ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#0a0c14] transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-[0.98]"
                style={{ background: accent, boxShadow: `0 0 0px ${accent}00` }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${accent}50`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${accent}00`}
              >
                {ctaPrimary.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-ca-border bg-black/5 text-ca-text font-semibold text-sm backdrop-blur-sm transition-all duration-200 hover:bg-black/8 hover:border-opacity-60 active:scale-[0.98]"
                style={{ ["--hover-border" as string]: accent }}
              >
                {ctaSecondary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.div>
        )}

        {stats && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.07 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-ca-border/70 bg-ca-surface/70 backdrop-blur-sm"
              >
                <span className="text-base font-bold" style={{ color: accent }}>{s.value}</span>
                <span className="text-xs text-ca-muted">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #fafbff, transparent)" }}
      />
    </section>
  );
}
