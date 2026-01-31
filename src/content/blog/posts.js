import { parseFrontmatter } from "./parseFrontmatter";
import { POST_SLUGS } from "./postSlugs";
let cachedPosts = null;
let inflight = null;

function buildMdUrl(slug) {
  const base = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");
  return `${base}/blog/md/${slug}.txt`;
}

export async function getPosts() {
  if (cachedPosts) return cachedPosts;
  if (inflight) return inflight;

  inflight = Promise.all(
    POST_SLUGS.map(async (slug) => {
      try {
        const fileUrl = buildMdUrl(slug);
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`);
        }
        const raw = await response.text();
        const { data } = parseFrontmatter(raw);
        if (data.draft === true) {
          return null;
        }
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
          console.warn(`Failed to load blog post for ${slug}`, error);
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
