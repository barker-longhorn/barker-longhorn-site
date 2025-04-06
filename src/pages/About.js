import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";

function About() {
  return (
    <div className="min-h-screen bg-[#3864a4] text-white px-8 py-10 font-sans">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar (same as Home) */}
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

        {/* About Content */}
        <main className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-6">
            Barker-Longhorn exists to empower small businesses with accessible AI and automation. 
            We believe that advanced tools shouldn’t be limited to enterprise-level budgets.
          </p>
          <p className="text-xl text-blue-100 leading-relaxed mb-6">
            Our team builds clean, powerful, and reliable systems that save time, cut costs, and boost efficiency. 
            From workflow automation to custom AI models, we tailor everything to your business needs.
          </p>
          <p className="text-xl text-blue-100 leading-relaxed">
            We're based in the UK but collaborate globally. If you’re ready to scale smarter — we’d love to hear from you.
          </p>
        </main>
      </div>
    </div>
  );
}

export default About;
