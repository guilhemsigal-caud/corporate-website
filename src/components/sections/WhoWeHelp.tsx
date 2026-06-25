"use client";

import { motion } from "framer-motion";
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
      { value: "200%", label: "Engagement and Attention Lift" },
      { value: "2.9X", label: "More Brand Recognition" },
      { value: "34S", label: "Average Time Spent per Format" },
      { value: "+30%", label: "Time Spent on Advertiser's Site" },
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
      { value: "200%", label: "Lift d'engagement et d'attention" },
      { value: "2,9X", label: "Meilleure reconnaissance de marque" },
      { value: "34S", label: "Temps moyen passé par format" },
      { value: "+30%", label: "Temps passé sur le site annonceur" },
    ],
  },
};

export function WhoWeHelp() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="px-4 md:px-5 py-4">
      <div
        className="relative overflow-hidden rounded-3xl w-full"
        style={{ background: "#07080f", minHeight: 580 }}
      >
        {/* Glow blob — bright white, moving randomly across the section */}
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

        <div
          className="relative z-10 flex flex-col"
          style={{ padding: "5rem 4rem 4rem", minHeight: 580 }}
        >
          {/* Main 3-col grid */}
          <div
            className="grid flex-1"
            style={{ gridTemplateColumns: "5fr 4fr 4fr", gap: "3.5rem", flex: 1 }}
          >
            {/* Left col: big title top, white CTA button bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between"
              style={{ minHeight: 320 }}
            >
              <h2
                className="font-extrabold text-white leading-none tracking-tight"
                style={{ fontSize: "clamp(52px, 5.5vw, 86px)" }}
              >
                {c.title}
              </h2>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-white/90"
                  style={{ background: "#ffffff", color: "#07080f" }}
                >
                  {c.learnMore} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Publishers — vertically centered, no border above heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center"
            >
              <div className="w-full">
                <p
                  className="font-extrabold text-white mb-5"
                  style={{ fontSize: "1.35rem" }}
                >
                  {c.publishers.heading}
                </p>
                <ul>
                  {c.publishers.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="border-b py-4 text-white/60 text-sm leading-relaxed"
                      style={{ borderColor: "rgba(255,255,255,0.12)" }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Advertisers — vertically centered, no border above heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="w-full">
                <p
                  className="font-extrabold text-white mb-5"
                  style={{ fontSize: "1.35rem" }}
                >
                  {c.advertisers.heading}
                </p>
                <ul>
                  {c.advertisers.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="border-b py-4 text-white/60 text-sm leading-relaxed"
                      style={{ borderColor: "rgba(255,255,255,0.12)" }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-6 mt-14">
            {c.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="font-bold mb-1 leading-none"
                  style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "#5b8cff" }}
                >
                  {s.value}
                </div>
                <div className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>
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
