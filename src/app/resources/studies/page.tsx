"use client";
import { CTABanner } from "@/components/sections/CTABanner";
import { ArrowRight, Download } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    badge: "Studies & Research", headline: "Research that moves the industry.",
    subtitle: "White papers, meta-analyses, and benchmarks to help publishers and advertisers navigate the open web.",
    downloadPdf: "Download PDF",
    studies: [
      { title: "S.T.A.M.P. Attention Study 2024", desc: "Comprehensive analysis of attention metrics across 50+ campaigns and 200+ publisher environments.", type: "White Paper", accent: "#5b8cff" },
      { title: "Cookieless Advertising Playbook", desc: "A practical guide for publishers and advertisers navigating the cookieless transition in 2024-2025.", type: "Guide", accent: "#07e2dc" },
      { title: "Brand Lift Meta-Analysis", desc: "Aggregated brand lift data from 100+ campaigns, benchmarks by industry, format, and audience size.", type: "Research Report", accent: "#7b3fff" },
      { title: "Publisher Monetization Index 2024", desc: "Yearly benchmark report on eCPM, fill rates, and revenue per session across the publisher network.", type: "Annual Report", accent: "#5b8cff" },
      { title: "The Economics of Attention", desc: "Why attention time is the better proxy for advertising value: a case for CPM reform.", type: "Thought Leadership", accent: "#07e2dc" },
      { title: "Open Web Audience Study 2024", desc: "Audience insights, engagement patterns, and content consumption trends from 200+ publishers.", type: "Research Report", accent: "#7b3fff" },
    ],
  },
  fr: {
    badge: "Études & Recherche", headline: "La recherche qui fait avancer l'industrie.",
    subtitle: "Livres blancs, méta-analyses et benchmarks pour aider éditeurs et annonceurs à naviguer sur l'open web.",
    downloadPdf: "Télécharger le PDF",
    studies: [
      { title: "Étude S.T.A.M.P. Attention 2024", desc: "Analyse complète des métriques d'attention sur 50+ campagnes et 200+ environnements éditeurs.", type: "Livre blanc", accent: "#5b8cff" },
      { title: "Guide Publicité Sans Cookie", desc: "Guide pratique pour éditeurs et annonceurs qui naviguent la transition cookieless en 2024-2025.", type: "Guide", accent: "#07e2dc" },
      { title: "Méta-analyse Brand Lift", desc: "Données agrégées de brand lift sur 100+ campagnes, benchmarks par secteur, format et taille d'audience.", type: "Rapport de recherche", accent: "#7b3fff" },
      { title: "Indice de Monétisation Éditeurs 2024", desc: "Rapport annuel de benchmark sur l'eCPM, les taux de remplissage et le revenu par session.", type: "Rapport annuel", accent: "#5b8cff" },
      { title: "L'Économie de l'Attention", desc: "Pourquoi le temps d'attention est le meilleur proxy de valeur publicitaire: un plaidoyer pour réformer le CPM.", type: "Thought Leadership", accent: "#07e2dc" },
      { title: "Étude Audience Open Web 2024", desc: "Insights audience, patterns d'engagement et tendances de consommation de contenu de 200+ éditeurs.", type: "Rapport de recherche", accent: "#7b3fff" },
    ],
  },
};

export default function StudiesPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.studies.map((s) => (
              <div key={s.title} className="group relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer" style={{ borderColor: `${s.accent}35`, background: `linear-gradient(145deg, ${s.accent}15 0%, #eef0fb 100%)`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${s.accent} 40%,${s.accent} 60%,transparent 95%)` }} />
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: s.accent, borderColor: `${s.accent}30`, background: `${s.accent}0a` }}>{s.type}</span>
                  <Download className="w-4 h-4 text-ca-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                </div>
                <h3 className="text-base font-bold text-ca-text mb-2 leading-snug">{s.title}</h3>
                <p className="text-xs text-ca-muted leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: s.accent }}>{c.downloadPdf} <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
