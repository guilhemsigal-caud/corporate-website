"use client";
import { SubPageTemplate } from "@/components/sections/SubPageTemplate";
import { useLang } from "@/lib/i18n";
const IC = (d: string) => <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;

const ICONS = [IC("M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"), IC("M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3"), IC("M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"), IC("M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"), IC("M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"), IC("M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3")];

const COPY = {
  en: {
    hero: { eyebrow: "Publishers · Editorial", headline: "Formats that feel like content.", subtitle: "Deploy conversational, interactive, and immersive ad formats inline within your articles, without disrupting the reading experience.", accent: "#7b3fff", ctaPrimary: { label: "Explore the gallery", href: "/gallery" }, ctaSecondary: { label: "Contact us", href: "/contact" }, stats: [{ value: "34s", label: "avg. attention" }, { value: ">1%", label: "interaction rate" }, { value: "+40%", label: "brand lift" }] },
    featuresTitle: "Editorial format suite",
    features: [{ title: "Conversational Formats", desc: "Q&A, poll, quiz, and dialogue formats that engage readers in a natural conversation within the article." }, { title: "Immersive Video", desc: "Scroll-triggered video formats that play inline without opening a new page or interrupting the reading flow." }, { title: "Slider & Gallery", desc: "Before/after sliders and interactive galleries that let readers explore brand stories at their own pace." }, { title: "Inline WYSIWYG Editor", desc: "Place formats directly from your CMS with a drag-and-drop inline editor. No developer needed." }, { title: "No Page Speed Impact", desc: "Async loading ensures zero impact on Core Web Vitals. Formats load after editorial content." }, { title: "Format Analytics", desc: "Track completion rate, interaction time, scroll depth, and engagement per format placement." }],
  },
  fr: {
    hero: { eyebrow: "Éditeurs · Éditorial", headline: "Des formats qui ressemblent à du contenu.", subtitle: "Déployez des formats publicitaires conversationnels, interactifs et immersifs directement dans vos articles, sans perturber l'expérience de lecture.", accent: "#7b3fff", ctaPrimary: { label: "Explorer la galerie", href: "/gallery" }, ctaSecondary: { label: "Nous contacter", href: "/contact" }, stats: [{ value: "34s", label: "attention moy." }, { value: ">1%", label: "taux d'interaction" }, { value: "+40%", label: "lift de marque" }] },
    featuresTitle: "Suite de formats éditoriaux",
    features: [{ title: "Formats conversationnels", desc: "Formats Q&A, sondage, quiz et dialogue qui engagent les lecteurs dans une conversation naturelle au sein de l'article." }, { title: "Vidéo immersive", desc: "Formats vidéo déclenchés au scroll qui se lisent en ligne sans ouvrir une nouvelle page ni interrompre la lecture." }, { title: "Slider & Galerie", desc: "Sliders avant/après et galeries interactives permettant aux lecteurs d'explorer les histoires de marque à leur rythme." }, { title: "Éditeur WYSIWYG inline", desc: "Placez les formats directement depuis votre CMS avec un éditeur inline drag-and-drop. Aucun développeur requis." }, { title: "Zéro impact sur la vitesse", desc: "Le chargement asynchrone garantit un impact nul sur les Core Web Vitals. Les formats se chargent après le contenu éditorial." }, { title: "Analytique des formats", desc: "Suivez le taux de complétion, le temps d'interaction, la profondeur de scroll et l'engagement par placement." }],
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = COPY[lang];
  return <SubPageTemplate hero={c.hero} featuresTitle={c.featuresTitle} features={c.features.map((f, i) => ({ ...f, description: f.desc, icon: ICONS[i] }))} />;
}
