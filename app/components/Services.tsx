"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ServiceItem {
  number: string;
  title: string;
  outcome: string;
  description: string;
  tags: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Cloud & DevOps",
    outcome: "Infrastructure that stays up and costs less.",
    description:
      "Architecting zero-downtime AWS topologies, containerised Kubernetes workloads, and declarative Terraform IaC. Slashing cloud waste while guaranteeing sub-minute auto-recovery.",
    tags: ["AWS", "CI/CD", "IaC", "Monitoring"],
  },
  {
    number: "02",
    title: "Custom Software",
    outcome: "Web and mobile products built around your process.",
    description:
      "Engineering resilient web and API backbones custom-crafted for business operations that off-the-shelf software fails to handle. Clean contracts and long-term maintainability.",
    tags: ["Web Apps", "APIs", "Mobile"],
  },
  {
    number: "03",
    title: "SaaS Development",
    outcome: "From validated idea to multi-tenant product.",
    description:
      "Translating architectural models into full-scale multi-tenant applications. Complete with organisation tenant-isolation, automated Stripe billing, and high-concurrency event queues.",
    tags: ["Auth", "Billing", "Multi-Tenancy"],
  },
  {
    number: "04",
    title: "Automation & AI",
    outcome: "Remove repetitive work. Add AI only where it pays.",
    description:
      "Eliminating manual data wrangling with event-driven pipelines and pragmatic LLM integrations. We implement AI strictly where measurable ROI and speed advantages exist.",
    tags: ["Workflows", "Integrations", "AI"],
  },
  {
    number: "05",
    title: "Maintenance & Support",
    outcome: "Someone accountable after launch.",
    description:
      "Direct founder accountability following production release. Proactive 24/7 uptime monitoring, zero-downtime patch upgrades, database backups, and contracted SLA turnarounds.",
    tags: ["Monitoring", "Updates", "SLAs"],
  },
  {
    number: "06",
    title: "Consulting",
    outcome: "Architecture, cost and security reviews.",
    description:
      "Independent architectural audits, cloud spend teardowns, and security posture reviews for founders and CTOs preparing for high-scale growth or investor due diligence.",
    tags: ["Audits", "Roadmaps", "Second Opinions"],
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="services"
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
            marginBottom: "clamp(36px, 5vw, 56px)",
          }}
        >
          {/* Left Title Column (Cols 1-7) */}
          <div style={{ gridColumn: "span 12" }} className="header-left-col">
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent, #2438FF)",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              (02) Services
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                lineHeight: 1.0,
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
                  What I{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--accent, #2438FF)",
                    }}
                  >
                    build
                  </span>{" "}
                  and run.
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
                maxWidth: "42ch",
                fontWeight: 400,
              }}
            >
              Specialised engineering disciplines focused on stability, performance, and automation.
            </p>
          </div>
        </div>

        {/* 6 Full-Width Numbered Service Rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {SERVICES.map((s, idx) => {
            const isHovered = hoveredIdx === idx;
            const isMobileOpen = mobileOpenIdx === idx;

            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() =>
                  setMobileOpenIdx(isMobileOpen ? null : idx)
                }
                data-cursor="explore"
                className="service-row"
                style={{
                  position: "relative",
                  borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
                  cursor: "pointer",
                  overflow: "hidden",
                  background: isMobileOpen ? "var(--canvas-surface)" : "transparent",
                  transition: "background 0.3s ease",
                }}
              >
                {/* Desktop Wipe Invert Fill (From Bottom) */}
                <div
                  className="desktop-fill-layer"
                  style={{
                    position: "absolute",
                    inset: 0,
                    clipPath: isHovered
                      ? "inset(0% 0 0 0)"
                      : "inset(100% 0 0 0)",
                    transition:
                      "clip-path 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                {/* Main Row Content */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "clamp(28px, 3.5vw, 44px) clamp(20px, 3vw, 40px)",
                    transition: "color 0.4s ease",
                    color: isHovered
                      ? "#FFFFFF"
                      : "var(--ink, #0F0F0E)",
                  }}
                >
                  {/* Grid Layout: col 1 = num, col 2-6 = title, col 7-11 = outcome+tags, col 12 = arrow */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(12, 1fr)",
                      gap: "24px",
                      alignItems: "center",
                    }}
                    className="service-row-grid"
                  >
                    {/* Number in Geist Mono */}
                    <div
                      style={{
                        gridColumn: "span 1",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "clamp(16px, 1.4vw, 20px)",
                        letterSpacing: "0.14em",
                        color: isHovered
                          ? "rgba(255, 255, 255, 0.75)"
                          : "var(--ink-muted, #5E5D58)",
                        lineHeight: 1,
                        fontWeight: 600,
                      }}
                      className="service-num"
                    >
                      {s.number}
                    </div>

                    {/* Title in Instrument Serif */}
                    <div
                      style={{ gridColumn: "span 5" }}
                      className="service-title-col"
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                          fontSize: "clamp(2.2rem, 3.4vw, 3.4rem)",
                          lineHeight: 1.05,
                          fontWeight: 400,
                          letterSpacing: "-0.015em",
                          margin: 0,
                          color: isHovered ? "#FFFFFF" : "var(--ink, #0F0F0E)",
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* Outcome & Stack Tags */}
                    <div
                      style={{
                        gridColumn: "span 5",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                      className="service-outcome-col"
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-body, -apple-system, sans-serif)",
                          fontSize: "clamp(16px, 1.15vw, 18px)",
                          lineHeight: 1.55,
                          color: isHovered
                            ? "rgba(255, 255, 255, 0.95)"
                            : "var(--ink-secondary, #383733)",
                          margin: 0,
                          fontWeight: 450,
                        }}
                      >
                        {s.outcome}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "var(--font-mono, monospace)",
                              fontSize: "12.5px",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              padding: "5px 12px",
                              borderRadius: "2px",
                              background: isHovered
                                ? "rgba(255, 255, 255, 0.12)"
                                : "var(--canvas-surface)",
                              border: isHovered
                                ? "1px solid rgba(255, 255, 255, 0.28)"
                                : "1px solid var(--border-hairline, #DAD6CC)",
                              color: isHovered
                                ? "#FFFFFF"
                                : "var(--ink-secondary, #5E5D58)",
                              fontWeight: 500,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow (Rotates -45deg on hover) */}
                    <div
                      style={{
                        gridColumn: "span 1",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                      className="service-arrow-col"
                    >
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: "20px",
                          lineHeight: 1,
                          transform:
                            isHovered || isMobileOpen
                              ? "rotate(-45deg)"
                              : "rotate(0deg)",
                          color: isHovered
                            ? "var(--accent, #4D5EFF)"
                            : "var(--ink-muted, #6B6A66)",
                          transition:
                            "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease",
                        }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Expanded 2-Line Description (Visible on Hover desktop & on Tap mobile) */}
                  <div
                    style={{
                      maxHeight:
                        isHovered || isMobileOpen ? "140px" : "0px",
                      opacity: isHovered || isMobileOpen ? 1 : 0,
                      overflow: "hidden",
                      transition:
                        "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease 0.05s",
                      paddingTop:
                        isHovered || isMobileOpen ? "18px" : "0px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: "16px",
                        lineHeight: 1.65,
                        maxWidth: "68ch",
                        color: isHovered
                          ? "rgba(255, 255, 255, 0.92)"
                          : "var(--ink-secondary, #403F3C)",
                        margin: 0,
                      }}
                    >
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .desktop-fill-layer {
          background: #0F0F0E;
        }
        [data-theme="dark"] .desktop-fill-layer {
          background: #20222C;
        }
        @media (max-width: 899px) {
          .service-row-grid {
            grid-template-columns: 1fr auto !important;
            gap: 12px !important;
          }
          .service-num {
            grid-column: span 1 !important;
            margin-bottom: 4px;
          }
          .service-title-col {
            grid-column: span 2 !important;
          }
          .service-outcome-col {
            grid-column: span 2 !important;
            margin-top: 8px;
          }
          .service-arrow-col {
            grid-column: span 1 !important;
            align-self: start;
          }
          .desktop-fill-layer {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

