"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    title: "Who we help",
    learnMore: "Learn More",
    publishers: {
      heading: "for publishers",
      description: "Maximize yield across your inventory without compromising editorial quality.",
      bullets: [
        "Yield optimization: +28% avg. eCPM uplift",
        "First-party CRM & DMP audience collection",
        "Inline editorial formats that don't interrupt reading",
        "GDPR-compliant data layer, full transparency",
      ],
    },
    advertisers: {
      heading: "for advertisers",
      description: "Run high-attention formats on 200+ premium publishers, cookieless.",
      bullets: [
        "Self-serve platform + managed service option",
        "Cookieless contextual & semantic targeting",
        "Brand lift, attention, and ROI measurement",
        "Creative studio, no assets required",
      ],
    },
    stats: [
      { numeric: 200, prefix: "", suffix: "%", label: "Engagement and Attention Lift" },
      { numeric: 2.9,  prefix: "", suffix: "X",  label: "More Brand Recognition" },
      { numeric: 34,   prefix: "", suffix: "S",  label: "Average Time Spent per Format" },
      { numeric: 30,   prefix: "+", suffix: "%", label: "Time Spent on Advertiser's Site" },
    ],
  },
  fr: {
    title: "Qui nous aidons",
    learnMore: "En savoir plus",
    publishers: {
      heading: "pour les éditeurs",
      description: "Maximisez le yield sur votre inventaire sans compromettre la qualité éditoriale.",
      bullets: [
        "Optimisation du yield : +28% d'eCPM moyen",
        "Collecte d'audience CRM & DMP first-party",
        "Formats éditoriaux inline qui n'interrompent pas la lecture",
        "Couche de données RGPD-compliant, totale transparence",
      ],
    },
    advertisers: {
      heading: "pour les annonceurs",
      description: "Diffusez des formats haute attention sur 200+ éditeurs premium, sans cookie.",
      bullets: [
        "Plateforme self-serve + service managé",
        "Ciblage contextuel & sémantique sans cookie",
        "Mesure du lift de marque, de l'attention et du ROI",
        "Studio créatif, aucune ressource requise",
      ],
    },
    stats: [
      { numeric: 200, prefix: "", suffix: "%", label: "Lift d'engagement et d'attention" },
      { numeric: 2.9,  prefix: "", suffix: "X",  label: "Meilleure reconnaissance de marque" },
      { numeric: 34,   prefix: "", suffix: "S",  label: "Temps moyen passé par format" },
      { numeric: 30,   prefix: "+", suffix: "%", label: "Temps passé sur le site annonceur" },
    ],
  },
};

const LOGOS = [
  "Le Monde",
  "Les Échos",
  "L'Obs",
  "Le Figaro",
  "Libération",
  "Audi",
  "BMW",
  "L'Oréal",
  "Louis Vuitton",
  "BNP Paribas",
];

/* ── Fast count-up number ── */
function CountUp({
  numeric,
  prefix,
  suffix,
}: {
  numeric: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const isDecimal = !Number.isInteger(numeric);

  const spring = useSpring(0, { stiffness: 140, damping: 28, mass: 0.6 });
  const display = useTransform(spring, (v) =>
    isDecimal ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    if (isInView) spring.set(numeric);
  }, [isInView, spring, numeric]);

  return (
    <span ref={ref} className="font-bold leading-none tabular-nums" style={{ color: "#5b8cff", fontSize: "clamp(40px, 5vw, 72px)" }}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* ── Animated text line (transparent → opaque sweep) ── */
function FadeText({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.span
      className={className}
      style={style}
      initial={{ opacity: 0, filter: "blur(8px)", y: 6 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

/* ── Logo Slider ── */
function LogoSlider() {
  // Duplicate the list so the seamless loop works:
  // when the first copy scrolls fully out, the second copy is in place.
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative overflow-hidden"
      style={{
        marginBottom: "3rem",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* Keyframe defined inline — no globals.css needed */}
      <style>{`
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          width: "max-content",
          animation: "logoScroll 30s linear infinite",
          willChange: "transform",
        }}
      >
        {doubled.map((name, i) => (
          <div
            key={i}
            style={{
              width: 120,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              flexShrink: 0,
              backdropFilter: "blur(4px)",
              userSelect: "none",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function WhoWeHelp() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="px-4 md:px-5 py-4">
      <div
        className="relative overflow-hidden rounded-3xl w-full"
        style={{ background: "#07080f", minHeight: "90vh" }}
      >
        {/* Glow blob 1 — white */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-30%",
            left: "-20%",
            width: "65%",
            height: "130%",
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 35%, transparent 65%)",
            animation: "whoGlowMove 11s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        {/* Glow blob 2 — blue/violet, different path & speed */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-25%",
            left: "10%",
            width: "55%",
            height: "110%",
            background:
              "radial-gradient(ellipse at center, rgba(91,140,255,0.35) 0%, rgba(123,63,255,0.18) 40%, transparent 68%)",
            animation: "whoGlowMove2 14s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        <div
          className="relative z-10 flex flex-col"
          style={{ padding: "6rem 5rem 5rem", minHeight: "90vh" }}
        >
          {/* Title + CTA row (was left column of 3-col grid) */}
          <div className="flex items-end justify-between mb-10">
            <FadeText
              className="block font-extrabold text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(52px, 5.5vw, 86px)" }}
              delay={0}
            >
              {c.title}
            </FadeText>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-white/90"
                style={{ background: "#ffffff", color: "#07080f" }}
              >
                {c.learnMore} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* ── Logo Slider ── */}
          <LogoSlider />

          {/* 2-col grid: Publishers + Advertisers */}
          <div
            className="grid flex-1"
            style={{ gridTemplateColumns: "1fr 1fr", gap: "3.5rem", flex: 1 }}
          >
            {/* Publishers */}
            <div className="flex items-center">
              <div className="w-full">
                <FadeText
                  className="block font-black text-white mb-3"
                  style={{ fontSize: "1.75rem" }}
                  delay={0.1}
                >
                  {c.publishers.heading}
                </FadeText>
                <FadeText
                  className="block text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  delay={0.14}
                >
                  {c.publishers.description}
                </FadeText>
                <ul>
                  {c.publishers.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="border-b py-4 text-sm leading-relaxed overflow-hidden"
                      style={{ borderColor: "rgba(255,255,255,0.12)" }}
                    >
                      <FadeText
                        className="block"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        delay={0.18 + i * 0.13}
                      >
                        {b}
                      </FadeText>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Advertisers */}
            <div className="flex items-center">
              <div className="w-full">
                <FadeText
                  className="block font-black text-white mb-3"
                  style={{ fontSize: "1.75rem" }}
                  delay={0.15}
                >
                  {c.advertisers.heading}
                </FadeText>
                <FadeText
                  className="block text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  delay={0.19}
                >
                  {c.advertisers.description}
                </FadeText>
                <ul>
                  {c.advertisers.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="border-b py-4 text-sm leading-relaxed overflow-hidden"
                      style={{ borderColor: "rgba(255,255,255,0.12)" }}
                    >
                      <FadeText
                        className="block"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        delay={0.22 + i * 0.13}
                      >
                        {b}
                      </FadeText>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats row — count-up numbers */}
          <div className="grid grid-cols-4 gap-6 mt-14">
            {c.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CountUp numeric={s.numeric} prefix={s.prefix} suffix={s.suffix} />
                <div
                  className="text-sm leading-snug mt-2"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
