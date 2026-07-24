"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export type CTAVariant = "default" | "publishers" | "advertisers";

const COPY = {
  en: {
    default: {
      badge: "Ready to grow?",
      title: "Start building your audience today",
      subtitle: "Join 200+ publishers and 150+ brands already using Collective Audience to grow, monetize, and connect with their audiences.",
      cta1: "Contact our team",
      cta1Href: "/contact",
      cta2: "Explore formats",
      cta2Href: "/gallery",
    },
    publishers: {
      badge: "For publishers",
      title: "Grow yield without sacrificing reader trust",
      subtitle: "Monetize attention with high-engagement formats, first-party data, and privacy-safe insights — built for premium media.",
      cta1: "Talk to publisher sales",
      cta1Href: "/contact",
      cta2: "Explore monetization",
      cta2Href: "/publishers/monetization",
    },
    advertisers: {
      badge: "For advertisers",
      title: "Reach readers who actually engage",
      subtitle: "High-attention formats, cookieless targeting, and measurable brand outcomes across 200+ premium publishers.",
      cta1: "Talk to advertiser sales",
      cta1Href: "/contact",
      cta2: "Browse creative gallery",
      cta2Href: "/gallery",
    },
    nlTitle: "Stay ahead of the open web",
    nlSub: "Industry insights, product updates, and adtech trends, straight to your inbox.",
    nlPlaceholder: "your@email.com",
    nlBtn: "Subscribe",
    nlDisclaimer: "By subscribing you agree to our",
    nlPrivacy: "privacy policy",
    nlUnsub: ". Unsubscribe anytime.",
  },
  fr: {
    default: {
      badge: "Prêt à grandir ?",
      title: "Commencez à construire votre audience dès aujourd'hui",
      subtitle: "Rejoignez 200+ éditeurs et 150+ marques qui utilisent déjà Collective Audience pour faire croître, monétiser et connecter leur audience.",
      cta1: "Contacter notre équipe",
      cta1Href: "/contact",
      cta2: "Explorer les formats",
      cta2Href: "/gallery",
    },
    publishers: {
      badge: "Pour les éditeurs",
      title: "Augmentez le yield sans perdre la confiance des lecteurs",
      subtitle: "Monétisez l'attention avec des formats engageants, de la data first-party et des insights privacy-safe — conçus pour les médias premium.",
      cta1: "Parler à l'équipe éditeurs",
      cta1Href: "/contact",
      cta2: "Voir la monétisation",
      cta2Href: "/publishers/monetization",
    },
    advertisers: {
      badge: "Pour les annonceurs",
      title: "Touchez des lecteurs qui s'engagent vraiment",
      subtitle: "Formats haute attention, ciblage cookieless et résultats de marque mesurables sur 200+ éditeurs premium.",
      cta1: "Parler à l'équipe annonceurs",
      cta1Href: "/contact",
      cta2: "Parcourir la galerie créative",
      cta2Href: "/gallery",
    },
    nlTitle: "Restez en avance sur l'open web",
    nlSub: "Insights secteur, mises à jour produit et tendances adtech, directement dans votre boîte mail.",
    nlPlaceholder: "votre@email.com",
    nlBtn: "S'abonner",
    nlDisclaimer: "En vous abonnant, vous acceptez notre",
    nlPrivacy: "politique de confidentialité",
    nlUnsub: ". Désinscription à tout moment.",
  },
};

export function CTABanner({ variant = "default" }: { variant?: CTAVariant }) {
  const { lang } = useLang();
  const base = COPY[lang];
  const c = base[variant];

  return (
    <section className="px-4 md:px-5 py-4 pb-8" aria-labelledby="cta-heading">
      <div className="relative rounded-3xl overflow-hidden" style={{ background: "#07080f" }}>
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse at center, rgba(91,140,255,0.13) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent 10%, rgba(91,140,255,0.3) 40%, rgba(7,226,220,0.3) 60%, transparent 90%)",
          }}
        />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-24 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="cta-heading"
              className="text-white font-bold tracking-tight mb-5 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 3.5rem)" }}
            >
              {c.title}
            </h2>

            <p className="text-white/50 text-lg max-w-2xl mb-10 leading-relaxed">
              {c.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={c.cta1Href}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ background: "linear-gradient(135deg, #5b8cff, #7b3fff)" }}
              >
                {c.cta1}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href={c.cta2Href}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-semibold transition-all duration-200 hover:bg-white/10 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {c.cta2}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-ca-mint" aria-hidden />
              <span className="text-base font-medium text-white/70">{base.nlTitle}</span>
            </div>
            <p className="text-white/35 text-sm mb-6">{base.nlSub}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
              <label className="sr-only" htmlFor="cta-newsletter-email">{base.nlPlaceholder}</label>
              <input
                id="cta-newsletter-email"
                type="email"
                placeholder={base.nlPlaceholder}
                className="flex-1 px-4 py-3 rounded-xl border border-white/12 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-ca-blue/40 focus:ring-2 focus:ring-ca-blue/30 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-medium text-sm hover:bg-white/15 transition-all duration-200 whitespace-nowrap"
              >
                {base.nlBtn}
              </button>
            </form>
            <p className="text-sm text-white/35 mt-4">
              {base.nlDisclaimer}{" "}
              <Link href="/legal/privacy" className="underline hover:text-white/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                {base.nlPrivacy}
              </Link>
              {base.nlUnsub}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
