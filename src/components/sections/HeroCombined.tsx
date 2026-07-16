"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

// ─── Copy (from HeroSplit) ──────────────────────────────────────────────────

const COPY = {
  en: {
    badge: "The Open Web Platform",
    line1: "Elevated outcomes from branding",
    line2: "to performance.",
    subtitle:
      "Collective Audience unifies premium media, first-party audience data, and high-attention formats into one open platform, cookieless and built for the open web.",
    cta1: "Contact us",
    cta2: "Explore formats",
    trust: ["200+ publishers", "150+ brands", "NY · Paris"],
  },
  fr: {
    badge: "La plateforme du web ouvert",
    line1: "Des résultats du branding",
    line2: "à la performance.",
    subtitle:
      "Collective Audience unifie médias premium, données d'audience first-party et formats haute attention en une plateforme ouverte, sans cookies, conçue pour le web ouvert.",
    cta1: "Nous contacter",
    cta2: "Explorer les formats",
    trust: ["200+ éditeurs", "150+ marques", "NY · Paris"],
  },
};

// ─── Reveal animation (from HeroCinematic) ──────────────────────────────────

function RevealLine({
  children,
  delay = 0,
  inView,
}: {
  children: React.ReactNode;
  delay?: number;
  inView: boolean;
}) {
  return (
    <span className="block overflow-hidden" style={{ lineHeight: 1.1 }}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── Ad cards (from HeroCinematic) with interactive 3-D tilt on hover ───────

const CARDS = [
  { src: "/creatives/creative-1.png", brand: "Rolex",    rotate: -8, rotateX: 14, bottom: "12px", left: "1%",  width: "22%", delay: 0.45 },
  { src: "/creatives/creative-2.png", brand: "BMW",      rotate:  5, rotateX: 10, bottom: "52px", left: "24%", width: "22%", delay: 0.55 },
  { src: "/creatives/creative-3.png", brand: "Hermès",   rotate: -6, rotateX: 13, bottom: "8px",  left: "52%", width: "17%", delay: 0.65 },
  { src: "/creatives/creative-4.png", brand: "Burberry", rotate:  7, rotateX: 11, bottom: "36px", left: "73%", width: "17%", delay: 0.75 },
];

function AdCard({
  card,
  inView,
}: {
  card: (typeof CARDS)[number];
  inView: boolean;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  }

  function handleMouseLeave() {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      key={card.brand}
      className="absolute rounded-2xl overflow-hidden cursor-pointer"
      style={{
        width: card.width,
        bottom: card.bottom,
        left: card.left,
        rotate: card.rotate,
        rotateX: hovered ? tilt.x : card.rotateX,
        rotateY: hovered ? tilt.y : 0,
        transformOrigin: "bottom center",
        boxShadow: hovered
          ? "0 32px 80px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.5)"
          : "0 24px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.12)",
        transition: "box-shadow 0.3s ease",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={card.brand}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export function HeroCombined() {
  const { lang } = useLang();
  const c = COPY[lang];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="px-4 md:px-5 py-4">
      <div
        className="relative rounded-3xl w-full flex flex-col"
        style={{ background: "#000" }}
      >
        {/* ── Background layer — clipped to rounded corners ── */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.28) saturate(0.15)" }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          <div
            className="absolute pointer-events-none"
            style={{
              top: "-30%",
              left: "-15%",
              width: "60%",
              height: "120%",
              background:
                "radial-gradient(ellipse at center, rgba(199,81,192,0.50) 0%, rgba(65,88,208,0.22) 40%, transparent 68%)",
              animation: "heroGlowMove1 7.2s ease-in-out infinite",
              willChange: "transform, opacity",
            }}
          />

          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              left: "15%",
              width: "55%",
              height: "110%",
              background:
                "radial-gradient(ellipse at center, rgba(199,81,192,0.42) 0%, rgba(65,88,208,0.20) 42%, transparent 68%)",
              animation: "heroGlowMove2 5s ease-in-out infinite",
              willChange: "transform, opacity",
            }}
          />
        </div>

        {/* ── Inner content ── */}
        <div className="relative z-10 flex flex-col px-10 md:px-14 lg:px-16 pt-10" style={{ minHeight: "90vh" }}>

          {/* Logo top-left (HeroCinematic) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-none flex items-center gap-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Collective Audience" className="h-8 w-auto" />
          </motion.div>

          {/* ── Headline block — centered (HeroSplit copy + HeroCinematic animation) ── */}
          <div className="flex-1 flex flex-col justify-center items-center text-center pb-8">
            <div style={{ width: "fit-content", margin: "0 auto" }}>

              {/* Badge (HeroSplit) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/8 text-white/70 text-sm font-medium mb-8"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#07e2dc]"
                  style={{ animation: "pulse-ring 2s ease-in-out infinite" }}
                />
                {c.badge}
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </motion.div>

              {/* Headline — two lines */}
              <h1
                className="text-white tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.2vw, 3.5rem)", fontWeight: 700 }}
              >
                <RevealLine inView={isInView} delay={0.18}>{c.line1}</RevealLine>
                <span className="block overflow-hidden" style={{ lineHeight: 1.1 }}>
                  <motion.span
                    className="block"
                    style={{
                      background: "linear-gradient(135deg, #5b8cff 0%, #07e2dc 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    initial={{ y: "110%" }}
                    animate={isInView ? { y: "0%" } : { y: "110%" }}
                    transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {c.line2}
                  </motion.span>
                </span>
              </h1>

              {/* Subtitle (HeroSplit) */}
              <motion.p
                className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {c.subtitle}
              </motion.p>

              {/* CTA buttons (HeroSplit) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: 0.72 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_35px_rgba(91,140,255,0.5)] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #5b8cff, #7b3fff)" }}
                >
                  {c.cta1}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/gallery"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 bg-white/8 text-white font-semibold backdrop-blur-sm transition-all duration-200 hover:bg-white/14 hover:border-white/35 active:scale-[0.98]"
                >
                  {c.cta2}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Trust badges (HeroSplit) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.88 }}
                className="flex flex-wrap gap-5 items-center justify-center"
              >
                {c.trust.map((t) => (
                  <span key={t} className="flex items-center gap-2 text-sm text-white/45">
                    <span className="w-1 h-1 rounded-full bg-[#07e2dc]" />
                    {t}
                  </span>
                ))}
              </motion.div>

            </div>
          </div>

          {/* ── Ad cards strip (HeroCinematic) ── */}
          <div
            className="relative w-full mt-auto"
            style={{ height: "340px", perspective: "1200px", paddingBottom: "0" }}
          >
            {CARDS.map((card) => (
              <AdCard key={card.brand} card={card} inView={isInView} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
