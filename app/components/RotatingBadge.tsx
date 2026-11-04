"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RotatingBadgeProps {
  text?: string;
  size?: number;
  duration?: number;
  className?: string;
  accentDot?: boolean;
}

export default function RotatingBadge({
  text = "• RIDHAM POKIYA • TESCONIX FOUNDER",
  size = 88,
  duration = 24,
  className = "",
  accentDot = true,
}: RotatingBadgeProps) {
  const shouldReduceMotion = useReducedMotion();
  const radius = 37;
  const pathId = `badgePath-${size}-${text.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8)}`;

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
      }}
      className={className}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%", originX: 0.5, originY: 0.5 }}
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
      >
        <path
          id={pathId}
          d={`M 50, 50 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
        <text
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "8.5px",
            letterSpacing: "0.26em",
            fill: "var(--ink-muted, #6B6A66)",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <textPath href={`#${pathId}`}>
            {text}
          </textPath>
        </text>
      </motion.svg>
      {accentDot && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--accent, #2438FF)",
          }}
        />
      )}
    </div>
  );
}

