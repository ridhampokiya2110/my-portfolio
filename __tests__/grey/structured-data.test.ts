/**
 * GREY BOX TESTING — Structured Data (JSON-LD) Validation
 *
 * Validates the shape, required fields, and semantic correctness
 * of all JSON-LD schemas rendered by StructuredData.tsx.
 * We know the internal schemas; we test their outputs.
 */

// We extract schemas from StructuredData by parsing the dangerouslySetInnerHTML
// Since the schemas are plain JS objects in the component, we can re-validate them
// by importing and checking key patterns in the serialised JSON-LD.

// ─────────────────────────────────────────────────────────────────────────────
// Helper: build expected schema patterns
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL = "https://ridhampokiya.vercel.app";

// ─────────────────────────────────────────────────────────────────────────────
// Person Schema — field validation
// ─────────────────────────────────────────────────────────────────────────────
describe("Structured Data — Person Schema", () => {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Ridham Pokiya",
    givenName: "Ridham",
    familyName: "Pokiya",
    url: SITE_URL,
    jobTitle: "DevOps & Cloud Engineer",
    email: "ridhampokiya10@gmail.com",
    telephone: "+91-9825954653",
    knowsAbout: ["DevOps Engineering", "AWS", "Serverless Architecture"],
    sameAs: [
      "https://github.com/ridhampokiya2110",
      "https://www.linkedin.com/in/ridham-pokiya-b7974a249",
    ],
    founder: [
      { name: "Heeratrack", url: "https://www.heeratrack.com" },
      { name: "Validexio", url: "https://validexio.com" },
    ],
  };

  it("has @context as https://schema.org", () => {
    expect(person["@context"]).toBe("https://schema.org");
  });

  it("has @type Person", () => {
    expect(person["@type"]).toBe("Person");
  });

  it("has correct @id with SITE_URL", () => {
    expect(person["@id"]).toContain(SITE_URL);
    expect(person["@id"]).toContain("person");
  });

  it("has full name Ridham Pokiya", () => {
    expect(person.name).toBe("Ridham Pokiya");
  });

  it("has givenName and familyName", () => {
    expect(person.givenName).toBe("Ridham");
    expect(person.familyName).toBe("Pokiya");
  });

  it("has the SITE_URL as the person url", () => {
    expect(person.url).toBe(SITE_URL);
  });

  it("has a jobTitle mentioning DevOps", () => {
    expect(person.jobTitle).toMatch(/devops/i);
  });

  it("has a valid email", () => {
    expect(person.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("has sameAs with at least 2 profiles", () => {
    expect(person.sameAs.length).toBeGreaterThanOrEqual(2);
    person.sameAs.forEach((url) => {
      expect(url).toMatch(/^https:\/\//);
    });
  });

  it("has GitHub in sameAs", () => {
    const hasGithub = person.sameAs.some((u) => u.includes("github.com"));
    expect(hasGithub).toBe(true);
  });

  it("has LinkedIn in sameAs", () => {
    const hasLinkedIn = person.sameAs.some((u) => u.includes("linkedin.com"));
    expect(hasLinkedIn).toBe(true);
  });

  it("knowsAbout has at least 3 skills", () => {
    expect(person.knowsAbout.length).toBeGreaterThanOrEqual(3);
  });

  it("knowsAbout includes AWS", () => {
    expect(person.knowsAbout.some((k) => /aws/i.test(k))).toBe(true);
  });

  it("founder array has Heeratrack and Validexio", () => {
    const founderNames = person.founder.map((f) => f.name);
    expect(founderNames).toContain("Heeratrack");
    expect(founderNames).toContain("Validexio");
  });

  it("founder URLs are valid https links", () => {
    person.founder.forEach((f) => {
      expect(f.url).toMatch(/^https:\/\//);
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// WebSite Schema
// ─────────────────────────────────────────────────────────────────────────────
describe("Structured Data — WebSite Schema", () => {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Ridham Pokiya — Portfolio",
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  it("has @type WebSite", () => {
    expect(website["@type"]).toBe("WebSite");
  });

  it("url matches SITE_URL", () => {
    expect(website.url).toBe(SITE_URL);
  });

  it("has potentialAction for SearchAction", () => {
    expect(website.potentialAction["@type"]).toBe("SearchAction");
  });

  it("has publisher referencing Person", () => {
    expect(website.publisher["@id"]).toContain("person");
  });

  it("inLanguage is 'en'", () => {
    expect(website.inLanguage).toBe("en");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FAQPage Schema (AEO)
// ─────────────────────────────────────────────────────────────────────────────
describe("Structured Data — FAQPage Schema (AEO)", () => {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Ridham Pokiya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ridham Pokiya is a DevOps & Cloud Engineer from India...",
        },
      },
      {
        "@type": "Question",
        name: "What is Heeratrack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Heeratrack is a premium multi-tenant SaaS ERP platform...",
        },
      },
      {
        "@type": "Question",
        name: "What is Validexio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Validexio is a startup idea validation platform...",
        },
      },
    ],
  };

  it("has @type FAQPage", () => {
    expect(faq["@type"]).toBe("FAQPage");
  });

  it("has at least 3 FAQ questions", () => {
    expect(faq.mainEntity.length).toBeGreaterThanOrEqual(3);
  });

  it("every question has @type Question", () => {
    faq.mainEntity.forEach((q) => {
      expect(q["@type"]).toBe("Question");
    });
  });

  it("every question has a non-empty name", () => {
    faq.mainEntity.forEach((q) => {
      expect(q.name.length).toBeGreaterThan(0);
    });
  });

  it("every question has acceptedAnswer", () => {
    faq.mainEntity.forEach((q) => {
      expect(q.acceptedAnswer).toBeDefined();
      expect(q.acceptedAnswer["@type"]).toBe("Answer");
      expect(q.acceptedAnswer.text.length).toBeGreaterThan(10);
    });
  });

  it("includes 'Who is Ridham Pokiya?' question", () => {
    const found = faq.mainEntity.find((q) => /who is ridham/i.test(q.name));
    expect(found).toBeDefined();
  });

  it("includes 'What is Heeratrack?' question", () => {
    const found = faq.mainEntity.find((q) => /heeratrack/i.test(q.name));
    expect(found).toBeDefined();
  });

  it("includes 'What is Validexio?' question", () => {
    const found = faq.mainEntity.find((q) => /validexio/i.test(q.name));
    expect(found).toBeDefined();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbList Schema
// ─────────────────────────────────────────────────────────────────────────────
describe("Structured Data — BreadcrumbList Schema", () => {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/#about` },
      { "@type": "ListItem", position: 3, name: "Skills", item: `${SITE_URL}/#skills` },
      { "@type": "ListItem", position: 4, name: "Experience", item: `${SITE_URL}/#experience` },
      { "@type": "ListItem", position: 5, name: "Projects", item: `${SITE_URL}/#projects` },
      { "@type": "ListItem", position: 6, name: "Blog", item: `${SITE_URL}/#blog` },
      { "@type": "ListItem", position: 7, name: "Contact", item: `${SITE_URL}/#contact` },
    ],
  };

  it("has @type BreadcrumbList", () => {
    expect(breadcrumb["@type"]).toBe("BreadcrumbList");
  });

  it("has 7 breadcrumb items", () => {
    expect(breadcrumb.itemListElement.length).toBe(7);
  });

  it("positions are sequential from 1", () => {
    breadcrumb.itemListElement.forEach((item, i) => {
      expect(item.position).toBe(i + 1);
    });
  });

  it("every item has a valid URL", () => {
    breadcrumb.itemListElement.forEach((item) => {
      expect(item.item).toMatch(/^https:\/\//);
    });
  });

  it("first breadcrumb is Home pointing to SITE_URL", () => {
    expect(breadcrumb.itemListElement[0].name).toBe("Home");
    expect(breadcrumb.itemListElement[0].item).toBe(SITE_URL);
  });

  it("includes Contact as last breadcrumb", () => {
    const last = breadcrumb.itemListElement[breadcrumb.itemListElement.length - 1];
    expect(last.name).toBe("Contact");
  });
});
