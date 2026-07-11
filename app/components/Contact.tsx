"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../lib/data";

const SOCIALS = [
  {
    label: "GitHub", href: personalInfo.github,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
  {
    label: "LinkedIn", href: personalInfo.linkedin,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: "Instagram", href: personalInfo.instagram,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: "WhatsApp", href: personalInfo.whatsapp,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="s-eyebrow">Contact</p>
          <h2 className="s-title font-display g-cyan">Let&apos;s Connect</h2>
          <p className="s-sub">Open to DevOps, Cloud Engineering, and SaaS opportunities. Always happy to talk.</p>
        </div>

        <div
          className="glass"
          style={{
            borderRadius:32, padding:"clamp(2rem, 5vw, 4rem)",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            border: "1px solid rgba(0,229,255,0.1)",
            boxShadow: "0 0 60px rgba(0,229,255,0.04)",
          }}
        >
          <p style={{ textAlign:"center", marginBottom:40, color:"var(--t2)", fontSize:14, lineHeight:1.8 }}>
            I&apos;m currently open to <span style={{ color:"var(--cyan)", fontWeight:600 }}>DevOps</span>,{" "}
            <span style={{ color:"var(--violet)", fontWeight:600 }}>Cloud Engineering</span>, and{" "}
            <span style={{ color:"var(--emerald)", fontWeight:600 }}>SaaS</span> roles.
            Reach out directly:
          </p>

          {/* Direct contact */}
          <div className="grid-2" style={{ marginBottom:40 }}>
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass glass-hover"
              style={{ borderRadius:24, padding:20, display:"flex", alignItems:"center", gap:16, border:"1px solid rgba(0,229,255,0.1)", textDecoration:"none" }}
            >
              <div style={{ width:44, height:44, borderRadius:12, flexShrink:0, background:"rgba(0,229,255,0.1)", border:"1px solid rgba(0,229,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--cyan)" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div style={{ minWidth:0 }}>
                <p style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:"var(--t3)", marginBottom:3 }}>Email</p>
                <p style={{ fontSize:13, fontWeight:600, color:"var(--t1)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{personalInfo.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g,"")}`}
              className="glass glass-hover"
              style={{ borderRadius:24, padding:20, display:"flex", alignItems:"center", gap:16, border:"1px solid rgba(0,245,160,0.1)", textDecoration:"none" }}
            >
              <div style={{ width:44, height:44, borderRadius:12, flexShrink:0, background:"rgba(0,245,160,0.08)", border:"1px solid rgba(0,245,160,0.18)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--emerald)" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:"var(--t3)", marginBottom:3 }}>Phone</p>
                <p style={{ fontSize:13, fontWeight:600, color:"var(--t1)" }}>{personalInfo.phone}</p>
              </div>
            </a>
          </div>

          {/* Divider */}
          <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:32 }}>
            <div className="divider" style={{ flex:1 }} />
            <span style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--t3)", whiteSpace:"nowrap" }}>Or find me on</span>
            <div className="divider" style={{ flex:1 }} />
          </div>

          {/* Social grid */}
          <div className="grid-4" style={{ gap:12 }}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover"
                style={{ borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", gap:8, padding:"20px 0", textDecoration:"none", color:"var(--t2)" }}
              >
                {s.icon}
                <span style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.15em", textTransform:"uppercase" }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
