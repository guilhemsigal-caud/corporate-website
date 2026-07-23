"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { CTABanner } from "@/components/sections/CTABanner";
import { BrandLogoCarousel } from "@/components/sections/BrandLogoCarousel";
import { useLang } from "@/lib/i18n";
import { BRAND_PARTNERS } from "@/content/partners";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold gradient-text-blue-mint">{value}</span>
      <span className="text-base text-ca-muted mt-1">{label}</span>
    </div>
  );
}

/** Same value shape as Stat, but the number animates (count-up) into view — used for the KPI row. */
function CountUpStat({ value, label }: { value: string; label: string }) {
  const parsed = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  const prefix = parsed?.[1] ?? "";
  const numeric = parsed ? parseFloat(parsed[2]) : 0;
  const suffix = parsed?.[3] ?? "";
  const isDecimal = !Number.isInteger(numeric);

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const spring = useSpring(0, { stiffness: 140, damping: 28, mass: 0.6 });
  const display = useTransform(spring, (v) => (isDecimal ? v.toFixed(1) : Math.round(v).toString()));

  useEffect(() => {
    if (isInView) spring.set(numeric);
  }, [isInView, spring, numeric]);

  return (
    <div className="flex flex-col">
      <span ref={ref} className="text-4xl font-bold gradient-text-blue-mint tabular-nums">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </span>
      <span className="text-base text-ca-muted mt-1">{label}</span>
    </div>
  );
}
function FeatureLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-base text-ca-muted">
      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-ca-mint" />{text}
    </li>
  );
}

const COPY = {
  en: {
    badge: "For Advertisers",
    h1: "High performance advertising platform.",
    subtitle: "Reach engaged readers on 200+ premium publishers with high-attention formats, cookieless targeting, and measurable brand outcomes.",
    cta1: "Contact our sales team", cta2: "Explore formats →",
    brandsLabel: "Trusted by 150+ brands",
    compTitle: "Why standard advertising isn't enough.",
    oldLabel: "Standard display advertising",
    oldRows: [["CTR","0.1%"],["Time on format","2 seconds"],["Brand attribution","14%"],["Data capture","None"],["Cookie dependency","Required"],["Publisher quality","MFA & resellers"]],
    caLabel: "Collective Audience",
    caRows: [[">1%","Interaction rate","#07e2dc"],["34 seconds","Avg. time on format","#5b8cff"],["+40%","Brand lift","#07e2dc"],["First-party","Rich audience data","#7b3fff"],["Cookieless","No cookie required","#07e2dc"],["Premium only","200+ vetted publishers","#5b8cff"]],
    kpis: [{ v: "+40%", l: "Brand lift" }, { v: "34s", l: "Time on format" }, { v: ">1%", l: "Interaction rate" }, { v: "3×", l: "Brand attribution" }],
    ssLabel: "Self-serve platform", ssTitle: "Launch in minutes. Optimize in real time.",
    ssDesc: "AudienceDesk gives you full control over your campaigns. Or let our managed service team run them for you.",
    ssFeatures: ["Campaign builder with audience & format controls","Real-time bidding across all 200+ publishers","Intelligent budget pacing & floor pricing","Live KPI dashboard (impressions, attention, lift)","Self-serve or fully managed service","API access for programmatic integration"],
    dashCampaign: "Campaign: BMW M Series, FR",
    dashMetrics: [["Brand Lift","78%","#07e2dc"],["Attention Score","92%","#5b8cff"],["Interaction Rate","1.4%","#7b3fff"]],
    dashStats: [["Impressions","2.4M"],["Spend","€12,400"],["eCPA","€5.17"]],
    ckLabel: "Cookieless targeting", ckTitle: "Precise targeting without cookies.",
    ckDesc: "Our semantic AI reads every article in real time to deliver your message at the exact right moment. No user tracking required.",
    ckFeatures: ["NLP-based semantic & contextual targeting","AudienceMatching cookieless identity resolution","4 billion+ contextual signals processed per day","Brand safety classification in <50ms","IAB category targeting + custom keyword lists","Geo, device, time & daypart targeting"],
    ckStats: [{ v: "0", l: "cookies required" }, { v: "4B+", l: "signals/day" }],
    semTitle: "Semantic Targeting Engine",
    semRows: [{ label: "Article topic", value: "Electric vehicles, test drive review", score: 98, color: "#5b8cff" }, { label: "Brand safety", value: "Premium / Safe", score: 100, color: "#07e2dc" }, { label: "Context match", value: "Automotive, high intent", score: 94, color: "#7b3fff" }, { label: "Attention prediction", value: "Very high (>40s)", score: 88, color: "#5b8cff" }],
    fmtLabel: "High-attention formats", fmtTitle: "Formats readers actually engage with.",
    fmtDesc: "From conversational Q&A to immersive video. Discover all our interactive ad formats with live demos and real KPIs.",
    fmtCta: "See all formats with live demos",
    formats: [["Conversational","Q&A & dialogue formats","#5b8cff"],["Focus Vidéo","Scroll-triggered video","#07e2dc"],["Immersif","Full-immersion formats","#7b3fff"],["Slider","Before/after comparison","#5b8cff"],["Branded Content","Native editorial integration","#07e2dc"],["Rich Media","Expandable & animated","#7b3fff"]],
    testiTitle: "What agency partners say",
    testimonials: [
      { quote: "The interactive formats from Collective Audience consistently outperform our standard display spend, both on attention and brand lift metrics.", author: "Head of Programmatic", company: "Publicis Media" },
      { quote: "We appreciate the cookieless approach. In a post-cookie world, being able to target by context and first-party signals is a real competitive advantage.", author: "Investment Director", company: "WPP Media" },
      { quote: "The reporting is transparent and the team is responsive. Brand lift studies confirmed: significantly higher recall than traditional display.", author: "Media Manager", company: "Starcom" },
    ],
  },
  fr: {
    badge: "Pour les annonceurs",
    h1: "Plateforme publicitaire haute performance.",
    subtitle: "Atteignez des lecteurs engagés sur 200+ éditeurs premium avec des formats haute attention, un ciblage sans cookie et des résultats de marque mesurables.",
    cta1: "Contacter notre équipe commerciale", cta2: "Explorer les formats →",
    brandsLabel: "Fait confiance par 150+ marques",
    compTitle: "Pourquoi la publicité standard ne suffit plus.",
    oldLabel: "Display publicitaire standard",
    oldRows: [["CTR","0,1%"],["Temps sur format","2 secondes"],["Attribution de marque","14%"],["Capture de données","Aucune"],["Dépendance cookie","Requise"],["Qualité éditeurs","MFA & revendeurs"]],
    caLabel: "Collective Audience",
    caRows: [[">1%","Taux d'interaction","#07e2dc"],["34 secondes","Temps moy. sur format","#5b8cff"],["+40%","Brand lift","#07e2dc"],["First-party","Données audience riches","#7b3fff"],["Sans cookie","Zéro cookie requis","#07e2dc"],["Premium uniquement","200+ éditeurs vérifiés","#5b8cff"]],
    kpis: [{ v: "+40%", l: "Brand lift" }, { v: "34s", l: "Temps sur format" }, { v: ">1%", l: "Taux d'interaction" }, { v: "3×", l: "Attribution de marque" }],
    ssLabel: "Plateforme self-serve", ssTitle: "Lancez en minutes. Optimisez en temps réel.",
    ssDesc: "AudienceDesk vous donne un contrôle total sur vos campagnes. Ou laissez notre équipe managed service les gérer pour vous.",
    ssFeatures: ["Constructeur de campagne avec contrôles audience & format","Enchères temps réel sur 200+ éditeurs","Pacing budgétaire intelligent & floor pricing","Dashboard KPI live (impressions, attention, lift)","Self-serve ou service entièrement managé","Accès API pour l'intégration programmatique"],
    dashCampaign: "Campagne : BMW M Series, FR",
    dashMetrics: [["Brand Lift","78%","#07e2dc"],["Score d'attention","92%","#5b8cff"],["Taux d'interaction","1,4%","#7b3fff"]],
    dashStats: [["Impressions","2,4M"],["Dépenses","12 400 €"],["eCPA","5,17 €"]],
    ckLabel: "Ciblage sans cookie", ckTitle: "Ciblage précis sans cookies.",
    ckDesc: "Notre IA sémantique lit chaque article en temps réel pour délivrer votre message au bon moment, sans suivi utilisateur.",
    ckFeatures: ["Ciblage sémantique & contextuel basé sur le NLP","Résolution d'identité cookieless AudienceMatching","4 milliards+ de signaux contextuels traités par jour","Classification brand safety en <50ms","Ciblage catégories IAB + listes de mots-clés personnalisées","Ciblage géo, appareil, heure & daypart"],
    ckStats: [{ v: "0", l: "cookies requis" }, { v: "4B+", l: "signaux/jour" }],
    semTitle: "Moteur de ciblage sémantique",
    semRows: [{ label: "Sujet de l'article", value: "Véhicules électriques, essai routier", score: 98, color: "#5b8cff" }, { label: "Brand safety", value: "Premium / Safe", score: 100, color: "#07e2dc" }, { label: "Pertinence contextuelle", value: "Automobile, haute intention", score: 94, color: "#7b3fff" }, { label: "Prédiction d'attention", value: "Très haute (>40s)", score: 88, color: "#5b8cff" }],
    fmtLabel: "Formats haute attention", fmtTitle: "Des formats que les lecteurs apprécient vraiment.",
    fmtDesc: "Du Q&A conversationnel à la vidéo immersive. Découvrez tous nos formats interactifs avec démos en direct et KPIs réels.",
    fmtCta: "Voir tous les formats avec démos en direct",
    formats: [["Conversationnel","Formats Q&A & dialogue","#5b8cff"],["Focus Vidéo","Vidéo déclenchée au scroll","#07e2dc"],["Immersif","Formats plein immersion","#7b3fff"],["Slider","Comparaison avant/après","#5b8cff"],["Branded Content","Intégration éditoriale native","#07e2dc"],["Rich Media","Formats expansibles & animés","#7b3fff"]],
    testiTitle: "Ce que disent les agences partenaires",
    testimonials: [
      { quote: "Les formats interactifs de Collective Audience surperforment systématiquement nos dépenses display standard, tant sur l'attention que sur le brand lift.", author: "Head of Programmatic", company: "Publicis Media" },
      { quote: "Nous apprécions l'approche sans cookie. Dans un monde post-cookie, cibler par contexte et signaux first-party est un vrai avantage concurrentiel.", author: "Directeur des Investissements", company: "WPP Media" },
      { quote: "Le reporting est transparent et l'équipe réactive. Les études brand lift l'ont confirmé : un souvenir de marque significativement supérieur au display traditionnel.", author: "Media Manager", company: "Starcom" },
    ],
  },
};

export default function AdvertisersPage() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <main>
      <section className="relative bg-ca-dark overflow-hidden py-28">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[5%] w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle,rgba(7,226,220,0.14) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite" }} />
          <div className="absolute bottom-[-5%] left-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle,rgba(91,140,255,0.1) 0%,transparent 70%)", animation: "blob 12s ease-in-out infinite 6s" }} />
        </div>
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 z-0 flex justify-center overflow-hidden pointer-events-none"
          style={{
            height: "26rem",
            maskImage: "radial-gradient(ellipse 60% 90% at 50% 0%, black 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 90% at 50% 0%, black 35%, transparent 85%)",
          }}
        >
          {/* Main glow */}
          <div className="absolute inset-auto h-36 w-[28rem] -translate-y-[30%] rounded-full blur-3xl" style={{ background: "rgba(7,226,220,0.22)" }} />

          {/* Lamp beam */}
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            className="absolute top-0 h-36 -translate-y-[20%] rounded-full blur-2xl"
            style={{ background: "rgba(7,226,220,0.2)" }}
          />

          {/* Top line */}
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            className="absolute inset-auto h-px -translate-y-[10%]"
            style={{ background: "rgba(7,226,220,0.45)" }}
          />

          {/* Left gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto right-1/2 h-56 w-[30rem]"
            style={{
              backgroundImage: "conic-gradient(from 70deg at center top, rgba(7,226,220,0.22), transparent, transparent)",
              maskImage: "radial-gradient(circle at 100% 0%, black 0%, transparent 65%)",
              WebkitMaskImage: "radial-gradient(circle at 100% 0%, black 0%, transparent 65%)",
            }}
          />

          {/* Right gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem]"
            style={{
              backgroundImage: "conic-gradient(from 290deg at center top, transparent, transparent, rgba(7,226,220,0.22))",
              maskImage: "radial-gradient(circle at 0% 0%, black 0%, transparent 65%)",
              WebkitMaskImage: "radial-gradient(circle at 0% 0%, black 0%, transparent 65%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-ca-mint/30 bg-ca-mint/8 text-sm font-semibold tracking-widest uppercase text-ca-mint mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ca-mint" style={{ animation: "pulse-ring 2s ease-in-out infinite" }} />
              {c.badge}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.07] mb-6"
              style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              {c.h1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-ca-muted text-xl leading-relaxed max-w-2xl mb-10"
            >
              {c.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold hover:brightness-105 transition-all hover:shadow-[0_0_30px_rgba(7,226,220,0.35)]" style={{ background: "linear-gradient(135deg, #07e2dc, #5b8cff)", color: "#0e1025" }}>{c.cta1} <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" /></Link>
              <Link href="/gallery" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-ca-border bg-black/5 text-ca-text font-semibold hover:bg-black/8 transition-all">{c.cta2}</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {c.kpis.map((k, i) => (
                <motion.div
                  key={k.l}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.07, duration: 0.4 }}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-ca-border/70 bg-ca-surface/70 backdrop-blur-sm"
                >
                  <span className="text-base font-bold gradient-text-blue-mint">{k.v}</span>
                  <span className="text-xs text-ca-muted tracking-wide">{k.l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div aria-hidden className="absolute -inset-6 rounded-[2rem] opacity-60 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(7,226,220,0.16) 0%, transparent 70%)" }} />
            <div className="relative rounded-2xl border border-ca-border bg-ca-surface/80 backdrop-blur-md overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,40,0.18)" }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(to right, transparent, #07e2dc, transparent)" }} />
              <div className="px-5 py-3 border-b border-ca-border flex items-center justify-between">
                <span className="text-xs text-ca-muted">{c.dashCampaign}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-500 border border-green-500/20">Live</span>
              </div>
              <div className="p-6">
                {c.dashMetrics.map(([l, v, col], i) => (
                  <div key={l as string} className="mb-4 last:mb-0">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-ca-muted">{l as string}</span>
                      <span className="text-xs font-bold" style={{ color: col as string }}>{v as string}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-ca-border overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: col as string }}
                        initial={{ width: 0 }}
                        animate={{ width: v as string }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-ca-border">
                  {c.dashStats.map(([l, v]) => (
                    <div key={l as string} className="rounded-lg bg-ca-dark border border-ca-border p-2.5 text-center">
                      <div className="text-[10px] text-ca-muted mb-0.5">{l as string}</div>
                      <div className="text-sm font-bold text-ca-text">{v as string}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-ca-surface border-y border-ca-border py-12 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px]">
          <p className="text-left text-sm font-semibold tracking-widest uppercase text-ca-muted mb-8">{c.brandsLabel}</p>
        </div>
        <BrandLogoCarousel partners={BRAND_PARTNERS} />
      </section>

      <section className="bg-ca-dark py-24">
        <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-14" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.compTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl border border-ca-border bg-ca-surface p-7" style={{ boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
              <div className="text-sm font-semibold text-ca-muted uppercase tracking-widest mb-5">{c.oldLabel}</div>
              <div className="space-y-4">{c.oldRows.map(([l,v]) => <div key={l as string} className="flex items-center justify-between py-2 border-b border-ca-border last:border-0"><span className="text-sm text-ca-muted">{l as string}</span><span className="text-sm font-semibold text-ca-muted/60">{v as string}</span></div>)}</div>
            </div>
            <div className="rounded-2xl border p-7 relative overflow-hidden" style={{ borderColor: "rgba(7,226,220,0.35)", background: "linear-gradient(145deg,rgba(7,226,220,0.12) 0%,#eef0fb 100%)", boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(to right,transparent,#07e2dc,transparent)" }} />
              <div className="text-sm font-semibold text-ca-mint uppercase tracking-widest mb-5">{c.caLabel}</div>
              <div className="space-y-4">{c.caRows.map(([v,l,col]) => <div key={l as string} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: "rgba(7,226,220,0.1)" }}><span className="text-sm text-ca-muted">{l as string}</span><span className="text-sm font-bold" style={{ color: col as string }}>{v as string}</span></div>)}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-8 rounded-2xl border border-ca-border bg-ca-surface" style={{ boxShadow: "0 2px 12px rgba(0,0,40,0.06)" }}>
            {c.kpis.map(k => <CountUpStat key={k.l} value={k.v} label={k.l} />)}
          </div>
        </div>
      </section>

      <section className="bg-ca-surface border-t border-ca-border py-24">
        <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl border border-ca-border bg-ca-dark overflow-hidden" style={{ boxShadow: "0 2px 20px rgba(0,0,40,0.08)" }}>
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">AudienceDesk: Campaign Manager</span></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div><div className="text-xs text-ca-muted mb-1">{c.dashCampaign}</div><div className="text-xl font-bold text-ca-mint">Active</div></div>
                <div className="text-xs px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">Live</div>
              </div>
              {c.dashMetrics.map(([l,v,col]) => <div key={l as string} className="mb-3"><div className="flex justify-between mb-1"><span className="text-xs text-ca-muted">{l as string}</span><span className="text-xs font-bold" style={{ color: col as string }}>{v as string}</span></div><div className="h-1.5 rounded-full bg-ca-border overflow-hidden"><div className="h-full rounded-full" style={{ width: v as string, background: col as string }} /></div></div>)}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-ca-border">
                {c.dashStats.map(([l,v]) => <div key={l as string} className="rounded-lg bg-ca-surface border border-ca-border p-2 text-center"><div className="text-[10px] text-ca-muted">{l as string}</div><div className="text-sm font-bold text-ca-text">{v as string}</div></div>)}
              </div>
            </div>
          </div>
          <div>
            <div className="h-px w-12 bg-ca-mint mb-6 rounded-full" />
            <span className="text-sm font-semibold tracking-widest uppercase text-ca-mint block mb-3">{c.ssLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.ssTitle}</h2>
            <p className="text-ca-muted leading-relaxed mb-6">{c.ssDesc}</p>
            <ul className="space-y-3 mb-8">{c.ssFeatures.map(f => <FeatureLine key={f} text={f} />)}</ul>
          </div>
        </div>
      </section>

      <section className="bg-ca-dark py-24">
        <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 bg-ca-blue mb-6 rounded-full" />
            <span className="text-sm font-semibold tracking-widest uppercase text-ca-blue block mb-3">{c.ckLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.ckTitle}</h2>
            <p className="text-ca-muted leading-relaxed mb-6">{c.ckDesc}</p>
            <ul className="space-y-3 mb-8">{c.ckFeatures.map(f => <FeatureLine key={f} text={f} />)}</ul>
            <div className="flex gap-8 pt-6 border-t border-ca-border">{c.ckStats.map(s => <Stat key={s.l} value={s.v} label={s.l} />)}</div>
          </div>
          <div className="rounded-2xl border border-ca-border bg-ca-surface overflow-hidden" style={{ boxShadow: "0 2px 20px rgba(0,0,40,0.08)" }}>
            <div className="px-5 py-3 border-b border-ca-border"><span className="text-xs text-ca-muted">{c.semTitle}</span></div>
            <div className="p-6 space-y-3">
              {c.semRows.map(s => <div key={s.label} className="rounded-xl border border-ca-border bg-ca-dark p-4"><div className="flex items-center justify-between mb-2"><span className="text-xs text-ca-muted">{s.label}</span><span className="text-xs font-bold" style={{ color: s.color }}>{s.score}%</span></div><div className="text-xs font-semibold text-ca-text mb-2">{s.value}</div><div className="h-1 rounded-full bg-ca-border overflow-hidden"><div className="h-full rounded-full" style={{ width: `${s.score}%`, background: s.color }} /></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ca-surface border-t border-ca-border py-24">
        <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px] text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-ca-violet block mb-3">{c.fmtLabel}</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.fmtTitle}</h2>
          <p className="text-ca-muted mb-10 max-w-xl mx-auto">{c.fmtDesc}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {c.formats.map(([n,d,col]) => (
              <Link
                key={n as string}
                href="/gallery"
                className="group relative rounded-2xl border overflow-hidden p-5 text-left transition-all duration-200 hover:-translate-y-1"
                style={{
                  borderColor: `${col as string}45`,
                  background: `linear-gradient(145deg, ${col as string}18 0%, #eef0fb 100%)`,
                  boxShadow: "0 2px 8px rgba(0,0,40,0.05)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, transparent 5%, ${col as string} 40%, ${col as string} 60%, transparent 95%)` }} aria-hidden />
                <div className="text-sm font-bold mb-1" style={{ color: col as string }}>{n as string}</div>
                <div className="text-xs text-ca-muted">{d as string}</div>
              </Link>
            ))}
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm hover:brightness-110 transition-all" style={{ background: "linear-gradient(135deg, #7b3fff, #5b8cff)" }}>{c.fmtCta} <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="bg-ca-dark py-20">
        <div className="max-w-[1800px] mx-auto px-6 md:px-[68px] lg:px-[100px]">
          <h2 className="text-2xl font-bold text-left mb-10" style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.testiTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.testimonials.map((t, i) => {
              const accent = ["#5b8cff", "#07e2dc", "#7b3fff"][i % 3];
              return (
                <div
                  key={t.company}
                  className="group relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: `${accent}45`,
                    background: `linear-gradient(145deg, ${accent}18 0%, #eef0fb 100%)`,
                    boxShadow: "0 2px 12px rgba(0,0,40,0.06)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, transparent 5%, ${accent} 40%, ${accent} 60%, transparent 95%)` }} aria-hidden />
                  <p className="text-sm text-ca-muted leading-relaxed mb-5 italic">&quot;{t.quote}&quot;</p>
                  <div>
                    <div className="text-xs font-semibold text-ca-text">{t.author}</div>
                    <div className="text-xs" style={{ color: accent }}>{t.company}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner variant="advertisers" />
    </main>
  );
}
