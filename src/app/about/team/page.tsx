"use client";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    badge: "Team & Advisors", headline: "The people behind the platform.",
    subtitle: "Adtech veterans, engineers, and open-web advocates from New York and Paris.",
    company: "Collective Audience",
    groups: [
      { name: "Leadership", members: ["CEO & Co-Founder", "CTO & Co-Founder", "Chief Revenue Officer", "VP Product", "VP Engineering", "VP Sales EMEA"] },
      { name: "Advisors", members: ["Former SVP at Nasdaq", "Ex-Head of Programmatic, Publicis", "Co-founder, IAB France", "Former CMO, Le Monde Groupe"] },
    ],
  },
  fr: {
    badge: "Équipe & Conseillers", headline: "Les personnes derrière la plateforme.",
    subtitle: "Vétérans de l'adtech, ingénieurs et défenseurs du web ouvert, à New York et Paris.",
    company: "Collective Audience",
    groups: [
      { name: "Direction", members: ["PDG & Co-Fondateur", "CTO & Co-Fondateur", "Directeur des Revenus", "VP Produit", "VP Ingénierie", "VP Ventes EMEA"] },
      { name: "Conseillers", members: ["Ancien SVP chez Nasdaq", "Ex-Responsable Programmatique, Publicis", "Co-fondateur, IAB France", "Ancien CMO, Le Monde Groupe"] },
    ],
  },
};

export default function TeamPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">{c.badge}</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.headline}</h1>
            <p className="text-ca-muted text-lg max-w-xl mx-auto">{c.subtitle}</p>
          </div>
          {c.groups.map((group) => (
            <div key={group.name} className="mb-12">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-ca-muted mb-5">{group.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {group.members.map((m) => (
                  <div key={m} className="rounded-2xl border border-ca-border bg-ca-surface p-5" style={{ boxShadow: "0 2px 10px rgba(0,0,40,0.06)" }}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ca-blue to-ca-mint mb-3 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#0e1025]">{m.split(" ").map((w: string) => w[0]).slice(0, 2).join("")}</span>
                    </div>
                    <div className="text-sm font-semibold text-ca-text mb-0.5">{m}</div>
                    <div className="text-xs text-ca-muted">{c.company}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
