
import { Experience, Education, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Vanshika Tushar Thakkar",
  headline: "Product Manager | Data Enthusiast | Automation Strategist",
  email: "vtt2@illinois.edu",
  phone: "(217) 721-8209",
  linkedin: "https://www.linkedin.com/in/vanshika-thakkar-8b982521a/",
  location: "Open to Relocate",
  about: "Bridging the gap between data-driven insights and product-led growth. Currently pursuing MS in Information Management at UIUC with a track record of driving $5M+ in margin improvements."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Business Intelligence Group (BIG)",
    role: "Consultant | Healthcare Tech - Intelligent Automation",
    period: "Jan 2026 – Present",
    highlights: [
      "Driving product roadmap for healthcare tech intelligent automation prototypes.",
      "Leading cross-functional teams to build unified products identifying billing guidelines.",
      "Defining MVP scope using RICE framework based on stakeholder research.",
      "Architecting end-to-end product development workflows integrating web scraping automation."
    ]
  },
  {
    company: "Deloitte",
    role: "Product Analyst – (PMO)",
    period: "Nov 2023 – Oct 2024",
    highlights: [
      "Owned product strategy for a financial operations platform serving 150+ users.",
      "Surfaced $5M+ in margin improvement opportunities via Cost of Quality data products.",
      "Achieved 90% active user adoption within 8 weeks for a new analytics suite.",
      "Optimized SAP and Excel workflows, increasing reporting accuracy by 25%."
    ]
  },
  {
    company: "Colgate-Palmolive",
    role: "Finance Systems Intern",
    period: "Apr 2023 – Nov 2023",
    highlights: [
      "Designed SOX-compliant financial controls framework using real-time monitoring.",
      "Built custom duty payment workflow products, reducing cycle time by 30%.",
      "Engineered advanced Excel analytics product suites for cash reconciliation.",
      "Reduced recurring manual tasks by 40% through VBA macro development."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "University of Illinois, Urbana-Champaign",
    degree: "Master of Science in Information Management",
    period: "Aug 2025 – May 2027",
    gpa: "4.0/4.0"
  },
  {
    institution: "V.G. Vaze College (University of Mumbai)",
    degree: "Bachelor of Commerce",
    period: "Jul 2020 – Apr 2023",
    gpa: "4.0/4.0"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Central Request Portal",
    description: "Internal Deloitte Initiative focused on streamlining cross-departmental requests.",
    tags: ["SQL", "Power BI", "Excel", "Product Management"],
    points: [
      "Conducted stakeholder interviews across 8 departments to synthesize product requirements.",
      "Designed a 3-phase product roadmap: MVP (Intake), Phase 2 (Routing), Phase 3 (Dashboards).",
      "Improved request-handling efficiency by 40% through automated ticket handling."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Product Management",
    skills: ["User Research", "User Journey Mapping", "RICE / MoSCoW", "MVP Definition", "Roadmapping", "Agile/Scrum", "PRD Generation"]
  },
  {
    name: "Data & Analytics",
    skills: ["SQL (Joins, CTEs)", "Python (Pandas, NumPy)", "Tableau", "Power BI", "Calculated Fields", "Cohort Retention"]
  },
  {
    name: "AI & Automation",
    skills: ["Prompt Engineering", "Zapier", "Make (n8n)", "Intelligent Automation", "ChatGPT/Claude", "Process Automation"]
  }
];
