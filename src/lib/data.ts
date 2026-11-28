import type {
  Profile,
  SocialLink,
  SkillGroup,
  Project,
  Experience,
  Education,
} from "@/types";

// ============================================================
// EDIT THIS FILE to update everything shown on the site.
// ============================================================

export const profile: Profile = {
  name: "Yaswanth Kumar Damarla",
  role: "Full-Stack & Applied AI Software Engineer",
  tagline:
    "I build React and TypeScript products, the Node.js and FastAPI services behind them, and the LLM features that make them smarter.",
  about: [
    "I'm a full-stack and applied AI engineer with 5+ years of building web products end to end: responsive React and TypeScript interfaces, low-latency Node.js and Python services, and the LLM workflows that now sit between them.",
    "Today I work on product discovery for Nordstrom, where outfit recommendations are precomputed on AWS with Amazon Bedrock and LangChain and served through cached Node.js endpoints. Before that I spent three and a half years at Tata Consultancy Services building enterprise workflows for PayPal, and a year at Virxon shipping React, Node.js and FastAPI products.",
    "Outside work I build projects that answer a question I'm curious about. Can code review remember the decisions a team has already made? How much personal data leaks out of a text embedding? Can an email assistant run entirely on your own laptop?",
    "Away from the keyboard I'm a swimmer, and I love reading about tech on the internet: new tools, new ideas and how other people build things.",
  ],
  email: "yaswanthkumardamarla5@gmail.com",
  location: "USA",
  resumeUrl: "/resume.pdf",
};

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/yaswanthkumardamarla-dev", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/yaswanth-dyk/",
    icon: "linkedin",
  },
  { label: "Email", url: "mailto:yaswanthkumardamarla5@gmail.com", icon: "mail" },
];

// Grouped like the resume. `core` = everyday stack, shown first and highlighted.
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    core: ["Python", "TypeScript"],
    skills: ["JavaScript", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    core: ["React", "Next.js"],
    skills: ["Redux", "Angular", "Tailwind CSS", "Material UI", "Three.js", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    core: ["Node.js", "FastAPI"],
    skills: ["Express", "REST APIs", "Microservices", "WebSockets", "JWT", "RBAC"],
  },
  {
    title: "AI & LLMs",
    core: ["Amazon Bedrock", "LangChain", "RAG"],
    skills: [
      "Vector Search",
      "FAISS",
      "Structured Outputs",
      "Groq",
      "Whisper.cpp",
      "OpenVINO",
      "YOLO",
    ],
  },
  {
    title: "Databases",
    core: ["PostgreSQL", "Redis"],
    skills: ["MongoDB", "MySQL", "Prisma", "Mongoose", "SQL Query Optimization"],
  },
  {
    title: "Cloud & DevOps",
    core: ["AWS (ECS, SQS, S3)", "Docker"],
    skills: ["CI/CD", "Jenkins", "Azure DevOps", "Git", "Linux/Unix", "Vercel", "Render"],
  },
  {
    title: "Testing & Practices",
    skills: ["Jest", "PyTest", "Postman", "Unit & Integration Testing", "Code Reviews", "Agile/Scrum"],
  },
];

export const projects: Project[] = [
  {
    title: "Precedent",
    featured: true,
    highlight: "Decision memory for code review",
    description:
      "A GitHub App that extracts engineering decisions from pull request review discussions with Gemini structured outputs, then comments on later PRs that break one, linking back to the review where it was made. Its retrieve-then-judge pipeline over pgvector raised conflict recall from 0.83 to 0.92 on a 46-case eval suite.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "Gemini", "GitHub Apps"],
    liveUrl: "https://precedent-ten-kappa.vercel.app",
    repoUrl: "https://github.com/yaswanthkumardamarla-dev/precedent",
  },
  {
    title: "LeakCheck",
    highlight: "Embedding privacy audit",
    description:
      "Ran vec2text inversion attacks on 1,000 synthetic PII records: 96.5% leaked at least one value exactly from the embedding alone. Then benchmarked cheap defenses against search quality: Gaussian noise cut exact name recovery from 96% to 33% while keeping 99% of it.",
    tech: ["Python", "PyTorch", "Transformers", "vec2text", "Sentence Transformers"],
    liveUrl: "https://huggingface.co/spaces/ykdamarla/leakcheck",
    repoUrl: "https://github.com/yaswanthkumardamarla-dev/leakcheck",
  },
  {
    title: "Yuyutsu",
    highlight: "Gmail replies in your voice, fully on-device",
    description:
      "A privacy-first Chrome extension that drafts Gmail replies in the user's own writing style with Chrome's built-in Gemini Nano model. No OAuth, backend, cloud AI or analytics: email content never leaves the browser.",
    tech: ["JavaScript", "Chrome Extensions (MV3)", "Chrome Prompt API", "Gemini Nano"],
    repoUrl: "https://github.com/yaswanthkumardamarla-dev/Yuyutsu",
  },
  {
    title: "LoRA Text Classifier",
    highlight: "94.4% accuracy training 0.5% of the model",
    description:
      "Fine-tuned RoBERTa-base for 4-class news classification on AG News with Low-Rank Adaptation, training only 632K of its 125M parameters (under a 1M-parameter budget) and reaching 94.4% validation accuracy in about 12 minutes with mixed precision.",
    tech: ["Python", "PyTorch", "Transformers", "PEFT (LoRA)"],
    repoUrl:
      "https://github.com/yaswanthkumardamarla-dev/LoRA-BERT-Efficient-AGNEWS-Classification-Under-1M-Parameters",
  },
  {
    title: "Epsilon Jailbreak",
    highlight: "ResNet-34 accuracy: 76% → 0%",
    description:
      "Adversarial attacks on ImageNet classifiers (NYU team project). FGSM, PGD and patch-based PGD attacks drive ResNet-34's top-1 accuracy from 76% to 0% with barely visible perturbations, and the same images still cut ResNet-50 and DenseNet-121 to under 50%.",
    tech: ["Python", "PyTorch", "torchvision", "FGSM / PGD"],
    repoUrl:
      "https://github.com/yaswanthkumardamarla-dev/epsilon-jailbreak-resnet34-adversarial-attacks",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Enterprise Business LLC (Client: Nordstrom)",
    period: "May 2026 — Present",
    location: "Seattle, WA (Remote)",
    points: [
      "Developed React and TypeScript product-discovery interfaces that surface personalized outfit suggestions within customer browsing workflows, integrating frontend state with Node.js backend services.",
      "Implemented an asynchronous recommendation workflow on AWS ECS using Python, FastAPI, AWS SQS, Amazon Bedrock, and LangChain to precompute outfit pairings from catalog attributes and shopper preferences.",
      "Built Node.js/Express aggregation endpoints combining recommendation candidates with live product pricing, inventory, and size availability; applied Redis caching to reduce repeat lookups and cut P95 API latency from 480ms to 350ms.",
      "Added semantic product filtering and JSON schema validation for AI-generated catalog tags to keep malformed or irrelevant results out of customer shopping interfaces.",
      "Optimized React rendering, lazy loading, and client-side caching across high-traffic product pages, reducing Largest Contentful Paint (LCP) by 22% and minimizing redundant backend API calls.",
    ],
  },
  {
    role: "Graduate Assistant, Endpoint Engineering",
    company: "New York University",
    period: "Jan 2026 — May 2026",
    location: "New York, NY",
    points: [
      "Built an internal Python/FastAPI diagnostic utility that parsed recurring ServiceNow incident logs and error codes to surface known fixes for IT support workflows covering 200+ Windows and macOS endpoints.",
      "Automated device provisioning, OS imaging, and remote printer recovery tasks with Python/Bash scripts, HCL BigFix, and Workspace ONE, reducing manual lab and kiosk setup time by 40%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Virxon Private Limited",
    period: "Aug 2023 — Aug 2024",
    location: "Hyderabad, India",
    points: [
      "Built React/TypeScript web modules with reusable Redux and Tailwind CSS components backed by Node.js/Express services, reducing duplicate frontend code by 30%.",
      "Developed REST APIs and data-access workflows using Node.js, FastAPI, PostgreSQL (Prisma), and MongoDB (Mongoose), implementing RBAC and JWT-protected endpoints.",
      "Containerized services with Docker and automated Jest/PyTest validation and deployments through Azure DevOps, cutting release preparation time from 4 hours to 45 minutes.",
    ],
  },
  {
    role: "Systems Engineer (Promoted from Associate)",
    company: "Tata Consultancy Services (Client: PayPal)",
    period: "Jan 2020 — Aug 2023",
    location: "Hyderabad, India",
    points: [
      "Delivered Angular/TypeScript and Node.js workflow features for an enterprise PayPal application, reducing navigation-related support tickets by 25% across five major releases.",
      "Developed Node.js/Express microservices for user administration, document retrieval, and compliance reporting, supporting 10K+ daily API requests under strict SLA targets.",
      "Built an indexed document-search and reporting portal with dynamic filters and self-service REST endpoints, improving document lookup speed by 40%.",
      "Optimized SQL reporting queries using composite indexes, rewritten joins, and server-side pagination, reducing batch report generation time by 35%.",
      "Automated Jenkins and Git CI/CD build and test pipelines; conducted peer code reviews, supported production release handoffs, and onboarded 3 junior developers.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.S. in Computer Engineering",
    school: "New York University, New York, NY",
    period: "May 2026",
    detail: "Machine Learning · Deep Learning · Big Data · Principles of Database Systems",
  },
  {
    degree: "B.Tech. in Mechanical Engineering",
    school: "University College of Engineering, Vizianagaram, India",
    period: "May 2019",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
