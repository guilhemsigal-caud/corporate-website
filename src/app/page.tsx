import { HeroHome } from "@/components/sections/HeroHome";
import { KPIBar } from "@/components/sections/KPIBar";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <KPIBar />
      <LogoCloud />
      <ThreePillars />
      <CTABanner />
    </main>
  );
}
