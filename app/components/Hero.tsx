"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../lib/data";

const ROLES = personalInfo.role;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const t = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    // Typewriter effect
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

  useEffect(() => {
    // Live Clock for India (IST)
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
      setLocalTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { href: personalInfo.github,    label: "GitHub",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
    { href: personalInfo.linkedin,  label: "LinkedIn",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
    { href: personalInfo.upwork,    label: "Upwork",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439"/></svg> },
    { href: personalInfo.fiverr,    label: "Fiverr",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/></svg> },
    { href: personalInfo.devto,     label: "Dev.to",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.63-2.56.76-.03c.74-.04.75-.03.71.18-.03.14-.18.53-.33.88l-1.16 2.97c-.5 1.27-.68 1.66-.87 2.72z"/></svg> },
    { href: personalInfo.medium,    label: "Medium",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg> },
    { href: personalInfo.instagram, label: "Instagram",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  ];

  return (
    <section id="hero" style={{ position:"relative", overflow:"hidden", minHeight:"100dvh", display:"flex", alignItems:"center", justifyContent:"center", padding:"clamp(5rem, 12vh, 7rem) 1.5rem 2rem" }}>
      
      {/* Background Video (Hero Only) */}
      <div className="video-bg-container" aria-hidden>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="bg-video"
          preload="auto"
        >
          <source src="/bg-video.webm" type="video/webm" />
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <div style={{ position:"relative", zIndex:2, maxWidth:700, width:"100%", margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:"clamp(1rem, 3vh, 1.5rem)" }}>

        {/* Status & Time badges */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <div className="badge">
            <span className="pulse-dot" style={{ background:"var(--emerald)", boxShadow:"0 0 6px var(--emerald)", width:7, height:7, borderRadius:"50%", display:"inline-block" }} />
            {personalInfo.status}
          </div>
          {localTime && (
            <div className="badge" style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              India • {localTime}
            </div>
          )}
        </div>

        {/* Avatar (middle image preserved with side RP round icon) */}
        <div className="float" style={{ position:"relative", display:"inline-block", marginTop: 12 }}>
          {/* Multi-colour spinning ring */}
          <div style={{ position:"absolute", inset:-5, borderRadius:"50%", background:"conic-gradient(from 0deg, #00e5ff, #9b59ff, #ff3cac, #ffb700, #00e5ff)", animation:"spin-cw 4s linear infinite" }} />
          <div style={{ position:"absolute", inset:-2, borderRadius:"50%", background:"var(--bg-0)" }} />
          <div style={{ position:"absolute", inset:-12, borderRadius:"50%", border:"1px dashed rgba(155,89,255,0.25)", animation:"spin-ccw 14s linear infinite" }} />
          <div style={{ position:"relative", width:"clamp(115px, 28vw, 140px)", aspectRatio:"1/1", borderRadius:"50%", overflow:"hidden", border:"2px solid rgba(255,255,255,0.07)" }}>
            <img src={personalInfo.profileImage} alt={personalInfo.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
          </div>

          {/* Side RP round icon badge */}
          <div
            className="rp-side-badge"
            title="Ridham Pokiya • Verified Founder"
            style={{
              position: "absolute",
              bottom: -4,
              right: -4,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(5, 3, 18, 0.92)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1.5px solid var(--cyan)",
              boxShadow: "0 0 16px rgba(0, 229, 255, 0.5), inset 0 0 8px rgba(0, 229, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              fontFamily: "var(--font-code)",
              fontSize: 10.5,
              fontWeight: 800,
              color: "var(--cyan)",
              letterSpacing: "0.08em",
            }}
          >
            RP<span style={{ color: "var(--emerald)" }}>.</span>
          </div>
        </div>

        {/* Name */}
        <div style={{ width: "100%" }}>
          <h1 className="g-cyan font-display" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.2rem, 9vw, 5.5rem)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:1, whiteSpace:"nowrap" }}>
            {personalInfo.name}
          </h1>

          {/* Typewriter role */}
          <div style={{ marginTop:12, height:24, display:"flex", alignItems:"center", justifyContent:"center", gap:3 }}>
            <span style={{ fontFamily:"var(--font-code)", fontSize:"clamp(11px, 3vw, 13px)", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--t2)" }}>{text}</span>
            <span className="blink" style={{ color:"var(--cyan)", fontWeight:700, fontSize:16 }}>|</span>
          </div>
        </div>

        {/* Bio */}
        <p style={{ fontFamily:"var(--font-body)", color:"var(--t2)", maxWidth:"52ch", fontSize:"clamp(14px, 3.5vw, 15px)", lineHeight:1.7 }}>
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
        <div style={{ display:"flex", gap:10 }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="glass glass-hover"
              style={{ width:40, height:40, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--t2)", textDecoration:"none" }}>
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, marginTop:10, color:"var(--t3)" }}>
          <span style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.4em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:30, background:"linear-gradient(180deg, var(--cyan), transparent)", opacity:0.5 }} />
        </div>
      </div>
    </section>
  );
}
