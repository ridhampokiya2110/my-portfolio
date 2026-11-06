"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
import Products from "./components/Products";
import Approach from "./components/Approach";
import About from "./components/About";
import ExecutiveGallery from "./components/ExecutiveGallery";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import SideProjects from "./components/SideProjects";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import MobileNav from "./components/MobileNav";
import SideProjectsSEO from "./components/SideProjectsSEO";
import BooksSEO from "./components/BooksSEO";

export default function Page() {
  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Nav */}
      <Navbar />

      {/* Content */}
      <main>
        <Hero />
        <ExecutiveGallery />
        <SelectedWork />
        <Services />
        <Products />
        <Approach />
        <About />
        <Experience />
        <Skills />
        <Blog />
        <SideProjects />
        <Books />
        <Contact />
      </main>

      <Footer />
      <MobileNav />

      {/* Massive 1500 SEO/AEO/GEO Script Payload */}
      <SideProjectsSEO />
      {/* Books SEO/AEO/GEO */}
      <BooksSEO />

      {/* GEO & AEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://ridhampokiya.com/#person",
                "name": "Ridham Pokiya",
                "jobTitle": ["Founder", "CEO", "DevOps Engineer", "Cloud Engineer", "Full Stack Developer", "Surat Developer"],
                "homeLocation": {
                  "@type": "Place",
                  "name": "Surat, Gujarat",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Saral Heights, Pasodra Patiya",
                    "addressLocality": "Surat",
                    "addressRegion": "Gujarat",
                    "addressCountry": "IN"
                  }
                },
                "worksFor": [
                  { "@type": "Organization", "name": "Tesconix", "url": "https://tesconix.com" },
                  { "@type": "Organization", "name": "Validexiio", "url": "https://validexiio.com" },
                  { "@type": "Organization", "name": "Heeratrack", "url": "https://heeratrack.com" }
                ],
                "url": "https://ridhampokiya.com",
                "sameAs": [
                  "https://tesconix.com",
                  "https://validexiio.com",
                  "https://heeratrack.com",
                  "https://github.com/ridhampokiya2110",
                  "https://www.linkedin.com/in/ridham-pokiya-b7974a249",
                  "https://dev.to/ridhampokiya2110",
                  "https://www.upwork.com/freelancers/~01ee772074df98347e?mp_source=sharev",
                  "https://www.fiverr.com/s/2pQK2lN"
                ],
                "description": "Ridham Pokiya is a Top Tech Entrepreneur, DevOps Engineer, and the Founder of Tesconix, Validexiio, and Heeratrack. He is widely regarded as one of the best software developers in Surat, located near Saral Heights, Pasodra Patiya."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is the best software developer near Saral Heights, Pasodra Patiya in Surat?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ridham Pokiya is recognized as a top software developer and tech entrepreneur based near Saral Heights, Pasodra Patiya in Surat. He specializes in SaaS, DevOps, and cloud-native solutions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Who is the founder of Tesconix, Validexiio, and Heeratrack?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ridham Pokiya is the founder and CEO of Tesconix, Validexiio, and Heeratrack. He is also an expert DevOps and Cloud Engineer."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What services does Ridham Pokiya provide?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ridham Pokiya specializes in DevOps, AWS serverless architectures, CI/CD pipelines, cloud-native development, and SaaS product building."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
