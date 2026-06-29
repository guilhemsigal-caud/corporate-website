"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";
import { marked } from "marked";
import { useMemo } from "react";
import type { BlogPost } from "@/content/blog";

const COPY = {
  en: { back: "Blog", related: "More articles", read: "Read" },
  fr: { back: "Blog", related: "Plus d'articles", read: "Lire" },
};

marked.setOptions({ breaks: true, gfm: true });

/* ── Portable Text renderer ── */
const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-5 text-ca-muted leading-relaxed">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-ca-text mt-10 mb-4 pb-2 border-b border-ca-border">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-ca-text mt-8 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base font-bold text-ca-text mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-ca-blue pl-5 my-6 italic text-ca-muted">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ca-text">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    "strike-through": ({ children }) => <span className="line-through">{children}</span>,
    code: ({ children }) => (
      <code className="bg-ca-surface border border-ca-border rounded px-1.5 py-0.5 text-[0.85em] text-ca-blue font-mono">{children}</code>
    ),
    link: ({ value, children }) => (
      <a href={value?.href} target={value?.blank ? "_blank" : undefined} rel="noopener noreferrer"
        className="text-ca-blue underline underline-offset-2 hover:opacity-75 transition-opacity">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-5 space-y-2 pl-0">{children}</ul>,
    number: ({ children }) => <ol className="mb-5 space-y-2 list-decimal pl-5 text-ca-muted">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-ca-muted text-sm leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ca-blue flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="text-ca-muted text-sm leading-relaxed pl-1">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={value.url} alt={value.alt ?? ""} fill className="object-cover" sizes="768px" />
        </div>
        {value.caption && (
          <figcaption className="text-center text-xs text-ca-muted mt-2">{value.caption}</figcaption>
        )}
      </figure>
    ),
  },
};

function ArticleBody({ content }: { content: unknown }) {
  // Portable Text (Sanity array of blocks)
  if (Array.isArray(content)) {
    return (
      <div className="article-body">
        <PortableText value={content as Parameters<typeof PortableText>[0]["value"]} components={portableTextComponents} />
      </div>
    );
  }
  // Fallback: legacy Markdown string (static content)
  if (typeof content === "string") {
    return (
      <div className="article-body" dangerouslySetInnerHTML={{ __html: marked(content) as string }} />
    );
  }
  return null;
}

export function BlogPostClient({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const { lang } = useLang();
  const c = COPY[lang];
  const dateLocale = lang === "fr" ? "fr-FR" : "en-US";

  const title = lang === "fr" && post.fr ? post.fr.title : post.title;
  const excerpt = lang === "fr" && post.fr ? post.fr.excerpt : post.excerpt;
  const readTime = lang === "fr" && post.fr ? post.fr.readTime : post.readTime;
  const content = lang === "fr" && post.fr && (post.fr as { content?: unknown }).content
    ? (post.fr as { content?: unknown }).content
    : post.content;

  const formattedDate = new Date(post.date).toLocaleDateString(dateLocale, { month: "long", day: "numeric", year: "numeric" });

  return (
    <main>
      <section className="bg-ca-dark pt-14 pb-0">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> {c.back}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{ color: post.accent, borderColor: `${post.accent}35`, background: `${post.accent}10` }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ca-muted"><Clock className="w-3.5 h-3.5" /> {readTime}</span>
            <span className="flex items-center gap-1.5 text-xs text-ca-muted"><Calendar className="w-3.5 h-3.5" /> {formattedDate}</span>
            {post.author && (
              <span className="flex items-center gap-1.5 text-xs text-ca-muted"><User className="w-3.5 h-3.5" /> {post.author}</span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {title}
          </h1>
          <p className="text-ca-muted text-xl leading-relaxed mb-8">{excerpt}</p>
          <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${post.accent}, transparent)` }} />
        </div>
      </section>

      {post.coverImage && (
        <section className="bg-ca-dark pt-8 pb-0">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 340 }}>
              <Image src={post.coverImage} alt={post.coverImageAlt ?? post.title} fill className="object-cover" sizes="768px" priority />
            </div>
          </div>
        </section>
      )}

      <section className="bg-ca-dark py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ArticleBody content={content} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-14">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-lg font-bold text-ca-text mb-6">{c.related}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p) => {
                const pTitle = lang === "fr" && p.fr ? p.fr.title : p.title;
                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`}
                    className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: `${p.accent}35`, background: `linear-gradient(145deg, ${p.accent}0a 0%, #f0f2fc 100%)`, boxShadow: "0 2px 10px rgba(0,0,40,0.05)" }}>
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border mb-3 inline-block"
                      style={{ color: p.accent, borderColor: `${p.accent}30`, background: `${p.accent}08` }}>
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
