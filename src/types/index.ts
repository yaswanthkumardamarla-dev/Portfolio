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
  /** Everyday tools: shown first and highlighted. */
  core?: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlight?: string;
  /** Shown as a full-width card at the top of the grid. */
  featured?: boolean;
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
