import React from "react";
import "../index.css";
import logo from "../assets/logowhite.png";
import pcIcon from "../assets/pcicon.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen bg-[#3864a4] text-white px-8 py-10 font-sans overflow-hidden">
      {/* Absolute image in bottom-right of page */}
      <img
        src={pcIcon}
        alt="Person at computer illustration"
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

        {/* Hero Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              AI & Automation<br />for Small Businesses
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-xl">
              We provide automation solutions to help small businesses save time,
              reduce costs, and improve efficiency.
            </p>
            <Link to="/services">
              <button className="text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#203454] hover:text-white transition">
                Get Started
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
