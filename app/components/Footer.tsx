"use client";

import { useEffect, useState } from "react";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ridham-pokiya-b7974a249" },
  { label: "GitHub", href: "https://github.com/ridhampokiya2110" },
  { label: "Dev.to", href: "https://dev.to/ridhampokiya2110" },
  { label: "Medium", href: "https://medium.com/@ridhampokiya10" },
  { label: "AWS Builders", href: "https://builder.aws.com/community/@ridhampokiya10?tab=badges" },
  { label: "Calendly", href: "https://calendly.com/ridhampokiya10" },
];

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const istTime = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalTime(istTime);
      } catch {
        setLocalTime("");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        background: "var(--canvas-surface, #EDEAE2)",
        color: "var(--ink, #0F0F0E)",
        paddingTop: "clamp(48px, 6vw, 72px)",
        paddingBottom: "clamp(48px, 6vw, 72px)",
        borderTop: "1px solid var(--border-hairline, #DAD6CC)",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 56px)",
        }}
      >
        {/* Top Status & Brand Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            paddingBottom: "36px",
            borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
            marginBottom: "36px",
          }}
        >
          {/* Logo & Identity */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span
              style={{
                fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "24px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--ink, #0F0F0E)",
              }}
            >
              <span>RIDHAM</span>{" "}
              <span style={{ color: "var(--accent, #2438FF)" }}>POKIYA</span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-muted, #5E5D58)",
                fontWeight: 600,
              }}
            >
              / Tesconix Founder
            </span>
          </div>

          {/* Local Time in Surat, India */}
          <div
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-secondary, #383733)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 500,
            }}
          >
            <span>Surat, India (IST)</span>
            <span style={{ color: "var(--border-strong, #B8B4A8)" }}>•</span>
            <span style={{ color: "var(--ink, #0F0F0E)", minWidth: "85px", fontWeight: 600 }}>
              {localTime || "12:00:00 AM"}
            </span>
          </div>

          {/* Stable System Status with Pulse Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-secondary, #383733)",
              fontWeight: 600,
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#16A34A",
                boxShadow: "0 0 8px rgba(22, 163, 74, 0.4)",
                display: "inline-block",
              }}
              aria-hidden="true"
            />
            <span>Stable System</span>
          </div>
        </div>

        {/* Middle Navigation Links & Attribution */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Quick External Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="underline-draw"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-secondary, #383733)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  padding: "6px 0",
                  fontWeight: 600,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Designed & Built By Copyright */}
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-muted, #5E5D58)",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Designed &amp; Built by Ridham Pokiya &mdash; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
