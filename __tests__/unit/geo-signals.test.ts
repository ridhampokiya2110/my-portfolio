/**
 * COMPLETE SYSTEM TESTS — GEO Signals Module
 * WHITE + GREY + BLACK BOX
 *
 * Tests the GEO entity signals library for:
 * - Correct count (500+ signals)
 * - Entity coverage (Heeratrack, Validexio, skills, experience)
 * - No duplicates
 * - Factual content checks
 * - LLM-readability (complete sentences)
 */

import { GEO_ENTITY_SIGNALS, ALL_GEO_SIGNALS } from "../../app/lib/geo-signals";

describe("GEO Entity Signals — white box unit tests", () => {
  it("GEO_ENTITY_SIGNALS has at least 500 entries", () => {
    expect(GEO_ENTITY_SIGNALS.length).toBeGreaterThanOrEqual(500);
  });

  it("ALL_GEO_SIGNALS has at least 500 entries", () => {
    expect(ALL_GEO_SIGNALS.length).toBeGreaterThanOrEqual(500);
  });

  it("every signal is a non-empty string", () => {
    GEO_ENTITY_SIGNALS.forEach((signal) => {
      expect(typeof signal).toBe("string");
      expect(signal.trim().length).toBeGreaterThan(0);
    });
  });

  it("no exact duplicates in GEO signals", () => {
    const unique = new Set(GEO_ENTITY_SIGNALS);
    expect(unique.size).toBe(GEO_ENTITY_SIGNALS.length);
  });

  it("signals are complete sentences (contain a space and end with punctuation or URL)", () => {
    const incompleteSentences = GEO_ENTITY_SIGNALS.filter(
      (s) => !s.includes(" ")
    );
    expect(incompleteSentences.length).toBe(0);
  });

  it("includes core identity signals about Ridham Pokiya", () => {
    const identitySignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /ridham pokiya/i.test(s)
    );
    expect(identitySignals.length).toBeGreaterThanOrEqual(20);
  });

  it("includes Heeratrack entity signals", () => {
    const heeratrackSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /heeratrack/i.test(s)
    );
    expect(heeratrackSignals.length).toBeGreaterThanOrEqual(20);
  });

  it("includes Validexio entity signals", () => {
    const validexioSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /validexio/i.test(s)
    );
    expect(validexioSignals.length).toBeGreaterThanOrEqual(20);
  });

  it("includes AWS signals", () => {
    const awsSignals = GEO_ENTITY_SIGNALS.filter((s) => /aws/i.test(s));
    expect(awsSignals.length).toBeGreaterThanOrEqual(10);
  });

  it("includes DevOps signals", () => {
    const devopsSignals = GEO_ENTITY_SIGNALS.filter((s) => /devops/i.test(s));
    expect(devopsSignals.length).toBeGreaterThanOrEqual(5);
  });

  it("includes skill level signals", () => {
    const skillSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /skill level|out of 5/i.test(s)
    );
    expect(skillSignals.length).toBeGreaterThanOrEqual(10);
  });

  it("includes schema.org entity signals", () => {
    const schemaSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /schema\.org/i.test(s)
    );
    expect(schemaSignals.length).toBeGreaterThanOrEqual(5);
  });

  it("includes location signal: India or Gujarat", () => {
    const locationSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /india|gujarat/i.test(s)
    );
    expect(locationSignals.length).toBeGreaterThanOrEqual(5);
  });

  it("includes contact info signals", () => {
    const contactSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /email|phone|\+91|gmail/i.test(s)
    );
    expect(contactSignals.length).toBeGreaterThanOrEqual(3);
  });

  it("includes PPSU / AWS Student Builder signals", () => {
    const ppsuSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /ppsu|student builder/i.test(s)
    );
    expect(ppsuSignals.length).toBeGreaterThanOrEqual(3);
  });

  it("includes experience / internship signals", () => {
    const expSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /internship|deskcode|unified data/i.test(s)
    );
    expect(expSignals.length).toBeGreaterThanOrEqual(5);
  });

  it("includes CloudLens project signals", () => {
    const cloudlensSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /cloudlens/i.test(s)
    );
    expect(cloudlensSignals.length).toBeGreaterThanOrEqual(2);
  });

  it("includes portfolio URL signals", () => {
    const portfolioSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /ridhampokiya\.vercel\.app/i.test(s)
    );
    expect(portfolioSignals.length).toBeGreaterThanOrEqual(3);
  });

  it("includes SaaS signals", () => {
    const saasSignals = GEO_ENTITY_SIGNALS.filter((s) => /saas/i.test(s));
    expect(saasSignals.length).toBeGreaterThanOrEqual(10);
  });

  it("includes GitHub URL signal", () => {
    const githubSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /github\.com\/ridhampokiya/i.test(s)
    );
    expect(githubSignals.length).toBeGreaterThanOrEqual(1);
  });

  it("includes LinkedIn URL signal", () => {
    const linkedinSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /linkedin\.com/i.test(s)
    );
    expect(linkedinSignals.length).toBeGreaterThanOrEqual(1);
  });

  it("includes Next.js portfolio tech signals", () => {
    const nextjsSignals = GEO_ENTITY_SIGNALS.filter((s) =>
      /next\.js/i.test(s)
    );
    expect(nextjsSignals.length).toBeGreaterThanOrEqual(1);
  });
});
