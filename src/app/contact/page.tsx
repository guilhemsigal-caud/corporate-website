"use client";
import { MapPin, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    badge: "Contact", headline: "Let's talk.",
    subtitle: "Whether you're a publisher, advertiser, or investor. Our team is here.",
    formTitle: "Send us a message",
    firstName: "First name", lastName: "Last name", email: "Professional email",
    company: "Company", role: "I am a...",
    roles: ["Publisher", "Advertiser / Agency", "Investor", "Press", "Other"],
    message: "Message", sendBtn: "Send message",
    consent: "I agree to Collective Audience processing my data to respond to this inquiry.",
    privacyLabel: "Privacy Policy",
    offices: [
      { city: "New York", address: "85 Broad Street, NY 10004", email: "hello@collectiveaudience.co", accent: "#5b8cff" },
      { city: "Paris", address: "33 rue La Fayette, 75009 Paris", email: "bonjour@collectiveaudience.co", accent: "#07e2dc" },
    ],
    pressTitle: "Press & Media",
    pressDesc: "For press inquiries, interview requests, or media assets.",
    pressEmail: "press@collectiveaudience.co",
  },
  fr: {
    badge: "Contact", headline: "Parlons-en.",
    subtitle: "Éditeur, annonceur ou investisseur. Notre équipe est là pour vous.",
    formTitle: "Envoyez-nous un message",
    firstName: "Prénom", lastName: "Nom", email: "Email professionnel",
    company: "Entreprise", role: "Je suis...",
    roles: ["Éditeur", "Annonceur / Agence", "Investisseur", "Presse", "Autre"],
    message: "Message", sendBtn: "Envoyer le message",
    consent: "J'accepte que Collective Audience traite mes données pour répondre à cette demande.",
    privacyLabel: "Politique de confidentialité",
    offices: [
      { city: "New York", address: "85 Broad Street, NY 10004", email: "hello@collectiveaudience.co", accent: "#5b8cff" },
      { city: "Paris", address: "33 rue La Fayette, 75009 Paris", email: "bonjour@collectiveaudience.co", accent: "#07e2dc" },
    ],
    pressTitle: "Presse & Médias",
    pressDesc: "Pour les demandes presse, interviews ou ressources médias.",
    pressEmail: "press@collectiveaudience.co",
  },
};

const INPUT = "w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors";

export default function ContactPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main className="bg-ca-dark min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">{c.badge}</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.headline}</h1>
          <p className="text-ca-muted text-lg max-w-lg mx-auto">{c.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-ca-border bg-ca-surface p-8" style={{ boxShadow: "0 2px 16px rgba(0,0,40,0.07)" }}>
            <h2 className="text-lg font-bold text-ca-text mb-6">{c.formTitle}</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.firstName} *</label><input type="text" required className={INPUT} /></div>
                <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.lastName} *</label><input type="text" required className={INPUT} /></div>
              </div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.email} *</label><input type="email" required className={INPUT} /></div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.company}</label><input type="text" className={INPUT} /></div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.role}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-muted text-sm focus:outline-none focus:border-ca-blue/50 transition-colors">
                  {c.roles.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">{c.message}</label><textarea rows={4} className={`${INPUT} resize-none`} /></div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" required className="mt-0.5" />
                <label htmlFor="consent" className="text-xs text-ca-muted">{c.consent} <a href="/legal/privacy" className="text-ca-blue hover:underline">{c.privacyLabel}</a>.</label>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_24px_rgba(91,140,255,0.4)]">{c.sendBtn}</button>
            </form>
          </div>
          <div className="space-y-6">
            {c.offices.map(o => (
              <div key={o.city} className="rounded-2xl border p-6" style={{ borderColor: `${o.accent}35`, background: `${o.accent}08`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                <div className="text-sm font-bold mb-3" style={{ color: o.accent }}>{o.city}</div>
                <div className="flex items-start gap-2 text-sm text-ca-muted mb-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />{o.address}</div>
                <div className="flex items-center gap-2 text-sm text-ca-muted"><Mail className="w-4 h-4 flex-shrink-0" />{o.email}</div>
              </div>
            ))}
            <div className="rounded-2xl border border-ca-border bg-ca-surface p-6" style={{ boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
              <div className="text-sm font-bold text-ca-text mb-2">{c.pressTitle}</div>
              <p className="text-xs text-ca-muted mb-3">{c.pressDesc}</p>
              <a href={`mailto:${c.pressEmail}`} className="text-sm text-ca-blue hover:underline">{c.pressEmail}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
