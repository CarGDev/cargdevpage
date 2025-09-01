export interface PersonalInfo {
  fullName: string;
  title: string;
  location: string;
  email: string;
  description: string;
  profileImage: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Array<{
    name: string;
    icon?: string;
  }>;
}

export interface Experience {
  company: string;
  title: string;
  duration: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  acceptanceRate: string;
}

export interface Certification {
  title: string;
  organization: string;
  description: string;
  icon: string;
  verificationUrl?: string;
}

export interface Highlight {
  number: string;
  label: string;
}

export const personalInfo: PersonalInfo = {
  fullName: "Carlos Gutierrez",
  title: "Senior Software Engineer",
  location: "Atlanta, GA",
  email: "carlos.gutierrez@carg.dev",
  description: "Full-stack engineer with expertise in Python, JavaScript, React, and cloud platforms. Passionate about building scalable systems and leading technical initiatives that drive business value.",
  profileImage: "@assets/CargdevCONFONDObco_1756133331615.png"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/cargdev",
    icon: "linkedin",
    label: "LinkedIn"
  },
  {
    platform: "github",
    url: "https://github.com/CarGDev",
    icon: "github",
    label: "GitHub"
  },
  {
    platform: "leetcode",
    url: "https://leetcode.com/u/cargdev/",
    icon: "code",
    label: "LeetCode"
  },
  {
    platform: "blog",
    url: "https://blog.cargdev.io/",
    icon: "blog",
    label: "Blog"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "FaCode",
    skills: [
      { name: "Python", icon: "FaPython" },
      { name: "JavaScript", icon: "FaJs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "SQL", icon: "FaDatabase" },
      { name: "Java", icon: "FaJava" },
      { name: "Lua", icon: "SiLua" },
      { name: "Bash", icon: "FaTerminal" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "FaLayerGroup",
    skills: [
      { name: "React.js", icon: "FaReact" },
      { name: "Redux", icon: "SiRedux" },
      { name: "Angular", icon: "FaAngular" },
      { name: "NestJS", icon: "SiNestjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "Spring Boot", icon: "SiSpringboot" },
      { name: "GraphQL", icon: "SiGraphql" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "FaCloud",
    skills: [
      { name: "AWS", icon: "FaAws" },
      { name: "GCP", icon: "SiGooglecloud" },
      { name: "Docker", icon: "FaDocker" },
      { name: "CI/CD", icon: "FaGithub" },
      { name: "Azure Pipelines", icon: "FaMicrosoft" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "Cloudflare", icon: "SiCloudflare" },
      { name: "Tailscale", icon: "SiTailscale" }
    ]
  },
  {
    title: "Development Tools",
    icon: "FaWrench",
    skills: [
      { name: "Git", icon: "FaGit" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Cypress", icon: "SiCypress" },
      { name: "Nvim", icon: "SiNeovim" },
      { name: "NPM", icon: "FaNpm" },
      { name: "Maven", icon: "SiApache" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "Ivoyant",
    title: "Senior Software Engineer",
    duration: "2022 – Present",
    achievements: [
      "Led frontend development for AT&T Care product, serving millions of users daily",
      "Redesigned UI workflows resulting in $20M/year operational savings",
      "Optimized CI/CD pipelines, reducing build times from 45 min → 2 min",
      "Implemented multi-customer SSO security architecture using Java 17",
      "Mentored junior developers and established coding standards for the team"
    ]
  },
  {
    company: "Tortoise",
    title: "Full Stack Developer",
    duration: "2021 – 2022",
    achievements: [
      "Migrated critical systems from legacy stack to modern Angular architecture",
      "Deployed scalable backend services to Google Cloud Platform (GCP)",
      "Developed Linux-based automation pipelines for robotics deployment",
      "Engineered MQTT/TCP communication protocols for IoT device integration",
      "Implemented real-time monitoring and alerting systems"
    ]
  },
  {
    company: "NETGOU & Marelli Mexicana",
    title: "Software Engineer",
    duration: "2020 – 2021",
    achievements: [
      "Migrated legacy API systems to modern RESTful architecture",
      "Designed and optimized SQL database solutions for automotive manufacturing",
      "Automated purchase order processes, reducing manual work by 60%",
      "Implemented data validation and reporting systems"
    ]
  },
  {
    company: "Koala Mexicana",
    title: "Junior Developer",
    duration: "2019 – 2020",
    achievements: [
      "Built financial tracking applications using Java Spring Boot",
      "Developed RESTful APIs for financial data management",
      "Created responsive web interfaces for financial reporting",
      "Collaborated with stakeholders to gather and implement requirements"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "ai.cargdev.io",
    description: "Local deployment platform for Large Language Models using Docker and Ollama. Enables private, secure AI interactions without relying on external services.",
    technologies: ["Docker", "Ollama", "Python", "AI/ML"],
    icon: "brain",
    liveUrl: "https://ai.cargdev.io"
  },
  {
    name: "git.cargdev.io",
    description: "Self-hosted Git service powered by Gitea, providing private repository management with integrated CI/CD capabilities and collaborative development tools.",
    technologies: ["Gitea", "Docker", "CI/CD", "DevOps"],
    icon: "git-alt",
    liveUrl: "https://git.cargdev.io"
  },
  {
    name: "ideadrop.nvim",
    description: "Neovim plugin for organizing and managing ideas in Markdown format. Streamlines note-taking and idea development directly within the editor.",
    technologies: ["Lua", "Neovim", "Markdown", "Plugin Development"],
    icon: "lightbulb",
    githubUrl: "https://github.com/CarGDev/ideadrop.nvim"
  },
  {
    name: "react-crafter",
    description: "NPM package for React component development with 572+ downloads. Provides utilities and tools to streamline React application development.",
    technologies: ["React", "TypeScript", "NPM", "Package Development"],
    icon: "react",
    npmUrl: "https://www.npmjs.com/package/react-crafter",
    githubUrl: "https://github.com/CarGDev/reactwizard"
  },
  {
    name: "apiAi",
    description: "AI-powered API development tool that automates endpoint generation and testing. Integrates machine learning to optimize API performance and reliability.",
    technologies: ["Python", "AI/ML", "API Development", "Automation"],
    icon: "robot",
    githubUrl: "https://github.com/CarGDev/apiAi"
  },
  {
    name: "cargdev-cyberpunk",
    description: "A vibrant, high-contrast Neovim color scheme crafted for developers who thrive in bold, electrifying visuals. Built with TypeScript support and atomic design principles in mind, this theme delivers blazing neon tones and a cyberpunk aesthetic that maximizes focus and visual impact..",
    technologies: ["Lua", "ColorScheme", "Vim"],
    icon: "calendar-alt",
    githubUrl: "https://github.com/CarGDev/cargdev-cyberpunk"
  },
  {
    name: "pomodoro",
    description: "Pomodoro (by CarGDev) is a TypeScript-based productivity tool that appears to implement the Pomodoro Technique using a client–server architecture. The project is structured with separate client, server, and shared modules, suggesting a web-powered or API-driven timer system",
    technologies: ["React", "Node", "NPM"],
    icon: "BsStopwatch",
    githubUrl: "https://github.com/CarGDev/pomodoro"
  }
];

export const leetcodeStats: LeetCodeStats = {
  totalSolved: 79,
  easyCount: 39,
  mediumCount: 35,
  hardCount: 5,
  acceptanceRate: "61.6%"
};

export const certifications: Certification[] = [
  {
    title: "Professional Scrum Developer",
    organization: "Scrum.org",
    description: "Validated expertise in Agile development practices, test-driven development, and collaborative software engineering.",
    icon: "users",
    verificationUrl: "https://www.scrum.org/certificates/839967"
  },
  {
    title: "Professional Scrum Master",
    organization: "Scrum.org",
    description: "Demonstrated understanding of Scrum framework, servant leadership, and team facilitation skills.",
    icon: "project-diagram",
    verificationUrl: "https://www.scrum.org/certificates/941271"
  },
  {
    title: "EF SET C1 Advanced English",
    organization: "EF Education First",
    description: "Advanced proficiency in English communication, enabling effective collaboration in global teams.",
    icon: "globe",
    verificationUrl: "https://cert.efset.org/huXRp7"
  }
];

export const highlights: Highlight[] = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "572+", label: "NPM Downloads" },
  { number: "3", label: "Certifications" }
];
