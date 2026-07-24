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
    title: "Conçu pour l'Open Web",
    subtitle:
      "Collective Audience connecte la création, l'intelligence audience, l'activation et la mesure en un seul moteur de croissance continu.",
  },
};

export function WhyCollectiveAudience() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="bg-ca-dark pt-24 pb-10 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main heading */}
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight"
            style={{
              background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {c.eyebrow}
          </h2>

          {/* Subtitle */}
          <p className="text-ca-text text-xl md:text-2xl font-semibold leading-snug mb-4">
            {c.title}
          </p>

          {/* Description */}
          <p className="text-ca-muted text-base md:text-lg leading-relaxed max-w-2xl">
            {c.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] mt-10">
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
