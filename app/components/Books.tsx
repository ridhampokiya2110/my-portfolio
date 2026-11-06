"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface BookData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  quote: string;
  highlights: string[];
  tags: string[];
  amazonUs: string;
  amazonIn: string;
  publisher: string;
  year: string;
  pages: string;
  category: string;
}

const BOOK: BookData = {
  id: "millionaires-mindset",
  number: "01",
  title: "Millionaire's Mindset",
  subtitle: "Transforming Dreams into Reality",
  quote: "Your mindset is either your greatest asset or your greatest liability.",
  highlights: [
    "**Core psychological frameworks** separating high-achievers from average operators.",
    "**Decision-making under extreme pressure**, financial intelligence, and strategic risk management.",
    "**Discipline & mental models** engineered to turn ambitious visions into extraordinary tangible reality.",
  ],
  tags: ["Mindset", "Wealth", "Entrepreneurship", "Self-Mastery", "Success"],
  amazonUs: "https://www.amazon.com/dp/B0DXZZJYHM",
  amazonIn: "https://www.amazon.in/Millionaires-Mindset-Transforming-Dreams-Reality-ebook/dp/B0DY96N314",
  publisher: "Kindle Direct Publishing",
  year: "2025",
  pages: "Kindle Edition Worldwide",
  category: "Business & Personal Development",
};

const renderFormattedText = (str: string, strongColor: string) => {
  const parts = str.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: strongColor, fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function Books() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      ref={containerRef}
      id="books"
      style={{
        position: "relative",
        background: "var(--canvas, #FFFFFF)",
        color: "var(--ink, #0B0F19)",
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
        borderBottom: "1px solid var(--border-hairline, #CBD5E1)",
        overflow: "hidden",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Anchor alias for #publication */}
      <div id="publication" style={{ position: "absolute", top: 0, left: 0 }} aria-hidden="true" />

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
              (10) Authored Works / Publication
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)",
                lineHeight: 1.02,
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--ink, #0B0F19)",
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
                  Books I&apos;ve{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--accent, #2563EB)",
                    }}
                  >
                    written
                  </span>
                  .
                  <span className="sr-only">Millionaire&apos;s Mindset by Ridham Pokiya</span>
                </motion.div>
              </div>
            </h2>
          </div>

          {/* Right Subline Column (Cols 8-12) */}
          <div style={{ gridColumn: "span 12" }} className="header-right-col">
            <p
              style={{
                fontFamily: "var(--font-body, -apple-system, sans-serif)",
                fontSize: "clamp(17px, 1.25vw, 20px)",
                lineHeight: 1.6,
                color: "var(--ink-secondary, #334155)",
                margin: 0,
                maxWidth: "520px",
                fontWeight: 400,
              }}
            >
              Beyond software engineering — distilling core psychological frameworks, extreme ownership,
              and cognitive models for founders and high-achievers.
            </p>
          </div>
        </div>

        {/* Master Book Showcase Card */}
        <article
          id={BOOK.id}
          itemScope
          itemType="https://schema.org/Book"
          className="glass book-showcase-card"
          style={{
            position: "relative",
            background: "var(--canvas-surface, #F1F5F9)",
            border: "1px solid var(--border-hairline, #CBD5E1)",
            borderRadius: "6px",
            padding: "clamp(24px, 4vw, 48px)",
            overflow: "hidden",
            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.04)",
            transition: "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Subtle Decorative Background Watermark */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
              fontSize: "clamp(120px, 18vw, 260px)",
              color: "var(--ink, #0B0F19)",
              opacity: 0.03,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            01
          </div>

          {/* 12-Column Responsive Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "clamp(24px, 4vw, 56px)",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
            className="book-grid"
          >
            {/* ========================================================
                LEFT COLUMN: 3D Physical Book Mockup Plate
                ======================================================== */}
            <div
              style={{
                gridColumn: "span 12",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="book-left-col"
            >
              <div
                className="book-cover-plate"
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px",
                  aspectRatio: "2 / 3",
                  borderRadius: "6px 14px 14px 6px",
                  background: "linear-gradient(135deg, #0B0F19 0%, #171D2B 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow:
                    "-12px 18px 36px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 4px 0 8px rgba(255, 255, 255, 0.08)",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  overflow: "hidden",
                }}
              >
                {/* Book Spine Highlight Line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "14px",
                    width: "2px",
                    background: "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.18) 30%, rgba(255, 255, 255, 0.05) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Top Cover Foil Badge */}
                <div style={{ paddingLeft: "16px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#F59E0B",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Kindle Edition · 2025
                  </span>
                  <div
                    style={{
                      width: "36px",
                      height: "2px",
                      background: "#F59E0B",
                      borderRadius: "1px",
                    }}
                  />
                </div>

                {/* Main Cover Typography */}
                <div style={{ paddingLeft: "16px" }}>
                  <h3
                    itemProp="name"
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(32px, 3.8vw, 42px)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                      margin: "0 0 10px 0",
                      color: "#FFFFFF",
                      fontWeight: 400,
                    }}
                  >
                    Millionaire&apos;s Mindset
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body, -apple-system, sans-serif)",
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      color: "rgba(255, 255, 255, 0.8)",
                      margin: 0,
                      fontWeight: 500,
                      fontStyle: "italic",
                    }}
                  >
                    Transforming Dreams into Reality
                  </p>
                </div>

                {/* Bottom Cover Author Tag */}
                <div
                  style={{
                    paddingLeft: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                    paddingTop: "14px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      Written By
                    </span>
                    <span
                      itemProp="author"
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Ridham Pokiya
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11px",
                      color: "#F59E0B",
                      fontWeight: 600,
                    }}
                  >
                    ★ ★ ★ ★ ★
                  </span>
                </div>
              </div>
            </div>

            {/* ========================================================
                RIGHT COLUMN: Editorial Content, Value Points & CTAs
                ======================================================== */}
            <div
              style={{
                gridColumn: "span 12",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              className="book-right-col"
            >
              {/* Meta Row: Number & Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  paddingBottom: "14px",
                  borderBottom: "1px solid var(--border-hairline, #CBD5E1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "14px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink, #0B0F19)",
                      fontWeight: 600,
                    }}
                  >
                    NO. {BOOK.number}
                  </span>
                  <span style={{ color: "var(--border-strong, #94A3B8)" }}>/</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-secondary, #334155)",
                      fontWeight: 500,
                    }}
                  >
                    {BOOK.category}
                  </span>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    background: "var(--accent-soft, rgba(37, 99, 235, 0.08))",
                    border: "1px solid var(--accent, #2563EB)",
                    color: "var(--accent, #2563EB)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "currentColor",
                    }}
                  />
                  <span>Amazon Worldwide</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "clamp(2.4rem, 3.8vw, 3.6rem)",
                    lineHeight: 1.05,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--ink, #0B0F19)",
                    margin: "0 0 6px 0",
                  }}
                >
                  {BOOK.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body, -apple-system, sans-serif)",
                    fontSize: "clamp(16px, 1.15vw, 18.5px)",
                    color: "var(--ink-secondary, #334155)",
                    fontStyle: "italic",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {BOOK.subtitle}
                </p>
              </div>

              {/* Italic Quote Callout */}
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: "4px",
                  background: "var(--canvas-muted, #E2E8F0)",
                  borderLeft: "3px solid var(--accent, #2563EB)",
                  fontFamily: "var(--font-body, -apple-system, sans-serif)",
                  fontSize: "clamp(15px, 1.05vw, 17px)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: "var(--ink, #0B0F19)",
                }}
              >
                &ldquo;{BOOK.quote}&rdquo;
              </div>

              {/* 3 Core Value Bullet Points with Bold Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {BOOK.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: "clamp(15px, 1vw, 16.5px)",
                      lineHeight: 1.55,
                      color: "var(--ink-secondary, #334155)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent, #2563EB)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: 1.55,
                      }}
                    >
                      —
                    </span>
                    <span>{renderFormattedText(item, "var(--ink, #0B0F19)")}</span>
                  </div>
                ))}
              </div>

              {/* Tags Row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {BOOK.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11.5px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      border: "1px solid var(--border-hairline, #CBD5E1)",
                      color: "var(--ink-secondary, #334155)",
                      background: "transparent",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Dual Amazon Purchase Links */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "14px",
                  paddingTop: "6px",
                }}
                className="book-cta-row"
              >
                {/* Primary Amazon US Button */}
                <a
                  href={BOOK.amazonUs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 26px",
                    borderRadius: "2px",
                    background: "var(--accent, #2563EB)",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12.5px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                    boxShadow: "0 8px 24px rgba(37, 99, 235, 0.25)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span>Get on Amazon US</span>
                  <span aria-hidden="true">↗</span>
                </a>

                {/* Secondary Amazon India Button */}
                <a
                  href={BOOK.amazonIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "13px 24px",
                    borderRadius: "2px",
                    background: "transparent",
                    color: "var(--ink, #0B0F19)",
                    border: "1px solid var(--border-hairline, #CBD5E1)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12.5px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "all 0.25s ease",
                  }}
                >
                  <span>Amazon India (Kindle)</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hidden Microdata for Search Engines */}
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{ display: "none" }}>
            <span itemProp="name">{BOOK.publisher}</span>
          </span>
          <span itemProp="description" style={{ display: "none" }}>
            Millionaire&apos;s Mindset by Ridham Pokiya — Transforming Dreams into Reality. A practical guide to rewiring your thinking and achieving wealth.
          </span>
        </article>
      </div>

      <style jsx>{`
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
          .book-left-col {
            grid-column: span 5 !important;
          }
          .book-right-col {
            grid-column: span 7 !important;
          }
        }

        @media (max-width: 640px) {
          .book-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .book-btn-primary,
          .book-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .book-showcase-card {
            padding: 20px 16px !important;
          }
        }

        .book-btn-primary:hover {
          background: var(--accent-hover, #1D4ED8) !important;
          transform: translateY(-2px);
        }

        .book-btn-secondary:hover {
          border-color: var(--ink, #0B0F19) !important;
          background: var(--canvas-muted, #E2E8F0) !important;
          transform: translateY(-2px);
        }

        .book-cover-plate {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease;
        }

        .book-showcase-card:hover .book-cover-plate {
          transform: translateY(-4px) rotate(-1deg);
          box-shadow: -16px 24px 44px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12);
        }
      `}</style>
    </section>
  );
}
