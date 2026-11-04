// ============================================================
// PORTFOLIO DATA — edit here to update the whole site
// ============================================================

export const personalInfo = {
  name: "RIDHAM POKIYA",
  role: ["Founder, Tesconix", "AWS Cloud Architect", "DevOps Engineer", "SaaS Builder", "Infrastructure Specialist"],
  email: "ridhampokiya10@gmail.com",
  phone: "+91 9825954653",
  location: "Surat, India (IST)",
  status: "Available for Selected Projects",
  bio: "Founder of Tesconix Technologies. AWS Cloud & DevOps specialist building high-performance cloud infrastructure, custom software, automated CI/CD systems, and SaaS platforms like Heeratrack and Validexio.",
  about: "Founder of Tesconix Technologies based in Surat, India. I partner with international founders, CTOs, and business owners to architect cloud backbones that run quietly, eliminate deployment downtime, and scale reliably.",
  aboutPillars: [
    {
      title: "Cloud Architecture & DevOps",
      desc: "Deep expertise in CI/CD automation, Docker/Kubernetes orchestration, zero-downtime blue/green deployments, and cost-efficient AWS architectures."
    },
    {
      title: "SaaS Founder & Builder",
      desc: "Architect and builder of production-grade platforms including Heeratrack (Diamond ERP) and Validexio (Startup Intelligence)."
    }
  ],
  devto: "https://dev.to/ridhampokiya2110",
  fiverr: "https://www.fiverr.com/s/2pQK2lN",
  upwork: "https://www.upwork.com/freelancers/~01ee772074df98347e?mp_source=sharev",
  github: "https://github.com/ridhampokiya2110",
  linkedin: "https://www.linkedin.com/in/ridham-pokiya-b7974a249",
  instagram: "https://www.instagram.com/___r._.p___",
  whatsapp: "https://wa.me/919825954653",
  medium: "https://medium.com/@ridhampokiya10",
  awsBuilder: "https://builder.aws.com/community/@ridhampokiya10?tab=badges",
  calendly: "https://calendly.com/ridhampokiya10",
  resumeUrl: "/Resume.pdf",
  certificateUrl: "/certificate.pdf",
  profileImage: "/profile.jpeg",
};

export const stats = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Certificates" },
];

export const expertProfiles = [
  {
    platform: "Upwork",
    role: "DevOps & Cloud Solutions Architect",
    badge: "Expert Freelancer",
    url: "https://www.upwork.com/freelancers/~01ee772074df98347e?mp_source=sharev",
    color: "#14a800",
    description: "Enterprise AWS cloud architectures, CI/CD automation pipelines, and scalable serverless systems.",
  },
  {
    platform: "Fiverr",
    role: "Cloud Infrastructure & SaaS Specialist",
    badge: "Verified Pro Seller",
    url: "https://www.fiverr.com/s/2pQK2lN",
    color: "#1dbf73",
    description: "Docker, Kubernetes, Terraform provisioning, and high-performance production cloud deployment.",
  },
  {
    platform: "Dev.to",
    role: "Technical Author & Cloud Expert",
    badge: "Verified Contributor",
    url: "https://dev.to/ridhampokiya2110",
    color: "#0a0a0a",
    description: "In-depth engineering articles, DevOps guides, and cloud architecture deep-dives.",
  },
];

export const expertPhotos = [
  {
    id: "founder-portrait",
    src: "/images/2.jpeg",
    fallbackSrc: "/images/ridham-executive-full.jpg",
    number: "01",
    title: "Founder & CEO",
    role: "Leadership & Systems Strategy",
    org: "Tesconix Technologies",
    tag: "Executive Leadership",
    accent: "var(--accent, #2438FF)",
    description: "Leading Tesconix Technologies to engineer high-performance, zero-downtime cloud infrastructure and scalable custom software.",
    details: "Directing architecture, client engineering, and product roadmaps for international founders and CTOs.",
  },
  {
    id: "cloud-architect-editorial",
    src: "/images/4.jpeg",
    fallbackSrc: "/images/ridham-monochrome-editorial.jpg",
    number: "02",
    title: "Cloud Solutions Architect",
    role: "Enterprise Systems Design",
    org: "AWS & Serverless Architecture",
    tag: "Cloud Architecture",
    accent: "var(--accent, #2438FF)",
    description: "AWS Student Builder core member at PPSU. Architecting resilient serverless topologies, multi-region failover, and cloud governance.",
    details: "Specializing in Lambda event pipelines, S3 vaults, DynamoDB single-digit ms queries, and Aurora Multi-AZ databases.",
  },
  {
    id: "systems-engineer-portrait",
    src: "/images/3.jpeg",
    fallbackSrc: "/images/ridham-monochrome-portrait.jpg",
    number: "03",
    title: "Enterprise Systems Builder",
    role: "High-Throughput Engineering",
    org: "Distributed Cloud Systems",
    tag: "Systems Engineering",
    accent: "var(--accent, #2438FF)",
    description: "Bridging distributed cloud systems with business reality. Engineering scalable architectures, CI/CD automation, and high-concurrency microservices that endure.",
    details: "Automating zero-downtime release pipelines, immutable container images, and robust cloud infrastructure for global enterprise scale.",
  },
];

export const skills = [
  {
    category: "Cloud",
    color: "#06b6d4",
    items: [
      { name: "AWS", level: 5 },
      { name: "GCP", level: 3 },
      { name: "CloudFront", level: 4 },
      { name: "S3", level: 5 },
    ],
  },
  {
    category: "DevOps",
    color: "#7c3aed",
    items: [
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "Terraform", level: 4 },
      { name: "Jenkins", level: 3 },
      { name: "CI/CD", level: 5 },
    ],
  },
  {
    category: "Languages",
    color: "#10b981",
    items: [
      { name: "Python", level: 4 },
      { name: "Java", level: 3 },
      { name: "SQL", level: 4 },
      { name: "Bash", level: 3 },
    ],
  },
  {
    category: "Tools & Concepts",
    color: "#f59e0b",
    items: [
      { name: "GitHub", level: 5 },
      { name: "IAM", level: 4 },
      { name: "Prompt Engineering", level: 4 },
      { name: "SaaS Development", level: 4 },
      { name: "Cloud Monitoring", level: 4 },
      { name: "Project Management", level: 3 },
    ],
  },
];

export const experience = [
  {
    role: "Founder & CEO",
    org: "Tesconix Technologies",
    date: "2026 – Present",
    type: "role",
    desc: "Directing cloud engineering and custom software execution. Engineered 20+ production deployments on AWS, architected multi-tenant SaaS backbones, and established automated CI/CD pipelines achieving sub-10-minute deployment cycles.",
  },
  {
    role: "DevOps Intern",
    org: "Deskcode Solution Pvt Ltd",
    date: "Internship",
    type: "internship",
    desc: "Built and optimised production and staging-level CI/CD pipelines to ensure seamless live deployments. Automated infrastructure provisioning and reduced deployment time significantly.",
  },
  {
    role: "AWS Student Builder Groups — Core Member",
    org: "PPSU · Cloud Engineer",
    date: "2026 – Present",
    type: "role",
    desc: "Focused on serverless architecture design and led automated cloud literacy programs for students. Organised workshops on AWS services and cloud-native development.",
  },
  {
    role: "Data Analyst Intern",
    org: "Unified Data Analysis",
    date: "Internship",
    type: "internship",
    desc: "Handled large-scale datasets for Netflix & PlayStore using SQL and Python. Delivered actionable insights through data cleaning, visualisation, and statistical analysis.",
  },
];

// IT Company — Tesconix Technologies
export const tesconixCompany = {
  title: "Tesconix Technologies",
  tag: "Founder & CEO",
  tagColor: "cyan",
  category: "Cloud Infrastructure & Custom Software Engineering",
  accent: "#2438FF",
  desc: "A technology studio founded in Surat, India. We partner with founders and technical leaders to design zero-downtime AWS infrastructure, automate CI/CD deployments, and build bespoke SaaS applications with 99.99% availability.",
  tech: ["AWS Architecture", "Kubernetes & Docker", "Terraform IaC", "Zero-Downtime CI/CD", "Custom SaaS"],
  link: "https://www.tesconix.com",
};

// Startups
export const featuredProject = {
  title: "Heeratrack: Diamond Management ERP",
  tag: "Founder",
  tagColor: "gold",
  category: "SaaS / Web App / ERP",
  accent: "#ffb700",
  desc: "A premium Diamond Business Management and ERP platform built for diamond merchants. Manages workers, salaries, chalans, production, and stock in real-time. Multi-tenant SaaS — streamlining diamond factory operations and maximising efficiency at scale.",
  tech: ["SaaS", "ERP", "Web App", "Real-time", "Multi-tenant"],
  link: "https://www.heeratrack.com",
};

// Validexio — Ridham's second major SaaS project
export const secondFeaturedProject = {
  title: "Validexio: Startup Validation Platform",
  tag: "Founder",
  tagColor: "violet",
  category: "SaaS / Market Research / AI",
  accent: "#9b59ff",
  desc: "A real-time startup idea validation platform that replaces stale market research PDFs with live competitor data, market sizing, and actionable insights. Built to help founders validate ideas with real signals — not guesswork or armchair entrepreneurship. Execution over speculation.",
  tech: ["React", "Node.js", "Live Data Fetch", "PostgreSQL", "Stripe", "AWS", "Railway"],
  link: "https://validexio.com",
};

export const projects = [
  {
    title: "Skillnova LMS",
    tech: ["Next.js", "TypeScript", "AWS"],
    desc: "An advanced learning management system designed to accelerate digital upskilling with interactive modules.",
    link: "https://skillnova.tesconix.com",
  },
  {
    title: "Ember & Bean Café",
    tech: ["Next.js", "Tailwind CSS", "UI/UX"],
    desc: "A premium, fully responsive demo for a specialty coffee shop, featuring an immersive UI and elegant typography.",
    link: "https://cafe-demo.tesconix.com",
  },
  {
    title: "Testygrid OS",
    tech: ["Cloud Architecture", "Next.js", "React"],
    desc: "The intelligence behind world-class dining. A next-gen hospitality operating system with predictive AI.",
    link: "https://testygrid.tesconix.com",
  },
  {
    title: "Rewear",
    tech: ["Next.js", "E-commerce", "UI/UX"],
    desc: "A sustainable fashion and second-hand clothing marketplace with a seamless, modern shopping experience.",
    link: "https://rewear-web.netlify.app/",
  },
  {
    title: "InsightStream",
    tech: ["Next.js", "BI", "Analytics"],
    desc: "A comprehensive Business Intelligence and Product Management platform featuring real-time marketplace dashboards.",
    link: "https://insightstream1.netlify.app/",
  },
  {
    title: "AttendZen",
    tech: ["React", "Tooling", "Tailwind CSS"],
    desc: "A smart attendance calculator and tracking tool designed to help users strategically hit their attendance targets.",
    link: "https://attendzen.netlify.app/",
  },
  {
    title: "CloudLens: AI Image Auditor",
    tech: ["AWS Lambda", "Rekognition", "S3"],
    desc: "Event-driven serverless app for automated AI image analysis using AWS Rekognition.",
    link: "https://d6rq0nk83y8qw.cloudfront.net/",
  },
  {
    title: "CloudQuest Trivia Game",
    tech: ["API Gateway", "DynamoDB", "Lambda"],
    desc: "Serverless quiz platform with automated CI/CD deployment and real-time scoring.",
    link: "https://d3s7gaidpnlw9m.cloudfront.net/",
  },
  {
    title: "Serverless Cloud Resume API",
    tech: ["CloudFront", "S3", "API Gateway"],
    desc: "High-performance hosted resume with real-time visitor counter and serverless backend.",
    link: "https://dmtfynvyb5ngl.cloudfront.net/",
  },
];

export const featuredArticles = [
  {
    id: 1,
    title: "Why I Built Validexio: A Founder’s Mission to End Armchair Entrepreneurship",
    description: "Hi, I’m Ridham Pokiya, the founder of Validexio. As a developer and builder, I have always been...",
    url: "https://dev.to/ridhampokiya2110",
    reading_time_minutes: 2,
    tag_list: ["startup", "mission"],
    positive_reactions_count: 1,
    comments_count: 0,
    platform: "Dev.to"
  },
  {
    id: 2,
    title: "Execution > Validation: How Validexio Hands You Code and Leads on Day 1",
    description: "Research is cheap. Execution is expensive. Most startup validators leave you with a long list of things to read. But a business isn't validated...",
    url: "https://dev.to/ridhampokiya2110",
    reading_time_minutes: 2,
    tag_list: ["data", "validation"],
    positive_reactions_count: 0,
    comments_count: 0,
    platform: "Dev.to"
  },
  {
    id: 3,
    title: "Building Heeratrack: Revolutionizing B2B SaaS for the Diamond Industry",
    description: "How we built a comprehensive multi-tenant ERP system to manage factory workers, chalans, and real-time diamond stock tracking...",
    url: "https://dev.to/ridhampokiya2110",
    reading_time_minutes: 4,
    tag_list: ["saas", "erp", "b2b"],
    positive_reactions_count: 5,
    comments_count: 2,
    platform: "Dev.to"
  },
  {
    id: 4,
    title: "Introducing Heeratrack: Modernizing the Diamond Industry's Backbone",
    description: "The diamond industry is built on deep-rooted traditions. But behind the sparkle, the operational side—managing workers, chalans, and inventory—often relies on outdated methods. Here's how we fix it...",
    url: "https://medium.com/@ridhampokiya10/introducing-heeratrack-modernizing-the-diamond-industrys-backbone-5b9ebf617e9c",
    reading_time_minutes: 3,
    tag_list: ["heeratrack", "saas", "erp"],
    positive_reactions_count: 14,
    comments_count: 2,
    platform: "Medium"
  },
  {
    id: 5,
    title: "Event-Driven Architecture: Building a Serverless AI Image Auditor on AWS 🔍",
    description: "Learn how to build a highly scalable, event-driven serverless application on AWS using Lambda, S3, and Rekognition for automated image auditing...",
    url: "https://dev.to/ridhampokiya10",
    reading_time_minutes: 5,
    tag_list: ["aws", "serverless", "architecture"],
    positive_reactions_count: 22,
    comments_count: 4,
    platform: "AWS Builders"
  },
  {
    id: 6,
    title: "Containerizing Chaos: A Beginner's Guide to Dockerizing Python Apps 🐳",
    description: "Struggling with 'it works on my machine'? In this guide, we dive deep into Docker, explaining how to containerize your Python applications for reliable deployments...",
    url: "https://dev.to/ridhampokiya10",
    reading_time_minutes: 4,
    tag_list: ["docker", "python", "devops"],
    positive_reactions_count: 18,
    comments_count: 3,
    platform: "AWS Builders"
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Books", href: "#books" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
