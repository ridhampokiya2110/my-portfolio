"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "../lib/data";

const PROFILES = [
  { name: "LinkedIn", handle: "ridham-pokiya", href: personalInfo.linkedin },
  { name: "GitHub", handle: "@ridhampokiya2110", href: personalInfo.github },
  { name: "Dev.to", handle: "@ridhampokiya2110", href: personalInfo.devto },
  { name: "Upwork", handle: "Verified Cloud & DevOps", href: personalInfo.upwork },
  { name: "Fiverr", handle: "Pro Seller", href: personalInfo.fiverr },
  { name: "Instagram", handle: "@ridham_pokiya_", href: personalInfo.instagram },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        background: "var(--canvas, #F4F1EA)",
        color: "var(--ink, #0F0F0E)",
        paddingTop: "clamp(90px, 11vw, 160px)",
        paddingBottom: "clamp(90px, 11vw, 160px)",
        borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
        overflow: "hidden",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
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
            paddingBottom: "clamp(36px, 5vw, 64px)",
            borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}
        >
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
            (08) Contact
          </p>

          <h2
            style={{
              fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
              fontSize: "clamp(2.75rem, 7vw, 6.25rem)",
              lineHeight: 0.98,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "var(--ink, #0F0F0E)",
              margin: 0,
            }}
          >
            <div style={{ overflow: "hidden", paddingBottom: "0.06em" }}>
              <motion.div
                initial={{ y: "105%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={maskTransition}
              >
                Let&apos;s build something that{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--accent, #2438FF)",
                  }}
                >
                  lasts
                </span>
                .
                <span className="sr-only">Let&apos;s Connect</span>
              </motion.div>
            </div>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body, -apple-system, sans-serif)",
              fontSize: "clamp(19px, 1.4vw, 23px)",
              lineHeight: 1.6,
              color: "var(--ink-secondary, #383733)",
              marginTop: "24px",
              marginBottom: 0,
              maxWidth: "680px",
              fontWeight: 400,
            }}
          >
            Open to custom software, cloud infrastructure, and SaaS systems. Founder &amp; Cloud Engineer building DevOps and SaaS systems.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "start",
          }}
        >
          {/* Direct Communication Channels (Cols 1-7) */}
          <div
            style={{ gridColumn: "span 12" }}
            className="contact-left-col"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Primary Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass direct-contact-card"
                style={{
                  display: "block",
                  padding: "clamp(24px, 3.5vw, 40px)",
                  border: "1px solid var(--border-hairline, #DAD6CC)",
                  borderRadius: "4px",
                  background: "var(--canvas-surface, #EDEAE2)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.3s ease, background 0.3s ease, transform 0.25s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "13px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted, #5E5D58)",
                      fontWeight: 600,
                    }}
                  >
                    Direct Email
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "16px",
                      color: "var(--accent, #2438FF)",
                    }}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                    lineHeight: 1.15,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "var(--ink, #0F0F0E)",
                    wordBreak: "break-all",
                  }}
                >
                  {personalInfo.email}
                </div>
              </a>

              {/* Phone & WhatsApp Two-Column Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                  gap: "20px",
                }}
              >
                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass direct-contact-card"
                  style={{
                    display: "block",
                    padding: "24px",
                    border: "1px solid var(--border-hairline, #DAD6CC)",
                    borderRadius: "4px",
                    background: "var(--canvas-surface, #EDEAE2)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--ink-muted, #5E5D58)",
                        fontWeight: 600,
                      }}
                    >
                      WhatsApp
                    </span>
                    <span style={{ color: "var(--accent, #2438FF)", fontSize: "14px" }}>↗</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: "17px",
                      fontWeight: 500,
                      color: "var(--ink, #0F0F0E)",
                    }}
                  >
                    Chat on WhatsApp
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="glass direct-contact-card"
                  style={{
                    display: "block",
                    padding: "24px",
                    border: "1px solid var(--border-hairline, #DAD6CC)",
                    borderRadius: "4px",
                    background: "var(--canvas-surface, #EDEAE2)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--ink-muted, #5E5D58)",
                        fontWeight: 600,
                      }}
                    >
                      Phone
                    </span>
                    <span style={{ color: "var(--accent, #2438FF)", fontSize: "14px" }}>↗</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: "17px",
                      fontWeight: 500,
                      color: "var(--ink, #0F0F0E)",
                    }}
                  >
                    +91 9825954653
                  </div>
                </a>
              </div>

              {/* Calendly Booking Link */}
              <div style={{ paddingTop: "8px" }}>
                <a
                  href={personalInfo.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    padding: "16px 36px",
                    background: "var(--ink, #0F0F0E)",
                    color: "var(--canvas, #F4F1EA)",
                    borderRadius: "100px",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "13.5px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    textDecoration: "none",
                    minHeight: "48px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s ease, background 0.3s ease",
                  }}
                >
                  <span>Book a 30-Min Call</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Connected Profiles List (Cols 8-12) */}
          <div
            style={{ gridColumn: "span 12" }}
            className="contact-right-col"
          >
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-secondary, #383733)",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Connected Profiles &amp; Markets
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {PROFILES.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass contact-profile-card"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "18px 24px",
                    textDecoration: "none",
                    color: "inherit",
                    background: "var(--canvas-surface, #EDEAE2)",
                    border: "1px solid var(--border-hairline, #DAD6CC)",
                    borderRadius: "4px",
                    transition: "border-color 0.25s ease, background 0.25s ease, transform 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      flexWrap: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13.5px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink, #0F0F0E)",
                        fontWeight: 600,
                        minWidth: "96px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {profile.name}
                    </span>
                    <span
                      style={{
                        color: "var(--border-strong, #B8B4A8)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "14px",
                      }}
                      aria-hidden="true"
                    >
                      /
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13.5px",
                        letterSpacing: "0.04em",
                        color: "var(--ink-secondary, #383733)",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {profile.handle}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "16px",
                      color: "var(--accent, #2438FF)",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .contact-left-col {
            grid-column: span 7 !important;
          }
          .contact-right-col {
            grid-column: 8 / span 5 !important;
          }
        }
        @media (max-width: 640px) {
          .btn-magnetic-primary {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }
        .direct-contact-card:hover {
          border-color: var(--border-strong, #B8B4A8) !important;
          background: var(--canvas-muted, #E5E1D7) !important;
        }
        .contact-profile-card:hover {
          border-color: var(--border-strong, #B8B4A8) !important;
          background: var(--canvas-muted, #E5E1D7) !important;
          transform: translateX(4px);
        }
        .btn-magnetic-primary:hover {
          background: var(--accent, #2438FF) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
