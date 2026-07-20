export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  email: string;
  location: string;
  resumeUrl: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "globe";
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlight?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}
