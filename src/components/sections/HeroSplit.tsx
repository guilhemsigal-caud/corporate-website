"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    badge: "The Open Web Platform",
    line1: "Elevated outcomes",
    line2: "from branding",
    line3: "to performance.",
    subtitle: "Collective Audience unifies premium media, first-party audience data, and high-attention formats into one open platform, cookieless and built for the open web.",
    cta1: "Contact us", cta2: "Explore formats",
    trust: ["200+ publishers", "150+ brands", "NY · Paris"],
    badge1: "+40%", badge1Label: "Brand Lift",
    badge2: "3×", badge2Label: "Attribution",
    badge3: "200+", badge3Label: "Publishers",
    sponsored: "Sponsored · BMW", highAttn: "High Attention",
    attnTime: "Attention time", discover: "Discover", learnMore: "Learn more",
  },
  fr: {
    badge: "La plateforme du web ouvert",
    line1: "Des résultats d'exception,",
    line2: "du branding",
    line3: "à la performance.",
    subtitle: "Collective Audience unifie médias premium, données d'audience first-party et formats haute attention en une plateforme ouverte, sans cookies, conçue pour le web ouvert.",
    cta1: "Nous contacter", cta2: "Explorer les formats",
    trust: ["200+ éditeurs", "150+ marques", "NY · Paris"],
    badge1: "+40%", badge1Label: "Lift de marque",
    badge2: "3×", badge2Label: "Attribution",
    badge3: "200+", badge3Label: "Éditeurs",
    sponsored: "Sponsorisé · BMW", highAttn: "Haute Attention",
    attnTime: "Temps d'attention", discover: "Découvrir", learnMore: "En savoir plus",
  },
};

function ProductMockup() {
  const { lang } = useLang();
  const c = COPY[lang];
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 100), 60);
    return () => clearInterval(id);
  }, []);
  const barHeights = [55, 70, 45, 85, 60, 92, 75, 88, 65, 78];

  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:ml-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
        className="relative rounded-2xl border border-ca-border overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
        style={{ background: "#0d1020" }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ca-border bg-ca-dark/80">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 mx-3 h-6 rounded-md bg-ca-border flex items-center px-3">
            <span className="text-[10px] text-ca-muted">lemonde.fr/actualite/...</span>
          </div>
        </div>
        <div className="p-5">
          <div className="h-5 rounded-md bg-ca-border/50 w-3/4 mb-3" />
          <div className="space-y-2 mb-5">
            <div className="h-3 rounded bg-ca-border/35 w-full" />
            <div className="h-3 rounded bg-ca-border/35 w-5/6" />
            <div className="h-3 rounded bg-ca-border/35 w-4/5" />
          </div>
          <div className="relative rounded-xl overflow-hidden border border-ca-blue/25" style={{ background: "linear-gradient(135deg, rgba(91,140,255,0.12) 0%, rgba(123,63,255,0.12) 100%)" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #5b8cff, #07e2dc, transparent)" }} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-ca-muted">{c.sponsored}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-ca-blue/20 text-ca-blue border border-ca-blue/30">{c.highAttn}</span>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-ca-muted">{c.attnTime}</span>
                  <span className="text-xs font-bold text-ca-mint">{Math.floor((tick / 100) * 34)}s</span>
                </div>
                <div className="h-1.5 rounded-full bg-ca-border overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ width: `${tick}%`, background: "linear-gradient(to right, #5b8cff, #07e2dc)" }} />
                </div>
              </div>
              <div className="flex items-end gap-1 h-12 mb-4">
                {barHeights.map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i < Math.floor(tick / 10) ? "linear-gradient(to top, #5b8cff, #07e2dc)" : "rgba(91,140,255,0.2)" }} transition={{ duration: 0.3 }} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-8 rounded-lg bg-ca-blue flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">{c.discover}</span>
                </div>
                <div className="flex-1 h-8 rounded-lg border border-ca-border flex items-center justify-center">
                  <span className="text-xs text-ca-muted">{c.learnMore}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="h-3 rounded bg-ca-border/25 w-full" />
            <div className="h-3 rounded bg-ca-border/25 w-3/4" />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -top-5 -right-5 rounded-2xl border border-ca-border bg-ca-surface px-5 py-3 shadow-xl" style={{ backdropFilter: "blur(12px)" }}>
        <div className="text-3xl font-bold" style={{ background: "linear-gradient(135deg, #5b8cff, #07e2dc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.badge1}</div>
        <div className="text-xs text-ca-muted">{c.badge1Label}</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 1 }}
        className="absolute -bottom-5 -left-5 rounded-2xl border border-ca-border bg-ca-surface px-5 py-3 shadow-xl" style={{ backdropFilter: "blur(12px)" }}>
        <div className="text-3xl font-bold" style={{ color: "#7b3fff" }}>{c.badge2}</div>
        <div className="text-xs text-ca-muted">{c.badge2Label}</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute top-1/2 -left-8 -translate-y-1/2 rounded-2xl border border-ca-border bg-ca-surface px-4 py-3 shadow-xl hidden xl:block" style={{ backdropFilter: "blur(12px)" }}>
        <div className="text-2xl font-bold" style={{ color: "#07e2dc" }}>{c.badge3}</div>
        <div className="text-xs text-ca-muted">{c.badge3Label}</div>
      </motion.div>
    </div>
  );
}

export function HeroSplit() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="relative min-h-screen flex items-center bg-ca-dark overflow-hidden">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(91,140,255,0.15) 0%, transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
        <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(123,63,255,0.12) 0%, transparent 70%)", animation: "blob 12s ease-in-out infinite 4s" }} />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(7,226,220,0.07) 0%, transparent 70%)", animation: "blob 12s ease-in-out infinite 8s" }} />
      </div>
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "linear-gradient(to right, #c4d0f0 1px, transparent 1px), linear-gradient(to bottom, #c4d0f0 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, #000 50%, transparent 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-ca-blue text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-ca-mint" style={{ animation: "pulse-ring 2s ease-in-out infinite" }} />
            {c.badge}
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {c.line1}<br />{c.line2}<br />
            </span>
            <span style={{ background: "linear-gradient(135deg, #5b8cff 0%, #07e2dc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {c.line3}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }}
            className="text-ca-muted text-lg leading-relaxed mb-10 max-w-lg">
            {c.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-ca-blue text-white font-semibold transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_35px_rgba(91,140,255,0.45)] active:scale-[0.98]">
              {c.cta1}<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/gallery" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-ca-border bg-black/5 text-ca-text font-semibold backdrop-blur-sm transition-all duration-200 hover:bg-black/8 hover:border-ca-blue/40 active:scale-[0.98]">
              {c.cta2}<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center">
            {c.trust.map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-ca-muted">
                <span className="w-1 h-1 rounded-full bg-ca-mint" />{t}
              </span>
            ))}
          </motion.div>
        </div>

        <ProductMockup />
      </div>

      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, #fafbff, transparent)" }} />
    </section>
  );
}
