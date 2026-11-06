"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CaseStudyCardData } from "@/data/work";
import ArchitectureDiagram from "./ArchitectureDiagram";

interface StickyCardStackProps {
  cards: CaseStudyCardData[];
}

interface SingleCardProps {
  card: CaseStudyCardData;
  index: number;
  total: number;
}

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

function SingleCard({ card, index, total }: SingleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isLast = index === total - 1;

  // Track the scroll of this specific card relative to the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Stacking scale, opacity, and slight translation up as next card slides over
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion || isLast ? [1, 1] : [1, 0.94]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion || isLast ? [1, 1] : [1, 0.6]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion || isLast ? ["0px", "0px"] : ["0px", "-16px"]
  );

  // Parallax on the framed visual
  const visualParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-4%", "4%"]
  );

  // Theme-adaptive palettes respecting user contrast request
  const isInk = card.theme === "ink";
  const bg = isInk ? "var(--inverted-surface, #1C1C19)" : "var(--canvas-surface, #E8E4D9)";
  const textColor = isInk ? "var(--inverted-ink, #F4F1EA)" : "var(--ink, #0F0F0E)";
  const secondaryText = isInk ? "var(--inverted-muted, #C7C4BC)" : "var(--ink-secondary, #302F2C)";
  const mutedText = isInk ? "var(--inverted-muted, #9E9C96)" : "var(--ink-muted, #5E5D58)";
  const borderColor = isInk ? "var(--border-strong, #3A3934)" : "var(--border-hairline, #CFC7B7)";

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      ref={cardRef}
      className="sticky-card-wrapper"
      style={{
        position: "sticky",
        top: `calc(8vh + ${index * 16}px)`,
        zIndex: index + 1,
        marginBottom: isLast ? "0" : "clamp(32px, 6vh, 64px)",
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y: translateY,
          transformOrigin: "top center",
          background: bg,
          color: textColor,
          border: `1px solid ${borderColor}`,
          borderRadius: "4px",
          padding: "clamp(24px, 4.5vw, 56px)",
          minHeight: "clamp(580px, 80vh, 760px)",
          boxShadow: isInk
            ? "0 25px 60px rgba(0, 0, 0, 0.55)"
            : "0 20px 45px rgba(15, 15, 14, 0.06)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="case-study-card"
      >
        {/* Top Meta Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            paddingBottom: "18px",
            borderBottom: `1px solid ${borderColor}`,
            marginBottom: "clamp(24px, 3.5vw, 36px)",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "clamp(13px, 0.95vw, 15px)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: mutedText,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "clamp(20px, 1.8vw, 26px)",
                color: textColor,
                lineHeight: 1,
                fontWeight: 600,
              }}
            >
              {card.number}
            </span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: secondaryText, fontWeight: 600 }}>
              {card.category}
            </span>
          </div>
          <div style={{ fontWeight: 600 }}>{card.year}</div>
        </div>

        {/* 12-Column Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(24px, 3.5vw, 48px)",
            alignItems: "start",
            flex: 1,
          }}
        >
          {/* Left Column: Scope, Problem, Built, Outcome (Cols 1-5) */}
          <div
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
            className="card-left-col"
          >
            <div>
              {/* Title in Instrument Serif */}
              <h3
                style={{
                  fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                  fontSize: "clamp(2.6rem, 4.8vw, 4.4rem)",
                  lineHeight: 1.02,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: textColor,
                  margin: "0 0 24px 0",
                }}
              >
                {card.title}
              </h3>

              {/* Three Structured Labelled Blocks */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "28px",
                }}
              >
                {/* Block 1: Problem */}
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "clamp(11px, 0.9vw, 13px)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: mutedText,
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Problem
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body, -apple-system, sans-serif)",
                      fontSize: "clamp(16.5px, 1.2vw, 19px)",
                      lineHeight: 1.65,
                      color: secondaryText,
                      margin: 0,
                    }}
                  >
                    {renderFormattedText(card.problem, textColor)}
                  </p>
                </div>

                {/* Block 2: What I Built */}
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "clamp(11px, 0.9vw, 13px)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: mutedText,
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    What I built
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body, -apple-system, sans-serif)",
                      fontSize: "clamp(16.5px, 1.2vw, 19px)",
                      lineHeight: 1.65,
                      color: secondaryText,
                      margin: 0,
                    }}
                  >
                    {renderFormattedText(card.whatIBuilt, textColor)}
                  </p>
                </div>

                {/* Block 3: Result / Outcome */}
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "clamp(11px, 0.9vw, 13px)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: isInk ? "var(--accent, #4D5EFF)" : "var(--accent, #2438FF)",
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Result
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body, -apple-system, sans-serif)",
                      fontSize: "clamp(17px, 1.2vw, 19.5px)",
                      lineHeight: 1.65,
                      color: textColor,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {renderFormattedText(card.result, textColor)}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Stack Chips + Case Link */}
            <div>
              {/* Stack Chips with Hairline Outline */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {card.stack.map((item) => (
                  <span
                    key={item}
                    style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      border: `1px solid ${borderColor}`,
                      borderRadius: "100px",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "clamp(13px, 0.9vw, 14.5px)",
                      letterSpacing: "0.06em",
                      color: secondaryText,
                      background: "transparent",
                      textTransform: "none",
                      lineHeight: 1.4,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* View Case Study Link with Underline-Draw on Hover */}
              <a
                href={card.link}
                className="case-study-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "clamp(12px, 0.95vw, 13.5px)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent, #2438FF)",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "4px",
                  fontWeight: 600,
                }}
              >
                <span>View case study</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Framed Architecture Visual (Cols 6-12) */}
          <div
            style={{
              gridColumn: "span 12",
              height: "100%",
              minHeight: "340px",
              display: "flex",
              flexDirection: "column",
            }}
            className="card-right-col"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                flex: 1,
                minHeight: "360px",
                borderRadius: "4px",
                border: `1px solid ${borderColor}`,
                background: "var(--canvas-muted)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
              className="visual-frame"
            >
              <motion.div
                style={{
                  y: visualParallax,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="visual-inner"
              >
                <ArchitectureDiagram
                  type={card.visual.diagramType}
                  theme={card.theme}
                />
              </motion.div>

              {/* Edge Hairline Highlight */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "4px",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Visual Caption */}
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
                color: mutedText,
              }}
            >
              <span>{card.visual.caption}</span>
              <span style={{ fontWeight: 600 }}>Fig. {card.number}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StickyCardStack({ cards }: StickyCardStackProps) {
  return (
    <div className="sticky-stack-container" style={{ position: "relative", width: "100%" }}>
      {cards.map((card, index) => (
        <SingleCard
          key={card.id}
          card={card}
          index={index}
          total={cards.length}
        />
      ))}

      <style>{`
        @media (min-width: 900px) {
          .card-left-col {
            grid-column: span 5 !important;
          }
          .card-right-col {
            grid-column: span 7 !important;
          }
        }
        @media (max-width: 899px) {
          .case-study-card {
            padding: clamp(20px, 4vw, 32px) !important;
            min-height: auto !important;
          }
          .card-left-col {
            grid-column: span 12 !important;
            height: auto !important;
            min-height: auto !important;
            margin-bottom: 24px !important;
            display: block !important;
          }
          .card-right-col {
            grid-column: span 12 !important;
            height: auto !important;
            min-height: auto !important;
          }
          .visual-frame {
            min-height: 220px !important;
            height: auto !important;
            aspect-ratio: 16 / 10 !important;
            padding: 12px !important;
          }
        }
        @media (max-width: 768px) {
          .sticky-card-wrapper {
            position: relative !important;
            top: auto !important;
            min-height: auto !important;
            margin-bottom: 24px !important;
          }
          .case-study-card {
            min-height: auto !important;
          }
        }

        /* Underline draw on case link */
        .case-study-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .case-study-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Visual zoom on hover */
        .visual-frame .visual-inner {
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .case-study-card:hover .visual-inner {
          transform: scale(1.025);
        }
      `}</style>
    </div>
  );
}
