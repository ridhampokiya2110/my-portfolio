"use client";
import { useEffect, useState } from "react";
import { navLinks } from "../lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (sy / max) * 100 : 0);
      setScrolled(sy > 40);
      for (const l of [...navLinks].reverse()) {
        const el = document.getElementById(l.href.replace("#", ""));
        if (el && el.getBoundingClientRect().top <= 120) { setActive(l.href.replace("#","")); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.4s ease",
    background: scrolled ? "rgba(5,3,18,0.9)" : "transparent",
    backdropFilter: scrolled ? "blur(24px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
  };

  const inner: React.CSSProperties = {
    maxWidth: 1100, margin: "0 auto", padding: "0 clamp(1rem,4vw,2.5rem)",
    height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
  };

  return (
    <>
      <div className="scroll-bar" style={{ width: `${progress}%` }} aria-hidden />
      <header style={navStyle}>
        <div style={inner}>
          <a href="#hero" style={{ fontFamily:"var(--font-code)", fontSize:14, fontWeight:800, letterSpacing:"0.15em", color:"var(--cyan)", textDecoration:"none" }}>
            RP<span style={{ color:"rgba(255,255,255,0.12)" }}>.</span>
          </a>

          <nav style={{ display:"flex", alignItems:"center", gap:32 }} className="hide-mobile">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className={`nav-a ${active===l.href.replace("#","")?"on":""}`}>{l.label}</a>
            ))}
          </nav>

          <a href="/Resume.pdf" download="Ridham_Pokiya_Resume.pdf" className="btn-g hide-mobile" style={{ padding:"8px 20px", fontSize:11 }}>
            Resume ↓
          </a>

          <button className="show-mobile" style={{ background:"none", border:"none", color:"var(--t2)", cursor:"pointer" }} onClick={() => setOpen(o=>!o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open?<path d="M18 6 6 18M6 6l12 12"/>:<><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></>}
            </svg>
          </button>
        </div>

        {open && (
          <div style={{ background:"rgba(5,3,18,0.95)", borderTop:"1px solid rgba(255,255,255,0.06)", padding:"20px clamp(1rem,4vw,2.5rem)" }} className="show-mobile">
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {navLinks.map(l => <a key={l.href} href={l.href} className="nav-a" onClick={()=>setOpen(false)}>{l.label}</a>)}
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 768px) { .hide-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hide-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </>
  );
}
