import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import aboutImage from "../assets/aboutus.png";

function About() {
  return (
    <div className="relative min-h-screen bg-[#3864a4] text-white px-8 py-10 font-sans overflow-hidden">
      {/* Absolute image in bottom-right of page */}
      <img
        src={aboutImage}
        alt="About Us Illustration"
        className="absolute bottom-4 right-4 max-h-[40rem] w-auto pointer-events-none select-none"
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center space-x-2 text-white text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-22 w-auto max-w-[20rem]" />
          </div>
          <nav className="space-x-6 text-white text-lg">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>

        {/* About Section (matches Home layout) */}
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              About
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6 max-w-xl">
              Barker Longhorn exists to empower small businesses with accessible AI and automation.
              We believe advanced tools shouldn’t be limited to enterprise-level budgets.
            </p>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6 max-w-xl">
              Our team builds clean, powerful, and reliable systems that save time, cut costs, and
              boost efficiency. From workflow automation to custom AI models, we tailor everything
              to your needs.
            </p>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-xl">
              We’re based in the UK but collaborate globally. If you’re ready to scale smarter — we’d love to hear from you.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
