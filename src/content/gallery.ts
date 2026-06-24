export type GalleryCategory = "all" | "formats" | "industries" | "innovations" | "technologies";

export interface GalleryDemo {
  url: string;
  label?: string;
}

export interface GalleryItem {
  slug: string;
  category: Exclude<GalleryCategory, "all">;
  name: string;
  description: string;
  kpis: { label: string; value: string }[];
  accent: string;
  tags: string[];
  demos?: GalleryDemo[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    slug: "nos-formats", category: "formats", name: "Our Formats",
    description: "Overview of all Collective Audience high-attention ad formats and their performance benchmarks.",
    kpis: [{ label: "Avg. attention", value: "34s" }, { label: "Interaction rate", value: ">1%" }, { label: "Brand lift", value: "+40%" }],
    accent: "#5b8cff", tags: ["Conversational", "Video", "Native"],
  },
  {
    slug: "focus-video", category: "formats", name: "Focus Vidéo",
    description: "Mid-article scroll-triggered video format that activates only when fully in view — maximizing completion rate.",
    kpis: [{ label: "Completion rate", value: "78%" }, { label: "Attention", value: "42s" }, { label: "Brand recall", value: "+52%" }],
    accent: "#5b8cff", tags: ["Video", "Scroll-triggered"],
  },
  {
    slug: "automobile", category: "industries", name: "Automobile",
    description: "High-attention formats for automotive brands — from model launches to test-drive conversions.",
    kpis: [{ label: "Brand lift", value: "+52%" }, { label: "Test drive intent", value: "+38%" }, { label: "Attention", value: "38s" }],
    accent: "#7df0c8", tags: ["Audi", "BMW", "Renault"],
    demos: [
      { url: "https://demo.collectiveaudience.co/?beop_brand=5a4c9fc4c9e77c00015c3811&beop_content=6250242f01322c33d37e593f&sa=1", label: "Démo 1" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=5e1317b646e0fb00012a5310&beop_content=67f7c91ffd30d544c0c52f86", label: "Démo 2" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=5c921a6546e0fb000117bbdd&beop_content=5ffc7b12ed6e8a1f05b88189", label: "Démo 3" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=5e1317b646e0fb00012a5310&beop_brand_exit=5e316ddb46e0fb00018367dd&beop_content=6231fee2c2c8b05f9e419c6f&sa=1", label: "Démo 4" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=5a5292e1c9e77c00017f3b55&beop_content=67b2f983338aa3790276e8b9", label: "Démo 5" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=5aa9175a46e0fb00011583af&beop_content=619638153d84ec56ebbe48b7&sa=1", label: "Démo 6" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=61572788b433244130bf1b31&beop_content=62038ca1ad5e4a5fa990de7d", label: "Démo 7" },
    ],
  },
  {
    slug: "beaute", category: "industries", name: "Beauté",
    description: "Conversational and visual formats for beauty brands driving purchase intent and product discovery.",
    kpis: [{ label: "Purchase intent", value: "+44%" }, { label: "Interaction rate", value: "1.8%" }, { label: "Viewability", value: "94%" }],
    accent: "#7df0c8", tags: ["L'Oréal", "LVMH", "Sanofi"],
    demos: [
      { url: "https://demo.collectiveaudience.co/?beop_brand=5de63c4c46e0fb000144acba&beop_content=606f12ef4e99b70a6814689b&sa=1", label: "Démo 1" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=603fb19efa390a60cb8164ca&beop_content=609043057a87004a98d65791", label: "Démo 2" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=5c6bfc1546e0fb0001beec8a&beop_content=600ea502c036227cd340a3c1", label: "Démo 3" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=6036b95ffbdc2244bc8b5707&beop_content=67fd25fffd30d544c0291dad", label: "Démo 4" },
      { url: "https://demo.collectiveaudience.co/?beop_brand=5e457818c9e77c000106507d&beop_content=67fd2328fd30d544c0273188", label: "Démo 5" },
    ],
  },
  {
    slug: "sante", category: "industries", name: "Santé",
    description: "Brand-safe, contextual health formats that drive awareness with editorial precision.",
    kpis: [{ label: "Awareness lift", value: "+36%" }, { label: "Brand safety", value: "99%" }, { label: "Context match", value: "97%" }],
    accent: "#7df0c8", tags: ["Healthcare", "OTC", "Wellness"],
  },
  {
    slug: "retail", category: "industries", name: "Retail",
    description: "Performance-driven formats for retail brands optimizing for foot traffic and online conversions.",
    kpis: [{ label: "ROAS", value: "3.2×" }, { label: "Foot traffic lift", value: "+29%" }, { label: "Interaction", value: "1.4%" }],
    accent: "#7df0c8", tags: ["Carrefour", "FNAC", "Galeries Lafayette"],
  },
  {
    slug: "finance", category: "industries", name: "Finance Perso",
    description: "Trust-building formats for fintech and banking brands driving sign-up intent.",
    kpis: [{ label: "Sign-up intent", value: "+35%" }, { label: "Completion rate", value: "72%" }, { label: "CTR", value: "2.1%" }],
    accent: "#7df0c8", tags: ["Boursorama", "BNP", "Fortuneo"],
  },
  {
    slug: "spiritueux", category: "industries", name: "Spiritueux",
    description: "Premium brand storytelling formats for spirits and luxury beverage categories.",
    kpis: [{ label: "Brand affinity", value: "+48%" }, { label: "Attention", value: "41s" }, { label: "Completion", value: "81%" }],
    accent: "#7df0c8", tags: ["Premium", "Luxury", "Spirits"],
  },
  {
    slug: "droit-politique", category: "industries", name: "Droit & Politique",
    description: "Contextual formats targeting engaged civic readers on premium news environments.",
    kpis: [{ label: "Engagement", value: "1.9%" }, { label: "Context score", value: "98%" }, { label: "Completion", value: "76%" }],
    accent: "#7df0c8", tags: ["News", "Civic", "Legal"],
  },
  {
    slug: "immersif", category: "innovations", name: "Immersif",
    description: "Full-immersion formats that take over the reading experience momentarily for maximum brand impact.",
    kpis: [{ label: "Brand recall", value: "+61%" }, { label: "Attention", value: "48s" }, { label: "Interaction", value: "2.3%" }],
    accent: "#7b3fff", tags: ["Immersive", "Full-screen", "High-impact"],
  },
  {
    slug: "slider", category: "innovations", name: "Slider",
    description: "Interactive before/after slider formats for product comparisons and brand transformation stories.",
    kpis: [{ label: "Interaction rate", value: "2.1%" }, { label: "Time spent", value: "38s" }, { label: "Brand lift", value: "+45%" }],
    accent: "#7b3fff", tags: ["Interactive", "Before/After", "Slider"],
  },
  {
    slug: "technologies", category: "technologies", name: "Technologies",
    description: "Technical overview of AudienceAds serving infrastructure, attention measurement, and cookieless targeting.",
    kpis: [{ label: "Latency", value: "<50ms" }, { label: "Uptime", value: "99.9%" }, { label: "Signal/day", value: "4B+" }],
    accent: "#5b8cff", tags: ["Infra", "AI", "Cookieless"],
  },
];

export const CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "formats", label: "Formats" },
  { value: "industries", label: "Industries" },
  { value: "innovations", label: "Innovations" },
  { value: "technologies", label: "Technologies" },
];
