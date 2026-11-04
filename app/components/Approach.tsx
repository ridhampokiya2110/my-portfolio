"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import ProgressRail, { StepItem } from "./ProgressRail";

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Discover",
    phaseTag: "Scope Alignment & Risk Mitigation",
    description:
      "We define the problem, users, constraints and success metrics before any code. I challenge scope that doesn't earn its cost.",
    youGet: "scope document, risk list, fixed estimate.",
    deliverables: [
      "Scope Definition Document",
      "Risk Mitigation Matrix",
      "Fixed-Estimate Investment Plan",
    ],
    checkpoint: "Alignment signoff & fixed-cost contract before repository initialization.",
  },
  {
    number: "02",
    title: "Design",
    phaseTag: "Infrastructure Blueprint & Data Flow",
    description:
      "Architecture, data model and interface decisions are made early and written down. Managed services are chosen over custom builds wherever sensible.",
    youGet: "architecture diagram, wireframes, cost forecast.",
    deliverables: [
      "AWS Architecture Topology",
      "Interface Wireframes & Schemas",
      "Operational Cloud Cost Forecast",
    ],
    checkpoint: "AWS infrastructure review & sub-50ms data flow verified before implementation.",
  },
  {
    number: "03",
    title: "Build",
    phaseTag: "Iterative Sprints & CI/CD Gates",
    description:
      "Short cycles with a working demo at every checkpoint. Automated tests and CI/CD from the first week.",
    youGet: "weekly demos, staging environment, clean repository.",
    deliverables: [
      "Weekly Working Demos",
      "Ephemeral Staging Previews",
      "Immutable CI/CD & Automated Tests",
    ],
    checkpoint: "Continuous automated test gates with working demo at every merge checkpoint.",
  },
  {
    number: "04",
    title: "Support",
    phaseTag: "Production Cutover & Founder SLA",
    description:
      "Launch is monitored, documented and handed over properly. Ongoing support is optional and priced clearly.",
    youGet: "runbook, monitoring, support plan.",
    deliverables: [
      "Zero-Downtime Runbook",
      "24/7 Health & Uptime Monitoring",
      "Direct Founder SLA Support Plan",
    ],
    checkpoint: "Documented handover, disaster recovery verified, and direct SLA active.",
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the approach section for the scrubbed progress rail
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 75%"],
  });

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  // Track active panel based on viewport center
  useEffect(() => {
    const handleScroll = () => {
      const panels = panelRefs.current;
      if (!panels || panels.length === 0) return;
      const targetY = window.innerHeight * 0.45;

      let bestIndex = 0;
      let minDistance = Infinity;

      panels.forEach((panel, idx) => {
        if (!panel) return;
        const rect = panel.getBoundingClientRect();
        const dist = Math.abs(rect.top - targetY);
        if (rect.top <= targetY && rect.bottom >= targetY * 0.5) {
          bestIndex = idx;
          minDistance = 0;
        } else if (dist < minDistance && minDistance !== 0) {
          minDistance = dist;
          bestIndex = idx;
        }
      });

      setActiveStep(bestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    const targetEl = panelRefs.current[idx];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="approach"
      style={{
        position: "relative",
        background: "var(--canvas, #F4F1EA)",
        color: "var(--ink, #0F0F0E)",
        paddingTop: "clamp(80px, 9vw, 136px)",
        paddingBottom: "clamp(80px, 9vw, 136px)",
        borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 56px)",
        }}
      >
        {/* Section Header: Label, Title & Subline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
            alignItems: "end",
            paddingBottom: "clamp(36px, 5vw, 64px)",
            borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}
        >
          {/* Left Title Column (Cols 1-7) */}
          <div style={{ gridColumn: "span 12" }} className="header-left-col">
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "clamp(12px, 0.95vw, 13.5px)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-muted, #5E5D58)",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              (04) Approach
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                lineHeight: 1.02,
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--ink, #0F0F0E)",
                margin: 0,
              }}
            >
              <div style={{ overflow: "hidden", paddingBottom: "0.05em" }}>
                <motion.div
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={maskTransition}
                >
                  How projects{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--accent, #2438FF)",
                    }}
                  >
                    run
                  </span>
                  .
                </motion.div>
              </div>
            </h2>
          </div>

          {/* Right Subline Column (Cols 8-12) */}
          <div style={{ gridColumn: "span 12" }} className="header-right-col">
            <p
              style={{
                fontFamily: "var(--font-body, -apple-system, sans-serif)",
                fontSize: "clamp(18px, 1.35vw, 22px)",
                lineHeight: 1.55,
                color: "var(--ink-secondary, #383733)",
                margin: 0,
                maxWidth: "500px",
                fontWeight: 400,
              }}
            >
              A clear process, fixed checkpoints and no surprises on scope or cost.
            </p>
          </div>
        </div>

        {/* 12-Column Grid Body */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(24px, 4vw, 56px)",
            position: "relative",
          }}
        >
          {/* Sticky Left Column: Progress Rail (Desktop cols 1-5) */}
          <div
            style={{
              gridColumn: "span 12",
            }}
            className="approach-left-column"
          >
            <ProgressRail
              steps={STEPS}
              activeStep={activeStep}
              scrollProgress={scrollYProgress}
              onStepClick={handleStepClick}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          {/* Right Column: Stacked Step Panels (Desktop cols 6-12) */}
          <div
            ref={panelsContainerRef}
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(36px, 5vh, 56px)",
              position: "relative",
            }}
            className="approach-right-column"
          >
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.number}
                  id={`step-${step.number}`}
                  ref={(el) => {
                    panelRefs.current[idx] = el;
                  }}
                  onClick={() => handleStepClick(idx)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: "relative",
                    borderRadius: "6px",
                    border: `1px solid ${
                      isActive ? "var(--accent, #2438FF)" : "var(--border-hairline, #DAD6CC)"
                    }`,
                    background: isActive ? "var(--canvas-muted)" : "var(--canvas-surface)",
                    padding: "clamp(28px, 4vw, 44px)",
                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    cursor: "pointer",
                    boxShadow: isActive
                      ? "0 20px 45px rgba(36, 56, 255, 0.09)"
                      : "0 4px 16px rgba(0, 0, 0, 0.02)",
                  }}
                  className={`approach-step-card ${isActive ? "card-active" : ""}`}
                >
                  {/* Top Bar: Numeral + Phase Label + Status Pill */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px",
                      marginBottom: "20px",
                      paddingBottom: "18px",
                      borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                          fontSize: "clamp(3.2rem, 4.5vw, 4.4rem)",
                          lineHeight: 1,
                          color: isActive ? "var(--accent, #2438FF)" : "var(--ink, #0F0F0E)",
                          fontWeight: 400,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <span
                          style={{
                            display: "block",
                            fontFamily: "var(--font-mono, monospace)",
                            fontSize: "13px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--ink-muted, #5E5D58)",
                            fontWeight: 600,
                          }}
                        >
                          STAGE ({step.number} / 04)
                        </span>
                        <span
                          style={{
                            display: "block",
                            fontFamily: "var(--font-mono, monospace)",
                            fontSize: "13.5px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: isActive ? "var(--accent, #2438FF)" : "var(--ink-secondary, #383733)",
                            fontWeight: 600,
                            marginTop: "2px",
                          }}
                        >
                          {step.phaseTag}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "5px 12px",
                        borderRadius: "100px",
                        background: isActive ? "rgba(36, 56, 255, 0.1)" : "var(--canvas-muted, #E5E1D7)",
                        border: `1px solid ${isActive ? "var(--accent, #2438FF)" : "var(--border-hairline, #DAD6CC)"}`,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: isActive ? "var(--accent, #2438FF)" : "var(--ink-muted, #5E5D58)",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: "12.5px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: isActive ? "var(--accent, #2438FF)" : "var(--ink-muted, #5E5D58)",
                          fontWeight: 600,
                        }}
                      >
                        {isActive ? "Active Checkpoint" : `Milestone ${step.number}`}
                      </span>
                    </div>
                  </div>

                  {/* Step Title in Instrument Serif */}
                  <h3
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)",
                      lineHeight: 1.1,
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      color: "var(--ink, #0F0F0E)",
                      marginBottom: "16px",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* 2-Sentence Description in Geist Body */}
                  <p
                    style={{
                      fontFamily: "var(--font-body, -apple-system, sans-serif)",
                      fontSize: "clamp(17px, 1.2vw, 19.5px)",
                      lineHeight: 1.7,
                      color: "var(--ink-secondary, #383733)",
                      maxWidth: "680px",
                      marginBottom: "28px",
                      margin: "0 0 28px 0",
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Structured Deliverables Badges Grid ("You get:") */}
                  <div style={{ marginBottom: "24px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: "13.5px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--accent, #2438FF)",
                          fontWeight: 600,
                        }}
                      >
                        You get:
                      </span>
                      {/* Preserving text for search engines and accessibility */}
                      <span className="sr-only">{step.youGet}</span>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                        gap: "10px",
                      }}
                    >
                      {(step.deliverables || []).map((item, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "9px 14px",
                            borderRadius: "4px",
                            background: "var(--canvas-muted, #E5E1D7)",
                            border: "1px solid var(--border-hairline, #DAD6CC)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--accent, #2438FF)",
                              fontSize: "12px",
                              lineHeight: 1,
                              flexShrink: 0,
                            }}
                          >
                            ✦
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono, monospace)",
                              fontSize: "13.5px",
                              color: "var(--ink, #0F0F0E)",
                              fontWeight: 500,
                              lineHeight: 1.35,
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Checkpoint Banner */}
                  <div
                    style={{
                      paddingTop: "16px",
                      borderTop: "1px dashed var(--border-hairline, #DAD6CC)",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--ink-muted, #5E5D58)",
                        fontWeight: 600,
                      }}
                    >
                      Checkpoint Gate:
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body, -apple-system, sans-serif)",
                        fontSize: "15.5px",
                        color: "var(--ink-secondary, #383733)",
                        fontWeight: 500,
                      }}
                    >
                      {step.checkpoint}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .header-left-col {
            grid-column: span 7 !important;
          }
          .header-right-col {
            grid-column: span 5 !important;
          }
          .approach-left-column {
            grid-column: span 5 !important;
          }
          .approach-right-column {
            grid-column: span 7 !important;
          }
        }
        @media (max-width: 1023px) {
          .approach-left-column {
            position: relative;
            margin-bottom: 24px;
          }
        }
        .approach-step-card:hover {
          border-color: var(--accent, #2438FF) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
