import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import logo from "../assets/logowhite.png";
import "../index.css";
import Footer from "../components/Footer";
import heroVideo from "../assets/BL2.mp4";
import { parseFrontmatter } from "../content/blog/parseFrontmatter";
import { resolveBlogImage } from "../content/blog/resolveBlogImage";

export default function BlogPost() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { slug } = useParams();
  const normalizedSlug = (slug || "").replace(/\/+$/, "");
  const [markdown, setMarkdown] = useState("");
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [missing, setMissing] = useState(false);

  const formattedDate = (() => {
    if (!postData?.date) return "";
    const dateObj = new Date(postData.date);
    if (Number.isNaN(dateObj.getTime())) return "";
    return dateObj.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  })();

  useEffect(() => {
    if (!normalizedSlug) {
      setMissing(true);
      setLoading(false);
      setMarkdown("");
      setPostData(null);
      return;
    }

    setLoading(true);
    setMissing(false);
    const base = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");
    const fileUrl = `${base}/blog/md/${normalizedSlug}.md`;

    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load markdown");
        return response.text();
      })
      .then((raw) => {
        const { data, content } = parseFrontmatter(raw);
        setPostData(data);
        setMarkdown(content);
        setLoading(false);
      })
      .catch(() => {
        setMissing(true);
        setLoading(false);
        setMarkdown("");
        setPostData(null);
      });
  }, [normalizedSlug]);

  const introText = markdown.trim() ? markdown.trim() : postData?.excerpt || "";
  const coverSrc = resolveBlogImage(postData?.cover);
  const image1Src = resolveBlogImage(postData?.image1);
  const image2Src = resolveBlogImage(postData?.image2);

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
        <main className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16 pt-[1.5rem] md:pt-[2.25rem]">
          <div className="max-w-[900px] mx-auto">
            <div className="mb-4">
              <Link to="/blog" className="text-sm text-white/60 hover:text-white">
                ← Back to Blog
              </Link>
            </div>
            {missing ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 md:px-8 py-10 text-center">
                <h1 className="text-2xl sm:text-3xl font-semibold">Article not found</h1>
                <p className="mt-3 text-white/70">
                  The article you’re looking for doesn’t exist yet.
                </p>
                <Link to="/blog" className="mt-6 inline-flex glass-pill glass-cta">
                  Back to Blog
                </Link>
              </div>
            ) : loading && !postData ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 md:px-8 py-10 text-center">
                <p className="text-sm text-white/70">Loading…</p>
              </div>
            ) : postData ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 md:px-8 py-7 md:py-9">
                <p className="text-sm text-white/70">{formattedDate}</p>
                <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                  {postData.title}
                </h1>
                {postData.author ? (
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                    {postData.authorImage ? (
                      <img
                        src={resolveBlogImage(postData.authorImage)}
                        alt={postData.author}
                        className="h-7 w-7 rounded-full object-cover"
                      />
                    ) : null}
                    <span>{postData.author}</span>
                  </div>
                ) : null}

                {coverSrc ? (
                  <div className="mt-6 rounded-2xl overflow-hidden bg-white/10">
                    <img
                      src={coverSrc}
                      alt={postData.title}
                      className="h-64 sm:h-72 w-full object-cover"
                    />
                  </div>
                ) : null}

                <div className="mt-6 text-white/80 leading-relaxed">
                  {loading ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-white/70">
                      Loading…
                    </div>
                  ) : (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="text-white/80">{children}</p>
                        ),
                      }}
                    >
                      {introText}
                    </ReactMarkdown>
                  )}
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-[260px_1fr] items-center">
                  <div className="w-[260px] h-[230px] rounded-2xl overflow-hidden bg-white/10">
                    {image1Src ? (
                      <img
                        src={image1Src}
                        alt={postData.section1Title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-white/5" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {postData.section1Title}
                    </h2>
                    <p className="mt-3 text-white/80 leading-relaxed">
                      {postData.section1Body}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-[1fr_260px] items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl font-semibold text-white">
                      {postData.section2Title}
                    </h2>
                    <p className="mt-3 text-white/80 leading-relaxed">
                      {postData.section2Body}
                    </p>
                  </div>
                  <div className="order-1 md:order-2 w-[260px] h-[230px] rounded-2xl overflow-hidden bg-white/10">
                    {image2Src ? (
                      <img
                        src={image2Src}
                        alt={postData.section2Title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-white/5" />
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </div>

      <div aria-hidden className="h-[12vh]" />
      <Footer />
    </div>
  );
}
