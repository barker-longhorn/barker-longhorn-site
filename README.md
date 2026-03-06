# Barker Longhorn Site

A React-based marketing/landing site for Barker Longhorn.

## 🚀 Live Site

[https://domlonghorn.github.io/barker-longhorn-site](https://domlonghorn.github.io/barker-longhorn-site)

## 🔗 LinkedIn Share Links (HashRouter)

To share on LinkedIn (which drops everything after `#`), use the `?p=` format:

- Replace `#/` with `?p=/`
- Example: `https://www.barkerlonghorn.com/?p=/blog/your-slug`

---

## 🛠️ Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node)

### Install dependencies

```bash
npm install
```

### Run Locally

```bash
npm start
```

### Deploy on the server
```bash
npm deploy
```

---

## 📝 Publishing a Blog Post

1. Drop your `.txt` file into `public/blog/md/`
2. Add any images to `public/blog/images/`
3. Run:

```bash
node scripts/publish-blog.js
```

This auto-updates the slug registry, commits, and deploys.

**Scheduling:** Set `draft: true` with a future `date` in the frontmatter — the post will appear automatically on that date without any further action.
