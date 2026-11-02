"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../lib/data";

const SOCIALS = [
  {
    label: "Upwork", href: personalInfo.upwork,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439"/></svg>,
  },
  {
    label: "Fiverr", href: personalInfo.fiverr,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/></svg>,
  },
  {
    label: "Dev.to", href: personalInfo.devto,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.63-2.56.76-.03c.74-.04.75-.03.71.18-.03.14-.18.53-.33.88l-1.16 2.97c-.5 1.27-.68 1.66-.87 2.72z"/></svg>,
  },
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
            transition: "opacity  cubic-bezier(0.16, 1, 0.3, 1), transform  cubic-bezier(0.16, 1, 0.3, 1)",
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
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(95px, 1fr))", gap:12 }}>
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
