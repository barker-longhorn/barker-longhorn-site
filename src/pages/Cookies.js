import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";
import Footer from "../components/Footer";
import heroVideo from "../assets/BL2.mp4";

export default function Cookies() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-[120vh] w-full bg-black text-white overflow-x-hidden">
      <div aria-hidden className="absolute inset-0">
        <video className="h-full w-full object-cover -scale-x-100 origin-center" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <header className="mt-10 md:mt-12 mx-6 md:mx-10 relative z-30">
        <div className="top-pill">
          <div className="flex items-center justify-between h-14 md:h-16 pl-8 sm:pl-10 md:pl-12 pr-5 sm:pr-6 md:pr-8">
            <img src={logo} alt="Barker-Longhorn" className="h-10 sm:h-11 md:h-12 w-auto" />
            <nav className="hidden md:flex items-center gap-3 md:gap-5">
              <Link to="/" className="nav-pill">Home</Link>
              <Link to="/about" className="nav-pill">About</Link>
              <Link to="/Products" className="nav-pill">Products</Link>
              <Link to="/blog" className="nav-pill">Blog</Link>
              <Link to="/contact" className="nav-pill">Contact</Link>
            </nav>
            <button className="md:hidden nav-pill" aria-label="Open navigation" onClick={() => setMenuOpen(v => !v)}>
              <span className="block w-6 h-[2px] bg-white mb-1.5" /><span className="block w-6 h-[2px] bg-white mb-1.5" /><span className="block w-6 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mx-6 md:hidden mt-3 relative z-30">
          <div className="backdrop-blur-xl rounded-2xl p-2" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
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

      <main className="relative z-20 px-4 sm:px-6 md:px-10 lg:px-16 pb-16 pt-[6.5rem] md:pt-[8rem]">
        <div className="ml-0 sm:ml-2 md:ml-4 lg:ml-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Cookies</h1>

          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal text-justify">
            We don’t use non-essential cookies on barkerlonghorn.com. The site may set strictly necessary, short-lived
            technical cookies for security (e.g., to distinguish real visitors from bots). These do not require consent.
          </p>

          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <strong>Strictly necessary (security)</strong> — Cloudflare may set cookies such as
              <code className="mx-1">__cf_bm</code> and <code className="mx-1">cf_clearance</code> when needed to protect the site
              (bot detection/challenges). They are essential and expire automatically.
            </li>
            <li>
              <strong>Analytics/advertising</strong> — Not used. Cloudflare Web Analytics / RUM and Turnstile are not enabled.
            </li>
            <li>
              <strong>Third-party pages</strong> — Our contact form uses a provider (Formspree). If a hosted thank-you page on
              <em> formspree.io</em> is shown, that page may use its own cookies under their policy.
            </li>
          </ul>

          <p className="mt-8 text-sm text-white/60">Last updated: 4 Nov 2025</p>
        </div>
      </main>

      <div aria-hidden className="h-[30vh]" />
      <Footer />
    </div>
  );
}
