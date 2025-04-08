import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import basictick from "../assets/basictick.png";
import standardtick from "../assets/standardtick.png";
import premiumtick from "../assets/premiumtick.png";
import { PopupButton } from "react-calendly";

function Services() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const monthlyPrices = {
    basic: 10,
    standard: 25,
  };

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
              Start with a consultation and a 1-week demo for FREE — no strings attached.
            </h2>
            <p className="text-lg text-blue-100">
              If it’s a good fit, choose the plan that works for you.
            </p>
          </div>

          <h1 className="text-5xl font-bold mb-8 text-center">Our Plans</h1>

          {/* Billing Toggle */}
          <div className="text-center mb-12">
            <div className="inline-flex rounded-full overflow-hidden border-2 border-white">
              <button
                className={`px-6 py-2 font-medium transition ${
                  billingCycle === "monthly"
                    ? "bg-[#203454] text-white"
                    : "bg-white text-[#203454]"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 font-medium transition ${
                  billingCycle === "annual"
                    ? "bg-[#203454] text-white"
                    : "bg-white text-[#203454]"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual
              </button>
            </div>
          </div>

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
                  {billingCycle === "monthly" ? (
                    `£${monthlyPrices.basic}/month`
                  ) : (
                    <div>
                      <div className="text-sm line-through opacity-60 mb-1">
                        £{monthlyPrices.basic * 12}/year
                      </div>
                      <div>
                        £{monthlyPrices.basic * 10}/year{" "}
                        <span className="text-sm text-green-300">(Save 17%)</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* STANDARD */}
            <div className="flex flex-col items-center w-full relative">
              <div className="absolute -top-6 bg-white text-[#203454] text-sm font-semibold px-4 py-1 rounded border-2 border-[#203454] shadow-md">
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
                  {billingCycle === "monthly" ? (
                    `£${monthlyPrices.standard}/month`
                  ) : (
                    <div>
                      <div className="text-sm line-through opacity-60 mb-1">
                        £{monthlyPrices.standard * 12}/year
                      </div>
                      <div>
                        £{monthlyPrices.standard * 10}/year{" "}
                        <span className="text-sm text-green-300">(Save 17%)</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
                    <li className="flex items-start gap-3">
                      <img src={premiumtick} alt="tick" className="w-5 h-5 mt-1" />
                      Tailored solutions for your needs
                    </li>
                  </ul>
                </div>
                <div className="bg-[#203454] text-center py-4 text-xl font-bold text-white">
                  Contact us for a quote today
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <PopupButton
              url="https://calendly.com/barkerlonghorn"
              rootElement={document.getElementById("root")}
              text="Book a free consult"
              className="text-lg bg-white text-[#3864a4] font-semibold py-4 px-8 rounded shadow hover:bg-[#203454] hover:text-white transition"
            />
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
