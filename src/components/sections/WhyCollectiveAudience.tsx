"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "Why Collective Audience",
    title: "Built for the Open Web",
    subtitle:
      "Collective Audience connects creative, audience intelligence, activation, and measurement into one continuous engine for growth.",
  },
  fr: {
    eyebrow: "Pourquoi Collective Audience",
    title: "Conçu pour le Web Ouvert",
    subtitle:
      "Collective Audience connecte la création, l'intelligence audience, l'activation et la mesure en un seul moteur de croissance continu.",
  },
};

export function WhyCollectiveAudience() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="bg-ca-dark py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-6 px-3 py-1 rounded-full border"
            style={{
              color: "#5b8cff",
              borderColor: "rgba(91,140,255,0.2)",
              background: "rgba(91,140,255,0.06)",
            }}
          >
            {c.eyebrow}
          </span>

          {/* Heading */}
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {c.title}
          </h2>

          {/* Subtitle */}
          <p className="text-ca-muted text-xl md:text-2xl leading-relaxed max-w-2xl">
            {c.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] mt-16">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #d0d8f0 20%, #d0d8f0 80%, transparent)",
          }}
        />
      </div>
    </section>
  );
}
