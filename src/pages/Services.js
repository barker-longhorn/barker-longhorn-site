import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";

function Services() {
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

        {/* Services Section */}
        <main className="max-w-6xl mx-auto">

          {/* Info Text */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Start with a free consultation and a 1-week demo — no strings attached.
            </h2>
            <p className="text-lg text-blue-100">
              If it’s a good fit, choose the plan that works for you.
            </p>
          </div>

          <h1 className="text-5xl font-bold mb-16 text-center">Our Plans</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* BASIC */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full min-h-[32rem] flex flex-col rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#99b8da] text-center py-4">
                  <h2 className="text-3xl font-bold text-[#203454]">Basic</h2>
                </div>

                <div className="bg-white text-[#203454] flex-grow px-6 py-8 text-center flex flex-col justify-between">
                  <p className="mb-8 text-base">
                    A lightweight plan designed for individuals or businesses just getting started with automation.
                  </p>
                </div>

                <div className="bg-[#99b8da] text-center py-4 text-xl font-bold text-[#203454]">
                  £10/month
                </div>
              </div>

              <button className="w-full mt-4 text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#99b8da] hover:text-white transition">
                Choose Basic
              </button>
            </div>

            {/* STANDARD */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full min-h-[32rem] flex flex-col rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#5c84aa] text-center py-4">
                  <h2 className="text-3xl font-bold text-white">Standard</h2>
                </div>

                <div className="bg-white text-[#203454] flex-grow px-6 py-8 text-center flex flex-col justify-between">
                  <p className="mb-8 text-base">
                    Ideal for growing teams who want to streamline their core workflows and reduce admin time.
                  </p>
                </div>

                <div className="bg-[#5c84aa] text-center py-4 text-xl font-bold text-white">
                  £25/month
                </div>
              </div>

              <button className="w-full mt-4 text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#5c84aa] hover:text-white transition">
                Choose Standard
              </button>
            </div>

            {/* PREMIUM */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full min-h-[32rem] flex flex-col rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#203454] text-center py-4">
                  <h2 className="text-3xl font-bold text-white">Premium</h2>
                </div>

                <div className="bg-white text-[#203454] flex-grow px-6 py-8 text-center flex flex-col justify-between">
                  <p className="mb-8 text-base">
                    A fully managed automation solution including advanced AI tools, priority support, and ongoing customisation.
                  </p>
                </div>

                <div className="bg-[#203454] text-center py-4 text-xl font-bold text-white">
                  £50/month
                </div>
              </div>

              <button className="w-full mt-4 text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#203454] hover:text-white transition">
                Choose Premium
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-20 text-lg">
            <p>
              Questions? Email us today at{" "}
              <a href="mailto:inquiries@barkerlonghorn.com" className="underline hover:text-blue-200">
                inquiries@barkerlonghorn.com
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Services;
