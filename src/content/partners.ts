export type Partner = {
  name: string;
  slug: string;
  /** Path under /public — svg preferred, png fallback */
  logo: string;
};

/** Top 20 brand partners for credibility (logo + name). */
export const BRAND_PARTNERS: Partner[] = [
  { name: "Audi", slug: "audi", logo: "/partners/audi.svg" },
  { name: "BMW", slug: "bmw", logo: "/partners/bmw.svg" },
  { name: "L'Oréal", slug: "loreal", logo: "/partners/loreal.png" },
  { name: "Carrefour", slug: "carrefour", logo: "/partners/carrefour.svg" },
  { name: "Nestlé", slug: "nestle", logo: "/partners/nestle.png" },
  { name: "Samsung", slug: "samsung", logo: "/partners/samsung.svg" },
  { name: "Coca-Cola", slug: "coca-cola", logo: "/partners/coca-cola.svg" },
  { name: "Orange", slug: "orange", logo: "/partners/orange.svg" },
  { name: "SFR", slug: "sfr", logo: "/partners/sfr.png" },
  { name: "BNP Paribas", slug: "bnp-paribas", logo: "/partners/bnp-paribas.png" },
  { name: "Renault", slug: "renault", logo: "/partners/renault.svg" },
  { name: "TotalEnergies", slug: "totalenergies", logo: "/partners/totalenergies.png" },
  { name: "LVMH", slug: "lvmh", logo: "/partners/lvmh.png" },
  { name: "Sanofi", slug: "sanofi", logo: "/partners/sanofi.png" },
  { name: "Boursorama", slug: "boursorama", logo: "/partners/boursorama.png" },
  { name: "Fnac", slug: "fnac", logo: "/partners/fnac.svg" },
  { name: "Nasdaq", slug: "nasdaq", logo: "/partners/nasdaq.png" },
  { name: "Publicis", slug: "publicis", logo: "/partners/publicis.png" },
  { name: "GroupM", slug: "groupm", logo: "/partners/groupm.svg" },
  { name: "Le Monde", slug: "le-monde", logo: "/partners/le-monde.png" },
];

/** Curated media partners (shorter list for credibility). */
export const MEDIA_PARTNERS: Partner[] = [
  { name: "Le Monde", slug: "le-monde", logo: "/partners/le-monde.png" },
  { name: "Les Échos", slug: "les-echos", logo: "/partners/les-echos.svg" },
  { name: "Forbes", slug: "forbes", logo: "/partners/forbes.svg" },
  { name: "L'Obs", slug: "lobs", logo: "/partners/lobs.svg" },
  { name: "Libération", slug: "liberation", logo: "/partners/liberation.svg" },
  { name: "HuffPost", slug: "huffpost", logo: "/partners/huffpost.svg" },
  { name: "Télérama", slug: "telerama", logo: "/partners/telerama.svg" },
  { name: "L'Express", slug: "lexpress", logo: "/partners/lexpress.svg" },
  { name: "Le Figaro", slug: "le-figaro", logo: "/partners/le-figaro.svg" },
  { name: "20 Minutes", slug: "20-minutes", logo: "/partners/20-minutes.svg" },
];
