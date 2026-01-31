export function parseFrontmatter(raw) {
  let raw2 = String(raw || "");
  raw2 = raw2.replace(/\r\n/g, "\n");
  raw2 = raw2.replace(/^[\uFEFF\u200B\u200C\u200D\u2060]+/, "");

  const lines = raw2.split("\n");
  let startIndex = -1;
  const scanLimit = Math.min(lines.length, 50);
  for (let i = 0; i < scanLimit; i += 1) {
    if (lines[i].trim() === "---") {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1) {
    return { data: {}, content: raw2 };
  }

  let endIndex = -1;
  for (let j = startIndex + 1; j < lines.length; j += 1) {
    if (lines[j].trim() === "---") {
      endIndex = j;
      break;
    }
  }

  if (endIndex === -1) {
    return { data: {}, content: raw2 };
  }

  const data = {};
  for (let i = startIndex + 1; i < endIndex; i += 1) {
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
