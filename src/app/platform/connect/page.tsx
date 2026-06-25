"use client";
import { SubPageTemplate } from "@/components/sections/SubPageTemplate";
import { useLang } from "@/lib/i18n";
const IC = (d: string) => <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;
const ICONS = [IC("M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"),IC("M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3"),IC("M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 4.5h3m-6 4.5h.008v.008H8.25V18zm0-3.75h.008v.008H8.25V14.25z"),IC("M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"),IC("M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"),IC("M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3")];
const COPY = {
  en: {
    hero: { eyebrow: "Platform · AudienceConnect", headline: "One audience. Every channel.", subtitle: "AudienceConnect distributes your campaigns across display, video, social, email, and push, all from a single activation point with unified reporting.", accent: "#07e2dc", ctaPrimary: { label: "Start connecting", href: "/contact" }, stats: [{ value: "5+", label: "channels" }, { value: "Unified", label: "reporting" }] },
    featuresTitle: "Omnichannel distribution",
    features: [{ title: "Display & Native", desc: "Programmatic and direct display across the full publisher network with viewability guarantees." }, { title: "Video Distribution", desc: "Outstream and instream video delivery with attention-based pricing and completion metrics." }, { title: "Email Activation", desc: "Audience segment activation in partner email networks with lookalike targeting." }, { title: "Push & In-App", desc: "Owned channel push notification distribution with audience segment targeting." }, { title: "Social Sync", desc: "Synchronize audience segments to Facebook, Instagram, LinkedIn, and TikTok custom audiences." }, { title: "Unified Reporting", desc: "Single dashboard aggregating performance from every channel with attribution across touchpoints." }],
  },
  fr: {
    hero: { eyebrow: "Plateforme · AudienceConnect", headline: "Une audience. Tous les canaux.", subtitle: "AudienceConnect distribue vos campagnes sur le display, la vidéo, le social, l'email et le push, depuis un point d'activation unique avec un reporting unifié.", accent: "#07e2dc", ctaPrimary: { label: "Commencer à connecter", href: "/contact" }, stats: [{ value: "5+", label: "canaux" }, { value: "Unifié", label: "reporting" }] },
    featuresTitle: "Distribution omnicanale",
    features: [{ title: "Display & Natif", desc: "Display programmatique et direct sur l'ensemble du réseau éditeur avec garanties de visibilité." }, { title: "Distribution vidéo", desc: "Livraison vidéo outstream et instream avec tarification basée sur l'attention et métriques de complétion." }, { title: "Activation email", desc: "Activation de segments d'audience dans les réseaux email partenaires avec ciblage lookalike." }, { title: "Push & In-App", desc: "Distribution de notifications push sur canaux propriétaires avec ciblage par segment d'audience." }, { title: "Sync Social", desc: "Synchronisez les segments d'audience vers Facebook, Instagram, LinkedIn et TikTok custom audiences." }, { title: "Reporting unifié", desc: "Dashboard unique agrégeant les performances de tous les canaux avec attribution multi-touchpoints." }],
  },
};
export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return <SubPageTemplate hero={c.hero} featuresTitle={c.featuresTitle} features={c.features.map((f, i) => ({ ...f, description: f.desc, icon: ICONS[i] }))} />;
}
