"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Products", href: "#products", id: "products" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from storage/system
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        setIsDark(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(max > 0 ? (currentY / max) * 100 : 0);

    setScrolled(currentY > 30);

    // Hide on scroll down, show on scroll up
    if (currentY > 120 && currentY > lastY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(currentY);

    // Active link highlighting
    for (const item of [...NAV_ITEMS].reverse()) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= 140) {
        setActive(item.id);
        break;
      }
    }
  }, [lastY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease, border-color 0.3s ease",
          background: scrolled
            ? isDark
              ? "rgba(7, 9, 14, 0.92)"
              : "rgba(255, 255, 255, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-hairline, #DAD6CC)"
            : "1px solid transparent",
        }}
        className="nav-header"
      >
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 clamp(20px, 4vw, 56px)",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Minimalist Personal Wordmark */}
          <a
            href="#hero"
            style={{
              textDecoration: "none",
              color: "var(--ink, #0F0F0E)",
              display: "flex",
              alignItems: "baseline",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "clamp(22px, 1.8vw, 26px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--ink, #0F0F0E)",
              }}
            >
              Ridham Pokiya
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "12.5px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-muted, #5E5D58)",
                fontWeight: 500,
              }}
              className="hide-mobile"
            >
              / Entrepreneur
            </span>
          </a>

          {/* Desktop 4-Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
            }}
            className="hide-mobile"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-editorial-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Group: Theme Toggle + "Book a call" Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
            className="hide-mobile"
          >
            {/* Minimalist Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle colour mode"
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              style={{
                background: "transparent",
                border: "1px solid var(--border-hairline, #DAD6CC)",
                borderRadius: "2px",
                padding: "8px 14px",
                cursor: "pointer",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-secondary)",
                transition: "all 0.2s ease",
                fontWeight: 600,
              }}
            >
              {isDark ? "Light" : "Dark"}
            </button>

            {/* Book a Call Button */}
            <a
              href="#contact"
              className="magnetic-btn-primary"
              style={{
                padding: "10px 22px",
                borderRadius: "2px",
                background: "var(--ink, #0F0F0E)",
                color: "var(--canvas, #F4F1EA)",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "12.5px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Book a Call</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid var(--border-hairline, #DAD6CC)",
              borderRadius: "2px",
              padding: "8px 14px",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "12.5px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink, #0F0F0E)",
              cursor: "pointer",
              fontWeight: 600,
            }}
            className="show-mobile"
          >
            {menuOpen ? "Close ✕" : "Menu"}
          </button>
        </div>

        {/* Scroll Progress Line */}
        <div
          className="scroll-bar"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: `${progress}%`,
            height: "1.5px",
            background: "var(--accent, #2438FF)",
            transition: "width 0.1s linear",
          }}
          aria-hidden="true"
        />
      </header>

      {/* Full-Screen Mobile Drawer with Staggered Links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 85,
              background: "var(--canvas, #F4F1EA)",
              color: "var(--ink, #0F0F0E)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "100px 32px 48px",
            }}
          >
            {/* Staggered Navigation Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted, #6B6A66)",
                  marginBottom: "8px",
                }}
              >
                Directory
              </p>

              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * (idx + 1), duration: 0.4 }}
                  style={{
                    textDecoration: "none",
                    color: "var(--ink, #0F0F0E)",
                    fontFamily: "var(--font-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "44px",
                    lineHeight: 1.1,
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    borderBottom: "1px solid var(--border-hairline, #DAD6CC)",
                    paddingBottom: "14px",
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      color: "var(--ink-muted, #6B6A66)",
                    }}
                  >
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions & Time */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-hairline, #DAD6CC)",
              }}
            >
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="magnetic-btn-primary"
                style={{
                  padding: "16px 24px",
                  background: "var(--accent, #2438FF)",
                  color: "#FFFFFF",
                  textAlign: "center",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  borderRadius: "2px",
                }}
              >
                Book an Architecture Call →
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted, #6B6A66)",
                }}
              >
                <span>Surat, India • Available Q2</span>
                <button
                  onClick={toggleTheme}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--ink, #0F0F0E)",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 820px) {
          .hide-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 819px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
