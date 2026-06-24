import { HeroSplit } from "@/components/sections/HeroSplit";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { InteractiveFeatures } from "@/components/sections/InteractiveFeatures";
import { PowerGrid } from "@/components/sections/PowerGrid";
import { SplitFeature, PublishersVisual, AdvertisersVisual } from "@/components/sections/SplitFeature";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — split layout with product mockup */}
      <HeroSplit />

      {/* 2. Impact metrics — 3 KPI cards à la Teads */}
      <ImpactMetrics />

      {/* 3. Interactive 4-pillar feature section with tabs */}
      <InteractiveFeatures />

      {/* 4. Elevated Media — split feature (publishers) */}
      <SplitFeature
        eyebrow="For Publishers"
        headline="Monetize smarter. Own your data."
        description="Maximize yield across all your inventory with header bidding, direct deals, and cookieless audience data collection — without compromising editorial quality."
        bullets={[
          "Yield optimization: +28% avg. eCPM uplift",
          "First-party CRM & DMP audience collection",
          "Inline editorial formats that don't interrupt reading",
          "GDPR-compliant data layer, full transparency",
        ]}
        cta={{ label: "For Publishers", href: "/publishers" }}
        accent="#5b8cff"
        visual={<PublishersVisual />}
      />

      {/* 5. Elevated Creative — split feature (advertisers) */}
      <SplitFeature
        eyebrow="For Advertisers"
        headline="Simple to activate. Fast to deploy."
        description="From self-serve to managed campaigns, run high-attention formats on 200+ premium publishers with cookieless targeting and real brand lift measurement."
        bullets={[
          "Self-serve platform + managed service option",
          "Cookieless contextual & semantic targeting",
          "Brand lift, attention, and ROI measurement",
          "Creative studio — no assets required",
        ]}
        cta={{ label: "For Advertisers", href: "/advertisers" }}
        accent="#7df0c8"
        reverse
        visual={<AdvertisersVisual />}
      />

      {/* 6. Power Grid — audience data flow visualization */}
      <PowerGrid />

      {/* 7. Logo cloud — media + brand partners */}
      <LogoCloud />

      {/* 8. Newsletter + CTA */}
      <CTABanner />
    </main>
  );
}
