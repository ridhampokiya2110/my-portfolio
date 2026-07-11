"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo, featuredArticles } from "../lib/data";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  reading_time_minutes: number;
  tag_list: string[];
  positive_reactions_count: number;
  comments_count: number;
  platform?: string;
}

export default function Blog() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const DevCard = ({ a, i }: { a: Article; i: number }) => (
    <a
      href={a.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover"
      style={{
        borderRadius:20, padding:24, display:"flex", flexDirection:"column",
        textDecoration:"none",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(24px)",
        transition: `opacity 0.6s ease ${i*0.08}s, transform 0.6s ease ${i*0.08}s`,
        position: "relative"
      }}
    >
      <div style={{ position:"absolute", top:16, right:16, background: a.platform === "Medium" ? "rgba(255,255,255,0.1)" : a.platform === "AWS Builders" ? "rgba(255,153,0,0.15)" : "rgba(155,89,255,0.1)", color: a.platform === "Medium" ? "#fff" : a.platform === "AWS Builders" ? "#FF9900" : "var(--violet)", padding:"4px 10px", borderRadius:100, fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>
        {a.platform}
      </div>
      
      <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:16, marginTop:8 }}>
        {a.tag_list.slice(0,2).map(t => (
          <span key={t} className="chip-v">#{t}</span>
        ))}
      </div>
      <h3 className="font-display" style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, lineHeight:1.4, flex:1, marginBottom:12, color:"var(--t1)" }}>
        {a.title}
      </h3>
      {a.description && (
        <p style={{ fontFamily:"var(--font-body)", color:"var(--t3)", fontSize:12, lineHeight:1.65, marginBottom:16, display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
          {a.description}
        </p>
      )}
      <div style={{ borderTop:"1px solid var(--glass-border)", paddingTop:12, display:"flex", justifyContent:"space-between", fontFamily:"var(--font-code)", fontSize:10, color:"var(--t3)", letterSpacing:"0.05em" }}>
        <span>{a.reading_time_minutes} min read</span>
        <span>♥ {a.positive_reactions_count} &nbsp; 💬 {a.comments_count}</span>
      </div>
    </a>
  );

  return (
    <section id="blog" ref={ref} className="section">
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="s-eyebrow">Writing</p>
          <h2 className="s-title font-display g-violet">Thoughts &amp; Articles</h2>
          <p className="s-sub">I write about DevOps, cloud engineering, and SaaS on Medium and Dev.to.</p>
        </div>

        <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {featuredArticles.map((a, i) => <DevCard key={a.id} a={a as Article} i={i} />)}
        </div>
        
        <div style={{ display:"flex", justifyContent:"center", marginTop:40, gap:16, flexWrap:"wrap" }}>
          <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer" className="btn-g" style={{ padding: "10px 24px" }}>
            Explore Medium ↗
          </a>
          <a href={personalInfo.devto} target="_blank" rel="noopener noreferrer" className="btn-g" style={{ padding: "10px 24px" }}>
            Explore Dev.to ↗
          </a>
          <a href={personalInfo.awsBuilder} target="_blank" rel="noopener noreferrer" className="btn-g" style={{ padding: "10px 24px", background: "linear-gradient(135deg, rgba(255,153,0,0.8), rgba(255,153,0,0.4))", boxShadow: "0 8px 32px rgba(255,153,0,0.2)" }}>
            Explore AWS Builders ↗
          </a>
        </div>
      </div>
    </section>
  );
}
