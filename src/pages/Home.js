import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logowhite.png";
import { Link } from "react-router-dom";

// BG video (not rotated)
import heroVideo from "../assets/BL2.mp4";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white overflow-x-hidden">
      {/* Background video */}
      <div aria-hidden className="absolute inset-0">
        <video
          className="h-full w-full object-cover rotate-0 -scale-x-100 origin-center"
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

      {/* Motion-reduce fallback */}
      <div className="pointer-events-none absolute inset-0 hidden bg-black motion-reduce:block" />

      {/* ===== Pill-shaped top bar (moved down) ===== */}
      <header className="fixed z-30 top-10 inset-x-6 md:top-12 md:inset-x-10">
        <div className="top-pill">
          <div className="flex items-center justify-between h-14 md:h-16 pl-8 sm:pl-10 md:pl-12 pr-5 sm:pr-6 md:pr-8">
            <div className="flex items-center mr-2">
              <img
                src={logo}
                alt="Barker-Longhorn"
                className="h-10 sm:h-11 md:h-12 w-auto"
              />
            </div>

            {/* Desktop nav (unchanged) */}
            <nav className="hidden md:flex items-center gap-3 md:gap-5">
              <Link to="/"         className="nav-pill">Home</Link>
              <Link to="/about"    className="nav-pill">About</Link>
              <Link to="/Products" className="nav-pill">Products</Link>
              <Link to="/contact"  className="nav-pill">Contact</Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden nav-pill"
              aria-label="Open navigation"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="block w-6 h-[2px] bg-white mb-1.5" />
              <span className="block w-6 h-[2px] bg-white mb-1.5" />
              <span className="block w-6 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel: full blurred background behind stacked links */}
      {menuOpen && (
        <div className="fixed z-30 top-24 inset-x-6 md:hidden">
          <div
            className="backdrop-blur-xl rounded-2xl p-2"
            style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
          >
            <div className="flex flex-col">
              <Link to="/" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/Products" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link to="/contact" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}

      {/* Content — pushed further down to clear header */}
      <div className="relative z-20 pt-[11rem] md:pt-[13rem] px-4 sm:px-6 md:px-10 lg:px-16 pb-12">
        <main className="mt-8 md:mt-10 grid grid-cols-1">
          {/* HERO: left-aligned, shifted slightly right, further down */}
          <div className="ml-0 sm:ml-2 md:ml-4 lg:ml-6 max-w-3xl mt-6 md:mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Clarity from chaos.
            </h1>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl leading-snug md:leading-normal text-justify">
              Turn sprawling data rooms into clean, citation-backed documents automatically and privately with DOCRA by Barker Longhorn.
            </p>

            {/* Individual blur-only CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/Products" className="glass-pill glass-cta">Get Started</Link>
              <Link to="/about"    className="glass-pill glass-ghost">Learn More</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
