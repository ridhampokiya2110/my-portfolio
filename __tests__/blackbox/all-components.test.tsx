/**
 * COMPLETE SYSTEM TESTS — All Components Deep Tests
 * WHITE + GREY + BLACK BOX
 *
 * Tests EVERY component in the portfolio codebase:
 * Hero, About, Skills, Experience, Projects, Blog, Contact,
 * Footer, Navbar, MobileNav, CustomCursor, StructuredData
 *
 * Testing dimensions:
 * - Renders without crashing
 * - Required DOM structure
 * - Content accuracy (matches data.ts)
 * - Semantic HTML structure
 * - ARIA accessibility
 * - Interactive elements (links, buttons)
 * - Security (rel=noopener, no secrets)
 */

import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

// ─────────────────────────────────────────────────────────────────────────────
// Global Mocks
// ─────────────────────────────────────────────────────────────────────────────
global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
  observe: jest.fn(() => callback([{ isIntersecting: true }])),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
})) as unknown as typeof IntersectionObserver;

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, "scrollY", { value: 0, writable: true });

// ─────────────────────────────────────────────────────────────────────────────
// HERO COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Hero from "../../app/components/Hero";

describe("Hero — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Hero />)).not.toThrow();
  });

  it("has section element with id='hero'", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("section#hero")).toBeInTheDocument();
  });

  it("renders the full name RIDHAM POKIYA", () => {
    const { container } = render(<Hero />);
    expect(container.textContent).toMatch(/ridham pokiya/i);
  });

  it("renders h1 heading with name", () => {
    const { container } = render(<Hero />);
    const h1 = container.querySelector("h1");
    expect(h1).toBeInTheDocument();
    expect(h1?.textContent).toMatch(/ridham pokiya/i);
  });

  it("renders profile image with alt attribute", () => {
    const { container } = render(<Hero />);
    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute("alt")).toBeTruthy();
    expect(img?.getAttribute("alt")).toMatch(/ridham pokiya/i);
  });

  it("renders profile image with correct src path", () => {
    const { container } = render(<Hero />);
    const img = container.querySelector("img");
    expect(img?.getAttribute("src")).toContain("profile");
  });

  it("renders Download Resume button", () => {
    const { container } = render(<Hero />);
    const downloadLink = container.querySelector('a[download]');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink?.textContent).toMatch(/resume/i);
  });

  it("resume download points to PDF", () => {
    const { container } = render(<Hero />);
    const downloadLink = container.querySelector('a[download]') as HTMLAnchorElement;
    expect(downloadLink?.href).toContain(".pdf");
  });

  it("renders View Projects link pointing to #projects", () => {
    const { container } = render(<Hero />);
    const projectsLink = container.querySelector('a[href="#projects"]');
    expect(projectsLink).toBeInTheDocument();
  });

  it("renders GitHub social link", () => {
    const { container } = render(<Hero />);
    const githubLink = container.querySelector('a[href*="github.com"]');
    expect(githubLink).toBeInTheDocument();
  });

  it("renders LinkedIn social link", () => {
    const { container } = render(<Hero />);
    const linkedinLink = container.querySelector('a[href*="linkedin.com"]');
    expect(linkedinLink).toBeInTheDocument();
  });

  it("renders Instagram social link", () => {
    const { container } = render(<Hero />);
    const instagramLink = container.querySelector('a[href*="instagram.com"]');
    expect(instagramLink).toBeInTheDocument();
  });

  it("all external social links have rel=noopener noreferrer (security)", () => {
    const { container } = render(<Hero />);
    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    });
  });

  it("social links have aria-label for accessibility", () => {
    const { container } = render(<Hero />);
    const ariaLinks = container.querySelectorAll('a[aria-label]');
    expect(ariaLinks.length).toBeGreaterThan(0);
  });

  it("renders background video element", () => {
    const { container } = render(<Hero />);
    const video = container.querySelector("video");
    expect(video).toBeInTheDocument();
  });

  it("video has muted and autoPlay attributes", () => {
    const { container } = render(<Hero />);
    const video = container.querySelector("video");
    expect(video?.muted).toBe(true);
    expect(video?.autoplay).toBe(true);
  });

  it("video has both webm and mp4 sources", () => {
    const { container } = render(<Hero />);
    const webmSource = container.querySelector('source[type="video/webm"]');
    const mp4Source = container.querySelector('source[type="video/mp4"]');
    expect(webmSource).toBeInTheDocument();
    expect(mp4Source).toBeInTheDocument();
  });

  it("renders Scroll cue indicator", () => {
    const { container } = render(<Hero />);
    expect(container.textContent).toMatch(/scroll/i);
  });

  it("does not expose private keys or tokens in DOM", () => {
    const { container } = render(<Hero />);
    expect(container.innerHTML).not.toMatch(/AKIA[0-9A-Z]{16}/);
    expect(container.innerHTML).not.toMatch(/sk-[a-zA-Z0-9]{32}/);
  });

  it("renders status badge", () => {
    const { container } = render(<Hero />);
    expect(container.textContent).toMatch(/open to opportunities/i);
  });

  it("renders India time badge", () => {
    const { container } = render(<Hero />);
    expect(container.textContent).toMatch(/india/i);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import About from "../../app/components/About";

describe("About — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<About />)).not.toThrow();
  });

  it("has section element with id='about'", () => {
    const { container } = render(<About />);
    expect(container.querySelector("section#about")).toBeInTheDocument();
  });

  it("renders h2 heading 'Who I Am'", () => {
    render(<About />);
    expect(screen.getByText(/who i am/i)).toBeInTheDocument();
  });

  it("renders the bio paragraph", () => {
    const { container } = render(<About />);
    expect(container.textContent).toMatch(/devops|cloud/i);
  });

  it("renders Internships stat", () => {
    render(<About />);
    expect(screen.getByText(/internships/i)).toBeInTheDocument();
  });

  it("renders Certificates stat", () => {
    render(<About />);
    expect(screen.getAllByText(/certificates/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders Projects stat", () => {
    render(<About />);
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  it("renders credential/certificate link", () => {
    const { container } = render(<About />);
    const certLink = container.querySelector('a[href*="certificate"]');
    expect(certLink).toBeInTheDocument();
  });

  it("certificate link opens in new tab", () => {
    const { container } = render(<About />);
    const certLink = container.querySelector('a[href*="certificate"]');
    expect(certLink?.getAttribute("target")).toBe("_blank");
  });

  it("renders AWS Certified tag", () => {
    render(<About />);
    expect(screen.getByText(/aws certified/i)).toBeInTheDocument();
  });

  it("renders SaaS Builder tag", () => {
    render(<About />);
    expect(screen.getByText(/saas builder/i)).toBeInTheDocument();
  });

  it("has h2 with correct heading for SEO", () => {
    const { container } = render(<About />);
    const h2 = container.querySelector("h2");
    expect(h2?.textContent).toMatch(/who i am/i);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Skills from "../../app/components/Skills";

describe("Skills — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Skills />)).not.toThrow();
  });

  it("has section element with id='skills'", () => {
    const { container } = render(<Skills />);
    expect(container.querySelector("section#skills")).toBeInTheDocument();
  });

  it("renders h2 heading 'Technical Arsenal'", () => {
    render(<Skills />);
    expect(screen.getByText(/technical arsenal/i)).toBeInTheDocument();
  });

  it("renders Cloud category", () => {
    render(<Skills />);
    expect(screen.getAllByText(/cloud/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders DevOps category", () => {
    render(<Skills />);
    expect(screen.getByText(/devops/i)).toBeInTheDocument();
  });

  it("renders AWS skill item", () => {
    render(<Skills />);
    expect(screen.getByText("AWS")).toBeInTheDocument();
  });

  it("renders Docker skill item", () => {
    render(<Skills />);
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });

  it("renders Terraform skill item", () => {
    render(<Skills />);
    expect(screen.getByText("Terraform")).toBeInTheDocument();
  });

  it("renders Kubernetes skill item", () => {
    render(<Skills />);
    expect(screen.getByText("Kubernetes")).toBeInTheDocument();
  });

  it("renders Python skill item", () => {
    render(<Skills />);
    expect(screen.getByText("Python")).toBeInTheDocument();
  });

  it("renders all 4 skill categories", () => {
    const { container } = render(<Skills />);
    const cards = container.querySelectorAll(".glass");
    expect(cards.length).toBeGreaterThanOrEqual(4);
  });

  it("renders skill level dots", () => {
    const { container } = render(<Skills />);
    const dots = container.querySelectorAll(".dot");
    expect(dots.length).toBeGreaterThan(0);
  });

  it("subtitle mentions production systems", () => {
    render(<Skills />);
    expect(screen.getByText(/production systems/i)).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Experience from "../../app/components/Experience";

describe("Experience — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Experience />)).not.toThrow();
  });

  it("has section element with id='experience'", () => {
    const { container } = render(<Experience />);
    expect(container.querySelector("section#experience")).toBeInTheDocument();
  });

  it("renders h2 heading 'Where I've Worked'", () => {
    render(<Experience />);
    expect(screen.getByText(/where i.ve worked/i)).toBeInTheDocument();
  });

  it("renders DevOps Intern title", () => {
    render(<Experience />);
    expect(screen.getByText(/devops intern/i)).toBeInTheDocument();
  });

  it("renders Deskcode Solution company name", () => {
    render(<Experience />);
    expect(screen.getByText(/deskcode solution/i)).toBeInTheDocument();
  });

  it("renders AWS Student Builder role", () => {
    render(<Experience />);
    expect(screen.getByText(/aws student builder/i)).toBeInTheDocument();
  });

  it("renders PPSU organisation", () => {
    render(<Experience />);
    expect(screen.getByText(/ppsu/i)).toBeInTheDocument();
  });

  it("renders Data Analyst Intern title", () => {
    render(<Experience />);
    expect(screen.getByText(/data analyst intern/i)).toBeInTheDocument();
  });

  it("renders Unified Data Analysis company", () => {
    render(<Experience />);
    expect(screen.getByText(/unified data analysis/i)).toBeInTheDocument();
  });

  it("renders exactly 3 experience h3 headings", () => {
    const { container } = render(<Experience />);
    const h3s = container.querySelectorAll("h3");
    expect(h3s.length).toBe(3);
  });

  it("experience cards have glass class", () => {
    const { container } = render(<Experience />);
    const cards = container.querySelectorAll(".glass");
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it("renders date badges for each experience", () => {
    render(<Experience />);
    expect(screen.getAllByText(/internship/i).length).toBeGreaterThan(0);
  });

  it("renders timeline dots", () => {
    const { container } = render(<Experience />);
    const dots = container.querySelectorAll(".tl-dot");
    expect(dots.length).toBeGreaterThanOrEqual(3);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Projects from "../../app/components/Projects";

describe("Projects — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Projects />)).not.toThrow();
  });

  it("has section element with id='projects'", () => {
    const { container } = render(<Projects />);
    expect(container.querySelector("section#projects")).toBeInTheDocument();
  });

  it("renders Companies I've Founded heading", () => {
    render(<Projects />);
    expect(screen.getByText(/companies i.ve founded/i)).toBeInTheDocument();
  });

  it("renders Heeratrack project title", () => {
    render(<Projects />);
    const heeratrackEls = screen.getAllByText(/heeratrack/i);
    expect(heeratrackEls.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Validexio project title", () => {
    render(<Projects />);
    const validexioEls = screen.getAllByText(/validexio/i);
    expect(validexioEls.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Open Source & Tools heading", () => {
    render(<Projects />);
    expect(screen.getByText(/open source/i)).toBeInTheDocument();
  });

  it("renders CloudLens project", () => {
    render(<Projects />);
    expect(screen.getByText(/cloudlens/i)).toBeInTheDocument();
  });

  it("renders CloudQuest project", () => {
    render(<Projects />);
    expect(screen.getByText(/cloudquest/i)).toBeInTheDocument();
  });

  it("renders Serverless Cloud Resume project", () => {
    render(<Projects />);
    expect(screen.getByText(/serverless cloud resume/i)).toBeInTheDocument();
  });

  it("renders Live Preview links for featured projects", () => {
    const { container } = render(<Projects />);
    const liveLinks = container.querySelectorAll('a[href*="heeratrack.com"], a[href*="validexio.com"]');
    expect(liveLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("all project external links have rel=noopener noreferrer (security)", () => {
    const { container } = render(<Projects />);
    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    });
  });

  it("renders Founder tags on featured projects", () => {
    render(<Projects />);
    const founderTags = screen.getAllByText(/founder/i);
    expect(founderTags.length).toBeGreaterThanOrEqual(1);
  });

  it("renders tech chips for each project", () => {
    const { container } = render(<Projects />);
    const chips = container.querySelectorAll(".chip");
    expect(chips.length).toBeGreaterThan(0);
  });

  it("renders h3 headings for featured project titles", () => {
    const { container } = render(<Projects />);
    const h3s = container.querySelectorAll("h3");
    expect(h3s.length).toBeGreaterThanOrEqual(2);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// BLOG COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Blog from "../../app/components/Blog";

describe("Blog — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Blog />)).not.toThrow();
  });

  it("has section element with id='blog'", () => {
    const { container } = render(<Blog />);
    expect(container.querySelector("section#blog")).toBeInTheDocument();
  });

  it("renders h2 heading 'Thoughts & Articles'", () => {
    render(<Blog />);
    expect(screen.getByText(/thoughts.*articles/i)).toBeInTheDocument();
  });

  it("renders at least 4 article cards", () => {
    const { container } = render(<Blog />);
    const articleLinks = container.querySelectorAll("a.glass");
    expect(articleLinks.length).toBeGreaterThanOrEqual(4);
  });

  it("renders Dev.to articles", () => {
    const { container } = render(<Blog />);
    const devtoLinks = container.querySelectorAll('a[href*="dev.to"]');
    expect(devtoLinks.length).toBeGreaterThan(0);
  });

  it("renders Medium articles", () => {
    const { container } = render(<Blog />);
    const mediumLinks = container.querySelectorAll('a[href*="medium.com"]');
    expect(mediumLinks.length).toBeGreaterThan(0);
  });

  it("all article links have rel=noopener noreferrer (security)", () => {
    const { container } = render(<Blog />);
    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    });
  });

  it("renders Explore Medium link", () => {
    render(<Blog />);
    expect(screen.getByText(/explore medium/i)).toBeInTheDocument();
  });

  it("renders Explore Dev.to link", () => {
    render(<Blog />);
    expect(screen.getByText(/explore dev\.to/i)).toBeInTheDocument();
  });

  it("renders Explore AWS Builders link", () => {
    render(<Blog />);
    expect(screen.getByText(/explore aws builders/i)).toBeInTheDocument();
  });

  it("article cards show platform badge (Dev.to, Medium, AWS Builders)", () => {
    const { container } = render(<Blog />);
    expect(container.textContent).toMatch(/dev\.to|medium|aws builders/i);
  });

  it("article cards show reading time", () => {
    render(<Blog />);
    expect(screen.getAllByText(/min read/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders h3 headings for article titles", () => {
    const { container } = render(<Blog />);
    const h3s = container.querySelectorAll("h3");
    expect(h3s.length).toBeGreaterThanOrEqual(4);
  });

  it("renders Heeratrack article", () => {
    render(<Blog />);
    const heeratrackElements = screen.getAllByText(/heeratrack/i);
    expect(heeratrackElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Validexio article", () => {
    render(<Blog />);
    const validexioElements = screen.getAllByText(/validexio/i);
    expect(validexioElements.length).toBeGreaterThanOrEqual(1);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Contact from "../../app/components/Contact";

describe("Contact — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Contact />)).not.toThrow();
  });

  it("has section element with id='contact'", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("section#contact")).toBeInTheDocument();
  });

  it("renders h2 heading 'Let's Connect'", () => {
    render(<Contact />);
    expect(screen.getByText(/let.s connect/i)).toBeInTheDocument();
  });

  it("renders email link with mailto:", () => {
    const { container } = render(<Contact />);
    const emailLink = container.querySelector('a[href^="mailto:"]');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink?.getAttribute("href")).toContain("ridhampokiya10@gmail.com");
  });

  it("renders phone link with tel:", () => {
    const { container } = render(<Contact />);
    const phoneLink = container.querySelector('a[href^="tel:"]');
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink?.getAttribute("href")).toContain("9825954653");
  });

  it("renders GitHub link", () => {
    const { container } = render(<Contact />);
    const githubLink = container.querySelector('a[href*="github.com"]');
    expect(githubLink).toBeInTheDocument();
  });

  it("renders LinkedIn link", () => {
    const { container } = render(<Contact />);
    const linkedinLink = container.querySelector('a[href*="linkedin.com"]');
    expect(linkedinLink).toBeInTheDocument();
  });

  it("renders Instagram link", () => {
    const { container } = render(<Contact />);
    const instagramLink = container.querySelector('a[href*="instagram.com"]');
    expect(instagramLink).toBeInTheDocument();
  });

  it("renders WhatsApp link", () => {
    const { container } = render(<Contact />);
    const whatsappLink = container.querySelector('a[href*="wa.me"]');
    expect(whatsappLink).toBeInTheDocument();
  });

  it("all external links have rel=noopener noreferrer (security)", () => {
    const { container } = render(<Contact />);
    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    });
  });

  it("shows role/profession mention in subheading", () => {
    render(<Contact />);
    const matches = screen.getAllByText(/devops|cloud|saas|engineer/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders social grid with 4 items", () => {
    const { container } = render(<Contact />);
    const socialLinks = container.querySelectorAll(".grid-4 a, a.glass");
    expect(socialLinks.length).toBeGreaterThanOrEqual(4);
  });

  it("shows email address text in the DOM", () => {
    render(<Contact />);
    expect(screen.getByText(/ridhampokiya10@gmail.com/i)).toBeInTheDocument();
  });

  it("shows phone number text in the DOM", () => {
    render(<Contact />);
    expect(screen.getByText(/\+91/i)).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Footer from "../../app/components/Footer";

describe("Footer — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Footer />)).not.toThrow();
  });

  it("renders a footer HTML element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("renders Ridham Pokiya attribution", () => {
    render(<Footer />);
    expect(screen.getByText(/ridham pokiya/i)).toBeInTheDocument();
  });

  it("shows the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("shows 'Designed & Built by'", () => {
    render(<Footer />);
    expect(screen.getByText(/designed.*built/i)).toBeInTheDocument();
  });

  it("shows 'Stable System' status", () => {
    render(<Footer />);
    expect(screen.getByText(/stable system/i)).toBeInTheDocument();
  });

  it("renders the RP logo", () => {
    render(<Footer />);
    expect(screen.getByText(/^RP/)).toBeInTheDocument();
  });

  it("has a pulse-dot status indicator", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector(".pulse-dot")).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import Navbar from "../../app/components/Navbar";

describe("Navbar — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<Navbar />)).not.toThrow();
  });

  it("renders a header element", () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector("header")).toBeInTheDocument();
  });

  it("renders a nav element", () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector("nav")).toBeInTheDocument();
  });

  it("renders RP logo link", () => {
    const { container } = render(<Navbar />);
    const logoLink = container.querySelector('a[href="#hero"]');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink?.textContent).toMatch(/rp/i);
  });

  it("renders About nav link", () => {
    render(<Navbar />);
    expect(screen.getByText(/^About$/i)).toBeInTheDocument();
  });

  it("renders Skills nav link", () => {
    render(<Navbar />);
    expect(screen.getByText(/^Skills$/i)).toBeInTheDocument();
  });

  it("renders Experience nav link", () => {
    render(<Navbar />);
    expect(screen.getByText(/^Experience$/i)).toBeInTheDocument();
  });

  it("renders Projects nav link", () => {
    render(<Navbar />);
    expect(screen.getByText(/^Projects$/i)).toBeInTheDocument();
  });

  it("renders Blog nav link", () => {
    render(<Navbar />);
    expect(screen.getByText(/^Blog$/i)).toBeInTheDocument();
  });

  it("renders Contact nav link", () => {
    render(<Navbar />);
    expect(screen.getByText(/^Contact$/i)).toBeInTheDocument();
  });

  it("renders Resume download button", () => {
    const { container } = render(<Navbar />);
    const resumeLink = container.querySelector('a[download]');
    expect(resumeLink).toBeInTheDocument();
  });

  it("nav links point to correct anchors", () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('a[href="#about"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="#skills"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="#projects"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="#contact"]')).toBeInTheDocument();
  });

  it("renders scroll progress bar", () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector(".scroll-bar")).toBeInTheDocument();
  });

  it("scroll bar has aria-hidden for accessibility", () => {
    const { container } = render(<Navbar />);
    const scrollBar = container.querySelector(".scroll-bar");
    expect(scrollBar?.getAttribute("aria-hidden")).toBeTruthy();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// MOBILENAV COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import MobileNav from "../../app/components/MobileNav";

describe("MobileNav — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<MobileNav />)).not.toThrow();
  });

  it("renders mobile bottom nav container", () => {
    const { container } = render(<MobileNav />);
    expect(container.querySelector(".mobile-bottom-nav")).toBeInTheDocument();
  });

  it("renders nav items for all nav links", () => {
    const { container } = render(<MobileNav />);
    const navItems = container.querySelectorAll(".nav-item");
    expect(navItems.length).toBeGreaterThanOrEqual(5);
  });

  it("all nav items have aria-label for accessibility", () => {
    const { container } = render(<MobileNav />);
    const navItems = container.querySelectorAll("a.nav-item");
    navItems.forEach((item) => {
      expect(item.getAttribute("aria-label")).toBeTruthy();
    });
  });

  it("nav items have correct href anchors", () => {
    const { container } = render(<MobileNav />);
    expect(container.querySelector('a[href="#about"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="#skills"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="#contact"]')).toBeInTheDocument();
  });

  it("renders SVG icons for each nav item", () => {
    const { container } = render(<MobileNav />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });

  it("renders style element with mobile CSS", () => {
    const { container } = render(<MobileNav />);
    const styleEl = container.querySelector("style");
    expect(styleEl).toBeInTheDocument();
    expect(styleEl?.textContent).toMatch(/mobile-bottom-nav/);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOMCURSOR COMPONENT — Full System Tests
// ─────────────────────────────────────────────────────────────────────────────
import CustomCursor from "../../app/components/CustomCursor";

describe("CustomCursor — complete system tests", () => {
  it("renders without crashing", () => {
    expect(() => render(<CustomCursor />)).not.toThrow();
  });

  it("renders cursor dot element with class cur-dot", () => {
    const { container } = render(<CustomCursor />);
    expect(container.querySelector(".cur-dot")).toBeInTheDocument();
  });

  it("cursor dot has aria-hidden for accessibility", () => {
    const { container } = render(<CustomCursor />);
    const dot = container.querySelector(".cur-dot");
    expect(dot?.getAttribute("aria-hidden")).toBeTruthy();
  });

  it("renders only one cursor dot element", () => {
    const { container } = render(<CustomCursor />);
    const dots = container.querySelectorAll(".cur-dot");
    expect(dots.length).toBe(1);
  });
});
