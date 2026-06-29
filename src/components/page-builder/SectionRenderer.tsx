"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { useLang } from "@/lib/i18n";

/* ── Types ── */
interface Cta { label?: string; labelFr?: string; href?: string }

interface HeroSection { _type: "heroSection"; eyebrow?: string; title: string; titleFr?: string; subtitle?: string; subtitleFr?: string; primaryCta?: Cta; secondaryCta?: Cta; accentColor?: string }
interface SplitSection { _type: "splitSection"; eyebrow?: string; eyebrowFr?: string; title: string; titleFr?: string; description?: string; descriptionFr?: string; bullets?: string[]; bulletsFr?: string[]; cta?: Cta; accentColor?: string; reverse?: boolean; image?: { asset: { url: string }; alt?: string } }
interface StatItem { value: string; label?: string; labelFr?: string }
interface StatsSection { _type: "statsSection"; title?: string; titleFr?: string; stats: StatItem[]; accentColor?: string }
interface CtaBannerSection { _type: "ctaBannerSection"; eyebrow?: string; eyebrowFr?: string; title: string; titleFr?: string; description?: string; descriptionFr?: string; primaryCta?: Cta; secondaryCta?: Cta }
interface RichTextSection { _type: "richTextSection"; title?: string; titleFr?: string; content?: unknown[]; contentFr?: unknown[]; maxWidth?: string }

type Section = HeroSection | SplitSection | StatsSection | CtaBannerSection | RichTextSection;

/* ── Portable Text components ── */
const ptComponents: PortableTextComponents = {
  block: {
    normal: ({children}) => <p className="mb-4 text-ca-muted leading-relaxed">{children}</p>,
    h2: ({children}) => <h2 className="text-2xl font-bold text-ca-text mt-8 mb-3">{children}</h2>,
    h3: ({children}) => <h3 className="text-xl font-bold text-ca-text mt-6 mb-2">{children}</h3>,
  },
  marks: {
    strong: ({children}) => <strong className="font-semibold text-ca-text">{children}</strong>,
    em: ({children}) => <em>{children}</em>,
    link: ({value, children}) => (
      <a href={value?.href} target={value?.blank ? "_blank" : undefined} rel="noopener noreferrer" className="text-ca-blue underline hover:opacity-75">{children}</a>
    ),
  },
  list: {
    bullet: ({children}) => <ul className="mb-4 space-y-2">{children}</ul>,
  },
  listItem: {
    bullet: ({children}) => (
      <li className="flex items-start gap-3 text-ca-muted text-sm">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ca-blue flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
  },
};

/* ── Section components ── */
function HeroSectionBlock({ s }: { s: HeroSection }) {
  const { lang } = useLang();
  const accent = s.accentColor ?? "#5b8cff";
  const title = lang === "fr" && s.titleFr ? s.titleFr : s.title;
  const subtitle = lang === "fr" && s.subtitleFr ? s.subtitleFr : s.subtitle;
  const primaryLabel = lang === "fr" && s.primaryCta?.labelFr ? s.primaryCta.labelFr : s.primaryCta?.label;
  const secondaryLabel = lang === "fr" && s.secondaryCta?.labelFr ? s.secondaryCta.labelFr : s.secondaryCta?.label;

  return (
    <section className="bg-ca-dark py-24 border-b border-ca-border">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        {s.eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
            style={{ color: accent, borderColor: `${accent}30`, background: `${accent}08` }}>
            {s.eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5"
          style={{ background: `linear-gradient(135deg, #0e1025 0%, ${accent} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          {title}
        </h1>
        {subtitle && <p className="text-ca-muted text-xl max-w-2xl mx-auto mb-10">{subtitle}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          {s.primaryCta?.href && primaryLabel && (
            <Link href={s.primaryCta.href} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: accent }}>
              {primaryLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {s.secondaryCta?.href && secondaryLabel && (
            <Link href={s.secondaryCta.href} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold border transition-colors hover:bg-ca-surface"
              style={{ color: accent, borderColor: `${accent}40` }}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function SplitSectionBlock({ s }: { s: SplitSection }) {
  const { lang } = useLang();
  const accent = s.accentColor ?? "#5b8cff";
  const eyebrow = lang === "fr" && s.eyebrowFr ? s.eyebrowFr : s.eyebrow;
  const title = lang === "fr" && s.titleFr ? s.titleFr : s.title;
  const description = lang === "fr" && s.descriptionFr ? s.descriptionFr : s.description;
  const bullets = lang === "fr" && s.bulletsFr?.length ? s.bulletsFr : s.bullets;
  const ctaLabel = lang === "fr" && s.cta?.labelFr ? s.cta.labelFr : s.cta?.label;
  const imageUrl = s.image?.asset?.url;

  const text = (
    <div className="flex flex-col justify-center">
      {eyebrow && <span className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: accent }}>{eyebrow}</span>}
      <h2 className="text-3xl md:text-4xl font-bold text-ca-text mb-4 leading-tight">{title}</h2>
      {description && <p className="text-ca-muted leading-relaxed mb-6">{description}</p>}
      {bullets?.length ? (
        <ul className="space-y-3 mb-8">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ca-muted">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} /> {b}
            </li>
          ))}
        </ul>
      ) : null}
      {s.cta?.href && ctaLabel && (
        <Link href={s.cta.href} className="inline-flex items-center gap-2 text-sm font-semibold self-start" style={{ color: accent }}>
          {ctaLabel} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );

  const visual = (
    <div className="relative rounded-2xl overflow-hidden border" style={{ minHeight: 320, borderColor: `${accent}25`, background: `${accent}08` }}>
      {imageUrl ? (
        <Image src={imageUrl} alt={s.image?.alt ?? title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full opacity-10" style={{ background: accent }} />
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-ca-dark py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {s.reverse ? <>{visual}{text}</> : <>{text}{visual}</>}
      </div>
    </section>
  );
}

function StatsSectionBlock({ s }: { s: StatsSection }) {
  const { lang } = useLang();
  const accent = s.accentColor ?? "#5b8cff";
  const title = lang === "fr" && s.titleFr ? s.titleFr : s.title;

  return (
    <section className="bg-ca-surface border-y border-ca-border py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {title && <h2 className="text-2xl font-bold text-ca-text mb-10 text-center">{title}</h2>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {s.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: accent }}>{stat.value}</div>
              <div className="text-sm text-ca-muted">{lang === "fr" && stat.labelFr ? stat.labelFr : stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBannerSectionBlock({ s }: { s: CtaBannerSection }) {
  const { lang } = useLang();
  const eyebrow = lang === "fr" && s.eyebrowFr ? s.eyebrowFr : s.eyebrow;
  const title = lang === "fr" && s.titleFr ? s.titleFr : s.title;
  const description = lang === "fr" && s.descriptionFr ? s.descriptionFr : s.description;
  const primaryLabel = lang === "fr" && s.primaryCta?.labelFr ? s.primaryCta.labelFr : s.primaryCta?.label;
  const secondaryLabel = lang === "fr" && s.secondaryCta?.labelFr ? s.secondaryCta.labelFr : s.secondaryCta?.label;

  return (
    <section className="bg-ca-dark py-20 border-t border-ca-border">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        {eyebrow && <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-mint mb-4 px-3 py-1 rounded-full border border-ca-mint/20 bg-ca-mint/06">{eyebrow}</span>}
        <h2 className="text-3xl md:text-5xl font-bold text-ca-text mb-4">{title}</h2>
        {description && <p className="text-ca-muted text-lg mb-10">{description}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          {s.primaryCta?.href && primaryLabel && (
            <Link href={s.primaryCta.href} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-ca-blue text-white hover:opacity-90 transition-opacity">
              {primaryLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {s.secondaryCta?.href && secondaryLabel && (
            <Link href={s.secondaryCta.href} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold border border-ca-border text-ca-text hover:bg-ca-surface transition-colors">
              {secondaryLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function RichTextSectionBlock({ s }: { s: RichTextSection }) {
  const { lang } = useLang();
  const title = lang === "fr" && s.titleFr ? s.titleFr : s.title;
  const content = lang === "fr" && s.contentFr?.length ? s.contentFr : s.content;
  const maxW = s.maxWidth === "narrow" ? "max-w-2xl" : s.maxWidth === "wide" ? "max-w-6xl" : "max-w-3xl";

  return (
    <section className="bg-ca-dark py-16">
      <div className={`${maxW} mx-auto px-6 md:px-8`}>
        {title && <h2 className="text-2xl font-bold text-ca-text mb-8">{title}</h2>}
        {content?.length ? (
          <div className="article-body">
            <PortableText value={content as Parameters<typeof PortableText>[0]["value"]} components={ptComponents} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ── Main renderer ── */
export function SectionRenderer({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section._type) {
          case "heroSection":      return <HeroSectionBlock key={i} s={section} />;
          case "splitSection":     return <SplitSectionBlock key={i} s={section} />;
          case "statsSection":     return <StatsSectionBlock key={i} s={section} />;
          case "ctaBannerSection": return <CtaBannerSectionBlock key={i} s={section} />;
          case "richTextSection":  return <RichTextSectionBlock key={i} s={section} />;
          default:                 return null;
        }
      })}
    </>
  );
}
