"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatProps {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  accent: string;
  delay: number;
}

function AnimatedStat({ prefix, value, suffix, label, sublabel, accent, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { stiffness: 50, damping: 18, mass: 1 });
  const display = useTransform(spring, (v) =>
    value < 10 ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-8"
    >
      <div
        className="text-5xl md:text-6xl font-bold tracking-tight mb-2 tabular-nums"
        style={{
          background: `linear-gradient(135deg, ${accent} 0%, #0e1025 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="text-ca-text font-semibold text-base mb-1">{label}</div>
      <div className="text-ca-muted text-sm">{sublabel}</div>
    </motion.div>
  );
}

const STATS: Omit<StatProps, "delay">[] = [
  {
    prefix: "+",
    value: 40,
    suffix: "%",
    label: "Brand Lift",
    sublabel: "average across campaigns",
    accent: "#5b8cff",
  },
  {
    prefix: "",
    value: 34,
    suffix: "s",
    label: "Time on Format",
    sublabel: "avg. attention per ad unit",
    accent: "#07e2dc",
  },
  {
    prefix: ">",
    value: 1,
    suffix: "%",
    label: "Interaction Rate",
    sublabel: "industry avg. is 0.1%",
    accent: "#7b3fff",
  },
  {
    prefix: "",
    value: 3,
    suffix: "×",
    label: "Brand Attribution",
    sublabel: "vs. standard display",
    accent: "#5b8cff",
  },
];

export function KPIBar() {
  return (
    <section className="relative bg-ca-surface border-y border-ca-border overflow-hidden py-20">
      {/* Subtle glow strip */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(91,140,255,0.5) 30%, rgba(7,226,220,0.5) 70%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-ca-muted text-sm font-semibold tracking-widest uppercase mb-12"
        >
          Proven performance across 200+ publishers & 150+ brands
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-ca-border">
          {STATS.map((stat, i) => (
            <AnimatedStat key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(123,63,255,0.4) 30%, rgba(91,140,255,0.4) 70%, transparent)",
        }}
      />
    </section>
  );
}
