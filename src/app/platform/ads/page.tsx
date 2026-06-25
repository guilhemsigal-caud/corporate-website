"use client";
import { SubPageTemplate } from "@/components/sections/SubPageTemplate";
import { useLang } from "@/lib/i18n";
const IC = (d: string) => <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;
const ICONS = [IC("M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"),IC("M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3"),IC("M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"),IC("M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"),IC("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),IC("M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22")];
const COPY = {
  en: {
    hero: { eyebrow: "Platform · AudienceAds", headline: "The conversational ad engine.", subtitle: "AudienceAds powers every high-attention and conversational format served across our publisher network, from inline Q&A to immersive video.", accent: "#5b8cff", ctaPrimary: { label: "Explore formats", href: "/gallery" }, stats: [{ value: "34s", label: "avg. attention" }, { value: ">1%", label: "interaction rate" }] },
    featuresTitle: "Format capabilities",
    features: [{ title: "Conversational Formats", desc: "Q&A, polls, quizzes and dialogue units that create genuine two-way brand interactions." }, { title: "Scroll-Triggered Video", desc: "Video formats that activate only when the reader scrolls into view, maximizing completion rate." }, { title: "Interactive Sliders", desc: "Before/after and comparison sliders for product storytelling with direct engagement metrics." }, { title: "Zero Latency Serving", desc: "Sub-50ms ad serving with async loading that never blocks editorial content rendering." }, { title: "Brand Safety Layer", desc: "Pre-bid contextual verification with IAB brand safety categories and custom exclusion lists." }, { title: "Attention Tracking", desc: "Proprietary attention measurement scoring every impression by scroll depth, dwell time, and interaction." }],
  },
  fr: {
    hero: { eyebrow: "Plateforme · AudienceAds", headline: "Le moteur publicitaire conversationnel.", subtitle: "AudienceAds propulse chaque format haute attention et conversationnel diffusé sur notre réseau d'éditeurs, du Q&A inline à la vidéo immersive.", accent: "#5b8cff", ctaPrimary: { label: "Explorer les formats", href: "/gallery" }, stats: [{ value: "34s", label: "attention moy." }, { value: ">1%", label: "taux d'interaction" }] },
    featuresTitle: "Fonctionnalités des formats",
    features: [{ title: "Formats conversationnels", desc: "Unités Q&A, sondages, quiz et dialogue qui créent de véritables interactions de marque bidirectionnelles." }, { title: "Vidéo déclenchée au scroll", desc: "Formats vidéo qui s'activent uniquement quand le lecteur défile jusqu'à eux, maximisant le taux de complétion." }, { title: "Sliders interactifs", desc: "Sliders avant/après et de comparaison pour le brand storytelling avec métriques d'engagement directes." }, { title: "Diffusion zéro latence", desc: "Diffusion publicitaire en moins de 50ms avec chargement asynchrone qui ne bloque jamais le rendu du contenu éditorial." }, { title: "Couche brand safety", desc: "Vérification contextuelle pré-enchère avec catégories brand safety IAB et listes d'exclusion personnalisées." }, { title: "Mesure d'attention", desc: "Mesure d'attention propriétaire scorant chaque impression par profondeur de scroll, temps passé et interaction." }],
  },
};
export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return <SubPageTemplate hero={c.hero} featuresTitle={c.featuresTitle} features={c.features.map((f, i) => ({ ...f, description: f.desc, icon: ICONS[i] }))} />;
}
