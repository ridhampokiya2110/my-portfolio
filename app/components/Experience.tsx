"use client";
import { useEffect, useRef, useState } from "react";
import { experience } from "../lib/data";

const TYPE_COLOR: Record<string,string> = { internship:"var(--cyan)", role:"var(--violet)" };

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="section">
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="s-eyebrow">Experience</p>
          <h2 className="s-title font-display g-cyan">Where I&apos;ve Worked</h2>
        </div>

        {/* Timeline wrapper — 56px left padding for track + dot */}
        <div style={{ maxWidth:820, margin:"0 auto", position:"relative", paddingLeft:56 }}>
          {/* Vertical track */}
          <div className="tl-track" style={{ left:14 }} />

          <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
            {experience.map((exp, i) => {
              const color = TYPE_COLOR[exp.type] ?? "var(--cyan)";
              return (
                <div
                  key={i}
                  style={{
                    position:"relative",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(20px)",
                    transition: `opacity  cubic-bezier(0.16, 1, 0.3, 1) ${i*0.12}s, transform  cubic-bezier(0.16, 1, 0.3, 1) ${i*0.12}s`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="tl-dot" style={{ position:"absolute", left:-56, top:16, borderColor:color, boxShadow:`0 0 16px ${color}50` }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", background:color }} />
                  </div>

                  {/* Card */}
                  <div className="glass glass-hover" style={{ borderRadius:20, padding:24 }}>
                    <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:10, marginBottom:14 }}>
                      <div>
                        <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"var(--t1)", marginBottom:4 }}>{exp.role}</h3>
                        <p style={{ fontFamily:"var(--font-code)", fontSize:11, color:"var(--t3)", letterSpacing:"0.06em" }}>{exp.org}</p>
                      </div>
                      <span className="tag" style={{ color, borderColor:`${color}40`, background:"rgba(0,0,0,0.25)", fontFamily:"var(--font-code)", fontSize:9, flexShrink:0 }}>{exp.date}</span>
                    </div>
                    <div className="divider" style={{ marginBottom:14 }} />
                    <p style={{ fontFamily:"var(--font-body)", color:"var(--t2)", fontSize:13, lineHeight:1.8 }}>{exp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
