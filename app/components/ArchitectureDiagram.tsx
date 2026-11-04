"use client";

interface ArchitectureDiagramProps {
  type: "aws-cloud" | "deskcode-cicd" | "serverless-core" | "heeratrack" | "validexio";
  theme: "off-white" | "warm" | "ink";
}

export default function ArchitectureDiagram({ type, theme }: ArchitectureDiagramProps) {
  const isDark = theme === "ink";
  const strokeColor = isDark ? "var(--border-strong, #3A3935)" : "var(--border-hairline, #DAD6CC)";
  const textColor = isDark ? "var(--inverted-ink, #F4F1EA)" : "var(--ink, #0F0F0E)";
  const mutedText = isDark ? "var(--inverted-muted, #9E9C96)" : "var(--ink-secondary, #383733)";
  const boxBg = isDark ? "var(--inverted-surface, #171715)" : "var(--canvas-surface, #EDEAE2)";
  const highlightStroke = "var(--accent, #2438FF)";

  if (type === "deskcode-cicd") {
    return (
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
        role="img"
        aria-label="Deskcode Solution Automated CI/CD Pipeline Architecture"
      >
        {/* Background Grid Lines */}
        <line x1="0" y1="100" x2="600" y2="100" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />
        <line x1="0" y1="200" x2="600" y2="200" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />
        <line x1="0" y1="300" x2="600" y2="300" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />

        {/* Stage 1: Git Push & Trigger */}
        <rect x="35" y="45" width="145" height="75" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="50" y="75" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">DEVELOPER REPO</text>
        <text x="50" y="93" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">GitHub Pull Request</text>
        <text x="50" y="108" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8">Webhook Trigger</text>

        {/* Stage 2: Automated Quality Gates */}
        <rect x="225" y="45" width="150" height="75" rx="4" fill={boxBg} stroke={highlightStroke} strokeWidth="1.5" />
        <text x="240" y="75" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">TEST &amp; AUDIT GATE</text>
        <text x="240" y="93" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Jest, ESLint &amp; SAST</text>
        <text x="240" y="108" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8">Automated Verification</text>

        {/* Stage 3: Container Build */}
        <rect x="420" y="45" width="145" height="75" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="435" y="75" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">DOCKER ENGINE</text>
        <text x="435" y="93" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Immutable Image Build</text>
        <text x="435" y="108" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Multi-Stage Cache</text>

        {/* Connectors Row 1 */}
        <line x1="180" y1="82" x2="225" y2="82" stroke={strokeColor} strokeWidth="1.2" />
        <polygon points="223,79 228,82 223,85" fill={textColor} />
        <line x1="375" y1="82" x2="420" y2="82" stroke={strokeColor} strokeWidth="1.2" />
        <polygon points="418,79 423,82 418,85" fill={textColor} />

        {/* Mid Row: Staging & Production Deployment Environments */}
        <rect x="70" y="175" width="210" height="90" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="85" y="205" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">STAGING CLUSTER</text>
        <text x="85" y="223" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Ephemeral Preview Environments</text>
        <text x="85" y="240" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8">Smoke Tests Auto-Passed</text>

        <rect x="320" y="175" width="210" height="90" rx="4" fill={boxBg} stroke={highlightStroke} strokeWidth="1.5" />
        <text x="335" y="205" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">PRODUCTION CLUSTER</text>
        <text x="335" y="223" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Blue / Green Rollout</text>
        <text x="335" y="240" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8">Zero-Downtime Live Shift</text>

        {/* Downward links from Build */}
        <line x1="492" y1="120" x2="425" y2="175" stroke={strokeColor} strokeWidth="1.2" />
        <line x1="492" y1="120" x2="175" y2="175" stroke={strokeColor} strokeWidth="1.2" />

        {/* Bottom Tier: Observability & Rollback Guard */}
        <rect x="70" y="305" width="460" height="55" rx="4" fill={boxBg} stroke={strokeColor} strokeDasharray="3 3" />
        <text x="90" y="333" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.12em" fontWeight="600">CONTINUOUS OBSERVABILITY &amp; ROLLBACK GUARD</text>
        <text x="90" y="348" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Nginx Health Checks • Prometheus Alerts • Auto-Rollback on 5xx Error Spikes</text>
      </svg>
    );
  }

  if (type === "serverless-core") {
    return (
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
        role="img"
        aria-label="Serverless Event-Driven Microservices Architecture"
      >
        {/* Client Ingress */}
        <rect x="40" y="45" width="140" height="70" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="55" y="75" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">CLIENT / INGRESS</text>
        <text x="55" y="93" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">CloudFront CDN &amp; S3</text>

        {/* API Gateway */}
        <rect x="230" y="45" width="140" height="70" rx="4" fill={boxBg} stroke={highlightStroke} strokeWidth="1.5" />
        <text x="245" y="75" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">API GATEWAY</text>
        <text x="245" y="93" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">REST &amp; WebSocket Routes</text>

        {/* EventBridge Bus */}
        <rect x="420" y="45" width="140" height="70" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="435" y="75" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">EVENTBRIDGE</text>
        <text x="435" y="93" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Decoupled Event Router</text>

        {/* Horizontal arrows */}
        <line x1="180" y1="80" x2="230" y2="80" stroke={strokeColor} />
        <polygon points="228,77 233,80 228,83" fill={textColor} />
        <line x1="370" y1="80" x2="420" y2="80" stroke={strokeColor} />
        <polygon points="418,77 423,80 418,83" fill={textColor} />

        {/* Middle Tier: Lambda Microservices */}
        <rect x="50" y="165" width="150" height="85" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="65" y="195" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">AWS LAMBDA CORE</text>
        <text x="65" y="213" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Async Compute Node</text>
        <text x="65" y="228" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8">Sub-100ms Latency</text>

        <rect x="225" y="165" width="150" height="85" rx="4" fill={boxBg} stroke={highlightStroke} strokeWidth="1.5" />
        <text x="240" y="195" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">REKOGNITION AI</text>
        <text x="240" y="213" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Computer Vision Pipe</text>
        <text x="240" y="228" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8">Automated Tagging</text>

        <rect x="400" y="165" width="160" height="85" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="415" y="195" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">DYNAMODB STORAGE</text>
        <text x="415" y="213" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Single-Digit MS Access</text>
        <text x="415" y="228" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Auto-Scaling Capacity</text>

        {/* Downward routing lines */}
        <line x1="300" y1="115" x2="125" y2="165" stroke={strokeColor} />
        <line x1="300" y1="115" x2="300" y2="165" stroke={strokeColor} />
        <line x1="490" y1="115" x2="480" y2="165" stroke={strokeColor} />

        {/* Bottom Tier: Encrypted Vault & Serverless Resume API */}
        <rect x="50" y="295" width="510" height="55" rx="4" fill={boxBg} stroke={strokeColor} strokeDasharray="3 3" />
        <text x="70" y="323" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.12em" fontWeight="600">HIGH-THROUGHPUT SERVERLESS DATA PERSISTENCE</text>
        <text x="70" y="338" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Amazon S3 Event Vault • AWS IAM Least Privilege • CloudWatch Metrics &amp; Tracing</text>
      </svg>
    );
  }

  if (type === "heeratrack") {
    return (
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
        role="img"
        aria-label="Heeratrack Multi-Tenant Diamond ERP Architecture Diagram"
      >
        {/* Background Grid Lines */}
        <line x1="0" y1="100" x2="600" y2="100" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />
        <line x1="0" y1="200" x2="600" y2="200" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />
        <line x1="0" y1="300" x2="600" y2="300" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />
        <line x1="200" y1="0" x2="200" y2="400" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />
        <line x1="400" y1="0" x2="400" y2="400" stroke={strokeColor} strokeDasharray="3 3" opacity="0.6" />

        {/* Client Layer */}
        <rect x="40" y="40" width="130" height="70" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="55" y="70" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">TENANT PORTAL</text>
        <text x="55" y="88" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Next.js 16 Web App</text>

        {/* Gateway & Auth */}
        <rect x="235" y="40" width="130" height="70" rx="4" fill={boxBg} stroke={highlightStroke} strokeWidth="1.5" />
        <text x="250" y="70" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">TENANT GATEWAY</text>
        <text x="250" y="88" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">JWT + Org Scope</text>

        {/* Ledger Engine */}
        <rect x="430" y="40" width="130" height="70" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="445" y="70" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">STOCK ENGINE</text>
        <text x="445" y="88" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Diamond Lot Ledger</text>

        {/* Connectors Row 1 */}
        <line x1="170" y1="75" x2="235" y2="75" stroke={strokeColor} />
        <polygon points="233,72 238,75 233,78" fill={textColor} />
        <line x1="365" y1="75" x2="430" y2="75" stroke={strokeColor} />
        <polygon points="428,72 433,75 428,78" fill={textColor} />

        {/* Core Processing Services Row 2 */}
        <rect x="130" y="165" width="160" height="85" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="145" y="195" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">PRICING &amp; BARCODE</text>
        <text x="145" y="213" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">FastAPI Calculation Node</text>
        <text x="145" y="230" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8">Sub-5ms Execution</text>

        <rect x="330" y="165" width="160" height="85" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="345" y="195" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="600">INVENTORY SYNC</text>
        <text x="345" y="213" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">PostgreSQL Row Security</text>
        <text x="345" y="230" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Schema Per Customer</text>

        {/* Vertical Links */}
        <line x1="300" y1="110" x2="210" y2="165" stroke={strokeColor} />
        <line x1="300" y1="110" x2="410" y2="165" stroke={strokeColor} />

        {/* Storage Tier Row 3 */}
        <rect x="80" y="295" width="440" height="65" rx="4" fill={boxBg} stroke={strokeColor} strokeDasharray="4 4" />
        <text x="100" y="325" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.12em" fontWeight="600">ENCRYPTED ENTERPRISE DATA TIER</text>
        <text x="100" y="343" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">AWS RDS Multi-AZ • Redis Cache Cluster • S3 Diamond Cert Vault</text>
      </svg>
    );
  }

  if (type === "validexio") {
    return (
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
        role="img"
        aria-label="Validexio Startup Intelligence Vector Search Architecture"
      >
        {/* Central Core: Vector Search Engine */}
        <circle cx="300" cy="200" r="75" fill={boxBg} stroke={highlightStroke} strokeWidth="1.5" />
        <circle cx="300" cy="200" r="95" stroke={strokeColor} strokeDasharray="4 4" opacity="0.6" />
        <text x="300" y="195" textAnchor="middle" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.1em" fontWeight="700">VECTOR EMBEDDING</text>
        <text x="300" y="210" textAnchor="middle" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="8.5" fontWeight="600">Pinecone + OpenAI API</text>
        <text x="300" y="224" textAnchor="middle" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="7.5">1536-Dim Space</text>

        {/* Orbit Node 1: Startup Concept Ingest */}
        <rect x="40" y="80" width="130" height="60" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="55" y="106" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="9" letterSpacing="0.1em" fontWeight="600">FOUNDER INPUT</text>
        <text x="55" y="122" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Idea Parameters</text>

        {/* Orbit Node 2: Competitor Density Engine */}
        <rect x="430" y="80" width="130" height="60" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="445" y="106" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="9" letterSpacing="0.1em" fontWeight="600">COMPETITOR CRAWLER</text>
        <text x="445" y="122" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Market Data Scraping</text>

        {/* Orbit Node 3: Scoring & Financials */}
        <rect x="40" y="260" width="130" height="60" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="55" y="286" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="9" letterSpacing="0.1em" fontWeight="600">SCORE ENGINE</text>
        <text x="55" y="302" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Async Analysis</text>

        {/* Orbit Node 4: Intelligence Report */}
        <rect x="430" y="260" width="130" height="60" rx="4" fill={boxBg} stroke={strokeColor} />
        <text x="445" y="286" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="9" letterSpacing="0.1em" fontWeight="600">REPORT GENERATOR</text>
        <text x="445" y="302" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">PDF &amp; Visual Matrix</text>

        {/* Rays connecting to center */}
        <line x1="170" y1="110" x2="230" y2="175" stroke={strokeColor} />
        <line x1="430" y1="110" x2="370" y2="175" stroke={strokeColor} />
        <line x1="170" y1="290" x2="230" y2="225" stroke={strokeColor} />
        <line x1="430" y1="290" x2="370" y2="225" stroke={strokeColor} />
      </svg>
    );
  }

  // aws-cloud (Default)
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
      role="img"
      aria-label="AWS Multi-Region Zero-Downtime Infrastructure Topology"
    >
      {/* Route53 Global DNS */}
      <rect x="210" y="30" width="180" height="50" rx="4" fill={boxBg} stroke={highlightStroke} strokeWidth="1.5" />
      <text x="235" y="55" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="10" letterSpacing="0.12em" fontWeight="600">ROUTE 53 GLOBAL DNS</text>
      <text x="235" y="70" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8">Latency &amp; Health Failover</text>

      {/* Region 1 Box (ap-south-1 Mumbai) */}
      <rect x="40" y="120" width="240" height="180" rx="4" fill={boxBg} stroke={strokeColor} strokeDasharray="3 3" />
      <text x="55" y="142" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="9" letterSpacing="0.14em" fontWeight="700">REGION A • AP-SOUTH-1 (PRIMARY)</text>

      <rect x="55" y="160" width="210" height="40" rx="3" fill={isDark ? "#22211F" : "#F4F1EA"} stroke={strokeColor} />
      <text x="70" y="185" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Application Load Balancer</text>

      <rect x="55" y="210" width="210" height="40" rx="3" fill={isDark ? "#22211F" : "#F4F1EA"} stroke={strokeColor} />
      <text x="70" y="235" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="8.5">ECS Fargate Cluster (Autoscale)</text>

      <rect x="55" y="260" width="210" height="30" rx="3" fill={isDark ? "#22211F" : "#F4F1EA"} stroke={strokeColor} />
      <text x="70" y="280" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="8">Aurora Postgres Multi-AZ</text>

      {/* Region 2 Box (us-east-1 N. Virginia) */}
      <rect x="320" y="120" width="240" height="180" rx="4" fill={boxBg} stroke={strokeColor} strokeDasharray="3 3" />
      <text x="335" y="142" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="9" letterSpacing="0.14em" fontWeight="700">REGION B • US-EAST-1 (SECONDARY)</text>

      <rect x="335" y="160" width="210" height="40" rx="3" fill={isDark ? "#22211F" : "#F4F1EA"} stroke={strokeColor} />
      <text x="350" y="185" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Application Load Balancer</text>

      <rect x="335" y="210" width="210" height="40" rx="3" fill={isDark ? "#22211F" : "#F4F1EA"} stroke={strokeColor} />
      <text x="350" y="235" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="8.5">ECS Fargate Cluster (Autoscale)</text>

      <rect x="335" y="260" width="210" height="30" rx="3" fill={isDark ? "#22211F" : "#F4F1EA"} stroke={strokeColor} />
      <text x="350" y="280" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="8">Aurora Global Database Replica</text>

      {/* Inter-region link */}
      <line x1="265" y1="275" x2="335" y2="275" stroke={highlightStroke} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="278" y="268" fill={highlightStroke} fontFamily="var(--font-mono, monospace)" fontSize="7">Global Sync</text>

      {/* Route 53 to ALBs */}
      <line x1="260" y1="80" x2="160" y2="160" stroke={strokeColor} />
      <line x1="340" y1="80" x2="440" y2="160" stroke={strokeColor} />

      {/* Automation Footer Bar */}
      <rect x="40" y="325" width="520" height="45" rx="4" fill={boxBg} stroke={strokeColor} />
      <text x="60" y="352" fill={textColor} fontFamily="var(--font-mono, monospace)" fontSize="9" letterSpacing="0.14em" fontWeight="600">CI/CD &amp; OBSERVABILITY:</text>
      <text x="210" y="352" fill={mutedText} fontFamily="var(--font-mono, monospace)" fontSize="8.5">Terraform Modules • GitHub Actions Blue/Green • CloudWatch &amp; Prometheus</text>
    </svg>
  );
}
