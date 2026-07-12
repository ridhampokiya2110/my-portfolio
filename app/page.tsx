"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import MobileNav from "./components/MobileNav";

export default function Page() {
  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Aurora background orbs */}
      <div className="aurora" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Subtle grid overlay */}
      <div className="bg-grid" aria-hidden />

      {/* Nav */}
      <Navbar />

      {/* Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}