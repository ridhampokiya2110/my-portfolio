"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../lib/data";

const ROLES = personalInfo.role;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    const cur = ROLES[idx];
    if (!del && text.length < cur.length) {
      t.current = setTimeout(() => setText(cur.slice(0, text.length+1)), 70);
    } else if (!del && text.length === cur.length) {
      t.current = setTimeout(() => setDel(true), 2600);
    } else if (del && text.length > 0) {
      t.current = setTimeout(() => setText(text.slice(0,-1)), 38);
    } else {
      setDel(false);
      setIdx(i => (i+1) % ROLES.length);
    }
    return () => { if(t.current) clearTimeout(t.current); };
  }, [text, del, idx]);

  const socials = [
    { href: personalInfo.github,    label: "GitHub",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
    { href: personalInfo.linkedin,  label: "LinkedIn",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
    { href: personalInfo.instagram, label: "Instagram",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { href: personalInfo.devto,     label: "Dev.to",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.63-2.56.76-.03c.74-.04.75-.03.71.18-.03.14-.18.53-.33.88l-1.16 2.97c-.5 1.27-.68 1.66-.87 2.72z"/></svg> },
    { href: personalInfo.medium,    label: "Medium",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg> },
  ];

  return (
    <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth:700, width:"100%", margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:"1.5rem" }}>

        {/* Status badge */}
        <div className="badge">
          <span className="pulse-dot" style={{ background:"var(--emerald)", boxShadow:"0 0 6px var(--emerald)", width:7, height:7, borderRadius:"50%", display:"inline-block" }} />
          {personalInfo.status}
        </div>

        {/* Avatar */}
        <div className="float" style={{ position:"relative", display:"inline-block" }}>
          {/* Multi-colour spinning ring */}
          <div style={{ position:"absolute", inset:-5, borderRadius:"50%", background:"conic-gradient(from 0deg, #00e5ff, #9b59ff, #ff3cac, #ffb700, #00e5ff)", animation:"spin-cw 4s linear infinite" }} />
          <div style={{ position:"absolute", inset:-2, borderRadius:"50%", background:"var(--bg-0)" }} />
          <div style={{ position:"absolute", inset:-12, borderRadius:"50%", border:"1px dashed rgba(155,89,255,0.25)", animation:"spin-ccw 14s linear infinite" }} />
          <div style={{ position:"relative", width:140, height:140, borderRadius:"50%", overflow:"hidden", border:"2px solid rgba(255,255,255,0.07)" }}>
            <img src={personalInfo.profileImage} alt={personalInfo.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
          </div>
        </div>

        {/* Name */}
        <div style={{ width: "100%" }}>
          <h1 className="g-cyan font-display" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.5rem, 9vw, 5.5rem)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:1, whiteSpace:"nowrap" }}>
            {personalInfo.name}
          </h1>

          {/* Typewriter role */}
          <div style={{ marginTop:16, height:28, display:"flex", alignItems:"center", justifyContent:"center", gap:3 }}>
            <span style={{ fontFamily:"var(--font-code)", fontSize:13, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--t2)" }}>{text}</span>
            <span className="blink" style={{ color:"var(--cyan)", fontWeight:700, fontSize:16 }}>|</span>
          </div>
        </div>

        {/* Bio */}
        <p style={{ fontFamily:"var(--font-body)", color:"var(--t2)", maxWidth:"52ch", fontSize:15, lineHeight:1.8 }}>
          {personalInfo.bio}
        </p>

        {/* CTAs */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
          <a href={personalInfo.resumeUrl} download="Ridham_Pokiya_Resume.pdf" className="btn-p">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
          <a href="#projects" className="btn-g">View Projects →</a>
        </div>

        {/* Socials */}
        <div style={{ display:"flex", gap:10, marginTop:4 }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="glass glass-hover"
              style={{ width:42, height:42, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--t2)", textDecoration:"none" }}>
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8, marginTop:20, color:"var(--t3)" }}>
          <span style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.4em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:40, background:"linear-gradient(180deg, var(--cyan), transparent)", opacity:0.5 }} />
        </div>
      </div>
    </section>
  );
}
