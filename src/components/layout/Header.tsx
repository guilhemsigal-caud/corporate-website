"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const NAV = {
  en: [
    { label: "Solutions", href: "/solutions" },
    { label: "Platform", href: "/platform" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
  ],
  fr: [
    { label: "Solutions", href: "/solutions" },
    { label: "Plateforme", href: "/platform" },
    { label: "Études de cas", href: "/case-studies" },
    { label: "À propos", href: "/about" },
  ],
};

const COPY = {
  en: { contact: "Get Started" },
  fr: { contact: "Commencer" },
};

export function Header() {
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const nav = NAV[lang];
  const copy = COPY[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,251,255,0.97)" : "rgba(250,251,255,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(208,216,240,0.9)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="Collective Audience" className="h-7 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{ color: pathname.startsWith(item.href) && item.href !== "/" ? "#0e1025" : "#5a6480" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#0e1025"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = pathname.startsWith(item.href) && item.href !== "/" ? "#0e1025" : "#5a6480"}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Lang toggle */}
            <div className="flex items-center rounded-full border border-ca-border overflow-hidden" style={{ background: "#f0f2fc" }}>
              {(["en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2.5 py-1 text-xs font-bold uppercase transition-all duration-200"
                  style={lang === l
                    ? { background: "#5b8cff", color: "white" }
                    : { color: "#5a6480" }
                  }
                >
                  {l}
                </button>
              ))}
            </div>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-ca-blue text-white text-sm font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_20px_rgba(91,140,255,0.4)]"
            >
              {copy.contact}
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg text-ca-muted hover:text-ca-text hover:bg-black/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-ca-border overflow-hidden"
            style={{ background: "rgba(250,251,255,0.97)", backdropFilter: "blur(16px)" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-ca-text hover:bg-black/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-ca-border flex flex-col gap-2">
                <Link href="/contact" className="flex items-center justify-center px-4 py-3 rounded-xl bg-ca-blue text-white text-sm font-semibold">
                  {copy.contact}
                </Link>
                {/* Mobile lang toggle */}
                <div className="flex items-center gap-2 px-4 py-2">
                  {(["en", "fr"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className="px-4 py-2 rounded-full text-sm font-bold uppercase transition-all"
                      style={lang === l ? { background: "#5b8cff", color: "white" } : { color: "#5a6480", border: "1px solid #d0d8f0" }}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
