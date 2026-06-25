"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";
import { use, useMemo } from "react";
import { notFound } from "next/navigation";
import { marked } from "marked";

const COPY = {
  en: { back: "Blog", related: "More articles", read: "Read" },
  fr: { back: "Blog", related: "Plus d'articles", read: "Lire" },
};

// Configure marked for clean output
marked.setOptions({ breaks: true, gfm: true });

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const { lang } = useLang();
  const c = COPY[lang];
  const dateLocale = lang === "fr" ? "fr-FR" : "en-US";
  const title = lang === "fr" && post.fr ? post.fr.title : post.title;
  const excerpt = lang === "fr" && post.fr ? post.fr.excerpt : post.excerpt;
  const readTime = lang === "fr" && post.fr ? post.fr.readTime : post.readTime;
  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString(dateLocale, { month: "long", day: "numeric", year: "numeric" });

  const htmlContent = useMemo(() => marked(post.content) as string, [post.content]);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ca-dark pt-14 pb-0">
        <div className="max-w-3xl mx-auto px-6 md:px-8">

          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> {c.back}
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{ color: post.accent, borderColor: `${post.accent}35`, background: `${post.accent}10` }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ca-muted">
              <Clock className="w-3.5 h-3.5" /> {readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ca-muted">
              <Calendar className="w-3.5 h-3.5" /> {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{
              background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>

          {/* Excerpt / lead */}
          <p className="text-ca-muted text-xl leading-relaxed mb-8">{excerpt}</p>

          {/* Accent line */}
          <div className="h-px w-full mb-0" style={{ background: `linear-gradient(to right, ${post.accent}, transparent)` }} />
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="bg-ca-dark py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-14">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-lg font-bold text-ca-text mb-6">{c.related}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p) => {
                const pTitle = lang === "fr" && p.fr ? p.fr.title : p.title;
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: `${p.accent}35`, background: `linear-gradient(145deg, ${p.accent}0a 0%, #f0f2fc 100%)`, boxShadow: "0 2px 10px rgba(0,0,40,0.05)" }}
                  >
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border mb-3 inline-block"
                      style={{ color: p.accent, borderColor: `${p.accent}30`, background: `${p.accent}08` }}
                    >
                      {p.category}
                    </span>
                    <h3 className="text-sm font-bold text-ca-text mb-3 leading-snug">{pTitle}</h3>
                    <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: p.accent }}>
                      {c.read} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </main>
  );
}
