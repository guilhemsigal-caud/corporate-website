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
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #05060f 0%, #0b0d1f 45%, #0d0820 100%)" }}
    >
      {/* Rich background glow — much more visible than before */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(91,80,255,0.18) 0%, rgba(91,140,255,0.10) 40%, transparent 72%)",
        }}
      />

      {/* Top edge accent line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(120,80,255,0.6) 30%, rgba(91,140,255,0.6) 70%, transparent)",
        }}
      />

      {/* Decorative glow orb behind the title area */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 560,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(100,60,255,0.22) 0%, rgba(91,140,255,0.12) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        {/* Main heading block — staggered fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-mint mb-6 px-3 py-1 rounded-full border border-ca-mint/20 bg-ca-mint/8">
            {c.badge}
          </span>

          {/* Title — larger, bright gradient (white → violet-blue) */}
          <h2
            className="font-bold tracking-tight mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #818cf8 75%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {c.title}
            </span>
          </h2>

          <p className="text-ca-muted text-lg max-w-xl mx-auto mb-10">{c.subtitle}</p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA — glow on hover + scale */}
            <div className="relative group/primary">
              {/* Persistent subtle glow ring behind the button */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-50 group-hover/primary:opacity-90 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(91,140,255,0.5) 0%, transparent 70%)",
                  filter: "blur(16px)",
                  transform: "scale(1.15)",
                }}
              />
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl text-white font-semibold text-[1.05rem] transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #5b6bff 0%, #7c3aed 100%)",
                  boxShadow: "0 0 0 1px rgba(120,100,255,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px rgba(91,100,255,0.55), 0 0 60px rgba(124,58,237,0.25), 0 0 0 1px rgba(150,130,255,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px rgba(120,100,255,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                {c.cta1}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover/primary:translate-x-1" />
              </Link>
            </div>

            {/* Secondary CTA */}
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl border border-ca-border bg-white/5 text-ca-text font-semibold text-[1.05rem] backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-ca-mint/40 hover:scale-[1.02] active:scale-[0.97]"
            >
              {c.cta2}
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Newsletter block — delayed fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 p-7 rounded-2xl border border-ca-border bg-ca-surface/60 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-ca-mint" />
            <span className="text-sm font-semibold text-ca-text">{c.nlTitle}</span>
          </div>
          <p className="text-ca-muted text-sm mb-5">{c.nlSub}</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={c.nlPlaceholder}
              className="flex-1 px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text placeholder:text-ca-muted text-sm focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(91,140,255,0.35)] hover:scale-[1.02] transition-all duration-200 whitespace-nowrap active:scale-[0.97]"
            >
              {c.nlBtn}
            </button>
          </form>
          <p className="text-xs text-ca-muted mt-3">
            {c.nlDisclaimer}{" "}
            <Link href="/legal/privacy" className="underline hover:text-ca-text transition-colors">
              {c.nlPrivacy}
            </Link>
            {c.nlUnsub}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
