import { BLOG_IMAGES } from "./imageMap";
import { assetUrl } from "./assetUrl";

export function resolveBlogImage(name) {
  if (!name) return null;
  return assetUrl(BLOG_IMAGES[name]) || null;
}
