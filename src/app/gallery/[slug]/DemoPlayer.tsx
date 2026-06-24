"use client";

import { ExternalLink } from "lucide-react";
import type { GalleryDemo } from "@/content/gallery";

// The demo pages are designed for ~375px mobile width
const IFRAME_W = 375;
const IFRAME_H = 720;
const CARD_W  = 260;
const SCALE   = CARD_W / IFRAME_W;          // ≈ 0.693
const CARD_H  = Math.round(IFRAME_H * SCALE); // ≈ 499

interface Props {
  demos: GalleryDemo[];
  accent: string;
  name: string;
}

export function DemoPlayer({ demos, accent, name }: Props) {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${CARD_W}px, 1fr))` }}
    >
      {demos.map((demo, i) => (
        <a
          key={i}
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
          style={{
            borderColor: `${accent}30`,
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          {/* ── Iframe miniature ── */}
          <div
            className="relative overflow-hidden bg-white"
            style={{ height: CARD_H }}
          >
            <iframe
              src={demo.url}
              loading="lazy"
              title={demo.label ?? `${name} démo ${i + 1}`}
              style={{
                width:  IFRAME_W,
                height: IFRAME_H,
                border: "none",
                display: "block",
                transform: `scale(${SCALE})`,
                transformOrigin: "top left",
                pointerEvents: "none",
              }}
            />

            {/* transparent click capture */}
            <div className="absolute inset-0 z-10" />

            {/* hover overlay */}
            <div
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: `${accent}28`, backdropFilter: "blur(3px)" }}
            >
              <div
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg"
                style={{ background: accent, color: "#0a0c14" }}
              >
                Ouvrir <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* ── Label ── */}
          <div
            className="flex items-center justify-between px-4 py-3 border-t"
            style={{ borderColor: `${accent}20`, background: "#111420" }}
          >
            <span className="text-sm font-semibold text-ca-text">
              {demo.label ?? `Démo ${i + 1}`}
            </span>
            <ExternalLink
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: accent }}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
