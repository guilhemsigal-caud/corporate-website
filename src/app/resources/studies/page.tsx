import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { ArrowRight, Download } from "lucide-react";
export const metadata: Metadata = { title: "Studies & White Papers — Collective Audience" };
const STUDIES = [
  { title: "S.T.A.M.P. Attention Study 2024", desc: "Comprehensive analysis of attention metrics across 50+ campaigns and 200+ publisher environments.", type: "White Paper", accent: "#5b8cff" },
  { title: "Cookieless Advertising Playbook", desc: "A practical guide for publishers and advertisers navigating the cookieless transition in 2024-2025.", type: "Guide", accent: "#07e2dc" },
  { title: "Brand Lift Meta-Analysis", desc: "Aggregated brand lift data from 100+ campaigns — benchmarks by industry, format, and audience size.", type: "Research Report", accent: "#7b3fff" },
  { title: "Publisher Monetization Index 2024", desc: "Yearly benchmark report on eCPM, fill rates, and revenue per session across the publisher network.", type: "Annual Report", accent: "#5b8cff" },
  { title: "The Economics of Attention", desc: "Why attention time is the better proxy for advertising value — a case for CPM reform.", type: "Thought Leadership", accent: "#07e2dc" },
  { title: "Open Web Audience Study 2024", desc: "Audience insights, engagement patterns, and content consumption trends from 200+ publishers.", type: "Research Report", accent: "#7b3fff" },
];
export default function StudiesPage() {
  return (
    <main>
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">Studies & Research</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Research that moves the industry.</h1>
            <p className="text-ca-muted text-lg max-w-xl mx-auto">White papers, meta-analyses, and benchmarks to help publishers and advertisers navigate the open web.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {STUDIES.map((s) => (
              <div key={s.title} className="group relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer" style={{ borderColor: `${s.accent}22`, background: `${s.accent}08` }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${s.accent} 40%,${s.accent} 60%,transparent 95%)` }} />
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: s.accent, borderColor: `${s.accent}30`, background: `${s.accent}0a` }}>{s.type}</span>
                  <Download className="w-4 h-4 text-ca-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                </div>
                <h3 className="text-base font-bold text-ca-text mb-2 leading-snug">{s.title}</h3>
                <p className="text-xs text-ca-muted leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: s.accent }}>Download PDF <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
