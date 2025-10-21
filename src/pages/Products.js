import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";
// import { PopupButton } from "react-calendly"; // ← commented out

// same mirrored background as the other pages
import heroVideo from "../assets/BL2.mp4";

function Products() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white overflow-x-hidden">
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
                <Link to="/contact" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16 pt-[6.5rem] md:pt-[8rem]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Introducing [ALPHA]
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
              Evidence-first AI for clear reports, grounded in your sources.
            </h2>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal">
              Your data room is sprawling and fast-moving. [ALPHA] makes it usable. It listens for changes, combs the whole repository, and compresses what it finds into a verifiable evidence map. From there, you set a few focus terms, and [ALPHA] assembles a clean fact ledger that covers every matching source, collapses duplicates, and preserves citations. The result is a publication-ready document where every statement is traced to its source.
            </p>

            {/* === Calendly CTA temporarily disabled === */}
            {/*
            <div className="mt-10 flex justify-center">
              <PopupButton
                url="https://calendly.com/barkerlonghorn"
                rootElement={document.getElementById('root') as HTMLElement}
                text="Book a free consult"
                className="glass-pill glass-cta"
              />
            </div>
            */}

            {/* Direct email as an alternative */}
            <div className="text-lg mt-10">
              <span className="text-white/80">Questions? Email us at </span>
              <a
                href="mailto:enquiries@barkerlonghorn.com"
                className="underline hover:text-white"
              >
                enquiries@barkerlonghorn.com
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
