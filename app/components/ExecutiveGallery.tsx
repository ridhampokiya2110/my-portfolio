"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { expertPhotos } from "../lib/data";

export default function ExecutiveGallery() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Keyboard navigation for fullscreen lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (fullscreenIdx === null) return;
      if (e.key === "Escape") setFullscreenIdx(null);
      if (e.key === "ArrowRight") {
        setFullscreenIdx((prev) => ((prev ?? 0) + 1) % expertPhotos.length);
      }
      if (e.key === "ArrowLeft") {
        setFullscreenIdx((prev) =>
          (prev ?? 0) === 0 ? expertPhotos.length - 1 : (prev ?? 0) - 1
        );
      }
    },
    [fullscreenIdx]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="presence"
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
          maxWidth: "1440px",
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
                fontSize: "clamp(11.5px, 0.9vw, 13px)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink-secondary, #403F3C)",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              (06) Studio portraiture / Leadership
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "clamp(2.5rem, 6vw, 5.25rem)",
                lineHeight: 0.98,
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
                  The engineer behind the{" "}
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
                  <span className="sr-only">Executive Leadership</span>
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
              A visual perspective on founder leadership, high-performance cloud architecture, and engineering execution.
            </p>
          </div>
        </div>

        {/* Big-Screen Interactive Cinema Canvas */}
        <div
          className="cinema-gallery-container"
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            minHeight: "clamp(640px, 80vh, 880px)",
            position: "relative",
          }}
        >
          {expertPhotos.map((photo, index) => {
            const isActive = activeIdx === index;
            return (
              <div
                key={photo.id}
                onClick={() => {
                  if (isActive) {
                    setFullscreenIdx(index);
                  } else {
                    setActiveIdx(index);
                  }
                }}
                onMouseEnter={() => setActiveIdx(index)}
                style={{
                  position: "relative",
                  flex: isActive ? 2.1 : 1.2,
                  borderRadius: "6px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "flex 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  background: "#0F0F0E",
                  border: "1px solid var(--border-hairline, #DAD6CC)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="cinema-card"
                data-cursor="expand"
              >
                {/* Background Portrait Image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={photo.src}
                    alt={`${photo.title} — Ridham Pokiya`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transform: isActive ? "scale(1.025)" : "scale(1)",
                      filter: isActive
                        ? "contrast(1.03) brightness(0.92)"
                        : "contrast(1.0) brightness(0.7) grayscale(20%)",
                      transition:
                        "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease",
                      display: "block",
                    }}
                  />
                  {/* Subtle dark gradient overlay for text legibility */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,15,14,0.3) 0%, rgba(15,15,14,0.05) 40%, rgba(15,15,14,0.85) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Top Meta Bar */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "13.5px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#F4F1EA",
                      fontWeight: 600,
                      background: "rgba(15, 15, 14, 0.6)",
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    0{index + 1}
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12.5px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#C7C4BC",
                      background: "rgba(15, 15, 14, 0.6)",
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    {photo.tag}
                  </div>
                </div>

                {/* Bottom Content Tray */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "clamp(20px, 3vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* Domain Tag */}
                  <p
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12.5px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--accent, #2438FF)",
                      margin: "0 0 6px 0",
                      fontWeight: 600,
                    }}
                  >
                    {photo.org}
                  </p>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                      fontSize: "clamp(1.75rem, 2.5vw, 2.65rem)",
                      lineHeight: 1.05,
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      color: "#F4F1EA",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {photo.title}
                  </h3>

                  {/* Expanded description (visible when card is active or hovered) */}
                  <div
                    style={{
                      maxHeight: isActive ? "160px" : "0px",
                      opacity: isActive ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    className="card-expanded-info"
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: "clamp(13.5px, 0.95vw, 15px)",
                        lineHeight: 1.6,
                        color: "#C7C4BC",
                        margin: "0 0 16px 0",
                      }}
                    >
                      {photo.description}
                    </p>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "12.5px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#F4F1EA",
                        fontWeight: 600,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
                        paddingBottom: "2px",
                      }}
                    >
                      <span>View full portrait</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {fullscreenIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="High-resolution portrait lightbox"
          onClick={() => setFullscreenIdx(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(15, 15, 14, 0.96)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(16px, 3vw, 32px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "960px",
              width: "100%",
              maxHeight: "92vh",
              background: "#0F0F0E",
              border: "1px solid #272624",
              borderRadius: "4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                borderBottom: "1px solid #272624",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12.5px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--accent, #2438FF)",
                    margin: "0 0 4px 0",
                  }}
                >
                  0{fullscreenIdx + 1} / 0{expertPhotos.length} • {expertPhotos[fullscreenIdx].tag}
                </p>
                <h4
                  style={{
                    fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "1.5rem",
                    color: "#F4F1EA",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {expertPhotos[fullscreenIdx].title} — {expertPhotos[fullscreenIdx].org}
                </h4>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setFullscreenIdx(null)}
                aria-label="Close portrait view"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "2px",
                  background: "transparent",
                  border: "1px solid #272624",
                  color: "#F4F1EA",
                  fontSize: "18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s ease",
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Image Area */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxHeight: "68vh",
                overflow: "hidden",
                background: "#050312",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={expertPhotos[fullscreenIdx].src}
                alt={expertPhotos[fullscreenIdx].title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "68vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenIdx((prev) =>
                    (prev ?? 0) === 0 ? expertPhotos.length - 1 : (prev ?? 0) - 1
                  );
                }}
                aria-label="Previous image"
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "2px",
                  background: "rgba(15, 15, 14, 0.8)",
                  border: "1px solid #3A3935",
                  color: "#F4F1EA",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                ←
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenIdx((prev) =>
                    ((prev ?? 0) + 1) % expertPhotos.length
                  );
                }}
                aria-label="Next image"
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "2px",
                  background: "rgba(15, 15, 14, 0.8)",
                  border: "1px solid #3A3935",
                  color: "#F4F1EA",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                →
              </button>
            </div>

            {/* Modal Footer Description */}
            <div
              style={{
                padding: "16px 24px",
                borderTop: "1px solid #272624",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#C7C4BC",
                  margin: 0,
                }}
              >
                {expertPhotos[fullscreenIdx].description} {expertPhotos[fullscreenIdx].details}
              </p>

              <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                {expertPhotos.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    onClick={() => setFullscreenIdx(dotIdx)}
                    style={{
                      width: fullscreenIdx === dotIdx ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "1px",
                      background:
                        fullscreenIdx === dotIdx ? "var(--accent, #2438FF)" : "#3A3935",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
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
        @media (max-width: 899px) {
          .cinema-gallery-container {
            flex-direction: column !important;
            min-height: auto !important;
          }
          .cinema-card {
            flex: 1 1 480px !important;
            min-height: 480px !important;
          }
          .card-expanded-info {
            max-height: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
