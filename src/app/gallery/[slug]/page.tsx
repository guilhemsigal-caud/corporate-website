import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/content/gallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { DemoPlayer } from "./DemoPlayer";

export async function generateStaticParams() {
  return GALLERY_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} — Gallery — Collective Audience`,
    description: item.description,
  };
}

export default async function GalleryItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  const related = GALLERY_ITEMS.filter(
    (i) => i.slug !== slug && i.category === item.category
  ).slice(0, 3);

  const hasDemos = item.demos && item.demos.length > 0;

  return (
    <main>
      <section className="bg-ca-dark py-14 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          {/* Back */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Galerie
          </Link>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
            <div className="flex-1">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-3"
                style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}08` }}
              >
                {item.category}
              </span>
              <h1
                className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
                style={{
                  background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.name}
              </h1>
              <p className="text-ca-muted leading-relaxed max-w-xl">{item.description}</p>
            </div>

            {/* KPIs inline */}
            <div className="flex gap-3 flex-wrap">
              {item.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border px-4 py-3 text-center min-w-[80px]"
                  style={{ borderColor: `${item.accent}25`, background: `${item.accent}08` }}
                >
                  <div className="text-xl font-bold" style={{ color: item.accent }}>
                    {kpi.value}
                  </div>
                  <div className="text-[10px] text-ca-muted mt-0.5">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Demos */}
          {hasDemos ? (
            <>
              <p className="text-sm text-ca-muted mb-6">
                {item.demos!.length} créative{item.demos!.length > 1 ? "s" : ""} — cliquez pour voir la démo en direct
              </p>
              <DemoPlayer demos={item.demos!} accent={item.accent} name={item.name} />
            </>
          ) : (
            <div
              className="rounded-2xl border flex flex-col items-center justify-center py-20 text-center"
              style={{ borderColor: `${item.accent}20`, background: `${item.accent}06` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}
              >
                <span className="text-xl" style={{ color: item.accent }}>▶</span>
              </div>
              <h3 className="text-base font-bold text-ca-text mb-2">Démo sur demande</h3>
              <p className="text-ca-muted text-sm mb-5 max-w-sm">
                Contactez-nous pour une démonstration live de ce format.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0a0c14]"
                style={{ background: item.accent }}
              >
                Demander une démo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-12">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-base font-bold text-ca-text mb-5">Formats similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/gallery/${r.slug}`}
                  className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: `${r.accent}22`, background: `${r.accent}08` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold" style={{ color: r.accent }}>{r.name}</span>
                    {r.demos && r.demos.length > 0 && (
                      <span
                        className="text-[9px] px-2 py-0.5 rounded-full border font-semibold"
                        style={{ color: r.accent, borderColor: `${r.accent}30`, background: `${r.accent}0a` }}
                      >
                        {r.demos.length} démo{r.demos.length > 1 ? "s" : ""}
                      </span>
                    )}
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
