"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { DemoGrid } from "./DemoGrid";
import { useLang } from "@/lib/i18n";
import type { GalleryItem } from "@/content/gallery";

const COPY = {
  en: {
    back: "Gallery",
    countLabel: (n: number) => `${n} creative${n > 1 ? "s" : ""}, click to see live demo`,
    onDemand: "Demo on request",
    onDemandDesc: "Contact us for a live demonstration of this format.",
    demoCta: "Request a demo",
    related: "Similar formats",
  },
  fr: {
    back: "Galerie",
    countLabel: (n: number) => `${n} créative${n > 1 ? "s" : ""}, cliquez pour voir la démo en direct`,
    onDemand: "Démo sur demande",
    onDemandDesc: "Contactez-nous pour une démonstration en direct de ce format.",
    demoCta: "Demander une démo",
    related: "Formats similaires",
  },
};

interface Props {
  item: GalleryItem;
  related: GalleryItem[];
}

export function GalleryItemClient({ item, related }: Props) {
  const { lang } = useLang();
  const c = COPY[lang];
  const hasDemos = item.demos && item.demos.length > 0;

  return (
    <main>
      <section className="bg-ca-dark py-14 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> {c.back}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-3" style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}08` }}>{item.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{item.name}</h1>
              <p className="text-ca-muted leading-relaxed max-w-xl">{lang === "fr" && item.fr ? item.fr.description : item.description}</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {(lang === "fr" && item.fr ? item.fr.kpis : item.kpis).map((kpi) => (
                <div key={kpi.label} className="rounded-xl border px-4 py-3 text-center min-w-[80px]" style={{ borderColor: `${item.accent}35`, background: `${item.accent}10`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                  <div className="text-xl font-bold" style={{ color: item.accent }}>{kpi.value}</div>
                  <div className="text-[10px] text-ca-muted mt-0.5">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
          {hasDemos ? (
            <>
              <p className="text-sm text-ca-muted mb-6">{c.countLabel(item.demos!.length)}</p>
              <DemoGrid demos={item.demos!} accent={item.accent} slug={item.slug} />
            </>
          ) : (
            <div className="rounded-2xl border flex flex-col items-center justify-center py-20 text-center" style={{ borderColor: `${item.accent}35`, background: `${item.accent}08` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}>
                <span className="text-xl" style={{ color: item.accent }}>▶</span>
              </div>
              <h3 className="text-base font-bold text-ca-text mb-2">{c.onDemand}</h3>
              <p className="text-ca-muted text-sm mb-5 max-w-sm">{c.onDemandDesc}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0e1025]" style={{ background: item.accent }}>{c.demoCta} <ArrowRight className="w-4 h-4" /></Link>
            </div>
          )}
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-12">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-base font-bold text-ca-text mb-5">{c.related}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/gallery/${r.slug}`} className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: `${r.accent}35`, background: `${r.accent}0a`, boxShadow: "0 2px 8px rgba(0,0,40,0.05)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold" style={{ color: r.accent }}>{r.name}</span>
                    {r.demos && r.demos.length > 0 && <span className="text-[9px] px-2 py-0.5 rounded-full border font-semibold" style={{ color: r.accent, borderColor: `${r.accent}30`, background: `${r.accent}0a` }}>{r.demos.length} démo{r.demos.length > 1 ? "s" : ""}</span>}
                  </div>
                  <p className="text-xs text-ca-muted">{r.description.slice(0, 80)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CTABanner />
    </main>
  );
}
