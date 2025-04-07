import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";

function Contact() {
  return (
    <div className="min-h-screen bg-[#3864a4] text-white px-8 py-10 font-sans">
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

        <main className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <p className="text-lg text-blue-100 text-center mb-10">
            Got a question, idea, or want to work with us? Drop us a message below and we’ll get back to you within 24 hours.
          </p>

          <div className="bg-[#99b8da] text-[#203454] p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded border focus:outline-none text-[#203454]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded border focus:outline-none text-[#203454]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded border focus:outline-none text-[#203454]"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <p className="text-sm text-[#203454] italic">* indicates required field</p>

              <button
                type="submit"
                className="bg-[#203454] text-white font-semibold py-3 px-6 rounded shadow hover:bg-[#1a2e40] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Email contact below the form */}
          <div className="text-center mt-8 text-lg">
            <p>
              Or email us directly at{" "}
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

export default Contact;
