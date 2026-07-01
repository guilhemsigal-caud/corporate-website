import { draftMode } from "next/headers";
import { getClient } from "@/sanity/client";
import { GALLERY_ITEMS_QUERY } from "@/sanity/queries";
import { GALLERY_ITEMS } from "@/content/gallery";
import type { GalleryItem } from "@/content/gallery";
import { GalleryPageClient } from "./GalleryPageClient";

export default async function GalleryPage() {
  let items: GalleryItem[] = GALLERY_ITEMS;
  const { isEnabled } = await draftMode();

  try {
    const sanityItems = await getClient(isEnabled).fetch<GalleryItem[]>(
      GALLERY_ITEMS_QUERY,
      {},
      isEnabled ? { cache: "no-store" } : { next: { revalidate: 60 } }
    );
    if (sanityItems && sanityItems.length > 0) items = sanityItems;
  } catch {
    // Sanity unavailable — fall back to static content
  }

  return <GalleryPageClient items={items} />;
}
