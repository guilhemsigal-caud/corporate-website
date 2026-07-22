"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const GAP = 32;

/* ── Row 1: BMW → text → Rolex → text ── */
const ITEMS_ROW1 = [
  { type: "card" as const,  src: "/creatives/creative-2.png", brand: "BMW",     w: 460 },
  { type: "text" as const,  headline: "Active Attention",     desc: "Capturing high-intent buyers through premium interactive content ecosystems.", w: 240 },
  { type: "card" as const,  src: "/creatives/creative-1.png", brand: "Rolex",   w: 370 },
  { type: "text" as const,  headline: "Engagement & Visibility", desc: "Unifying your marketing intelligence to track true revenue performance.", w: 240 },
];

/* ── Row 2: text → Hermès → text → Burberry ── */
const ITEMS_ROW2 = [
  { type: "text" as const,  headline: "Marketing & Registrations", desc: "Defining a unique brand narrative that cuts through market noise.", w: 240 },
  { type: "card" as const,  src: "/creatives/creative-3.png", brand: "Hermès",  w: 345 },
  { type: "text" as const,  headline: "Attention & Attribution",   desc: "Re-engineering the post-purchase journey to maximise account retention.", w: 240 },
  { type: "card" as const,  src: "/creatives/creative-4.png", brand: "Burberry",w: 340 },
];

const ONE_W_R1 = ITEMS_ROW1.reduce((s, c) => s + c.w + GAP, 0);
const ONE_W_R2 = ITEMS_ROW2.reduce((s, c) => s + c.w + GAP, 0);

const ROW1 = [...ITEMS_ROW1, ...ITEMS_ROW1, ...ITEMS_ROW1];
const ROW2 = [...ITEMS_ROW2, ...ITEMS_ROW2, ...ITEMS_ROW2];

function CreativeCard({ src, brand, w }: { src: string; brand: string; w: number }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex-none h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px]"
      style={{
        width: w,
        boxShadow: "0 4px 24px rgba(14,16,37,0.10), 0 1px 4px rgba(14,16,37,0.06)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={brand}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
      />
      <div
        className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full"
        style={{
          background: "rgba(255,255,255,0.18)",
          color: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        Démo
      </div>
    </div>
  );
}

function CategoryText({ headline, desc, w }: { headline: string; desc: string; w: number }) {
  return (
    <div
      className="flex-none flex flex-col justify-center h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px]"
      style={{ width: w, paddingLeft: 8, paddingRight: 8 }}
    >
      <p
        className="font-semibold leading-snug mb-3"
        style={{ fontSize: "1.05rem", color: "#5b8cff" }}
      >
        {headline}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#5a6480" }}>
        {desc}
      </p>
      <div className="w-1.5 h-1.5 rounded-full mt-4" style={{ background: "#5b8cff", opacity: 0.45 }} />
    </div>
  );
}

export function CreativeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const spring = useSpring(scrollYProgress, { stiffness: 32, damping: 18, mass: 0.6 });

  const x1 = useTransform(spring, [0, 1], [0, -ONE_W_R1]);
  const x2 = useTransform(spring, [0, 1], [-ONE_W_R2, 0]);

  return (
    <div ref={containerRef} style={{ height: "350vh" }}>
      <section
        className="overflow-hidden flex flex-col"
        style={{ position: "sticky", top: 0, height: "100vh", background: "#fafbff" }}
      >
        {/* Header */}
        <div className="flex-none px-6 md:px-[68px] lg:px-[100px] pt-8 pb-6 md:pt-16 md:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest uppercase font-semibold mb-4"
            style={{ color: "#5b8cff" }}
          >
            Creative Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.8rem)", color: "#0e1025" }}
          >
            Interactive formats across<br />premium publishers
          </motion.h2>
        </div>

        {/* Two rows */}
        <div className="flex-1 flex flex-col justify-center gap-5 overflow-visible">

          {/* Row 1 — slides LEFT */}
          <motion.div
            className="flex items-center"
            style={{ x: x1, gap: GAP, willChange: "transform" }}
          >
            {ROW1.map((item, i) =>
              item.type === "card"
                ? <CreativeCard key={`r1-${i}`} src={item.src} brand={item.brand} w={item.w} />
                : <CategoryText key={`r1-${i}`} headline={item.headline} desc={item.desc} w={item.w} />
            )}
          </motion.div>

          {/* Row 2 — slides RIGHT */}
          <motion.div
            className="flex items-center"
            style={{ x: x2, gap: GAP, willChange: "transform" }}
          >
            {ROW2.map((item, i) =>
              item.type === "card"
                ? <CreativeCard key={`r2-${i}`} src={item.src} brand={item.brand} w={item.w} />
                : <CategoryText key={`r2-${i}`} headline={item.headline} desc={item.desc} w={item.w} />
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
