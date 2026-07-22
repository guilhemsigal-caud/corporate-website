"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

type NavItem = { label: string; href: string };

const NAV: Record<Lang, NavItem[]> = {
  en: [
    { label: "Publishers", href: "/publishers" },
    { label: "Advertisers", href: "/advertisers" },
    { label: "Platform", href: "/platform" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  fr: [
    { label: "Éditeurs", href: "/publishers" },
    { label: "Annonceurs", href: "/advertisers" },
    { label: "Plateforme", href: "/platform" },
    { label: "Galerie", href: "/gallery" },
    { label: "À propos", href: "/about" },
    { label: "Blog", href: "/blog" },
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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Main">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-base font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ca-blue"
                  style={{ color: active ? "#0e1025" : "#3a455c" }}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center rounded-full border border-ca-border overflow-hidden" style={{ background: "#f0f2fc" }} role="group" aria-label="Language">
              {(["en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="min-w-[40px] min-h-[40px] px-2.5 py-1 text-sm font-bold uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue"
                  style={lang === l ? { background: "#5b8cff", color: "white" } : { color: "#3a455c" }}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-ca-blue text-white text-base font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_20px_rgba(91,140,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ca-blue"
            >
              {copy.contact}
            </Link>

            <button
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-ca-muted hover:text-ca-text hover:bg-black/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

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
            <nav className="max-w-7xl mx-auto px-6 py-4 space-y-1" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-xl text-base font-semibold text-ca-text hover:bg-black/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-ca-border flex flex-col gap-2">
                <Link href="/contact" className="flex items-center justify-center px-4 py-3 rounded-xl bg-ca-blue text-white text-base font-semibold">
                  {copy.contact}
                </Link>
                <div className="flex items-center gap-2 px-4 py-2" role="group" aria-label="Language">
                  {(["en", "fr"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className="min-h-[40px] px-4 py-2 rounded-full text-sm font-bold uppercase transition-all"
                      style={lang === l ? { background: "#5b8cff", color: "white" } : { color: "#3a455c", border: "1px solid #d0d8f0" }}
                      aria-pressed={lang === l}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
