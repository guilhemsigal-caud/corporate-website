import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getClient } from "@/sanity/client";
import { GALLERY_ITEM_QUERY, GALLERY_ITEMS_QUERY } from "@/sanity/queries";
import { GALLERY_ITEMS } from "@/content/gallery";
import type { GalleryItem } from "@/content/gallery";
import { GalleryItemClient } from "./GalleryItemClient";

export default async function GalleryItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const fetchOptions = isEnabled ? { cache: "no-store" as const } : { next: { revalidate: 60 } };

  let item: GalleryItem | null = null;
  let allItems: GalleryItem[] = GALLERY_ITEMS;

  try {
    const [sanityItem, sanityAll] = await Promise.all([
      getClient(isEnabled).fetch<GalleryItem>(GALLERY_ITEM_QUERY, { slug }, fetchOptions),
      getClient(isEnabled).fetch<GalleryItem[]>(GALLERY_ITEMS_QUERY, {}, fetchOptions),
    ]);
    if (sanityItem) item = sanityItem;
    if (sanityAll && sanityAll.length > 0) allItems = sanityAll;
  } catch {
    // Sanity unavailable — fall back to static content
  }

  if (!item) {
    item = GALLERY_ITEMS.find((i) => i.slug === slug) ?? null;
  }

  if (!item) notFound();

  const related = allItems.filter((i) => i.slug !== slug && i.category === item!.category).slice(0, 3);

  return <GalleryItemClient item={item} related={related} />;
}
