"use client";
import { CTABanner } from "@/components/sections/CTABanner";
import { MapPin, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const JOBS = {
  en: [
    { title: "Senior Full-Stack Engineer", location: "Paris / Remote", type: "Full-time", accent: "#5b8cff" },
    { title: "Product Manager: Publisher Platform", location: "Paris", type: "Full-time", accent: "#07e2dc" },
    { title: "Data Scientist: Audience Intelligence", location: "New York / Remote", type: "Full-time", accent: "#7b3fff" },
    { title: "Sales Director: EMEA Publishers", location: "Paris", type: "Full-time", accent: "#5b8cff" },
    { title: "Account Manager: Advertisers", location: "New York", type: "Full-time", accent: "#07e2dc" },
    { title: "Marketing Manager", location: "Paris / New York", type: "Full-time", accent: "#7b3fff" },
  ],
  fr: [
    { title: "Ingénieur Full-Stack Senior", location: "Paris / Remote", type: "CDI", accent: "#5b8cff" },
    { title: "Product Manager: Plateforme éditeurs", location: "Paris", type: "CDI", accent: "#07e2dc" },
    { title: "Data Scientist: Intelligence Audience", location: "New York / Remote", type: "CDI", accent: "#7b3fff" },
    { title: "Directeur Commercial: Éditeurs EMEA", location: "Paris", type: "CDI", accent: "#5b8cff" },
    { title: "Account Manager: Annonceurs", location: "New York", type: "CDI", accent: "#07e2dc" },
    { title: "Responsable Marketing", location: "Paris / New York", type: "CDI", accent: "#7b3fff" },
  ],
};

const COPY = {
  en: { badge: "Careers", headline: "Build the open web with us.", subtitle: "We're a team of adtech veterans and engineers in New York and Paris, building infrastructure for a better internet. Come join us.", noRole: "Don't see your role?", sendCv: "Send us your CV", noRoleSuffix: ": we hire for talent first." },
  fr: { badge: "Carrières", headline: "Construisons l'open web ensemble.", subtitle: "Nous sommes une équipe de vétérans de l'adtech et d'ingénieurs à New York et Paris, construisant l'infrastructure d'un internet meilleur. Rejoignez-nous.", noRole: "Vous ne trouvez pas votre poste ?", sendCv: "Envoyez-nous votre CV", noRoleSuffix: ": nous recrutons avant tout les talents." },
};

export default function CareersPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  const jobs = JOBS[lang];
  return (
    <main>
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-mint/30 bg-ca-mint/8 text-xs font-semibold tracking-widest uppercase text-ca-mint mb-6">{c.badge}</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.headline}</h1>
            <p className="text-ca-muted text-lg max-w-xl mx-auto">{c.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <div key={job.title} className="group relative rounded-2xl border overflow-hidden p-5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer" style={{ borderColor: `${job.accent}35`, background: `${job.accent}0a`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-ca-text mb-2 leading-snug">{job.title}</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-ca-muted"><MapPin className="w-3.5 h-3.5" />{job.location}</div>
                      <span className="text-xs px-2 py-0.5 rounded-full border text-ca-muted border-ca-border">{job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" style={{ color: job.accent }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-ca-muted text-sm">{c.noRole} <a href="mailto:careers@collectiveaudience.co" className="text-ca-blue hover:underline">{c.sendCv}</a>{c.noRoleSuffix}</p>
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
