"use client";
import { PillarHero } from "@/components/sections/PillarHero";
import { CTABanner } from "@/components/sections/CTABanner";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    hero: { eyebrow: "Advertisers · Formats", headline: "Ad formats that earn attention.", subtitle: "From immersive video to conversational experiences, our formats are designed to generate genuine interaction: not just impressions.", accent: "#07e2dc", ctaPrimary: { label: "Explore the gallery", href: "/gallery" }, stats: [{ value: "34s", label: "avg. attention" }, { value: ">1%", label: "interaction rate" }, { value: "+40%", label: "brand lift" }] },
    subtitle: "Discover all our formats in the interactive gallery, with live demos and real KPIs.",
    viewDemo: "View demo →",
    formats: [["Conversational","Interactive dialogue formats that engage users in a natural Q&A within the article.","#07e2dc"],["Immersive Video","Full-screen scroll-triggered video with interactive overlays and attention tracking.","#5b8cff"],["Slider","Before/after interactive slider for product comparisons and brand storytelling.","#7b3fff"],["Focus Vidéo","High-attention mid-article video that activates only when fully in view.","#07e2dc"],["Branded Content","Long-form native content units that blend seamlessly with editorial.","#5b8cff"],["Rich Media","Expandable, animated formats with interactive product showcases.","#7b3fff"]],
  },
  fr: {
    hero: { eyebrow: "Annonceurs · Formats", headline: "Des formats publicitaires qui captent l'attention.", subtitle: "De la vidéo immersive aux expériences conversationnelles, nos formats sont conçus pour générer une véritable interaction: pas seulement des impressions.", accent: "#07e2dc", ctaPrimary: { label: "Explorer la galerie", href: "/gallery" }, stats: [{ value: "34s", label: "attention moy." }, { value: ">1%", label: "taux d'interaction" }, { value: "+40%", label: "lift de marque" }] },
    subtitle: "Découvrez tous nos formats dans la galerie interactive, avec démos en direct et KPIs réels.",
    viewDemo: "Voir la démo →",
    formats: [["Conversationnel","Formats de dialogue interactif engageant les utilisateurs dans un Q&A naturel au sein de l'article.","#07e2dc"],["Vidéo Immersive","Vidéo plein écran déclenchée au scroll avec superpositions interactives et mesure d'attention.","#5b8cff"],["Slider","Slider interactif avant/après pour comparaisons produits et brand storytelling.","#7b3fff"],["Focus Vidéo","Vidéo haute attention au milieu de l'article qui s'active uniquement quand elle est entièrement visible.","#07e2dc"],["Branded Content","Unités de contenu natif long-format qui se fondent parfaitement dans l'éditorial.","#5b8cff"],["Rich Media","Formats expansibles et animés avec showcases produits interactifs.","#7b3fff"]],
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      <PillarHero {...c.hero} />
      <section className="bg-ca-dark py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-center text-ca-muted mb-10">{c.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.formats.map(([name, desc, color]) => (
              <Link key={name as string} href="/gallery" className="group relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${color}35`, background: `linear-gradient(145deg, ${color}15 0%, #eef0fb 100%)`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${color} 40%,${color} 60%,transparent 95%)` }} />
                <div className="text-sm font-bold mb-2" style={{ color: color as string }}>{name as string}</div>
                <p className="text-xs text-ca-muted leading-relaxed">{desc as string}</p>
                <div className="mt-4 text-xs font-semibold" style={{ color: color as string }}>{c.viewDemo}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner variant="advertisers" />
    </main>
  );
}
