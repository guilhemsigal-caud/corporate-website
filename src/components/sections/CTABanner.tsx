"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { bootstrapBeOp, watchBeOp } from "@/lib/beop";

// Collective Audience newsletter embeds (BeOp content ids)
const NEWSLETTER_WIDGET = {
  fr: "66fe6bd5d7fdb349313f956f",
  en: "66fe6bb054d3bf2ffecbbeb1",
};

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
    nlTitle: "Subscribe to our newsletter",
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
    nlTitle: "Inscrivez-vous à notre newsletter",
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
  const newsletterId = NEWSLETTER_WIDGET[lang];

  // Load the CA widget SDK and (re)render the newsletter embed for this locale.
  useEffect(() => {
    bootstrapBeOp();
    watchBeOp();
  }, [lang]);

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
            <div className="flex flex-wrap items-center gap-5">
              {/* Collective Audience newsletter embed — FR / US per locale */}
              <div className="max-w-md w-full sm:w-auto sm:flex-1">
                <div
                  key={newsletterId}
                  className="BeOpWidget"
                  data-content={newsletterId}
                  data-name={`embed-${newsletterId}`}
                />
              </div>
              {/* Social links — TODO: replace href="#" with real URLs */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
