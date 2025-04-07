import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import basictick from "../assets/basictick.png";
import standardtick from "../assets/standardtick.png";
import premiumtick from "../assets/premiumtick.png";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* BASIC */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full min-h-[30rem] flex flex-col rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#99b8da] text-center py-4 px-4">
                  <h2 className="text-3xl font-bold text-[#203454]">Basic</h2>
                  <p className="text-sm mt-1 text-[#203454]">Ideal for individuals new to automation</p>
                </div>
                <div className="bg-white text-[#203454] flex-grow px-6 py-6">
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <img src={basictick} alt="tick" className="w-5 h-5 mt-1" />
                      Workflow automation setup
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={basictick} alt="tick" className="w-5 h-5 mt-1" />
                      Online booking integration
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={basictick} alt="tick" className="w-5 h-5 mt-1" />
                      Calendar, email & notification sync
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={basictick} alt="tick" className="w-5 h-5 mt-1" />
                      Support during business hours
                    </li>
                  </ul>
                </div>
                <div className="bg-[#99b8da] text-center py-4 text-xl font-bold text-[#203454]">
                  £10/month
                </div>
              </div>
              <button className="w-full mt-4 text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#99b8da] hover:text-white transition">
                Enquire about Basic
              </button>
            </div>

            {/* STANDARD */}
            <div className="flex flex-col items-center w-full relative">
              {/* Most Popular Banner */}
              <div className="absolute -top-6 bg-white text-[#203454] text-sm font-semibold px-4 py-1 rounded shadow">
                MOST POPULAR
              </div>

              <div className="w-full min-h-[30rem] flex flex-col rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#5c84aa] text-center py-4 px-4">
                  <h2 className="text-3xl font-bold text-white">Standard</h2>
                  <p className="text-sm mt-1 text-white">Best for small teams wanting personalised tools</p>
                </div>
                <div className="bg-white text-[#203454] flex-grow px-6 py-6">
                  <div className="mb-4 font-semibold text-left">Everything in Basic, plus...</div>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <img src={standardtick} alt="tick" className="w-5 h-5 mt-1" />
                      AI-driven client insights and communication
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={standardtick} alt="tick" className="w-5 h-5 mt-1" />
                      Custom, AI-generated resource distribution
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={standardtick} alt="tick" className="w-5 h-5 mt-1" />
                      Smart content automation
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={standardtick} alt="tick" className="w-5 h-5 mt-1" />
                      Personalised email & reminders
                    </li>
                  </ul>
                </div>
                <div className="bg-[#5c84aa] text-center py-4 text-xl font-bold text-white">
                  £25/month
                </div>
              </div>
              <button className="w-full mt-4 text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#5c84aa] hover:text-white transition">
                Enquire about Standard
              </button>
            </div>

            {/* PREMIUM */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full min-h-[30rem] flex flex-col rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#203454] text-center py-4 px-4">
                  <h2 className="text-3xl font-bold text-white">Premium</h2>
                  <p className="text-sm mt-1 text-white">Perfect for high-volume, hands-off automation</p>
                </div>
                <div className="bg-white text-[#203454] flex-grow px-6 py-6">
                  <div className="mb-4 font-semibold text-left">Everything in Standard, plus...</div>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <img src={premiumtick} alt="tick" className="w-5 h-5 mt-1" />
                      Increased monthly booking limits
                    </li>
                    <li className="flex items-start gap-3">
                      <img src={premiumtick} alt="tick" className="w-5 h-5 mt-1" />
                      Priority onboarding & support
                    </li>
                  </ul>
                </div>
                <div className="bg-[#203454] text-center py-4 text-xl font-bold text-white">
                  £50/month
                </div>
              </div>
              <button className="w-full mt-4 text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#203454] hover:text-white transition">
                Enquire about Premium
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-20 text-lg">
            <p>
              Questions? Email us today at{" "}
              <a href="mailto:enquiries@barkerlonghorn.com" className="underline hover:text-blue-200">
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
