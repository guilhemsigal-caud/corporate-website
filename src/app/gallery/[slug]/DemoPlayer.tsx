"use client";

import { useState } from "react";
import { ExternalLink, Play, Monitor } from "lucide-react";
import { GalleryDemo } from "@/content/gallery";

interface DemoPlayerProps {
  demos: GalleryDemo[];
  accent: string;
  name: string;
}

export function DemoPlayer({ demos, accent, name }: DemoPlayerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const active = demos[activeIndex];

  return (
    <div className="w-full">
      {/* Demo selector tabs */}
      {demos.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {demos.map((demo, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); setLoaded(false); }}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                activeIndex === i
                  ? { background: accent, color: "#0a0c14", boxShadow: `0 0 20px ${accent}50` }
                  : { border: "1px solid rgba(255,255,255,0.1)", color: "#8892b0", background: "rgba(255,255,255,0.03)" }
              }
            >
              {demo.label ?? `Démo ${i + 1}`}
            </button>
          ))}
        </div>
      )}

      {/* Main demo frame */}
      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{ borderColor: `${accent}25` }}
      >
        {/* Article context header */}
        <div
          className="px-5 py-3 border-b border-ca-border flex items-center justify-between"
          style={{ background: "rgba(10,12,20,0.9)" }}
        >
          <div className="flex items-center gap-3">
            <Monitor className="w-4 h-4 text-ca-muted" />
            <span className="text-xs text-ca-muted">
              Format live — {name} {demos.length > 1 ? `· ${active.label ?? `Démo ${activeIndex + 1}`}` : ""}
            </span>
          </div>
          <a
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-white"
            style={{ color: accent }}
          >
            Ouvrir dans un nouvel onglet
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Iframe container */}
        <div className="relative bg-[#0d1020]" style={{ minHeight: "600px" }}>
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
              >
                <Play className="w-7 h-7" style={{ color: accent }} />
              </div>
              <p className="text-ca-muted text-sm">Chargement de la démo…</p>
            </div>
          )}
          <iframe
            key={active.url}
            src={active.url}
            className="w-full transition-opacity duration-500"
            style={{
              height: "620px",
              border: "none",
              opacity: loaded ? 1 : 0,
            }}
            onLoad={() => setLoaded(true)}
            title={`${name} — ${active.label ?? `Démo ${activeIndex + 1}`}`}
            allow="autoplay; fullscreen"
            loading="lazy"
          />
        </div>

        {/* Bottom bar */}
        <div
          className="px-5 py-3 border-t border-ca-border flex items-center justify-between"
          style={{ background: "rgba(10,12,20,0.9)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: accent, animation: "pulse-ring 2s ease-in-out infinite" }}
            />
            <span className="text-xs text-ca-muted">Démo interactive en direct</span>
          </div>
          {demos.length > 1 && (
            <div className="flex gap-1.5">
              {demos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIndex(i); setLoaded(false); }}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                  style={{ background: i === activeIndex ? accent : "rgba(255,255,255,0.2)" }}
                  aria-label={`Démo ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA grid below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {demos.map((demo, i) => (
          <a
            key={i}
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: i === activeIndex ? `${accent}40` : "rgba(30,34,54,0.8)",
              background: i === activeIndex ? `${accent}0c` : "rgba(17,20,32,0.6)",
            }}
          >
            <div>
              <div className="text-sm font-semibold text-ca-text">
                {demo.label ?? `Démo ${i + 1}`}
              </div>
              <div className="text-xs text-ca-muted mt-0.5">Voir la créative →</div>
            </div>
            <ExternalLink
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: accent }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
