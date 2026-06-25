"use client";
import { GalleryGrid } from "./GalleryGrid";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: { badge: "Format Gallery", headline: "Creatives by industry.", subtitle: "Explore our formats by sector — click to see live demos." },
  fr: { badge: "Galerie de formats", headline: "Créatives par industrie.", subtitle: "Explorez nos formats par secteur — cliquez pour voir les démos en direct." },
};

export default function GalleryPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      <section className="relative bg-ca-dark overflow-hidden py-20 md:py-28">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle,rgba(123,63,255,0.14) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
          <div className="absolute bottom-[-5%] left-[5%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle,rgba(91,140,255,0.1) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite 5s" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-violet/30 bg-ca-violet/8 text-xs font-semibold tracking-widest uppercase text-ca-violet mb-6">{c.badge}</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.headline}</h1>
          <p className="text-ca-muted text-lg max-w-xl mx-auto">{c.subtitle}</p>
        </div>
      </section>
      <GalleryGrid />
    </main>
  );
}
