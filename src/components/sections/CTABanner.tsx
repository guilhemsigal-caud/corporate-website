"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    badge: "Ready to grow?",
    title: "Start building your audience today",
    subtitle: "Join 200+ publishers and 150+ brands already using Collective Audience to grow, monetize, and connect with their audiences.",
    cta1: "Contact our team", cta2: "Explore formats",
    nlTitle: "Stay ahead of the open web",
    nlSub: "Industry insights, product updates, and adtech trends, straight to your inbox.",
    nlPlaceholder: "your@email.com",
    nlBtn: "Subscribe",
    nlDisclaimer: "By subscribing you agree to our",
    nlPrivacy: "privacy policy",
    nlUnsub: ". Unsubscribe anytime.",
  },
  fr: {
    badge: "Prêt à grandir ?",
    title: "Commencez à construire votre audience dès aujourd'hui",
    subtitle: "Rejoignez 200+ éditeurs et 150+ marques qui utilisent déjà Collective Audience pour faire croître, monétiser et connecter leur audience.",
    cta1: "Contacter notre équipe", cta2: "Explorer les formats",
    nlTitle: "Restez en avance sur le web ouvert",
    nlSub: "Insights secteur, mises à jour produit et tendances adtech, directement dans votre boîte mail.",
    nlPlaceholder: "votre@email.com",
    nlBtn: "S'abonner",
    nlDisclaimer: "En vous abonnant, vous acceptez notre",
    nlPrivacy: "politique de confidentialité",
    nlUnsub: ". Désinscription à tout moment.",
  },
};

export function CTABanner() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="px-4 md:px-5 py-4 pb-6">
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{ background: "#07080f" }}
      >
        {/* Single, restrained accent glow — top center only */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse at center, rgba(91,140,255,0.13) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Top border accent */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 10%, rgba(91,140,255,0.3) 40%, rgba(7,226,220,0.3) 60%, transparent 90%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-mint mb-6 px-3 py-1 rounded-full border border-ca-mint/20">
              {c.badge}
            </span>

            <h2
              className="text-white font-bold tracking-tight mb-5 leading-tight whitespace-nowrap"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 3.5rem)" }}
            >
              {c.title}
            </h2>

            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {c.subtitle}
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #5b8cff, #7b3fff)" }}
              >
                {c.cta1}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Newsletter — minimal, integrated with the section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-ca-mint" />
              <span className="text-sm font-medium text-white/70">{c.nlTitle}</span>
            </div>
            <p className="text-white/35 text-sm mb-6">{c.nlSub}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder={c.nlPlaceholder}
                className="flex-1 px-4 py-3 rounded-xl border border-white/12 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-ca-blue/40 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-medium text-sm hover:bg-white/15 transition-all duration-200 whitespace-nowrap"
              >
                {c.nlBtn}
              </button>
            </form>
            <p className="text-xs text-white/25 mt-4">
              {c.nlDisclaimer}{" "}
              <Link href="/legal/privacy" className="underline hover:text-white/50 transition-colors">
                {c.nlPrivacy}
              </Link>
              {c.nlUnsub}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
