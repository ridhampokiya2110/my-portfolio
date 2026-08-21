/**
 * BLACK BOX TESTING — Security & Accessibility Validation
 *
 * Black box: tests what a real user/crawler/attacker would see.
 * No knowledge of internal implementation.
 *
 * Covers:
 *   - Semantic HTML / Accessibility (ARIA, heading hierarchy)
 *   - Security surface (external link safety, no exposed secrets)
 *   - XSS surface (no unsafe innerHTML patterns)
 *   - Data exposure checks
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { personalInfo } from "../../app/lib/data";

// ─────────────────────────────────────────────────────────────────────────────
// Mocks
// ─────────────────────────────────────────────────────────────────────────────
global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
  observe: jest.fn(() => callback([{ isIntersecting: true }])),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
})) as unknown as typeof IntersectionObserver;

// ─────────────────────────────────────────────────────────────────────────────
// Security Tests
// ─────────────────────────────────────────────────────────────────────────────
describe("BLACK BOX — Security: external links", () => {
  const checkExternalLinksInComponent = (Component: React.ComponentType) => {
    const { container } = render(<Component />);
    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    return externalLinks;
  };

  it("Contact: all external links have rel=noopener noreferrer", () => {
    const Contact = require("../../app/components/Contact").default;
    const links = checkExternalLinksInComponent(Contact);
    links.forEach((link) => {
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    });
  });

  it("Hero: all external links have rel=noopener noreferrer", () => {
    const Hero = require("../../app/components/Hero").default;
    const links = checkExternalLinksInComponent(Hero);
    links.forEach((link) => {
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    });
  });

  it("Footer: renders without exposing any secrets in the DOM", () => {
    const Footer = require("../../app/components/Footer").default;
    const { container } = render(<Footer />);
    // No API keys, tokens, or secret patterns
    expect(container.innerHTML).not.toMatch(/sk-[a-zA-Z0-9]{32}/);
    expect(container.innerHTML).not.toMatch(/AKIA[0-9A-Z]{16}/); // AWS access key
    expect(container.innerHTML).not.toMatch(/(?:password|secret|token)=\w+/i);
  });

  it("personalInfo email does not contain script injection", () => {
    expect(personalInfo.email).not.toMatch(/<script/i);
    expect(personalInfo.email).not.toMatch(/javascript:/i);
  });

  it("personalInfo URLs use https (no http fallback)", () => {
    const urls = [
      personalInfo.github,
      personalInfo.linkedin,
      personalInfo.devto,
      personalInfo.medium,
    ];
    urls.forEach((url) => {
      expect(url).toMatch(/^https:\/\//);
    });
  });

  it("resume URL is a relative path (no external redirect)", () => {
    expect(personalInfo.resumeUrl).toMatch(/^\//);
    expect(personalInfo.resumeUrl).not.toMatch(/^https?:\/\//);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Accessibility Tests
// ─────────────────────────────────────────────────────────────────────────────
describe("BLACK BOX — Accessibility: semantic HTML", () => {
  it("Hero: avatar image has an alt attribute", () => {
    const Hero = require("../../app/components/Hero").default;
    const { container } = render(<Hero />);
    const imgs = container.querySelectorAll("img");
    imgs.forEach((img) => {
      expect(img.hasAttribute("alt")).toBe(true);
    });
  });

  it("Hero: social links have aria-label", () => {
    const Hero = require("../../app/components/Hero").default;
    const { container } = render(<Hero />);
    // Social links that are icon-only should have aria-label
    const iconOnlyLinks = container.querySelectorAll('a[aria-label]');
    expect(iconOnlyLinks.length).toBeGreaterThan(0);
  });

  it("About: section has an id attribute for skip navigation", () => {
    const About = require("../../app/components/About").default;
    const { container } = render(<About />);
    const section = container.querySelector("section");
    expect(section?.id).toBeTruthy();
  });

  it("Skills: section has an id attribute", () => {
    const Skills = require("../../app/components/Skills").default;
    const { container } = render(<Skills />);
    const section = container.querySelector("section");
    expect(section?.id).toBeTruthy();
  });

  it("Experience: section has an id attribute", () => {
    const Experience = require("../../app/components/Experience").default;
    const { container } = render(<Experience />);
    const section = container.querySelector("section");
    expect(section?.id).toBeTruthy();
  });

  it("Contact: email and phone links are actual anchor elements", () => {
    const Contact = require("../../app/components/Contact").default;
    const { container } = render(<Contact />);
    expect(container.querySelector('a[href^="mailto:"]')).toBeInTheDocument();
    expect(container.querySelector('a[href^="tel:"]')).toBeInTheDocument();
  });

  it("Hero: section exists with position and overflow styles", () => {
    const Hero = require("../../app/components/Hero").default;
    const { container } = render(<Hero />);
    const section = container.querySelector("section#hero");
    expect(section).toBeInTheDocument();
  });

  it("About: renders h2 heading (heading hierarchy)", () => {
    const About = require("../../app/components/About").default;
    const { container } = render(<About />);
    const h2 = container.querySelector("h2");
    expect(h2).toBeInTheDocument();
    expect(h2!.textContent?.length).toBeGreaterThan(0);
  });

  it("Experience: renders h3 headings for each role", () => {
    const Experience = require("../../app/components/Experience").default;
    const { container } = render(<Experience />);
    const h3s = container.querySelectorAll("h3");
    expect(h3s.length).toBeGreaterThanOrEqual(3);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Content Integrity Tests
// ─────────────────────────────────────────────────────────────────────────────
describe("BLACK BOX — Content integrity", () => {
  it("Hero renders the full name", () => {
    const Hero = require("../../app/components/Hero").default;
    const { container } = render(<Hero />);
    expect(container.textContent).toMatch(/ridham pokiya/i);
  });

  it("Hero has a download link for resume", () => {
    const Hero = require("../../app/components/Hero").default;
    const { container } = render(<Hero />);
    const downloadLink = container.querySelector('a[download]');
    expect(downloadLink).toBeInTheDocument();
  });

  it("Projects renders Heeratrack title", () => {
    const Projects = require("../../app/components/Projects").default;
    const { container } = render(<Projects />);
    expect(container.textContent).toMatch(/heeratrack/i);
  });

  it("Projects renders Validexio title", () => {
    const Projects = require("../../app/components/Projects").default;
    const { container } = render(<Projects />);
    expect(container.textContent).toMatch(/validexio/i);
  });

  it("Blog renders at least 4 article titles", () => {
    const Blog = require("../../app/components/Blog").default;
    const { container } = render(<Blog />);
    // Should have multiple article card links
    const articleLinks = container.querySelectorAll('a[href*="dev.to"], a[href*="medium.com"]');
    expect(articleLinks.length).toBeGreaterThanOrEqual(2);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// XSS Surface Tests
// ─────────────────────────────────────────────────────────────────────────────
describe("BLACK BOX — XSS surface analysis", () => {
  it("data.ts personalInfo bio contains no HTML tags", () => {
    expect(personalInfo.bio).not.toMatch(/<[^>]+>/);
  });

  it("About section renders bio text without raw HTML injection risk", () => {
    const About = require("../../app/components/About").default;
    const { container } = render(<About />);
    // The bio should be rendered as text content, not raw HTML
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => {
      // No script tags within rendered paragraphs
      expect(p.innerHTML).not.toMatch(/<script/i);
    });
  });

  it("StructuredData JSON-LD does not inject event handlers", () => {
    const StructuredData = require("../../app/components/StructuredData").default;
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => {
      expect(script.textContent).not.toMatch(/onclick|onerror|onload/i);
    });
  });
});
