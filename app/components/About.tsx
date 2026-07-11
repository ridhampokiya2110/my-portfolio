"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo, stats } from "../lib/data";

function useCountUp(target: number, go: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    let v = 0;
    const step = target / 55;
    const id = setInterval(() => {
      v += step; if (v >= target) { setN(target); clearInterval(id); } else setN(Math.floor(v));
    }, 20);
    return () => clearInterval(id);
  }, [go, target]);
  return n;
}

const PALETTE = ["var(--cyan)", "var(--violet)", "var(--emerald)"];

function StatCard({ value, suffix, label, go, color }: { value:number; suffix:string; label:string; go:boolean; color:string }) {
  const n = useCountUp(value, go);
  return (
    <div className="glass glass-hover" style={{ borderRadius:20, padding:"24px 16px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", gap:6 }}>
      <span className="font-display" style={{ fontFamily:"var(--font-display)", fontSize:"2.8rem", fontWeight:800, lineHeight:1, color }}>{n}{suffix}</span>
      <span style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--t3)" }}>{label}</span>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const anim = (delay=0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "none" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="s-eyebrow">About Me</p>
          <h2 className="s-title g-cyan font-display">Who I Am</h2>
        </div>

        <div className="grid-2" style={anim()}>
          {/* Bio card */}
          <div className="glass" style={{ borderRadius:20, padding:32, position:"relative", overflow:"hidden" }}>
            <div className="divider" style={{ marginBottom:24 }} />
            <h3 className="font-display" style={{ fontFamily:"var(--font-display)", fontSize:"1.15rem", fontWeight:700, marginBottom:14 }}>
              Building systems that <span className="g-cyan">scale</span>
            </h3>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--t2)", fontSize:14, lineHeight:1.85, marginBottom:24 }}>
              {personalInfo.bio}
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {["AWS Certified","CI/CD Expert","SaaS Builder","Open Source"].map(t => (
                <span key={t} className="tag" style={{ fontFamily:"var(--font-code)", color:"var(--cyan)", borderColor:"rgba(0,229,255,0.25)", fontSize:9 }}>{t}</span>
              ))}
            </div>
            {/* shimmer overlay */}
            <div className="shimmer" style={{ position:"absolute", inset:0, borderRadius:20, pointerEvents:"none" }} />
          </div>

          {/* Stats + certs */}
          <div style={anim(0.15)}>
            <div className="grid-4" style={{ marginBottom:14 }}>
              {stats.map((s,i) => <StatCard key={s.label} {...s} go={vis} color={PALETTE[i]} />)}
            </div>

            <a
              href={personalInfo.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover"
              style={{ borderRadius:20, padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", textDecoration:"none" }}
            >
              <div>
                <p style={{ fontFamily:"var(--font-code)", fontSize:9, letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--t3)", marginBottom:4 }}>Credentials</p>
                <p style={{ fontWeight:600, fontSize:14 }}>View 20+ Certificates →</p>
              </div>
              <div style={{ width:38, height:38, borderRadius:"50%", flexShrink:0, background:"rgba(0,229,255,0.08)", border:"1px solid rgba(0,229,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--cyan)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
