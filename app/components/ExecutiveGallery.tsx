"use client";

import { useState, useEffect, useCallback } from "react";
import { expertPhotos } from "../lib/data";

export default function ExecutiveGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Close lightbox on Escape key & handle arrow navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => ((prev ?? 0) + 1) % expertPhotos.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) =>
          (prev ?? 0) === 0 ? expertPhotos.length - 1 : (prev ?? 0) - 1
        );
      }
    },
    [activeIdx]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div style={{ marginTop: "4.5rem", position: "relative" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 16px",
            borderRadius: 100,
            background: "rgba(0, 229, 255, 0.06)",
            border: "1px solid rgba(0, 229, 255, 0.2)",
            marginBottom: 14,
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--cyan)",
              boxShadow: "0 0 8px var(--cyan)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--cyan)",
              fontWeight: 700,
            }}
          >
            Visual Portfolio • Executive Leadership
          </span>
        </div>

        <h3
          className="font-display"
          style={{
            fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 10,
          }}
        >
          The Engineer Behind The <span className="g-cyan">Systems</span>
        </h3>
        <p
          style={{
            color: "var(--t3)",
            fontSize: 14,
            maxWidth: "58ch",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          A visual perspective on executive leadership, high-performance cloud architecture, and mission-critical SaaS delivery.
        </p>
      </div>

      {/* 4-Image Aesthetic Gallery Grid */}
      <div
        className="expert-gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 20,
        }}
      >
        {expertPhotos.map((photo, index) => {
          const isHovered = hoveredIdx === index;
          return (
            <div
              key={photo.id}
              onClick={() => setActiveIdx(index)}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                aspectRatio: "3 / 4",
                cursor: "pointer",
                border: isHovered
                  ? `1px solid ${photo.accent}`
                  : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: isHovered
                  ? `0 24px 50px rgba(0, 0, 0, 0.7), 0 0 35px ${photo.accent}35`
                  : "0 10px 30px rgba(0, 0, 0, 0.45)",
                transform: isHovered ? "translateY(-8px) scale(1.015)" : "none",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                background: "var(--bg-1)",
              }}
              className="gallery-card-sheen"
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={`${photo.title} - Ridham Pokiya`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  transform: isHovered ? "scale(1.08)" : "scale(1)",
                  transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Side RP Round Icon Badge */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(5, 3, 18, 0.82)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: isHovered
                    ? `1.5px solid ${photo.accent}`
                    : "1px solid rgba(0, 229, 255, 0.4)",
                  boxShadow: isHovered
                    ? `0 0 18px ${photo.accent}70, inset 0 0 10px ${photo.accent}30`
                    : "0 4px 14px rgba(0, 0, 0, 0.6), inset 0 0 8px rgba(0, 229, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                  transform: isHovered ? "scale(1.1) rotate(6deg)" : "scale(1)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                title="Ridham Pokiya • Verified Expert"
              >
                <span
                  style={{
                    fontFamily: "var(--font-code)",
                    fontSize: 11,
                    fontWeight: 800,
                    color: isHovered ? photo.accent : "var(--cyan)",
                    letterSpacing: "0.08em",
                    lineHeight: 1,
                  }}
                >
                  RP<span style={{ color: "var(--emerald)" }}>.</span>
                </span>
              </div>

              {/* Tag / Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  zIndex: 3,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-code)",
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 100,
                    background: "rgba(5, 3, 18, 0.75)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "var(--t2)",
                    fontWeight: 700,
                  }}
                >
                  {photo.tag}
                </span>
              </div>

              {/* Bottom Gradient Scrim & Info */}
              <div
                style={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  padding: "40px 18px 18px",
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(3, 1, 14, 0.7) 35%, rgba(3, 1, 14, 0.96) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  zIndex: 2,
                  transition: "transform 0.4s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  {photo.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-code)",
                    fontSize: 11,
                    color: photo.accent,
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {photo.org}
                </p>

                {/* Hover reveal hint */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 6,
                    opacity: isHovered ? 1 : 0.65,
                    transform: isHovered ? "translateX(2px)" : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--t3)",
                    }}
                  >
                    View HD Portrait ↗
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          onClick={() => setActiveIdx(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(1, 0, 10, 0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: 580,
              width: "100%",
              maxHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              background: "rgba(10, 8, 25, 0.95)",
              border: `1.5px solid ${expertPhotos[activeIdx].accent}40`,
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: `0 30px 90px rgba(0, 0, 0, 0.8), 0 0 50px ${expertPhotos[activeIdx].accent}30`,
              animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(5, 3, 18, 0.6)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {/* Round RP Icon in Lightbox */}
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "rgba(0, 229, 255, 0.12)",
                    border: "1px solid var(--cyan)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 10px rgba(0, 229, 255, 0.3)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: 10,
                      fontWeight: 800,
                      color: "var(--cyan)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    RP<span style={{ color: "var(--emerald)" }}>.</span>
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {expertPhotos[activeIdx].title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: 10,
                      color: expertPhotos[activeIdx].accent,
                      margin: 0,
                    }}
                  >
                    {expertPhotos[activeIdx].org}
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setActiveIdx(null)}
                aria-label="Close image preview"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: 16,
                  transition: "all 0.2s ease",
                }}
              >
                ✕
              </button>
            </div>

            {/* Main Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxHeight: "68vh",
                overflow: "hidden",
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={expertPhotos[activeIdx].src}
                alt={expertPhotos[activeIdx].title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "68vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              {/* Previous button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) =>
                    (prev ?? 0) === 0 ? expertPhotos.length - 1 : (prev ?? 0) - 1
                  );
                }}
                aria-label="Previous image"
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "rgba(5, 3, 18, 0.75)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  transition: "all 0.2s ease",
                }}
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) =>
                    ((prev ?? 0) + 1) % expertPhotos.length
                  );
                }}
                aria-label="Next image"
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "rgba(5, 3, 18, 0.75)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  transition: "all 0.2s ease",
                }}
              >
                ›
              </button>
            </div>

            {/* Footer description & pagination */}
            <div
              style={{
                padding: "16px 22px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(5, 3, 18, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <p
                style={{
                  fontSize: 12.5,
                  color: "var(--t2)",
                  lineHeight: 1.5,
                  margin: 0,
                  maxWidth: "80%",
                }}
              >
                {expertPhotos[activeIdx].description}
              </p>

              {/* Dots indicator */}
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                {expertPhotos.map((_, i) => (
                  <span
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx(i);
                    }}
                    style={{
                      width: activeIdx === i ? 18 : 6,
                      height: 6,
                      borderRadius: 10,
                      background:
                        activeIdx === i
                          ? expertPhotos[activeIdx].accent
                          : "rgba(255, 255, 255, 0.2)",
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
    </div>
  );
}

