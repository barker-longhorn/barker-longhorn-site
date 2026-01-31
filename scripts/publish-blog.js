const { execSync } = require("child_process");

const titleArg = process.argv.slice(2).join(" ").trim();
if (!titleArg) {
  console.error("Usage: node scripts/publish-blog.js \"Post Title\"");
  process.exit(1);
}

const commitMessage = `PUBLISHING BLOG: ${titleArg}`;

try {
  execSync("node scripts/update-blog-slugs.js", { stdio: "inherit" });
  execSync("git add public/blog/md public/blog/images src/content/blog/postSlugs.js", {
    stdio: "inherit",
  });
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
  execSync("npm run deploy", { stdio: "inherit" });
} catch (error) {
  process.exit(1);
}
