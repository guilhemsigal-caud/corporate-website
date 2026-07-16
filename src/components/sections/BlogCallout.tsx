"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const ARTICLES = [
  {
    tag: "Thought Leadership",
    tagColor: "#5b8cff",
    title: "Why Attention Metrics Are Replacing Viewability as the New Standard",
    readTime: "5 min read",
    href: "/blog",
  },
  {
    tag: "Case Study",
    tagColor: "#07e2dc",
    title: "How a Leading Retailer Drove 3× Brand Lift with Interactive Formats",
    readTime: "4 min read",
    href: "/blog",
  },
  {
    tag: "Research",
    tagColor: "#7b3fff",
    title: "The State of the Open Web: Audience Intelligence in a Cookieless Era",
    readTime: "6 min read",
    href: "/blog",
  },
];

const COPY = {
  en: {
    title: "Insights & Resources",
    subtitle:
      "The latest thinking on audience intelligence, programmatic advertising, and the open web.",
    readMore: "Read more",
    cta: "Read all posts",
  },
  fr: {
    title: "Insights & Ressources",
    subtitle:
      "Les dernières réflexions sur l'intelligence audience, la publicité programmatique et le web ouvert.",
    readMore: "Lire la suite",
    cta: "Voir tous les articles",
  },
};

export function BlogCallout() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="bg-ca-dark py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            style={{ color: "#0e1025" }}
          >
            {c.title}
          </h2>
          <p className="text-ca-muted text-lg max-w-xl">{c.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border p-6 transition-shadow duration-200 hover:shadow-md"
              style={{ borderColor: "#d0d8f0", background: "#ffffff" }}
            >
              {/* Tag */}
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-2.5 py-1 rounded-full self-start"
                style={{
                  color: article.tagColor,
                  background: `${article.tagColor}12`,
                }}
              >
                {article.tag}
              </span>

              {/* Title */}
              <h3
                className="text-base font-semibold leading-snug mb-4 flex-1"
                style={{ color: "#0e1025" }}
              >
                {article.title}
              </h3>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "#d0d8f0" }}>
                <span className="text-xs text-ca-muted">{article.readTime}</span>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
                  style={{ color: article.tagColor }}
                >
                  {c.readMore}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:bg-ca-surface"
            style={{
              borderColor: "#d0d8f0",
              color: "#0e1025",
              background: "#ffffff",
            }}
          >
            {c.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
