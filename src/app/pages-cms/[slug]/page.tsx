import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { PAGE_QUERY } from "@/sanity/queries";
import { SectionRenderer } from "@/components/page-builder/SectionRenderer";

export default async function CmsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await client.fetch(PAGE_QUERY, { slug }, { next: { revalidate: 60 } });

  if (!page) notFound();

  return (
    <main>
      <SectionRenderer sections={page.sections ?? []} />
    </main>
  );
}
