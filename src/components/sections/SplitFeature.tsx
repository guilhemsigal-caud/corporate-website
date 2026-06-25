"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

interface SplitFeatureProps {
  eyebrow: string;
  headline: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
  accent: string;
  reverse?: boolean;
  visual: React.ReactNode;
}

export function SplitFeature({
  eyebrow,
  headline,
  description,
  bullets,
  cta,
  accent,
  reverse = false,
  visual,
}: SplitFeatureProps) {
  return (
    <section className="bg-ca-dark py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className={reverse ? "lg:col-start-2" : ""}
          >
            <div
              className="h-px w-12 mb-6 rounded-full"
              style={{ background: accent }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-snug"
              style={{
                background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headline}
            </h2>
            <p className="text-ca-muted leading-relaxed mb-7 text-lg">{description}</p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ca-muted">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: accent }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-[0.98]"
              style={{
                background: accent,
                color: "#0a0c14",
                boxShadow: `0 0 0 rgba(0,0,0,0)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${accent}60`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
              }}
            >
              {cta.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable visual blocks ── */

export function PublishersVisual() {
  const { lang } = useLang();
  const stats = lang === "fr"
    ? [{ label: "Hausse eCPM", value: "+28%", accent: "#5b8cff" }, { label: "Taux remplissage", value: "94%", accent: "#07e2dc" }, { label: "Brand safety", value: "99%", accent: "#7b3fff" }, { label: "Latence", value: "<50ms", accent: "#5b8cff" }]
    : [{ label: "eCPM uplift", value: "+28%", accent: "#5b8cff" }, { label: "Fill rate", value: "94%", accent: "#07e2dc" }, { label: "Brand safety", value: "99%", accent: "#7b3fff" }, { label: "Latency", value: "<50ms", accent: "#5b8cff" }];
  const dashLabel = lang === "fr" ? "Tableau de bord éditeur" : "Publisher Dashboard";

  return (
    <div
      className="relative rounded-2xl border border-ca-border p-7 overflow-hidden"
      style={{ background: "linear-gradient(145deg, rgba(91,140,255,0.14) 0%, #eef0fb 100%)", boxShadow: "0 2px 16px rgba(0,0,40,0.07), 0 1px 3px rgba(0,0,40,0.05)", borderColor: "rgba(91,140,255,0.35)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(to right, transparent, #5b8cff, #07e2dc, transparent)" }}
      />
      <div className="text-xs font-semibold tracking-widest uppercase text-ca-blue mb-5">
        {dashLabel}
      </div>

      {/* Fake revenue chart */}
      <div className="flex items-end gap-1.5 h-28 mb-6 px-1">
        {[45, 55, 48, 70, 62, 78, 85, 72, 90, 88, 95, 100].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, rgba(91,140,255,0.15), rgba(91,140,255,0.5))`,
              borderTop: "1px solid rgba(91,140,255,0.4)",
              transformOrigin: "bottom",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between p-3 rounded-xl border"
            style={{ borderColor: `${s.accent}20`, background: `${s.accent}08` }}
          >
            <span className="text-xs text-ca-muted">{s.label}</span>
            <span className="text-sm font-bold" style={{ color: s.accent }}>
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdvertisersVisual() {
  const { lang } = useLang();
  const fr = lang === "fr";
  return (
    <div
      className="relative rounded-2xl border border-ca-border p-7 overflow-hidden"
      style={{ background: "linear-gradient(145deg, rgba(7,226,220,0.13) 0%, #eef0fb 100%)", boxShadow: "0 2px 16px rgba(0,0,40,0.07), 0 1px 3px rgba(0,0,40,0.05)", borderColor: "rgba(7,226,220,0.35)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(to right, transparent, #07e2dc, #7b3fff, transparent)" }}
      />
      <div className="text-xs font-semibold tracking-widest uppercase text-ca-mint mb-5">
        {fr ? "Performance campagne" : "Campaign Performance"}
      </div>

      {/* Campaign card */}
      <div
        className="rounded-xl border border-ca-border p-4 mb-4"
        style={{ background: "rgba(7,226,220,0.05)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-ca-text">BMW M Series, FR</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
            {fr ? "En direct" : "Live"}
          </span>
        </div>
        {[
          { label: fr ? "Lift de marque" : "Brand Lift", value: 78, color: "#07e2dc" },
          { label: fr ? "Score d'attention" : "Attention Score", value: 92, color: "#5b8cff" },
          { label: fr ? "Taux d'interaction" : "Interaction Rate", value: 65, color: "#7b3fff" },
        ].map((m) => (
          <div key={m.label} className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-ca-muted">{m.label}</span>
              <span className="text-xs font-bold" style={{ color: m.color }}>
                {m.value}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-ca-border overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: m.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${m.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { v: "+40%", l: fr ? "Lift marque" : "Brand Lift", c: "#07e2dc" },
          { v: "34s", l: fr ? "Attention" : "Attention", c: "#5b8cff" },
          { v: "3×", l: fr ? "Attribution" : "Attribution", c: "#7b3fff" },
        ].map((s) => (
          <div
            key={s.l}
            className="p-3 rounded-xl border"
            style={{ borderColor: `${s.c}22`, background: `${s.c}08` }}
          >
            <div className="text-xl font-bold" style={{ color: s.c }}>
              {s.v}
            </div>
            <div className="text-[10px] text-ca-muted mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
