"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { BRAND_PARTNERS, MEDIA_PARTNERS, type Partner } from "@/content/partners";

const COPY = {
  en: { mediaLabel: "Premium media partners", brandLabel: "Trusted by leading brands", moreLabel: "+ many more" },
  fr: { mediaLabel: "Partenaires médias premium", brandLabel: "Des marques leaders nous font confiance", moreLabel: "+ et bien d'autres" },
};

function LogoItem({ partner, accent }: { partner: Partner; accent: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="inline-flex flex-col items-center justify-center gap-2 px-5 py-3.5 rounded-xl border mx-3 flex-shrink-0 min-w-[110px] transition-all duration-300"
      style={{ borderColor: `${accent}35`, background: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,40,0.06)" }}
    >
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo}
          alt=""
          aria-hidden
          className="h-8 w-auto max-w-[72px] object-contain"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div
          className="h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
          style={{ background: accent }}
          aria-hidden
        >
          {partner.name.charAt(0)}
        </div>
      )}
      <span className="text-xs font-semibold tracking-wide whitespace-nowrap text-ca-text">{partner.name}</span>
    </div>
  );
}

function Marquee({ items, accent, reverse = false }: { items: Partner[]; accent: string; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-mask" role="list" aria-label="Partner logos">
      <div className="flex w-max" style={{ animation: `${reverse ? "marquee-rev" : "marquee"} 40s linear infinite` }}>
        {doubled.map((partner, i) => (
          <div key={`${partner.slug}-${i}`} role="listitem">
            <LogoItem partner={partner} accent={accent} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoCloud() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className="bg-ca-dark py-20 overflow-hidden" aria-labelledby="partners-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 id="partners-heading" className="sr-only">
          {c.brandLabel}
        </h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-ca-muted">{c.mediaLabel}</span>
            <div className="h-px flex-1 bg-ca-border" />
          </div>
          <Marquee items={MEDIA_PARTNERS} accent="#5b8cff" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-ca-muted">{c.brandLabel}</span>
            <div className="h-px flex-1 bg-ca-border" />
          </div>
          <Marquee items={BRAND_PARTNERS} accent="#07e2dc" reverse />
        </motion.div>
      </div>
    </section>
  );
}
