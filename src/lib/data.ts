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
// Entries marked TODO are placeholders — replace with your own.
// ============================================================

export const profile: Profile = {
  name: "Yaswanth Kumar Damarla",
  role: "Software Engineer", // TODO: your actual title
  tagline: "I build clean, thoughtful software — sketched first, shipped fast.",
  about: [
    // TODO: replace with your own story (each string is a paragraph)
    "Hi! I'm Yaswanth. I enjoy turning rough ideas into working products — from the first pencil sketch of an interface to the final deploy.",
    "I care about simple designs, readable code, and the small details that make software feel handcrafted.",
    "When I'm not coding, you'll probably find me swimming, reading, or exploring something new.",
  ],
  email: "yaswanthkumardamarla5@gmail.com",
  location: "USA", // TODO: your city
  resumeUrl: "/resume.pdf", // drop your resume at public/resume.pdf
};

export const socials: SocialLink[] = [
  // TODO: replace with your real profiles
  { label: "GitHub", url: "https://github.com/yaswanthkumardamarla-dev", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/yaswanth-dyk/",
    icon: "linkedin",
  },
  { label: "Email", url: "mailto:yaswanthkumardamarla5@gmail.com", icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "FastAPI",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLM Fine-tuning",
      "RAG (LangChain, FAISS)",
      "NLP",
      "Deep Learning",
      "RL",
      "Computer Vision",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "MongoDB",
      "SQL Databases",
      "Apache Spark",
      "Databricks",
      "Tableau",
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: [
      "Amazon Web Services (AWS)",
      "Docker",
      "Jenkins",
      "Azure DevOps",
      "Git",
      "Postman",
      "REST APIs",
      "CI/CD",
      "HCL BigFix",
      "Workspace ONE",
      "ServiceNow",
      "Agile/Scrum",
    ],
  },
];

export const projects: Project[] = [
  // TODO: replace with your real projects
  {
    title: "Portfolio Website",
    description:
      "This site — a hand-sketched personal portfolio built with Next.js and Tailwind, with a paper-texture light/dark theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/yaswanth/portfolio",
    highlight: "You are here ✏️",
  },
  {
    title: "Project Two",
    description:
      "A short one-or-two sentence description of what this project does and why it's interesting.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yaswanth/project-two",
  },
  {
    title: "Project Three",
    description:
      "Another project description. Mention the problem it solves and anything notable about how you built it.",
    tech: ["Python", "FastAPI", "Docker"],
    repoUrl: "https://github.com/yaswanth/project-three",
  },
];

export const experiences: Experience[] = [
  {
    role: "Graduate Assistant, Endpoint Engineering",
    company: "NYU IT – Endpoint Engineering",
    period: "2025 — 2026",
    location: "New York, NY",
    points: [
      "Diagnosed and resolved hardware/software failures for 200+ macOS and Windows endpoints across campuses using HCL BigFix, Workspace ONE, and AI diagnostics.",
      "Streamlined OS imaging and hardware provisioning for classrooms, labs, and kiosks, achieving a 40% efficiency gain in deployment workflows.",
      "Managed incidents from intake through resolution and documented recurring hardware and software failures, enabling proactive maintenance and clearer support knowledge for endpoint teams.",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    period: "2020 — 2023",
    location: "Hyderabad, India",
    points: [
      "Led end-to-end development of a customer-facing application, delivering five features that increased user engagement by 30% and reduced navigation-related support inquiries by 25%.",
      "Designed and developed a search application that improved document-retrieval speed by 40%, increasing operational efficiency and user satisfaction.",
      "Built a reusable download dialog and supporting REST APIs for document retrieval, reducing document-access support inquiries by 30%.",
      "Introduced automated unit-testing workflows that accelerated defect identification and resolution by 70% and improved development-team productivity.",
      "Facilitated architecture reviews, sprint planning, retrospectives, and project handoffs for 12 client team members, documenting decisions, ownership, dependencies, and delivery timelines.",
    ],
  },
];

export const education: Education[] = [
  // TODO: replace with your real education
  {
    degree: "Master of Science in Computer Engineering",
    school: "New York University",
    period: "2024 — 2026",
    detail: "Machine Learning · Deep Learning · Big Data · Principles of Database Systems · Computing Systems Architecture · Real-Time Embedded Systems · Systems Engineering · Applied Matrix Theory · VLSI System Design · Object-Oriented Programming ",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
