import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full text-white/90">
      {/* Full-width glass strip */}
      <div className="mt-16 bg-white/5 backdrop-blur-xl">
        {/* Center the content inside */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid gap-4 py-5 sm:py-6 md:flex md:items-center md:justify-between">
            <p className="text-sm leading-relaxed">
              <span className="block font-medium text-white">
                Barker Longhorn Limited <span className="text-white/80">(Company No. 16825160)</span>
              </span>
              <span className="block text-white/70">
                Registered in England and Wales. Registered office: 10 Crew Lane Close, Southwell, NG25 0JA.
              </span>
            </p>

            <nav aria-label="Footer" className="flex flex-wrap items-center gap-3 text-sm">
              <Link to="/privacy" className="px-2 py-1 hover:underline underline-offset-4 decoration-white/40">Privacy</Link>
              <Link to="/cookies" className="px-2 py-1 hover:underline underline-offset-4 decoration-white/40">Cookies</Link>
              <Link to="/terms"   className="px-2 py-1 hover:underline underline-offset-4 decoration-white/40">Terms</Link>
              <Link to="/contact" className="px-2 py-1 hover:underline underline-offset-4 decoration-white/40">Contact</Link>
            </nav>
          </div>

          <div className="py-4">
            <p className="text-xs text-white/60">© {year} Barker Longhorn Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
