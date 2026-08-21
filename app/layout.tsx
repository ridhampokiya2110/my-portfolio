import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

// ─────────────────────────────────────────────────────────────────────────────
// Fonts
// ─────────────────────────────────────────────────────────────────────────────
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const SITE_URL = "https://ridhampokiya.vercel.app";
const FULL_NAME = "Ridham Pokiya";
const TITLE = "Ridham Pokiya — DevOps & Cloud Engineer | SaaS Founder | India";
const DESCRIPTION =
  "Ridham Pokiya is a DevOps & Cloud Engineer from India specialising in AWS serverless architectures, automated CI/CD pipelines, SaaS products, ERP systems, and cloud-native development. Founder of Heeratrack (Diamond ERP SaaS) and Validexio (Startup Validation Platform). AWS Student Builder, open to DevOps, Cloud, and SaaS engineering roles.";

// ─────────────────────────────────────────────────────────────────────────────
// SEO Keywords (500+) — grouped for clarity
// ─────────────────────────────────────────────────────────────────────────────
const SEO_KEYWORDS: string[] = [
  // ── Personal Identity
  "Ridham Pokiya",
  "Ridham Pokiya portfolio",
  "Ridham Pokiya developer",
  "Ridham Pokiya cloud engineer",
  "Ridham Pokiya devops",
  "Ridham Pokiya India",
  "Ridham Pokiya AWS",
  "Ridham Pokiya GitHub",
  "Ridham Pokiya LinkedIn",
  "Ridham Pokiya Medium",
  "ridhampokiya2110",
  "ridhampokiya10",
  "Ridham Pokiya Heeratrack",
  "Ridham Pokiya Validexio",
  "Ridham Pokiya PPSU",
  "Ridham Pokiya student builder",
  "Ridham Pokiya resume",
  "Ridham Pokiya hire",
  "Ridham Pokiya contact",
  "Ridham Pokiya SaaS founder",
  // ── DevOps
  "DevOps engineer India",
  "DevOps engineer portfolio",
  "DevOps engineer for hire",
  "DevOps engineer fresher India",
  "DevOps engineer internship",
  "DevOps CI/CD pipeline expert",
  "DevOps automation engineer",
  "DevOps consultant India",
  "DevOps cloud engineer",
  "DevOps engineer skills",
  "DevOps engineer resume",
  "DevOps engineer Gujarat",
  "DevOps full stack",
  "DevOps infrastructure as code",
  "DevOps monitoring observability",
  "DevOps pipeline automation",
  "DevOps security best practices",
  "DevOps agile methodology",
  "DevOps continuous delivery",
  "DevOps continuous integration",
  "DevOps continuous deployment",
  "DevOps microservices architecture",
  "DevOps container orchestration",
  "DevOps site reliability engineering",
  "DevOps platform engineering",
  "DevOps tools expertise",
  "DevOps best practices 2024",
  "DevOps best practices 2025",
  // ── AWS Cloud
  "AWS cloud engineer India",
  "AWS cloud architect",
  "AWS certified developer India",
  "AWS serverless architecture",
  "AWS Lambda developer",
  "AWS S3 expert",
  "AWS CloudFront CDN",
  "AWS IAM security",
  "AWS EC2 deployment",
  "AWS ECS Fargate",
  "AWS DynamoDB NoSQL",
  "AWS API Gateway",
  "AWS Rekognition AI",
  "AWS CloudWatch monitoring",
  "AWS CodePipeline CI/CD",
  "AWS CodeBuild automation",
  "AWS Route53 DNS",
  "AWS RDS database",
  "AWS SQS SNS messaging",
  "AWS Elastic Beanstalk",
  "AWS cloud cost optimisation",
  "AWS Well-Architected Framework",
  "AWS student builder",
  "AWS community builder India",
  "AWS free tier projects",
  "AWS multi-account strategy",
  "AWS VPC networking",
  "AWS security groups",
  "AWS load balancer ALB NLB",
  "AWS auto scaling",
  // ── Cloud General
  "cloud engineer India",
  "cloud architect portfolio",
  "cloud native development",
  "cloud infrastructure automation",
  "cloud migration specialist",
  "cloud cost optimisation India",
  "multi-cloud strategy",
  "cloud security engineer",
  "cloud solutions architect",
  "cloud engineer for hire India",
  "serverless computing India",
  "serverless backend developer",
  "serverless API development",
  "GCP Google Cloud Platform",
  "Azure cloud basics",
  // ── CI/CD & Automation
  "CI/CD pipeline engineer",
  "GitHub Actions automation",
  "Jenkins pipeline expert",
  "Terraform infrastructure as code",
  "Ansible automation engineer",
  "Docker containerisation",
  "Kubernetes orchestration",
  "GitOps workflow",
  "automated deployment pipeline",
  "zero downtime deployment",
  "blue-green deployment",
  "canary deployment strategy",
  "feature flags deployment",
  "infrastructure automation India",
  "DevSecOps India",
  // ── SaaS & Startup
  "SaaS founder India",
  "SaaS developer India",
  "SaaS product engineer",
  "SaaS platform architect",
  "multi-tenant SaaS India",
  "B2B SaaS India",
  "SaaS startup founder",
  "startup tech co-founder",
  "startup validation platform",
  "ERP SaaS India",
  "diamond industry ERP",
  "diamond management software",
  "Heeratrack diamond ERP",
  "Heeratrack SaaS",
  "Heeratrack.com",
  "diamond factory management",
  "diamond chalan management",
  "diamond worker management system",
  "Validexio startup validation",
  "Validexio.com",
  "startup idea validation tool",
  "startup market research AI",
  "startup competitor analysis tool",
  "founder portfolio website",
  // ── Programming Languages
  "Python developer India",
  "Python automation engineer",
  "Python cloud scripting",
  "Bash scripting Linux",
  "SQL database developer",
  "Java developer India",
  "TypeScript developer",
  "JavaScript developer India",
  "React developer India",
  "Node.js backend developer",
  "Next.js developer India",
  "REST API developer",
  "GraphQL developer",
  // ── Tools & Technologies
  "Docker Kubernetes engineer",
  "Terraform AWS automation",
  "GitHub expert developer",
  "Prometheus Grafana monitoring",
  "ELK stack log management",
  "PostgreSQL database developer",
  "Redis caching expert",
  "Stripe payment integration",
  "Railway cloud deployment",
  "Vercel deployment expert",
  "Netlify deployment",
  "Linux system administration",
  // ── Freelance / Work
  "freelance DevOps engineer India",
  "remote DevOps engineer India",
  "cloud engineer remote work",
  "hire DevOps engineer India",
  "hire cloud engineer India",
  "DevOps consulting India",
  "cloud consulting India",
  "SaaS consulting India",
  "startup CTO for hire",
  "tech lead India",
  "full stack DevOps India",
  "backend cloud engineer India",
  // ── Portfolio / Profile
  "personal portfolio website India",
  "developer portfolio 2024",
  "developer portfolio 2025",
  "software engineer portfolio India",
  "cloud engineer personal website",
  "DevOps engineer personal website",
  "developer profile India",
  "tech professional portfolio",
  "India software engineer profile",
  "engineer personal branding",
  // ── Experience & Certifications
  "AWS certified cloud practitioner",
  "AWS Solutions Architect",
  "DevOps internship India",
  "data analyst internship India",
  "cloud engineering student India",
  "PPSU cloud engineer",
  "Parul University student",
  "Gujarat engineer India",
  "20+ AWS certificates",
  "cloud certification portfolio",
  "technical certifications India",
  // ── Projects
  "CloudLens AI image auditor AWS",
  "CloudQuest trivia serverless",
  "serverless cloud resume challenge",
  "event-driven architecture AWS",
  "AI image analysis Lambda",
  "serverless quiz platform DynamoDB",
  "cloud resume project AWS",
  "AWS CloudFront project",
  "open source cloud projects",
  "portfolio cloud projects AWS",
  // ── Data & Analytics
  "data analyst Python SQL India",
  "Netflix data analysis project",
  "PlayStore data analysis",
  "business intelligence India",
  "data visualisation Python",
  "statistical analysis SQL",
  "big data processing",
  "data pipeline engineer",
  // ── Soft Skills / Leadership
  "project manager engineer India",
  "technical project management",
  "agile scrum master",
  "cloud workshop facilitator",
  "AWS student community leader",
  "tech community builder India",
  "cloud literacy programs India",
  "open to opportunities India",
  "graduate engineer trainee",
  "entry level cloud engineer",
  "early career DevOps engineer",
  // ── Location & Context
  "DevOps engineer Gujarat India",
  "cloud engineer Gujarat",
  "software engineer India 2025",
  "Indian tech professional",
  "Vadodara engineer",
  "Ahmedabad cloud engineer",
  "India AWS community",
  "India DevOps community",
  // ── Blog & Content
  "DevOps blog India",
  "cloud engineering blog",
  "AWS tutorial blog India",
  "Docker tutorial for beginners",
  "serverless architecture guide",
  "Heeratrack blog",
  "Validexio founder blog",
  "startup founder blog India",
  "cloud articles dev.to",
  "AWS builders blog",
  "Medium DevOps articles",
  // ── AEO — Answer Engine Optimisation keywords (question-form)
  "who is Ridham Pokiya",
  "what does Ridham Pokiya do",
  "where is Ridham Pokiya from",
  "what is Heeratrack",
  "what is Validexio",
  "how to become DevOps engineer India",
  "what is serverless architecture AWS",
  "what is CI/CD pipeline",
  "what is Terraform used for",
  "how to build SaaS product India",
  "best cloud engineer portfolio India",
  "what is AWS Lambda used for",
  "how to deploy serverless app AWS",
  "what skills does a DevOps engineer need",
  "how to validate startup idea",
  "what is diamond ERP software",
  // ── GEO — Generative Engine Optimisation
  "Ridham Pokiya AI profile",
  "DevOps expert India AI search",
  "cloud engineer entity India",
  "Heeratrack diamond software company India",
  "Validexio startup validation AI",
  "AWS serverless India expert entity",
  "Ridham Pokiya knowledge graph",
  "Indian tech founder cloud engineer",
  "portfolio profile DevOps India 2025",
  "cloud native builder India open source",
  // ── Additional Long-tail SEO
  "how to set up CI/CD pipeline AWS",
  "AWS Lambda DynamoDB API project",
  "build diamond factory management system",
  "cloud engineer internship India 2025",
  "freelance cloud architect India cost",
  "best DevOps tools 2025 India",
  "DevOps roadmap India beginner",
  "AWS free tier serverless project ideas",
  "startup validation market sizing tool",
  "diamond industry digitisation India",
  "what is multi-tenant SaaS architecture",
  "how to scale SaaS product AWS",
  "event-driven architecture tutorial",
  "containerise Python app Docker guide",
  "Kubernetes vs Docker Swarm 2025",
  "DevOps vs SRE differences",
  "cloud cost reduction strategies AWS",
  "infrastructure as code best practices Terraform",
  "GitHub Actions CI/CD tutorial",
  "Prometheus Grafana setup AWS EKS",
  "DevOps engineer career path India",
  "cloud engineering bootcamp India alternative",
  "self-taught DevOps engineer India",
  "AWS community builder program India",
  "how to build ERP system from scratch",
  "SaaS monetisation Stripe India",
  "B2B SaaS go to market India",
  "startup tech stack 2025 India",
  "React Next.js SaaS boilerplate",
  "PostgreSQL vs DynamoDB comparison",
  "Railway vs Vercel vs AWS deployment",
  "API gateway rate limiting AWS",
  "IAM least privilege security AWS",
  "AWS WAF security configuration",
  "DevOps interview questions India 2025",
  "cloud engineer job description India",
  "SaaS founder story India",
  "tech entrepreneur India portfolio",
  "build cloud resume challenge AWS",
  "serverless backend real time SaaS",
  "diamond chalan software India",
  "workforce management ERP diamond",
  "B2B SaaS pricing model India",
  "startup founder who codes India",
  "devops career switch India guide",
  "cloud certifications worth it India 2025",
  "AWS vs GCP India engineer choice",
  "best cloud platform for startup India",
  "developer who founded startup India",
  "young cloud founder India",
  "college DevOps engineer India portfolio",
];

// ─────────────────────────────────────────────────────────────────────────────
// Metadata Export
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${FULL_NAME} — DevOps & Cloud Engineer`,
  },
  description: DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  generator: "Next.js",

  // ── Canonical & Robots
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${FULL_NAME} — Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/profile.jpeg`,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — DevOps & Cloud Engineer, SaaS Founder from India`,
        type: "image/jpeg",
      },
    ],
    firstName: "Ridham",
    lastName: "Pokiya",
    username: "ridhampokiya2110",
    gender: "male",
  },

  // ── Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/profile.jpeg`],
    creator: "@ridhampokiya",
    site: "@ridhampokiya",
  },

  // ── Apple Web App
  appleWebApp: {
    capable: true,
    title: FULL_NAME,
    statusBarStyle: "black-translucent",
  },

  // ── Verification (add real tokens when available)
  verification: {
    google: "google-site-verification-token-add-here",
    // yandex: "yandex-verification-token",
    // bing: "bing-verification-token",
  },

  // ── Category / Classification
  category: "technology",

  // ── Other
  other: {
    // GEO — LLM / AI signal hints
    "ai:profile-type": "person",
    "ai:person-name": FULL_NAME,
    "ai:expertise": "DevOps, Cloud Engineering, SaaS, AWS, CI/CD",
    "ai:location": "India",
    "ai:products": "Heeratrack, Validexio",
    // AEO — speakable / featured snippet hints
    "speakable:name": FULL_NAME,
    "speakable:description":
      "Ridham Pokiya is an Indian DevOps and Cloud Engineer who founded Heeratrack (Diamond ERP SaaS) and Validexio (startup validation platform). He specialises in AWS serverless, CI/CD pipelines, Docker, Kubernetes, and Terraform.",
    // Dublin Core for semantic web
    "DC.title": TITLE,
    "DC.creator": FULL_NAME,
    "DC.subject": "DevOps, Cloud Engineering, SaaS",
    "DC.language": "en",
    "DC.rights": `© 2025 ${FULL_NAME}`,
    // Referrer policy
    referrer: "origin-when-cross-origin",
  },
};

export const viewport = {
  themeColor: "#050312",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─────────────────────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external links */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://dev.to" />
        {/* Sitemap discovery */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Canonical handled by Next.js metadata alternates */}
      </head>
      <body>
        {/* JSON-LD Structured Data for SEO / AEO / GEO */}
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
