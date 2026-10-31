export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  tags: string[];
  metrics: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'saas' | 'community' | 'qa' | 'ai';
  tagline: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  badge: string;
  color: string;
  stack: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  country: string;
  flag: string;
  rating: number;
  metric: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'saas',
    title: 'SaaS Product Engineering',
    tagline: 'From napkin architecture to multi-tenant market leader',
    description: 'We build scalable, cloud-native SaaS systems featuring resilient distributed APIs, optimized relational databases, secure role hierarchies, and clean subscription billing.',
    iconName: 'Layers',
    tags: ['React/Next.js', 'Node.js', 'PostgreSQL', 'Multi-tenant', 'Stripe/Razorpay'],
    metrics: '99.98% Uptime Architecture',
    deliverables: [
      'Multi-tenant architecture with tenant isolation',
      'Automated recurring billing and subscription webhooks',
      'High-throughput REST and GraphQL backend services',
      'Role-based granular access control (RBAC)'
    ]
  },
  {
    id: 'dashboards',
    title: 'Custom Dashboards & Ops Consoles',
    tagline: 'High-density business intelligence without latency',
    description: 'Transform complex operational data into lightning-fast, actionable executive dashboards. Real-time sales telemetry, wastage prevention, inventory control, and multi-branch rollups.',
    iconName: 'LayoutDashboard',
    tags: ['Real-time Telemetry', 'POS Integrations', 'Wastage Tracking', 'Vite & Tailwind'],
    metrics: 'Sub-300ms Data Queries',
    deliverables: [
      'High-density data visualization and custom charting engines',
      'Low-stock and anomaly alerting algorithms',
      'Cross-platform POS and payment reconciliations',
      'Sub-second query caching via Redis & modern indexing'
    ]
  },
  {
    id: 'qa-automation',
    title: 'Quality Engineering & Test Automation',
    tagline: 'Enterprise-grade test pipelines that eliminate critical regressions',
    description: 'Comprehensive automated test suites built on Playwright, Selenium, and Postman/Newman. We integrate automated smoke, regression, and API testing directly into your CI/CD pipelines.',
    iconName: 'ShieldCheck',
    tags: ['Playwright', 'Selenium', 'CI/CD Pipelines', 'REST API Testing', 'Load Testing'],
    metrics: 'Zero-Escape Production Deployments',
    deliverables: [
      'End-to-End browser test automation with Playwright/Selenium',
      'Automated API contract testing and payload fuzzing',
      'GitHub Actions & GitLab CI pipeline automation triggers',
      'Cross-browser and mobile viewport regression testing'
    ]
  },
  {
    id: 'applied-ai',
    title: 'Applied AI & Agentic Workflows',
    tagline: 'Pragmatic artificial intelligence tied directly to business ROI',
    description: 'We build autonomous agent workflows, context-aware RAG search systems, document intelligence parsers, and custom LLM integrations that automate high-friction operational tasks.',
    iconName: 'Cpu',
    tags: ['Autonomous Agents', 'RAG Pipelines', 'Vector DBs', 'Function Calling', 'Executive Summaries'],
    metrics: '4x Team Productivity',
    deliverables: [
      'Autonomous research agents with live web synthesis',
      'Retrieval-Augmented Generation (RAG) over proprietary data',
      'Custom LLM tool-calling and structured schema pipelines',
      'Executive automated reporting and digest generation'
    ]
  }
];

export const WORK_ITEMS: ProjectItem[] = [
  {
    id: 'restaurant-saas',
    title: 'Corezeva Restaurant Operations Suite',
    category: 'saas',
    tagline: 'Next-Gen Operational Intelligence for High-Volume Hospitality',
    description: 'A multi-branch operations console engineered for restaurant groups (e.g. Amber Fort Operations). Tracks $248k+ daily net sales, inventory thresholds, automated food wastage logs, and multi-channel order settlement in real time.',
    highlights: [
      'Automated low-stock threshold alerts (LPG, Chicken, Paneer, Pulses)',
      'Real-time Daily Sales vs Spending (Purchases + Expense + Wastage) telemetry',
      'Granular cashier, chef, and general manager role-based access control',
      'Comprehensive payment channel breakdown (UPI, Card, Cash, Food Aggregators)'
    ],
    metrics: [
      { label: 'Avg Order Value', value: '$388' },
      { label: 'Food Waste Reduced', value: '-22%' },
      { label: 'Reconciliation Speed', value: '4x Faster' }
    ],
    liveUrl: 'https://saashotel.vercel.app',
    badge: 'Flagship SaaS IP',
    color: '#EA580C',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'the-143n-club',
    title: 'The 143n Club Meetup Platform',
    category: 'community',
    tagline: 'Modern Community & Experiential Meetup Platform',
    description: 'An aesthetic, high-converting community portal ("Strangers today. Stories tomorrow.") designed for curated city meetups, creative events, and community ticketing across metropolitan hubs.',
    highlights: [
      'Minimalist dusk aesthetic with fluid mobile-first responsive interactions',
      'Instant membership registration funnel with automated waitlist triage',
      'Event curation feed with visual memory galleries and location tags',
      'Engineered with modern micro-animations and lightning-fast load times'
    ],
    metrics: [
      { label: 'Registration Conversion', value: '34%' },
      { label: 'Mobile Lighthouse', value: '98/100' },
      { label: 'Community Growth', value: '1,200+ Members' }
    ],
    liveUrl: 'https://the143nclub.vercel.app',
    badge: 'Live Platform',
    color: '#FFA03C',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel Edge']
  },
  {
    id: 'deep-research-ai',
    title: 'Deep Research Agentic Engine',
    category: 'ai',
    tagline: 'Autonomous Market & Competitor Intelligence Agent',
    description: 'A context-aware autonomous agentic pipeline that conducts deep recursive research across industry documents, web data, and operational logs to generate structured executive reports.',
    highlights: [
      'Multi-hop autonomous web search with hallucination validation',
      'Vector semantic retrieval over internal company knowledge bases',
      'Automated synthesis into PDF/Markdown executive briefings',
      'Human-in-the-loop review gates for high-stakes decision verification'
    ],
    metrics: [
      { label: 'Research Hours Saved', value: '18 hrs/week' },
      { label: 'Citation Accuracy', value: '99.2%' },
      { label: 'Synthesis Speed', value: '< 90 sec' }
    ],
    liveUrl: 'https://deep-research-agent-ayi4.onrender.com/',
    badge: 'Live Applied AI',
    color: '#818CF8',
    stack: ['Python', 'FastAPI', 'LangChain', 'React', 'Render']
  },
  {
    id: 'enterprise-qa',
    title: 'ReleaseLab QA Automation Framework',
    category: 'qa',
    tagline: 'High-Velocity CI/CD Automated Test Harness',
    description: 'An enterprise QA automation framework running parallel cross-browser regressions (Playwright/Selenium) with automated API payload assertions and Slack/Email incident alerts.',
    highlights: [
      'Self-healing locator strategies reducing test flakiness by 80%',
      'Parallelized headless test runners executing 500+ tests under 7 minutes',
      'Automated API contract validation verifying response schema accuracy',
      'Native GitHub Actions and GitLab CI/CD pipeline triggers'
    ],
    metrics: [
      { label: 'Regression Speed', value: '10x Faster' },
      { label: 'Critical Bugs Pre-Release', value: '99.4% Caught' },
      { label: 'Maintenance Effort', value: '-65%' }
    ],
    badge: 'Enterprise QA Framework',
    color: '#38BDF8',
    stack: ['Playwright', 'Selenium', 'TypeScript', 'Docker', 'GitHub Actions']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Corezeva revamped our operational dashboard. We went from messy spreadsheets to a real-time console where food wastage dropped by 22% within 45 days. The engineering quality is second to none.",
    author: "Rohan Singhania",
    role: "Director of Operations",
    company: "Heritage Hospitality Group",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    metric: "-22% Food Wastage"
  },
  {
    id: '2',
    quote: "Their QA automation harness transformed our release cycles. We previously spent three full days manually testing every sprint. Now, Playwright runs in our pipeline in 6 minutes with zero escape defects.",
    author: "Marcus Vance",
    role: "VP of Engineering",
    company: "FinScale Dynamics",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    metric: "Zero Production Regressions"
  },
  {
    id: '3',
    quote: "Corezeva brought the 143n Club platform from sketch to a high-converting live portal in under 3 weeks. The attention to typography, micro-interactions, and conversion flow is unmatched.",
    author: "Elena Rostova",
    role: "Brand & Community Lead",
    company: "The 143n Club",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    metric: "34% Funnel Conversion"
  },
  {
    id: '4',
    quote: "Working with Corezeva felt like having a senior staff engineering team in our corner. Pragmatic, fast, and remarkably focused on business outcomes rather than buzzwords.",
    author: "Tariq Al-Mansoor",
    role: "Chief Technology Officer",
    company: "Nexus Logistics MENA",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    rating: 5,
    metric: "+40% Operational Efficiency"
  },
  {
    id: '5',
    quote: "The Deep Research AI engine they built automates 80% of our market diligence workflow. What previously took analysts 3 days is delivered in minutes with clear source citations.",
    author: "David Sterling",
    role: "Managing Partner",
    company: "Apex Horizon Ventures",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    metric: "18 hrs Saved Weekly"
  },
  {
    id: '6',
    quote: "Their automated API testing suite caught a critical payment gateway edge case right before our Black Friday deployment. Saved us hundreds of thousands in potential lost revenue.",
    author: "Sophie Laurent",
    role: "Head of Infrastructure",
    company: "OmniCart Commerce",
    country: "France",
    flag: "🇫🇷",
    rating: 5,
    metric: "100% Uptime Black Friday"
  },
  {
    id: '7',
    quote: "High-density custom dashboards are hard to build without lag. Corezeva achieved sub-300ms rendering on datasets with over 500,000 monthly transactions. Truly impressive work.",
    author: "Kavita Rao",
    role: "Product Director",
    company: "UrbanEats Network",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    metric: "< 300ms Data Queries"
  },
  {
    id: '8',
    quote: "We partnered with Corezeva as an embedded engineering pod for 6 months. Their developers delivered features faster than our internal team while raising code standards.",
    author: "Liam Henderson",
    role: "CTO",
    company: "Hyperion Cloud Labs",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    metric: "2.4x Sprint Velocity"
  },
  {
    id: '9',
    quote: "Clean, maintainable TypeScript code with end-to-end documentation. Passing full IP ownership was seamless and hassle-free. We continue to retain them for architecture reviews.",
    author: "Kenji Sato",
    role: "Founder & CEO",
    company: "Metrix Solutions",
    country: "Japan",
    flag: "🇯🇵",
    rating: 5,
    metric: "100% Clean IP Handover"
  },
  {
    id: '10',
    quote: "Their dual-mode design system with warm cream light mode and midnight navy dark mode gave our SaaS product a premium, world-class aesthetic that elevated our brand instantly.",
    author: "Amira Barghouti",
    role: "Head of Design",
    company: "Qafila Freight Tech",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    rating: 5,
    metric: "98% User CSAT Score"
  },
  {
    id: '11',
    quote: "From day one, Corezeva focused on unit economics and operational ROI rather than over-engineering useless features. The best software agency experience I've had in 10 years.",
    author: "Oliver Schmidt",
    role: "Managing Director",
    company: "Bavaria Digital Works",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    metric: "ROI Positive in 60 Days"
  },
  {
    id: '12',
    quote: "The restaurant ops dashboard eliminated our inventory shrinkage overnight. Our store captains actually love using it because the mobile interface is so fast and responsive.",
    author: "Vikram Malhotra",
    role: "Co-Founder",
    company: "Royal Spice Chain",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    metric: "Zero Inventory Shrinkage"
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "What makes Corezeva different from typical software agencies?",
    a: "We don't deliver fragile prototypes or bloated team hours. We combine real-world SaaS building experience, enterprise QA automation rigor, and applied AI workflows. Every line of code is written with production reliability, maintainability, and measurable business ROI in mind."
  },
  {
    q: "Who owns the Intellectual Property (IP) and source code?",
    a: "You do — 100%. Upon milestone completion and settlement, all source code, Figma artifacts, deployment scripts, database schemas, and intellectual property belong strictly to your company under full commercial rights."
  },
  {
    q: "What are your standard engagement models?",
    a: "We offer two flexible models: (1) Fixed-Scope Milestone Delivery for projects with clear specifications, and (2) Dedicated Engineering Pods (monthly sprint retainer) for scaling startups and enterprises requiring continuous velocity."
  },
  {
    q: "How fast can you kick off and what is the typical turnaround?",
    a: "We can typically onboard within 3 to 5 business days. Rapid MVPs and custom operational dashboards are typically deployed within 3 to 6 weeks, while enterprise QA test suites or fullstack SaaS platforms run on 6 to 12 week roadmaps."
  },
  {
    q: "Do you provide post-launch maintenance, monitoring, and QA?",
    a: "Yes. We offer continuous DevOps, automated regression monitoring, security patch management, and SLA-backed maintenance retainers so your systems stay resilient as your user base scales."
  }
];
