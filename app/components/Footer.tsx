"use client";

export default function Footer() {
  return (
    <footer className="section" style={{ paddingTop:40, paddingBottom:60 }}>
      <div className="container">
        <div className="divider" style={{ marginBottom:40 }} />
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:16 }}>
          <span style={{ fontFamily:"var(--font-code)", fontSize:13, fontWeight:800, color:"var(--cyan)", letterSpacing:"0.15em" }}>
            RP<span style={{ color:"rgba(255,255,255,0.12)" }}>.</span>
          </span>
          <p style={{ fontFamily:"var(--font-code)", fontSize: 11, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--t3)", textAlign:"center" }}>
            Designed &amp; Built by Ridham Pokiya &mdash; {new Date().getFullYear()}
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--font-code)", fontSize: 11, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--t3)" }}>
            <span className="pulse-dot" style={{ width:6, height:6, borderRadius:"50%", background:"var(--emerald)", boxShadow:"0 0 6px var(--emerald)" }} />
            Stable System
          </div>
        </div>
      </div>
    </footer>
  );
}
