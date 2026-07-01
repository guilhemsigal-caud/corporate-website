export const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0] {
  title,
  seoTitle,
  seoDescription,
  sections[] {
    ...,
    _type == "splitSection" => {
      ...,
      "image": image { "asset": asset-> { url }, alt }
    }
  }
}`;

export const BLOG_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  category,
  "date": publishedAt,
  readTime,
  "accent": coalesce(accent, "#5b8cff"),
  author,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  content,
  fr
}`;

export const GALLERY_ITEMS_QUERY = `*[_type == "galleryItem" && defined(slug.current)] | order(category asc, name asc) {
  "slug": slug.current,
  name,
  category,
  description,
  "accent": coalesce(accent, "#5b8cff"),
  tags,
  kpis,
  demos,
  fr
}`;

export const GALLERY_ITEM_QUERY = `*[_type == "galleryItem" && slug.current == $slug][0] {
  "slug": slug.current,
  name,
  category,
  description,
  "accent": coalesce(accent, "#5b8cff"),
  tags,
  kpis,
  demos,
  fr
}`;

export const BLOG_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  excerpt,
  category,
  "date": publishedAt,
  readTime,
  "accent": coalesce(accent, "#5b8cff"),
  author,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  content[] {
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "alt": alt,
      "caption": caption
    }
  },
  fr {
    title,
    excerpt,
    readTime,
    content[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
        "caption": caption
      }
    }
  }
}`;
