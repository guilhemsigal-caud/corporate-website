"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PillarHero } from "@/components/sections/PillarHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    hero: {
      eyebrow: "Advertisers · Creative Gallery",
      headline: "See the formats in action.",
      subtitle: "We're launching with our Creative Gallery — interactive demos of the high-attention formats brands run on Collective Audience. Full case studies are coming soon.",
      accent: "#07e2dc",
      ctaPrimary: { label: "Open Creative Gallery", href: "/gallery" },
      ctaSecondary: { label: "Contact sales", href: "/contact" },
      stats: [{ value: "20+", label: "format demos" }, { value: "34s", label: "avg. attention" }, { value: "150+", label: "brand campaigns" }],
    },
    bodyTitle: "Why the gallery for launch",
    body: "Case study write-ups are still being finalized. Until then, explore live creative demos — the same formats that drive brand lift and attention for advertisers across our publisher network.",
    cta: "Browse Creative Gallery",
  },
  fr: {
    hero: {
      eyebrow: "Annonceurs · Galerie créative",
      headline: "Voir les formats en action.",
      subtitle: "Pour le lancement, nous mettons en avant la Galerie créative — des démos interactives des formats haute attention. Les cas clients complets arrivent bientôt.",
      accent: "#07e2dc",
      ctaPrimary: { label: "Ouvrir la galerie créative", href: "/gallery" },
      ctaSecondary: { label: "Contacter les ventes", href: "/contact" },
      stats: [{ value: "20+", label: "démos de formats" }, { value: "34s", label: "attention moy." }, { value: "150+", label: "campagnes marques" }],
    },
    bodyTitle: "Pourquoi la galerie pour le lancement",
    body: "Les cas clients détaillés sont encore en cours de finalisation. En attendant, explorez les démos créatives live — les mêmes formats qui génèrent brand lift et attention pour les annonceurs.",
    cta: "Parcourir la galerie créative",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      <PillarHero {...c.hero} />
      <section className="bg-ca-dark py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-ca-text mb-4">{c.bodyTitle}</h2>
          <p className="text-base md:text-lg text-ca-muted leading-relaxed mb-8">{c.body}</p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ca-blue"
          >
            {c.cta} <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>
      <CTABanner variant="advertisers" />
    </main>
  );
}
