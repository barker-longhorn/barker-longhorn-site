import { parseFrontmatter } from "./parseFrontmatter";

const markdownFiles = require.context("./md", false, /\.md$/);
let cachedPosts = null;
let inflight = null;

function parseSlug(key) {
  return key.replace("./", "").replace(".md", "");
}

export async function getPosts() {
  if (cachedPosts) return cachedPosts;
  if (inflight) return inflight;

  inflight = Promise.all(
    markdownFiles.keys().map(async (key) => {
      const fileUrl = markdownFiles(key);
      const response = await fetch(fileUrl);
      const raw = await response.text();
      const { data } = parseFrontmatter(raw);
      if (data.draft === true) {
        return null;
      }
      return {
        slug: parseSlug(key),
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        author: data.author || "",
        authorImage: data.authorImage || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        cover: data.cover || null,
      };
    })
  )
    .then((posts) =>
      posts
        .filter(Boolean)
        .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
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
