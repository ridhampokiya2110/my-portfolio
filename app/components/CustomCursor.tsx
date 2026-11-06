"use client";

export default function CustomCursor() {
  return (
    <div
      style={{
        display: "none",
        position: "fixed",
        pointerEvents: "none",
        visibility: "hidden",
        opacity: 0,
        width: 0,
        height: 0,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div
        className="cur-dot"
        style={{
          display: "none",
          visibility: "hidden",
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
