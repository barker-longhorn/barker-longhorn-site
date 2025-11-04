import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import logo from "../assets/logowhite.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// BG video (not rotated)
import heroVideo from "../assets/BL2.mp4";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  // --- Minimal autoplay fallback for iOS + Low Power Mode ---
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Must be muted and playsinline for iOS autoplay
    v.muted = true;

    const tryPlay = () => {
      v.play().catch(() => {
        // Defer until first user interaction
        const onInteract = () => {
          v.play().finally(() => {
            window.removeEventListener("touchstart", onInteract);
            window.removeEventListener("click", onInteract);
          });
        };
        window.addEventListener("touchstart", onInteract, { once: true });
        window.addEventListener("click", onInteract, { once: true });
      });
    };

    tryPlay();

    // Resume when page becomes visible or regains focus (handles tab switches)
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        v.play().catch(() => {});
      }
    };
    const onFocus = () => v.play().catch(() => {});

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", onFocus);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", onFocus);
    };
  }, []);
  // --- End autoplay fallback ---

  return (
    <div className="relative min-h-[120vh] w-full bg-black text-white overflow-x-hidden">
      {/* Background video */}
      <div aria-hidden className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover rotate-0 -scale-x-100 origin-center"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noplaybackrate"
          preload="auto"
          // @ts-ignore for older WebKit
          webkit-playsinline="true"
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
      <header className="mt-10 md:mt-12 mx-6 md:mx-10 relative z-30">
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

      {/* Mobile menu panel: full blurred background behind stacked links */}
      {menuOpen && (
        <div className="mx-6 md:hidden mt-3 relative z-30">
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
              Turn sprawling data rooms into clean, citation-backed documents automatically and privately with DOCRA™ by Barker Longhorn™.
            </p>

            {/* Individual blur-only CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/Products" className="glass-pill glass-cta">Get Started</Link>
              <Link to="/about" className="glass-pill glass-ghost">Learn More</Link>
            </div>
          </div>
        </main>
      </div>

      {/* Footer is below the fold thanks to 120vh wrapper */}
      <div aria-hidden className="h-[30vh]" />
      <Footer />
    </div>
  );
}

export default Home;
