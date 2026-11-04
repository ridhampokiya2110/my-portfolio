"use client";

import { motion, AnimatePresence, MotionValue } from "framer-motion";

export interface StepItem {
  number: string;
  title: string;
  phaseTag?: string;
  description: string;
  youGet: string;
  deliverables?: string[];
  checkpoint?: string;
}

interface ProgressRailProps {
  steps: StepItem[];
  activeStep: number;
  scrollProgress: MotionValue<number>;
  onStepClick: (index: number) => void;
  shouldReduceMotion?: boolean | null;
}

export default function ProgressRail({
  steps,
  activeStep,
  scrollProgress,
  onStepClick,
  shouldReduceMotion = false,
}: ProgressRailProps) {
  const maskTransition = {
    duration: shouldReduceMotion ? 0 : 0.45,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "clamp(100px, 14vh, 140px)",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
      className="approach-progress-rail"
    >
      {/* Active Stage Indicator Pill */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "6px 14px",
          borderRadius: "100px",
          background: "var(--canvas-surface, #EDEAE2)",
          border: "1px solid var(--border-hairline, #DAD6CC)",
          width: "fit-content",
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--accent, #2438FF)",
            display: "inline-block",
            boxShadow: "0 0 8px rgba(36, 56, 255, 0.6)",
          }}
          className="stage-pulse-dot"
        />
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "clamp(10.5px, 0.85vw, 12px)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ink, #0F0F0E)",
            fontWeight: 600,
          }}
        >
          STAGE ({steps[activeStep]?.number || "01"} / 04)
        </span>
      </div>

      {/* Current Step Title with Vertical Mask Transition */}
      <div
        style={{
          height: "clamp(46px, 5.5vw, 68px)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-105%", opacity: 0 }}
            transition={maskTransition}
            style={{
              fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
              fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
              lineHeight: 1,
              color: "var(--ink, #0F0F0E)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            {steps[activeStep]?.title}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical Rail Line with 4 Step Markers */}
      <div
        style={{
          position: "relative",
          paddingLeft: "32px",
          marginTop: "12px",
        }}
      >
        {/* Hairline Rail Track */}
        <div
          style={{
            position: "absolute",
            left: "5px",
            top: "10px",
            bottom: "10px",
            width: "2px",
            background: "var(--border-hairline, #DAD6CC)",
            borderRadius: "2px",
          }}
          aria-hidden="true"
        />

        {/* Scrubbed Progress Fill Line */}
        <motion.div
          style={{
            position: "absolute",
            left: "5px",
            top: "10px",
            bottom: "10px",
            width: "2px",
            background: "var(--accent, #2438FF)",
            scaleY: shouldReduceMotion ? 1 : scrollProgress,
            transformOrigin: "top",
            borderRadius: "2px",
          }}
          aria-hidden="true"
        />

        {/* 4 Step Clickable Nodes */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {steps.map((step, idx) => {
            const isPastOrActive = idx <= activeStep;
            const isActive = idx === activeStep;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => onStepClick(idx)}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  background: isActive ? "var(--canvas-surface, #EDEAE2)" : "transparent",
                  border: `1px solid ${isActive ? "var(--accent, #2438FF)" : "transparent"}`,
                  borderRadius: "4px",
                  padding: "10px 16px 10px 0",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                }}
                aria-label={`Jump to step ${step.number}: ${step.title}`}
                aria-current={isActive ? "step" : undefined}
                className="progress-rail-btn"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {/* Marker Node on Track */}
                  <span
                    style={{
                      position: "absolute",
                      left: "-32px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: isActive
                        ? "var(--accent, #2438FF)"
                        : isPastOrActive
                        ? "var(--ink, #0F0F0E)"
                        : "var(--canvas, #F4F1EA)",
                      border: `2px solid ${
                        isActive
                          ? "var(--accent, #2438FF)"
                          : isPastOrActive
                          ? "var(--ink, #0F0F0E)"
                          : "var(--border-hairline, #DAD6CC)"
                      }`,
                      transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      transform: isActive ? "scale(1.35)" : "scale(1)",
                      boxShadow: isActive ? "0 0 10px rgba(36, 56, 255, 0.5)" : "none",
                      display: "block",
                    }}
                    aria-hidden="true"
                  />

                  {/* Marker Label */}
                  <span
                    style={{
                      paddingLeft: "12px",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "clamp(12px, 0.9vw, 13.5px)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive
                        ? "var(--accent, #2438FF)"
                        : isPastOrActive
                        ? "var(--ink, #0F0F0E)"
                        : "var(--ink-muted, #6B6A66)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.number} &mdash; {step.title}
                  </span>
                </div>

                {isActive && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12px",
                      color: "var(--accent, #2438FF)",
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .approach-progress-rail {
            position: relative !important;
            top: auto !important;
          }
        }
        .stage-pulse-dot {
          animation: stagePulse 2s infinite ease-in-out;
        }
        @keyframes stagePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
        .progress-rail-btn:hover {
          background: var(--canvas-surface, #EDEAE2) !important;
        }
      `}</style>
    </div>
  );
}
