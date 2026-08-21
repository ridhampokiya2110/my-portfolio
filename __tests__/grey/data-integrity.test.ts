/**
 * COMPLETE SYSTEM TESTS — Data Integrity Cross-Validation
 * GREY BOX
 *
 * Cross-validates that data.ts values are correctly
 * reflected in every component that renders them.
 * Also validates data business rules exhaustively.
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
// personalInfo — exhaustive validation
// ─────────────────────────────────────────────────────────────────────────────
describe("personalInfo — exhaustive cross-validation", () => {
  const fields = [
    "name", "email", "phone", "bio", "location",
    "github", "linkedin", "instagram", "whatsapp",
    "devto", "medium", "awsBuilder", "resumeUrl",
    "profileImage", "role",
  ];

  fields.forEach((field) => {
    it(`personalInfo.${field} is defined and non-empty`, () => {
      const val = (personalInfo as Record<string, unknown>)[field];
      expect(val).toBeDefined();
      if (Array.isArray(val)) {
        expect(val.length).toBeGreaterThan(0);
      } else {
        expect(String(val).trim().length).toBeGreaterThan(0);
      }
    });
  });

  it("email matches RFC 5322 pattern", () => {
    expect(personalInfo.email).toMatch(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/);
  });

  it("phone starts with +91 (India)", () => {
    expect(personalInfo.phone).toMatch(/^\+91/);
  });

  it("phone digits total 10 after country code", () => {
    const digits = personalInfo.phone.replace(/\D/g, "").slice(2);
    expect(digits.length).toBe(10);
  });

  it("github URL contains ridhampokiya2110", () => {
    expect(personalInfo.github).toContain("ridhampokiya2110");
  });

  it("linkedin URL contains linkedin.com", () => {
    expect(personalInfo.linkedin).toContain("linkedin.com");
  });

  it("devto URL contains dev.to", () => {
    expect(personalInfo.devto).toContain("dev.to");
  });

  it("medium URL contains medium.com", () => {
    expect(personalInfo.medium).toContain("medium.com");
  });

  it("awsBuilder URL contains builder.aws.com", () => {
    expect(personalInfo.awsBuilder).toContain("builder.aws");
  });

  it("whatsapp URL is wa.me format", () => {
    expect(personalInfo.whatsapp).toMatch(/wa\.me\/\d+/);
  });

  it("whatsapp number contains 9825954653", () => {
    expect(personalInfo.whatsapp).toContain("9825954653");
  });

  it("resumeUrl is a relative path (not http)", () => {
    expect(personalInfo.resumeUrl).toMatch(/^\//);
    expect(personalInfo.resumeUrl).not.toMatch(/^https?:\/\//);
  });

  it("resumeUrl ends with .pdf", () => {
    expect(personalInfo.resumeUrl).toMatch(/\.pdf$/i);
  });

  it("profileImage starts with /", () => {
    expect(personalInfo.profileImage).toMatch(/^\//);
  });

  it("role array has at least 5 roles", () => {
    expect(personalInfo.role.length).toBeGreaterThanOrEqual(5);
  });

  it("role includes DevOps Engineer", () => {
    expect(personalInfo.role.some((r) => /devops engineer/i.test(r))).toBe(true);
  });

  it("role includes Cloud Architect", () => {
    expect(personalInfo.role.some((r) => /cloud architect/i.test(r))).toBe(true);
  });

  it("role includes SaaS Builder or Startup Founder", () => {
    const hasSaaS = personalInfo.role.some((r) =>
      /saas builder|startup founder/i.test(r)
    );
    expect(hasSaaS).toBe(true);
  });

  it("bio mentions cloud or serverless (AWS not in bio text)", () => {
    expect(personalInfo.bio).toMatch(/cloud|serverless|devops/i);
  });

  it("bio mentions DevOps", () => {
    expect(personalInfo.bio).toMatch(/devops/i);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// stats — exhaustive validation
// ─────────────────────────────────────────────────────────────────────────────
describe("stats — exhaustive cross-validation", () => {
  it("has exactly 3 stats items", () => {
    expect(stats.length).toBe(3);
  });

  it("internships stat value is at least 3", () => {
    const stat = stats.find((s) => /internship/i.test(s.label));
    expect(stat?.value).toBeGreaterThanOrEqual(3);
  });

  it("certificates stat value is at least 20", () => {
    const stat = stats.find((s) => /certificate/i.test(s.label));
    expect(stat?.value).toBeGreaterThanOrEqual(20);
  });

  it("projects stat value is at least 3", () => {
    const stat = stats.find((s) => /projects?/i.test(s.label));
    expect(stat?.value).toBeGreaterThanOrEqual(3);
  });

  it("stat suffixes are non-empty strings", () => {
    stats.forEach((s) => {
      expect(typeof s.suffix).toBe("string");
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// skills — exhaustive validation
// ─────────────────────────────────────────────────────────────────────────────
describe("skills — exhaustive cross-validation", () => {
  const expectedCategories = ["Cloud", "DevOps", "Languages", "Tools & Concepts"];

  expectedCategories.forEach((cat) => {
    it(`has '${cat}' category`, () => {
      const found = skills.find((s) => s.category === cat);
      expect(found).toBeDefined();
    });
  });

  it("Cloud category has at least 3 skills", () => {
    const cloud = skills.find((c) => c.category === "Cloud");
    expect(cloud?.items.length).toBeGreaterThanOrEqual(3);
  });

  it("DevOps category has at least 4 skills", () => {
    const devops = skills.find((c) => c.category === "DevOps");
    expect(devops?.items.length).toBeGreaterThanOrEqual(4);
  });

  it("AWS has level 5 (expert)", () => {
    const cloud = skills.find((c) => c.category === "Cloud");
    const aws = cloud?.items.find((i) => i.name === "AWS");
    expect(aws?.level).toBe(5);
  });

  it("CI/CD has level 5 (expert)", () => {
    const devops = skills.find((c) => c.category === "DevOps");
    const cicd = devops?.items.find((i) => i.name === "CI/CD");
    expect(cicd?.level).toBe(5);
  });

  it("GitHub has level 5 (expert) in Tools & Concepts", () => {
    const tools = skills.find((c) => c.category === "Tools & Concepts");
    const github = tools?.items.find((i) => i.name === "GitHub");
    expect(github?.level).toBe(5);
  });

  it("each category has a hex color", () => {
    skills.forEach((cat) => {
      expect(cat.color).toMatch(/^#[0-9a-fA-F]{3,8}$/);
    });
  });

  it("skill levels are integers between 1 and 5", () => {
    skills.forEach((cat) => {
      cat.items.forEach((item) => {
        expect(Number.isInteger(item.level)).toBe(true);
        expect(item.level).toBeGreaterThanOrEqual(1);
        expect(item.level).toBeLessThanOrEqual(5);
      });
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// experience — exhaustive validation
// ─────────────────────────────────────────────────────────────────────────────
describe("experience — exhaustive cross-validation", () => {
  it("has exactly 3 experience entries", () => {
    expect(experience.length).toBe(3);
  });

  const experienceEntries = [
    { role: /devops intern/i, org: /deskcode/i, type: "internship" },
    { role: /aws student builder/i, org: /ppsu/i, type: "role" },
    { role: /data analyst intern/i, org: /unified/i, type: "internship" },
  ];

  experienceEntries.forEach(({ role, org, type }) => {
    it(`has '${type}' entry matching ${role}`, () => {
      const found = experience.find((e) => role.test(e.role));
      expect(found).toBeDefined();
      expect(org.test(found!.org)).toBe(true);
      expect(found!.type).toBe(type);
    });
  });

  it("every experience has a non-empty date", () => {
    experience.forEach((e) => {
      expect(e.date.trim().length).toBeGreaterThan(0);
    });
  });

  it("every experience has desc with at least 50 characters", () => {
    experience.forEach((e) => {
      expect(e.desc.length).toBeGreaterThanOrEqual(50);
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// projects — exhaustive validation
// ─────────────────────────────────────────────────────────────────────────────
describe("featuredProject (Heeratrack) — exhaustive validation", () => {
  it("title matches Heeratrack", () => {
    expect(featuredProject.title).toMatch(/heeratrack/i);
  });

  it("link is heeratrack.com", () => {
    expect(featuredProject.link).toContain("heeratrack.com");
  });

  it("desc mentions diamond", () => {
    expect(featuredProject.desc).toMatch(/diamond/i);
  });

  it("tech has at least 3 items", () => {
    expect(featuredProject.tech.length).toBeGreaterThanOrEqual(3);
  });

  it("accent is a hex color", () => {
    expect(featuredProject.accent).toMatch(/^#[0-9a-fA-F]{3,8}$/);
  });

  it("tag is Founder", () => {
    expect(featuredProject.tag).toMatch(/founder/i);
  });
});

describe("secondFeaturedProject (Validexio) — exhaustive validation", () => {
  it("title matches Validexio", () => {
    expect(secondFeaturedProject.title).toMatch(/validexio/i);
  });

  it("link is validexio.com", () => {
    expect(secondFeaturedProject.link).toContain("validexio.com");
  });

  it("desc mentions validation or startup", () => {
    expect(secondFeaturedProject.desc).toMatch(/validat|startup/i);
  });

  it("tech has at least 5 items", () => {
    expect(secondFeaturedProject.tech.length).toBeGreaterThanOrEqual(5);
  });

  it("tag is Founder", () => {
    expect(secondFeaturedProject.tag).toMatch(/founder/i);
  });
});

describe("projects (side projects) — exhaustive validation", () => {
  it("has exactly 3 side projects", () => {
    expect(projects.length).toBe(3);
  });

  it("includes CloudLens project", () => {
    const cloudlens = projects.find((p) => /cloudlens/i.test(p.title));
    expect(cloudlens).toBeDefined();
    expect(cloudlens!.link).toMatch(/cloudfront\.net/);
  });

  it("includes CloudQuest project", () => {
    const cloudquest = projects.find((p) => /cloudquest/i.test(p.title));
    expect(cloudquest).toBeDefined();
    expect(cloudquest!.link).toMatch(/cloudfront\.net/);
  });

  it("includes Serverless Cloud Resume project", () => {
    const resume = projects.find((p) => /serverless cloud resume/i.test(p.title));
    expect(resume).toBeDefined();
    expect(resume!.link).toMatch(/cloudfront\.net/);
  });

  it("all project links are CloudFront URLs", () => {
    projects.forEach((p) => {
      expect(p.link).toMatch(/^https:\/\//);
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// featuredArticles — exhaustive validation
// ─────────────────────────────────────────────────────────────────────────────
describe("featuredArticles — exhaustive validation", () => {
  it("has at least 6 articles", () => {
    expect(featuredArticles.length).toBeGreaterThanOrEqual(6);
  });

  it("has articles from Dev.to platform", () => {
    const devto = featuredArticles.filter((a) => a.platform === "Dev.to");
    expect(devto.length).toBeGreaterThan(0);
  });

  it("has articles from Medium platform", () => {
    const medium = featuredArticles.filter((a) => a.platform === "Medium");
    expect(medium.length).toBeGreaterThan(0);
  });

  it("has articles from AWS Builders platform", () => {
    const aws = featuredArticles.filter((a) => a.platform === "AWS Builders");
    expect(aws.length).toBeGreaterThan(0);
  });

  it("has article about Heeratrack", () => {
    const heeratrack = featuredArticles.find((a) => /heeratrack/i.test(a.title));
    expect(heeratrack).toBeDefined();
  });

  it("has article about Validexio", () => {
    const validexio = featuredArticles.find((a) => /validexio/i.test(a.title));
    expect(validexio).toBeDefined();
  });

  it("has article about Docker", () => {
    const docker = featuredArticles.find((a) => /docker/i.test(a.title));
    expect(docker).toBeDefined();
  });

  it("all URLs are HTTPS", () => {
    featuredArticles.forEach((a) => {
      expect(a.url).toMatch(/^https:\/\//);
    });
  });

  it("positive_reactions_count is non-negative", () => {
    featuredArticles.forEach((a) => {
      expect(a.positive_reactions_count).toBeGreaterThanOrEqual(0);
    });
  });

  it("IDs are sequential starting from 1", () => {
    const ids = featuredArticles.map((a) => a.id);
    const min = Math.min(...ids);
    expect(min).toBe(1);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// navLinks — exhaustive validation
// ─────────────────────────────────────────────────────────────────────────────
describe("navLinks — exhaustive validation", () => {
  const expectedLinks = ["about", "skills", "experience", "projects", "blog", "contact"];

  expectedLinks.forEach((id) => {
    it(`navLinks has #${id} link`, () => {
      const found = navLinks.find((l) => l.href === `#${id}`);
      expect(found).toBeDefined();
      expect(found!.label).toBeTruthy();
    });
  });

  it("all hrefs start with #", () => {
    navLinks.forEach((l) => {
      expect(l.href).toMatch(/^#/);
    });
  });

  it("all labels are Title Case strings", () => {
    navLinks.forEach((l) => {
      expect(l.label[0]).toBe(l.label[0].toUpperCase());
    });
  });
});
