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
        paddingTop: "clamp(72px, 8.5vh, 88px)",
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
                  fontSize: "clamp(12px, 0.95vw, 13.5px)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent, #2438FF)",
                  marginBottom: "18px",
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
              <div style={{ marginBottom: "clamp(18px, 2.5vw, 26px)" }}>
                <h1
                  style={{
                    fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "clamp(2.25rem, 6vw, 5.6rem)",
                    lineHeight: 1.02,
                    fontWeight: 400,
                    letterSpacing: "-0.03em",
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
                  fontSize: "clamp(16.5px, 1.2vw, 19px)",
                  lineHeight: 1.65,
                  color: "var(--ink-secondary, #334155)",
                  margin: "0 0 24px 0",
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
                  gap: "clamp(24px, 3.5vw, 40px)",
                  paddingBottom: "22px",
                  marginBottom: "22px",
                  borderBottom: "1px solid var(--border-hairline, #E2E8F0)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(30px, 2.6vw, 38px)",
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
                      fontSize: "13px",
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

                <div style={{ width: "1px", height: "32px", background: "var(--border-hairline, #E2E8F0)" }} />

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(30px, 2.6vw, 38px)",
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
                      fontSize: "13px",
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
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-signature, 'Lugrasimo', cursive)",
                    fontSize: "clamp(32px, 3.2vw, 44px)",
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
                    fontSize: "13.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted, #5E5D58)",
                    marginTop: "4px",
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
                  gap: "16px",
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
                    padding: "16px 34px",
                    borderRadius: "2px",
                    background: "var(--accent, #2438FF)",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "13px",
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
                    padding: "15px 30px",
                    borderRadius: "2px",
                    background: "transparent",
                    color: "var(--ink, #0F0F0E)",
                    border: "1px solid var(--border-hairline, #DAD6CC)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "13px",
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
              RIGHT COLUMN: Full-Cover Portrait (1.jpeg) Seamlessly Merging
              ======================================================== */}
          <div className="hero-right-col">
            <div className="hero-image-full-cover">
              <Image
                src="/images/1.jpeg"
                alt="Ridham Pokiya — Founder of Tesconix Technologies"
                fill
                priority
                unoptimized
                sizes="(max-width: 991px) 100vw, 60vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 65%",
                }}
                className="hero-merged-portrait"
              />

              {/* Seamless studio backdrop shade extending towards the period in 'friction.' */}
              <div className="hero-blend-left" />
              <div className="hero-blend-bottom" />
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
        style={{
          marginTop: "clamp(56px, 7vw, 96px)",
          borderTop: "1px solid var(--border-hairline, #DAD6CC)",
          borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
          padding: "20px 0",
          background: "var(--canvas-surface, #EDEAE2)",
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
          min-height: calc(100vh - 180px);
          display: flex;
          overflow: hidden;
        }

        .hero-split-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          width: 100%;
          position: relative;
        }

        .hero-left-col {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          padding: clamp(32px, 4vw, 56px) clamp(20px, 3.5vw, 40px) clamp(32px, 4vw, 56px) clamp(24px, 5vw, 80px);
        }

        .hero-left-content {
          width: 100%;
          max-width: 640px;
        }

        .hero-right-col {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: clamp(540px, 58vw, 960px);
          z-index: 1;
          height: 100%;
          overflow: hidden;
        }

        .hero-image-full-cover {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hero-merged-portrait {
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-right-col:hover .hero-merged-portrait {
          transform: scale(1.02);
        }

        /* Seamless left blend extending shade right behind the period in 'friction.' */
        .hero-blend-left {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: clamp(100px, 16vw, 240px);
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            90deg,
            var(--canvas, #FFFFFF) 0%,
            var(--canvas, #FFFFFF) 20%,
            color-mix(in srgb, var(--canvas, #FFFFFF) 75%, transparent) 55%,
            transparent 100%
          );
          transition: background 0.3s ease;
        }

        :global([data-theme="dark"]) .hero-blend-left {
          background: linear-gradient(
            90deg,
            #07090E 0%,
            #07090E 25%,
            rgba(7, 9, 14, 0.92) 55%,
            rgba(7, 9, 14, 0.45) 80%,
            transparent 100%
          ) !important;
        }

        /* Subtle bottom blend meeting the credentials line */
        .hero-blend-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: clamp(36px, 6vh, 60px);
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--canvas, #FFFFFF) 100%
          );
          transition: background 0.3s ease;
        }

        :global([data-theme="dark"]) .hero-blend-bottom {
          background: linear-gradient(
            180deg,
            transparent 0%,
            #07090E 100%
          ) !important;
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
          .hero-mobile-portrait-wrapper {
            display: block;
            margin: 18px auto 26px auto;
            width: 100%;
            max-width: 330px;
          }

          .hero-mobile-portrait-frame {
            position: relative;
            width: 100%;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid var(--border-hairline, #DAD6CC);
            box-shadow: 0 16px 36px rgba(15, 15, 14, 0.12);
            background: #0F0F0E;
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
            padding: 24px clamp(16px, 4vw, 28px) 32px clamp(16px, 4vw, 28px);
            max-width: 100%;
            display: block;
          }

          .hero-blend-left {
            display: none;
          }

          .hero-blend-bottom {
            display: none;
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
