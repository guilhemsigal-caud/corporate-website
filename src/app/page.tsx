"use client";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { InteractiveFeatures } from "@/components/sections/InteractiveFeatures";
import { PowerGrid } from "@/components/sections/PowerGrid";
import { SplitFeature, PublishersVisual, AdvertisersVisual } from "@/components/sections/SplitFeature";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { CTABanner } from "@/components/sections/CTABanner";
import { HeroCinematic } from "@/components/sections/HeroCinematic";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { useLang } from "@/lib/i18n";

const SPLITS = {
  en: {
    pub: { eyebrow: "For Publishers", headline: "Monetize smarter. Own your data.", description: "Maximize yield across all your inventory with header bidding, direct deals, and cookieless audience data collection, without compromising editorial quality.", bullets: ["Yield optimization: +28% avg. eCPM uplift", "First-party CRM & DMP audience collection", "Inline editorial formats that don't interrupt reading", "GDPR-compliant data layer, full transparency"], cta: "For Publishers" },
    adv: { eyebrow: "For Advertisers", headline: "Simple to activate. Fast to deploy.", description: "From self-serve to managed campaigns, run high-attention formats on 200+ premium publishers with cookieless targeting and real brand lift measurement.", bullets: ["Self-serve platform + managed service option", "Cookieless contextual & semantic targeting", "Brand lift, attention, and ROI measurement", "Creative studio, no assets required"], cta: "For Advertisers" },
  },
  fr: {
    pub: { eyebrow: "Pour les éditeurs", headline: "Monétisez mieux. Possédez vos données.", description: "Maximisez le yield sur l'ensemble de votre inventaire avec le header bidding, les deals directs et la collecte de données audience sans cookie, sans compromettre la qualité éditoriale.", bullets: ["Optimisation du yield : +28% d'eCPM moyen", "Collecte d'audience CRM & DMP first-party", "Formats éditoriaux inline qui n'interrompent pas la lecture", "Couche de données RGPD-compliant, totale transparence"], cta: "Pour les éditeurs" },
    adv: { eyebrow: "Pour les annonceurs", headline: "Simple à activer. Rapide à déployer.", description: "Du self-serve aux campagnes managées, diffusez des formats haute attention sur 200+ éditeurs premium avec un ciblage sans cookie et une mesure réelle du lift de marque.", bullets: ["Plateforme self-serve + service managé", "Ciblage contextuel & sémantique sans cookie", "Mesure du lift de marque, de l'attention et du ROI", "Studio créatif, aucune ressource requise"], cta: "Pour les annonceurs" },
  },
};

export default function Home() {
  const { lang } = useLang();
  const s = SPLITS[lang];
  return (
    <main>
      <HeroSplit />
      <ImpactMetrics />
      <InteractiveFeatures />
      <SplitFeature eyebrow={s.pub.eyebrow} headline={s.pub.headline} description={s.pub.description} bullets={s.pub.bullets} cta={{ label: s.pub.cta, href: "/publishers" }} accent="#5b8cff" visual={<PublishersVisual />} />
      <SplitFeature eyebrow={s.adv.eyebrow} headline={s.adv.headline} description={s.adv.description} bullets={s.adv.bullets} cta={{ label: s.adv.cta, href: "/advertisers" }} accent="#07e2dc" reverse visual={<AdvertisersVisual />} />
      <PowerGrid />
      <LogoCloud />
      <HeroCinematic />
      <WhoWeHelp />
      <CTABanner />
    </main>
  );
}
