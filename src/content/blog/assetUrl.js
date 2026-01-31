export function assetUrl(mod) {
  if (!mod) return "";
  if (typeof mod === "string") return mod;
  if (typeof mod === "object" && typeof mod.default === "string") {
    return mod.default;
  }
  return "";
}
