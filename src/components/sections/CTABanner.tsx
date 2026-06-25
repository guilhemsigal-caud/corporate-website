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
    <section className="relative bg-ca-dark py-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(91,140,255,0.08) 0%, transparent 70%)" }} />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(91,140,255,0.5) 30%, rgba(7,226,220,0.5) 70%, transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-mint mb-5 px-3 py-1 rounded-full border border-ca-mint/20 bg-ca-mint/8">
            {c.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
            <span style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {c.title}
            </span>
          </h2>
          <p className="text-ca-muted text-lg max-w-xl mx-auto mb-10">{c.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-ca-blue text-white font-semibold text-[1.05rem] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_35px_rgba(91,140,255,0.45)] active:scale-[0.98]">
              {c.cta1}<ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link href="/gallery" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-ca-border bg-black/5 text-ca-text font-semibold text-[1.05rem] backdrop-blur-sm transition-all duration-200 hover:bg-black/8 hover:border-ca-mint/40 active:scale-[0.98]">
              {c.cta2}<ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-7 rounded-2xl border border-ca-border bg-ca-surface/60 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-ca-mint" />
            <span className="text-sm font-semibold text-ca-text">{c.nlTitle}</span>
          </div>
          <p className="text-ca-muted text-sm mb-5">{c.nlSub}</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={c.nlPlaceholder} className="flex-1 px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text placeholder:text-ca-muted text-sm focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors" required />
            <button type="submit" className="px-6 py-3 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(91,140,255,0.35)] transition-all duration-200 whitespace-nowrap active:scale-[0.98]">
              {c.nlBtn}
            </button>
          </form>
          <p className="text-xs text-ca-muted mt-3">
            {c.nlDisclaimer}{" "}
            <Link href="/legal/privacy" className="underline hover:text-ca-text transition-colors">{c.nlPrivacy}</Link>
            {c.nlUnsub}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
