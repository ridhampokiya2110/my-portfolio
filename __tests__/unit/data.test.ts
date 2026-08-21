/**
 * WHITE BOX TESTING — Unit Tests for data.ts
 *
 * Tests internal structure, shape, and validity of all exported
 * data constants. This verifies the internal logic of the data layer.
 */

import {
  personalInfo,
  stats,
  skills,
  experience,
  featuredProject,
  secondFeaturedProject,
  projects,
  featuredArticles,
  navLinks,
} from "../../app/lib/data";

// ─────────────────────────────────────────────────────────────────────────────
// personalInfo
// ─────────────────────────────────────────────────────────────────────────────
describe("personalInfo — white box unit tests", () => {
  it("has a non-empty name", () => {
    expect(personalInfo.name).toBeTruthy();
    expect(typeof personalInfo.name).toBe("string");
    expect(personalInfo.name.length).toBeGreaterThan(0);
  });

  it("contains 'Ridham' in the name", () => {
    expect(personalInfo.name).toMatch(/ridham/i);
  });

  it("has a valid email format", () => {
    expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("has a valid Indian phone number", () => {
    expect(personalInfo.phone).toMatch(/^\+91\s?\d{10}$/);
  });

  it("has role array with at least 3 items", () => {
    expect(Array.isArray(personalInfo.role)).toBe(true);
    expect(personalInfo.role.length).toBeGreaterThanOrEqual(3);
    personalInfo.role.forEach((r) => {
      expect(typeof r).toBe("string");
      expect(r.length).toBeGreaterThan(0);
    });
  });

  it("has a github URL starting with https://github.com", () => {
    expect(personalInfo.github).toMatch(/^https:\/\/github\.com\//);
  });

  it("has a linkedin URL starting with https://", () => {
    expect(personalInfo.linkedin).toMatch(/^https:\/\//);
  });

  it("has a resumeUrl ending with .pdf", () => {
    expect(personalInfo.resumeUrl).toMatch(/\.pdf$/);
  });

  it("has a profileImage path", () => {
    expect(personalInfo.profileImage).toBeTruthy();
  });

  it("has a bio with at least 50 characters", () => {
    expect(personalInfo.bio.length).toBeGreaterThan(50);
  });

  it("has an instagram URL", () => {
    expect(personalInfo.instagram).toMatch(/^https:\/\//);
  });

  it("has a whatsapp link", () => {
    expect(personalInfo.whatsapp).toMatch(/^https:\/\/wa\.me\//);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// stats
// ─────────────────────────────────────────────────────────────────────────────
describe("stats — white box unit tests", () => {
  it("has at least 3 stat items", () => {
    expect(stats.length).toBeGreaterThanOrEqual(3);
  });

  it("every stat has value, suffix, and label", () => {
    stats.forEach((s) => {
      expect(typeof s.value).toBe("number");
      expect(s.value).toBeGreaterThan(0);
      expect(typeof s.suffix).toBe("string");
      expect(typeof s.label).toBe("string");
      expect(s.label.length).toBeGreaterThan(0);
    });
  });

  it("has an internships stat with value >= 1", () => {
    const internships = stats.find((s) => /internship/i.test(s.label));
    expect(internships).toBeDefined();
    expect(internships!.value).toBeGreaterThanOrEqual(1);
  });

  it("has a certificates stat with value >= 10", () => {
    const certs = stats.find((s) => /certificate/i.test(s.label));
    expect(certs).toBeDefined();
    expect(certs!.value).toBeGreaterThanOrEqual(10);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// skills
// ─────────────────────────────────────────────────────────────────────────────
describe("skills — white box unit tests", () => {
  it("has at least 4 skill categories", () => {
    expect(skills.length).toBeGreaterThanOrEqual(4);
  });

  it("every category has name, color, and items array", () => {
    skills.forEach((cat) => {
      expect(typeof cat.category).toBe("string");
      expect(cat.category.length).toBeGreaterThan(0);
      expect(typeof cat.color).toBe("string");
      expect(cat.color).toMatch(/^#[0-9a-fA-F]{3,6}$/);
      expect(Array.isArray(cat.items)).toBe(true);
      expect(cat.items.length).toBeGreaterThan(0);
    });
  });

  it("every skill item has a name and level between 1–5", () => {
    skills.forEach((cat) => {
      cat.items.forEach((item) => {
        expect(typeof item.name).toBe("string");
        expect(item.name.length).toBeGreaterThan(0);
        expect(item.level).toBeGreaterThanOrEqual(1);
        expect(item.level).toBeLessThanOrEqual(5);
      });
    });
  });

  it("includes 'Cloud' as a category", () => {
    const cloud = skills.find((c) => c.category === "Cloud");
    expect(cloud).toBeDefined();
  });

  it("includes 'DevOps' as a category", () => {
    const devops = skills.find((c) => c.category === "DevOps");
    expect(devops).toBeDefined();
  });

  it("Cloud category includes AWS", () => {
    const cloud = skills.find((c) => c.category === "Cloud");
    const aws = cloud?.items.find((i) => i.name === "AWS");
    expect(aws).toBeDefined();
    expect(aws!.level).toBe(5);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// experience
// ─────────────────────────────────────────────────────────────────────────────
describe("experience — white box unit tests", () => {
  it("has at least 3 experience entries", () => {
    expect(experience.length).toBeGreaterThanOrEqual(3);
  });

  it("every entry has role, org, date, type, and desc", () => {
    experience.forEach((e) => {
      expect(typeof e.role).toBe("string");
      expect(e.role.length).toBeGreaterThan(0);
      expect(typeof e.org).toBe("string");
      expect(e.org.length).toBeGreaterThan(0);
      expect(typeof e.date).toBe("string");
      expect(typeof e.type).toBe("string");
      expect(typeof e.desc).toBe("string");
      expect(e.desc.length).toBeGreaterThan(20);
    });
  });

  it("types are only internship or role", () => {
    const validTypes = ["internship", "role"];
    experience.forEach((e) => {
      expect(validTypes).toContain(e.type);
    });
  });

  it("includes DevOps internship entry", () => {
    const devopsIntern = experience.find((e) =>
      /devops/i.test(e.role) && e.type === "internship"
    );
    expect(devopsIntern).toBeDefined();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// featuredProject
// ─────────────────────────────────────────────────────────────────────────────
describe("featuredProject — white box unit tests", () => {
  it("has title containing Heeratrack", () => {
    expect(featuredProject.title).toMatch(/heeratrack/i);
  });

  it("has a valid link starting with https://", () => {
    expect(featuredProject.link).toMatch(/^https:\/\//);
  });

  it("has tech array with at least 3 items", () => {
    expect(Array.isArray(featuredProject.tech)).toBe(true);
    expect(featuredProject.tech.length).toBeGreaterThanOrEqual(3);
  });

  it("has a non-empty description", () => {
    expect(featuredProject.desc.length).toBeGreaterThan(50);
  });

  it("has accent color in hex format", () => {
    expect(featuredProject.accent).toMatch(/^#[0-9a-fA-F]{3,6}$/);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// secondFeaturedProject
// ─────────────────────────────────────────────────────────────────────────────
describe("secondFeaturedProject (Validexio) — white box unit tests", () => {
  it("has title containing Validexio", () => {
    expect(secondFeaturedProject.title).toMatch(/validexio/i);
  });

  it("has a valid https link", () => {
    expect(secondFeaturedProject.link).toMatch(/^https:\/\//);
  });

  it("has at least 5 tech items", () => {
    expect(secondFeaturedProject.tech.length).toBeGreaterThanOrEqual(5);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// projects
// ─────────────────────────────────────────────────────────────────────────────
describe("projects — white box unit tests", () => {
  it("has at least 3 additional projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it("every project has title, tech, desc, and link", () => {
    projects.forEach((p) => {
      expect(typeof p.title).toBe("string");
      expect(p.title.length).toBeGreaterThan(0);
      expect(Array.isArray(p.tech)).toBe(true);
      expect(p.tech.length).toBeGreaterThan(0);
      expect(typeof p.desc).toBe("string");
      expect(p.desc.length).toBeGreaterThan(10);
      expect(p.link).toMatch(/^https:\/\//);
    });
  });

  it("includes CloudLens project", () => {
    const cloudlens = projects.find((p) => /cloudlens/i.test(p.title));
    expect(cloudlens).toBeDefined();
  });

  it("includes CloudFront in at least one project", () => {
    const cfProject = projects.find((p) =>
      p.tech.some((t) => /cloudfront/i.test(t))
    );
    expect(cfProject).toBeDefined();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// featuredArticles
// ─────────────────────────────────────────────────────────────────────────────
describe("featuredArticles — white box unit tests", () => {
  it("has at least 4 articles", () => {
    expect(featuredArticles.length).toBeGreaterThanOrEqual(4);
  });

  it("every article has id, title, description, url, and platform", () => {
    featuredArticles.forEach((a) => {
      expect(typeof a.id).toBe("number");
      expect(a.id).toBeGreaterThan(0);
      expect(typeof a.title).toBe("string");
      expect(a.title.length).toBeGreaterThan(0);
      expect(typeof a.description).toBe("string");
      expect(a.url).toMatch(/^https:\/\//);
      expect(typeof a.platform).toBe("string");
    });
  });

  it("reading_time_minutes is a positive number", () => {
    featuredArticles.forEach((a) => {
      expect(a.reading_time_minutes).toBeGreaterThan(0);
    });
  });

  it("tag_list is always an array", () => {
    featuredArticles.forEach((a) => {
      expect(Array.isArray(a.tag_list)).toBe(true);
    });
  });

  it("IDs are unique", () => {
    const ids = featuredArticles.map((a) => a.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// navLinks
// ─────────────────────────────────────────────────────────────────────────────
describe("navLinks — white box unit tests", () => {
  it("has at least 5 nav links", () => {
    expect(navLinks.length).toBeGreaterThanOrEqual(5);
  });

  it("every link has a label and href starting with #", () => {
    navLinks.forEach((link) => {
      expect(typeof link.label).toBe("string");
      expect(link.label.length).toBeGreaterThan(0);
      expect(link.href).toMatch(/^#/);
    });
  });

  it("has a contact link", () => {
    const contact = navLinks.find((l) => /contact/i.test(l.label));
    expect(contact).toBeDefined();
  });

  it("has a projects link", () => {
    const projects = navLinks.find((l) => /projects/i.test(l.label));
    expect(projects).toBeDefined();
  });

  it("labels are unique", () => {
    const labels = navLinks.map((l) => l.label);
    const unique = new Set(labels);
    expect(unique.size).toBe(labels.length);
  });

  it("hrefs are unique", () => {
    const hrefs = navLinks.map((l) => l.href);
    const unique = new Set(hrefs);
    expect(unique.size).toBe(hrefs.length);
  });
});
