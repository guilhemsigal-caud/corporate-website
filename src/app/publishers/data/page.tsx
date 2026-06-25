"use client";
import { SubPageTemplate } from "@/components/sections/SubPageTemplate";
import { useLang } from "@/lib/i18n";
const IC = (d: string) => <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;

const ICONS = [IC("M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"), IC("M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"), IC("M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"), IC("M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"), IC("M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"), IC("M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3")];

const COPY = {
  en: {
    hero: { eyebrow: "Publishers · Data", headline: "Your audience data, fully owned.", subtitle: "Collect, enrich, and activate first-party audience data — cookieless, GDPR-compliant, and without relying on third-party intermediaries.", accent: "#07e2dc", ctaPrimary: { label: "Talk to our team", href: "/contact" }, stats: [{ value: "100%", label: "first-party data" }, { value: "0", label: "third-party cookies" }, { value: "GDPR", label: "compliant" }] },
    featuresTitle: "Audience data infrastructure",
    features: [{ title: "CRM & DMP", desc: "Unified customer data platform collecting behavioral, contextual, and declared data from your editorial environment.", accent: "#07e2dc" }, { title: "Cookieless Identity", desc: "AudienceMatching technology for cross-device audience recognition without relying on cookies." }, { title: "Audience Segments", desc: "Build and export custom audience segments to activate across any DSP or direct deal." }, { title: "Audience Analytics", desc: "Deep behavioral analytics: content affinity, reading habits, engagement patterns, and loyalty scoring." }, { title: "Data Clean Room", desc: "Privacy-safe audience matching with advertisers via data clean room — no raw data ever shared." }, { title: "GDPR Compliance Layer", desc: "Full consent management integration (Didomi, OneTrust) with automatic data governance." }],
  },
  fr: {
    hero: { eyebrow: "Éditeurs · Données", headline: "Vos données audience, entièrement possédées.", subtitle: "Collectez, enrichissez et activez les données d'audience first-party — sans cookies, conformes au RGPD, sans intermédiaires tiers.", accent: "#07e2dc", ctaPrimary: { label: "Parler à notre équipe", href: "/contact" }, stats: [{ value: "100%", label: "données first-party" }, { value: "0", label: "cookies tiers" }, { value: "RGPD", label: "conforme" }] },
    featuresTitle: "Infrastructure de données audience",
    features: [{ title: "CRM & DMP", desc: "Plateforme de données client unifiée collectant données comportementales, contextuelles et déclaratives depuis votre environnement éditorial.", accent: "#07e2dc" }, { title: "Identité sans cookie", desc: "Technologie AudienceMatching pour la reconnaissance d'audience cross-device sans cookies." }, { title: "Segments d'audience", desc: "Créez et exportez des segments d'audience personnalisés à activer sur n'importe quel DSP ou deal direct." }, { title: "Analytique audience", desc: "Analytique comportementale approfondie : affinité de contenu, habitudes de lecture, patterns d'engagement et score de fidélité." }, { title: "Data Clean Room", desc: "Matching audience éditeur-annonceur en environnement isolé et sécurisé — aucune donnée brute partagée." }, { title: "Couche conformité RGPD", desc: "Intégration complète de la gestion du consentement (Didomi, OneTrust) avec gouvernance automatique des données." }],
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return <SubPageTemplate hero={c.hero} featuresTitle={c.featuresTitle} features={c.features.map((f, i) => ({ ...f, description: f.desc, icon: ICONS[i] }))} />;
}
