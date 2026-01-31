import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";
import Footer from "../components/Footer";

import heroVideo from "../assets/BL2.mp4";
import { getPosts } from "../content/blog/posts";
import { resolveBlogImage } from "../content/blog/resolveBlogImage";

function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    let mounted = true;
    getPosts()
      .then((items) => {
        if (mounted) {
          setPosts(items);
          setLoadingPosts(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setPosts([]);
          setLoadingPosts(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  const latestPosts = posts.slice(0, 3);

  const formatMonth = (isoDate) =>
    new Date(isoDate).toLocaleString("en-US", { month: "short" }).toUpperCase();
  const formatDay = (isoDate) =>
    new Date(isoDate).toLocaleString("en-US", { day: "2-digit" });

  const resolveCover = (cover) => {
    const resolved = resolveBlogImage(cover);
    return resolved || null;
  };

  return (
    <div className="relative min-h-[120vh] w-full bg-black text-white overflow-x-hidden">
      {/* Background video */}
      <div aria-hidden className="absolute inset-0">
        <video
          className="h-full w-full object-cover -scale-x-100 origin-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* readability overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Content layer */}
      <div className="relative z-20">
        {/* Pill-shaped top bar — static (scrolls away) */}
        <header className="mt-10 md:mt-12 mx-6 md:mx-10">
          <div className="top-pill">
            <div className="flex items-center justify-between h-14 md:h-16 pl-8 sm:pl-10 md:pl-12 pr-5 sm:pr-6 md:pr-8">
              <div className="flex items-center mr-2">
                <img
                  src={logo}
                  alt="Barker-Longhorn"
                  className="h-10 sm:h-11 md:h-12 w-auto"
                />
              </div>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-3 md:gap-5">
                <Link to="/" className="nav-pill">Home</Link>
                <Link to="/about" className="nav-pill">About</Link>
                <Link to="/Products" className="nav-pill">Products</Link>
                <Link to="/blog" className="nav-pill">Blog</Link>
                <Link to="/contact" className="nav-pill">Contact</Link>
              </nav>

              {/* Mobile hamburger */}
              <button
                className="md:hidden nav-pill"
                aria-label="Open navigation"
                onClick={() => setMenuOpen(v => !v)}
              >
                <span className="block w-6 h-[2px] bg-white mb-1.5" />
                <span className="block w-6 h-[2px] bg-white mb-1.5" />
                <span className="block w-6 h-[2px] bg-white" />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu panel: rounded-rectangle blur behind stacked links */}
        {menuOpen && (
          <div className="mx-6 md:hidden mt-3">
            <div
              className="backdrop-blur-xl rounded-2xl p-2"
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex flex-col">
                <Link to="/" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/Products" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Products</Link>
                <Link to="/blog" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Blog</Link>
                <Link to="/contact" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="px-4 sm:px-6 md:px-10 lg:px-16 pb-12 pt-[1.5rem] md:pt-[2.25rem]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                Blog
              </h1>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal">
                See our latest updates here ↓
              </p>
            </div>

            <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 md:px-8 py-5 border-b border-white/10">
                <h2 className="text-lg sm:text-xl font-semibold">Latest</h2>
                <div className="mt-3 sm:mt-0 flex items-center gap-2 text-sm text-white/70">
                  <Link to="/blog/all" className="glass-pill glass-ghost">View all articles</Link>
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {loadingPosts ? (
                  <div className="px-6 md:px-8 py-6 text-sm text-white/70">
                    Loading…
                  </div>
                ) : (
                  latestPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="px-4 md:px-5 py-3 md:py-4"
                    >
                      <div className="grid gap-3 md:gap-4 md:grid-cols-[56px_1fr]">
                        <div className="flex md:flex-col items-center md:items-start gap-2 text-white/70">
                          <span className="text-xs uppercase tracking-[0.3em]">
                            {post.dateMs ? formatMonth(post.date) : ""}
                          </span>
                          <span className="text-3xl font-semibold text-white">
                            {post.dateMs ? formatDay(post.date) : ""}
                          </span>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-[360px_1fr] items-center">
                          {resolveCover(post.coverName) ? (
                            <div className="rounded-2xl overflow-hidden bg-white/10 max-w-full">
                              <img
                                src={resolveCover(post.coverName)}
                                alt={post.title}
                                className="h-40 w-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="h-40 w-full rounded-2xl bg-white/5" />
                          )}

                          <div>
                            <h3 className="text-xl font-semibold leading-snug">
                              <Link to={`/blog/${post.slug}`} className="hover:underline">
                                {post.title}
                              </Link>
                            </h3>
                            <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                              {post.authorImage && resolveCover(post.authorImage) ? (
                                <img
                                  src={resolveCover(post.authorImage)}
                                  alt={post.author || "Author"}
                                  className="h-6 w-6 rounded-full object-cover"
                                />
                              ) : null}
                              <span>
                              {post.author ? `${post.author}` : ""}
                              {post.author && post.dateMs ? " · " : ""}
                              {post.dateMs
                                ? new Date(post.date).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  })
                                : ""}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-white/70">
                              {post.excerpt}
                            </p>
                            <Link
                              to={`/blog/${post.slug}`}
                              className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                            >
                              Read more
                              <span aria-hidden>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </section>

            <div className="mt-6 flex justify-center">
              <Link to="/blog/all" className="glass-pill glass-cta">View all articles</Link>
            </div>
          </div>
        </main>
      </div>

      {/* push footer below the fold to match Home */}
      <div aria-hidden className="h-[10vh]" />
      <Footer />
    </div>
  );
}

export default Blog;
