"use client";
import { useEffect, useRef, useState } from "react";
import { projects } from "../lib/data";

function ExtIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

export default function SideProjects() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="side-projects" ref={ref} className="section">
      <div className="container">
        
        {/* Side Projects Header */}
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="s-eyebrow">Side Projects</p>
          <h2 className="s-title font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Open Source &amp; Tools</h2>
          <p className="s-sub">Serverless applications, AI experiments, and technical prototypes.</p>
        </div>

        {/* Smaller projects */}
        <div className="grid-3">
          {projects.map((p,i) => (
            <div
              key={i}
              className="glass glass-hover"
              style={{
                borderRadius:20, padding:24, display:"flex", flexDirection:"column", position:"relative", overflow:"hidden",
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(24px)",
                transition: `opacity  cubic-bezier(0.16, 1, 0.3, 1) ${0.2+i*0.1}s, transform  cubic-bezier(0.16, 1, 0.3, 1) ${0.2+i*0.1}s`,
              }}
            >
              {/* Index */}
              <span style={{ position:"absolute", top:14, right:18, fontFamily:"var(--font-display)", fontSize:"2.8rem", fontWeight:900, opacity:0.04, userSelect:"none", pointerEvents:"none" }}>0{i+1}</span>

              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
                {p.tech.map(t => <span key={t} className="chip" style={{ fontSize:9, borderRadius:6 }}>{t}</span>)}
              </div>
              <h4 className="font-display" style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, marginBottom:10, lineHeight:1.35 }}>{p.title}</h4>
              <p style={{ fontFamily:"var(--font-body)", color:"var(--t3)", fontSize: 13.5, lineHeight:1.75, flex:1, marginBottom:18 }}>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-g" style={{ padding:"9px 18px", fontSize: 11, justifyContent:"center" }}>
                Live Preview <ExtIcon />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
