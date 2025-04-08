import React from "react";
import "../index.css";
import logo from "../assets/logowhite.png";
import pcIcon from "../assets/pcicon.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#3864a4] text-white px-4 sm:px-6 md:px-8 pt-4 pb-10 font-sans">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-10">
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

        {/* Hero Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              AI & Automation<br />for Small Businesses
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-6 max-w-xl mx-auto md:mx-0">
              We provide automation solutions to help small businesses save time,
              reduce costs, and improve efficiency.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={pcIcon}
              alt="Person at computer illustration"
              className="max-h-[18rem] sm:max-h-[24rem] md:max-h-[35rem] w-auto pointer-events-none select-none"
            />
          </div>
        </main>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link to="/services">
            <button className="w-full sm:w-auto text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#203454] hover:text-white transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
