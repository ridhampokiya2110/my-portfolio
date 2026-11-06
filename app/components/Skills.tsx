"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../lib/data";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        background: "var(--canvas, #FFFFFF)",
        color: "var(--ink, #0B0F19)",
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
        borderBottom: "1px solid var(--border-hairline, #CBD5E1)",
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
            paddingBottom: "clamp(32px, 4.5vw, 56px)",
            borderBottom: "1px solid var(--border-hairline, #CBD5E1)",
            marginBottom: "clamp(36px, 5vw, 64px)",
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
                color: "var(--ink-muted, #64748B)",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              (07) Capabilities / Toolchain Matrix
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
                  Technical Arsenal
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
              Technologies and infrastructure tools I use daily to build, ship, and scale production systems.
            </p>
          </div>
        </div>

        {/* 4-Column Clean Editorial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(20px, 2.5vw, 32px)",
          }}
        >
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : gi * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                border: "1px solid var(--border-hairline, #CBD5E1)",
                borderRadius: "4px",
                padding: "clamp(20px, 2.5vw, 28px)",
                background: "var(--canvas-surface, #F1F5F9)",
                transition: "border-color 0.3s ease, background 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
              className="glass skill-card"
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "16px",
                  borderBottom: "1px solid var(--border-hairline, #CBD5E1)",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "1.85rem",
                    fontWeight: 400,
                    color: "var(--ink, #0B0F19)",
                    margin: 0,
                  }}
                >
                  {group.category}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "13px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted, #5E5D58)",
                    fontWeight: 600,
                  }}
                >
                  0{gi + 1}
                </span>
              </div>

              {/* Skill Items List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderRadius: "2px",
                      background: "var(--canvas-muted)",
                      border: "1px solid var(--border-hairline, #DAD6CC)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: "14.5px",
                        fontWeight: 500,
                        color: "var(--ink, #0F0F0E)",
                      }}
                    >
                      {skill.name}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div className="skill-dots-track" style={{ display: "flex", gap: "4px" }}>
                        {Array.from({ length: 5 }).map((_, di) => (
                          <div
                            key={di}
                            className={`dot ${di < skill.level ? "on" : ""}`}
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background:
                                di < skill.level
                                   ? "var(--accent, #2438FF)"
                                   : "var(--border-hairline, #DAD6CC)",
                            }}
                          />
                        ))}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: "12.5px",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--ink-secondary)",
                          fontWeight: 600,
                        }}
                      >
                        Lv.{skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skill-card:hover {
          border-color: var(--accent, #2563EB) !important;
          background: var(--canvas-muted) !important;
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
        }
        @media (max-width: 640px) {
          .skill-card {
            padding: 18px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
