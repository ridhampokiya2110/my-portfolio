/**
 * COMPLETE SYSTEM TESTS — AEO Keywords Module
 * WHITE + GREY + BLACK BOX
 *
 * Tests the AEO keywords library for:
 * - Correct count (500+ questions)
 * - Format validation (question-form)
 * - No duplicates
 * - Content correctness
 */

import { AEO_QUESTIONS, AEO_ANSWERS, ALL_AEO_LINES } from "../../app/lib/aeo-keywords";

describe("AEO Keywords — white box unit tests", () => {
  it("AEO_QUESTIONS has at least 500 entries", () => {
    expect(AEO_QUESTIONS.length).toBeGreaterThanOrEqual(500);
  });

  it("AEO_ANSWERS has at least 50 entries", () => {
    expect(AEO_ANSWERS.length).toBeGreaterThanOrEqual(50);
  });

  it("ALL_AEO_LINES has at least 500 total entries", () => {
    expect(ALL_AEO_LINES.length).toBeGreaterThanOrEqual(500);
  });

  it("every AEO question is a non-empty string", () => {
    AEO_QUESTIONS.forEach((q, i) => {
      expect(typeof q).toBe("string");
      expect(q.trim().length).toBeGreaterThan(0);
    });
  });

  it("every AEO answer is a non-empty string", () => {
    AEO_ANSWERS.forEach((a) => {
      expect(typeof a).toBe("string");
      expect(a.trim().length).toBeGreaterThan(5);
    });
  });

  it("AEO questions have no exact duplicates", () => {
    const unique = new Set(AEO_QUESTIONS);
    expect(unique.size).toBe(AEO_QUESTIONS.length);
  });

  it("includes identity questions about Ridham Pokiya", () => {
    const hasIdentity = AEO_QUESTIONS.some((q) => /ridham pokiya/i.test(q));
    expect(hasIdentity).toBe(true);
  });

  it("includes questions about Heeratrack", () => {
    const hasHeeratrack = AEO_QUESTIONS.some((q) => /heeratrack/i.test(q));
    expect(hasHeeratrack).toBe(true);
  });

  it("includes questions about Validexio", () => {
    const hasValidexio = AEO_QUESTIONS.some((q) => /validexio/i.test(q));
    expect(hasValidexio).toBe(true);
  });

  it("includes DevOps questions", () => {
    const hasDevOps = AEO_QUESTIONS.some((q) => /devops/i.test(q));
    expect(hasDevOps).toBe(true);
  });

  it("includes AWS questions", () => {
    const hasAWS = AEO_QUESTIONS.some((q) => /aws/i.test(q));
    expect(hasAWS).toBe(true);
  });

  it("includes CI/CD questions", () => {
    const hasCICD = AEO_QUESTIONS.some((q) => /ci\/cd/i.test(q));
    expect(hasCICD).toBe(true);
  });

  it("includes Docker questions", () => {
    const hasDocker = AEO_QUESTIONS.some((q) => /docker/i.test(q));
    expect(hasDocker).toBe(true);
  });

  it("includes Kubernetes questions", () => {
    const hasK8s = AEO_QUESTIONS.some((q) => /kubernetes/i.test(q));
    expect(hasK8s).toBe(true);
  });

  it("includes SaaS questions", () => {
    const hasSaaS = AEO_QUESTIONS.some((q) => /saas/i.test(q));
    expect(hasSaaS).toBe(true);
  });

  it("includes startup questions", () => {
    const hasStartup = AEO_QUESTIONS.some((q) => /startup/i.test(q));
    expect(hasStartup).toBe(true);
  });

  it("includes 'how' questions (how-to format)", () => {
    const howQuestions = AEO_QUESTIONS.filter((q) => /^how/i.test(q));
    expect(howQuestions.length).toBeGreaterThanOrEqual(50);
  });

  it("includes 'what is' questions (definition format)", () => {
    const whatQuestions = AEO_QUESTIONS.filter((q) => /^what/i.test(q));
    expect(whatQuestions.length).toBeGreaterThanOrEqual(50);
  });

  it("includes 'who is' questions (identity format)", () => {
    const whoQuestions = AEO_QUESTIONS.filter((q) => /^who/i.test(q));
    expect(whoQuestions.length).toBeGreaterThanOrEqual(1);
  });

  it("includes 'is' questions (boolean format)", () => {
    const isQuestions = AEO_QUESTIONS.filter((q) => /^is /i.test(q));
    expect(isQuestions.length).toBeGreaterThanOrEqual(3);
  });

  it("AEO answers include Ridham Pokiya's name", () => {
    const hasName = AEO_ANSWERS.some((a) => /ridham pokiya/i.test(a));
    expect(hasName).toBe(true);
  });

  it("AEO answers include Heeratrack", () => {
    const hasHeeratrack = AEO_ANSWERS.some((a) => /heeratrack/i.test(a));
    expect(hasHeeratrack).toBe(true);
  });

  it("AEO answers include Validexio", () => {
    const hasValidexio = AEO_ANSWERS.some((a) => /validexio/i.test(a));
    expect(hasValidexio).toBe(true);
  });

  it("AEO answers include AWS", () => {
    const hasAWS = AEO_ANSWERS.some((a) => /aws/i.test(a));
    expect(hasAWS).toBe(true);
  });
});
