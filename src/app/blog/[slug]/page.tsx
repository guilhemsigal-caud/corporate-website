import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getClient } from "@/sanity/client";
import { BLOG_POSTS_QUERY, BLOG_POST_QUERY } from "@/sanity/queries";
import { BLOG_POSTS } from "@/content/blog";
import type { BlogPost } from "@/content/blog";
import { BlogPostClient } from "./BlogPostClient";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const sanity = getClient(isEnabled);
  const fetchOptions = isEnabled ? { cache: "no-store" as const } : { next: { revalidate: 60 } };

  let post: BlogPost | undefined;
  let allPosts: BlogPost[] = BLOG_POSTS;

  try {
    const [sanityPost, sanityAll] = await Promise.all([
      sanity.fetch<BlogPost>(BLOG_POST_QUERY, { slug }, fetchOptions),
      sanity.fetch<BlogPost[]>(BLOG_POSTS_QUERY, {}, fetchOptions),
    ]);
    if (sanityPost) post = sanityPost;
    if (sanityAll?.length) allPosts = sanityAll;
  } catch {
    // Sanity unavailable — fall back to static content
  }

  if (!post) post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Slice generously — BlogPostClient filters this by the viewer's language client-side and takes the first 3.
  const related = allPosts.filter((p) => p.slug !== slug && p.category === post!.category).slice(0, 12);

  return <BlogPostClient post={post} related={related} />;
}
