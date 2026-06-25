"use client";

import { motion } from "framer-motion";

const MEDIA_LOGOS = [
  "Le Monde", "Les Échos", "L'Obs", "Courrier International",
  "Télérama", "HuffPost", "Forbes", "Libération",
  "L'Express", "Le Figaro", "Mediapart", "20 Minutes",
];

const BRAND_LOGOS = [
  "Audi", "BMW", "L'Oréal", "Carrefour", "Nestlé",
  "Samsung", "Coca-Cola", "Orange", "SFR", "BNP Paribas",
  "Renault", "Total", "LVMH", "Sanofi",
];

function LogoItem({ name, accent }: { name: string; accent: string }) {
  return (
    <div
      className="inline-flex items-center px-6 py-2.5 rounded-lg border mx-3 flex-shrink-0 transition-all duration-300"
      style={{ borderColor: `${accent}40`, background: `${accent}0a`, boxShadow: "0 1px 6px rgba(0,0,40,0.06)" }}
    >
      <span
        className="text-sm font-semibold tracking-wide whitespace-nowrap"
        style={{ color: "#5a6480" }}
      >
        {name}
      </span>
    </div>
  );
}

function Marquee({
  items,
  accent,
  reverse = false,
}: {
  items: string[];
  accent: string;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-mask">
      <div
        className="flex w-max"
        style={{
          animation: `${reverse ? "marquee-rev" : "marquee"} 35s linear infinite`,
        }}
      >
        {doubled.map((name, i) => (
          <LogoItem key={`${name}-${i}`} name={name} accent={accent} />
        ))}
      </div>
    </div>
  );
}

export function LogoCloud() {
  return (
    <section className="bg-ca-dark py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Media partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-ca-border" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-muted px-4">
              200+ media partners
            </span>
            <div className="h-px flex-1 bg-ca-border" />
          </div>
          <Marquee items={MEDIA_LOGOS} accent="#5b8cff" />
        </motion.div>

        {/* Brand partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-ca-border" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-muted px-4">
              150+ brand campaigns
            </span>
            <div className="h-px flex-1 bg-ca-border" />
          </div>
          <Marquee items={BRAND_LOGOS} accent="#07e2dc" reverse />
        </motion.div>

        {/* Testimonial strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "Publicis Media", "GroupM", "Starcom", "Le Monde", "Nasdaq", "Boursorama",
          ].map((name) => (
            <span
              key={name}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-ca-muted border border-ca-border"
            >
              {name}
            </span>
          ))}
          <span className="px-4 py-1.5 rounded-full text-xs font-medium text-ca-blue border border-ca-blue/30 bg-ca-blue/8">
            + many more
          </span>
        </motion.div>
      </div>
    </section>
  );
}
