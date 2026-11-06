"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ArchitectureDiagram from "./ArchitectureDiagram";

interface ProductItem {
  id: string;
  number: string;
  category: string;
  title: string;
  problem: string;
  bullets: string[];
  stack: string[];
  statusMetric: string;
  visitUrl: string;
  storyUrl: string;
  theme: "off-white" | "ink";
  diagramType: "heeratrack" | "validexio";
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

const PRODUCTS: ProductItem[] = [
  {
    id: "heeratrack",
    number: "01",
    category: "Diamond ERP / Multi-Tenant SaaS",
    title: "Heeratrack",
    problem:
      "Eliminates spreadsheet chaos, manual calculations, and untracked parcel loss across diamond cutting, valuation, and wholesale export operations.",
    bullets: [
      "**Live parcel tracking** from rough intake to polished international export",
      "**Sub-5ms multi-tenant ledger** calculating lot margins & brokerage instantly",
      "**Automated barcodes & digital vault** preventing inventory loss and audit leaks",
    ],
    stack: ["Next.js 16", "AWS ECS", "PostgreSQL", "Docker", "Redis"],
    statusMetric: "Live • Production ERP",
    visitUrl: "https://heeratrack.com",
    storyUrl: "#contact",
    theme: "off-white",
    diagramType: "heeratrack",
  },
  {
    id: "validexio",
    number: "02",
    category: "Startup Intelligence / Validation Engine",
    title: "Validexio",
    problem:
      "Stops founders and operators from spending months building unvalidated software without objective market demand signals.",
    bullets: [
      "**Competitor density mapping** & instant market saturation scoring",
      "**Vector AI similarity search** across tech startups & venture outcomes",
      "**Fast 60-second intelligence reports** replacing manual market research",
    ],
    stack: ["TypeScript", "FastAPI", "AWS Lambda", "Vector Search", "DynamoDB"],
    statusMetric: "Live • Founder Intelligence",
    visitUrl: "https://validexio.com",
    storyUrl: "#contact",
    theme: "off-white",
    diagramType: "validexio",
  },
];

function ProductCard({
  product,
  index,
  total,
}: {
  product: ProductItem;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

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

  const visualParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-4%", "4%"]
  );

  const isInk = product.theme === "ink";
  const bg = isInk ? "var(--inverted-canvas, #0F0F0E)" : product.id === "validexio" ? "var(--validexio-bg, #FFFFFF)" : "var(--canvas-surface, #F4F1EA)";
  const textColor = isInk ? "var(--inverted-ink, #F4F1EA)" : product.id === "validexio" ? "var(--validexio-ink, #0F0F0E)" : "var(--ink, #0F0F0E)";
  const secondaryText = isInk ? "var(--inverted-muted, #C7C4BC)" : "var(--ink-secondary, #403F3C)";
  const mutedText = isInk ? "var(--inverted-muted, #9E9C96)" : "var(--ink-muted, #595854)";
  const borderColor = isInk ? "var(--inverted-border, #272624)" : "var(--border-hairline, #DAD6CC)";

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
        className="product-card"
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
                fontSize: "clamp(18px, 1.4vw, 22px)",
                color: textColor,
                lineHeight: 1,
                fontWeight: 600,
              }}
            >
              {product.number}
            </span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: secondaryText, fontWeight: 600 }}>
              {product.category}
            </span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              borderRadius: "100px",
              border: `1px solid ${borderColor}`,
              fontSize: "clamp(12px, 0.85vw, 13.5px)",
              color: isInk ? "var(--accent, #4D5EFF)" : "var(--accent, #2438FF)",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "currentColor",
              }}
            />
            <span>{product.statusMetric}</span>
          </div>
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
          {/* Left Column: Scope, Problem, 3 Bullets, Stack, CTAs (Cols 1-5) */}
          <div
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
            className="product-left-col"
          >
            <div>
              {/* Title in Instrument Serif */}
              <h3
                style={{
                  fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                  fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
                  lineHeight: 1.02,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: textColor,
                  margin: "0 0 20px 0",
                }}
              >
                {product.title}
              </h3>

              {/* Problem Paragraph in Geist */}
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: "clamp(16px, 1.1vw, 18px)",
                  lineHeight: 1.68,
                  color: secondaryText,
                  margin: "0 0 24px 0",
                }}
              >
                {product.problem}
              </p>

              {/* 3 Value Bullets */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  marginBottom: "28px",
                }}
              >
                {product.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: "clamp(15.5px, 1.05vw, 17px)",
                      lineHeight: 1.58,
                      color: secondaryText,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13px",
                        color: isInk
                          ? "var(--accent, #4D5EFF)"
                          : "var(--accent, #2438FF)",
                        marginTop: "2px",
                        fontWeight: 700,
                      }}
                    >
                      —
                    </span>
                    <span>{renderFormattedText(bullet, textColor)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Stack Chips + CTAs */}
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
                {product.stack.map((item) => (
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
                      lineHeight: 1.4,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Buttons: "Visit [Product] ↗" and "Read Build Story →" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "24px",
                }}
              >
                <a
                  href={product.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="product-visit-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "15px 28px",
                    background: isInk ? "#F4F1EA" : "#0F0F0E",
                    color: isInk ? "#0F0F0E" : "#F4F1EA",
                    borderRadius: "2px",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "clamp(12px, 0.95vw, 13.5px)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "transform 0.25s ease, opacity 0.25s ease",
                  }}
                >
                  <span>Visit {product.title}</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={product.storyUrl}
                  className="product-story-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "clamp(12px, 0.95vw, 13.5px)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: isInk
                      ? "var(--accent, #4D5EFF)"
                      : "var(--accent, #2438FF)",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  <span>Consult on Architecture</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
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
            className="product-right-col"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                flex: 1,
                minHeight: "360px",
                borderRadius: "4px",
                border: `1px solid ${borderColor}`,
                background: isInk ? "var(--inverted-surface, #171715)" : "var(--canvas-muted, #EDEAE2)",
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
                  type={product.diagramType}
                  theme={product.theme}
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
                fontSize: "12px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: mutedText,
              }}
            >
              <span>{product.title} Architecture</span>
              <span style={{ fontWeight: 600 }}>Fig. {product.number}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Products() {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="products"
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
              (03) Products / Owned SaaS
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
                  Software I{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--accent, #2438FF)",
                    }}
                  >
                    own
                  </span>
                  .
                  <span className="sr-only">SaaS Platforms Built</span>
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
                maxWidth: "460px",
                fontWeight: 400,
              }}
            >
              Products built from real operational bottlenecks, scaled on cloud infrastructure.
            </p>
          </div>
        </div>

        {/* Sticky Stacked Product Panels */}
        <div style={{ position: "relative", width: "100%" }}>
          {PRODUCTS.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              total={PRODUCTS.length}
            />
          ))}
        </div>
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
          .product-left-col {
            grid-column: span 5 !important;
          }
          .product-right-col {
            grid-column: span 7 !important;
          }
        }
        @media (max-width: 899px) {
          .product-card {
            padding: clamp(20px, 4vw, 32px) !important;
            min-height: auto !important;
          }
          .product-left-col {
            grid-column: span 12 !important;
            height: auto !important;
            min-height: auto !important;
            margin-bottom: 24px !important;
            display: block !important;
          }
          .product-right-col {
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
          .product-card {
            min-height: auto !important;
          }
        }

        .product-visit-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .product-story-link::after {
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
        .product-story-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .visual-frame .visual-inner {
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .product-card:hover .visual-inner {
          transform: scale(1.025);
        }
      `}</style>
    </section>
  );
}
