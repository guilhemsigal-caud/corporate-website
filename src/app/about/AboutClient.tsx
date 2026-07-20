"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";

type Member = {
  _id: string;
  name: string;
  role: string;
  group: "global" | "europe" | "us";
  photo?: string;
};

const COPY = {
  en: {
    badge: "Our Mission", headline: "Built for the open web.",
    body1: "Collective Audience was born from the merger of BeOp (France's leading conversational ad tech) and NYIAX (the New York-based premium audience marketplace). Together, we're building the infrastructure for a better, fairer, cookieless web.",
    body2: "Our mission: give publishers the power to own their audiences, and give advertisers a direct line to those audiences, without surveillance, without complexity, without black boxes.",
    cta2: "Join us",
    stats: [{ v: "2024", l: "Founded" }, { v: "NY · Paris", l: "Offices" }, { v: "200+", l: "Publishers" }, { v: "150+", l: "Brand clients" }],
    valuesTitle: "Our values",
    values: [
      { title: "Open Web First", desc: "We believe in a free, open, and independent web, funded by advertising that respects users and publishers.", accent: "#5b8cff" },
      { title: "Privacy by Design", desc: "Every product decision starts with privacy. Cookieless is not a constraint: our foundation.", accent: "#07e2dc" },
      { title: "Publisher Independence", desc: "We give publishers the tools to own their audiences and monetize without compromising their editorial mission.", accent: "#7b3fff" },
      { title: "Transparency", desc: "No black boxes. Publishers and advertisers see every signal, every decision, every euro.", accent: "#5b8cff" },
    ],
    teamBadge: "Team & Advisors",
    teamHeadline: "The people behind the platform.",
    teamSubtitle: "Adtech veterans, engineers, and open-web advocates from New York and Paris.",
    groups: { global: "Global team", europe: "Europe team", us: "US team" },
  },
  fr: {
    badge: "Notre mission", headline: "Construit pour l'open web.",
    body1: "Collective Audience est né de la fusion de BeOp (leader français de l'adtech conversationnelle) et de NYIAX (la marketplace d'audience premium new-yorkaise). Ensemble, nous construisons l'infrastructure d'un web meilleur, plus équitable et sans cookies.",
    body2: "Notre mission : donner aux éditeurs le pouvoir de posséder leurs audiences, et offrir aux annonceurs un accès direct à ces audiences, sans surveillance, sans complexité, sans boîtes noires.",
    cta2: "Nous rejoindre",
    stats: [{ v: "2024", l: "Fondé" }, { v: "NY · Paris", l: "Bureaux" }, { v: "200+", l: "Éditeurs" }, { v: "150+", l: "Clients marques" }],
    valuesTitle: "Nos valeurs",
    values: [
      { title: "Open Web avant tout", desc: "Nous croyons en un web libre, ouvert et indépendant, financé par une publicité qui respecte les utilisateurs et les éditeurs.", accent: "#5b8cff" },
      { title: "Privacy by Design", desc: "Chaque décision produit commence par la vie privée. Le sans-cookie n'est pas une contrainte: notre fondation.", accent: "#07e2dc" },
      { title: "Indépendance des éditeurs", desc: "Nous donnons aux éditeurs les outils pour posséder leurs audiences et les monétiser sans compromettre leur mission éditoriale.", accent: "#7b3fff" },
      { title: "Transparence", desc: "Aucune boîte noire. Éditeurs et annonceurs voient chaque signal, chaque décision, chaque euro.", accent: "#5b8cff" },
    ],
    teamBadge: "Équipe & Conseillers",
    teamHeadline: "Les personnes derrière la plateforme.",
    teamSubtitle: "Vétérans de l'adtech, ingénieurs et défenseurs de l'open web, à New York et Paris.",
    groups: { global: "Équipe globale", europe: "Équipe Europe", us: "Équipe US" },
  },
};

const GROUPS = ["global", "europe", "us"] as const;

export function AboutClient({ members }: { members: Member[] }) {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      {/* Mission */}
      <section className="relative bg-ca-dark overflow-hidden py-24 md:py-32">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle,rgba(91,140,255,0.14) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">{c.badge}</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.headline}</h1>
              <p className="text-ca-muted text-lg leading-relaxed mb-6">{c.body1}</p>
              <p className="text-ca-muted leading-relaxed mb-8">{c.body2}</p>
              <Link href="/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-ca-border bg-black/5 text-ca-text font-semibold text-sm hover:bg-black/8 transition-all">{c.cta2} <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {c.stats.map(s => (
                <div key={s.l} className="rounded-2xl border border-ca-border bg-ca-surface p-5 text-center" style={{ boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                  <div className="text-3xl font-bold gradient-text-blue-mint mb-1">{s.v}</div>
                  <div className="text-xs text-ca-muted">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ca-surface border-y border-ca-border py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-center mb-10 text-ca-text">{c.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.values.map((v) => (
              <div key={v.title} className="rounded-2xl border p-6" style={{ borderColor: `${v.accent}35`, background: `linear-gradient(145deg, ${v.accent}15 0%, #eef0fb 100%)`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                <div className="text-base font-bold mb-2" style={{ color: v.accent }}>{v.title}</div>
                <p className="text-sm text-ca-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">{c.teamBadge}</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.teamHeadline}</h2>
            <p className="text-ca-muted text-lg max-w-xl mx-auto">{c.teamSubtitle}</p>
          </div>
          {GROUPS.map((group) => {
            const groupMembers = members.filter((m) => m.group === group);
            if (!groupMembers.length) return null;
            return (
              <div key={group} className="mb-16">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-ca-muted mb-8">{c.groups[group]}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">
                  {groupMembers.map((m) => (
                    <div key={m._id} className="flex flex-col items-center text-center gap-3">
                      <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-ca-blue to-ca-mint flex items-center justify-center flex-shrink-0 ring-2 ring-ca-border">
                        {m.photo ? (
                          <Image src={m.photo} alt={m.name} width={112} height={112} className="w-full h-full object-cover grayscale" />
                        ) : (
                          <span className="text-base font-bold text-[#0e1025]">
                            {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="text-base font-semibold text-ca-text leading-snug">{m.name}</div>
                        <div className="text-sm text-ca-muted leading-snug mt-0.5">{m.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
