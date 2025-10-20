import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";

// same mirrored background as Home
import heroVideo from "../assets/BL2.mov";

function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
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

      {/* content layer */}
      <div className="relative z-20">
        {/* ===== Pill-shaped top bar — STATIC (scrolls away) ===== */}
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

              <nav className="flex items-center gap-3 md:gap-5">
                <Link to="/" className="nav-pill">Home</Link>
                <Link to="/about" className="nav-pill">About</Link>
                <Link to="/Products" className="nav-pill">Products</Link>
                <Link to="/contact" className="nav-pill">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* ===== Centered page content ===== */}
        <main className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16">
          <div className="max-w-3xl mx-auto text-center mt-10 md:mt-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Contact us
            </h1>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal">
              Got a question or want to work with us? Send a message and we’ll get back within 24 hours.
            </p>

            {/* Form container — centered glass box */}
            <div
              className="mt-8 rounded-2xl p-6 md:p-8 backdrop-blur-xl mx-auto text-left"
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <form
                action="https://formspree.io/f/xqapgygy"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Type your message here…"
                  />
                </div>

                <p className="text-sm text-white/60 italic">* indicates required field</p>

                <button type="submit" className="glass-pill glass-cta">
                  Send Message
                </button>
              </form>
            </div>

            {/* Direct email */}
            <div className="text-lg mt-8">
              <span className="text-white/80">Or email us directly at </span>
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

export default Contact;
