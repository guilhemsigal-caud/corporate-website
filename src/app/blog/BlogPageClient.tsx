"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";
import type { BlogPost } from "@/content/blog";

const COPY = {
  en: { badge: "Blog & Insights", headline: "The Open Web Digest", subtitle: "Research, product news, and adtech thinking from the Collective Audience team.", read: "Read article", readShort: "Read", by: "By" },
  fr: { badge: "Blog & Insights", headline: "Le Digest du Web Ouvert", subtitle: "Recherche, actualités produit et réflexions adtech par l'équipe Collective Audience.", read: "Lire l'article", readShort: "Lire", by: "Par" },
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
      {/* Header */}
      <section className="pt-20 pb-12" style={{ background: "linear-gradient(160deg, #eef1ff 0%, #f5f7ff 50%, #e8f0fe 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-blue mb-4">{c.badge}</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {c.headline}
          </h1>
          <p className="text-ca-muted text-lg max-w-xl">{c.subtitle}</p>
        </div>
      </section>

      <section className="py-14 pb-24" style={{ background: "linear-gradient(160deg, #eef1ff 0%, #f5f7ff 50%, #e8f0fe 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8 rounded-2xl border border-ca-border p-8 md:p-10" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)" }}>

          {/* Featured article */}
          <Link href={`/blog/${featured.slug}`} className="group block mb-14">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden bg-ca-surface"
                style={{ aspectRatio: "16/10", border: `1px solid ${featured.accent}25` }}>
                {featured.coverImage ? (
                  <Image src={featured.coverImage} alt={featured.coverImageAlt ?? featuredTitle} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${featured.accent}15, ${featured.accent}05)` }}>
                    <div className="w-12 h-12 rounded-full opacity-20" style={{ background: featured.accent }} />
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{ color: featured.accent, background: "rgba(255,255,255,0.9)", border: `1px solid ${featured.accent}30` }}>
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-ca-muted">{formatDate(featured.date, dateLocale)}</span>
                  <span className="text-ca-border">·</span>
                  <span className="text-xs text-ca-muted">{featuredReadTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-ca-text mb-3 leading-snug group-hover:opacity-70 transition-opacity">
                  {featuredTitle}
                </h2>
                <p className="text-ca-muted leading-relaxed mb-5 text-sm">{featuredExcerpt}</p>
                {featured.author && (
                  <p className="text-xs text-ca-muted mb-5">{c.by} <span className="text-ca-text font-medium">{featured.author}</span></p>
                )}
                <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3" style={{ color: featured.accent }}>
                  {c.read} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map(post => {
              const postTitle = lang === "fr" && post.fr ? post.fr.title : post.title;
              const postExcerpt = lang === "fr" && post.fr ? post.fr.excerpt : post.excerpt;
              const postReadTime = lang === "fr" && post.fr ? post.fr.readTime : post.readTime;

              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden mb-4 bg-ca-surface"
                    style={{ aspectRatio: "16/10", border: `1px solid ${post.accent}20` }}>
                    {post.coverImage ? (
                      <Image src={post.coverImage} alt={post.coverImageAlt ?? postTitle} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
                    ) : (
                      <div className="absolute inset-0"
                        style={{ background: `linear-gradient(135deg, ${post.accent}12 0%, #eef0fb 100%)` }} />
                    )}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full backdrop-blur-sm"
                        style={{ color: post.accent, background: "rgba(255,255,255,0.9)", border: `1px solid ${post.accent}25` }}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] text-ca-muted">{formatDate(post.date, dateLocale)}</span>
                      <span className="text-ca-border text-[10px]">·</span>
                      <span className="text-[11px] text-ca-muted">{postReadTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-ca-text mb-2 leading-snug group-hover:opacity-70 transition-opacity flex-1">
                      {postTitle}
                    </h3>
                    <p className="text-xs text-ca-muted leading-relaxed mb-3 line-clamp-2">{postExcerpt}</p>
                    {post.author && (
                      <p className="text-[11px] text-ca-muted mb-3">{c.by} <span className="text-ca-text font-medium">{post.author}</span></p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5" style={{ color: post.accent }}>
                      {c.readShort} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
