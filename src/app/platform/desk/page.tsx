"use client";
import { SubPageTemplate } from "@/components/sections/SubPageTemplate";
import { useLang } from "@/lib/i18n";
const IC = (d: string) => <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;
const ICONS = [IC("M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3"),IC("M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22"),IC("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),IC("M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"),IC("M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21"),IC("M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z")];
const COPY = {
  en: {
    hero: { eyebrow: "Platform · AudienceDesk", headline: "Your media buying command center.", subtitle: "A self-serve and managed trading desk for omnichannel media buying — campaign setup, audience targeting, and real-time optimization in one interface.", accent: "#7b3fff", ctaPrimary: { label: "Request access", href: "/contact" }, stats: [{ value: "Self-serve", label: "or managed" }, { value: "Real-time", label: "optimization" }] },
    featuresTitle: "Trading desk capabilities",
    features: [{ title: "Campaign Builder", desc: "Intuitive campaign builder with audience, format, placement, and budget controls." }, { title: "Real-Time Bidding", desc: "Programmatic buying with real-time bid optimization across guaranteed and non-guaranteed inventory." }, { title: "Budget Pacing", desc: "Intelligent pacing algorithms that distribute spend evenly or performance-optimize in flight." }, { title: "Reporting Dashboard", desc: "Live KPI dashboard with impression delivery, engagement, attention, and conversion tracking." }, { title: "Managed Service", desc: "Let our expert traders run your campaigns end-to-end with weekly performance reviews." }, { title: "API Access", desc: "Full REST API for programmatic campaign management and third-party tool integration." }],
  },
  fr: {
    hero: { eyebrow: "Plateforme · AudienceDesk", headline: "Votre centre de commande d'achat média.", subtitle: "Un trading desk self-serve et managé pour l'achat média omnicanal — configuration de campagne, ciblage audience et optimisation en temps réel dans une seule interface.", accent: "#7b3fff", ctaPrimary: { label: "Demander un accès", href: "/contact" }, stats: [{ value: "Self-serve", label: "ou managé" }, { value: "Temps réel", label: "optimisation" }] },
    featuresTitle: "Fonctionnalités du trading desk",
    features: [{ title: "Constructeur de campagne", desc: "Constructeur de campagne intuitif avec contrôles audience, format, placement et budget." }, { title: "Enchères temps réel", desc: "Achat programmatique avec optimisation des enchères en temps réel sur inventaire garanti et non garanti." }, { title: "Pacing budgétaire", desc: "Algorithmes de pacing intelligents qui distribuent les dépenses uniformément ou optimisent la performance en vol." }, { title: "Dashboard de reporting", desc: "Dashboard KPI en direct avec suivi des livraisons d'impressions, de l'engagement, de l'attention et des conversions." }, { title: "Service managé", desc: "Laissez nos traders experts gérer vos campagnes de bout en bout avec des revues de performance hebdomadaires." }, { title: "Accès API", desc: "API REST complète pour la gestion programmatique des campagnes et l'intégration d'outils tiers." }],
  },
};
export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return <SubPageTemplate hero={c.hero} featuresTitle={c.featuresTitle} features={c.features.map((f, i) => ({ ...f, description: f.desc, icon: ICONS[i] }))} />;
}
