export function assetUrl(mod) {
  if (!mod) return "";
  let url = "";
  if (typeof mod === "string") url = mod;
  else if (typeof mod === "object" && typeof mod.default === "string") {
    url = mod.default;
  }
  if (!url) return "";

  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("data:") ||
    url.startsWith("blob:")
  ) {
    return url;
  }

  const base = (process.env.PUBLIC_URL || "").trim();

  if (url.startsWith("/")) {
    if (!base) return url;
    try {
      return new URL(url, base).toString();
    } catch (error) {
      return url;
    }
  }

  if (!base) return `/${url}`;

  try {
    const baseWithSlash = base.endsWith("/") ? base : `${base}/`;
    return new URL(url, baseWithSlash).toString();
  } catch (error) {
    return `/${url}`;
  }
}
