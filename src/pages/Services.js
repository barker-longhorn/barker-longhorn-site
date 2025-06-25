import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import { PopupButton } from "react-calendly";

function Services() {
  return (
    <div className="min-h-screen bg-[#3864a4] text-white px-4 sm:px-6 md:px-8 py-10 font-sans">
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-16">
          <div className="flex items-center space-x-2 text-white text-2xl font-bold">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto max-w-[14rem] sm:max-w-[18rem] md:max-w-[20rem]"
            />
          </div>
          <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-white text-lg text-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto text-center">
          {/* Info Text */}
          <h1 className="text-5xl font-bold mb-8">Services</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Start with a free consultation — no strings attached.
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Book a time with us and we’ll discuss how we can help automate and streamline your business.
          </p>

          {/* CTA Button */}
          <div className="mb-20 flex justify-center">
            <PopupButton
              url="https://calendly.com/barkerlonghorn"
              rootElement={document.getElementById("root")}
              text="Book a free consult"
              className="text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#203454] hover:text-white transition"
            />
          </div>

          {/* Contact Section */}
          <div className="text-center text-lg">
            <p>
              Questions? Email us today at{" "}
              <a
                href="mailto:enquiries@barkerlonghorn.com"
                className="underline hover:text-blue-200"
              >
                enquiries@barkerlonghorn.com
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Services;