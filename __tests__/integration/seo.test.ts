/**
 * WHITE BOX / INTEGRATION TESTS — SEO Metadata Validation
 *
 * Validates that layout.tsx exports all mandatory SEO/AEO/GEO metadata fields
 * with correct types and non-empty values.
 * Also validates the StructuredData schemas structure.
 */

import { metadata } from "../../app/layout";

// ─────────────────────────────────────────────────────────────────────────────
// Core Metadata
// ─────────────────────────────────────────────────────────────────────────────
describe("SEO Metadata — core fields", () => {
  it("exports a metadata object", () => {
    expect(metadata).toBeDefined();
    expect(typeof metadata).toBe("object");
  });

  it("has a non-empty title", () => {
    const title = metadata.title;
    if (typeof title === "string") {
      expect(title.length).toBeGreaterThan(10);
    } else if (title && typeof title === "object" && "default" in title) {
      expect((title as { default: string }).default.length).toBeGreaterThan(10);
    } else {
      fail("title should be a string or object with default");
    }
  });

  it("title contains 'Ridham Pokiya'", () => {
    const titleStr = JSON.stringify(metadata.title);
    expect(titleStr).toMatch(/ridham pokiya/i);
  });

  it("has a description with at least 100 characters", () => {
    expect(typeof metadata.description).toBe("string");
    expect((metadata.description as string).length).toBeGreaterThan(100);
  });

  it("description mentions DevOps and Cloud", () => {
    expect(metadata.description).toMatch(/devops/i);
    expect(metadata.description).toMatch(/cloud/i);
  });

  it("has at least 50 keywords", () => {
    const keywords = metadata.keywords as string[];
    expect(Array.isArray(keywords)).toBe(true);
    expect(keywords.length).toBeGreaterThanOrEqual(50);
  });

  it("keywords include 'Ridham Pokiya'", () => {
    const keywords = metadata.keywords as string[];
    expect(keywords).toContain("Ridham Pokiya");
  });

  it("keywords include 'DevOps engineer India'", () => {
    const keywords = metadata.keywords as string[];
    expect(keywords).toContain("DevOps engineer India");
  });

  it("keywords include 'AWS cloud engineer India'", () => {
    const keywords = metadata.keywords as string[];
    expect(keywords).toContain("AWS cloud engineer India");
  });

  it("keywords include 'Heeratrack'", () => {
    const keywords = metadata.keywords as string[];
    const hasHeeratrack = keywords.some((k) => /heeratrack/i.test(k));
    expect(hasHeeratrack).toBe(true);
  });

  it("keywords include 'Validexio'", () => {
    const keywords = metadata.keywords as string[];
    const hasValidexio = keywords.some((k) => /validexio/i.test(k));
    expect(hasValidexio).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Open Graph
// ─────────────────────────────────────────────────────────────────────────────
describe("SEO Metadata — Open Graph", () => {
  it("has openGraph object", () => {
    expect(metadata.openGraph).toBeDefined();
  });

  it("openGraph.type is 'profile'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((metadata.openGraph as any)?.type).toBe("profile");
  });

  it("openGraph has a url", () => {
    expect(metadata.openGraph?.url).toBeTruthy();
  });

  it("openGraph has images array with at least 1 image", () => {
    const ogImages = metadata.openGraph?.images;
    expect(Array.isArray(ogImages)).toBe(true);
    expect((ogImages as unknown[]).length).toBeGreaterThanOrEqual(1);
  });

  it("openGraph title contains Ridham Pokiya", () => {
    const ogTitle = JSON.stringify(metadata.openGraph?.title ?? "");
    expect(ogTitle).toMatch(/ridham pokiya/i);
  });

  it("openGraph locale is set", () => {
    expect(metadata.openGraph?.locale).toBeTruthy();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Twitter Card
// ─────────────────────────────────────────────────────────────────────────────
describe("SEO Metadata — Twitter Card", () => {
  it("has twitter object", () => {
    expect(metadata.twitter).toBeDefined();
  });

  it("twitter card is 'summary_large_image'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((metadata.twitter as any)?.card).toBe("summary_large_image");
  });

  it("twitter has a title", () => {
    expect(metadata.twitter?.title).toBeTruthy();
  });

  it("twitter has a description", () => {
    expect(metadata.twitter?.description).toBeTruthy();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Robots
// ─────────────────────────────────────────────────────────────────────────────
describe("SEO Metadata — Robots", () => {
  it("has robots config", () => {
    expect(metadata.robots).toBeDefined();
  });

  it("robots index is true", () => {
    const robots = metadata.robots as Record<string, unknown>;
    expect(robots.index).toBe(true);
  });

  it("robots follow is true", () => {
    const robots = metadata.robots as Record<string, unknown>;
    expect(robots.follow).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Authors & Creator
// ─────────────────────────────────────────────────────────────────────────────
describe("SEO Metadata — Authorship", () => {
  it("has authors array", () => {
    expect(Array.isArray(metadata.authors)).toBe(true);
    expect((metadata.authors as unknown[]).length).toBeGreaterThan(0);
  });

  it("first author is Ridham Pokiya", () => {
    const authors = metadata.authors as Array<{ name: string }>;
    expect(authors[0].name).toMatch(/ridham pokiya/i);
  });

  it("has creator field", () => {
    expect(metadata.creator).toMatch(/ridham pokiya/i);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// AEO / GEO Signals
// ─────────────────────────────────────────────────────────────────────────────
describe("AEO / GEO Metadata — AI engine signals", () => {
  it("has 'other' metadata for GEO signals", () => {
    expect(metadata.other).toBeDefined();
  });

  it("other.ai:profile-type is 'person'", () => {
    const other = metadata.other as Record<string, string>;
    expect(other["ai:profile-type"]).toBe("person");
  });

  it("other.ai:expertise mentions DevOps", () => {
    const other = metadata.other as Record<string, string>;
    expect(other["ai:expertise"]).toMatch(/devops/i);
  });

  it("other.ai:products mentions Heeratrack and Validexio", () => {
    const other = metadata.other as Record<string, string>;
    expect(other["ai:products"]).toMatch(/heeratrack/i);
    expect(other["ai:products"]).toMatch(/validexio/i);
  });

  it("other has speakable description", () => {
    const other = metadata.other as Record<string, string>;
    expect(other["speakable:description"]).toBeTruthy();
    expect(other["speakable:description"].length).toBeGreaterThan(50);
  });
});
