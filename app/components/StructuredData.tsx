/**
 * StructuredData.tsx
 *
 * Injects all JSON-LD schemas for:
 *   SEO  — Person, WebSite, ProfilePage, BreadcrumbList, ItemList
 *   AEO  — FAQPage (Answer Engine Optimisation / featured snippets)
 *   GEO  — rich entity signals for LLM / Generative AI search engines
 *
 * Rendered as a Server Component so it is always present in the initial HTML.
 */

const SITE_URL = "https://ridhampokiya.vercel.app";

// ─────────────────────────────────────────────────────────────────────────────
// 1. Person Schema  (SEO + GEO entity)
// ─────────────────────────────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Ridham Pokiya",
  givenName: "Ridham",
  familyName: "Pokiya",
  url: SITE_URL,
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/profile.jpeg`,
    width: 400,
    height: 400,
  },
  jobTitle: "DevOps & Cloud Engineer",
  description:
    "Ridham Pokiya is a DevOps & Cloud Engineer from India specialising in AWS serverless architectures, automated CI/CD pipelines, Docker, Kubernetes, Terraform, SaaS products, and ERP systems. He is the founder of Heeratrack (Diamond ERP SaaS) and Validexio (Startup Validation Platform).",
  nationality: {
    "@type": "Country",
    name: "India",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Gujarat",
  },
  knowsAbout: [
    "DevOps Engineering",
    "Cloud Architecture",
    "AWS",
    "Amazon Web Services",
    "Serverless Architecture",
    "CI/CD Pipelines",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Infrastructure as Code",
    "GitHub Actions",
    "Jenkins",
    "Python",
    "SQL",
    "Bash",
    "Java",
    "React",
    "Node.js",
    "SaaS Development",
    "ERP Systems",
    "Startup Founding",
    "Project Management",
    "Cloud Cost Optimisation",
    "IAM Security",
    "AWS Lambda",
    "AWS S3",
    "AWS CloudFront",
    "AWS DynamoDB",
    "AWS API Gateway",
    "AWS Rekognition",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "DevOps Engineer",
    occupationalCategory: "15-1244.00",
    skills:
      "AWS, Cloud Architecture, CI/CD, Docker, Kubernetes, Terraform, Python, SaaS",
  },
  sameAs: [
    "https://github.com/ridhampokiya2110",
    "https://www.linkedin.com/in/ridham-pokiya-b7974a249",
    "https://dev.to/ridhampokiya2110",
    "https://medium.com/@ridhampokiya10",
    "https://www.instagram.com/___r._.p___",
    "https://builder.aws.com/community/@ridhampokiya10?tab=badges",
  ],
  email: "ridhampokiya10@gmail.com",
  telephone: "+91-9825954653",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Parul University (PPSU)",
    url: "https://paruluniversity.ac.in",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Gujarat",
    },
  },
  founder: [
    {
      "@type": "Organization",
      name: "Heeratrack",
      url: "https://www.heeratrack.com",
      description:
        "A premium Diamond Business Management and ERP SaaS platform for diamond merchants. Manages workers, salaries, chalans, production, and stock in real-time.",
    },
    {
      "@type": "Organization",
      name: "Validexio",
      url: "https://validexio.com",
      description:
        "A real-time startup idea validation platform that provides live competitor data, market sizing, and actionable insights for founders.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. WebSite Schema  (SEO — enables sitelinks search box)
// ─────────────────────────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Ridham Pokiya — Portfolio",
  description:
    "Personal portfolio of Ridham Pokiya, DevOps & Cloud Engineer and SaaS Founder from India.",
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

// ─────────────────────────────────────────────────────────────────────────────
// 3. ProfilePage Schema  (SEO + AEO)
// ─────────────────────────────────────────────────────────────────────────────
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Ridham Pokiya — DevOps & Cloud Engineer Portfolio",
  description:
    "The professional portfolio of Ridham Pokiya — DevOps Engineer, Cloud Architect, SaaS Founder (Heeratrack, Validexio), and AWS Student Builder.",
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: { "@id": `${SITE_URL}/#person` },
  breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. BreadcrumbList  (SEO navigation signals)
// ─────────────────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Skills",
      item: `${SITE_URL}/#skills`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Experience",
      item: `${SITE_URL}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Projects",
      item: `${SITE_URL}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Blog",
      item: `${SITE_URL}/#blog`,
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Contact",
      item: `${SITE_URL}/#contact`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. ItemList — Projects  (SEO + GEO entity signals)
// ─────────────────────────────────────────────────────────────────────────────
const projectsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ridham Pokiya — Featured Projects",
  description:
    "A list of cloud engineering, SaaS, and serverless projects built by Ridham Pokiya.",
  url: `${SITE_URL}/#projects`,
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Heeratrack: Diamond Management ERP",
        url: "https://www.heeratrack.com",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "A premium multi-tenant SaaS ERP platform for diamond merchants. Manages workers, salaries, chalans, production, and real-time stock. Built with SaaS, ERP, and Web App technologies.",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords:
          "diamond ERP, diamond management software, SaaS, B2B, multi-tenant",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Validexio: Startup Validation Platform",
        url: "https://validexio.com",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "A real-time startup idea validation platform replacing stale market research PDFs with live competitor data, market sizing, and actionable insights for founders.",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords:
          "startup validation, market research, competitor analysis, AI, SaaS",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "CloudLens: AI Image Auditor",
        url: "https://d6rq0nk83y8qw.cloudfront.net/",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        description:
          "Event-driven serverless AWS application for automated AI image analysis using AWS Lambda, Rekognition, and S3.",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: "AWS Lambda, Rekognition, S3, serverless, AI image analysis",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "CloudQuest: Serverless Trivia Game",
        url: "https://d3s7gaidpnlw9m.cloudfront.net/",
        applicationCategory: "GameApplication",
        operatingSystem: "Web",
        description:
          "Serverless quiz platform with automated CI/CD deployment and real-time scoring using AWS API Gateway, DynamoDB, and Lambda.",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: "serverless, AWS DynamoDB, Lambda, CI/CD, real-time quiz",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "Serverless Cloud Resume API",
        url: "https://dmtfynvyb5ngl.cloudfront.net/",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        description:
          "High-performance hosted resume with real-time visitor counter and serverless backend using CloudFront, S3, and API Gateway.",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: "cloud resume challenge, AWS CloudFront, S3, API Gateway",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. FAQPage Schema  (AEO — Answer Engine Optimisation)
//    Targets Google's "People also ask" and AI answer engines
// ─────────────────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Ridham Pokiya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ridham Pokiya is a DevOps & Cloud Engineer from India who specialises in AWS serverless architectures, CI/CD pipelines, Docker, Kubernetes, and Terraform. He is the founder of Heeratrack (a Diamond ERP SaaS) and Validexio (a startup validation platform), and is an active AWS Student Builder at PPSU.",
      },
    },
    {
      "@type": "Question",
      name: "What is Heeratrack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heeratrack is a premium multi-tenant SaaS ERP platform built by Ridham Pokiya for diamond merchants and manufacturers. It manages workers, salaries, chalans (invoices), real-time production, and stock tracking, helping diamond factories modernise and digitise their operations.",
      },
    },
    {
      "@type": "Question",
      name: "What is Validexio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Validexio is a startup idea validation platform founded by Ridham Pokiya that replaces stale market research PDFs with real-time competitor data, live market sizing, and actionable insights. It is built with React, Node.js, PostgreSQL, Stripe, and AWS, and is designed to help founders validate business ideas with real signals instead of guesswork.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Ridham Pokiya use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ridham Pokiya is proficient in AWS (Lambda, S3, CloudFront, DynamoDB, API Gateway, IAM, Rekognition), Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Python, SQL, Bash, Java, React, Node.js, PostgreSQL, Stripe, and Next.js. He specialises in DevOps, cloud-native development, and SaaS architecture.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ridham Pokiya open to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Ridham Pokiya is currently open to DevOps, Cloud Engineering, and SaaS engineering opportunities. You can contact him at ridhampokiya10@gmail.com or +91 9825954653, or connect on LinkedIn at linkedin.com/in/ridham-pokiya-b7974a249.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications does Ridham Pokiya hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ridham Pokiya holds 20+ technical certifications including AWS certifications, cloud engineering credentials, and DevOps-related achievements. His certification portfolio is available on his personal portfolio website and LinkedIn profile.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ridham Pokiya's experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ridham Pokiya has completed 3+ internships: a DevOps internship at Deskcode Solution Pvt Ltd (where he built production CI/CD pipelines), a Data Analyst internship at Unified Data Analysis (working on Netflix and PlayStore datasets), and an active role as a Core Member of AWS Student Builder Groups at PPSU leading serverless architecture workshops.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Ridham Pokiya located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ridham Pokiya is based in India (Gujarat region). He is open to remote work opportunities globally in DevOps, Cloud Engineering, and SaaS roles.",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. ItemList — Blog Articles  (SEO content entity signals)
// ─────────────────────────────────────────────────────────────────────────────
const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ridham Pokiya — Blog Articles",
  description:
    "Technical blog articles on DevOps, AWS, SaaS, Docker, and startup building by Ridham Pokiya.",
  url: `${SITE_URL}/#blog`,
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "BlogPosting",
        headline: "Why I Built Validexio: A Founder's Mission to End Armchair Entrepreneurship",
        url: "https://dev.to/ridhampokiya2110",
        author: { "@id": `${SITE_URL}/#person` },
        keywords: "startup, mission, Validexio, founder",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "BlogPosting",
        headline: "Building Heeratrack: Revolutionizing B2B SaaS for the Diamond Industry",
        url: "https://medium.com/@ridhampokiya10/introducing-heeratrack-modernizing-the-diamond-industrys-backbone-5b9ebf617e9c",
        author: { "@id": `${SITE_URL}/#person` },
        keywords: "Heeratrack, SaaS, ERP, B2B, diamond industry",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "BlogPosting",
        headline: "Event-Driven Architecture: Building a Serverless AI Image Auditor on AWS",
        url: "https://dev.to/ridhampokiya2110",
        author: { "@id": `${SITE_URL}/#person` },
        keywords: "AWS, serverless, Lambda, Rekognition, event-driven architecture",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "BlogPosting",
        headline: "Containerizing Chaos: A Beginner's Guide to Dockerizing Python Apps",
        url: "https://dev.to/ridhampokiya2110",
        author: { "@id": `${SITE_URL}/#person` },
        keywords: "Docker, Python, DevOps, containerisation",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. Organization Schema (Tesconix Technologies)
// ─────────────────────────────────────────────────────────────────────────────
const tesconixSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.tesconix.com/#organization",
  name: "Tesconix Technologies",
  url: "https://www.tesconix.com",
  description: "A premium software engineering agency specializing in mission-critical custom software, scalable cloud infrastructure, AI business automation, and mobile app development for global enterprises.",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
  },
  knowsAbout: [
    "Software Engineering",
    "Cloud Infrastructure",
    "AWS Migration",
    "AI Business Automation",
    "Mobile App Development",
    "Enterprise SaaS",
    "Game Development",
    "DevOps Automation"
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function StructuredData() {
  const schemas = [
    personSchema,
    websiteSchema,
    profilePageSchema,
    breadcrumbSchema,
    projectsListSchema,
    faqSchema,
    blogListSchema,
    tesconixSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
