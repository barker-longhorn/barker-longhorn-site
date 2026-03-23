import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";
import "../index.css";
import Footer from "../components/Footer";
import Prism from "../components/Prism";

import heroVideo from "../assets/BL2.mp4";
import productImage from "../assets/DOCRAedited.png";

function Products() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [vsActive, setVsActive] = useState(2);
  // Tracks cards mid-wrap: { cardIndex: forcedDiff } — overrides circular diff
  const [vsOverride, setVsOverride] = useState({});

  const problems = [
    {
      num: "01",
      title: "Data rooms are noise",
      body: "Hundreds of documents, no structure. You spend more time finding information than analysing it.",
    },
    {
      num: "02",
      title: "Evidence disappears",
      body: "The insight that shaped your view lives in someone's notes, or a Slack thread, or nowhere at all.",
    },
    {
      num: "03",
      title: "IC memos are painful",
      body: "Writing the memo should be the easy part. Instead it's a last-minute scramble to reconstruct the case you already made.",
    },
    {
      num: "04",
      title: "You're the glue between too many tools",
      body: "A data room here, a spreadsheet there, ChatGPT in another tab, your notes somewhere else. Half your time goes on wrangling tools, not analysing the deal. The insight gets lost in the handoffs.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Create a deal and send a data request",
      body: "The startup gets a link and uploads their documents directly. No back-and-forth, no email chains.",
    },
    {
      num: "02",
      title: "Run your checklist against the evidence",
      body: "Your custom diligence checklist is mapped automatically against uploaded documents. Every item gets evidence, or a clear flag that it's missing.",
    },
    {
      num: "03",
      title: "Deep-dive research beyond the data room",
      body: "Once the documents check out, DOCRA goes further; researching the founders, the entity, the market, competitive landscape, and surfacing any red flags. The context you'd normally spend hours pulling together, done automatically.",
    },
    {
      num: "04",
      title: "Score against your thesis",
      body: "DOCRA checks the deal against your investment thesis, not a generic rubric. Your criteria, your scoring.",
    },
    {
      num: "05",
      title: "Generate your IC memo",
      body: "One click. Grounded in the evidence you've gathered throughout the process, not stitched together from memory.",
    },
    {
      num: "06",
      title: "Stop switching tabs",
      body: "Most teams doing AI-assisted diligence today are manually copying documents into ChatGPT, Claude, NotebookLM, or whatever's open in the next tab, writing their own prompts, and stitching the outputs together themselves. DOCRA does all of that inside a single workflow; purpose-built so you never have to engineer a prompt or play go-between again.",
    },
  ];

  const vsCards = [
    {
      name: "NotebookLM / ChatGPT",
      points: [
        "No concept of a diligence checklist",
        "No structured evidence mapping; just chat",
        "Will confidently hallucinate your investment memo",
        "You're writing the prompts, doing the workflow yourself",
      ],
    },
    {
      name: "Waiting for your analyst",
      points: [
        "DD moves at the speed of whoever's doing it",
        "One analyst, multiple live deals; something always slips",
        "Institutional knowledge lives in their head, not the platform",
        "When they leave, so does everything they knew about your pipeline",
      ],
    },
    {
      name: "Spreadsheets & manual process",
      points: [
        "Checklist lives separately from the evidence",
        '"Where did we get this number?" Every time.',
        "Memo is written from memory at midnight",
        "Knowledge leaves when your analyst does",
      ],
    },
    {
      name: "Visible / Affinity / deal CRMs",
      points: [
        "Track that you looked at a deal, not what you found",
        "No thesis alignment or evidence layer",
        "Portfolio management ≠ diligence management",
        "Not built to produce IC-ready output",
      ],
    },
    {
      name: "A stack of tools duct-taped together",
      points: [
        "You're the integration layer; copy, paste, prompt, repeat",
        "Context gets lost every time you switch tools",
        "No audit trail; just a mess of tabs and exports",
        "Still ends with someone manually writing the memo",
      ],
    },
  ];

  const vsLock = useRef(false);

  const vsPrev = () => {
    if (vsLock.current) return;
    vsLock.current = true;
    const n = vsCards.length;
    const next = (vsActive - 1 + n) % n;
    // Card was at diff +2 (far right), should exit right to +3, then enter from left at -3
    const wrapCard = (vsActive + 2) % n;
    setVsOverride({ [wrapCard]: 3 });
    setVsActive(next);
    setTimeout(() => {
      setVsOverride({ [wrapCard]: "teleport-3" });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVsOverride({});
          vsLock.current = false;
        });
      });
    }, 50);
  };

  const vsNext = () => {
    if (vsLock.current) return;
    vsLock.current = true;
    const n = vsCards.length;
    const next = (vsActive + 1) % n;
    // Card was at diff -2 (far left), should exit left to -3, then enter from right at +3
    const wrapCard = (vsActive - 2 + n) % n;
    setVsOverride({ [wrapCard]: -3 });
    setVsActive(next);
    setTimeout(() => {
      setVsOverride({ [wrapCard]: "teleport+3" });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVsOverride({});
          vsLock.current = false;
        });
      });
    }, 50);
  };

  const docraPoints = [
    "Checklist, evidence, and scoring in one place",
    "Every claim traceable to a source document",
    "Scored against your thesis, not a generic benchmark",
    "IC memo generated from real evidence, not vibes",
    "No prompts to write; the workflow is built in",
    "One tool. Start to IC memo.",
  ];

  const faqs = [
    {
      q: "Isn't this just ChatGPT for documents?",
      a: "No. ChatGPT doesn't know what a good Series A looks like. It doesn't know your thesis, your checklist, or your IC memo format. And critically, you're doing all the work. You write the prompts, copy in the documents, stitch the outputs together. DOCRA is built around how investment diligence actually works, so none of that falls on you.",
    },
    {
      q: "We already use a mix of tools. Why change?",
      a: "Because the cost of that mix is you. Every handoff between tools is a place where context drops, evidence gets lost, and someone has to manually bridge the gap. DOCRA doesn't replace your judgment; it replaces the admin around it.",
    },
    {
      q: "We already have a data room provider.",
      a: "DOCRA is the analysis layer, not the storage layer. It sits on top of whatever you already use. Startups upload documents through a simple link; no new tools for them, and no disruption to your existing setup.",
    },
    {
      q: "Is our deal data safe?",
      a: "Your data is isolated to your organisation and is never used to train any model. Each firm's data is completely separate; no cross-contamination, no shared context.",
    },
    {
      q: "Can the startup see my checklist or scoring?",
      a: "No. Startups only see the document upload interface. Your checklist, thesis alignment scores, and internal notes are entirely private to your team.",
    },
    {
      q: "How long does setup take per deal?",
      a: "Your checklist templates carry over between deals. Per-deal setup is a few minutes: create the deal, customise if needed, send the data request link. That's it.",
    },
    {
      q: "Is DOCRA just for VCs?",
      a: "DOCRA is built for any investor doing structured diligence: VCs, angels, family offices, corporate venture. If you run a repeatable diligence process, DOCRA is built for you.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white overflow-x-hidden" style={{ backgroundColor: "#0a0a0f" }}>
      {/* Background video — top portion, fades to black */}
      {/* Solid black strip to push video down */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[9vh] z-[2] bg-black" />
      {/* Background video — positioned below the strip */}
      <div aria-hidden className="absolute inset-x-0 top-[9vh] h-[85vh] overflow-hidden">
        <video
          className="h-full w-full object-cover"
          style={{ transform: "scaleX(-1) scale(1.15)", objectPosition: "center top" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      {/* Prism background — fills area below the video fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[55vh] bottom-0 z-[1] opacity-40" style={{ filter: "blur(6px)" }}>
        <div className="absolute inset-x-0 top-0 h-[30vh] bg-gradient-to-b from-[#0a0a0f] to-transparent z-10" />
        <Prism
          animationType="rotate"
          timeScale={0.3}
          height={3.5}
          baseWidth={4.2}
          scale={1.8}
          hueShift={-2.0}
          colorFrequency={1}
          noise={0}
          glow={1}
          suspendWhenOffscreen
        />
      </div>

      {/* Content layer */}
      <div className="relative z-20">
        {/* Header */}
        <header className="mt-10 md:mt-12 mx-6 md:mx-10">
          <div className="top-pill">
            <div className="flex items-center justify-between h-14 md:h-16 pl-8 sm:pl-10 md:pl-12 pr-5 sm:pr-6 md:pr-8">
              <div className="flex items-center mr-2">
                <img src={logo} alt="Barker-Longhorn" className="h-10 sm:h-11 md:h-12 w-auto" />
              </div>
              <nav className="hidden md:flex items-center gap-3 md:gap-5">
                <Link to="/" className="nav-pill">Home</Link>
                <Link to="/about" className="nav-pill">About</Link>
                <Link to="/Products" className="nav-pill">DOCRA</Link>
                <Link to="/blog" className="nav-pill">Blog</Link>
                <Link to="/contact" className="nav-pill">Contact</Link>
              </nav>
              <button
                className="md:hidden nav-pill"
                aria-label="Open navigation"
                onClick={() => setMenuOpen(v => !v)}
              >
                <span className="block w-6 h-[2px] bg-white mb-1.5" />
                <span className="block w-6 h-[2px] bg-white mb-1.5" />
                <span className="block w-6 h-[2px] bg-white" />
              </button>
            </div>
          </div>
        </header>

        {menuOpen && (
          <div className="mx-6 md:hidden mt-3">
            <div className="backdrop-blur-xl rounded-2xl p-2" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
              <div className="flex flex-col">
                <Link to="/" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/Products" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>DOCRA</Link>
                <Link to="/blog" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Blog</Link>
                <Link to="/contact" className="nav-pill py-3 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        )}

        <main className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16">

          {/* ─── 1. HERO ─── */}
          <section className="pt-[4rem] md:pt-[5rem] pb-10 md:pb-14 text-center max-w-[860px] mx-auto">
            <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-4">Introducing</p>
            <img
              src={productImage}
              alt="DOCRA"
              className="mx-auto w-full max-w-[900px] h-auto pointer-events-none select-none"
            />
            <p className="mt-6 text-xl md:text-2xl text-white/80">
              Intelligent diligence for the modern investor.
            </p>
            <div className="mt-12 border-b border-white/10" />
          </section>

          {/* ─── 2. THE PROBLEM ─── */}
          <section className="max-w-[860px] mx-auto py-10 md:py-14">
            <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-3">The problem</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Due diligence is broken.</h2>
            <p className="mt-3 text-lg md:text-xl text-white/70">
              The information exists. The problem is the process.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((card) => (
                <div
                  key={card.num}
                  className="glass-pill rounded-2xl p-6 md:p-8 text-left flex flex-col"
                  style={{ borderRadius: "1rem" }}
                >
                  <span className="text-5xl md:text-6xl font-bold text-white/25 leading-none mb-4">{card.num}</span>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 3. HOW IT WORKS ─── */}
          <section className="max-w-[860px] mx-auto py-10 md:py-14">
            <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A focused workspace for your whole team.
            </h2>
            <p className="mt-3 text-lg md:text-xl text-white/70">
              DOCRA sits alongside your existing workflow. No ripping anything out.
            </p>

            <div className="mt-12 flex flex-col">
              {steps.map((step, i) => (
                <div key={step.num}>
                  {i > 0 && <div className="border-t border-white/10" />}
                  <div className="py-8 md:py-10 flex gap-6">
                    <span className="text-sm text-white/30 font-mono mt-1 shrink-0">{step.num}</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 4. WHY NOT JUST USE… ─── */}
          <section className="max-w-[1200px] mx-auto py-10 md:py-14">
            <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-3">Why not just use...</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              We get this question a lot.
            </h2>
            <p className="mt-3 text-lg md:text-xl text-white/70">
              The short answer: general tools are built for general problems. DOCRA is built specifically for investment diligence.
            </p>

            {/* VS carousel – 5 fixed positional slots, content rotates through */}
            <div className="mt-12 mb-8 flex justify-center items-center gap-4">
              <button
                onClick={vsPrev}
                className="flex w-10 h-10 rounded-full items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-opacity z-10"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>

              <div className="relative" style={{ width: "1800px", maxWidth: "calc(100vw - 120px)", height: "370px" }}>
                {vsCards.map((card, i) => {
                  const n = vsCards.length;
                  let diff = i - vsActive;
                  if (diff > Math.floor(n / 2)) diff -= n;
                  if (diff < -Math.floor(n / 2)) diff += n;

                  const override = vsOverride[i];
                  const isTeleport = typeof override === "string" && override.startsWith("teleport");
                  const effectiveDiff = override != null
                    ? (isTeleport ? parseInt(override.replace("teleport", "")) : override)
                    : diff;
                  const absDiff = Math.abs(effectiveDiff);
                  const visible = absDiff <= 2;
                  const isActive = effectiveDiff === 0;
                  const posFor = (d) => {
                    const sign = d >= 0 ? 1 : -1;
                    const a = Math.abs(d);
                    if (a === 0) return 0;
                    if (a === 1) return sign * 360;
                    if (a === 2) return sign * (360 + 310);
                    return sign * (360 + 310 + 360);
                  };
                  const xOffset = posFor(effectiveDiff);

                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 text-left flex flex-col"
                      style={{
                        borderRadius: "1rem",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                        textShadow: "0 0 12px rgba(0, 0, 0, 0.35)",
                        padding: "1.25rem 1.5rem",
                        width: "320px",
                        height: "290px",
                        left: "50%",
                        transform: `translate(calc(-50% + ${xOffset}px), -50%) scale(${isActive ? 1.15 : absDiff >= 2 ? 0.8 : 0.9})`,
                        opacity: isTeleport ? 0 : !visible ? 0 : isActive ? 1 : absDiff === 1 ? 0.4 : 0.3,
                        transition: isTeleport ? "none" : "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease",
                        overflow: "hidden",
                        zIndex: isActive ? 5 : 3 - absDiff,
                        pointerEvents: visible ? "auto" : "none",
                      }}
                    >
                      <span className="text-xs uppercase tracking-widest text-white/40 mb-1">vs</span>
                      <h3 className="font-semibold mb-2 text-sm">{card.name}</h3>
                      <ul className="space-y-1.5 flex-1 overflow-hidden">
                        {card.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                            <span className="text-[#C20114] shrink-0 mt-0.5">✗</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={vsNext}
                className="flex w-10 h-10 rounded-full items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-opacity z-10"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* DOCRA card — full width, green-tinted */}
            <div
              className="mt-4 rounded-2xl p-6 md:p-8 text-left backdrop-blur-xl border border-[#7fbf8f]/30"
              style={{ backgroundColor: "rgba(127, 191, 143, 0.08)", borderRadius: "1rem" }}
            >
              <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "#7fbf8f" }}>with</span>
              <h3 className="text-lg font-semibold mb-5">DOCRA</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {docraPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="shrink-0 mt-0.5" style={{ color: "#7fbf8f" }}>✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── 5. FAQ ─── */}
          <section className="max-w-[860px] mx-auto py-10 md:py-14">
            <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Common questions.</h2>

            <div className="mt-12 flex flex-col">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border-b border-white/10">
                    <button
                      className="w-full text-left py-6 flex items-center justify-between gap-4"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    >
                      <span className="text-base md:text-lg font-medium">{faq.q}</span>
                      <svg
                        className="w-5 h-5 shrink-0 text-white/50 transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="pb-6 text-sm md:text-base text-white/70 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ─── 6. CTA ─── */}
          <section className="max-w-[860px] mx-auto py-10 md:py-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to see it in action?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Get early access or book a demo with the team.
            </p>
            <div className="mt-8">
              <a href="mailto:enquiries@barkerlonghorn.com" className="glass-pill glass-cta inline-block">
                Get in touch
              </a>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Or email us at{" "}
              <a href="mailto:enquiries@barkerlonghorn.com" className="underline hover:text-white/70">
                enquiries@barkerlonghorn.com
              </a>
            </p>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
