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
      "Single-region enterprise workloads suffered from **latency bottlenecks** and outage vulnerability without **automated cross-region failover**.",
    whatIBuilt:
      "Architected an **active-active AWS multi-region infrastructure** (ap-south-1 & us-east-1) with **Route 53 latency routing**, **ECS Fargate auto-scaling**, and **Aurora Global database replication**.",
    result:
      "**99.99% verified uptime** with **sub-50ms regional API responses** and **zero-data-loss failover** under continuous chaos testing.",
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
      "Monolithic backends suffered from **high idle cloud expenses** and compute bottlenecks during sporadic high-volume query spikes.",
    whatIBuilt:
      "Designed a **decoupled serverless event pipeline** using **AWS Lambda**, **Amazon S3 triggers**, and **DynamoDB** for single-digit millisecond latency queries.",
    result:
      "**92% operational cloud cost reduction** with **sub-100ms async throughput** during peak enterprise workloads.",
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
