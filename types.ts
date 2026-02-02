
export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  points: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
