export function resolveBlogImage(name) {
  if (!name) return null;
  if (
    name.startsWith("http") ||
    name.startsWith("/") ||
    name.startsWith("data:") ||
    name.startsWith("blob:")
  ) {
    return name;
  }
  const base = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");
  return `${base}/blog/images/${name}`;
}
