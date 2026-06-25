"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";
import { use } from "react";
import { notFound } from "next/navigation";

const COPY = {
  en: { back: "Blog", readTime: "min read", related: "More articles", read: "Read" },
  fr: { back: "Blog", readTime: "min de lecture", related: "Plus d'articles", read: "Lire" },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const { lang } = useLang();
  const c = COPY[lang];
  const dateLocale = lang === "fr" ? "fr-FR" : "en-US";
  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <main>
      <section className="bg-ca-dark py-14">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> {c.back}
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: post.accent, borderColor: `${post.accent}30`, background: `${post.accent}08` }}>{post.category}</span>
            <span className="text-[10px] text-ca-muted">{post.readTime}</span>
            <span className="text-[10px] text-ca-muted">·</span>
            <span className="text-[10px] text-ca-muted">{new Date(post.date).toLocaleDateString(dateLocale, { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{post.title}</h1>
          <p className="text-ca-muted text-lg leading-relaxed mb-10 pb-10 border-b border-ca-border">{post.excerpt}</p>
          {post.body && (
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.body }} />
          )}
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-12">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-base font-bold text-ca-text mb-5">{c.related}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: `${p.accent}35`, background: `${p.accent}0a`, boxShadow: "0 2px 8px rgba(0,0,40,0.05)" }}>
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border mb-3 inline-block" style={{ color: p.accent, borderColor: `${p.accent}30`, background: `${p.accent}08` }}>{p.category}</span>
                  <h3 className="text-sm font-bold text-ca-text mb-2 leading-snug">{p.title}</h3>
                  <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: p.accent }}>{c.read} <ArrowRight className="w-3.5 h-3.5" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CTABanner />
    </main>
  );
}
