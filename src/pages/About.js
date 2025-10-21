import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";

// same background as other pages
import heroVideo from "../assets/BL2.mp4";

function About() {
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

              {/* Desktop nav (unchanged layout) */}
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
                onClick={() => setMenuOpen((v) => !v)}
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

        {/* Main — adjusted up to match Home hero placement */}
        <main className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16 pt-[6.5rem] md:pt-[8rem]">
          <div className="ml-0 sm:ml-2 md:ml-4 lg:ml-6 max-w-3xl mt-4 md:mt-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              About
            </h1>

            <p className="mt-5 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal">
              Barker Longhorn is an applied-AI studio focused on clarity and privacy. We build software that transforms messy, fast-moving information into publish-ready, defensible docs sourced from your own files. Our ethos is evidence-first: every claim should trace back to a source that you control.
            </p>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal">
              We favor small, sharp tools over bloated platforms so that your organisation moves faster, and you can verify every word. We design for control and auditability first: your environment, your sources, your standards.
            </p>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal">
              We’re based in the UK but collaborate globally. If you’re ready to scale smarter —
              we’d love to hear from you.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
