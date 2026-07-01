"use client";
import Script from "next/script";
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
            <Script src="https://js.hsforms.net/forms/embed/50989483.js" strategy="afterInteractive" />
            <div className="hs-form-frame" data-region="na1" data-form-id="0bfd8d5e-b87e-42d3-9428-058b7e9b2170" data-portal-id="50989483" />
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
