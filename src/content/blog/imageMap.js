const blogImagesContext = require.context(
  "../../assets/blog",
  false,
  /\.(png|jpe?g|webp|svg)$/
);

export const BLOG_IMAGES = blogImagesContext.keys().reduce((acc, key) => {
  const filename = key.replace("./", "");
  acc[filename] = blogImagesContext(key);
  return acc;
}, {});
