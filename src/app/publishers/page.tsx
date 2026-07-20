"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/lib/i18n";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold gradient-text-blue-mint">{value}</span>
      <span className="text-base text-ca-muted mt-1">{label}</span>
    </div>
  );
}
function FeatureLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-base text-ca-muted">
      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-ca-blue" />{text}
    </li>
  );
}

const COPY = {
  en: {
    badge: "For Publishers",
    h1: "A new model for publishers.",
    subtitle: "Sell premium inventory, collect first-party audience data, and engage readers with editorial formats that generate real attention, all from one open platform.",
    cta1: "Become a partner", cta2: "See ad formats",
    stats: [{ v: "+40%", l: "Brand lift on our formats" }, { v: "34s", l: "Avg. attention per ad unit" }, { v: ">1%", l: "Interaction rate" }, { v: "200+", l: "Publisher partners" }],
    pillars: [
      { icon: "💰", title: "Sell", subtitle: "Monetize every impression", desc: "Header bidding, direct deals, programmatic: one unified platform to maximise your ad revenue without complexity.", color: "#5b8cff" },
      { icon: "📊", title: "Collect", subtitle: "Own your audience data", desc: "Build a first-party CRM/DMP from every article read. Cookieless, GDPR-compliant, 100% owned by you.", color: "#07e2dc" },
      { icon: "💬", title: "Engage", subtitle: "Activate your readers", desc: "Inline conversational and editorial formats that turn passive readers into engaged audiences.", color: "#7b3fff" },
    ],
    monoLabel: "Sales teams", monoTitle: "The simplest ad platform for publishers.",
    monoDesc: "One platform to manage header bidding, direct deals, and programmatic, with real-time floor pricing and intelligent backfill. No black boxes.",
    monoFeatures: ["Header bidding with 30+ SSP connections","Dynamic floor pricing & yield optimization","Direct deal management (guaranteed + preferred)","Real-time eCPM, RPM & revenue reporting","Cookie-free, privacy-first buying","Semantic forecasting for demand planning"],
    monoStats: [{ v: "+28%", l: "avg. eCPM uplift" }, { v: "94%", l: "fill rate" }, { v: "<50ms", l: "latency" }],
    dashTitle: "Publisher Revenue Dashboard", dashToday: "Today's revenue", dashBadge: "+28% vs last month",
    dashRows: [["eCPM","€3.42","↑ 28%"],["Fill Rate","94.2%","↑ 2.1%"],["RPM","€3.22","↑ 24%"]],
    dataLabel: "Marketing teams", dataTitle: "Own your audience. No intermediaries.",
    dataDesc: "Every reader who interacts with your content enriches your first-party CRM. Build real audience intelligence without relying on third-party data brokers.",
    dataFeatures: ["CRM & DMP built directly into editorial flow","Cookieless audience profiles via AudienceMatching","Behavioral, contextual & declared data collection","GDPR-compliant consent management (Didomi/OneTrust)","Export segments to any DSP or direct deal","Data clean room for advertiser matching"],
    dataStats: [{ v: "100%", l: "first-party data" }, { v: "0", l: "cookie dependency" }],
    audiTitle: "Audience Intelligence",
    audiRows: [{ label: "Engaged readers", value: "1.2M", color: "#07e2dc", pct: 82 }, { label: "Active subscribers", value: "340k", color: "#5b8cff", pct: 55 }, { label: "High-intent profiles", value: "89k", color: "#7b3fff", pct: 28 }],
    audiChecks: [["GDPR compliant","✓"],["Cookieless","✓"],["First-party only","✓"],["Data ownership","100%"]],
    editLabel: "Editorial teams", editTitle: "Formats your readers actually engage with.",
    editDesc: "Inline conversational and interactive formats deployed directly within your articles. They generate 34 seconds of average attention, and never interrupt the reading experience.",
    editFeatures: ["Q&A, poll, quiz & conversational formats","Scroll-triggered inline video","Before/after sliders & interactive galleries","Drag-and-drop inline editor, no dev needed","Zero impact on Core Web Vitals","Fully responsive across all devices"],
    editStats: [{ v: "34s", l: "avg. time on format" }, { v: ">1%", l: "interaction rate" }],
    gridTitle: "Everything publishers need, in one platform",
    grid: [["Header bidding","Unified SSP auction"],["Direct deals","Guaranteed + preferred"],["Data clean room","Privacy-safe matching"],["Real-time analytics","Live revenue dashboard"],["Cookieless CRM","First-party profiles"],["GDPR compliance","Didomi / OneTrust"],["Conversational formats","Editorial engagement"],["Inline editor","No dev required"],["Semantic targeting","Contextual forecasting"],["Page speed","Zero CWV impact"],["Multi-site broadcast","Central management"],["API access","Full integration"]],
    testiTitle: "What our publisher partners say",
    testimonials: [
      { quote: "Collective Audience helped us unlock a new revenue stream while keeping our editorial identity intact. The conversational formats resonate with our readers.", author: "Digital Director", company: "Le Monde" },
      { quote: "The first-party data layer changed how we think about audience monetization. We now own real profiles, not just anonymous cookies.", author: "Head of Ad Tech", company: "Les Échos" },
      { quote: "Simple to integrate, powerful results. Our eCPM improved +31% in the first quarter and fill rates have been consistently above 90%.", author: "CTO", company: "HuffPost France" },
    ],
  },
  fr: {
    badge: "Pour les éditeurs",
    h1: "Un nouveau modèle pour les éditeurs.",
    subtitle: "Vendez votre inventaire premium, collectez des données audience first-party et engagez vos lecteurs avec des formats éditoriaux qui génèrent une vraie attention, depuis une seule plateforme ouverte.",
    cta1: "Devenir partenaire", cta2: "Voir les formats",
    stats: [{ v: "+40%", l: "Lift de marque" }, { v: "34s", l: "Attention moy. par format" }, { v: ">1%", l: "Taux d'interaction" }, { v: "200+", l: "Éditeurs partenaires" }],
    pillars: [
      { icon: "💰", title: "Vendre", subtitle: "Monétisez chaque impression", desc: "Header bidding, deals directs, programmatique: une plateforme unifiée pour maximiser vos revenus publicitaires sans complexité.", color: "#5b8cff" },
      { icon: "📊", title: "Collecter", subtitle: "Possédez vos données audience", desc: "Construisez un CRM/DMP first-party depuis chaque article lu. Sans cookie, conforme RGPD, 100% owned par vous.", color: "#07e2dc" },
      { icon: "💬", title: "Engager", subtitle: "Activez vos lecteurs", desc: "Formats conversationnels et éditoriaux inline qui transforment des lecteurs passifs en audiences engagées.", color: "#7b3fff" },
    ],
    monoLabel: "Équipes commerciales", monoTitle: "La plateforme publicitaire la plus simple pour les éditeurs.",
    monoDesc: "Une plateforme pour gérer le header bidding, les deals directs et le programmatique, avec un floor pricing en temps réel et un backfill intelligent. Pas de boîtes noires.",
    monoFeatures: ["Header bidding avec 30+ connexions SSP","Floor pricing dynamique & optimisation du yield","Gestion des deals directs (garantis + préférentiels)","Reporting eCPM, RPM & revenus en temps réel","Achat sans cookie, privacy-first","Prévisions sémantiques pour la planification de la demande"],
    monoStats: [{ v: "+28%", l: "hausse eCPM moy." }, { v: "94%", l: "taux de remplissage" }, { v: "<50ms", l: "latence" }],
    dashTitle: "Tableau de bord revenus éditeur", dashToday: "Revenu aujourd'hui", dashBadge: "+28% vs mois dernier",
    dashRows: [["eCPM","3,42 €","↑ 28%"],["Taux de remplissage","94,2%","↑ 2,1%"],["RPM","3,22 €","↑ 24%"]],
    dataLabel: "Équipes marketing", dataTitle: "Possédez votre audience. Sans intermédiaires.",
    dataDesc: "Chaque lecteur qui interagit avec votre contenu enrichit votre CRM first-party. Construisez une vraie intelligence d'audience sans dépendre de data brokers tiers.",
    dataFeatures: ["CRM & DMP intégrés directement dans le flux éditorial","Profils audience sans cookie via AudienceMatching","Collecte de données comportementales, contextuelles et déclarées","Gestion du consentement RGPD (Didomi/OneTrust)","Export de segments vers tout DSP ou deal direct","Data clean room pour le matching annonceurs"],
    dataStats: [{ v: "100%", l: "données first-party" }, { v: "0", l: "dépendance aux cookies" }],
    audiTitle: "Intelligence Audience",
    audiRows: [{ label: "Lecteurs engagés", value: "1,2M", color: "#07e2dc", pct: 82 }, { label: "Abonnés actifs", value: "340k", color: "#5b8cff", pct: 55 }, { label: "Profils haute intention", value: "89k", color: "#7b3fff", pct: 28 }],
    audiChecks: [["Conforme RGPD","✓"],["Sans cookie","✓"],["First-party uniquement","✓"],["Propriété des données","100%"]],
    editLabel: "Équipes éditoriales", editTitle: "Des formats que vos lecteurs apprécient vraiment.",
    editDesc: "Formats conversationnels et interactifs déployés directement dans vos articles. Ils génèrent 34 secondes d'attention en moyenne, sans jamais interrompre jamais l'expérience de lecture.",
    editFeatures: ["Formats Q&A, sondage, quiz & conversationnel","Vidéo inline déclenchée au scroll","Sliders avant/après & galeries interactives","Éditeur inline drag-and-drop, sans développeur","Zéro impact sur les Core Web Vitals","Responsive sur tous les appareils"],
    editStats: [{ v: "34s", l: "temps moy. sur format" }, { v: ">1%", l: "taux d'interaction" }],
    gridTitle: "Tout ce dont les éditeurs ont besoin, en une plateforme",
    grid: [["Header bidding","Enchère SSP unifiée"],["Deals directs","Garantis + préférentiels"],["Data clean room","Matching sécurisé"],["Analytics temps réel","Dashboard revenus live"],["CRM sans cookie","Profils first-party"],["Conformité RGPD","Didomi / OneTrust"],["Formats conversationnels","Engagement éditorial"],["Éditeur inline","Sans développeur"],["Ciblage sémantique","Prévisions contextuelles"],["Vitesse de page","Zéro impact CWV"],["Multi-sites","Gestion centralisée"],["Accès API","Intégration complète"]],
    testiTitle: "Ce que disent nos partenaires éditeurs",
    testimonials: [
      { quote: "Collective Audience nous a aidés à débloquer une nouvelle source de revenus tout en préservant notre identité éditoriale. Les formats conversationnels résonnent avec nos lecteurs.", author: "Directeur Digital", company: "Le Monde" },
      { quote: "La couche de données first-party a changé notre façon de penser la monétisation d'audience. Nous possédons maintenant de vrais profils, pas seulement des cookies anonymes.", author: "Head of Ad Tech", company: "Les Échos" },
      { quote: "Simple à intégrer, résultats puissants. Notre eCPM a progressé de +31% dès le premier trimestre et les taux de remplissage dépassent constamment 90%.", author: "CTO", company: "HuffPost France" },
    ],
  },
};

export default function PublishersPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      <section className="relative bg-ca-dark overflow-hidden py-28">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[5%] w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle,rgba(91,140,255,0.16) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
          <div className="absolute bottom-[-5%] right-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle,rgba(7,226,220,0.1) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite 5s" }} />
        </div>
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: "linear-gradient(to right,#c4d0f0 1px,transparent 1px),linear-gradient(to bottom,#c4d0f0 1px,transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,#000 50%,transparent 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-sm font-semibold tracking-widest uppercase text-ca-blue mb-8">{c.badge}</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.07] mb-6" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.h1}</h1>
          <p className="text-ca-muted text-xl leading-relaxed max-w-2xl mb-10">{c.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-ca-blue text-white font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_30px_rgba(91,140,255,0.4)]">{c.cta1} <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" /></Link>
            <Link href="/gallery" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-ca-border bg-black/5 text-ca-text font-semibold hover:bg-black/8 transition-all">{c.cta2}</Link>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6">{c.stats.map(s => <Stat key={s.l} value={s.v} label={s.l} />)}</div>
        </div>
      </section>

      <section className="bg-ca-surface border-y border-ca-border py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.pillars.map(p => (
              <div key={p.title} className="rounded-2xl border p-7 text-center" style={{ borderColor: `${p.color}35`, background: `linear-gradient(145deg, ${p.color}15 0%, #eef0fb 100%)`, boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="text-2xl font-bold mb-1" style={{ color: p.color }}>{p.title}</div>
                <div className="text-sm font-semibold text-ca-text mb-3">{p.subtitle}</div>
                <p className="text-sm text-ca-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ca-dark py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 bg-ca-blue mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-blue block mb-3">{c.monoLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.monoTitle}</h2>
            <p className="text-ca-muted leading-relaxed mb-6">{c.monoDesc}</p>
            <ul className="space-y-3 mb-8">{c.monoFeatures.map(f => <FeatureLine key={f} text={f} />)}</ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">{c.monoStats.map(s => <Stat key={s.l} value={s.v} label={s.l} />)}</div>
          </div>
          <div className="rounded-2xl border border-ca-border bg-ca-surface overflow-hidden" style={{ boxShadow: "0 2px 20px rgba(0,0,40,0.08)" }}>
            <div className="px-5 py-3 border-b border-ca-border flex items-center gap-3">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/40" /><div className="w-3 h-3 rounded-full bg-yellow-500/40" /><div className="w-3 h-3 rounded-full bg-green-500/40" /></div>
              <span className="text-xs text-ca-muted">{c.dashTitle}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div><div className="text-xs text-ca-muted mb-1">{c.dashToday}</div><div className="text-3xl font-bold text-ca-blue">€4,821</div></div>
                <div className="text-xs px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 font-semibold">{c.dashBadge}</div>
              </div>
              <div className="flex items-end gap-1.5 h-24 mb-4">
                {[55,65,48,78,62,85,72,90,80,95,88,100].map((h,i) => <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, background:`linear-gradient(to top,rgba(91,140,255,0.3),rgba(91,140,255,0.7))`, borderTop:"1px solid rgba(91,140,255,0.5)" }} />)}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {c.dashRows.map(([l,v,ch]) => <div key={l as string} className="rounded-xl border border-ca-border bg-ca-dark p-3"><div className="text-[10px] text-ca-muted mb-1">{l as string}</div><div className="text-base font-bold text-ca-blue">{v as string}</div><div className="text-[10px] text-green-400">{ch as string}</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ca-surface border-t border-ca-border py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl border border-ca-border bg-ca-dark overflow-hidden lg:order-1 order-2" style={{ boxShadow: "0 2px 20px rgba(0,0,40,0.08)" }}>
            <div className="px-5 py-3 border-b border-ca-border flex items-center gap-3">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/40" /><div className="w-3 h-3 rounded-full bg-yellow-500/40" /><div className="w-3 h-3 rounded-full bg-green-500/40" /></div>
              <span className="text-xs text-ca-muted">{c.audiTitle}</span>
            </div>
            <div className="p-6 space-y-4">
              {c.audiRows.map(s => <div key={s.label}><div className="flex items-center justify-between mb-1.5"><span className="text-xs text-ca-muted">{s.label}</span><span className="text-sm font-bold" style={{ color: s.color }}>{s.value}</span></div><div className="h-2 rounded-full bg-ca-border overflow-hidden"><div className="h-full rounded-full" style={{ width:`${s.pct}%`, background: s.color }} /></div></div>)}
              <div className="pt-3 border-t border-ca-border grid grid-cols-2 gap-3">
                {c.audiChecks.map(([l,v]) => <div key={l as string} className="flex items-center gap-2 text-xs text-ca-muted"><span className="text-ca-mint font-bold">{v as string}</span>{l as string}</div>)}
              </div>
            </div>
          </div>
          <div className="lg:order-2 order-1">
            <div className="h-px w-12 bg-ca-mint mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-mint block mb-3">{c.dataLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.dataTitle}</h2>
            <p className="text-ca-muted leading-relaxed mb-6">{c.dataDesc}</p>
            <ul className="space-y-3 mb-8">{c.dataFeatures.map(f => <FeatureLine key={f} text={f} />)}</ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">{c.dataStats.map(s => <Stat key={s.l} value={s.v} label={s.l} />)}</div>
          </div>
        </div>
      </section>

      <section className="bg-ca-dark py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 bg-ca-violet mb-6 rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ca-violet block mb-3">{c.editLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.editTitle}</h2>
            <p className="text-ca-muted leading-relaxed mb-6">{c.editDesc}</p>
            <ul className="space-y-3 mb-8">{c.editFeatures.map(f => <FeatureLine key={f} text={f} />)}</ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">{c.editStats.map(s => <Stat key={s.l} value={s.v} label={s.l} />)}</div>
          </div>
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "rgba(123,63,255,0.35)", background: "linear-gradient(145deg,rgba(123,63,255,0.12) 0%,#eef0fb 100%)", boxShadow: "0 2px 20px rgba(0,0,40,0.08)" }}>
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">lemonde.fr · Article preview</span></div>
            <div className="p-5">
              <div className="h-4 rounded bg-ca-border/40 w-3/4 mb-2" /><div className="h-3 rounded bg-ca-border/25 w-full mb-1.5" /><div className="h-3 rounded bg-ca-border/25 w-5/6 mb-5" />
              <div className="rounded-xl border overflow-hidden relative" style={{ borderColor: "rgba(123,63,255,0.3)", background: "rgba(123,63,255,0.08)" }}>
                <div className="p-4">
                  <div className="text-[10px] uppercase tracking-widest text-ca-violet mb-2 font-semibold">Sponsorisé · Format Conversationnel</div>
                  <div className="text-sm font-bold text-ca-text mb-1">Quelle voiture électrique vous correspond ?</div>
                  <div className="text-xs text-ca-muted mb-3">Répondez à 3 questions pour découvrir votre modèle idéal</div>
                  <div className="flex gap-2">{["Citadine","SUV","Berline"].map(o => <button key={o} className="text-xs px-3 py-1.5 rounded-lg border border-ca-violet/40 text-ca-violet hover:bg-ca-violet/10 transition-colors">{o}</button>)}</div>
                </div>
              </div>
              <div className="h-3 rounded bg-ca-border/20 w-full mt-4 mb-1.5" /><div className="h-3 rounded bg-ca-border/20 w-3/4" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ca-surface border-t border-ca-border py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-left text-ca-text mb-10">{c.gridTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {c.grid.map(([title, sub]) => <div key={title as string} className="rounded-xl border border-ca-border bg-ca-dark p-4" style={{ boxShadow: "0 1px 6px rgba(0,0,40,0.05)" }}><div className="text-sm font-semibold text-ca-text mb-0.5">{title as string}</div><div className="text-xs text-ca-muted">{sub as string}</div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-ca-dark py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-left text-ca-text mb-10">{c.testiTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.testimonials.map(t => <div key={t.company} className="rounded-2xl border border-ca-border bg-ca-surface p-6" style={{ boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}><p className="text-sm text-ca-muted leading-relaxed mb-5 italic">"{t.quote}"</p><div><div className="text-xs font-semibold text-ca-text">{t.author}</div><div className="text-xs text-ca-blue">{t.company}</div></div></div>)}
          </div>
        </div>
      </section>

      <CTABanner variant="publishers" />
    </main>
  );
}
