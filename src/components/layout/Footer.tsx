"use client";

import Link from "next/link";
import { Globe, ExternalLink, Link2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    tagline: "The Open Web Platform, unifying media, data, and advertising for the cookieless era.",
    copyright: `© ${new Date().getFullYear()} Collective Audience. All rights reserved.`,
    cols: [
      { heading: "Publishers", links: [{ label: "Overview", href: "/publishers" }, { label: "Monetization & Yield", href: "/publishers/monetization" }, { label: "Data & Insights", href: "/publishers/data" }, { label: "Editorial Tool", href: "/publishers/editorial" }, { label: "Media Partners", href: "/publishers/partners" }] },
      { heading: "Advertisers", links: [{ label: "Overview", href: "/advertisers" }, { label: "Formats & Experiences", href: "/advertisers/formats" }, { label: "Targeting & Measurement", href: "/advertisers/targeting" }, { label: "Audience Services", href: "/advertisers/services" }, { label: "Creative Gallery", href: "/gallery" }] },
      { heading: "Platform", links: [{ label: "AudienceCloud", href: "/platform" }, { label: "AudienceDesk", href: "/platform/desk" }, { label: "AudienceAds", href: "/platform/ads" }, { label: "AudienceConnect", href: "/platform/connect" }, { label: "AudienceMatching", href: "/platform/matching" }] },
      { heading: "Resources", links: [{ label: "Gallery", href: "/gallery" }, { label: "Blog & Insights", href: "/blog" }, { label: "Studies", href: "/resources/studies" }, { label: "Newsletter", href: "/newsletter" }] },
      { heading: "Company", links: [{ label: "About", href: "/about" }, { label: "Team & Advisors", href: "/about/team" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }] },
    ],
    legal: [{ label: "Privacy Policy", href: "/legal/privacy" }, { label: "Terms of Use", href: "/legal/terms" }, { label: "Cookie Policy", href: "/legal/cookies" }, { label: "Accessibility", href: "/legal/accessibility" }],
  },
  fr: {
    tagline: "La plateforme du web ouvert, pour unifier médias, données et publicité pour l'ère sans cookies.",
    copyright: `© ${new Date().getFullYear()} Collective Audience. Tous droits réservés.`,
    cols: [
      { heading: "Éditeurs", links: [{ label: "Vue d'ensemble", href: "/publishers" }, { label: "Monétisation & Yield", href: "/publishers/monetization" }, { label: "Données & Insights", href: "/publishers/data" }, { label: "Outil éditorial", href: "/publishers/editorial" }, { label: "Partenaires médias", href: "/publishers/partners" }] },
      { heading: "Annonceurs", links: [{ label: "Vue d'ensemble", href: "/advertisers" }, { label: "Formats & Expériences", href: "/advertisers/formats" }, { label: "Ciblage & Mesure", href: "/advertisers/targeting" }, { label: "Services Audience", href: "/advertisers/services" }, { label: "Galerie créative", href: "/gallery" }] },
      { heading: "Plateforme", links: [{ label: "AudienceCloud", href: "/platform" }, { label: "AudienceDesk", href: "/platform/desk" }, { label: "AudienceAds", href: "/platform/ads" }, { label: "AudienceConnect", href: "/platform/connect" }, { label: "AudienceMatching", href: "/platform/matching" }] },
      { heading: "Ressources", links: [{ label: "Galerie", href: "/gallery" }, { label: "Blog & Insights", href: "/blog" }, { label: "Études", href: "/resources/studies" }, { label: "Newsletter", href: "/newsletter" }] },
      { heading: "Entreprise", links: [{ label: "À propos", href: "/about" }, { label: "Équipe & Conseillers", href: "/about/team" }, { label: "Carrières", href: "/careers" }, { label: "Contact", href: "/contact" }] },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img src="/logo.svg" alt="Collective Audience" className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-ca-muted leading-relaxed mb-5 max-w-[220px]">{c.tagline}</p>
            <div className="space-y-3 mb-5">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-ca-blue mb-1">New York</div>
                <div className="text-sm text-ca-muted">85 Broad St, NY 10004</div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-ca-mint mb-1">Paris</div>
                <div className="text-sm text-ca-muted">33 rue La Fayette, 75009</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[{ icon: Link2, href: "https://linkedin.com/company/collective-audience", label: "LinkedIn" }, { icon: ExternalLink, href: "https://twitter.com/collective_aud", label: "Twitter/X" }, { icon: Globe, href: "https://youtube.com/@collectiveaudience", label: "YouTube" }].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-lg border border-ca-border flex items-center justify-center text-ca-muted hover:text-ca-text hover:border-ca-blue/40 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue">
                  <Icon className="w-4 h-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {c.cols.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <div className="text-xs font-semibold tracking-widest uppercase text-ca-muted mb-4">{col.heading}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-sm text-ca-muted hover:text-ca-text transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-ca-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ca-muted">{c.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {c.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-ca-muted hover:text-ca-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
