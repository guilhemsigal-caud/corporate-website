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
