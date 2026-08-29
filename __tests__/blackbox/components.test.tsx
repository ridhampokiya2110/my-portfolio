/**
 * BLACK BOX TESTING — Component Rendering Tests
 *
 * Black box: we only care about inputs → outputs.
 * No knowledge of internal implementation; tests interact
 * with components through the DOM like a real user or browser.
 *
 * Covers: Hero, About, Skills, Experience, Projects, Contact, Footer,
 *         Navbar, StructuredData.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// ─────────────────────────────────────────────────────────────────────────────
// Mocks — needed because jsdom cannot play videos or run intersection observer
// ─────────────────────────────────────────────────────────────────────────────
global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
  observe: jest.fn(() => callback([{ isIntersecting: true }])),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
})) as unknown as typeof IntersectionObserver;

// Mock window.matchMedia (used by some responsive hooks)
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

// ─────────────────────────────────────────────────────────────────────────────
// StructuredData — Black Box
// ─────────────────────────────────────────────────────────────────────────────
import StructuredData from "../../app/components/StructuredData";

describe("StructuredData — black box rendering", () => {
  it("renders without crashing", () => {
    expect(() => render(<StructuredData />)).not.toThrow();
  });

  it("renders JSON-LD script tags", () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    expect(scripts.length).toBeGreaterThanOrEqual(5);
  });

  it("each script tag contains valid JSON", () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    scripts.forEach((script) => {
      expect(() => JSON.parse(script.textContent ?? "")).not.toThrow();
    });
  });

  it("at least one schema has @type Person", () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    const schemas = Array.from(scripts).map((s) =>
      JSON.parse(s.textContent ?? "{}")
    );
    const hasPersonSchema = schemas.some((s) => s["@type"] === "Person");
    expect(hasPersonSchema).toBe(true);
  });

  it("at least one schema has @type FAQPage", () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    const schemas = Array.from(scripts).map((s) =>
      JSON.parse(s.textContent ?? "{}")
    );
    const hasFAQ = schemas.some((s) => s["@type"] === "FAQPage");
    expect(hasFAQ).toBe(true);
  });

  it("Person schema has correct name", () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    const schemas = Array.from(scripts).map((s) =>
      JSON.parse(s.textContent ?? "{}")
    );
    const person = schemas.find((s) => s["@type"] === "Person");
    expect(person?.name).toBe("Ridham Pokiya");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Footer — Black Box
// ─────────────────────────────────────────────────────────────────────────────
import Footer from "../../app/components/Footer";

describe("Footer — black box rendering", () => {
  it("renders without crashing", () => {
    expect(() => render(<Footer />)).not.toThrow();
  });

  it("renders a footer element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("contains 'Ridham Pokiya' attribution", () => {
    render(<Footer />);
    expect(screen.getByText(/ridham pokiya/i)).toBeInTheDocument();
  });

  it("shows current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("shows Stable System status", () => {
    render(<Footer />);
    expect(screen.getByText(/stable system/i)).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Navbar — Black Box
// ─────────────────────────────────────────────────────────────────────────────
import Navbar from "../../app/components/Navbar";

describe("Navbar — black box rendering", () => {
  it("renders without crashing", () => {
    expect(() => render(<Navbar />)).not.toThrow();
  });

  it("renders a nav or header element", () => {
    const { container } = render(<Navbar />);
    const hasNav =
      container.querySelector("nav") || container.querySelector("header");
    expect(hasNav).toBeTruthy();
  });

  it("contains a link to About section", () => {
    render(<Navbar />);
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
  });

  it("contains a link to Projects section", () => {
    render(<Navbar />);
    const projectsLink = screen.getByText(/projects/i);
    expect(projectsLink).toBeInTheDocument();
  });

  it("contains a link to Contact section", () => {
    render(<Navbar />);
    const contactLink = screen.getByText(/contact/i);
    expect(contactLink).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// About — Black Box
// ─────────────────────────────────────────────────────────────────────────────
import About from "../../app/components/About";

describe("About — black box rendering", () => {
  it("renders without crashing", () => {
    expect(() => render(<About />)).not.toThrow();
  });

  it("renders a section with id='about'", () => {
    const { container } = render(<About />);
    expect(container.querySelector("#about")).toBeInTheDocument();
  });

  it("shows 'Who I Am' heading", () => {
    render(<About />);
    expect(screen.getByText(/who i am/i)).toBeInTheDocument();
  });

  it("shows stat labels", () => {
    render(<About />);
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Skills — Black Box
// ─────────────────────────────────────────────────────────────────────────────
import Skills from "../../app/components/Skills";

describe("Skills — black box rendering", () => {
  it("renders without crashing", () => {
    expect(() => render(<Skills />)).not.toThrow();
  });

  it("renders section with id='skills'", () => {
    const { container } = render(<Skills />);
    expect(container.querySelector("#skills")).toBeInTheDocument();
  });

  it("shows Cloud category", () => {
    render(<Skills />);
    // Use getAllByText to handle multiple matches (Cloud, CloudFront, Cloud Monitoring)
    const cloudElements = screen.getAllByText(/cloud/i);
    expect(cloudElements.length).toBeGreaterThanOrEqual(1);
  });

  it("shows AWS skill", () => {
    render(<Skills />);
    expect(screen.getByText("AWS")).toBeInTheDocument();
  });

  it("shows DevOps category", () => {
    render(<Skills />);
    expect(screen.getByText(/devops/i)).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Experience — Black Box
// ─────────────────────────────────────────────────────────────────────────────
import Experience from "../../app/components/Experience";

describe("Experience — black box rendering", () => {
  it("renders without crashing", () => {
    expect(() => render(<Experience />)).not.toThrow();
  });

  it("renders section with id='experience'", () => {
    const { container } = render(<Experience />);
    expect(container.querySelector("#experience")).toBeInTheDocument();
  });

  it("shows Deskcode Solution internship", () => {
    render(<Experience />);
    expect(screen.getByText(/deskcode/i)).toBeInTheDocument();
  });

  it("shows AWS Student Builder role", () => {
    render(<Experience />);
    expect(screen.getByText(/aws student builder/i)).toBeInTheDocument();
  });

  it("shows Data Analyst internship", () => {
    render(<Experience />);
    expect(screen.getByText(/data analyst/i)).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Contact — Black Box
// ─────────────────────────────────────────────────────────────────────────────
import Contact from "../../app/components/Contact";

describe("Contact — black box rendering", () => {
  it("renders without crashing", () => {
    expect(() => render(<Contact />)).not.toThrow();
  });

  it("renders section with id='contact'", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("shows Let's Connect heading", () => {
    render(<Contact />);
    expect(screen.getByText(/let.s connect/i)).toBeInTheDocument();
  });

  it("has a mailto link for email", () => {
    const { container } = render(<Contact />);
    const mailtoLink = container.querySelector('a[href^="mailto:"]');
    expect(mailtoLink).toBeInTheDocument();
  });

  it("has a tel link for phone", () => {
    const { container } = render(<Contact />);
    const telLink = container.querySelector('a[href^="tel:"]');
    expect(telLink).toBeInTheDocument();
  });

  it("shows GitHub social link", () => {
    const { container } = render(<Contact />);
    const githubLink = container.querySelector('a[href*="github.com"]');
    expect(githubLink).toBeInTheDocument();
  });
});
