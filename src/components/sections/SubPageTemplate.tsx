import { PillarHero } from "./PillarHero";
import { FeatureGrid, Feature } from "./FeatureGrid";
import { CTABanner, type CTAVariant } from "./CTABanner";
import { SplitFeature } from "./SplitFeature";

interface Stat { value: string; label: string }
interface SplitSection {
  eyebrow: string; headline: string; description: string;
  bullets: string[]; cta: { label: string; href: string };
  accent: string; reverse?: boolean; visual: React.ReactNode;
}

interface SubPageTemplateProps {
  hero: { eyebrow: string; headline: string; subtitle: string; accent: string; ctaPrimary?: { label: string; href: string }; ctaSecondary?: { label: string; href: string }; stats?: Stat[] };
  featuresTitle?: string;
  features?: Feature[];
  featureCols?: 2 | 3 | 4;
  splits?: SplitSection[];
  accent?: string;
  ctaVariant?: CTAVariant;
  children?: React.ReactNode;
}

export function SubPageTemplate({ hero, featuresTitle, features, featureCols = 3, splits, accent, ctaVariant = "default", children }: SubPageTemplateProps) {
  return (
    <main>
      <PillarHero {...hero} />

      {(features && features.length > 0) && (
        <section className="bg-ca-dark py-20">
          <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px]">
            {featuresTitle && (
              <h2 className="text-2xl md:text-3xl font-bold text-ca-text text-left mb-12"
                style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                {featuresTitle}
              </h2>
            )}
            <FeatureGrid features={features} cols={featureCols} accent={accent ?? hero.accent} />
          </div>
        </section>
      )}

      {splits?.map((s, i) => <SplitFeature key={i} {...s} />)}

      {children}

      <CTABanner variant={ctaVariant} />
    </main>
  );
}
