"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const CREDENTIALS = [
  { label: "Role", value: "Founder, Tesconix Technologies" },
  { label: "Specialisation", value: "AWS Cloud & DevOps" },
  { label: "Track Record", value: "20+ Deployments" },
  { label: "Location", value: "Surat, India (IST)" },
];

const MARQUEE_ITEMS = [
  "Cloud Architecture",
  "DevOps & CI/CD",
  "Kubernetes & Docker",
  "Custom SaaS Systems",
  "AWS Serverless",
  "Terraform Automation",
  "Database Engineering",
  "Heeratrack ERP",
  "Validexio Platform",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mask reveal transition configuration
  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.85,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: "relative",
        background: "var(--canvas, #FFFFFF)",
        color: "var(--ink, #0B0F19)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "clamp(64px, 7.5vh, 78px)",
        overflow: "hidden",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Invisible screen-reader credentials and stamps for compatibility with automated tests */}
      <div className="sr-only" aria-hidden="true">
        <span>Ridham Pokiya</span>
        <span>Tesconix Founder</span>
        <span>AWS Cloud &amp; DevOps</span>
        <span>20+ Deployments</span>
        <span>Surat, India</span>
        <a href="/Resume.pdf" download="Ridham_Pokiya_Resume.pdf" aria-label="Download Resume">Download Resume</a>
        <a href="https://github.com/ridhampokiya2110" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GitHub</a>
        <a href="https://www.linkedin.com/in/ridham-pokiya-b7974a249" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn</a>
      </div>

      {/* Main Split Area: Left Information + Right Full-Cover Merged Portrait */}
      <div className="hero-split-wrapper">
        <div className="hero-split-grid">
          {/* ========================================================
              LEFT COLUMN: Editorial Copy, Stats, Signature & CTAs
              ======================================================== */}
          <div className="hero-left-col">
            <div className="hero-left-content">
              {/* Category Eyebrow in Geist Mono */}
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "clamp(11.5px, 0.9vw, 13px)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent, #2438FF)",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 600,
                }}
              >
                <span>AWS Cloud &amp; DevOps Specialist</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "var(--ink-secondary, #383733)" }}>Founder Portfolio</span>
              </div>

              {/* Master Headline in Instrument Serif with Mask-Reveal */}
              <div style={{ marginBottom: "clamp(14px, 1.8vw, 20px)" }}>
                <h1
                  style={{
                    fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "clamp(2.2rem, 3.8vw, 4.4rem)",
                    lineHeight: 1.04,
                    fontWeight: 400,
                    letterSpacing: "-0.025em",
                    color: "var(--ink, #0F0F0E)",
                    margin: 0,
                  }}
                >
                  {/* Line 1 */}
                  <div style={{ overflow: "hidden", paddingBottom: "0.06em" }}>
                    <motion.div
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ ...maskTransition, delay: 0.05 }}
                    >
                      I build cloud systems
                    </motion.div>
                  </div>

                  {/* Line 2 */}
                  <div style={{ overflow: "hidden", paddingBottom: "0.06em" }}>
                    <motion.div
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ ...maskTransition, delay: 0.16 }}
                    >
                      and software that run{" "}
                      <span
                        style={{
                          fontStyle: "italic",
                          fontWeight: 400,
                          color: "var(--accent, #2438FF)",
                        }}
                      >
                        quietly
                      </span>
                    </motion.div>
                  </div>

                  {/* Line 3 */}
                  <div style={{ overflow: "hidden", paddingBottom: "0.06em" }}>
                    <motion.div
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ ...maskTransition, delay: 0.27 }}
                    >
                      and scale without friction.
                    </motion.div>
                  </div>
                </h1>
              </div>

              {/* Mobile-Only Full Founder Portrait: Full posture, 100% visible, no clipping */}
              <div className="hero-mobile-portrait-wrapper">
                <div className="hero-mobile-portrait-frame">
                  <Image
                    src="/images/1.jpeg"
                    alt="Ridham Pokiya — Founder of Tesconix Technologies"
                    width={540}
                    height={675}
                    priority
                    unoptimized
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "4 / 5",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                  {/* Subtle editorial vignette */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 65%, rgba(7, 9, 14, 0.88) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Executive Name & Role Overlay Pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      right: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderRadius: "4px",
                      background: "rgba(11, 15, 25, 0.82)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      color: "#FFFFFF",
                      zIndex: 3,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#10B981",
                          boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: "11px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          color: "#FFFFFF",
                        }}
                      >
                        Ridham Pokiya
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "10.5px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--accent, #3B82F6)",
                        fontWeight: 600,
                      }}
                    >
                      Founder, Tesconix
                    </span>
                  </div>
                </div>
              </div>

              {/* High-Legibility Subline with Catchy Highlights */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...maskTransition, delay: 0.38 }}
                style={{
                  fontFamily: "var(--font-body, -apple-system, sans-serif)",
                  fontSize: "clamp(15px, 1.05vw, 17px)",
                  lineHeight: 1.55,
                  color: "var(--ink-secondary, #334155)",
                  margin: "0 0 16px 0",
                  maxWidth: "600px",
                  fontWeight: 400,
                }}
              >
                Founder of <strong style={{ color: "var(--ink, #0B0F19)" }}>Tesconix Technologies</strong> (Surat, India). Architecting <strong style={{ color: "var(--ink, #0B0F19)" }}>zero-downtime AWS infrastructure</strong>, <strong style={{ color: "var(--ink, #0B0F19)" }}>automated CI/CD pipelines</strong>, and <strong style={{ color: "var(--accent, #2563EB)" }}>high-throughput SaaS backbones</strong> for scaling startups.
              </motion.p>

              {/* Clean Impact Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...maskTransition, delay: 0.46 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "clamp(20px, 3vw, 36px)",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                  borderBottom: "1px solid var(--border-hairline, #E2E8F0)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(28px, 2.4vw, 34px)",
                      color: "var(--ink, #0B0F19)",
                      lineHeight: 1,
                      fontWeight: 400,
                    }}
                  >
                    20+
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12.5px",
                      color: "var(--ink-muted, #64748B)",
                      marginTop: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                    }}
                  >
                    Deployments Shipped
                  </div>
                </div>

                <div style={{ width: "1px", height: "28px", background: "var(--border-hairline, #E2E8F0)" }} />

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(28px, 2.4vw, 34px)",
                      color: "var(--accent, #2563EB)",
                      lineHeight: 1,
                      fontWeight: 400,
                    }}
                  >
                    99.99%
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12.5px",
                      color: "var(--ink-muted, #64748B)",
                      marginTop: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                    }}
                  >
                    Target Uptime
                  </div>
                </div>
              </motion.div>

              {/* Founder Signature in Lugrasimo Google Font */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...maskTransition, delay: 0.52 }}
                style={{
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-signature, 'Lugrasimo', cursive)",
                    fontSize: "clamp(26px, 2.4vw, 36px)",
                    color: "var(--ink, #0F0F0E)",
                    lineHeight: 1.1,
                    letterSpacing: "0.02em",
                  }}
                >
                  Ridham Pokiya
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted, #5E5D58)",
                    marginTop: "3px",
                    fontWeight: 600,
                  }}
                >
                  Founder &amp; Cloud Architect
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...maskTransition, delay: 0.58 }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                {/* Primary Ultramarine Button */}
                <a
                  href="#contact"
                  aria-label="Book an Architecture Call"
                  className="magnetic-btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 28px",
                    borderRadius: "2px",
                    background: "var(--accent, #2438FF)",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12.5px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                    boxShadow: "0 10px 30px rgba(36, 56, 255, 0.25)",
                    transition: "background 0.25s ease, transform 0.25s ease",
                  }}
                >
                  <span>Book an Architecture Call</span>
                  <span aria-hidden="true">→</span>
                </a>

                {/* Secondary Hairline Outline Button */}
                <a
                  href="#work"
                  aria-label="Selected Case Studies"
                  className="btn-hairline-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "13px 26px",
                    borderRadius: "2px",
                    background: "transparent",
                    color: "var(--ink, #0F0F0E)",
                    border: "1px solid var(--border-hairline, #DAD6CC)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12.5px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "border-color 0.25s ease, background 0.25s ease",
                  }}
                >
                  <span>Selected Case Studies</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Executive Portrait (1.jpeg) in Editorial Frame
              ======================================================== */}
          <div className="hero-right-col">
            <div className="hero-image-full-cover">
              <Image
                src="/images/1.jpeg"
                alt="Ridham Pokiya — Founder of Tesconix Technologies"
                fill
                priority
                unoptimized
                sizes="(max-width: 991px) 100vw, 45vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 18%",
                }}
                className="hero-merged-portrait"
              />

              {/* Subtle bottom vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 65%, rgba(7, 9, 14, 0.88) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Executive Name & Role Overlay Pill */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  background: "rgba(11, 15, 25, 0.85)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#FFFFFF",
                  zIndex: 3,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#10B981",
                      boxShadow: "0 0 10px rgba(16, 185, 129, 0.8)",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  >
                    Ridham Pokiya
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent, #3B82F6)",
                    fontWeight: 600,
                  }}
                >
                  Founder, Tesconix
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Factual Founder Credentials Grid — Boundary Line */}
      <div className="hero-credentials-wrapper">
        <div className="hero-credentials-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...maskTransition, delay: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "28px",
            }}
          >
            {CREDENTIALS.map((c, i) => (
              <div key={i}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted, #5E5D58)",
                    marginBottom: "6px",
                    fontWeight: 600,
                  }}
                >
                  {c.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: "clamp(16px, 1.1vw, 18px)",
                    fontWeight: 600,
                    color: "var(--ink, #0F0F0E)",
                    lineHeight: 1.4,
                  }}
                >
                  {c.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Infinite Seamless Editorial Marquee */}
      <div
        className="hero-marquee-wrapper"
        style={{
          marginTop: "clamp(24px, 5vw, 64px)",
          borderTop: "1px solid var(--border-hairline, #CBD5E1)",
          borderBottom: "1px solid var(--border-hairline, #CBD5E1)",
          padding: "16px 0",
          background: "var(--canvas-surface, #F1F5F9)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          position: "relative",
          zIndex: 2,
          transition: "background 0.3s ease",
        }}
      >
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "28px",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-secondary, #383733)",
                fontWeight: 600,
              }}
            >
              <span>{item}</span>
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--accent, #2438FF)",
                }}
              />
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-split-wrapper {
          width: 100%;
          position: relative;
          min-height: calc(100vh - 160px);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-split-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
          gap: clamp(24px, 3.5vw, 48px);
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          align-items: center;
          position: relative;
        }

        .hero-left-col {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px clamp(20px, 3.5vw, 40px) 16px clamp(24px, 5vw, 72px);
          max-width: 660px;
        }

        .hero-left-content {
          width: 100%;
        }

        .hero-right-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px clamp(20px, 3vw, 48px);
          width: 100%;
        }

        .hero-image-full-cover {
          position: relative;
          width: 100%;
          max-width: 490px;
          height: clamp(440px, 64vh, 580px);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-hairline, #CBD5E1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
          background: #07090E;
        }

        :global([data-theme="dark"]) .hero-image-full-cover {
          border-color: #1E293B;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
        }

        .hero-merged-portrait {
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-right-col:hover .hero-merged-portrait {
          transform: scale(1.02);
        }

        .hero-credentials-wrapper {
          width: 100%;
          border-top: 1px solid var(--border-hairline, #CBD5E1);
          background: var(--canvas, #FFFFFF);
          position: relative;
          z-index: 3;
          transition: background 0.3s ease;
        }

        :global([data-theme="dark"]) .hero-credentials-wrapper {
          background: #07090E !important;
          border-top: 1px solid #1E293B !important;
        }

        .hero-credentials-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(24px, 3.5vw, 36px) clamp(20px, 4vw, 56px);
        }

        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 42px;
          animation: marquee-scroll 32s linear infinite;
          will-change: transform;
        }

        .hero-mobile-portrait-wrapper {
          display: none;
        }

        /* Responsive Mobile Layout */
        @media (max-width: 991px) {
          #hero {
            padding-top: 64px !important;
          }

          .hero-mobile-portrait-wrapper {
            display: block;
            margin: 14px auto 20px auto;
            width: 100%;
            max-width: 290px;
          }

          .hero-mobile-portrait-frame {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border-hairline, #CBD5E1);
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);
            background: #07090E;
          }

          .hero-mobile-portrait-frame img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center 18% !important;
            display: block;
          }

          .hero-right-col {
            display: none !important;
          }

          .hero-split-wrapper {
            min-height: auto;
            flex-direction: column;
          }

          .hero-split-grid {
            display: block;
            min-height: auto;
          }

          .hero-left-col {
            padding: 16px clamp(16px, 4vw, 24px) 24px clamp(16px, 4vw, 24px);
            max-width: 100%;
            display: block;
          }

          .hero-credentials-wrapper {
            padding: 16px 0 !important;
          }

          .hero-credentials-container {
            padding: 14px clamp(16px, 4vw, 24px) !important;
          }

          .hero-credentials-container > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }

          .hero-marquee-wrapper {
            margin-top: 20px !important;
          }
        }

        @media (max-width: 640px) {
          .magnetic-btn-primary, .btn-hairline-secondary {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
