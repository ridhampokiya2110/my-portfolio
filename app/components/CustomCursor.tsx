"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX; 
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top  = `${pos.current.y}px`;
      }
    };

    const grow = () => {
      if (dotRef.current) {
        dotRef.current.style.width = "40px";
        dotRef.current.style.height = "40px";
        dotRef.current.style.background = "#ffffff";
        dotRef.current.style.border = "none";
        dotRef.current.style.backdropFilter = "none";
      }
    };
    const shrink = () => {
      if (dotRef.current) {
        dotRef.current.style.width = "16px";
        dotRef.current.style.height = "16px";
      }
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[role=button]").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  // Global haptics for interactive elements (Mobile/Android)
  useEffect(() => {
    const handleInteraction = (e: Event) => {
      const target = e.target as HTMLElement;
      // Vibrate if they tapped a link, button, skill card, or interactive glass element
      if (target.closest("a, button, [role=button], .neo, .glass, .nav-item, .btn-p, .btn-g")) {
        if (typeof navigator !== "undefined" && navigator.vibrate) {
          navigator.vibrate(35); // 35ms subtle satisfying haptic bump
        }
      }
    };

    // Listen on pointerdown for immediate response instead of waiting for full click
    document.addEventListener("pointerdown", handleInteraction, { passive: true });
    return () => document.removeEventListener("pointerdown", handleInteraction);
  }, []);

  return <div ref={dotRef} className="cur-dot" aria-hidden />;
}
