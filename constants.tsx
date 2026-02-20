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
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1771584389/1_diector_vvr4yh.png",
    quote:
      "At ZenyData, we believe in empowering people through data-driven simplicity. Our mission is to bring clarity to complexity. We are committed to transforming raw data into meaningful insights that drive better decisions. Innovation and transparency are at the core of everything we do. By bridging the gap between technology and human understanding, we strive to make data work for everyone — simply, securely, and smartly.",
  },
];

export const ADVISORS: Advisor[] = [
  {
    name: "Avishek Mitra",
    role: "Global Advisor",
    image:
      "https://res.cloudinary.com/djqf7eivl/image/upload/v1771493857/Avi1_o6yeln.png",
    bio: "A visionary strategist with over two decades of experience in driving digital transformation for Fortune 500 companies. Avishek provides strategic guidance on large scale data transformations, a hands on data leader with consulting experience across multiple industries and specializes understanding in retail, fmcg and .",
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
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",

    intro:
      "Supply chains are fundamentally graphs. Traditional relational databases struggle to manage the deeply nested dependencies found in modern global logistics. This paper explores how Neo4j and AWS Neptune can be used to map tier-N supplier risks in real-time...",

    sections: [
      {
        heading: "I. Supply Chains as Graphs",
        paragraphs: [
          "Modern supply chains consist of suppliers, manufacturers, logistics providers, and distributors connected through thousands of dynamic relationships.",
          "Graph databases model these connections natively, allowing organizations to represent real-world dependencies without costly joins or schema rigidity."
        ]
      },
      {
        heading: "II. Real-Time Risk Propagation",
        paragraphs: [
          "Disruptions at a single tier-N supplier can propagate across the entire network within hours.",
          "By using graph traversal and event-driven ingestion, enterprises can identify upstream and downstream risks in near real-time."
        ]
      }
    ]
  },

  {
    id: "rag-search-enterprise",
    category: "AI RESEARCH",
    title: "The Role of RAG Architecture in Enterprise Search",
    author: "Arka Raha",
    date: "Jan 18, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",

    intro:
      "Retrieval-Augmented Generation (RAG) is transforming how employees interact with company knowledge. By grounding LLMs in secure, internal documents, we eliminate hallucinations and provide cited, verifiable answers...",

    sections: [
      {
        heading: "I. Limitations of Traditional Enterprise Search",
        paragraphs: [
          "Keyword-based search systems struggle with semantic understanding and context awareness.",
          "As internal documentation grows, employees spend more time searching for answers than acting on them."
        ]
      },
      {
        heading: "II. Retrieval-Augmented Generation",
        paragraphs: [
          "RAG introduces a deterministic retrieval layer between LLMs and enterprise data sources.",
          "By grounding responses in verified documents, organizations eliminate hallucinations and improve answer reliability."
        ]
      }
    ]
  },

  {
    id: "cloud-spend-optimization",
    category: "CASE STUDY",
    title: "Reducing Cloud Spend by 40% for Retail Giants",
    author: "Abhratanu Roy",
    date: "Jan 15, 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",

    intro:
      "Waste in the cloud is at an all-time high. Our latest research into FinOps methodologies shows that automated rightsizing and spot-instance orchestration can slash OpEx without impacting service reliability...",

    sections: [
      {
        heading: "I. Identifying Cloud Waste",
        paragraphs: [
          "Over-provisioned compute, idle storage, and unused managed services are the primary drivers of cloud inefficiency.",
          "Lack of visibility across teams prevents organizations from acting on cost anomalies early."
        ]
      },
      {
        heading: "II. Automated Rightsizing and Optimization",
        paragraphs: [
          "By implementing automated rightsizing and workload scheduling, the organization reduced infrastructure costs by 40%.",
          "Spot-instance orchestration enabled additional savings without impacting application reliability."
        ]
      }
    ]
  },

  {
    id: "ai-driven-finops",
    category: "CASE STUDY",
    title: "AI-Driven FinOps Use-Case List for the Data Services Industry",
    author: "Varun Mendiratta",
    date: "Feb 20, 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",

    intro:
      "AI-enabled FinOps use cases tailored to Data Services organizations that manage large datasets, ETL/ELT pipelines, warehouses, multi-cloud platforms, and BI workloads...",

    sections: [
      {
        heading: "I. FinOps Challenges in Data Services",
        paragraphs: [
          "ETL pipelines, data warehouses, and BI platforms generate highly variable and unpredictable cloud costs.",
          "Manual monitoring fails to keep pace with the scale and velocity of modern data workloads."
        ]
      },
      {
        heading: "II. AI-Enabled FinOps Use Cases",
        paragraphs: [
          "Machine learning models can forecast spend anomalies before they occur.",
          "AI-driven recommendations enable dynamic scaling, workload scheduling, and intelligent resource allocation."
        ]
      }
    ]
  }
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
