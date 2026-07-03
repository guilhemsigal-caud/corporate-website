"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CREATIVES = [
  { src: "/creatives/creative-1.png", brand: "Rolex",    format: "Configurator",   w: 325 },
  { src: "/creatives/creative-2.png", brand: "BMW",      format: "Quiz",            w: 420 },
  { src: "/creatives/creative-3.png", brand: "Hermès",   format: "Visual Choice",   w: 290 },
  { src: "/creatives/creative-4.png", brand: "Burberry", format: "Swipe",           w: 285 },
];

const GAP = 20;
const CARD_H = 300;

// Total width of one full set (4 unique cards + gaps)
const ONE_SET_W = CREATIVES.reduce((s, c) => s + c.w + GAP, 0);
// = (325+20)+(420+20)+(290+20)+(285+20) = 345+440+310+305 = 1400px

// Row 1: [Rolex, BMW, Hermès, Burberry] × 3  (left to right)
const ROW1 = [...CREATIVES, ...CREATIVES, ...CREATIVES];

// Row 2: reversed order × 3, so initial view differs from Row 1
const REVERSED = [...CREATIVES].reverse();
const ROW2 = [...REVERSED, ...REVERSED, ...REVERSED];

function Card({ src, brand, format, w }: (typeof CREATIVES)[0]) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex-none"
      style={{ width: w, height: CARD_H, flexShrink: 0 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={brand}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
      />
      {/* Bottom label */}
      <div
        className="absolute inset-0 flex items-end p-4"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 55%)" }}
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-white font-semibold text-sm leading-none">{brand}</span>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full leading-none"
            style={{
              background: "rgba(91,140,255,0.15)",
              color: "#8cb2ff",
              border: "1px solid rgba(91,140,255,0.3)",
            }}
          >
            {format}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CreativeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  // Smooth spring for buttery horizontal movement
  const spring = useSpring(scrollYProgress, { stiffness: 35, damping: 18, mass: 0.6 });

  // Row 1 slides LEFT (negative x) as user scrolls down
  const x1 = useTransform(spring, [0, 1], [0, -ONE_SET_W]);
  // Row 2 slides RIGHT (positive x) — starts offset so it shows reversed order
  const x2 = useTransform(spring, [0, 1], [-ONE_SET_W, 0]);

  return (
    // Tall outer container drives the sticky scroll effect
    <div ref={containerRef} style={{ height: "350vh" }}>
      <section
        className="overflow-hidden flex flex-col"
        style={{ position: "sticky", top: 0, height: "100vh", background: "#07080f" }}
      >
        {/* Header */}
        <div className="flex-none px-10 md:px-14 lg:px-16 pt-16 pb-10">
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
            className="font-bold text-white tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.8rem)" }}
          >
            Interactive formats across<br />premium publishers
          </motion.h2>
        </div>

        {/* Rows container — vertically centered in remaining space */}
        <div className="flex-1 flex flex-col justify-center gap-4">

          {/* Row 1 — slides LEFT */}
          <motion.div
            className="flex"
            style={{ x: x1, gap: GAP, willChange: "transform" }}
          >
            {ROW1.map((c, i) => (
              <Card key={`r1-${i}`} {...c} />
            ))}
          </motion.div>

          {/* Row 2 — slides RIGHT */}
          <motion.div
            className="flex"
            style={{ x: x2, gap: GAP, willChange: "transform" }}
          >
            {ROW2.map((c, i) => (
              <Card key={`r2-${i}`} {...c} />
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
