import { parseFrontmatter } from "./parseFrontmatter";
import { assetUrl } from "./assetUrl";

const mdContext = require.context("./md", false, /\.md$/);
let cachedPosts = null;
let inflight = null;

function parseSlug(key) {
  return key.replace("./", "").replace(".md", "");
}

export async function getPosts() {
  if (cachedPosts) return cachedPosts;
  if (inflight) return inflight;

  const keys = mdContext.keys();
  inflight = Promise.all(
    keys.map(async (key) => {
      try {
        const fileUrl = assetUrl(mdContext(key));
        if (!fileUrl) return null;
        const response = await fetch(fileUrl);
        const raw = await response.text();
        const { data } = parseFrontmatter(raw);
        if (data.draft === true) {
          return null;
        }
        const slug = parseSlug(key);
        const title = data.title || slug;
        const dateStr = (data.date || "").trim();
        const dateObj = dateStr ? new Date(dateStr) : null;
        const dateOk = dateObj && !Number.isNaN(dateObj.getTime());
        return {
          slug,
          title,
          author: data.author || "",
          authorImage: data.authorImage || "",
          excerpt: data.excerpt || "",
          date: dateStr,
          dateMs: dateOk ? dateObj.getTime() : 0,
          coverName: data.cover || "",
        };
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(`Failed to load blog post for ${key}`, error);
        }
        return null;
      }
    })
  )
    .then((posts) =>
      posts
        .filter(Boolean)
        .sort((a, b) => (b.dateMs || 0) - (a.dateMs || 0))
    )
    .then((posts) => {
      cachedPosts = posts;
      inflight = null;
      return posts;
    })
    .catch((error) => {
      inflight = null;
      throw error;
    });

  return inflight;
}
