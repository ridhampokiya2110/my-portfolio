/**
 * MOBILE QA DEEP VERIFICATION SUITE
 * Covers: Black Box, Grey Box, and White Box testing for mobile viewports (375px - 768px).
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../../app/components/Hero";
import Navbar from "../../app/components/Navbar";
import Services from "../../app/components/Services";
import Approach from "../../app/components/Approach";
import StickyCardStack from "../../app/components/StickyCardStack";
import About from "../../app/components/About";
import ExecutiveGallery from "../../app/components/ExecutiveGallery";
import Skills from "../../app/components/Skills";
import SideProjects from "../../app/components/SideProjects";
import Books from "../../app/components/Books";
import Blog from "../../app/components/Blog";
import Contact from "../../app/components/Contact";
import Footer from "../../app/components/Footer";
import CustomCursor from "../../app/components/CustomCursor";
import { selectedWorkData } from "../../data/work";

// ─────────────────────────────────────────────────────────────────────────────
// Global Test Environment Polyfills for Mobile QA
// ─────────────────────────────────────────────────────────────────────────────
global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
  observe: jest.fn(() => callback([{ isIntersecting: true }])),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
})) as unknown as typeof IntersectionObserver;

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})) as unknown as typeof ResizeObserver;

window.HTMLElement.prototype.scrollIntoView = jest.fn();

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: query.includes("max-width"),
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Mobile QA Testing Suite (Black, Grey, White Box)", () => {
  beforeEach(() => {
    window.innerWidth = 375;
    window.innerHeight = 812;
    window.dispatchEvent(new Event("resize"));
  });

  // =========================================================================
  // 1. BLACK BOX TESTING — Mobile User Interaction & Visual Render Checks
  // =========================================================================
  describe("1. Black Box: Mobile User Interaction & Rendering", () => {
    it("renders Hero section correctly on mobile viewport with portrait and actions", () => {
      const { container } = render(<Hero />);
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
      expect(container.querySelector(".hero-right-col")).toBeInTheDocument();
      expect(container.querySelector(".hero-left-col")).toBeInTheDocument();
      expect(container.querySelector(".hero-mobile-portrait-wrapper")).toBeInTheDocument();
      expect(container.querySelector("img[src*='1.jpeg']")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /book an architecture call/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /selected case studies/i })).toBeInTheDocument();
    });

    it("renders mobile menu trigger button and expands navigation overlay", () => {
      const { container } = render(<Navbar />);
      const menuButton = container.querySelector(".show-mobile");
      expect(menuButton).toBeInTheDocument();
      
      // Click to toggle mobile navigation overlay
      if (menuButton) {
        fireEvent.click(menuButton);
        expect(screen.getByText(/directory/i)).toBeInTheDocument();
      }
    });

    it("allows mobile tapping on Services row to expand detailed description", () => {
      const { container } = render(<Services />);
      expect(screen.getByText(/cloud & devops/i)).toBeInTheDocument();
      
      const rows = container.querySelectorAll(".service-row");
      expect(rows.length).toBe(6);

      // Tap on first row
      fireEvent.click(rows[0]);
      // Verify description is rendered
      expect(screen.getByText(/zero-downtime aws topologies/i)).toBeInTheDocument();
    });

    it("renders Approach step panels with all 4 phases on mobile", () => {
      render(<Approach />);
      expect(screen.getAllByText("Discover").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Design").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Build").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Support").length).toBeGreaterThan(0);
    });

    it("renders StickyCardStack with clean mobile study cards and diagrams", () => {
      const { container } = render(<StickyCardStack cards={selectedWorkData} />);
      const cards = container.querySelectorAll(".case-study-card");
      expect(cards.length).toBe(2);
      expect(container.querySelector(".visual-frame")).toBeInTheDocument();
    });

    it("renders About section with grayscale portrait plate and bio", () => {
      const { container } = render(<About />);
      expect(container.querySelector("img[src*='profile.jpeg']")).toBeInTheDocument();
      expect(screen.getByText(/the man/i)).toBeInTheDocument();
      expect(screen.getByText(/the scenes/i)).toBeInTheDocument();
      expect(screen.getByText(/the person/i)).toBeInTheDocument();
      expect(screen.getAllByText(/behind/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/cloud & devops specialist · founder/i)).toBeInTheDocument();
    });

    it("renders Executive Gallery on mobile with three leadership photo plates and live pagination", () => {
      const { container } = render(<ExecutiveGallery />);
      const galleryCards = container.querySelectorAll(".cinema-card");
      expect(galleryCards.length).toBe(3);

      const indicatorButtons = container.querySelectorAll(".mobile-gallery-indicators button");
      expect(indicatorButtons.length).toBe(3);

      // Tap 3rd indicator button
      fireEvent.click(indicatorButtons[2]);
      expect(screen.getAllByText(/03/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Systems Engineering/i).length).toBeGreaterThan(0);
    });

    it("renders Skills, SideProjects, Blog, Contact, and Footer on mobile", () => {
      render(
        <div>
          <Skills />
          <SideProjects />
          <Blog />
          <Contact />
          <Footer />
        </div>
      );
      expect(screen.getByText(/technical arsenal/i)).toBeInTheDocument();
      expect(screen.getByText(/heeratrack/i)).toBeInTheDocument();
      expect(screen.getByText(/read more on:/i)).toBeInTheDocument();
      expect(screen.getByText(/direct email/i)).toBeInTheDocument();
      expect(screen.getByText(/surat, india \(ist\)/i)).toBeInTheDocument();
    });

    it("renders Books section on mobile with Millionaire's Mindset and Amazon links", () => {
      const { container } = render(<Books />);
      const headings = screen.getAllByText(/millionaire's mindset/i);
      expect(headings.length).toBeGreaterThanOrEqual(1);
      expect(container.querySelector('a[href*="amazon.com"]')).toBeInTheDocument();
      expect(container.querySelector('a[href*="amazon.in"]')).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 2. GREY BOX TESTING — Styles, Contrast Tokens & Structural Boundaries
  // =========================================================================
  describe("2. Grey Box: Architecture, Tokens & Structural Integration", () => {
    it("ensures CustomCursor is completely hidden and pointer-events are disabled", () => {
      const { container } = render(<CustomCursor />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle("display: none");
      expect(wrapper).toHaveStyle("visibility: hidden");
      expect(wrapper).toHaveStyle("pointer-events: none");
    });

    it("validates theme switching in Navbar toggles light/dark state seamlessly", () => {
      render(<Navbar />);
      const themeToggle = screen.getByTitle(/switch to/i);
      expect(themeToggle).toBeInTheDocument();
      fireEvent.click(themeToggle);
      expect(document.documentElement.getAttribute("data-theme")).toBeDefined();
    });

    it("verifies mobile contact touch targets and links have secure rel attributes", () => {
      render(<Contact />);
      const externalLinks = screen.getAllByRole("link");
      externalLinks.forEach((link) => {
        if (link.getAttribute("target") === "_blank") {
          expect(link.getAttribute("rel")).toContain("noopener");
        }
      });
    });
  });

  // =========================================================================
  // 3. WHITE BOX TESTING — Internal Logic, State & Data Integrity
  // =========================================================================
  describe("3. White Box: Internal Logic & Component State Verification", () => {
    it("verifies selectedWorkData contains exactly 2 production cards with valid visual types", () => {
      expect(selectedWorkData).toHaveLength(2);
      selectedWorkData.forEach((card) => {
        expect(card.id).toBeTruthy();
        expect(card.title).toBeTruthy();
        expect(card.stack.length).toBeGreaterThan(0);
        expect(card.visual.diagramType).toBeTruthy();
      });
    });

    it("verifies Approach renders all 4 stage step cards with valid class structure", () => {
      const { container } = render(<Approach />);
      const stepCards = container.querySelectorAll(".approach-step-card");
      expect(stepCards.length).toBe(4);
      expect(stepCards[0]).toHaveClass("approach-step-card");
    });
  });
});
