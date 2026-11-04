"use client";

export default function CustomCursor() {
  return (
    <div
      style={{
        display: "none",
        position: "fixed",
        pointerEvents: "none",
        visibility: "hidden",
      }}
      aria-hidden="true"
    >
      <div className="cur-dot" aria-hidden="true" />
    </div>
  );
}
