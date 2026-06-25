import Link from "next/link";
import { Globe, ExternalLink, Link2 } from "lucide-react";


const FOOTER_NAV = [
  {
    heading: "Publishers",
    links: [
      { label: "Overview", href: "/publishers" },
      { label: "Monetization & Yield", href: "/publishers/monetization" },
      { label: "Data & Insights", href: "/publishers/data" },
      { label: "Editorial Tool", href: "/publishers/editorial" },
      { label: "Media Partners", href: "/publishers/partners" },
    ],
  },
  {
    heading: "Advertisers",
    links: [
      { label: "Overview", href: "/advertisers" },
      { label: "Formats & Experiences", href: "/advertisers/formats" },
      { label: "Targeting & Measurement", href: "/advertisers/targeting" },
      { label: "Audience Services", href: "/advertisers/services" },
      { label: "Results & Case Studies", href: "/advertisers/results" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "AudienceCloud", href: "/platform" },
      { label: "AudienceDesk", href: "/platform/desk" },
      { label: "AudienceAds", href: "/platform/ads" },
      { label: "AudienceConnect", href: "/platform/connect" },
      { label: "AudienceMatching", href: "/platform/matching" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Studies", href: "/resources/studies" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team & Advisors", href: "/about/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Accessibility", href: "/legal/accessibility" },
];

export function Footer() {
  return (
    <footer className="bg-ca-surface border-t border-ca-border">
      {/* Top accent */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(to right, transparent, #5b8cff 30%, #07e2dc 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:col-start-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/logo.svg"
                alt="Collective Audience"
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-xs text-ca-muted leading-relaxed mb-5 max-w-[200px]">
              The Open Web Platform — unifying media, data, and advertising for the cookieless era.
            </p>

            {/* Offices */}
            <div className="space-y-3 mb-5">
              <div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-ca-blue mb-1">
                  New York
                </div>
                <div className="text-xs text-ca-muted">85 Broad St, NY 10004</div>
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-ca-mint mb-1">
                  Paris
                </div>
                <div className="text-xs text-ca-muted">33 rue La Fayette, 75009</div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Link2, href: "https://linkedin.com/company/collective-audience", label: "LinkedIn" },
                { icon: ExternalLink, href: "https://twitter.com/collective_aud", label: "Twitter/X" },
                { icon: Globe, href: "https://youtube.com/@collectiveaudience", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-ca-border flex items-center justify-center text-ca-muted hover:text-ca-text hover:border-ca-blue/40 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <div className="text-[10px] font-semibold tracking-widest uppercase text-ca-muted mb-4">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-ca-muted hover:text-ca-text transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ca-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ca-muted">
            © {new Date().getFullYear()} Collective Audience. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-ca-muted hover:text-ca-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-ca-muted">EN</span>
            <span className="text-xs text-ca-muted/30">|</span>
            <span className="text-xs text-ca-muted">FR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
