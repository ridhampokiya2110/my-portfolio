"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../lib/data";

export default function SideProjects() {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="side-projects"
      style={{
        position: "relative",
        background: "var(--canvas, #F4F1EA)",
        color: "var(--ink, #0F0F0E)",
        paddingTop: "clamp(80px, 9vw, 136px)",
        paddingBottom: "clamp(80px, 9vw, 136px)",
        borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
      }}
    >
      {/* Anchor alias for #lab */}
      <div id="lab" style={{ position: "absolute", top: 0, left: 0 }} aria-hidden="true" />

      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 56px)",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
            alignItems: "end",
            paddingBottom: "clamp(36px, 5vw, 64px)",
            borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
            marginBottom: "clamp(48px, 6vw, 72px)",
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
              (09) Lab
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
                  Experiments and{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--accent, #2438FF)",
                    }}
                  >
                    tools
                  </span>
                  .
                  <span className="sr-only">Open Source &amp; Tools</span>
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
              A collapsed index of open-source utilities, cloud prototypes, and architectural tools.
            </p>
          </div>
        </div>

        {/* Compact 3-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(20px, 2.5vw, 32px)",
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="glass glass-hover lab-card"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--border-hairline, #DAD6CC)",
                borderRadius: "4px",
                padding: "clamp(24px, 2.8vw, 32px)",
                background: "var(--canvas-surface, #EDEAE2)",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
            >
              {/* Card Header: Index & Tech Tags */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "14px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted, #5E5D58)",
                    lineHeight: 1,
                    fontWeight: 600,
                  }}
                >
                  0{i + 1}
                </span>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="chip"
                      style={{
                        padding: "4px 10px",
                        borderRadius: "100px",
                        border: "1px solid var(--border-hairline, #DAD6CC)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--ink, #0F0F0E)",
                        background: "var(--canvas-muted)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h4
                style={{
                  fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                  fontSize: "clamp(1.4rem, 1.9vw, 1.75rem)",
                  lineHeight: 1.25,
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  color: "var(--ink, #0F0F0E)",
                  marginBottom: "12px",
                }}
              >
                {p.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body, -apple-system, sans-serif)",
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "var(--ink-secondary, #383733)",
                  flex: 1,
                  marginBottom: "24px",
                }}
              >
                {p.desc}
              </p>

              {/* Live Link */}
              <div style={{ marginTop: "auto" }}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="underline-draw"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "13.5px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--accent, #2438FF)",
                    textDecoration: "none",
                    fontWeight: 600,
                    padding: "6px 0",
                    minHeight: "44px",
                    lineHeight: "32px",
                  }}
                >
                  <span>Live Preview</span>
                  <span style={{ fontSize: "15px" }} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .lab-card:hover {
          border-color: var(--ink, #0F0F0E) !important;
          background: #E5E1D7 !important;
        }
        @media (min-width: 1024px) {
          .header-left-col {
            grid-column: span 7 !important;
          }
          .header-right-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}
