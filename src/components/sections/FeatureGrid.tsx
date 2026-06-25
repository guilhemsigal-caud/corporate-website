"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  accent?: string;
}

interface FeatureGridProps {
  features: Feature[];
  cols?: 2 | 3 | 4;
  accent?: string;
}

export function FeatureGrid({ features, cols = 3, accent = "#5b8cff" }: FeatureGridProps) {
  const colClass = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-5`}>
      {features.map((f, i) => {
        const color = f.accent ?? accent;
        const card = (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
            style={{ borderColor: `${color}45`, background: `linear-gradient(145deg, ${color}1e 0%, #eef0fb 100%)`, boxShadow: "0 2px 16px rgba(0,0,40,0.07), 0 1px 3px rgba(0,0,40,0.05)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(to right, transparent 5%, ${color} 40%, ${color} 60%, transparent 95%)` }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 0%, ${color}10 0%, transparent 65%)` }}
            />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
              >
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-ca-text mb-2 leading-snug">{f.title}</h3>
              <p className="text-sm text-ca-muted leading-relaxed">{f.description}</p>
              {f.href && (
                <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold transition-colors duration-200"
                  style={{ color }}
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              )}
            </div>
          </motion.div>
        );
        return f.href ? <Link key={f.title} href={f.href}>{card}</Link> : card;
      })}
    </div>
  );
}
