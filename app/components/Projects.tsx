"use client";
import { useEffect, useRef, useState } from "react";
import { featuredProject, secondFeaturedProject, projects } from "../lib/data";

function ExtIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

interface FeaturedCardProps {
  data: typeof featuredProject;
  delay?: number;
  vis: boolean;
}

function FeaturedCard({ data, delay=0, vis }: FeaturedCardProps) {
  const accent = data.accent ?? "var(--cyan)";
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.boxShadow = `0 32px 80px rgba(0,0,0,0.5), 0 0 60px ${accent}25`;
    cardRef.current.style.borderColor = `${accent}50`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
    cardRef.current.style.boxShadow = "";
    cardRef.current.style.borderColor = `${accent}20`;
  };

  return (
    <div
      ref={cardRef}
      style={{
        borderRadius: 24, overflow: "hidden", position: "relative",
        background: "var(--glass-bg)",
        border: `1px solid ${accent}20`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
        transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease, border-color 0.3s ease",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(24px)",
        animation: vis ? `fade-up 0.6s ease ${delay}s forwards` : "none",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Category + tag row */}
      <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12, marginBottom:20 }}>
        <span style={{ fontFamily:"var(--font-code)", fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:accent }}>{data.category}</span>
        <span className="tag" style={{ color:accent, borderColor:`${accent}40`, fontFamily:"var(--font-code)", fontSize:9, background:`${accent}08` }}>
          ★ {data.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight:800, letterSpacing:"-0.02em", marginBottom:14, lineHeight:1.1 }}>
        {data.title}
      </h3>

      {/* Desc */}
      <p style={{ fontFamily:"var(--font-body)", color:"var(--t2)", fontSize:14, lineHeight:1.85, maxWidth:"62ch", marginBottom:24 }}>{data.desc}</p>

      {/* Tech chips */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:28 }}>
        {data.tech.map(t => (
          <span key={t} className="chip" style={{ borderRadius:100, background:`${accent}09`, color:accent, letterSpacing:"0.08em" }}>{t}</span>
        ))}
      </div>

      {/* CTA */}
      <a href={data.link} target="_blank" rel="noopener noreferrer" className="btn-p" style={{ background:`linear-gradient(135deg, ${accent}cc, ${accent}66)`, boxShadow:`0 8px 32px ${accent}30` }}>
        Live Preview <ExtIcon />
      </a>

      {/* Decorative orbs */}
      <div style={{ position:"absolute", top:0, right:0, width:200, height:200, background:`radial-gradient(circle, ${accent}08, transparent 70%)`, transform:"translate(30%,-30%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:0, left:0, width:160, height:160, background:`radial-gradient(circle, ${accent}05, transparent 70%)`, transform:"translate(-30%,30%)", pointerEvents:"none" }} />
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="s-eyebrow">Projects</p>
          <h2 className="s-title font-display g-cyan">What I&apos;ve Built</h2>
          <p className="s-sub">From AI-powered cloud tools to enterprise SaaS platforms and startup products.</p>
        </div>

        {/* Two featured projects */}
        <div style={{ display:"flex", flexDirection:"column", gap:20, marginBottom:20 }}>
          <FeaturedCard data={secondFeaturedProject} vis={vis} />
          <FeaturedCard data={featuredProject} delay={0.12} vis={vis} />
        </div>

        {/* Three smaller projects */}
        <div className="grid-3">
          {projects.map((p,i) => (
            <div
              key={i}
              className="glass glass-hover"
              style={{
                borderRadius:20, padding:24, display:"flex", flexDirection:"column", position:"relative", overflow:"hidden",
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.2+i*0.1}s, transform 0.6s ease ${0.2+i*0.1}s`,
              }}
            >
              {/* Index */}
              <span style={{ position:"absolute", top:14, right:18, fontFamily:"var(--font-display)", fontSize:"2.8rem", fontWeight:900, opacity:0.04, userSelect:"none", pointerEvents:"none" }}>0{i+1}</span>

              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
                {p.tech.map(t => <span key={t} className="chip" style={{ fontSize:9, borderRadius:6 }}>{t}</span>)}
              </div>
              <h4 className="font-display" style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, marginBottom:10, lineHeight:1.35 }}>{p.title}</h4>
              <p style={{ fontFamily:"var(--font-body)", color:"var(--t3)", fontSize:12, lineHeight:1.75, flex:1, marginBottom:18 }}>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-g" style={{ padding:"9px 18px", fontSize:10, justifyContent:"center" }}>
                Live Preview <ExtIcon />
              </a>
            </div>
          ))}
        </div>

        {/* Founder Highlight Banner */}
        <div 
          className="glass glass-hover"
          style={{
            marginTop: "3rem",
            padding: "clamp(2rem, 5vw, 3rem)",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(155, 89, 255, 0.05))",
            border: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
            overflow: "hidden",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s"
          }}
        >
          {/* Decorative glows */}
          <div style={{ position:"absolute", top:"-50%", left:"-10%", width:200, height:200, background:"radial-gradient(circle, rgba(0,229,255,0.15), transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-50%", right:"-10%", width:200, height:200, background:"radial-gradient(circle, rgba(155,89,255,0.15), transparent 70%)", pointerEvents:"none" }} />

          <h3 className="font-display g-cyan" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.5rem, 4vw, 2.2rem)", fontWeight:800, marginBottom:16, lineHeight:1.2 }}>
            Founder & Operator of 2 Tech Companies
          </h3>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--t2)", fontSize:15, lineHeight:1.7, maxWidth:"64ch", margin:"0 auto" }}>
            I don't just write code — I build businesses. As the founder of <strong style={{ color:"var(--t1)", fontWeight:600 }}>Validexio</strong> and <strong style={{ color:"var(--t1)", fontWeight:600 }}>Heeratrack</strong>, I am actively scaling these platforms from the ground up. I bridge the gap between deep technical engineering and real-world market execution.
          </p>
        </div>
      </div>
    </section>
  );
}
