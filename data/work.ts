export interface CaseStudyCardData {
  id: string;
  number: string;
  category: string;
  year: string;
  title: string;
  problem: string;
  whatIBuilt: string;
  result: string;
  stack: string[];
  link: string;
  theme: "off-white" | "warm" | "ink";
  visual: {
    type: "architecture" | "screenshot" | "diagram";
    caption: string;
    diagramType: "aws-cloud" | "deskcode-cicd" | "serverless-core" | "heeratrack" | "validexio";
  };
}

export const selectedWorkData: CaseStudyCardData[] = [
  {
    id: "enterprise-cloud-backbone",
    number: "01",
    category: "Cloud Infrastructure / Multi-Region Architecture",
    year: "2025 — 2026",
    title: "Enterprise Multi-Region Backbone",
    problem:
      "Critical enterprise workloads suffered single-region latency bottlenecks and outage vulnerability during high-volume spikes without automated cross-region disaster recovery.",
    whatIBuilt:
      "Architected an active-active AWS multi-region infrastructure spanning Mumbai (ap-south-1) and US-East (us-east-1) with Route 53 latency routing, ECS Fargate auto-scaling clusters, and automated Aurora Global database replication.",
    result:
      "99.99% uptime achieved across global traffic with sub-50ms regional API responses and verified zero-data-loss failover under continuous chaos testing.",
    stack: [
      "AWS Multi-Region",
      "Terraform IaC",
      "Amazon ECS Fargate",
      "Aurora Global DB",
      "Route 53 DNS",
      "Prometheus & Grafana",
    ],
    link: "#contact",
    theme: "off-white",
    visual: {
      type: "architecture",
      caption: "Active-active multi-region topology with latency failover",
      diagramType: "aws-cloud",
    },
  },
  {
    id: "serverless-event-core",
    number: "02",
    category: "Serverless Architecture / Distributed Systems",
    year: "2024 — 2026",
    title: "Serverless Event-Driven Core",
    problem:
      "Monolithic backends suffered from high idle cloud infrastructure expenses and compute bottlenecks during sporadic high-volume image processing and distributed queries.",
    whatIBuilt:
      "Designed a decoupled event-driven serverless topology utilizing AWS Lambda, Amazon S3 event notifications, Amazon Rekognition AI pipelines, and DynamoDB for single-digit millisecond latency queries.",
    result:
      "92% operational cloud cost reduction compared to persistent server instances with sub-100ms async processing throughput at peak workloads.",
    stack: [
      "AWS Lambda",
      "Amazon EventBridge",
      "DynamoDB NoSQL",
      "Amazon S3",
      "API Gateway",
      "CloudFront CDN",
    ],
    link: "#contact",
    theme: "warm",
    visual: {
      type: "architecture",
      caption: "Decoupled serverless event pipeline with sub-100ms async processing",
      diagramType: "serverless-core",
    },
  },
];
