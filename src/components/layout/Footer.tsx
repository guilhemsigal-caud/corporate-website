"use client";

import Link from "next/link";
import { Globe, ExternalLink, Link2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    tagline: "The Open Web Platform, unifying media, data, and advertising for the cookieless era.",
    copyright: `© ${new Date().getFullYear()} Collective Audience. All rights reserved.`,
    cols: [
      { heading: "Solutions", links: [{ label: "Publishers", href: "/publishers" }, { label: "Advertisers", href: "/advertisers" }, { label: "Gallery", href: "/gallery" }, { label: "About", href: "/about" }, { label: "Blog", href: "/blog" }] },
      { heading: "Resources", links: [{ label: "Newsletter", href: "/newsletter" }] },
      { heading: "Company", links: [{ label: "Team & Advisors", href: "/about/team" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }] },
    ],
    legal: [{ label: "Privacy Policy", href: "/legal/privacy" }, { label: "Terms of Use", href: "/legal/terms" }, { label: "Cookie Policy", href: "/legal/cookies" }, { label: "Accessibility", href: "/legal/accessibility" }],
  },
  fr: {
    tagline: "La plateforme de l'open web, pour unifier médias, données et publicité pour l'ère sans cookies.",
    copyright: `© ${new Date().getFullYear()} Collective Audience. Tous droits réservés.`,
    cols: [
      { heading: "Solutions", links: [{ label: "Éditeurs", href: "/publishers" }, { label: "Annonceurs", href: "/advertisers" }, { label: "Galerie", href: "/gallery" }, { label: "À propos", href: "/about" }, { label: "Blog", href: "/blog" }] },
      { heading: "Ressources", links: [{ label: "Newsletter", href: "/newsletter" }] },
      { heading: "Entreprise", links: [{ label: "Équipe & Conseillers", href: "/about/team" }, { label: "Carrières", href: "/careers" }, { label: "Contact", href: "/contact" }] },
    ],
    legal: [{ label: "Politique de confidentialité", href: "/legal/privacy" }, { label: "Conditions d'utilisation", href: "/legal/terms" }, { label: "Politique de cookies", href: "/legal/cookies" }, { label: "Accessibilité", href: "/legal/accessibility" }],
  },
};

export function Footer() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <footer className="bg-ca-footer border-t border-ca-border" role="contentinfo">
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, #5b8cff 30%, #07e2dc 70%, transparent)" }} aria-hidden />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img src="/logo.svg" alt="Collective Audience" className="h-16 w-auto" />
            </Link>
            <p className="text-base text-ca-muted leading-relaxed mb-5 max-w-[260px]">{c.tagline}</p>
            <div className="space-y-3 mb-5">
              <div>
                <div className="text-sm font-semibold tracking-widest uppercase text-ca-blue mb-1">New York</div>
                <div className="text-base text-ca-muted">85 Broad St, NY 10004</div>
              </div>
              <div>
                <div className="text-sm font-semibold tracking-widest uppercase text-ca-mint mb-1">Paris</div>
                <div className="text-base text-ca-muted">33 rue La Fayette, 75009</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[{ icon: Link2, href: "https://linkedin.com/company/collective-audience", label: "LinkedIn" }, { icon: ExternalLink, href: "https://twitter.com/collective_aud", label: "Twitter/X" }, { icon: Globe, href: "https://youtube.com/@collectiveaudience", label: "YouTube" }].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-lg border border-ca-border flex items-center justify-center text-ca-muted hover:text-ca-text hover:border-ca-blue/40 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue">
                  <Icon className="w-4 h-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {c.cols.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <div className="text-sm font-semibold tracking-widest uppercase text-ca-muted mb-4">{col.heading}</div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-base text-ca-muted hover:text-ca-text transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-ca-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-base text-ca-muted">{c.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {c.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-base text-ca-muted hover:text-ca-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
