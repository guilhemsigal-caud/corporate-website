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
      bullets: [
        "Monetize attention, not just impressions",
        "Higher yield through interactive formats",
        "Privacy-safe data with full transparency",
      ],
    },
    advertisers: {
      heading: "for advertisers",
      bullets: [
        "Measure performance beyond impressions",
        "Engagement that drives decisions",
        "Real-time intent signals",
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
      bullets: [
        "Monétisez l'attention, pas seulement les impressions",
        "Yield plus élevé via des formats interactifs",
        "Données privacy-safe avec totale transparence",
      ],
    },
    advertisers: {
      heading: "pour les annonceurs",
      bullets: [
        "Mesurez la performance au-delà des impressions",
        "Engagement qui influence les décisions",
        "Signaux d'intention en temps réel",
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
          {/* Main 3-col grid */}
          <div
            className="grid flex-1"
            style={{ gridTemplateColumns: "5fr 4fr 4fr", gap: "3.5rem", flex: 1 }}
          >
            {/* Left: title + CTA */}
            <div className="flex flex-col justify-between" style={{ minHeight: 400 }}>
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

            {/* Publishers */}
            <div className="flex items-center">
              <div className="w-full">
                <FadeText
                  className="block font-black text-white mb-5"
                  style={{ fontSize: "1.75rem" }}
                  delay={0.1}
                >
                  {c.publishers.heading}
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
                  className="block font-black text-white mb-5"
                  style={{ fontSize: "1.75rem" }}
                  delay={0.15}
                >
                  {c.advertisers.heading}
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
