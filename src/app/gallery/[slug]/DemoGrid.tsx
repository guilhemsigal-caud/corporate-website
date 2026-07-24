"use client";

import { useEffect, useState } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import type { GalleryDemo } from "@/content/gallery";

/* ── Collective Audience widget SDK ────────────────────────────── */
const SDK_SRC = "https://widget.collectiveaudience.co/sdk.js";
const ACCOUNT = "5be04b9546e0fb00011f9fa7";
const INTERACTION_EVENTS: Record<string, true> = {
  vote: true, complete: true, signup: true, login: true, sharing: true, comment: true,
};

interface BeOpSDK {
  init(o: { account: string }): void;
  watch(): void;
  onPressClose(cb: (name: string) => void, delay?: number): void;
  subscribeToWidgetEvents(cb: (event: string, name: string) => void): void;
}
declare global {
  interface Window {
    BeOpSDK?: BeOpSDK;
    beOpAsyncInit?: () => void;
  }
}

// Handlers of the currently mounted grid — the SDK is initialised once and
// forwards its events (close / interaction) to whichever grid is on screen.
const activeHandlers: { onClose?: (name: string) => void; onInteract?: (name: string) => void } = {};
let sdkBootstrapped = false;

function findSlot(name: string) {
  return document.querySelector<HTMLElement>(`[data-name="${name}"]`);
}
function expand(name: string) {
  const s = findSlot(name);
  if (s && !s.hasAttribute("data-expand")) s.setAttribute("data-expand", "true");
}
function collapse(name: string) {
  findSlot(name)?.removeAttribute("data-expand");
}

function bootstrapSdk() {
  if (typeof window === "undefined") return;
  // Already initialised (e.g. client-side navigation): just re-scan the DOM.
  if (sdkBootstrapped && window.BeOpSDK) {
    window.BeOpSDK.watch();
    return;
  }
  window.beOpAsyncInit = function () {
    const SDK = window.BeOpSDK;
    if (!SDK) return;
    if (sdkBootstrapped) {
      SDK.watch();
      return;
    }
    SDK.init({ account: ACCOUNT });
    SDK.onPressClose((name) => activeHandlers.onClose?.(name), 1000);
    SDK.subscribeToWidgetEvents((event, name) => {
      if (INTERACTION_EVENTS[event]) activeHandlers.onInteract?.(name);
    });
    SDK.watch();
    sdkBootstrapped = true;
  };
  // Script already present but SDK ready → fire init directly.
  if (window.BeOpSDK) {
    window.beOpAsyncInit();
    return;
  }
  if (!document.querySelector(`script[src="${SDK_SRC}"]`)) {
    const s = document.createElement("script");
    s.async = true;
    s.src = SDK_SRC;
    document.head.appendChild(s);
  }
}

/** The demo content id is the `beop_content` param already present in the URL. */
function contentId(demo: GalleryDemo): string {
  try {
    return new URL(demo.url).searchParams.get("beop_content") ?? "";
  } catch {
    return "";
  }
}

const COPY = {
  en: { play: "Play the demo", demo: "Demo", prev: "Previous demo", next: "Next demo", close: "Close" },
  fr: { play: "Lancer la démo", demo: "Démo", prev: "Démo précédente", next: "Démo suivante", close: "Fermer" },
};

interface Props {
  demos: GalleryDemo[];
  accent: string;
  slug: string;
}

export function DemoGrid({ demos, accent, slug }: Props) {
  const { lang } = useLang();
  const t = COPY[lang];
  const [expanded, setExpanded] = useState<number | null>(null);

  const names = demos.map((_, i) => `${slug}_${i}`);

  useEffect(() => {
    activeHandlers.onClose = (name) => {
      collapse(name);
      setExpanded(null);
    };
    activeHandlers.onInteract = (name) => {
      const idx = names.indexOf(name);
      if (idx >= 0) {
        expand(name);
        setExpanded(idx);
      }
    };
    bootstrapSdk();
    return () => {
      activeHandlers.onClose = undefined;
      activeHandlers.onInteract = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const openAt = (idx: number) => {
    if (expanded !== null && expanded !== idx) collapse(names[expanded]);
    expand(names[idx]);
    setExpanded(idx);
  };
  const close = () => {
    if (expanded !== null) collapse(names[expanded]);
    setExpanded(null);
  };
  const step = (dir: 1 | -1) => {
    if (expanded === null) return;
    const next = (expanded + dir + demos.length) % demos.length;
    collapse(names[expanded]);
    expand(names[next]);
    setExpanded(next);
  };

  // Keyboard navigation while a demo is open.
  useEffect(() => {
    if (expanded === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  return (
    <div>
      {/* Play button — opens the first demo full-screen */}
      <button
        type="button"
        onClick={() => openAt(0)}
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold mb-8 transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
        style={{ background: accent, color: "#0e1025", boxShadow: `0 4px 20px ${accent}40` }}
      >
        <Play className="w-4 h-4 fill-[#0e1025]" />
        {t.play}
      </button>

      {/* Grid of embedded creatives */}
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {demos.map((demo, i) => (
          <div
            key={i}
            className="group relative flex flex-col rounded-2xl border overflow-hidden"
            style={{ borderColor: `${accent}35`, background: "#f0f2fc", boxShadow: "0 2px 16px rgba(0,0,40,0.08)" }}
          >
            {/* Full-screen trigger for this specific cell */}
            <button
              type="button"
              onClick={() => openAt(i)}
              aria-label={`${t.play} — ${demo.label ?? `${t.demo} ${i + 1}`}`}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: accent, color: "#0e1025", boxShadow: "0 2px 10px rgba(0,0,40,0.25)" }}
            >
              <Play className="w-3.5 h-3.5 fill-[#0e1025]" />
            </button>

            <div className="flex-1 min-h-[300px] w-full p-3">
              <div
                className="BeOpWidget w-full"
                data-name={names[i]}
                data-slot-type="demo"
                data-demo-content-id={contentId(demo)}
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-t" style={{ borderColor: `${accent}20` }}>
              <span className="text-sm font-semibold text-ca-text">{demo.label ?? `${t.demo} ${i + 1}`}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen navigation overlay (arrows + close) — shown while a demo is expanded */}
      {expanded !== null && demos.length > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 2147483647 }}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t.close}
            className="pointer-events-auto absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105"
            style={{ background: "rgba(14,16,37,0.7)", backdropFilter: "blur(8px)" }}
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={t.prev}
            className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105"
            style={{ background: "rgba(14,16,37,0.7)", backdropFilter: "blur(8px)" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label={t.next}
            className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105"
            style={{ background: "rgba(14,16,37,0.7)", backdropFilter: "blur(8px)" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
