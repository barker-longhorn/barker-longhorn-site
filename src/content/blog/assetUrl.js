export function assetUrl(mod) {
  if (!mod) return "";
  let url = "";
  if (typeof mod === "string") url = mod;
  else if (typeof mod === "object" && typeof mod.default === "string") {
    url = mod.default;
  } else if (
    typeof mod === "object" &&
    mod.default &&
    typeof mod.default.default === "string"
  ) {
    url = mod.default.default;
  }

  if (!url) return "";

  if (
    url.startsWith("http") ||
    url.startsWith("/") ||
    url.startsWith("data:") ||
    url.startsWith("blob:")
  ) {
    return url;
  }

  const base = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");
  return `${base}/${url}`.replace(/\/{2,}/g, "/");
}
