"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function RevealLine({
  children,
  delay = 0,
  inView,
}: {
  children: React.ReactNode;
  delay?: number;
  inView: boolean;
}) {
  return (
    <span className="block overflow-hidden" style={{ lineHeight: 1.1 }}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const CARDS = [
  {
    src: "/creatives/creative-1.png",
    brand: "Rolex",
    type: "Configurator",
    rotate: "-3deg",
    bottom: "16px",
    left: "0%",
    width: "22%",
    delay: 0.45,
  },
  {
    src: "/creatives/creative-2.png",
    brand: "BMW",
    type: "Quiz",
    rotate: "1.5deg",
    bottom: "44px",
    left: "25%",
    width: "22%",
    delay: 0.55,
  },
  {
    src: "/creatives/creative-3.png",
    brand: "Hermès",
    type: "Visual choice",
    rotate: "-1.5deg",
    bottom: "10px",
    left: "51%",
    width: "17%",
    delay: 0.65,
  },
  {
    src: "/creatives/creative-4.png",
    brand: "Burberry",
    type: "Swipe",
    rotate: "2.5deg",
    bottom: "10px",
    left: "71%",
    width: "17%",
    delay: 0.75,
  },
];

export function HeroCinematic() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="px-4 md:px-5 py-4">
      <div
        className="relative overflow-hidden rounded-3xl w-full flex flex-col"
        style={{ height: "90vh", background: "#000" }}
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.28) saturate(0.15)" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Glow blob 1 — pink/blue */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-30%",
            left: "-15%",
            width: "60%",
            height: "120%",
            background:
              "radial-gradient(ellipse at center, rgba(199,81,192,0.50) 0%, rgba(65,88,208,0.22) 40%, transparent 68%)",
            animation: "heroGlowMove1 7.2s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        {/* Glow blob 2 — pink/blue, different path */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%",
            left: "15%",
            width: "55%",
            height: "110%",
            background:
              "radial-gradient(ellipse at center, rgba(199,81,192,0.42) 0%, rgba(65,88,208,0.20) 42%, transparent 68%)",
            animation: "heroGlowMove2 5s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        {/* Inner content */}
        <div className="relative z-10 flex flex-col flex-1 px-10 md:px-14 lg:px-16 pt-10 pb-10">

          {/* Logo top-left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-none flex items-center gap-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Collective Audience" className="h-8 w-auto" />
          </motion.div>

          {/* Headline — vertically centered */}
          <div className="flex-1 flex flex-col justify-center">
            <div style={{ width: "fit-content", margin: "0 auto" }}>
              {/* Eyebrow */}
              <motion.p
                className="text-white text-sm tracking-wide mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Interactive Experiences. Actionable Intelligence. Measurable Results.
              </motion.p>

              {/* Title */}
              <h2
                className="text-white tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.8rem)", fontWeight: 700 }}
              >
                <RevealLine inView={isInView} delay={0.2}>Interactive experiences that</RevealLine>
                <RevealLine inView={isInView} delay={0.34}>connect audiences</RevealLine>
                <RevealLine inView={isInView} delay={0.48}>everywhere, turn attention into</RevealLine>
                <RevealLine inView={isInView} delay={0.62}>outcomes.</RevealLine>
              </h2>

              {/* Dot indicator */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: "#5b8cff" }} />
              </motion.div>
            </div>
          </div>

          {/* Creative cards — full image, natural aspect ratio */}
          <div className="flex-none relative w-full" style={{ height: "320px" }}>
            {CARDS.map((card) => (
              <motion.div
                key={card.brand}
                className="absolute rounded-2xl overflow-hidden"
                style={{
                  width: card.width,
                  bottom: card.bottom,
                  left: card.left,
                  transform: `rotate(${card.rotate})`,
                  transformOrigin: "bottom center",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.src}
                  alt={card.brand}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
