"use client";
import { HeroCombined } from "@/components/sections/HeroCombined";
import { InteractiveFeatures } from "@/components/sections/InteractiveFeatures";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { WhyCollectiveAudience } from "@/components/sections/WhyCollectiveAudience";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { CreativeShowcase } from "@/components/sections/CreativeShowcase";
import { BlogCallout } from "@/components/sections/BlogCallout";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      <HeroCombined />
      <InteractiveFeatures />
      <WhoWeHelp />
      <WhyCollectiveAudience />
      <ImpactMetrics />
      <CreativeShowcase />
      <BlogCallout />
      <CTABanner />
    </main>
  );
}
