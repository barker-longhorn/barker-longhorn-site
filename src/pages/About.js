import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import aboutImage from "../assets/aboutus.png";

function About() {
  return (
    <div className="min-h-screen bg-[#3864a4] text-white px-4 sm:px-6 md:px-8 pt-4 pb-10 font-sans overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-12">
          <div className="flex items-center space-x-2 text-white text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-20 w-auto max-w-[14rem] sm:max-w-[18rem] md:max-w-[20rem]" />
          </div>
          <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-white text-lg text-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>

        {/* About Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              About
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              Barker Longhorn exists to empower small businesses with accessible AI and automation.
              We believe advanced tools shouldn’t be limited to enterprise-level budgets.
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              Our team builds clean, powerful, and reliable systems that save time, cut costs, and
              boost efficiency. From workflow automation to custom AI models, we tailor everything
              to your needs.
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 leading-relaxed max-w-xl mx-auto md:mx-0">
              We’re based in the UK but collaborate globally. If you’re ready to scale smarter — we’d love to hear from you.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutImage}
              alt="About Us Illustration"
              className="max-h-[20rem] sm:max-h-[30rem] md:max-h-[40rem] w-auto pointer-events-none select-none"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
