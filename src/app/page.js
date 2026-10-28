"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [checkedSteps, setCheckedSteps] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("proof_first_checked_steps");
      if (saved) {
        setCheckedSteps(JSON.parse(saved));
      }
    } catch {
      // LocalStorage access safely handled
    }
  }, []);

  const toggleStep = (stepNumber) => {
    const updated = {
      ...checkedSteps,
      [stepNumber]: !checkedSteps[stepNumber],
    };
    setCheckedSteps(updated);
    try {
      localStorage.setItem("proof_first_checked_steps", JSON.stringify(updated));
    } catch {
      // LocalStorage safely handled
    }
  };

  const phases = [
    {
      id: "phase-1",
      title: "PHASE 1: BEFORE A FAULT EVER HAPPENS",
      steps: [
        {
          num: 1,
          bold: "1. Archive the receipt immediately.",
          rest: "Keep the original paper invoice and store a high-resolution scan or PDF in the cloud. Your warranty clock almost always starts on the exact date of purchase.",
        },
        {
          num: 2,
          bold: "2. Complete product registration.",
          rest: "Log the serial number on the manufacturer's portal right after unboxing; many brands unlock extended coverage when you register within the first 30 days.",
        },
        {
          num: 3,
          bold: "3. Audit the warranty terms.",
          rest: "Read the fine print once to note the exact coverage period, eligible components, and specific exclusions (such as voltage spikes or liquid contact).",
        },
        {
          num: 4,
          bold: "4. Photograph the baseline condition.",
          rest: "Snap a few dated photos of the item freshly unboxed and properly installed to prove there was no pre-existing physical damage.",
        },
      ],
    },
    {
      id: "phase-2",
      title: "PHASE 2: THE MOMENT SOMETHING BREAKS",
      steps: [
        {
          num: 5,
          bold: "5. Capture the malfunction live.",
          rest: "Record a crisp photo or short video showing the exact symptom as soon as it occurs, ideally with a timestamp or date visible in the frame.",
        },
        {
          num: 6,
          bold: "6. Open a ticket in writing.",
          rest: "Submit your claim via email, web form, or the brand's official app rather than relying on phone calls alone, ensuring a permanent paper trail from day one.",
        },
        {
          num: 7,
          bold: "7. Log every interaction.",
          rest: "Maintain a single running note with every ticket number, date, time, and the name of each representative who handles your case.",
        },
      ],
    },
    {
      id: "phase-3",
      title: "PHASE 3: DURING THE TECHNICIAN'S VISIT",
      steps: [
        {
          num: 8,
          bold: "8. Secure the service sheet.",
          rest: "Never let a technician leave without handing you a signed copy—or digital PDF—of the official visit report or job sheet.",
        },
        {
          num: 9,
          bold: "9. Pin down the diagnostic method.",
          rest: "Ask the technician to specify which diagnostic tool, test software, or meter reading led to their conclusion, and make sure it is noted on the sheet.",
        },
        {
          num: 10,
          bold: "10. Document the inspection yourself.",
          rest: "Take clear photos of the opened unit, serial labels, and any internal part the technician points out while they are still on-site.",
        },
      ],
    },
    {
      id: "phase-4",
      title: "PHASE 4: IF YOUR CLAIM IS DENIED",
      steps: [
        {
          num: 11,
          bold: "11. Demand a written refusal.",
          rest: "Ask the company for a formal rejection letter that states the exact technical cause of failure and the specific warranty clause being invoked.",
        },
        {
          num: 12,
          bold: "12. Request the lab or inspection report.",
          rest: "If the refusal is based on an engineer's assessment, ask for a copy of the underlying technical report and test photos.",
        },
        {
          num: 13,
          bold: "13. Escalate to the grievance desk.",
          rest: "Locate the manufacturer's formal escalation or appellate contact on their website and send a concise summary referencing your original ticket number.",
        },
        {
          num: 14,
          bold: "14. Stick strictly to the timeline and facts.",
          rest: "Strip out emotion and present a chronological list of dates, invoices, job sheets, and photos—the exact format a regulator or consumer tribunal expects.",
        },
        {
          num: 15,
          bold: "15. File with your consumer protection agency.",
          rest: "Every major jurisdiction operates a free consumer ombudsman or dispute portal ready to intervene when a valid warranty is ignored.",
        },
      ],
    },
  ];

  return (
    <div className="proof-first-app">
      {/* Ticker Strip using exact content from content.txt */}
      <div className="comp-ticker">
        <span>15 actionable steps across the claim lifecycle.</span>
        <span>•</span>
        <span>4 baseline records to lock down on day one.</span>
        <span>•</span>
        <span>1 ironclad rule: if it isn&apos;t in writing, it never happened.</span>
      </div>

      {/* Header */}
      <header className="comp-header">
        <div className="shell-container">
          <div className="header-inner">
            <a href="#proof-first" className="brand-badge">
              <span>PROOF FIRST</span>
            </a>

            {/* Desktop Navigation using section titles from content.txt */}
            <nav className="header-nav">
              <a href="#who-this-is-for" className="header-link">
                WHO THIS IS FOR
              </a>
              <a href="#the-core-principle" className="header-link">
                THE CORE PRINCIPLE
              </a>
              <a href="#key-numbers" className="header-link">
                KEY NUMBERS
              </a>
              <a href="#phase-1" className="header-link">
                PHASE 1
              </a>
              <a href="#phase-2" className="header-link">
                PHASE 2
              </a>
              <a href="#phase-3" className="header-link">
                PHASE 3
              </a>
              <a href="#phase-4" className="header-link">
                PHASE 4
              </a>
              <a href="#call-to-action" className="header-link">
                CALL TO ACTION
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle Menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <line x1="18" y1="6" x2="6" y2="18" />
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            backgroundColor: "var(--surface)",
            borderBottom: "1px solid var(--outline)",
            padding: "20px var(--gutter)",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <a
            href="#who-this-is-for"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            WHO THIS IS FOR
          </a>
          <a
            href="#the-core-principle"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            THE CORE PRINCIPLE
          </a>
          <a
            href="#key-numbers"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            KEY NUMBERS FOR THE PAGE
          </a>
          <a
            href="#phase-1"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            PHASE 1: BEFORE A FAULT EVER HAPPENS
          </a>
          <a
            href="#phase-2"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            PHASE 2: THE MOMENT SOMETHING BREAKS
          </a>
          <a
            href="#phase-3"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            PHASE 3: DURING THE TECHNICIAN&apos;S VISIT
          </a>
          <a
            href="#phase-4"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            PHASE 4: IF YOUR CLAIM IS DENIED
          </a>
          <a
            href="#call-to-action"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            CALL TO ACTION
          </a>
          <a
            href="#footer-note"
            className="header-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            FOOTER NOTE
          </a>
        </div>
      )}

      <main>
        {/* ==============================================================
            HERO: PROOF FIRST
            ============================================================== */}
        <section id="proof-first" className="comp-section comp-section-white hero-wrapper">
          <div className="shell-container">
            <div className="section-stack" style={{ maxWidth: "880px" }}>
              <div className="comp-pill-label">
                <span>PROOF FIRST</span>
              </div>

              <h1 className="type-headline-display">PROOF FIRST</h1>

              <p className="type-body-lg" style={{ color: "var(--on-surface-variant)" }}>
                A practical field guide to winning your warranty claim on the record.
              </p>
            </div>
          </div>
        </section>

        {/* ==============================================================
            WHO THIS IS FOR
            ============================================================== */}
        <section id="who-this-is-for" className="comp-section comp-section-slate">
          <div className="shell-container">
            <div className="section-stack">
              <div className="comp-pill-label">
                <span>WHO THIS IS FOR</span>
              </div>

              <h2 className="type-headline-lg">WHO THIS IS FOR</h2>

              <div className="comp-card" style={{ maxWidth: "980px" }}>
                <p className="type-body-lg" style={{ color: "var(--on-surface-strong)" }}>
                  Anyone whose phone, television, laptop, or home appliance has failed while still
                  under warranty—and who wants their claim settled by hard evidence and written
                  facts rather than customer-service runarounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            THE CORE PRINCIPLE
            ============================================================== */}
        <section id="the-core-principle" className="comp-section-dark">
          <div className="shell-container">
            <div className="comp-headline-card">
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div className="comp-pill-label comp-pill-label-dark">
                  <span>THE CORE PRINCIPLE</span>
                </div>

                <h2 className="type-headline-lg" style={{ color: "var(--primary-bright)" }}>
                  THE CORE PRINCIPLE
                </h2>

                <p className="type-body-lg" style={{ color: "#FFFFFF", maxWidth: "980px" }}>
                  Warranty claims are won on paper. Build your evidence trail early, and require
                  the manufacturer to put every decision in writing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            KEY NUMBERS FOR THE PAGE
            ============================================================== */}
        <section id="key-numbers" className="comp-section comp-section-white">
          <div className="shell-container">
            <div className="section-stack">
              <div className="comp-pill-label">
                <span>KEY NUMBERS FOR THE PAGE</span>
              </div>

              <h2 className="type-headline-lg">KEY NUMBERS FOR THE PAGE</h2>
            </div>

            <div className="stats-grid">
              {/* Stat 1 */}
              <div className="comp-stat-cell">
                <div className="type-stat-number stat-num" style={{ color: "var(--on-surface-strong)" }}>
                  15
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p className="type-body-md" style={{ fontWeight: 600, color: "var(--on-surface-strong)" }}>
                    15 actionable steps across the claim lifecycle.
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="comp-stat-cell">
                <div className="type-stat-number stat-num" style={{ color: "var(--on-surface-strong)" }}>
                  4
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p className="type-body-md" style={{ fontWeight: 600, color: "var(--on-surface-strong)" }}>
                    4 baseline records to lock down on day one.
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="comp-stat-cell comp-stat-cell-hot">
                <div className="type-stat-number stat-num">
                  1
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p className="type-body-md" style={{ fontWeight: 600, color: "var(--primary-ink)" }}>
                    1 ironclad rule: if it isn&apos;t in writing, it never happened.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            THE 4 PHASES
            ============================================================== */}
        <section className="comp-section comp-section-slate">
          <div className="shell-container">
            {phases.map((phase) => (
              <div key={phase.id} id={phase.id} className="phase-card-wrapper">
                <div className="phase-header-bar">
                  <div className="comp-pill-label">
                    <span>{phase.title}</span>
                  </div>

                  <h2
                    className="type-headline-md"
                    style={{ marginTop: "12px", color: "var(--on-surface-strong)" }}
                  >
                    {phase.title}
                  </h2>
                </div>

                <div className="phase-steps-container">
                  {phase.steps.map((step) => {
                    const isChecked = !!checkedSteps[step.num];
                    return (
                      <div
                        key={step.num}
                        className={`step-card ${isChecked ? "checked" : ""}`}
                        id={`step-${step.num}`}
                      >
                        {/* Checkbox */}
                        <button
                          onClick={() => toggleStep(step.num)}
                          className={`step-checkbox-btn ${isChecked ? "active" : ""}`}
                          aria-label={`Step ${step.num}`}
                        >
                          {isChecked && (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>

                        {/* Step Text strictly from content.txt */}
                        <div className="step-content">
                          <div
                            className="step-title"
                            style={{
                              textDecoration: isChecked ? "line-through" : "none",
                              color: isChecked
                                ? "var(--on-surface-muted)"
                                : "var(--on-surface-strong)",
                            }}
                          >
                            {step.bold}
                          </div>

                          <div
                            className="step-text"
                            style={{
                              color: isChecked
                                ? "var(--on-surface-muted)"
                                : "var(--on-surface)",
                            }}
                          >
                            {step.rest}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================
            CALL TO ACTION
            ============================================================== */}
        <section id="call-to-action" className="comp-section comp-section-white">
          <div className="shell-container">
            <div className="section-stack">
              <div className="comp-pill-label">
                <span>CALL TO ACTION</span>
              </div>

              <h2 className="type-headline-lg">CALL TO ACTION</h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              <div className="comp-card-callout">
                <p className="type-headline-md" style={{ color: "var(--primary-ink)" }}>
                  Bookmark this guide and save a copy in your receipts folder.
                </p>
              </div>

              <div className="comp-card">
                <p className="type-headline-md" style={{ color: "var(--on-surface-strong)" }}>
                  Send it to someone who just invested in a major appliance or gadget.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==============================================================
          FOOTER NOTE
          ============================================================== */}
      <footer id="footer-note" className="comp-footer">
        <div className="shell-container">
          <div
            className="comp-card-nested"
            style={{
              marginBottom: "36px",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--outline)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "var(--primary)",
                fontWeight: 600,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              FOOTER NOTE
            </div>
            <p className="type-body-md" style={{ color: "var(--on-surface)" }}>
              Proof First is an independent, educational checklist and does not constitute formal legal
              counsel. Always verify the specific warranty terms for your device and consult your local
              consumer protection statutes.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "24px",
              borderTop: "1px solid var(--outline)",
            }}
          >
            <span style={{ fontWeight: 800, color: "var(--on-surface-strong)" }}>PROOF FIRST</span>
            <a
              href="#proof-first"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--primary)",
                fontWeight: 600,
              }}
            >
              PROOF FIRST
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
