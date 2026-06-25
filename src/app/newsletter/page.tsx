"use client";
import { Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    badge: "Newsletter", headline: "Stay ahead of the open web.",
    subtitle: "Industry insights, product updates, and adtech trends, curated weekly by the Collective Audience team. No spam. Unsubscribe anytime.",
    emailLabel: "Email", roleLabel: "I am a...",
    roles: ["Publisher", "Advertiser / Agency", "Adtech professional", "Other"],
    consent: "I agree to receive the newsletter and accept the", privacyLabel: "Privacy Policy",
    subscribeBtn: "Subscribe",
    footer: "Powered by Brevo. GDPR compliant. Unsubscribe in one click.",
    placeholder: "your@company.com",
  },
  fr: {
    badge: "Newsletter", headline: "Restez en avance sur le web ouvert.",
    subtitle: "Insights secteur, mises à jour produit et tendances adtech, sélectionnés chaque semaine par l'équipe Collective Audience. Pas de spam. Désinscription à tout moment.",
    emailLabel: "Email", roleLabel: "Je suis...",
    roles: ["Éditeur", "Annonceur / Agence", "Professionnel adtech", "Autre"],
    consent: "J'accepte de recevoir la newsletter et j'accepte la", privacyLabel: "Politique de confidentialité",
    subscribeBtn: "S'abonner",
    footer: "Powered by Brevo. Conforme RGPD. Désinscription en un clic.",
    placeholder: "votre@entreprise.com",
  },
};

export default function NewsletterPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main className="bg-ca-dark min-h-screen py-24 flex items-center">
      <div className="max-w-xl mx-auto px-6 md:px-8 w-full">
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-5" style={{ background: "rgba(91,140,255,0.15)", border: "1px solid rgba(91,140,255,0.3)" }}>
            <Mail className="w-6 h-6 text-ca-blue" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-5">{c.badge}</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.headline}</h1>
          <p className="text-ca-muted leading-relaxed">{c.subtitle}</p>
        </div>
        <div className="rounded-2xl border border-ca-border bg-ca-surface p-8" style={{ boxShadow: "0 2px 16px rgba(0,0,40,0.07)" }}>
          <form className="space-y-4">
            <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.emailLabel} *</label><input type="email" required placeholder={c.placeholder} className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors" /></div>
            <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.roleLabel}</label>
              <select className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-muted text-sm focus:outline-none focus:border-ca-blue/50 transition-colors">
                {c.roles.map(r => <option key={r}>{r}</option>)}
              </select>
            </div>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden />
            <div className="flex items-start gap-3">
              <input type="checkbox" id="consent" required className="mt-0.5" />
              <label htmlFor="consent" className="text-xs text-ca-muted">{c.consent} <a href="/legal/privacy" className="text-ca-blue hover:underline">{c.privacyLabel}</a>.</label>
            </div>
            <button type="submit" className="w-full py-3.5 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_24px_rgba(91,140,255,0.4)]">{c.subscribeBtn}</button>
          </form>
          <p className="text-[10px] text-ca-muted text-center mt-4">{c.footer}</p>
        </div>
      </div>
    </main>
  );
}
