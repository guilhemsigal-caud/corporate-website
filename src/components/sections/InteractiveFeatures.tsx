"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const ACCENTS = ["#5b8cff", "#07e2dc", "#7b3fff", "#5b8cff"];
const HREFS = ["/advertisers", "/advertisers/targeting", "/gallery", "/advertisers/results"];

const COPY = {
  en: {
    eyebrow: "Elevate your impact",
    title: "Four pillars of audience performance",
    subtitle: "From media access to creative impact and measurable ROI: a full-stack approach to digital advertising.",
    learnMore: "Learn more",
    items: [
      { tab: "Reach", headline: "Reach 200+ premium publishers", description: "Access Le Monde, Les Échos, Forbes, HuffPost and 200+ premium media environments. Your brand appears in high-quality, brand-safe editorial contexts.", bullets: ["Direct publisher relationships, no MFA, no resellers", "Brand-safe, fully viewable placements", "Pan-European + US reach from one platform"], metric: "200+", metricLabel: "premium publishers", visual: ["Le Monde", "Les Échos", "Forbes", "HuffPost", "Libération", "L'Obs"] },
      { tab: "Right moment", headline: "Be present at the right moment", description: "Our formats activate at the scroll, precisely when readers are most engaged. Semantic contextual targeting ensures brand relevance in real time.", bullets: ["Cookieless contextual targeting by Teads AI", "Scroll-triggered formats for peak attention", "Real-time brand safety classification"], metric: "34s", metricLabel: "avg. attention per format", visual: ["Scroll Intent", "Context Score", "Brand Safety", "Attention AI"] },
      { tab: "Experience", headline: "Create immersive brand experiences", description: "From conversational formats to immersive video, our creative studio and ad formats drive brand recall and genuine consumer interaction.", bullets: ["Conversational & interactive formats", "Audience Studio for creative production", "Formats gallery with live demos"], metric: "+40%", metricLabel: "brand lift on avg.", visual: ["Video", "Slider", "Immersive", "Conversational"] },
      { tab: "Performance", headline: "Measure real business outcomes", description: "From brand lift studies to econometric ROI modeling, Collective Audience delivers the attribution proof your media plans need.", bullets: ["Brand lift measurement (Lucid/Dynata)", "Cookieless MMM integration", "3× brand attribution vs. display"], metric: "3×", metricLabel: "brand attribution", visual: ["Brand Lift", "MMM ROI", "Attribution", "Foot Traffic"] },
    ],
  },
  fr: {
    eyebrow: "Amplifiez votre impact",
    title: "Quatre piliers de la performance audience",
    subtitle: "De l'accès médias à l'impact créatif jusqu'au ROI mesurable: une approche full-stack de la publicité digitale.",
    learnMore: "En savoir plus",
    items: [
      { tab: "Reach", headline: "Atteignez 200+ éditeurs premium", description: "Accédez à Le Monde, Les Échos, Forbes, HuffPost et 200+ environnements médias premium. Votre marque apparaît dans des contextes éditoriaux de qualité et brand-safe.", bullets: ["Relations directes éditeurs, sans MFA, sans revendeurs", "Placements brand-safe, 100% en visibilité", "Reach pan-européen + US depuis une seule plateforme"], metric: "200+", metricLabel: "éditeurs premium", visual: ["Le Monde", "Les Échos", "Forbes", "HuffPost", "Libération", "L'Obs"] },
      { tab: "Bon moment", headline: "Soyez présent au bon moment", description: "Nos formats s'activent au scroll, précisément quand les lecteurs sont les plus engagés. Le ciblage contextuel sémantique garantit la pertinence de marque en temps réel.", bullets: ["Ciblage contextuel sans cookie par Teads AI", "Formats déclenchés au scroll pour une attention maximale", "Classification brand safety en temps réel"], metric: "34s", metricLabel: "attention moy. par format", visual: ["Scroll Intent", "Context Score", "Brand Safety", "Attention AI"] },
      { tab: "Expérience", headline: "Créez des expériences de marque immersives", description: "Des formats conversationnels aux vidéos immersives, notre studio créatif et nos formats publicitaires stimulent la mémorisation et l'interaction consommateur.", bullets: ["Formats conversationnels & interactifs", "Audience Studio pour la production créative", "Galerie de formats avec démos en direct"], metric: "+40%", metricLabel: "lift de marque en moy.", visual: ["Vidéo", "Slider", "Immersif", "Conversationnel"] },
      { tab: "Performance", headline: "Mesurez vos résultats business réels", description: "Des études de lift de marque à la modélisation ROI économétrique, Collective Audience apporte la preuve d'attribution dont vos plans médias ont besoin.", bullets: ["Mesure du lift de marque (Lucid/Dynata)", "Intégration MMM sans cookie", "3× attribution de marque vs. display"], metric: "3×", metricLabel: "attribution de marque", visual: ["Lift de marque", "ROI MMM", "Attribution", "Trafic point de vente"] },
    ],
  },
};

function VisualPanel({ item, accent }: { item: (typeof COPY.en.items)[0]; accent: string }) {
  return (
    <div className="relative h-full min-h-[340px] flex flex-col justify-center p-8">
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${accent}12 0%, transparent 70%)` }} />
      <div className="relative grid grid-cols-2 gap-3">
        {item.visual.map((v, i) => (
          <motion.div key={v} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.07, duration: 0.35 }}
            className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: `${accent}25`, background: `${accent}0a` }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
            <span className="text-sm font-medium text-ca-text">{v}</span>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}
          className="col-span-2 flex items-center justify-between p-5 rounded-xl border" style={{ borderColor: `${accent}30`, background: `${accent}12` }}>
          <div>
            <div className="text-4xl font-bold" style={{ background: `linear-gradient(135deg, ${accent}, #0e1025)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {item.metric}
            </div>
            <div className="text-sm text-ca-muted mt-0.5">{item.metricLabel}</div>
          </div>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="24" fill="none" stroke={`${accent}20`} strokeWidth="4" />
            <motion.circle cx="30" cy="30" r="24" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 24}`} initial={{ strokeDashoffset: 2 * Math.PI * 24 }} animate={{ strokeDashoffset: 2 * Math.PI * 24 * 0.25 }}
              transition={{ duration: 1.2, ease: "easeOut" }} style={{ transformOrigin: "center", rotate: "-90deg" }} />
            <text x="30" y="35" textAnchor="middle" fontSize="11" fill={accent} fontWeight="700">{item.metric}</text>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export function InteractiveFeatures() {
  const [active, setActive] = useState(0);
  const [switchCount, setSwitchCount] = useState(0);
  const { lang } = useLang();
  const c = COPY[lang];
  const item = c.items[active];
  const accent = ACCENTS[active];

  // Auto-advance: 5s timer resets every time active changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(prev => (prev + 1) % c.items.length);
      setSwitchCount(n => n + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [active, c.items.length]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setSwitchCount(n => n + 1);
  };

  return (
    <section className="bg-ca-dark py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
            style={{ color: "#07e2dc", borderColor: "rgba(7,226,220,0.2)", background: "rgba(7,226,220,0.06)" }}>
            {c.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ background: "linear-gradient(135deg, #0e1025 0%, #3a4070 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {c.title}
          </h2>
          <p className="text-ca-muted text-lg max-w-xl mx-auto">{c.subtitle}</p>
        </motion.div>

        {/* Tabs with progress fill */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {c.items.map((f, i) => (
            <button
              key={f.tab}
              onClick={() => handleTabClick(i)}
              className="relative px-5 py-2.5 rounded-full text-sm font-semibold overflow-hidden transition-shadow duration-300"
              style={active === i
                ? { border: `1px solid ${ACCENTS[i]}60`, boxShadow: `0 0 20px ${ACCENTS[i]}35`, minWidth: 110 }
                : { border: "1px solid rgba(0,0,30,0.1)", minWidth: 110 }}
            >
              {/* Progress fill — only on active tab, resets via switchCount key */}
              {active === i && (
                <motion.div
                  key={switchCount}
                  className="absolute inset-0 rounded-full"
                  style={{ background: ACCENTS[i], transformOrigin: "left center" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
              <span
                className="relative z-10"
                style={{ color: active === i ? "#0e1025" : "#5a6480" }}
              >
                {f.tab}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border overflow-hidden" style={{ borderColor: `${accent}25` }}>
          <AnimatePresence mode="wait">
            <motion.div key={`${lang}-${active}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.35 }}
              className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: `${accent}40`, background: `linear-gradient(145deg, ${accent}1c 0%, #eef0fb 100%)` }}>
              <div className="h-px w-16 mb-6 rounded-full" style={{ background: accent }} />
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: accent }}>{item.tab}</span>
              <h3 className="text-2xl font-bold text-ca-text mb-4 leading-snug">{item.headline}</h3>
              <p className="text-ca-muted leading-relaxed mb-6">{item.description}</p>
              <ul className="space-y-3 mb-8">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ca-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />{b}
                  </li>
                ))}
              </ul>
              <Link href={HREFS[active]} className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200" style={{ color: accent }}>
                {c.learnMore}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div key={`visual-${lang}-${active}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="bg-ca-surface/40">
              <VisualPanel item={item} accent={accent} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
