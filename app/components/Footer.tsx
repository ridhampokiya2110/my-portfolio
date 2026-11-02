"use client";

import { personalInfo } from "../lib/data";

const FOOTER_LINKS = [
  { href: personalInfo.upwork, label: "Upwork" },
  { href: personalInfo.fiverr, label: "Fiverr" },
  { href: personalInfo.devto, label: "Dev.to" },
  { href: personalInfo.github, label: "GitHub" },
  { href: personalInfo.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="section" style={{ paddingTop:40, paddingBottom:60 }}>
      <div className="container">
        <div className="divider" style={{ marginBottom:40 }} />
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:16, marginBottom:20 }}>
          <span style={{ fontFamily:"var(--font-code)", fontSize:13, fontWeight:800, color:"var(--cyan)", letterSpacing:"0.15em" }}>
            RP<span style={{ color:"rgba(255,255,255,0.12)" }}>.</span>
          </span>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:20 }}>
            {FOOTER_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily:"var(--font-code)", fontSize:11, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--t3)", textDecoration:"none", transition:"color 0.2s ease" }}
                className="hover-cyan"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--font-code)", fontSize: 11, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--t3)" }}>
            <span className="pulse-dot" style={{ width:6, height:6, borderRadius:"50%", background:"var(--emerald)", boxShadow:"0 0 6px var(--emerald)" }} />
            Stable System
          </div>
        </div>
        <p style={{ fontFamily:"var(--font-code)", fontSize: 11, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--t3)", textAlign:"center", opacity:0.8 }}>
          Designed &amp; Built by Ridham Pokiya &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
