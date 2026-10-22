"use client";
import { useEffect, useState, useRef } from "react";
import { navLinks } from "../lib/data";

export default function MobileNav() {
  const [active, setActive] = useState("");
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          for (const l of [...navLinks].reverse()) {
            const id = l.href.replace("#", "");
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 300) { 
              setActive(id); 
              break; 
            }
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Android Haptics
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(40);
    }
    
    // iOS Synthetic Haptics (Audio-based chassis vibration trick)
    // Plays a tiny, low-frequency sound that causes the iPhone speaker to create a physical "thud"
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(65, ctx.currentTime); // Low thud
        gain.gain.setValueAtTime(0.5, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch (err) {
      // Ignore if audio context is blocked
    }
  };

  const getIcon = (id: string) => {
    switch(id) {
      case "about":
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
      case "skills":
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
      case "side-projects":
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 17 22 12"/></svg>;
      case "experience":
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
      case "books":
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
      case "blog":
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
      case "contact":
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
      default:
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
    }
  };

  return (
    <>
      <div className="mobile-bottom-nav">
        {navLinks.map((l) => {
          const id = l.href.replace("#", "");
          const isActive = active === id;
          return (
            <a 
              key={l.href} 
              href={l.href}
              onClick={(e) => handleNavClick(e, id)}
              className={`nav-item ${isActive ? "active" : ""}`}
              aria-label={l.label}
            >
              {getIcon(id)}
              {isActive && <span className="nav-label">{l.label}</span>}
            </a>
          );
        })}
      </div>

      <style>{`
        .mobile-bottom-nav {
          display: none;
        }
        @media (max-width: 767px) {
          .mobile-bottom-nav {
            display: flex;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            background: linear-gradient(135deg, rgba(8, 6, 20, 0.97), rgba(12, 10, 28, 0.99));
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 100px;
            padding: 6px;
            gap: 2px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05);
            will-change: transform;
            max-width: calc(100vw - 24px);
            overflow-x: auto;
            scrollbar-width: none;
          }
          .mobile-bottom-nav::-webkit-scrollbar { display: none; }
          .nav-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            height: 40px;
            min-width: 40px;
            padding: 0 10px;
            border-radius: 100px;
            color: var(--t2);
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            flex-shrink: 0;
          }
          .nav-item:active {
            transform: scale(0.9);
          }
          .nav-item.active {
            background: rgba(0, 229, 255, 0.1);
            color: var(--cyan);
            box-shadow: inset 0 0 12px rgba(0,229,255,0.1);
          }
          .nav-label {
            font-family: var(--font-code);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            animation: nav-reveal 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            white-space: nowrap;
          }
          @keyframes nav-reveal {
            from { width: 0; opacity: 0; transform: translateX(-10px); }
            to { width: auto; opacity: 1; transform: none; }
          }
        }
      `}</style>
    </>
  );
}
