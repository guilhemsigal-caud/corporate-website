"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY_ITEMS, CATEGORIES, GalleryCategory } from "@/content/gallery";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("all");

  const filtered = active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section className="bg-ca-dark py-12 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                active === cat.value
                  ? { background: "#7b3fff", color: "#f0f2ff", boxShadow: "0 0 24px rgba(123,63,255,0.45)" }
                  : { border: "1px solid rgba(255,255,255,0.08)", color: "#8892b0", background: "rgba(255,255,255,0.03)" }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/gallery/${item.slug}`}
                  className="group relative flex flex-col h-full rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${item.accent}22`, background: `linear-gradient(145deg,${item.accent}0a 0%,#111420 55%)` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${item.accent} 40%,${item.accent} 60%,transparent 95%)` }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%,${item.accent}10 0%,transparent 65%)` }} />

                  <div className="relative flex flex-col h-full">
                    {/* Category badge + demo badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}0a` }}>
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {item.demos && item.demos.length > 0 && (
                          <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border" style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}0a` }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.accent }} />
                            {item.demos.length} démo{item.demos.length > 1 ? "s" : ""}
                          </span>
                        )}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5" style={{ color: item.accent }} />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-ca-text mb-2 leading-snug">{item.name}</h3>
                    <p className="text-sm text-ca-muted leading-relaxed flex-1 mb-5">{item.description}</p>

                    {/* KPIs */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: `${item.accent}18` }}>
                      {item.kpis.map((kpi) => (
                        <div key={kpi.label} className="flex items-center gap-1.5">
                          <span className="text-sm font-bold" style={{ color: item.accent }}>{kpi.value}</span>
                          <span className="text-[10px] text-ca-muted">{kpi.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
