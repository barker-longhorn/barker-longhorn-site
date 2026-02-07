import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";
import Footer from "../components/Footer";
import heroVideo from "../assets/BL2.mp4";

export default function Privacy() {
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
              <Link to="/Products" className="nav-pill">DOCRA</Link>
              <Link to="/blog" className="nav-pill">Blog</Link>
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
              <Link to="/Products" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>DOCRA</Link>
              <Link to="/blog" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link to="/contact" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <main className="relative z-20 px-4 sm:px-6 md:px-10 lg:px-16 pb-16 pt-[6.5rem] md:pt-[8rem]">
        <div className="ml-0 sm:ml-2 md:ml-4 lg:ml-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Privacy Policy</h1>

          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-white/80 leading-snug md:leading-normal text-justify">
            <strong>Barker Longhorn Limited</strong> (Company No. 16825160), registered in England and Wales.<br />
            Registered office: 10 Crew Lane Close, Southwell, NG25 0JA, United Kingdom.<br />
            Contact for privacy matters: <a href="mailto:enquiries@barkerlonghorn.com" className="underline">enquiries@barkerlonghorn.com</a>.
          </p>
          <p className="mt-3 text-base sm:text-lg text-white/70">Docra is a registered trademark in the UK.</p>

          <h2 className="mt-8 text-2xl font-semibold">What personal data we process</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><strong>Contact enquiries</strong> — name, email address, and your message submitted via our Contact form.</li>
            <li><strong>Technical/operational data</strong> — when the site is served and protected by our CDN/security provider, request data such as IP address, date/time, URLs visited, and user-agent (browser/device).</li>
            <li><strong>Fonts</strong> — We do not load third-party webfonts on barkerlonghorn.com; pages render using system fonts available on your device (e.g., San Francisco on Apple). The Formspree hosted thank-you page may use its own assets on formspree.io.</li>
          </ul>
          <p className="mt-3 text-white/80">We do not use Google Analytics and we do not collect special-category data.</p>

          <h2 className="mt-8 text-2xl font-semibold">Why we use your data (lawful bases)</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><strong>Respond to your enquiry</strong> — name, email, message (<em>contract</em> to respond to your request, or <em>legitimate interests</em> in efficient communication).</li>
            <li><strong>Operate and secure the site</strong> — IP, user-agent, timestamps, URLs, security signals (<em>legitimate interests</em> in running a secure, reliable website and preventing abuse).</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">Who processes your data (our processors)</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><strong>Cloudflare, Inc.</strong> — CDN and security (WAF/DDoS). Processes network metadata (e.g., IP address) to route traffic and protect the site.</li>
            <li><strong>Formspree</strong> — contact form processor; stores/relays your submission to our email. Their hosted thank-you page may use analytics on <em>their</em> domain.</li>
          </ul>
          <p className="mt-3 text-white/80">We do not sell personal data.</p>

          <h2 className="mt-8 text-2xl font-semibold">International transfers</h2>
          <p className="mt-3 text-white/80">
            Some processing by our providers may occur outside the UK/EEA. Where this happens, we rely on appropriate safeguards
            (for example, the UK Addendum to the EU Standard Contractual Clauses or adequacy decisions).
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Cookies &amp; similar technologies</h2>
          <p className="mt-3 text-white/80">
            We do <strong>not</strong> use non-essential cookies on barkerlonghorn.com. See our separate <Link to="/cookies" className="underline">Cookies</Link> page.
            If Cloudflare needs to distinguish human visitors from automated abuse, it may set strictly necessary security cookies
            (e.g., <code>__cf_bm</code>, <code>cf_clearance</code>) which are essential for site protection.
            Cloudflare Web Analytics / RUM and Turnstile are not enabled at this time.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">How long we keep data</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><strong>Enquiry emails</strong>: kept for up to <strong>12 months</strong> after we close the thread, then deleted or anonymised, unless needed longer to establish or defend legal claims.</li>
            <li><strong>Security/access logs</strong>: retained only as long as needed for security and troubleshooting (typically up to <strong>90 days</strong>, subject to provider rotation).</li>
          </ul>
          <p className="mt-3 text-white/80">If exact periods vary, we apply criteria such as purpose, sensitivity, and legal/operational requirements.</p>

          <h2 className="mt-8 text-2xl font-semibold">Your rights</h2>
          <p className="mt-3 text-white/80">
            You may have the right to access, correct, delete, restrict or object to our use of your personal data and, where applicable,
            to data portability. Where we rely on consent (not currently used on this site), you can withdraw it at any time.
            To exercise your rights, email <a href="mailto:enquiries@barkerlonghorn.com" className="underline">enquiries@barkerlonghorn.com</a>.
            You can also complain to the Information Commissioner’s Office (ICO) in the UK.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Children</h2>
          <p className="mt-3 text-white/80">This site is not intended for children and we do not knowingly collect data from children.</p>

          <h2 className="mt-8 text-2xl font-semibold">Changes to this notice</h2>
          <p className="mt-3 text-white/80">We may update this Privacy Policy from time to time. We will post the new version with a new “Last updated” date.</p>

          <p className="mt-8 text-sm text-white/60">Last updated: 4 November 2025</p>
        </div>
      </main>

      {/* push footer below the fold */}
      <div aria-hidden className="h-[30vh]" />
      <Footer />
    </div>
  );
}
