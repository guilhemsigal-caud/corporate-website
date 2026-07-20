"use client";
import Image from "next/image";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";

type Member = {
  _id: string;
  name: string;
  role: string;
  group: "global" | "europe" | "us";
  photo?: string;
  linkedin?: string;
};

const COPY = {
  en: {
    badge: "Team & Advisors",
    headline: "The people behind the platform.",
    subtitle: "Adtech veterans, engineers, and open-web advocates from New York and Paris.",
    groups: { global: "Global team", europe: "Europe team", us: "US team" },
  },
  fr: {
    badge: "Équipe & Conseillers",
    headline: "Les personnes derrière la plateforme.",
    subtitle: "Vétérans de l'adtech, ingénieurs et défenseurs de l'open web, à New York et Paris.",
    groups: { global: "Équipe globale", europe: "Équipe Europe", us: "Équipe US" },
  },
};

export function TeamPageClient({ members }: { members: Member[] }) {
  const { lang } = useLang();
  const c = COPY[lang];

  const groups = ["global", "europe", "us"] as const;

  return (
    <main>
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">
              {c.badge}
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              style={{
                background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {c.headline}
            </h1>
            <p className="text-ca-muted text-lg max-w-xl mx-auto">{c.subtitle}</p>
          </div>

          {groups.map((group) => {
            const groupMembers = members.filter((m) => m.group === group);
            if (!groupMembers.length) return null;
            return (
              <div key={group} className="mb-16">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-ca-muted mb-8">
                  {c.groups[group]}
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-8">
                  {groupMembers.map((m) => (
                    <div key={m._id} className="flex flex-col items-center text-center gap-3">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-ca-blue to-ca-mint flex items-center justify-center flex-shrink-0 ring-2 ring-ca-border">
                        {m.photo ? (
                          <Image
                            src={m.photo}
                            alt={m.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover grayscale"
                          />
                        ) : (
                          <span className="text-sm font-bold text-[#0e1025]">
                            {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-ca-text leading-snug">{m.name}</div>
                        <div className="text-xs text-ca-muted leading-snug mt-0.5">{m.role}</div>
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
