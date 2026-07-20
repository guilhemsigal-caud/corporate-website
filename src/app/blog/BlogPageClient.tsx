"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";
import type { BlogPost } from "@/content/blog";

const COPY = {
  en: { badge: "Blog & Insights", headline: "The Open Web Digest", subtitle: "Research, product news, and adtech thinking from the Collective Audience team.", read: "Read article", readShort: "Read", by: "By" },
  fr: { badge: "Blog & Insights", headline: "Le Digest de l'Open Web", subtitle: "Recherche, actualités produit et réflexions adtech par l'équipe Collective Audience.", read: "Lire l'article", readShort: "Lire", by: "Par" },
};

function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale, { month: "long", day: "numeric", year: "numeric" });
}

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const { lang } = useLang();
  const c = COPY[lang];
  const [featured, ...rest] = posts;
  const dateLocale = lang === "fr" ? "fr-FR" : "en-US";

  if (!featured) return null;

  const featuredTitle = lang === "fr" && featured.fr ? featured.fr.title : featured.title;
  const featuredExcerpt = lang === "fr" && featured.fr ? featured.fr.excerpt : featured.excerpt;
  const featuredReadTime = lang === "fr" && featured.fr ? featured.fr.readTime : featured.readTime;

  return (
    <main>
      <section className="py-12 px-6 md:px-8" style={{ background: "linear-gradient(160deg, #eef1ff 0%, #f5f7ff 50%, #e8f0fe 100%)" }}>
        <div className="w-full max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-muted mb-3">{c.badge}</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-ca-text">
              {c.headline}
            </h1>
            <p className="text-ca-muted text-base max-w-xl">{c.subtitle}</p>
          </div>

          <div className="rounded-xl border border-ca-border bg-white/80 p-6 md:p-8">
            <Link href={`/blog/${featured.slug}`} className="group block mb-10 pb-10 border-b border-ca-border">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border" style={{ color: featured.accent, borderColor: `${featured.accent}40` }}>
                  {featured.category}
                </span>
                <span className="text-sm text-ca-muted">{formatDate(featured.date, dateLocale)}</span>
                <span className="text-ca-border">·</span>
                <span className="text-sm text-ca-muted">{featuredReadTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-ca-text mb-2 leading-snug group-hover:opacity-70 transition-opacity">
                {featuredTitle}
              </h2>
              <p className="text-ca-muted leading-relaxed mb-4 text-sm">{featuredExcerpt}</p>
              {featured.author && (
                <p className="text-sm text-ca-muted mb-4">{c.by} <span className="text-ca-text font-medium">{featured.author}</span></p>
              )}
              <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3" style={{ color: featured.accent }}>
                {c.read} <ArrowRight className="w-4 h-4" aria-hidden />
              </span>
            </Link>

            <ul className="space-y-6">
              {rest.map((post) => {
                const postTitle = lang === "fr" && post.fr ? post.fr.title : post.title;
                const postExcerpt = lang === "fr" && post.fr ? post.fr.excerpt : post.excerpt;
                const postReadTime = lang === "fr" && post.fr ? post.fr.readTime : post.readTime;

                return (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: post.accent }}>
                          {post.category}
                        </span>
                        <span className="text-sm text-ca-muted">{formatDate(post.date, dateLocale)}</span>
                        <span className="text-ca-border text-xs">·</span>
                        <span className="text-sm text-ca-muted">{postReadTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-ca-text mb-1 leading-snug group-hover:opacity-70 transition-opacity">
                        {postTitle}
                      </h3>
                      <p className="text-sm text-ca-muted leading-relaxed line-clamp-2 mb-2">{postExcerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: post.accent }}>
                        {c.readShort} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
