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
      { value: "2.9×", label: "More Brand Recognition" },
      { value: "34s", label: "Average Time Spent per Format" },
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
        "Yield plus élevé grâce aux formats interactifs",
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
      { value: "2,9×", label: "Meilleure reconnaissance de marque" },
      { value: "34s", label: "Temps moyen passé par format" },
      { value: "+30%", label: "Temps passé sur le site annonceur" },
    ],
  },
};

export function WhoWeHelp() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="px-4 md:px-6 py-4">
    <div
      className="relative overflow-hidden rounded-3xl w-full"
      style={{ background: "#07080f" }}
    >
      {/* Moving white glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-10%",
          width: "55%",
          height: "90%",
          background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)",
          animation: "whoGlowMove 9s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">

        {/* Top grid: title | publishers | advertisers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">

          {/* Title + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              {c.title}
            </h2>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200 self-start"
            >
              {c.learnMore} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Publishers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="border-t border-white/20 pt-5 mb-6">
              <span className="text-xl font-bold text-white">{c.publishers.heading}</span>
            </div>
            <ul className="space-y-0">
              {c.publishers.bullets.map((b, i) => (
                <li
                  key={i}
                  className="border-b border-white/10 py-4 text-white/70 text-sm leading-relaxed"
                >
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Advertisers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="border-t border-white/20 pt-5 mb-6">
              <span className="text-xl font-bold text-white">{c.advertisers.heading}</span>
            </div>
            <ul className="space-y-0">
              {c.advertisers.bullets.map((b, i) => (
                <li
                  key={i}
                  className="border-b border-white/10 py-4 text-white/70 text-sm leading-relaxed"
                >
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {c.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ color: "#5b8cff" }}
              >
                {s.value}
              </div>
              <div className="text-white/50 text-sm leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
    </section>
  );
}
