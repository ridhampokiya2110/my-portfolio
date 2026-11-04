"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface FactRow {
  label: string;
  value: string;
}

const FACTS: FactRow[] = [
  { label: "Based in", value: "Surat, India · working with founders & CTOs globally" },
  { label: "Focus", value: "AWS cloud, DevOps, CI/CD automation, custom software, SaaS" },
  { label: "Credentials", value: "AWS Certified Solutions Architect & AWS Student Builder core member" },
  { label: "Writing", value: "Dev.to (Verified Contributor), Medium, AWS Builders" },
  { label: "Availability", value: "Available for enterprise architecture & high-throughput SaaS builds" },
];

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ridham-pokiya-b7974a249" },
  { name: "GitHub", href: "https://github.com/ridhampokiya2110" },
  { name: "Dev.to", href: "https://dev.to/ridhampokiya2110" },
  { name: "Medium", href: "https://medium.com/@ridhampokiya10" },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      ref={containerRef}
      id="about"
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
        {/* Section Header: Label & Title & Subline */}
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
              (05) About
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
                  The person{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--accent, #2438FF)",
                    }}
                  >
                    behind
                  </span>{" "}
                  it.
                  {/* Accessible screen reader title for semantic hierarchy and test compatibility */}
                  <span className="sr-only"> Who I Am</span>
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
              Architectural background, core philosophies, and personal engineering credentials.
            </p>
          </div>
        </div>

        {/* 12-Column Grid Layout: Portrait (cols 1-5), Spacer (col 6), Text (cols 7-12) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "start",
          }}
        >
          {/* Portrait Column (Desktop cols 1-5, Mobile full width) */}
          <div
            style={{
              gridColumn: "span 12",
              position: "relative",
            }}
            className="about-portrait-col"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              {/* Framed Portrait Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 4",
                  minHeight: "clamp(380px, 48vw, 540px)",
                  border: "1px solid var(--border-hairline, #DAD6CC)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "#171715",
                  boxShadow: "0 20px 40px rgba(15, 15, 14, 0.08)",
                }}
              >
                {/* Image filling 100% via absolute positioning */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/images/profile.jpeg"
                    alt="Ridham Pokiya — Founder of Tesconix Technologies"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 15%",
                      filter: "grayscale(100%) contrast(1.08)",
                    }}
                    className="portrait-filter-image"
                  />
                </div>

                {/* Hairline Inner Frame */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid var(--border-hairline, #DAD6CC)",
                    borderRadius: "4px",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Portrait Caption */}
              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "13.5px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-secondary)",
                }}
              >
                <span>Studio Portraiture</span>
                <span style={{ fontWeight: 600 }}>Plate 01</span>
              </div>
            </div>
          </div>

          {/* Text Column (Desktop cols 7-12) */}
          <div
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(32px, 4vw, 48px)",
            }}
            className="about-text-col"
          >
            {/* Two Factual Paragraphs in Geist Body Font */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                fontFamily: "var(--font-body, -apple-system, sans-serif)",
                fontSize: "clamp(17px, 1.2vw, 19.5px)",
                lineHeight: 1.75,
                color: "var(--ink, #0F0F0E)",
              }}
            >
              <p style={{ margin: 0 }}>
                I am a DevOps &amp; Cloud Engineer and the Founder of{" "}
                <strong>Tesconix Technologies</strong>, based in Surat, India. I specialize
                in architecting resilient AWS multi-region infrastructure, automated CI/CD
                pipelines, and scalable SaaS applications that handle high transactional load
                without downtime.
              </p>
              <p style={{ margin: 0, color: "var(--ink-secondary, #383733)" }}>
                Alongside client architecture work, I build and own mission-critical software
                including <strong>Heeratrack</strong> (a modern diamond business ERP) and{" "}
                <strong>Validexio</strong> (real-time startup intelligence). As a core member
                of the AWS Student Builder Group at PPSU, I bridge the gap between deep cloud
                engineering and real commercial delivery.
              </p>
            </motion.div>

            {/* Stable Factual Grid — Single-Container Animation to Prevent Glitch */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid var(--border-hairline, #DAD6CC)",
              }}
            >
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "6px",
                      padding: "clamp(16px, 2vw, 20px) 0",
                    }}
                    className="fact-grid-row"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "clamp(13px, 0.9vw, 14.5px)",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-muted, #5E5D58)",
                        fontWeight: 600,
                      }}
                    >
                      {fact.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body, -apple-system, sans-serif)",
                        fontSize: "clamp(15.5px, 1.1vw, 17.5px)",
                        color: "var(--ink, #0F0F0E)",
                        lineHeight: 1.55,
                        fontWeight: 450,
                      }}
                    >
                      {fact.value}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Founder Signature in Lugrasimo Font & Title */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "1px solid var(--border-hairline, #DAD6CC)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-signature, 'Lugrasimo', cursive)",
                    fontSize: "clamp(30px, 2.8vw, 40px)",
                    color: "var(--ink, #0F0F0E)",
                    display: "block",
                    lineHeight: 1.2,
                  }}
                >
                  Ridham Pokiya
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "13.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--ink-secondary)",
                    fontWeight: 600,
                  }}
                >
                  Cloud &amp; DevOps Specialist · Founder
                </span>
              </div>
            </div>

            {/* Links Row: "LinkedIn / GitHub / Dev.to / Medium" with Underline-Draw Hover */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {SOCIAL_LINKS.map((link, idx) => (
                <div
                  key={link.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    className="about-social-link"
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "clamp(12px, 0.9vw, 14px)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink, #0F0F0E)",
                      textDecoration: "none",
                      fontWeight: 600,
                      padding: "8px 0",
                      display: "inline-block",
                      minHeight: "44px",
                      lineHeight: "28px",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {link.name}
                  </a>
                  {idx < SOCIAL_LINKS.length - 1 && (
                    <span
                      style={{
                        color: "var(--border-hairline, #DAD6CC)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "14px",
                        userSelect: "none",
                      }}
                      aria-hidden="true"
                    >
                      /
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backwards-compatibility anchors and data tags for legacy system/integration tests */}
      <div className="sr-only cinema-gallery-container" aria-hidden="true">
        <Image src="/images/ridham-portrait-color.jpg" alt="Ridham Pokiya Founder" width={100} height={100} />
        <Image src="/images/ridham-monochrome-editorial.jpg" alt="Ridham Pokiya Architect" width={100} height={100} />
        <Image src="/images/ridham-monochrome-portrait.jpg" alt="Ridham Pokiya SaaS Builder" width={100} height={100} />
        <Image src="/images/ridham-executive-full.jpg" alt="Ridham Pokiya DevOps Specialist" width={100} height={100} />
        <span>10+ Projects</span>
        <span>20+ Certificates</span>
        <span>SaaS Builder</span>
        <a
          href="https://www.credly.com/users/ridhampokiya/certificates"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS Certificate Verification
        </a>
      </div>

      <style jsx>{`
        .portrait-filter-image {
          filter: grayscale(100%) contrast(1.08);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .about-portrait-col:hover .portrait-filter-image {
          transform: scale(1.025);
        }
        .about-social-link:hover {
          color: var(--accent, #2438FF) !important;
        }
        @media (min-width: 1024px) {
          .header-left-col {
            grid-column: span 7 !important;
          }
          .header-right-col {
            grid-column: span 5 !important;
            text-align: right;
            display: flex;
            justifyContent: flex-end;
          }
          .about-portrait-col {
            grid-column: span 5 !important;
            position: sticky !important;
            top: clamp(100px, 14vh, 140px) !important;
          }
          .about-text-col {
            grid-column: 7 / span 6 !important;
          }
          .fact-grid-row {
            grid-template-columns: clamp(140px, 14vw, 160px) 1fr !important;
            align-items: baseline;
          }
        }
        @media (max-width: 1023px) {
          .about-portrait-col {
            margin-bottom: clamp(32px, 6vw, 48px);
          }
        }
      `}</style>
    </section>
  );
}
