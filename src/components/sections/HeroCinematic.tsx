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

function LexusCard() {
  return (
    <div className="w-44 rounded-xl overflow-hidden shadow-2xl bg-[#1a1a2e] border border-white/10 text-white text-[10px] select-none">
      <div className="bg-[#0d0d1a] px-3 py-2 border-b border-white/10 flex justify-between items-center">
        <span className="text-white/40 text-[8px] uppercase tracking-wider">Lexus NX</span>
        <span className="text-[8px] bg-blue-500/30 text-blue-300 px-1.5 py-0.5 rounded">Démo</span>
      </div>
      <div className="px-3 py-2.5">
        <p className="text-white/80 leading-tight mb-2.5">The NX 2021 model includes which new design features?</p>
        <div className="space-y-1.5">
          {["LED Headlamps", "Panoramic Sunroof", "Rain-sensing wipers"].map((opt) => (
            <div key={opt} className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
              <div className="w-2.5 h-2.5 rounded border border-white/30 flex-shrink-0" />
              <span className="text-white/70">{opt}</span>
            </div>
          ))}
        </div>
        <button className="mt-2.5 w-full bg-blue-600 text-white text-[9px] py-1.5 rounded font-medium">Pick at least 1 choice</button>
      </div>
    </div>
  );
}

function RolexCard() {
  return (
    <div className="w-52 rounded-xl overflow-hidden shadow-2xl bg-white text-[10px] select-none">
      <div className="bg-gray-50 px-3 py-2 border-b border-gray-200 flex justify-between items-center">
        <span className="text-gray-400 text-[8px] uppercase tracking-widest font-light">ROLEX</span>
        <span className="text-[8px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">Démo</span>
      </div>
      <div className="px-3 py-3">
        <p className="font-semibold text-gray-900 mb-0.5">CONFIGURE YOUR DAY-DATE 40</p>
        <p className="text-gray-500 mb-3">CHOOSE YOUR MATERIAL</p>
        <div className="flex gap-2">
          {[
            { label: "YELLOW GOLD", color: "#c9a84c" },
            { label: "WHITE GOLD", color: "#d6d6d6" },
            { label: "ROSE GOLD", color: "#c58f7a" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full border-2 border-gray-200" style={{ background: `radial-gradient(circle at 35% 35%, ${item.color}ee, ${item.color}88)` }} />
              <span className="text-[7px] text-gray-400 text-center leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NarsCard() {
  return (
    <div className="w-48 rounded-xl overflow-hidden shadow-2xl text-white select-none" style={{ background: "linear-gradient(160deg, #8b1a1a 0%, #c0392b 50%, #e67e22 100%)" }}>
      <div className="px-3 py-2 border-b border-white/20 flex justify-between items-center">
        <span className="text-white/80 text-[8px] tracking-widest font-light">NARS</span>
        <span className="text-[8px] bg-white/20 text-white px-1.5 py-0.5 rounded">Démo</span>
      </div>
      <div className="px-3 py-3">
        <p className="text-[10px] text-white/90 leading-tight mb-2">Find your NARS Orgasm Collection set</p>
        <p className="text-[9px] text-white/60 mb-3">Choose from the following:</p>
        <div className="flex gap-1.5 justify-center">
          {["#1a0808", "#4a0e0e", "#8b1a1a"].map((c, i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white/30" style={{ background: c }} />
          ))}
        </div>
        <div className="mt-3 text-center">
          <span className="text-[20px] font-bold tracking-widest opacity-25 text-white">NARS</span>
        </div>
      </div>
    </div>
  );
}

function IkeaCard() {
  return (
    <div className="w-44 rounded-xl overflow-hidden shadow-2xl bg-white text-[10px] select-none">
      <div className="bg-[#0051A8] px-3 py-1.5 flex justify-between items-center">
        <span className="text-white font-bold text-[11px]">IKEA</span>
        <span className="text-[7px] bg-white/20 text-white px-1 py-0.5 rounded">Démo</span>
      </div>
      <div className="px-3 py-2.5">
        <p className="font-semibold text-gray-800 leading-tight mb-0.5">Top start to student life!</p>
        <p className="text-gray-500 mb-2">Which item is missing from your room?</p>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { name: "The ALEX desk", desc: "Essential for working in good conditions.", color: "#e8f4f8" },
            { name: "The NATTBAD speaker", desc: "To listen to your podcasts or your favorite music.", color: "#f0ece8" },
          ].map((item) => (
            <div key={item.name} className="rounded-lg p-2 border border-gray-200 flex flex-col gap-1" style={{ background: item.color }}>
              <div className="w-full h-10 bg-gray-300/50 rounded flex items-center justify-center">
                <div className="w-8 h-6 bg-gray-400/40 rounded" />
              </div>
              <p className="text-[8px] font-semibold text-gray-700">{item.name}</p>
              <p className="text-[7px] text-gray-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClarinsCard() {
  return (
    <div className="w-36 rounded-xl overflow-hidden shadow-2xl bg-white text-[10px] select-none">
      <div className="h-20 relative" style={{ background: "linear-gradient(135deg, #c0392b, #922b21)" }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <div className="w-16 h-12 rounded" style={{ background: "linear-gradient(135deg, #e74c3c88, #c0392b88)" }} />
        </div>
        <div className="absolute top-1.5 right-2 text-[7px] bg-white/20 text-white px-1 py-0.5 rounded">Démo</div>
      </div>
      <div className="px-2.5 py-2">
        <span className="text-[8px] uppercase tracking-widest text-gray-400 font-light">CLARINS</span>
        <p className="text-[9px] text-gray-700 leading-tight mt-1">Which shade would you wear for new year&apos;s eve?</p>
        <div className="flex gap-1 mt-2">
          {["#8b0000", "#c41e3a", "#e8735a"].map((c, i) => (
            <div key={i} className="w-5 h-5 rounded-full border border-gray-200" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 100%)",
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
            {/* Eyebrow */}
            <motion.p
              className="text-white/65 text-sm tracking-wide mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Interactive Experiences. Actionable Intelligence. Measurable Results.
            </motion.p>

            {/* Title */}
            <h2
              className="font-bold text-white tracking-tight max-w-4xl"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
            >
              <RevealLine inView={isInView} delay={0.2}>Interactive experiences that</RevealLine>
              <RevealLine inView={isInView} delay={0.34}>connect audiences</RevealLine>
              <RevealLine inView={isInView} delay={0.48}>everywhere—turn attention into</RevealLine>
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

          {/* Floating ad cards */}
          <motion.div
            className="flex-none relative w-full"
            style={{ height: "260px" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute" style={{ left: "0%", bottom: "10px" }}>
              <LexusCard />
            </div>
            <div className="absolute" style={{ left: "17%", bottom: "30px" }}>
              <RolexCard />
            </div>
            <div className="absolute" style={{ left: "50%", transform: "translateX(-50%)", bottom: "20px" }}>
              <NarsCard />
            </div>
            <div className="absolute" style={{ right: "20%", bottom: "0px" }}>
              <ClarinsCard />
            </div>
            <div className="absolute" style={{ right: "0%", bottom: "15px" }}>
              <IkeaCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
