export function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const lines = raw.split("\n");
  const endIndex = lines.findIndex((line, idx) => idx > 0 && line.trim() === "---");

  if (endIndex === -1) {
    return { data: {}, content: raw };
  }

  const data = {};
  for (let i = 1; i < endIndex; i += 1) {
    const line = lines[i].trim();
    if (!line) continue;
    const sepIndex = line.indexOf(":");
    if (sepIndex === -1) continue;
    const key = line.slice(0, sepIndex).trim();
    let value = line.slice(sepIndex + 1).trim();

    if (key === "draft") {
      const lower = value.toLowerCase();
      if (lower === "true") {
        data[key] = true;
        continue;
      }
      if (lower === "false") {
        data[key] = false;
        continue;
      }
    }

    if (key === "tags") {
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          const parsed = JSON.parse(value);
          data[key] = Array.isArray(parsed)
            ? parsed.map((item) => String(item))
            : [];
        } catch (error) {
          data[key] = [];
        }
        continue;
      }

      data[key] = value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      continue;
    }

    if (
      (value.startsWith("\"") && value.endsWith("\"")) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  const content = lines.slice(endIndex + 1).join("\n").trimStart();
  return { data, content };
}
