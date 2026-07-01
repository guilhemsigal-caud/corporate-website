"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY_ITEMS, type GalleryItem } from "@/content/gallery";
import { useLang } from "@/lib/i18n";

const NAMES: Record<string, { en: string; fr: string }> = {
  automobile: { en: "Automobile", fr: "Automobile" },
  beaute: { en: "Beauty", fr: "Beauté" },
  sante: { en: "Healthcare", fr: "Santé" },
  retail: { en: "Retail", fr: "Retail" },
  finance: { en: "Personal Finance", fr: "Finance Perso" },
  spiritueux: { en: "Spirits", fr: "Spiritueux" },
  "droit-politique": { en: "Law & Politics", fr: "Droit & Politique" },
};

const COPY = {
  en: { seeCreatives: "See creatives", demos: "demo", demosPlural: "demos" },
  fr: { seeCreatives: "Voir les créatives", demos: "démo", demosPlural: "démos" },
};

interface Props {
  items?: GalleryItem[];
}

export function GalleryGrid({ items }: Props) {
  const { lang } = useLang();
  const c = COPY[lang];
  const industries = (items ?? GALLERY_ITEMS).filter((i) => i.category === "industries");

  return (
    <section className="bg-ca-dark py-12 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((item, i) => (
            <motion.div key={item.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.4 }}>
              <Link href={`/gallery/${item.slug}`} className="group relative flex flex-col h-full rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${item.accent}45`, background: `linear-gradient(145deg, ${item.accent}18 0%, #eef0fb 100%)`, boxShadow: "0 2px 16px rgba(0,0,40,0.07), 0 1px 3px rgba(0,0,40,0.05)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, transparent 5%, ${item.accent} 40%, ${item.accent} 60%, transparent 95%)` }} />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}10` }}>{item.category}</span>
                    {item.demos && item.demos.length > 0 && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border" style={{ color: item.accent, borderColor: `${item.accent}35`, background: `${item.accent}0a` }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.accent }} />
                        {item.demos.length} {item.demos.length > 1 ? c.demosPlural : c.demos}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-ca-text mb-2 leading-snug">{NAMES[item.slug]?.[lang] ?? item.name}</h3>
                  <p className="text-sm text-ca-muted leading-relaxed flex-1 mb-5">{lang === "fr" && item.fr ? item.fr.description : item.description}</p>
                  <div className="flex flex-wrap gap-3 pt-4 border-t mb-4" style={{ borderColor: `${item.accent}25` }}>
                    {(lang === "fr" && item.fr ? item.fr.kpis : item.kpis).map((kpi) => (
                      <div key={kpi.label}><span className="text-sm font-bold" style={{ color: item.accent }}>{kpi.value}</span><span className="text-[10px] text-ca-muted ml-1">{kpi.label}</span></div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5" style={{ color: item.accent }}>
                    {c.seeCreatives}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
