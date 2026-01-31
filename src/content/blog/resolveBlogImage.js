import { BLOG_IMAGES } from "./imageMap";

export function resolveBlogImage(name) {
  if (!name) return null;
  return BLOG_IMAGES[name] || null;
}
