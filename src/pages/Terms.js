import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";
import Footer from "../components/Footer";
import heroVideo from "../assets/BL2.mp4";

export default function Terms() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Header (static) */}
      <header className="mt-10 md:mt-12 mx-6 md:mx-10 relative z-30">
        <div className="top-pill">
          <div className="flex items-center justify-between h-14 md:h-16 pl-8 sm:pl-10 md:pl-12 pr-5 sm:pr-6 md:pr-8">
            <img src={logo} alt="Barker-Longhorn" className="h-10 sm:h-11 md:h-12 w-auto" />
            <nav className="hidden md:flex items-center gap-3 md:gap-5">
              <Link to="/" className="nav-pill">Home</Link>
              <Link to="/about" className="nav-pill">About</Link>
              <Link to="/Products" className="nav-pill">Products</Link>
              <Link to="/contact" className="nav-pill">Contact</Link>
            </nav>
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

      {/* Mobile menu */}
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

      {/* Content */}
      <main className="relative z-20 px-4 sm:px-6 md:px-10 lg:px-16 pb-16 pt-[6.5rem] md:pt-[8rem]">
        <div className="ml-0 sm:ml-2 md:ml-4 lg:ml-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Terms of Use</h1>

          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal text-justify">
            These Terms govern your use of <strong>barkerlonghorn.com</strong>. By using this site you agree to them.
            If you do not agree, please do not use the site. We may update these Terms from time to time; the updated
            version applies from its “Last updated” date below.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Who we are</h2>
          <p className="mt-3 text-white/80">
            Barker Longhorn Limited (Company No. 16825160), registered in England and Wales.<br />
            Registered office: 10 Crew Lane Close, Southwell, NG25 0JA, United Kingdom.<br />
            Contact: <a className="underline" href="mailto:enquiries@barkerlonghorn.com">enquiries@barkerlonghorn.com</a>.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Using the site</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>We grant you a limited, non-exclusive, revocable licence to access and view the site for your own use.</li>
            <li>You must not use the site unlawfully or attempt to disrupt, scrape, crawl, reverse engineer,
              or bypass security or access controls.</li>
            <li>You must not upload or transmit anything harmful, infringing, or otherwise unlawful via our contact forms.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">Intellectual property</h2>
          <p className="mt-3 text-white/80">
            The site and its contents (including text, graphics, logos and trademarks) are owned by us or our licensors.
            <strong> BARKER LONGHORN™</strong> and <strong>DOCRA™</strong> are trademarks of Barker Longhorn Limited.
            All other trademarks are the property of their respective owners. Except as permitted by law, you must not copy,
            adapt, or reuse content without permission.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Information only</h2>
          <p className="mt-3 text-white/80">
            The site is provided for general information only. It is not legal, financial, or other professional advice.
            You should obtain specific advice before taking, or refraining from, any action based on the site’s content.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Third-party links</h2>
          <p className="mt-3 text-white/80">
            The site may link to third-party sites. We are not responsible for their content, policies, or availability.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Viruses and security</h2>
          <p className="mt-3 text-white/80">
            We do not guarantee that the site will be secure or free from bugs or viruses. You should use your own
            up-to-date antivirus software and take care when downloading or opening content.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Our responsibility to you</h2>
          <p className="mt-3 text-white/80">
            We do not exclude or limit liability where it would be unlawful to do so, including for death or personal injury
            caused by negligence, or for fraud or fraudulent misrepresentation. Subject to that, and to the maximum extent
            permitted by law, we exclude all implied warranties and we will not be liable for: (a) loss of profit, revenue,
            or business; (b) loss of data or corruption; or (c) any indirect or consequential loss arising in connection with the site.
            Your statutory rights (including as a consumer, if applicable) are not affected.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Suspension and termination</h2>
          <p className="mt-3 text-white/80">
            We may suspend or terminate access if you breach these Terms or if we need to for security, legal or operational reasons.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Governing law</h2>
          <p className="mt-3 text-white/80">
            These Terms, and any non-contractual obligations arising out of them, are governed by the laws of England and Wales.
            The courts of England and Wales have exclusive jurisdiction, except that you may have the right to bring proceedings
            in your local court if you are a consumer.
          </p>

          <p className="mt-8 text-sm text-white/60">Last updated: 4 Nov 2025</p>

          <p className="mt-6 text-white/60 text-sm">
            See also our <Link to="/privacy" className="underline">Privacy</Link> and <Link to="/cookies" className="underline">Cookies</Link> pages.
          </p>
        </div>
      </main>

      {/* spacer to push footer below the fold */}
      <div aria-hidden className="h-[30vh]" />
      <Footer />
    </div>
  );
}
