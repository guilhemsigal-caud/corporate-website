import type { Metadata } from "next";
import { PillarHero } from "@/components/sections/PillarHero";
import { CTABanner } from "@/components/sections/CTABanner";
import Link from "next/link";
export const metadata: Metadata = { title: "Formats & Experiences — Advertisers — Collective Audience" };
export default function Page() {
  return (
    <main>
      <PillarHero eyebrow="Advertisers · Formats" headline="Ad formats that earn attention." subtitle="From immersive video to conversational experiences, our formats are designed to generate genuine interaction — not just impressions." accent="#07e2dc" ctaPrimary={{ label: "Explore the gallery", href: "/gallery" }} stats={[{ value: "34s", label: "avg. attention" }, { value: ">1%", label: "interaction rate" }, { value: "+40%", label: "brand lift" }]} />
      <section className="bg-ca-dark py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-center text-ca-muted mb-10">Discover all our formats in the interactive gallery — with live demos and real KPIs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[["Conversational","Interactive dialogue formats that engage users in a natural Q&A within the article.","#07e2dc"],["Immersive Video","Full-screen scroll-triggered video with interactive overlays and attention tracking.","#5b8cff"],["Slider","Before/after interactive slider for product comparisons and brand storytelling.","#7b3fff"],["Focus Vidéo","High-attention mid-article video that activates only when fully in view.","#07e2dc"],["Branded Content","Long-form native content units that blend seamlessly with editorial.","#5b8cff"],["Rich Media","Expandable, animated formats with interactive product showcases.","#7b3fff"]].map(([name, desc, color]) => (
              <Link key={name as string} href="/gallery" className="group relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${color}22`, background: `linear-gradient(145deg,${color}0a 0%,#111420 55%)` }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${color} 40%,${color} 60%,transparent 95%)` }} />
                <div className="text-sm font-bold mb-2" style={{ color: color as string }}>{name as string}</div>
                <p className="text-xs text-ca-muted leading-relaxed">{desc as string}</p>
                <div className="mt-4 text-xs font-semibold" style={{ color: color as string }}>View demo →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
