"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../lib/data";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="experience"
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
              (05) Experience / Career History
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
                  Where I&apos;ve Worked
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
              From founding Tesconix to engineering automated CI/CD pipelines and leading cloud initiatives.
            </p>
          </div>
        </div>

        {/* Chronological Track Layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                border: "1px solid var(--border-hairline, #DAD6CC)",
                borderRadius: "4px",
                padding: "clamp(24px, 3.5vw, 40px)",
                background: "var(--canvas-surface, #EDEAE2)",
                transition: "border-color 0.3s ease, background 0.3s ease",
                position: "relative",
              }}
              className="glass experience-card"
            >
              {/* Timeline Indicator Dot */}
              <div
                className="tl-dot"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "28px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--accent, #2438FF)",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: "20px",
                  alignItems: "start",
                  paddingLeft: "16px",
                }}
              >
                {/* Left Role & Org (Cols 1-5) */}
                <div style={{ gridColumn: "span 12" }} className="exp-left">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "12px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--accent, #2438FF)",
                        fontWeight: 600,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "2px 8px",
                        borderRadius: "100px",
                        border: "1px solid var(--border-hairline, #DAD6CC)",
                        color: "var(--ink-secondary, #403F3C)",
                      }}
                    >
                      {exp.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(1.85rem, 2.5vw, 2.35rem)",
                      lineHeight: 1.15,
                      fontWeight: 400,
                      color: "var(--ink, #0F0F0E)",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {exp.role}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      color: "var(--ink-secondary, #383733)",
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {exp.org}
                  </p>
                </div>

                {/* Right Description (Cols 6-12) */}
                <div style={{ gridColumn: "span 12" }} className="exp-right">
                  <p
                    style={{
                      fontFamily: "var(--font-body, -apple-system, sans-serif)",
                      fontSize: "clamp(15.5px, 1.1vw, 17.5px)",
                      lineHeight: 1.7,
                      color: "var(--ink-secondary, #383733)",
                      margin: 0,
                    }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-card:hover {
          border-color: var(--ink, #0F0F0E) !important;
          background: #E5E1D7 !important;
        }
        @media (min-width: 900px) {
          .header-left-col {
            grid-column: span 7 !important;
          }
          .header-right-col {
            grid-column: span 5 !important;
            text-align: right;
            display: flex;
            justifyContent: flex-end;
          }
          .exp-left {
            grid-column: span 5 !important;
          }
          .exp-right {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
}
