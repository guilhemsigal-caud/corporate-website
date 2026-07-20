"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import type { Partner } from "@/content/partners";

const SPEED_PX_PER_SEC = 32;

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div className="inline-flex flex-none select-none flex-col items-center gap-2 px-4 py-3 rounded-xl border border-ca-border bg-ca-dark min-w-[110px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={partner.logo}
        alt=""
        aria-hidden
        draggable={false}
        className="h-8 w-auto max-w-[90px] object-contain pointer-events-none"
      />
      <span className="text-xs font-medium text-ca-text whitespace-nowrap">{partner.name}</span>
    </div>
  );
}

/**
 * Continuously auto-scrolling horizontal logo carousel.
 * Drag with mouse/touch to scrub through it — holding the pointer down
 * pauses the auto-scroll until it's released.
 */
export function BrandLogoCarousel({ partners }: { partners: Partner[] }) {
  const items = [...partners, ...partners];
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setLoopWidth(trackRef.current.scrollWidth / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [partners]);

  useAnimationFrame((_, delta) => {
    if (!loopWidth) return;
    if (!paused) {
      x.set(x.get() - (SPEED_PX_PER_SEC * delta) / 1000);
    }
    // Wrap the position so the doubled track always loops seamlessly,
    // whether it moved via the auto-scroll or a manual drag.
    const current = x.get();
    if (current <= -loopWidth) x.set(current + loopWidth);
    else if (current > 0) x.set(current - loopWidth);
  });

  const handlePointerDown = () => {
    setPaused(true);
    const resume = () => {
      setPaused(false);
      window.removeEventListener("pointerup", resume);
      window.removeEventListener("pointercancel", resume);
    };
    window.addEventListener("pointerup", resume);
    window.addEventListener("pointercancel", resume);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
      }}
    >
      <motion.div
        ref={trackRef}
        role="list"
        aria-label="Brand partners"
        className="flex gap-3 py-1 cursor-grab active:cursor-grabbing"
        style={{ x, width: "max-content" }}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        onPointerDown={handlePointerDown}
      >
        {items.map((partner, i) => (
          <div key={`${partner.slug}-${i}`} role="listitem">
            <LogoCard partner={partner} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
