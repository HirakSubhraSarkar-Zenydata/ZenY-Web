import {
  ServiceCard,
  Industry,
  Insight,
  Stat,
  HeroSlide,
  CaseStudy,
  Advisor,
  LeadershipMember,
} from "./types";

// export const HERO_SLIDES: HeroSlide[] = [
//   {
//     id: 1,
//     type: 'image',
//     url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
//     badge: 'Digital Ecosystems',
//     title: 'Hyperscale Infrastructure',
//     subtitle: '',
//     cta: 'Explore Solutions'
//   },
//   {
//     id: 2,
//     type: 'image',
//     url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
//     badge: 'Decision Science',
//     title: 'Cognitive Intelligence',
//     subtitle: '',
//     cta: 'View Frameworks'
//   },
//   {
//     id: 3,
//     type: 'video',
//     url: 'https://cdn.pixabay.com/video/2021/04/12/70860-537482552_large.mp4',
//     badge: 'Real-time Flow',
//     title: 'Active Data Fabrics',
//     subtitle: '',
//     cta: 'Secure Enterprise'
//   }
// ];

export const HERO_SLIDES: HeroSlide[] = [
  // {
  //   id: 1,
  //   type: "image",
  //   url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  //   badge: "Digital Ecosystems",
  //   title: "Hyperscale Infrastructure",
  //   subtitle: "",
  //   cta: "Explore Solutions",
  // },
  {
    id: 3,
    type: "video",
    url: "https://res.cloudinary.com/djqf7eivl/video/upload/v1770892161/3191573-uhd_3840_2160_25fps_tr1wbt.mp4", // 👈 paste your video link here
    badge: "Real-time Flow",
    title: "Active Data Fabrics",
    subtitle: "",
    cta: "Secure Enterprise",
  },
  // {
  //   id: 2,
  //   type: "image",
  //   url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  //   badge: "Decision Science",
  //   title: "Cognitive Intelligence",
  //   subtitle: "",
  //   cta: "View Frameworks",
  // },
  {
    id: 3,
    type: "video",
    url: "https://res.cloudinary.com/djqf7eivl/video/upload/v1769684085/18069700-uhd_2160_3840_24fps_d5egrq.mp4", // 👈 paste your video link here
    badge: "Real-time Flow",
    title: "Active Data Fabrics",
    subtitle: "",
    cta: "Secure Enterprise",
  },
  /* ✅ VIDEO HERO SLIDE */
  {
    id: 3,
    type: "video",
    url: "https://res.cloudinary.com/djqf7eivl/video/upload/v1771497907/3141208-uhd_3840_2160_25fps_vp3udl.mp4", // 👈 paste your video link here
    badge: "Real-time Flow",
    title: "Active Data Fabrics",
    subtitle: "",
    cta: "Secure Enterprise",
  },
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Nityananda Nath",
    role: "Director, Zenydata Technologies",
    image:
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1771619204/Final_director_q8igqn.png",
    quote:
      "At ZenyData, we believe in empowering people through data-driven simplicity. Our mission is to bring clarity to complexity. We are committed to transforming raw data into meaningful insights that drive better decisions. Innovation and transparency are at the core of everything we do. By bridging the gap between technology and human understanding, we strive to make data work for everyone — simply, securely, and smartly.",
  },
];

export const ADVISORS: Advisor[] = [
  {
    name: "Avishek Mitra",
    role: "Global Advisor",
    image:
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1771493703/Avi_Sir_zptqhn.png",
    bio: "A visionary data strategist with over two decades of experience delivering large-scale data initiatives for Fortune 500 companies. Avishek provides strategic leadership across enterprise data platforms, analytics modernization, and AI-driven transformation. A hands-on data leader with deep consulting experience across multiple industries, he specializes in retail, FMCG, and banking, driving measurable business impact through advanced data architecture, engineering, and insights.",
  },
];

export const SERVICES: ServiceCard[] = [
  {
    id: "data-product",
    title: "AI & Data Engineering",
    description:
      "Shifting from data storage to value creation by treating datasets as high-quality, reusable, and interoperable enterprise assets.",
    longDescription:
      "We transform your data from a passive byproduct into an active revenue-driving asset. By applying product management principles to data, we ensure high discoverability, trust, and usability across your entire organization.",
    icon: "https://img.icons8.com/ios-filled/50/2E1CFF/database.png",
    image:
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1770891672/pexels-mikael-blomkvist-6476589_hatmtv.jpg",
    link: "#",
    features: [
      "Domain-driven ownership",
      "Automated quality SLAs",
      "Self-service data catalogs",
      "Standardized metadata fabrics",
    ],
    methodology: [
      {
        step: "Value Mapping",
        detail:
          "Identifying high-impact data domains within your business logic.",
      },
      {
        step: "Protocol Design",
        detail:
          "Establishing universal standards for data exchange and access.",
      },
      {
        step: "Lifecycle Governance",
        detail: "Implementing continuous validation and versioning control.",
      },
    ],
  },
  {
    id: "ai-ml-ops",
    title: "AI & ML Ops",
    description:
      "Enterprise-grade machine learning models deployed with full governance, automated retraining, and lifecycle monitoring.",
    longDescription:
      "Bridge the gap between experimental data science and production-grade software engineering. We build the pipelines that make AI reliable, scalable, and explainable.",
    icon: "https://img.icons8.com/ios-filled/50/2E1CFF/artificial-intelligence.png",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    features: [
      "Feature Store management",
      "Automated drift detection",
      "CI/CD for ML models",
      "Explainable AI (XAI) frameworks",
    ],
    methodology: [
      {
        step: "Feature Engineering",
        detail: "Designing robust data transformations for model consistency.",
      },
      {
        step: "Orchestration",
        detail: "Automating the training, testing, and deployment cycles.",
      },
      {
        step: "Observability",
        detail: "Monitoring real-world performance to trigger auto-retraining.",
      },
    ],
  },
  {
    id: "ai-data-platform",
    title: "AI Powered Data Platform",
    description:
      "Highly scalable, cloud-native ecosystems built on hybrid foundations to unify diverse information streams.",
    longDescription:
      "Architecting modern data warehouses and lakes that serve as the single source of truth for your global operations. We specialize in hybrid and multi-cloud strategies.",
    icon: "https://img.icons8.com/ios-filled/50/2E1CFF/cloud-computing.png",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    features: [
      "Serverless scaling",
      "Zero-copy cloning",
      "Fine-grained access control",
      "Multi-region replication",
    ],
    methodology: [
      {
        step: "Cloud Audit",
        detail: "Evaluating existing infrastructure for migration readiness.",
      },
      {
        step: "Fabric Setup",
        detail:
          "Building the core storage and compute layers with Infrastructure-as-Code.",
      },
      {
        step: "Optimization",
        detail:
          "Continuously tuning performance to reduce egress and compute costs.",
      },
    ],
  },
  {
    id: "data-digital-integration",
    title: "Data & Digital Integration",
    description:
      "Unifying siloed infrastructures through intelligent API layers and microservices to build a resilient backbone.",
    longDescription:
      "Eliminate operational friction by connecting your most critical systems. We build high-concurrency middleware that ensures data flows wherever it is needed, instantly.",
    icon: "https://img.icons8.com/ios-filled/50/2E1CFF/workflow.png",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "#",
    features: [
      "Event-driven architectures",
      "API Management (APIM)",
      "Legacy modernization",
      "Real-time sync engines",
    ],
    methodology: [
      {
        step: "Silo Analysis",
        detail: "Mapping data dependencies across isolated business units.",
      },
      {
        step: "Interlinkage",
        detail: "Developing robust API gateways and message brokers.",
      },
      {
        step: "Stress Testing",
        detail:
          "Simulating high-load scenarios to guarantee system resilience.",
      },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Building the engines of digital transformation with custom applications tailored to complex enterprise logic.",
    longDescription:
      "We engineer software that doesn't just work—it inspires. Our focus is on high-performance backends and intuitive frontends built on the most modern tech stacks available.",
    icon: "https://img.icons8.com/ios-filled/50/2E1CFF/source-code.png",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    features: [
      "Microservices architecture",
      "Kubernetes native",
      "Post-quantum security",
      "Performance optimization",
    ],
    methodology: [
      {
        step: "UX Strategy",
        detail: "Designing workflows that maximize user productivity and joy.",
      },
      {
        step: "Concurrent Dev",
        detail: "Parallelizing backend and frontend work for rapid delivery.",
      },
      {
        step: "Security Audit",
        detail: "Hardening every line of code against sophisticated threats.",
      },
    ],
  },
  {
    id: "report-data-automation",
    title: "Report & Data Automation",
    description:
      "Designing automated reporting ecosystems that transform raw data into reliable, real-time business intelligence.",
    longDescription:
      "Modern businesses generate massive volumes of data — but manual reporting slows decision-making. We build end-to-end data automation pipelines that collect, transform, validate, and visualize data seamlessly. From scheduled executive reports to real-time dashboards, we ensure accuracy, scalability, and zero manual intervention.",
    icon: "https://img.icons8.com/ios-filled/50/2E1CFF/mind-map.png",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    features: [
      "Automated ETL/ELT pipelines",
      "Scheduled & real-time reporting",
      "Self-service BI dashboards",
      "Data validation & anomaly detection",
    ],
    methodology: [
      {
        step: "Data Integration",
        detail:
          "Connecting multiple data sources (databases, APIs, CSVs, cloud storage) into a unified pipeline.",
      },
      {
        step: "Transformation & Automation",
        detail:
          "Cleaning, aggregating, and transforming data with automated workflows and scheduling.",
      },
      {
        step: "Reporting & Monitoring",
        detail:
          "Deploying dashboards and automated reports with built-in alerts and performance tracking.",
      },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "global-logistics-ai",
    client: "Global Logistics Leader",
    title: "Predictive Supply Chain Orchestration",
    metric: "42% Reduction in Transit Latency",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description:
      "Architecting an AI-driven routing engine for a fleet of 14,000 vessels, integrating real-time weather, port congestion, and geopolitical data.",
    challenge:
      "Managing global shipping routes in a volatile environment where delays cost millions per hour.",
    solution:
      "A decentralized AI fabric that processes petabytes of telemetry to dynamically reroute vessels.",
    result:
      "42% reduction in idle time at ports and $1.2B in operational savings annually.",
  },
  {
    id: "fintech-security",
    client: "Tier 1 Financial Institution",
    title: "Post-Quantum Security Framework",
    metric: "Zero Breach Record over 24 Months",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    description:
      "Modernizing a legacy core banking system with decentralized encryption protocols and advanced behavioral threat detection.",
    challenge:
      "Exposure to emerging quantum threats and increasing frequency of sophisticated phishing attacks.",
    solution:
      "Lattice-based cryptography and a biometric-first authentication layer for all internal transactions.",
    result:
      "Achieved the highest regulatory security rating and zero data exfiltration events since deployment.",
  },
  {
    id: "energy-data-fabric",
    client: "Renewable Energy Grid",
    title: "Next-Gen Data Fabric for Smart Grids",
    metric: "85% Improvement in Load Accuracy",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description:
      "Developing a real-time data integration layer that unifies solar, wind, and storage telemetry across 4 continents.",
    challenge:
      "Intermittent power sources making grid stability difficult to predict.",
    solution:
      "A real-time data fabric connecting 1M+ IoT sensors to a centralized forecasting engine.",
    result:
      "85% more accurate load balancing and 30% reduction in backup fuel consumption.",
  },
];

// export const INSIGHTS: Insight[] = [
//   {
//     id: "supply-chain-graph",
//     category: "DATA WHITE PAPER",
//     title: "Optimizing Graph Databases for Supply Chain Resilience",
//     author: "Hirak Sarkar",
//     date: "Jan 20, 2026",
//     readTime: "12 min",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
//     content:
//       "Supply chains are fundamentally graphs. Traditional relational databases struggle to manage the deeply nested dependencies found in modern global logistics. This paper explores how Neo4j and AWS Neptune can be used to map tier-N supplier risks in real-time...",
//   },
//   {
//     id: "rag-search-enterprise",
//     category: "AI RESEARCH",
//     title: "The Role of RAG Architecture in Enterprise Search",
//     author: "Arka Raha",
//     date: "Jan 18, 2026",
//     readTime: "8 min",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
//     content:
//       "Retrieval-Augmented Generation (RAG) is transforming how employees interact with company knowledge. By grounding LLMs in secure, internal documents, we eliminate hallucinations and provide cited, verifiable answers...",
//   },
//   {
//     id: "cloud-spend-optimization",
//     category: "CASE STUDY",
//     title: "Reducing Cloud Spend by 40% for Retail Giants",
//     author: "Abhratanu Roy",
//     date: "Jan 15, 2026",
//     readTime: "10 min",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     content:
//       "Waste in the cloud is at an all-time high. Our latest research into FinOps methodologies shows that automated rightsizing and spot-instance orchestration can slash OpEx without impacting service reliability...",
//   },
//   {
//     id: "ai-driven-finops",
//     category: "CASE STUDY",
//     title: "AI-Driven FinOps Use-Case List for the Data Services Industry",
//     author: "Varun Mendiratta",
//     date: "Feb 20, 2026",
//     readTime: "10 min",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     content:
//       "AI-enabled FinOps use cases tailored to Data Services organizations that manage large datasets, ETL/ELT pipelines, warehouses, multi-cloud platforms, and BI workloads...",
//   },
// ];

export const INSIGHTS: Insight[] = [
  {
    id: "supply-chain-graph",
    category: "DATA WHITE PAPER",
    title: "Optimizing Graph Databases for Supply Chain Resilience",
    author: "Hirak Sarkar",
    date: "Jan 20, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",

    intro:
      "Supply chains are fundamentally graphs. Traditional relational databases struggle to manage the deeply nested dependencies found in modern global logistics. This paper explores how Neo4j and AWS Neptune can be used to map tier-N supplier risks in real-time...",

    sections: [
      {
        heading: "I. Supply Chains as Graphs",
        paragraphs: [
          "Modern supply chains consist of suppliers, manufacturers, logistics providers, and distributors connected through thousands of dynamic relationships.",
          "Graph databases model these connections natively, allowing organizations to represent real-world dependencies without costly joins or schema rigidity.",
        ],
      },
      {
        heading: "II. Real-Time Risk Propagation",
        paragraphs: [
          "Disruptions at a single tier-N supplier can propagate across the entire network within hours.",
          "By using graph traversal and event-driven ingestion, enterprises can identify upstream and downstream risks in near real-time.",
        ],
      },
    ],
  },

  {
    id: "rag-search-enterprise",
    category: "AI RESEARCH",
    title: "The Role of RAG Architecture in Enterprise Search",
    author: "Arka Raha",
    date: "Jan 18, 2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1771616601/pexels-tima-miroshnichenko-5453821_iut5ml.jpg",

    intro:
      "Retrieval-Augmented Generation (RAG) is transforming how employees interact with company knowledge. By grounding LLMs in secure, internal documents, we eliminate hallucinations and provide cited, verifiable answers...",

    sections: [
      {
        heading: "I. Limitations of Traditional Enterprise Search",
        paragraphs: [
          "Keyword-based search systems struggle with semantic understanding and context awareness.",
          "As internal documentation grows, employees spend more time searching for answers than acting on them.",
        ],
      },
      {
        heading: "II. Retrieval-Augmented Generation",
        paragraphs: [
          "RAG introduces a deterministic retrieval layer between LLMs and enterprise data sources.",
          "By grounding responses in verified documents, organizations eliminate hallucinations and improve answer reliability.",
        ],
      },
    ],
  },

  {
    id: "cloud-spend-optimization",
    category: "CASE STUDY",
    title: "Reducing Cloud Spend by 40% for Retail Giants",
    author: "Abhratanu Roy",
    date: "Jan 15, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",

    intro:
      "Waste in the cloud is at an all-time high. Our latest research into FinOps methodologies shows that automated rightsizing and spot-instance orchestration can slash OpEx without impacting service reliability...",

    sections: [
      {
        heading: "I. Identifying Cloud Waste",
        paragraphs: [
          "Over-provisioned compute, idle storage, and unused managed services are the primary drivers of cloud inefficiency.",
          "Lack of visibility across teams prevents organizations from acting on cost anomalies early.",
        ],
      },
      {
        heading: "II. Automated Rightsizing and Optimization",
        paragraphs: [
          "By implementing automated rightsizing and workload scheduling, the organization reduced infrastructure costs by 40%.",
          "Spot-instance orchestration enabled additional savings without impacting application reliability.",
        ],
      },
    ],
  },

  {
    id: "ai-driven-finops",
    category: "CASE STUDY",
    title: "AI-Driven FinOps Use-Case List for the Data Services Industry",
    author: "Varun Mendiratta",
    date: "Feb 20, 2026",
    readTime: "15 min",
    image:
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1771616601/pexels-karola-g-4968391_uta5ha.jpg",

    intro:
      "This document outlines practical, AI-enabled FinOps use cases tailored to Data Services organizations that manage large datasets, ETL/ELT pipelines, warehouses, multi-cloud platforms, and BI workloads. Each use case highlights what AI does, why it matters, and typical outcomes.",
    sections: [
      {
        heading: "1. Intelligent Cost Forecasting Across ETL/ELT Pipelines",
        paragraphs: [
          "What AI Does:",
          "• Apply ML/GenAI forecasters (e.g., LSTM/regression) to historical ingestion volumes, pipeline runtimes, and storage patterns to predict future cloud costs.",
          "• Incorporate seasonality (month-end peaks, campaign periods) and business drivers (product launches, regulatory runs).",

          "Why It Matters:",
          "• Improves budget accuracy and capacity planning for daily/weekly batches and Fabric/Synapse workloads.",
          "• Reduces last-minute overprovisioning and spend variance versus plan.",

          "Typical Outcomes:",
          "• Higher forecast accuracy; earlier alerts on expected spikes; improved CFO confidence in budgets.",
        ],
      },

      {
        heading:
          "2. Automated Rightsizing of Data Warehouses & Compute Clusters",
        paragraphs: [
          "What AI Does:",
          "• Continuously analyze query performance, CPU/memory, and idle patterns to autoscale or pause clusters.",
          "• Recommend SKU changes and schedule-based downsizing after batch windows.",

          "Why It Matters:",
          "• Prevents persistent overprovisioning without sacrificing SLAs.",
          "• Frees engineers from manual capacity tuning.",

          "Typical Outcomes:",
          "• 20–30% compute cost reduction with maintained performance.",
        ],
      },

      {
        heading:
          "3. Real-Time Anomaly Detection in Cloud Spend for Data Pipelines",
        paragraphs: [
          "What AI Does:",
          "• Detect sudden cost spikes from pipeline loops, reruns, exploding datasets, or misconfigured autoscale.",
          "• Trigger notifications and automated rollbacks or job throttling.",

          "Why It Matters:",
          "• Catches runaway costs within minutes, not weeks.",
          "• Reduces bill shocks and billing disputes.",

          "Typical Outcomes:",
          "• Lower variance to budget; fewer incident post-mortems tied to cost.",
        ],
      },

      {
        heading: "4. Storage Tier Optimization for Data Lakes",
        paragraphs: [
          "What AI Does:",
          "• Profile data access frequency and recommend tier changes (hot → cool/archival).",
          "• Automate lifecycle policies with AI-curated rules.",

          "Why It Matters:",
          "• Balances performance with cost across parquet/Delta repositories.",
          "• Reduces long-term storage TCO without impacting critical workloads.",

          "Typical Outcomes:",
          "• Material storage savings; faster queries on optimized datasets.",
        ],
      },

      {
        heading:
          "5. Multi-Cloud Cost Aggregation for Distributed Data Platforms",
        paragraphs: [
          "What AI Does:",
          "• Unify cost signals from Azure, AWS, and GCP into a single FinOps model.",
          "• Provide domain-level views and showback/chargeback models.",

          "Why It Matters:",
          "• Improves accountability across federated teams.",
          "• Enables strategic placement decisions.",

          "Typical Outcomes:",
          "• Transparency; better vendor negotiations; optimized workload placement.",
        ],
      },

      {
        heading: "6. AI-Driven Query Optimization Recommendations",
        paragraphs: [
          "What AI Does:",
          "• Analyze query plans to suggest partitioning, indexing, caching, and materialized views.",
          "• Quantify expected cost impact per recommendation.",

          "Why It Matters:",
          "• Reduces compute bursts and lowers analytics cost.",
          "• Improves performance and user experience.",

          "Typical Outcomes:",
          "• Lower cost per GB scanned; improved throughput.",
        ],
      },

      {
        heading: "7. Automatic FinOps Governance Guardrails",
        paragraphs: [
          "What AI Does:",
          "• Enforce budget-aware deployment checks and mandatory tagging.",
          "• Block releases exceeding spend thresholds.",

          "Why It Matters:",
          "• Prevents cost regressions from reaching production.",
          "• Institutionalizes financial accountability.",

          "Typical Outcomes:",
          "• Fewer cost incidents; predictable run-rate spend.",
        ],
      },

      {
        heading: "8. Data Lineage–Driven Cost Attribution",
        paragraphs: [
          "What AI Does:",
          "• Map lineage from ingestion through serving layers.",
          "• Surface cost per data product refresh or per consumer query.",

          "Why It Matters:",
          "• Supports Data Mesh operating models.",
          "• Improves ROI-based prioritization.",

          "Typical Outcomes:",
          "• Accurate chargeback; clearer business visibility.",
        ],
      },

      {
        heading: "9. Proactive Pipeline Scaling Recommendations",
        paragraphs: [
          "What AI Does:",
          "• Predict compute needs before execution and allocate just-in-time resources.",
          "• Use spot/preemptible compute where viable.",

          "Why It Matters:",
          "• Avoids over- and underprovisioning.",
          "• Improves SLA adherence.",

          "Typical Outcomes:",
          "• Higher success rates; lower peak spend.",
        ],
      },

      {
        heading: "10. GenAI Assistants for Cost Insights & Explanation",
        paragraphs: [
          "What AI Does:",
          "• Provide natural-language Q&A over cost telemetry.",
          "• Explain spikes and suggest next-best optimization actions.",

          "Why It Matters:",
          "• Democratizes FinOps insights across teams.",
          "• Reduces analysis time from hours to minutes.",

          "Typical Outcomes:",
          "• Faster decisions; improved stakeholder trust.",
        ],
      },

      {
        heading: "11. AI-Enhanced Chargeback / Showback Models",
        paragraphs: [
          "What AI Does:",
          "• Automate cost allocation per pipeline, dataset, or domain.",
          "• Normalize cost per TB processed or per query.",

          "Why It Matters:",
          "• Reduces disputes and subjective allocations.",
          "• Encourages responsible consumption.",

          "Typical Outcomes:",
          "• Fair internal billing; improved efficiency behavior.",
        ],
      },

      {
        heading: "12. Holistic FinOps Maturity Acceleration",
        paragraphs: [
          "What AI Does:",
          "• Progress from reactive reporting to predictive optimization.",
          "• Continuously refine governance policies using telemetry learning.",

          "Why It Matters:",
          "• Shortens time-to-value from FinOps programs.",
          "• Positions FinOps as a strategic capability.",

          "Typical Outcomes:",
          "• Sustained savings; improved agility; stronger budget predictability.",
        ],
      },

      {
        heading: "Summary",
        paragraphs: [
          "• AI transforms FinOps from reactive reporting to predictive automated optimization.",
          "• Key levers: forecasting, anomaly detection, rightsizing, lineage attribution, GenAI insights.",
          "• Expected impact: 20–30%+ savings on compute/storage with stronger governance.",
        ],
      },
    ],
  },

  {
    id: "prompt-engineering-enterprise",
    category: "AI RESEARCH",
    title:
      "How Prompt Engineering Can Power the Next Generation of Enterprise Solutions",
    author: "Ipsita Sain",
    date: "Feb 21, 2026",
    readTime: "12 min",
    image:
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1771616601/pexels-bertellifotografia-16027821_hbuywc.jpg",

    intro:
      "As enterprises accelerate digital transformation, Prompt Engineering is emerging as a foundational capability that transforms AI models into reliable, scalable, and enterprise-ready collaborators.",

    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "As enterprises accelerate their digital transformation journeys, the conversation is no longer about whether to adopt Artificial Intelligence (AI), but how to operationalize it in a way that delivers real business value.",
          "While investments in AI models, cloud platforms, and data infrastructure continue to grow, a critical enabler of enterprise-scale AI success is rapidly emerging at the forefront: Prompt Engineering.",
          "Prompt Engineering is the discipline of designing and structuring inputs that guide AI models—particularly Large Language Models (LLMs)—to generate accurate, relevant, and context-aware outputs.",
          "In enterprise environments, where precision, compliance, scalability, and integration are essential, effective prompt design can be the difference between an AI experiment and a production-grade intelligent solution.",
        ],
      },

      {
        heading: "Why Prompt Engineering Matters for Enterprises",
        paragraphs: [
          "Traditional software systems operate on explicit rules and structured logic. AI systems, on the other hand, interpret natural language instructions to perform tasks such as data analysis, document processing, automation, or customer interaction.",
          "Prompt Engineering acts as the bridge between enterprise intent and AI execution.",

          "With well-crafted prompts, organizations can:",
          "• Translate business requirements into machine-understandable instructions.",
          "• Standardize AI-driven decision-making across departments.",
          "• Reduce manual intervention in data-heavy workflows.",
          "• Improve the quality and consistency of AI-generated insights.",
          "• Accelerate deployment of AI-powered automation at scale.",

          "In essence, Prompt Engineering transforms AI from a passive tool into an enterprise-ready digital collaborator.",
        ],
      },

      {
        heading: "Enabling AI-Powered Data Platforms",
        paragraphs: [
          "Modern enterprises are investing in AI-powered data platforms to unify structured and unstructured data across business units.",
          "Prompt Engineering enhances these platforms by enabling intelligent querying, automated summarization, and contextual analysis of enterprise data.",

          "For example:",
          "• Business users can retrieve insights from data warehouses using natural language.",
          "• AI systems can generate real-time performance reports from integrated datasets.",
          "• Complex analytics workflows can be executed through conversational interfaces.",

          "This capability democratizes data access while maintaining governance, allowing stakeholders to make faster, more informed decisions without deep technical expertise.",
        ],
      },

      {
        heading: "Driving Data Engineering and Integration at Scale",
        paragraphs: [
          "In large organizations, data resides across disparate systems—from legacy databases to modern cloud environments.",
          "Integrating these data sources often involves repetitive transformation, mapping, and validation tasks.",

          "Prompt-driven AI workflows can:",
          "• Automate schema mapping between systems.",
          "• Generate ETL pipeline logic dynamically.",
          "• Validate data quality using contextual business rules.",
          "• Summarize integration outcomes for audit and compliance.",

          "By embedding Prompt Engineering into data engineering pipelines, enterprises can significantly reduce development effort while increasing agility in responding to evolving business requirements.",
        ],
      },

      {
        heading: "Transforming Software Development and Automation",
        paragraphs: [
          "AI-assisted development is reshaping how enterprise applications are built and maintained.",
          "Prompt Engineering enables development teams to:",

          "• Generate code snippets aligned with business logic.",
          "• Create automated documentation for APIs and services.",
          "• Perform intelligent testing and debugging.",
          "• Automate routine maintenance tasks.",

          "Similarly, enterprise automation platforms can leverage prompt-driven AI to orchestrate workflows across finance, HR, customer service, and operations—resulting in measurable productivity gains.",
        ],
      },

      {
        heading: "Elevating Data Visualization and Decision Intelligence",
        paragraphs: [
          "Data visualization tools are only as powerful as the insights they convey.",
          "Prompt Engineering introduces a new layer of intelligence by allowing users to interact with dashboards using natural language queries such as:",

          "• “Show quarterly revenue trends by region.”",
          "• “Identify anomalies in operational performance.”",
          "• “Compare customer acquisition costs across channels.”",

          "AI models can interpret these prompts to generate dynamic visualizations and narrative summaries, empowering leadership teams with actionable insights in real time.",
        ],
      },

      {
        heading: "From Capability to Competitive Advantage",
        paragraphs: [
          "As enterprises continue to adopt AI across mission-critical processes, Prompt Engineering will play a foundational role in ensuring these systems are reliable, scalable, and aligned with organizational goals.",

          "By integrating Prompt Engineering into:",
          "• AI-powered data platforms.",
          "• Data and digital integration frameworks.",
          "• Software development lifecycles.",
          "• Automation pipelines.",
          "• Visualization and reporting tools.",

          "Organizations can unlock the full potential of enterprise AI—transforming fragmented digital initiatives into cohesive, intelligent ecosystems.",
        ],
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "Prompt Engineering is not just a technical technique; it is a strategic capability that enables enterprises to harness AI with precision and purpose.",
          "For organizations seeking to lead in a data-driven economy, investing in Prompt Engineering today can pave the way for the next generation of scalable, intelligent enterprise solutions.",
          "As IT service and consulting providers continue to innovate across AI, data engineering, and digital integration, Prompt Engineering stands poised to become the cornerstone of enterprise transformation in the years ahead.",
        ],
      },
    ],
  },

  {
    id: "agentic-ai-mcp-enterprise",
    category: "AI STRATEGY",
    title: "The Rise of Agentic AI: Beyond Chatbots to Autonomous Action",
    author: "Arka Raha",
    date: "Feb 21, 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",

    intro:
      "Generative AI was the beginning. Agentic AI is the transformation. By combining reasoning-driven AI agents with the Model Context Protocol (MCP), enterprises can evolve from passive AI assistance to autonomous, goal-driven execution across mission-critical systems.",

    sections: [
      {
        heading: "From Generative AI to Agentic AI",
        paragraphs: [
          "For the past two years, enterprise AI initiatives have centered around Generative AI—summarizing documents, drafting emails, and assisting with content creation. While valuable, these capabilities represent only the surface layer of AI transformation.",
          "The next frontier is Agentic AI.",
          "At Zenydata, we define Agentic AI as the evolution from AI that advises to AI that acts. Instead of merely generating outputs, Agentic systems reason, plan, and execute tasks autonomously across enterprise systems.",
          "This shift bridges the gap between AI’s cognitive intelligence and the operational muscle of the enterprise.",
        ],
      },

      {
        heading: "Why Enterprises Need Agents, Not Just Models",
        paragraphs: [
          "Traditional Robotic Process Automation (RPA) is deterministic and fragile. It follows fixed scripts and fails when interfaces change or exceptions arise.",
          "Agentic AI introduces reasoning, memory, and adaptive planning into enterprise automation.",

          "How Agentic AI transforms the enterprise:",
          "• From Linear to Adaptive Workflows: Agents understand high-level goals (e.g., 'Optimize the Q3 supply chain') and determine dynamic execution paths—even when data is incomplete.",
          "• Autonomous Exception Handling: Agents diagnose failures, retrieve missing context, and attempt corrective action before escalating to humans.",
          "• Continuous Optimization: Agents learn from historical outcomes to refine decision-making over time.",
          "• True Scalability: Agents provide 24/7 cognitive capacity without proportional headcount expansion.",
        ],
      },

      {
        heading: "The Integration Barrier: The Enterprise ‘Integration Tax’",
        paragraphs: [
          "Historically, the biggest constraint on Agentic AI adoption has been integration.",
          "Granting AI systems secure access to ERP, CRM, HRMS, and financial systems typically requires months of custom API development, compliance checks, and data mapping.",
          "This integration tax slows innovation and limits scalability.",
        ],
      },

      {
        heading: "The Model Context Protocol (MCP) Solution",
        paragraphs: [
          "To overcome this barrier, Zenydata pioneers the use of the Model Context Protocol (MCP).",
          "MCP is an open integration standard that enables AI agents to securely connect to enterprise data systems using a universal, context-aware interface.",
          "Rather than building custom connectors for each system, MCP provides plug-and-play interoperability across platforms.",

          "What MCP enables:",
          "• Secure connectivity to SAP, Oracle, Salesforce, SQL databases, and cloud-native services.",
          "• Context-aware reasoning by supplying structured and unstructured enterprise data in standardized format.",
          "• Governance-aligned access control through policy-driven permissions.",
          "• Reduced integration time from months to weeks.",
        ],
      },

      {
        heading: "Case Study: Agentic ERP for Global Operations",
        paragraphs: [
          "We recently implemented an Agentic Swarm architecture for a global enterprise ERP ecosystem, leveraging MCP to unify operational silos.",

          "The Challenge:",
          "The client experienced manual reconciliation issues between procurement systems and financial ledgers.",
          "A 12% discrepancy in inventory reporting caused delayed shipments and increased logistics costs.",

          "Our Implementation:",
          "We deployed a multi-agent system with role specialization:",

          "1. Inventory Agent:",
          "• Monitored real-time stock levels across three global warehouses via MCP.",
          "• Predicted restocking needs using demand forecasting models.",

          "2. Logistics Agent:",
          "• Calculated carbon-efficient shipping routes dynamically.",
          "• Optimized vendor selection based on cost, SLA, and compliance.",

          "3. ERP Integration Agent:",
          "• Updated ERP records autonomously via MCP Server.",
          "• Generated purchase orders and tax-compliant invoices.",
          "• Reconciled discrepancies across finance and operations modules.",

          "The Result:",
          "• 65% reduction in manual data entry.",
          "• Zero inventory discrepancies in first 90 days.",
          "• 40% faster procurement cycle.",
          "• Measurable improvement in sustainability metrics.",
        ],
      },

      {
        heading: "Architectural Blueprint for Agentic Enterprises",
        paragraphs: [
          "To scale Agentic AI responsibly, enterprises must adopt an architectural foundation that balances autonomy with governance.",

          "Core components of an Agentic architecture:",
          "• Multi-agent orchestration layer.",
          "• MCP integration gateway.",
          "• Memory layer for contextual continuity.",
          "• Policy enforcement engine for compliance.",
          "• Human-in-the-loop oversight mechanisms.",

          "This architecture ensures that agents operate within defined guardrails while maintaining decision agility.",
        ],
      },

      {
        heading: "Governance, Security, and Risk Management",
        paragraphs: [
          "Autonomous AI requires strong governance frameworks.",
          "MCP-based systems support:",
          "• Role-based access control (RBAC).",
          "• Audit trails for every agent action.",
          "• Encrypted communication between agents and systems.",
          "• Approval thresholds for high-impact financial decisions.",
          "• Real-time anomaly detection in agent behavior.",

          "These safeguards ensure enterprise-grade reliability and regulatory compliance.",
        ],
      },

      {
        heading: "The ROI of Agentic AI",
        paragraphs: [
          "Agentic AI shifts enterprises from reactive operations to proactive orchestration.",
          "Typical measurable outcomes include:",
          "• 30–50% reduction in operational overhead.",
          "• Faster decision cycles across finance and supply chain.",
          "• Improved data accuracy and reduced reconciliation effort.",
          "• Enhanced cross-departmental coordination.",
          "• Sustainable cost optimization through intelligent routing and forecasting.",

          "Beyond efficiency, Agentic AI builds institutional intelligence that compounds over time.",
        ],
      },

      {
        heading: "From System of Record to System of Action",
        paragraphs: [
          "Traditional enterprises are built as Systems of Record—repositories of historical data.",
          "Agentic enterprises evolve into Systems of Action—dynamic ecosystems where AI agents interpret data and execute business logic in real time.",
          "The objective is not workforce replacement, but workforce augmentation.",
          "By embedding MCP-driven agents into core operations, organizations transform siloed platforms into a unified, intelligent organism.",
        ],
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "Agentic AI represents the natural evolution of enterprise intelligence.",
          "While Generative AI improved productivity, Agentic AI unlocks autonomous execution.",
          "With the Model Context Protocol as the integration backbone, enterprises can scale secure, compliant, and adaptive AI systems across global operations.",
          "The future enterprise will not simply store information—it will act on it autonomously.",
          "The transition begins now.",
        ],
      },
    ],
  },
];

export const INDUSTRIES: Industry[] = [
  { name: "Financial Markets", icon: "🏛️" },
  { name: "Bio-Informatics", icon: "🏥" },
  { name: "Global Logistics", icon: "🚢" },
  { name: "Clean Energy", icon: "🔋" },
  { name: "Advanced Robotics", icon: "🤖" },
  { name: "Aerospace", icon: "🚀" },
  { name: "GovTech", icon: "⚖️" },
  { name: "Deep Tech", icon: "💻" },
];

export const STATS: Stat[] = [
  { value: "100+ PB", label: "Data Managed" },
  { value: "40%", label: "Avg Cost Reduction" },
  { value: "24/7", label: "Global Monitoring" },
  { value: "ISO", label: "9001 | 27001 Certified" },
];
