"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";
import { isPostVisibleInLang, type BlogPost } from "@/content/blog";

const COPY = {
  en: { badge: "Blog & Insights", headline: "The Open Web Digest", subtitle: "Research, product news, and adtech thinking from the Collective Audience team.", readShort: "Read" },
  fr: { badge: "Blog & Insights", headline: "Le Digest de l'Open Web", subtitle: "Recherche, actualités produit et réflexions adtech par l'équipe Collective Audience.", readShort: "Lire" },
};

function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale, { month: "long", day: "numeric", year: "numeric" });
}

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const { lang } = useLang();
  const c = COPY[lang];
  const visiblePosts = posts.filter((p) => isPostVisibleInLang(p, lang));
  const dateLocale = lang === "fr" ? "fr-FR" : "en-US";

  if (!visiblePosts.length) return null;

  return (
    <main>
      <section className="py-12 px-6 md:px-8" style={{ background: "linear-gradient(160deg, #eef1ff 0%, #f5f7ff 50%, #e8f0fe 100%)" }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-10 max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ca-muted mb-3">{c.badge}</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-ca-text">
              {c.headline}
            </h1>
            <p className="text-ca-muted text-base max-w-xl">{c.subtitle}</p>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post) => {
              const postTitle = lang === "fr" && post.fr ? post.fr.title : post.title;
              const postExcerpt = lang === "fr" && post.fr ? post.fr.excerpt : post.excerpt;
              const postReadTime = lang === "fr" && post.fr ? post.fr.readTime : post.readTime;

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1"
                  style={{ borderColor: `${post.accent}30`, boxShadow: "0 2px 10px rgba(20,20,60,0.05)" }}
                >
                  <div className="relative w-full aspect-[16/10]" style={{ background: `linear-gradient(145deg, ${post.accent}25 0%, #eef0fb 100%)` }}>
                    {post.coverImage ? (
                      <Image src={post.coverImage} alt={post.coverImageAlt ?? postTitle} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold opacity-20" style={{ color: post.accent }}>{post.category.slice(0, 2).toUpperCase()}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: post.accent }}>
                        {post.category}
                      </span>
                      <span className="text-xs text-ca-muted">{formatDate(post.date, dateLocale)}</span>
                      <span className="text-ca-border text-xs">·</span>
                      <span className="text-xs text-ca-muted">{postReadTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-ca-text mb-2 leading-snug group-hover:opacity-70 transition-opacity">
                      {postTitle}
                    </h3>
                    <p className="text-sm text-ca-muted leading-relaxed line-clamp-2 mb-3">{postExcerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: post.accent }}>
                      {c.readShort} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
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
