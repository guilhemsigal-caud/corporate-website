"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV: Record<Lang, NavItem[]> = {
  en: [
    {
      label: "Publishers",
      href: "/publishers",
      children: [
        { label: "Overview", href: "/publishers" },
        { label: "Monetization & Yield", href: "/publishers/monetization" },
        { label: "Data & Insights", href: "/publishers/data" },
        { label: "Editorial Tool", href: "/publishers/editorial" },
        { label: "Media Partners", href: "/publishers/partners" },
      ],
    },
    {
      label: "Advertisers",
      href: "/advertisers",
      children: [
        { label: "Overview", href: "/advertisers" },
        { label: "Formats & Experiences", href: "/advertisers/formats" },
        { label: "Targeting & Measurement", href: "/advertisers/targeting" },
        { label: "Audience Services", href: "/advertisers/services" },
        { label: "Creative Gallery", href: "/gallery" },
      ],
    },
    { label: "Platform", href: "/platform" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  fr: [
    {
      label: "Éditeurs",
      href: "/publishers",
      children: [
        { label: "Vue d'ensemble", href: "/publishers" },
        { label: "Monétisation & Yield", href: "/publishers/monetization" },
        { label: "Données & Insights", href: "/publishers/data" },
        { label: "Outil éditorial", href: "/publishers/editorial" },
        { label: "Partenaires médias", href: "/publishers/partners" },
      ],
    },
    {
      label: "Annonceurs",
      href: "/advertisers",
      children: [
        { label: "Vue d'ensemble", href: "/advertisers" },
        { label: "Formats & Expériences", href: "/advertisers/formats" },
        { label: "Ciblage & Mesure", href: "/advertisers/targeting" },
        { label: "Services Audience", href: "/advertisers/services" },
        { label: "Galerie créative", href: "/gallery" },
      ],
    },
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

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = pathname.startsWith(item.href) && item.href !== "/";

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ca-blue"
        style={{ color: pathname.startsWith(item.href) && item.href !== "/" ? "#0e1025" : "#5a6480" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ca-blue"
        style={{ color: active ? "#0e1025" : "#5a6480" }}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-2 z-50"
            role="menu"
          >
            <div className="min-w-[220px] rounded-xl border border-ca-border bg-white py-2 shadow-lg">
              {item.children.map((child) => (
                <Link
                  key={child.href + child.label}
                  href={child.href}
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-ca-muted hover:text-ca-text hover:bg-ca-surface transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-ca-text hover:bg-black/5 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-ca-text hover:bg-black/5 transition-colors"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-3"
          >
            {item.children.map((child) => (
              <Link
                key={child.href + child.label}
                href={child.href}
                className="flex items-center px-4 py-2.5 rounded-lg text-sm text-ca-muted hover:text-ca-text hover:bg-black/5"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
            {nav.map((item) => (
              <DesktopDropdown key={item.href + item.label} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center rounded-full border border-ca-border overflow-hidden" style={{ background: "#f0f2fc" }} role="group" aria-label="Language">
              {(["en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2.5 py-1 text-xs font-bold uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue"
                  style={lang === l ? { background: "#5b8cff", color: "white" } : { color: "#5a6480" }}
                  aria-pressed={lang === l}
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
              className="lg:hidden p-2 rounded-lg text-ca-muted hover:text-ca-text hover:bg-black/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue"
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
                <MobileNavItem key={item.href + item.label} item={item} />
              ))}
              <div className="pt-3 border-t border-ca-border flex flex-col gap-2">
                <Link href="/contact" className="flex items-center justify-center px-4 py-3 rounded-xl bg-ca-blue text-white text-sm font-semibold">
                  {copy.contact}
                </Link>
                <div className="flex items-center gap-2 px-4 py-2" role="group" aria-label="Language">
                  {(["en", "fr"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className="px-4 py-2 rounded-full text-sm font-bold uppercase transition-all"
                      style={lang === l ? { background: "#5b8cff", color: "white" } : { color: "#5a6480", border: "1px solid #d0d8f0" }}
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
