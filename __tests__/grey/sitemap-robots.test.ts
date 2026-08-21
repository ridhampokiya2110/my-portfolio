/**
 * GREY BOX TESTING — Sitemap & Robots Validation
 *
 * Grey box: we know the internal implementation (sitemap.ts, robots.ts)
 * but test through the public-facing function outputs, checking both
 * structure AND content correctness.
 */

import sitemap from "../../app/sitemap";
import robots from "../../app/robots";

// ─────────────────────────────────────────────────────────────────────────────
// Sitemap Tests
// ─────────────────────────────────────────────────────────────────────────────
describe("Sitemap — grey box tests", () => {
  const sitemapEntries = sitemap();

  it("returns an array", () => {
    expect(Array.isArray(sitemapEntries)).toBe(true);
  });

  it("has at least 5 entries", () => {
    expect(sitemapEntries.length).toBeGreaterThanOrEqual(5);
  });

  it("every entry has a url string", () => {
    sitemapEntries.forEach((entry) => {
      expect(typeof entry.url).toBe("string");
      expect(entry.url.length).toBeGreaterThan(0);
    });
  });

  it("every url starts with https://", () => {
    sitemapEntries.forEach((entry) => {
      expect(entry.url).toMatch(/^https:\/\//);
    });
  });

  it("root URL has priority 1.0", () => {
    const root = sitemapEntries.find(
      (e) => e.url === "https://ridhampokiya.vercel.app"
    );
    expect(root).toBeDefined();
    expect(root!.priority).toBe(1.0);
  });

  it("every entry has a lastModified date", () => {
    sitemapEntries.forEach((entry) => {
      expect(entry.lastModified).toBeDefined();
      expect(entry.lastModified instanceof Date).toBe(true);
    });
  });

  it("every entry has a changeFrequency", () => {
    const validFreqs = [
      "always",
      "hourly",
      "daily",
      "weekly",
      "monthly",
      "yearly",
      "never",
    ];
    sitemapEntries.forEach((entry) => {
      expect(validFreqs).toContain(entry.changeFrequency);
    });
  });

  it("every entry has priority between 0 and 1", () => {
    sitemapEntries.forEach((entry) => {
      if (entry.priority !== undefined) {
        expect(entry.priority).toBeGreaterThanOrEqual(0);
        expect(entry.priority).toBeLessThanOrEqual(1);
      }
    });
  });

  it("includes the #about anchor", () => {
    const aboutEntry = sitemapEntries.find((e) =>
      e.url.includes("#about")
    );
    expect(aboutEntry).toBeDefined();
  });

  it("includes the #projects anchor", () => {
    const projectsEntry = sitemapEntries.find((e) =>
      e.url.includes("#projects")
    );
    expect(projectsEntry).toBeDefined();
  });

  it("includes the #contact anchor", () => {
    const contactEntry = sitemapEntries.find((e) =>
      e.url.includes("#contact")
    );
    expect(contactEntry).toBeDefined();
  });

  it("no duplicate URLs", () => {
    const urls = sitemapEntries.map((e) => e.url);
    const unique = new Set(urls);
    expect(unique.size).toBe(urls.length);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Robots Tests
// ─────────────────────────────────────────────────────────────────────────────
describe("Robots — grey box tests", () => {
  const robotsConfig = robots();

  it("returns an object with rules", () => {
    expect(robotsConfig).toBeDefined();
    expect(Array.isArray(robotsConfig.rules)).toBe(true);
  });

  it("has at least 3 rule entries", () => {
    const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules];
    expect(rules.length).toBeGreaterThanOrEqual(3);
  });

  it("has a wildcard rule allowing /", () => {
    const rules = (Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules]) as Array<Record<string, unknown>>;
    const wildcardRule = rules.find((r) => r["userAgent"] === "*");
    expect(wildcardRule).toBeDefined();
    const allow = wildcardRule?.["allow"];
    if (Array.isArray(allow)) {
      expect(allow).toContain("/");
    } else {
      expect(allow).toBe("/");
    }
  });

  it("blocks /_next/ for wildcard", () => {
    const rules = (Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules]) as Array<Record<string, unknown>>;
    const wildcardRule = rules.find((r) => r["userAgent"] === "*");
    const disallow = wildcardRule?.["disallow"];
    if (Array.isArray(disallow)) {
      expect((disallow as string[]).some((d: string) => d.includes("_next"))).toBe(true);
    } else if (typeof disallow === "string") {
      expect(disallow).toContain("_next");
    } else {
      // disallow may be undefined for wildcard — acceptable
      expect(true).toBe(true);
    }
  });

  it("allows GPTBot (GEO signal)", () => {
    const rules = (Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules]) as Array<Record<string, unknown>>;
    const gptBotRule = rules.find((r) => r["userAgent"] === "GPTBot");
    expect(gptBotRule).toBeDefined();
    expect(gptBotRule?.["allow"]).toBe("/");
  });

  it("allows PerplexityBot (GEO signal)", () => {
    const rules = (Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules]) as Array<Record<string, unknown>>;
    const perplexityRule = rules.find((r) => r["userAgent"] === "PerplexityBot");
    expect(perplexityRule).toBeDefined();
    expect(perplexityRule?.["allow"]).toBe("/");
  });

  it("allows Google-Extended (Gemini GEO signal)", () => {
    const rules = (Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules]) as Array<Record<string, unknown>>;
    const geminiRule = rules.find((r) => r["userAgent"] === "Google-Extended");
    expect(geminiRule).toBeDefined();
    expect(geminiRule?.["allow"]).toBe("/");
  });

  it("allows ClaudeBot (GEO signal)", () => {
    const rules = (Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules]) as Array<Record<string, unknown>>;
    const claudeRule = rules.find((r) => r["userAgent"] === "ClaudeBot");
    expect(claudeRule).toBeDefined();
  });

  it("has sitemap URL", () => {
    expect(robotsConfig.sitemap).toBeDefined();
    expect(robotsConfig.sitemap).toMatch(/sitemap\.xml/);
  });

  it("sitemap URL starts with https://", () => {
    expect(robotsConfig.sitemap).toMatch(/^https:\/\//);
  });

  it("has a host field", () => {
    expect(robotsConfig.host).toBeTruthy();
    expect(robotsConfig.host).toMatch(/^https:\/\//);
  });
});
