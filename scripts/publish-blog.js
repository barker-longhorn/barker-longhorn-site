const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const mdDir = path.join(projectRoot, "public", "blog", "md");

function extractTitle(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const match = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    return match ? match[1] : path.basename(filePath, ".txt");
  } catch {
    return path.basename(filePath, ".txt");
  }
}

function getChangedBlogFiles() {
  const status = execSync("git status --porcelain public/blog/md", {
    cwd: projectRoot,
    encoding: "utf8",
  });
  return status
    .split("\n")
    .filter((line) => line.match(/\.(txt)$/) && line.trim())
    .map((line) => path.join(projectRoot, line.slice(3).trim()));
}

try {
  execSync("node scripts/update-blog-slugs.js", { stdio: "inherit", cwd: projectRoot });

  const changedFiles = getChangedBlogFiles();
  const titles = changedFiles.map(extractTitle);
  const commitMessage =
    titles.length > 0
      ? `PUBLISHING BLOG: ${titles.join(", ")}`
      : "PUBLISHING BLOG: update";

  execSync("git add public/blog/md public/blog/images src/content/blog/postSlugs.js src/content/blog/posts.js src/pages/BlogPost.js", {
    stdio: "inherit",
    cwd: projectRoot,
  });
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit", cwd: projectRoot });
  execSync("npm run deploy", { stdio: "inherit", cwd: projectRoot });
} catch (error) {
  process.exit(1);
}
