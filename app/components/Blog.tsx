"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "../lib/data";

interface ArticleItem {
  id: number;
  number: string;
  title: string;
  description: string;
  url: string;
  platform: "Dev.to" | "Medium" | "AWS Builders";
  reading_time_minutes: number;
  date: string;
}

const ARTICLES: ArticleItem[] = [
  {
    id: 1,
    number: "01",
    title: "Architecting Heeratrack: Multi-Tenant Diamond ERP on AWS Serverless",
    description:
      "A technical walkthrough of database tenant isolation, event-driven inventory tracking, and slashing operational costs by 40%.",
    url: "https://dev.to/ridhampokiya2110",
    platform: "Dev.to",
    reading_time_minutes: 6,
    date: "2024",
  },
  {
    id: 2,
    number: "02",
    title: "Zero-Downtime Infrastructure: Surviving High-Throughput Traffic Spikes",
    description:
      "Patterns for resilient Kubernetes topologies, auto-scaling ECS clusters, and proactive CloudWatch anomaly detection.",
    url: personalInfo.medium,
    platform: "Medium",
    reading_time_minutes: 5,
    date: "2024",
  },
  {
    id: 3,
    number: "03",
    title: "Engineering Validexio: Automated Data Pipelines & Verification Engine",
    description:
      "Building high-throughput verification pipelines handling 100K+ records with sub-second latency and zero data leakage.",
    url: personalInfo.awsBuilder,
    platform: "AWS Builders",
    reading_time_minutes: 7,
    date: "2024",
  },
  {
    id: 4,
    number: "04",
    title: "Pragmatic DevOps: CI/CD Pipelines That Actually Prevent Outages",
    description:
      "Why automated rollback strategies, ephemeral preview environments, and immutable containers beat manual deploy checklists.",
    url: "https://dev.to/ridhampokiya2110",
    platform: "Dev.to",
    reading_time_minutes: 4,
    date: "2024",
  },
];

export default function Blog() {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="blog"
      style={{
        position: "relative",
        background: "var(--canvas, #FFFFFF)",
        color: "var(--ink, #0B0F19)",
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
        borderBottom: "1px solid var(--border-hairline, #CBD5E1)",
      }}
    >
      {/* Anchor alias for #writing */}
      <div id="writing" style={{ position: "absolute", top: 0, left: 0 }} aria-hidden="true" />

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
            marginBottom: "clamp(32px, 4.5vw, 56px)",
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
              (08) Writing / Publications
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
                  Words on{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--accent, #2438FF)",
                    }}
                  >
                    systems
                  </span>
                  .
                  <span className="sr-only">Thoughts &amp; Articles</span>
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
                maxWidth: "520px",
                fontWeight: 400,
              }}
            >
              Engineering deep-dives, AWS architectures, and operational notes on building resilient software.
            </p>
          </div>
        </div>

        {/* Editorial Articles List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}
        >
          {ARTICLES.map((article, idx) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="glass writing-item-row"
              style={{
                position: "relative",
                display: "block",
                padding: "clamp(24px, 3.2vw, 36px) clamp(20px, 3.5vw, 40px)",
                textDecoration: "none",
                color: "inherit",
                background: "var(--canvas-surface, #EDEAE2)",
                border: "1px solid var(--border-hairline, #DAD6CC)",
                borderRadius: "6px",
                overflow: "hidden",
                transition: "border-color 0.3s ease, background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              {/* Grid: Numeral (1 col), Title & Desc (8 cols), Meta & Link (3 cols) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: "clamp(16px, 2.5vw, 32px)",
                  alignItems: "center",
                }}
              >
                {/* Number */}
                <div
                  style={{ gridColumn: "span 1" }}
                  className="hide-mobile"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "clamp(18px, 1.6vw, 22px)",
                      letterSpacing: "0.1em",
                      color: "var(--ink-muted, #5E5D58)",
                      lineHeight: 1,
                      fontWeight: 600,
                      display: "block",
                    }}
                  >
                    {article.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div
                  style={{ gridColumn: "span 12" }}
                  className="writing-title-col"
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(1.5rem, 2.3vw, 2.2rem)",
                      lineHeight: 1.25,
                      fontWeight: 400,
                      letterSpacing: "-0.018em",
                      color: "var(--ink, #0F0F0E)",
                      marginBottom: "12px",
                      transition: "color 0.25s ease",
                    }}
                    className="writing-title"
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body, -apple-system, sans-serif)",
                      fontSize: "clamp(15.5px, 1.1vw, 17.5px)",
                      lineHeight: 1.65,
                      color: "var(--ink-secondary, #383733)",
                      margin: 0,
                      maxWidth: "680px",
                    }}
                  >
                    {article.description}
                  </p>
                </div>

                {/* Platform Badge & Read Time */}
                <div
                  style={{ gridColumn: "span 12" }}
                  className="writing-meta-col"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      flexWrap: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "6px 14px",
                        borderRadius: "100px",
                        border: "1px solid var(--border-hairline, #DAD6CC)",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--ink, #0F0F0E)",
                        background: "var(--canvas-muted)",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {article.platform}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "13.5px",
                        letterSpacing: "0.08em",
                        color: "var(--ink-muted, #5E5D58)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {article.reading_time_minutes} min read
                    </span>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        border: "1px solid var(--border-hairline, #DAD6CC)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent, #2438FF)",
                        fontSize: "16px",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: "auto",
                        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
                      }}
                      className="writing-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Explore External Platforms Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            paddingTop: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-muted, #5E5D58)",
              fontWeight: 600,
            }}
          >
            Read more on:
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="underline-draw"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink, #0F0F0E)",
                textDecoration: "none",
                fontWeight: 600,
                padding: "8px 0",
              }}
            >
              Explore Medium ↗
            </a>
            <span style={{ color: "var(--border-hairline, #DAD6CC)" }}>/</span>
            <a
              href={personalInfo.devto}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="underline-draw"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink, #0F0F0E)",
                textDecoration: "none",
                fontWeight: 600,
                padding: "8px 0",
              }}
            >
              Explore Dev.to ↗
            </a>
            <span style={{ color: "var(--border-hairline, #DAD6CC)" }}>/</span>
            <a
              href={personalInfo.awsBuilder}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="underline-draw"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink, #0F0F0E)",
                textDecoration: "none",
                fontWeight: 600,
                padding: "8px 0",
              }}
            >
              Explore AWS Builders ↗
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-item-row:hover {
          border-color: var(--border-strong, #B8B4A8) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(15, 15, 14, 0.05);
        }
        .writing-item-row:hover .writing-title {
          color: var(--accent, #2438FF) !important;
        }
        .writing-item-row:hover .writing-arrow {
          transform: translate(2px, -2px);
          background: var(--accent, #2438FF) !important;
          color: #FFFFFF !important;
          border-color: var(--accent, #2438FF) !important;
        }
        @media (min-width: 1024px) {
          .header-left-col {
            grid-column: span 7 !important;
          }
          .header-right-col {
            grid-column: span 5 !important;
          }
          .writing-title-col {
            grid-column: 2 / span 8 !important;
          }
          .writing-meta-col {
            grid-column: 10 / span 3 !important;
            justify-self: end;
          }
        }
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
          .writing-meta-col {
            margin-top: 8px;
          }
        }
      `}</style>
    </section>
  );
}
