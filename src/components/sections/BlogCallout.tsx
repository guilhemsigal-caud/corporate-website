"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const ACCENTS = ["#5b8cff", "#07e2dc", "#7b3fff"];

const ARTICLES = {
  en: [
    { tag: "Thought Leadership", title: "Why Attention Metrics Are Replacing Viewability as the New Standard", readTime: "5 min read", href: "/blog" },
    { tag: "Case Study", title: "How a Leading Retailer Drove 3× Brand Lift with Interactive Formats", readTime: "4 min read", href: "/blog" },
    { tag: "Research", title: "The State of the Open Web: Audience Intelligence in a Cookieless Era", readTime: "6 min read", href: "/blog" },
  ],
  fr: [
    { tag: "Vision", title: "Pourquoi l'attention remplace la viewability comme nouveau standard", readTime: "5 min", href: "/blog" },
    { tag: "Étude de cas", title: "Comment un grand retailer a généré 3× de lift de marque avec des formats interactifs", readTime: "4 min", href: "/blog" },
    { tag: "Recherche", title: "L'état du web ouvert : l'intelligence audience à l'ère du sans-cookie", readTime: "6 min", href: "/blog" },
  ],
};

const COPY = {
  en: {
    eyebrow: "From the blog",
    title: "Insights & resources",
    subtitle: "The latest thinking on audience intelligence, programmatic advertising, and the open web.",
    readMore: "Read more",
    cta: "Read all posts",
  },
  fr: {
    eyebrow: "Sur le blog",
    title: "Insights & ressources",
    subtitle: "Les dernières réflexions sur l'intelligence audience, la publicité programmatique et le web ouvert.",
    readMore: "Lire la suite",
    cta: "Voir tous les articles",
  },
};

export function BlogCallout() {
  const { lang } = useLang();
  const c = COPY[lang];
  const articles = ARTICLES[lang];

  return (
    <section className="bg-ca-dark py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-3 py-1 rounded-full border"
            style={{ color: "#5b8cff", borderColor: "rgba(91,140,255,0.2)", background: "rgba(91,140,255,0.06)" }}
          >
            {c.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-ca-text">
            {c.title}
          </h2>
          <p className="text-ca-muted text-lg max-w-xl">{c.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, i) => {
            const accent = ACCENTS[i];
            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="group relative flex flex-col rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: `${accent}45`,
                  background: `linear-gradient(145deg, ${accent}18 0%, #eef0fb 100%)`,
                  boxShadow: "0 2px 16px rgba(0,0,40,0.06), 0 1px 3px rgba(0,0,40,0.04)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(to right, transparent 5%, ${accent} 40%, ${accent} 60%, transparent 95%)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${accent}14 0%, transparent 65%)` }}
                />

                <div className="relative flex flex-col flex-1">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: accent }}
                  >
                    {article.tag}
                  </span>

                  <h3 className="text-base font-semibold leading-snug mb-5 text-ca-text flex-1">
                    {article.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ca-muted">{article.readTime}</span>
                    <Link
                      href={article.href}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                      style={{ color: accent }}
                    >
                      {c.readMore}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
            style={{ color: "#5b8cff" }}
          >
            {c.cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
