"use client";

import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import type { GalleryDemo } from "@/content/gallery";

interface Props {
  demos: GalleryDemo[];
  accent: string;
  name: string;
}

function DemoCard({ demo, accent, index }: { demo: GalleryDemo; accent: string; index: number }) {
  return (
    <motion.a
      href={demo.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5"
      style={{ borderColor: `${accent}35`, boxShadow: "0 2px 16px rgba(0,0,40,0.08)" }}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 320, background: `linear-gradient(145deg, ${accent}12 0%, #eef0fb 100%)` }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, ${accent}30 1px, transparent 1px), linear-gradient(to bottom, ${accent}30 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Phone frame */}
        <div
          className="relative rounded-[28px] border-[3px] overflow-hidden flex flex-col bg-white"
          style={{ width: 130, height: 240, borderColor: `${accent}60`, boxShadow: `0 8px 32px ${accent}25, 0 2px 8px rgba(0,0,40,0.12)` }}
        >
          <div className="flex justify-center pt-2 pb-1 flex-shrink-0">
            <div className="w-10 h-1.5 rounded-full" style={{ background: `${accent}40` }} />
          </div>
          <div className="flex-1 px-2 pb-2 space-y-1.5 overflow-hidden">
            <div className="h-2 rounded-full w-full" style={{ background: `${accent}20` }} />
            <div className="h-1.5 rounded-full w-4/5" style={{ background: `${accent}15` }} />
            <div className="h-1.5 rounded-full w-3/4" style={{ background: `${accent}15` }} />
            <div className="rounded-lg mt-2 flex items-center justify-center" style={{ height: 64, background: `linear-gradient(135deg, ${accent}25, ${accent}10)`, border: `1px solid ${accent}30` }}>
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: accent }}>
                <Play className="w-3.5 h-3.5 text-white fill-white" />
              </div>
            </div>
            <div className="h-1.5 rounded-full w-full mt-2" style={{ background: `${accent}12` }} />
            <div className="h-1.5 rounded-full w-2/3" style={{ background: `${accent}12` }} />
            <div className="h-1.5 rounded-full w-5/6" style={{ background: `${accent}10` }} />
          </div>
          <div className="flex justify-center pb-2">
            <div className="w-8 h-1 rounded-full" style={{ background: `${accent}50` }} />
          </div>
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: `${accent}18`, backdropFilter: "blur(4px)" }}
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg" style={{ background: accent, color: "#0e1025" }}>
            Voir la démo <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-between px-4 py-3 border-t"
        style={{ borderColor: `${accent}20`, background: "#f0f2fc" }}
      >
        <span className="text-sm font-semibold text-ca-text">{demo.label ?? `Démo ${index + 1}`}</span>
        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent }} />
      </div>
    </motion.a>
  );
}

export function DemoPlayer({ demos, accent, name }: Props) {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
    >
      {demos.map((demo, i) => (
        <DemoCard key={i} demo={demo} accent={accent} index={i} />
      ))}
    </div>
  );
}
