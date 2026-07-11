"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "../lib/data";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="section">
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="s-eyebrow">Skills</p>
          <h2 className="s-title font-display g-violet">Technical Arsenal</h2>
          <p className="s-sub">Technologies I use daily to build, ship, and scale production systems.</p>
        </div>

        <div className="grid-2">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className="glass"
              style={{
                borderRadius: 20, padding: 28, position: "relative", overflow: "hidden",
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(24px)",
                transition: `opacity 0.6s ease ${gi*0.08}s, transform 0.6s ease ${gi*0.08}s`,
              }}
            >
              {/* Category */}
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:22 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:group.color, boxShadow:`0 0 10px ${group.color}`, flexShrink:0 }} />
                <span style={{ fontFamily:"var(--font-code)", fontSize:10, fontWeight:700, letterSpacing:"0.28em", textTransform:"uppercase", color:group.color }}>{group.category}</span>
                <div style={{ flex:1, height:1, background:`${group.color}18` }} />
              </div>

              {/* Skill rows */}
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {group.items.map(skill => (
                  <div key={skill.name} className="neo" style={{ borderRadius:12, padding:"11px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12 }}>
                    <span style={{ fontFamily:"var(--font-code)", fontSize:12, fontWeight:600, letterSpacing:"0.05em", color:"var(--t1)" }}>{skill.name}</span>
                    <div style={{ display:"flex", gap:5, flexShrink:0 }}>
                      {Array.from({length:5}).map((_,i) => (
                        <div key={i} className={`dot${i<skill.level?" on":""}`} style={i<skill.level?{background:group.color,boxShadow:`0 0 6px ${group.color}`}:{}} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner glow */}
              <div style={{ position:"absolute", top:0, right:0, width:100, height:100, background:`radial-gradient(circle, ${group.color}0a, transparent 70%)`, transform:"translate(30%,-30%)", pointerEvents:"none" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
