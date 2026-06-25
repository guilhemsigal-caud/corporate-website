"use client";
import { SubPageTemplate } from "@/components/sections/SubPageTemplate";
import { useLang } from "@/lib/i18n";
const IC = (d: string) => <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;

const ICONS = [IC("M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"), IC("M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"), IC("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"), IC("M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"), IC("M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"), IC("M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3")];

const COPY = {
  en: {
    hero: { eyebrow: "Publishers · Monetization", headline: "Maximize every impression.", subtitle: "Boost eCPM with header bidding, dynamic allocation, and intelligent backfill, without sacrificing page speed or editorial quality.", accent: "#5b8cff", ctaPrimary: { label: "Talk to our team", href: "/contact" }, stats: [{ value: "+28%", label: "avg. eCPM uplift" }, { value: "94%", label: "fill rate" }, { value: "<50ms", label: "latency" }] },
    featuresTitle: "Yield optimization suite",
    features: [{ title: "Header Bidding", desc: "Prebid.js-based header bidding connecting 30+ SSPs in a single unified auction." }, { title: "Dynamic Allocation", desc: "Real-time floor pricing and demand waterfall optimization to never leave revenue on the table." }, { title: "Smart Backfill", desc: "Intelligent backfill from direct deals, programmatic, and house ads, with priority rules you control." }, { title: "Real-Time Reporting", desc: "eCPM, RPM, fill rate, and revenue by placement, device, and geography, live." }, { title: "Direct Deals", desc: "Manage guaranteed and preferred deals directly from the platform with full transparency." }, { title: "A/B Format Testing", desc: "Test different format configurations and placements to find the optimal revenue mix." }],
  },
  fr: {
    hero: { eyebrow: "Éditeurs · Monétisation", headline: "Maximisez chaque impression.", subtitle: "Boostez l'eCPM avec le header bidding, l'allocation dynamique et le backfill intelligent, sans sacrifier la vitesse de page ni la qualité éditoriale.", accent: "#5b8cff", ctaPrimary: { label: "Parler à notre équipe", href: "/contact" }, stats: [{ value: "+28%", label: "hausse eCPM moy." }, { value: "94%", label: "taux de remplissage" }, { value: "<50ms", label: "latence" }] },
    featuresTitle: "Suite d'optimisation du yield",
    features: [{ title: "Header Bidding", desc: "Header bidding Prebid.js connectant 30+ SSPs dans une enchère unifiée." }, { title: "Allocation dynamique", desc: "Prix plancher en temps réel et optimisation de la cascade de demande pour ne jamais laisser de revenu sur la table." }, { title: "Backfill intelligent", desc: "Backfill intelligent depuis les deals directs, le programmatique et les annonces maison, avec des règles de priorité que vous contrôlez." }, { title: "Reporting en temps réel", desc: "eCPM, RPM, taux de remplissage et revenu par placement, appareil et géographie, en direct." }, { title: "Deals directs", desc: "Gérez les deals garantis et préférentiels directement depuis la plateforme, avec une transparence totale." }, { title: "Test A/B de formats", desc: "Testez différentes configurations de formats et placements pour trouver le mix de revenus optimal." }],
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return <SubPageTemplate hero={c.hero} featuresTitle={c.featuresTitle} features={c.features.map((f, i) => ({ ...f, description: f.desc, icon: ICONS[i] }))} />;
}
