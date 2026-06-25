import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
export const metadata: Metadata = { title: "About — Collective Audience" };
const VALUES = [
  { title: "Open Web First", desc: "We believe in a free, open, and independent web — funded by advertising that respects users and publishers.", accent: "#5b8cff" },
  { title: "Privacy by Design", desc: "Every product decision starts with privacy. Cookieless is not a constraint — it's our foundation.", accent: "#07e2dc" },
  { title: "Publisher Independence", desc: "We give publishers the tools to own their audiences and monetize without compromising their editorial mission.", accent: "#7b3fff" },
  { title: "Transparency", desc: "No black boxes. Publishers and advertisers see every signal, every decision, every euro.", accent: "#5b8cff" },
];
export default function AboutPage() {
  return (
    <main>
      <section className="relative bg-ca-dark overflow-hidden py-24 md:py-32">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle,rgba(91,140,255,0.14) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">Our Mission</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Built for the open web.
              </h1>
              <p className="text-ca-muted text-lg leading-relaxed mb-6">Collective Audience was born from the merger of BeOp — France's leading conversational ad tech — and NYIAX — the New York-based premium audience marketplace. Together, we're building the infrastructure for a better, fairer, cookieless web.</p>
              <p className="text-ca-muted leading-relaxed mb-8">Our mission: give publishers the power to own their audiences, and give advertisers a direct line to those audiences — without surveillance, without complexity, without black boxes.</p>
              <div className="flex gap-4">
                <Link href="/about/team" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 transition-all">Meet the team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
                <Link href="/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-ca-border bg-white/4 text-ca-text font-semibold text-sm hover:bg-white/8 transition-all">Join us</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "2024", l: "Founded" }, { v: "NY · Paris", l: "Offices" }, { v: "200+", l: "Publishers" }, { v: "150+", l: "Brand clients" }].map(s => (
                <div key={s.l} className="rounded-2xl border border-ca-border bg-ca-surface p-5 text-center">
                  <div className="text-3xl font-bold gradient-text-blue-mint mb-1">{s.v}</div>
                  <div className="text-xs text-ca-muted">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ca-surface border-y border-ca-border py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-center mb-10 text-ca-text">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border p-6" style={{ borderColor: `${v.accent}22`, background: `${v.accent}0a` }}>
                <div className="text-base font-bold mb-2" style={{ color: v.accent }}>{v.title}</div>
                <p className="text-sm text-ca-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
