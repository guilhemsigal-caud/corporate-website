import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
export const metadata: Metadata = { title: "Contact — Collective Audience" };
export default function ContactPage() {
  return (
    <main className="bg-ca-dark min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">Contact</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Let's talk.</h1>
          <p className="text-ca-muted text-lg max-w-lg mx-auto">Whether you're a publisher, advertiser, or investor — our team is here.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="rounded-2xl border border-ca-border bg-ca-surface p-8">
            <h2 className="text-lg font-bold text-ca-text mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">First name *</label><input type="text" required className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors" /></div>
                <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">Last name *</label><input type="text" required className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors" /></div>
              </div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">Professional email *</label><input type="email" required className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors" /></div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">Company</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors" /></div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">I am a...</label>
                <select className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-muted text-sm focus:outline-none focus:border-ca-blue/50 transition-colors">
                  <option>Publisher</option><option>Advertiser / Agency</option><option>Investor</option><option>Press</option><option>Other</option>
                </select>
              </div>
              <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">Message</label><textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors resize-none" /></div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" required className="mt-0.5" />
                <label htmlFor="consent" className="text-xs text-ca-muted">I agree to Collective Audience processing my data to respond to this inquiry. <a href="/legal/privacy" className="text-ca-blue hover:underline">Privacy Policy</a>.</label>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_24px_rgba(91,140,255,0.4)]">Send message</button>
            </form>
          </div>
          {/* Info */}
          <div className="space-y-6">
            {[
              { city: "New York", address: "85 Broad Street, NY 10004", email: "hello@collectiveaudience.co", accent: "#5b8cff" },
              { city: "Paris", address: "33 rue La Fayette, 75009 Paris", email: "bonjour@collectiveaudience.co", accent: "#07e2dc" },
            ].map(o => (
              <div key={o.city} className="rounded-2xl border p-6" style={{ borderColor: `${o.accent}22`, background: `${o.accent}08` }}>
                <div className="text-sm font-bold mb-3" style={{ color: o.accent }}>{o.city}</div>
                <div className="flex items-start gap-2 text-sm text-ca-muted mb-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />{o.address}</div>
                <div className="flex items-center gap-2 text-sm text-ca-muted"><Mail className="w-4 h-4 flex-shrink-0" />{o.email}</div>
              </div>
            ))}
            <div className="rounded-2xl border border-ca-border bg-ca-surface p-6">
              <div className="text-sm font-bold text-ca-text mb-2">Press & Media</div>
              <p className="text-xs text-ca-muted mb-3">For press inquiries, interview requests, or media assets.</p>
              <a href="mailto:press@collectiveaudience.co" className="text-sm text-ca-blue hover:underline">press@collectiveaudience.co</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
