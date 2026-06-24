import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { GALLERY_ITEMS } from "@/content/gallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { DemoPlayer } from "./DemoPlayer";

export async function generateStaticParams() {
  return GALLERY_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} — Gallery — Collective Audience`,
    description: item.description,
  };
}

export default async function GalleryItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  const related = GALLERY_ITEMS.filter(
    (i) => i.slug !== slug && i.category === item.category
  ).slice(0, 3);

  const hasDemos = item.demos && item.demos.length > 0;

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-ca-dark overflow-hidden py-16">
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div
            className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle,${item.accent}18 0%,transparent 70%)`,
              animation: "blob 12s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à la galerie
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: info */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}0a` }}
              >
                {item.category}
              </div>

              <h1
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-snug"
                style={{
                  background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.name}
              </h1>

              <p className="text-ca-muted text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium text-ca-muted border border-ca-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-3 gap-3">
                {item.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl border p-4 text-center"
                    style={{ borderColor: `${item.accent}25`, background: `${item.accent}0a` }}
                  >
                    <div
                      className="text-2xl font-bold mb-0.5"
                      style={{ color: item.accent }}
                    >
                      {kpi.value}
                    </div>
                    <div className="text-[10px] text-ca-muted leading-tight">{kpi.label}</div>
                  </div>
                ))}
              </div>

              {/* Demo count badge */}
              {hasDemos && (
                <div
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium"
                  style={{ borderColor: `${item.accent}25`, background: `${item.accent}08`, color: item.accent }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.accent, animation: "pulse-ring 2s ease-in-out infinite" }}
                  />
                  {item.demos!.length} démo{item.demos!.length > 1 ? "s" : ""} interactive{item.demos!.length > 1 ? "s" : ""} disponible{item.demos!.length > 1 ? "s" : ""}
                </div>
              )}
            </div>

            {/* Right: preview card (desktop) */}
            <div
              className="hidden lg:block rounded-2xl border overflow-hidden"
              style={{ borderColor: `${item.accent}20`, background: `linear-gradient(145deg,${item.accent}08 0%,#111420 60%)` }}
            >
              <div className="p-6">
                <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: item.accent }}>
                  {item.name}
                </div>
                <div className="flex items-end gap-1.5 h-20 mb-4">
                  {[55,70,45,85,60,92,75,88,65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ height: `${h}%`, background: `linear-gradient(to top,${item.accent}30,${item.accent}70)` }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {item.kpis.map(kpi => (
                    <div key={kpi.label} className="flex items-center justify-between text-xs">
                      <span className="text-ca-muted">{kpi.label}</span>
                      <span className="font-bold" style={{ color: item.accent }}>{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Demo section ── */}
      <section className="bg-ca-dark py-10 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-ca-text">
              {hasDemos ? "Démos interactives" : "Voir la démo"}
            </h2>
            {hasDemos && (
              <a
                href={item.demos![0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-white"
                style={{ color: item.accent }}
              >
                Ouvrir dans un onglet <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {hasDemos ? (
            <DemoPlayer demos={item.demos!} accent={item.accent} name={item.name} />
          ) : (
            /* No demos yet — request CTA */
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: `${item.accent}20`, background: `linear-gradient(145deg,${item.accent}08 0%,#111420 60%)` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right,transparent,${item.accent},transparent)` }}
              />
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5"
                  style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}
                >
                  <span className="text-2xl" style={{ color: item.accent }}>▶</span>
                </div>
                <h3 className="text-lg font-bold text-ca-text mb-2">Démo sur demande</h3>
                <p className="text-ca-muted text-sm mb-6 max-w-sm">
                  Les démos interactives pour cette catégorie sont disponibles sur demande. Contactez-nous pour une démonstration live.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#0a0c14] transition-all duration-200 hover:brightness-110"
                  style={{ background: item.accent }}
                >
                  Demander une démo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Related formats ── */}
      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-14">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-lg font-bold text-ca-text mb-5">Formats similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/gallery/${r.slug}`}
                  className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: `${r.accent}22`, background: `${r.accent}08` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold" style={{ color: r.accent }}>
                      {r.category}
                    </div>
                    {r.demos && r.demos.length > 0 && (
                      <span
                        className="text-[9px] px-2 py-0.5 rounded-full border font-semibold"
                        style={{ color: r.accent, borderColor: `${r.accent}30`, background: `${r.accent}0a` }}
                      >
                        {r.demos.length} démo{r.demos.length > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-ca-text mb-1 group-hover:text-white transition-colors">
                    {r.name}
                  </div>
                  <div className="text-xs text-ca-muted">
                    {r.kpis[0].value} {r.kpis[0].label}
                  </div>
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
