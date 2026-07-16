"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    badge: "404 error",
    title: "This page didn't make the cut.",
    subtitle:
      "The page you're looking for has moved, been renamed, or never existed. No impressions served here — let's get you back to the good inventory.",
    cta1: "Back to home",
    cta2: "Contact us",
    tryInstead: "Or try one of these",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
    ],
    cardLabel: "Ad not found",
  },
  fr: {
    badge: "Erreur 404",
    title: "Cette page n'a pas été retenue.",
    subtitle:
      "La page que vous cherchez a été déplacée, renommée, ou n'a jamais existé. Aucune impression servie ici — revenez vers le bon inventaire.",
    cta1: "Retour à l'accueil",
    cta2: "Nous contacter",
    tryInstead: "Ou essayez plutôt",
    links: [
      { label: "Plateforme", href: "/platform" },
      { label: "Galerie", href: "/gallery" },
      { label: "Blog", href: "/blog" },
    ],
    cardLabel: "Annonce introuvable",
  },
};

function LostCard({ label }: { label: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -14 }}
      animate={{ opacity: 1, y: 0, rotate: -10 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden cursor-pointer"
        style={{
          width: "280px",
          rotateX: hovered ? tilt.x : 8,
          rotateY: hovered ? tilt.y : 0,
          rotate: -6,
          transformOrigin: "center",
          border: "1px solid rgba(14,16,37,0.1)",
          boxShadow: hovered
            ? "0 32px 70px rgba(20,20,60,0.22)"
            : "0 20px 50px rgba(20,20,60,0.14)",
          transition: "box-shadow 0.3s ease",
          animation: "float 6s ease-in-out infinite",
        }}
        whileHover={{ scale: 1.04 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/creatives/creative-1.png"
          alt=""
          style={{ width: "100%", height: "auto", display: "block", filter: "grayscale(0.55) opacity(0.85)" }}
        />

        {/* Broken-link stamp */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ background: "rgba(14,16,37,0.28)" }}
        >
          <div
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white"
            style={{
              background: "rgba(220,60,60,0.85)",
              transform: "rotate(-8deg)",
              border: "2px solid rgba(255,255,255,0.7)",
            }}
          >
            {label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function NotFound() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="relative bg-ca-dark overflow-hidden py-28 min-h-[75vh] flex items-center">
      {/* Ambient glow blobs — consistent with other light hero sections */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[5%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(91,140,255,0.16) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[-5%] right-[8%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(7,226,220,0.1) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite 5s" }}
        />
      </div>

      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right,#c4d0f0 1px,transparent 1px),linear-gradient(to bottom,#c4d0f0 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,#000 50%,transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-8">
            {c.badge}
          </div>

          <div
            className="font-bold tracking-tight leading-none mb-4"
            style={{
              fontSize: "clamp(4rem, 10vw, 7.5rem)",
              background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-ca-text mb-4 leading-snug">
            {c.title}
          </h1>

          <p className="text-ca-muted text-lg leading-relaxed max-w-md mb-10">
            {c.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-ca-blue text-white font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_30px_rgba(91,140,255,0.4)]"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              {c.cta1}
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-ca-border bg-black/5 text-ca-text font-semibold hover:bg-black/8 transition-all"
            >
              {c.cta2}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-muted/70 mb-3 block">
              {c.tryInstead}
            </span>
            <div className="flex flex-wrap gap-3">
              {c.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-full border border-ca-border text-sm font-medium text-ca-text hover:border-ca-blue/40 hover:text-ca-blue transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Creative column */}
        <div className="hidden lg:flex justify-center items-center">
          <LostCard label={c.cardLabel} />
        </div>
      </div>
    </section>
  );
}
