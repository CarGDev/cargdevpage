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

export interface Publication {
  title: string;
  authors: string[];
  platform: 'arxiv' | 'researchgate' | 'peer-reviewed';
  description: string;
  year: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  company: string;
  position: string;
  author: string;
  authorTitle: string;
  quote: string;
  highlights: string[];
  duration: string;
}

export interface Highlight {
  number: string;
  label: string;
}

export const personalInfo: PersonalInfo = {
  fullName: "Carlos Gutierrez",
  title: "Senior Software Engineer & AI Enthusiast",
  location: "Atlanta, GA",
  email: "carlos.gutierrez@carg.dev",
  description: "Senior Software Engineer with 5+ years of experience building full-stack solutions – from crafting intuitive front-end interfaces in React to architecting robust back-end services in Python/Java (NestJS, Spring Boot) and deploying them in the cloud. Passionate about designing scalable systems, leading engineering teams, and applying software expertise to AI/ML projects and Large Language Models.",
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
    company: "AT&T (through Ivoyant)",
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
    title: "Software Engineer",
    duration: "2021 – 2022",
    achievements: [
      "Migrated critical delivery control system from jQuery to Angular 12, reducing tech debt and improving stability for internal tele-operators",
      "Deployed backend services to GCP using PM2 process management, ensuring consistent and resilient service availability",
      "Improved and executed Linux-based automated update pipeline with .deb packaging and APT repositories, enabling fleet-wide, touch-free updates for delivery robots",
      "Engineered real-time communication systems using MQTT and TCP/IP protocols to monitor and control autonomous scooters and delivery devices",
      "Strengthened operational reliability by optimizing backend systems for distributed robotics infrastructure"
    ]
  },
  {
    company: "NETGOU",
    title: "Backend Engineer",
    duration: "2020 – 2021",
    achievements: [
      "Migrated legacy government API system from PHP to NestJS, modernizing the architecture and improving maintainability"
    ]
  },
  {
    company: "Marelli Mexicana",
    title: "Database Engineer",
    duration: "2017 – 2021",
    achievements: [
      "Designed 15+ complex SQL queries and stored procedures for automotive manufacturing operations",
      "Developed applications to automate 100% of the purchase order process, leveraging machine-generated reports and scheduling preventive maintenance",
      "Optimized database solutions for automotive manufacturing workflows"
    ]
  },
  {
    company: "Koala Mexicana",
    title: "Software Engineer",
    duration: "2018 – 2019",
    achievements: [
      "Developed Finance Application using Java 8 (Spring Boot) and jQuery to automate financial metric tracking",
      "Streamlined monthly, quarterly, and yearly reporting based on company forecasts",
      "Created responsive web interfaces for financial reporting and analysis"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "sheepOp",
    description: "A comprehensive transformer-based language model implementation from scratch, designed for research, custom training, and production deployment. Features optimized inference with KV caching, efficient attention mechanisms, and multi-format data processing support for PDFs, images (OCR), code files, and text.",
    technologies: ["Python", "AI/ML", "Transformers", "Deep Learning"],
    icon: "brain",
    githubUrl: "https://github.com/CarGDev/sheepOp"
  },
  {
    name: "LLM rag DS optimizer",
    description: "A production-grade Python library for optimizing LLM inference and retrieval through advanced data structures and algorithms. Features KV cache optimization with paged allocation, dynamic micro-batching, HNSW-based RAG retrieval, and comprehensive observability. Focuses on improving throughput, latency, and memory efficiency for production RAG systems.",
    technologies: ["Python", "AI/ML", "RAG", "Data Structures", "Optimization"],
    icon: "brain",
    githubUrl: "https://github.com/CarGDev/llm-rag-ds-optimizer"
  },
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
    githubUrl: "https://github.com/CarGDev/pomodoro",
    liveUrl: "https://pomodoro.cargdev.io"
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

export const publications: Publication[] = [
  {
    title: "Optimizing Transformer Inference: Theory, Implementation and Empirical Validation",
    authors: ["Carlos Gutierrez"],
    platform: "researchgate",
    description: "A comprehensive study on optimizing transformer inference through theoretical analysis, practical implementation strategies, and empirical validation. This draft paper explores techniques for improving efficiency and performance in transformer-based models.",
    year: "2025",
    url: "https://www.researchgate.net/publication/398313693_Optimizing_Transformer_Inference_Theory_Implementation_and_Empirical_Validation",
    icon: "file-text"
  }
];

export const testimonials: Testimonial[] = [
  {
    company: "Tortoise Inc.",
    position: "Backend Developer",
    author: "David Graham",
    authorTitle: "CEO",
    duration: "2021 – 2022",
    quote: "Carlos Gutierrez was employed with Tortoise Inc. as a Backend Developer. During his tenure, he implemented and maintained a delivery robot system, integrated cloud servers for real-time position notification, and led the migration from jQuery to Angular.",
    highlights: [
      "Implemented and maintained delivery robot system with cloud server integration",
      "Led migration from jQuery to Angular, redesigning web pages and implementing responsive design",
      "Developed backend functionalities using Node.js, MySQL, and JavaScript",
      "Created automation processes for dependency installation in Debian ARM 64",
      "Designed and documented REST APIs for seamless client communication"
    ]
  },
  {
    company: "Marelli Mexicana",
    position: "Engineer",
    author: "Margarita Montes Gonzalez",
    authorTitle: "HR Senior Manager",
    duration: "2017 – 2021",
    quote: "Carlos Arturo Gutierrez Gonzalez was employed with Marelli Mexicana as an Engineer. He was responsible for creating new applications, managing databases in SQL Server, and deploying applications with Microsoft Access.",
    highlights: [
      "Created new applications by user necessities with Microsoft Access",
      "Managed database in SQL Server, including adding tables, fixing information, and backup databases",
      "Utilized applications to help update SOPs, register new materials, and schedule machine calibrations",
      "Provided user support for applications in Microsoft Access"
    ]
  },
  {
    company: "CEPROELE S DE RL DE CV",
    position: "Junior Frontend Developer",
    author: "Luis Alejandro de la Torre Avila",
    authorTitle: "Director and Design Leader",
    duration: "2019 – 2020",
    quote: "Carlos Arturo Gutierrez Gonzalez was employed with CEPROELE S DE RL DE CV as a Junior Frontend Developer. He developed and maintained web applications using HTML, CSS, and JavaScript frameworks such as React and Angular.",
    highlights: [
      "Developed and maintained web applications using HTML, CSS, and JavaScript frameworks",
      "Implemented user interfaces based on design specifications and UX principles",
      "Integrated with and consumed REST APIs for data retrieval and manipulation",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Troubleshooted and debugged issues across different browsers and devices"
    ]
  },
  {
    company: "LinkedIn Recommendation",
    position: "Team Member",
    author: "Keerthi Rayapuram",
    authorTitle: "Sr. Automation Test Engineer",
    duration: "2023",
    quote: "Carlos is passionate, competent, flexible, and an efficient person in our team. The best part of Carlos is accepting challenging enhancements and making advances to bring innovative software. He is capable enough on fulfilling the day-to-day tasks on time and focuses on developing software with great comprehension.",
    highlights: [
      "Passionate, competent, flexible, and efficient team member",
      "Accepts challenging enhancements and brings innovative software solutions",
      "Capable of fulfilling day-to-day tasks on time with great comprehension",
      "Excellent at writing code, planning, coordinating, and organizing product enhancements",
      "Strong asset with great attitude, fun-loving, and hard-working"
    ]
  },
  {
    company: "LinkedIn Recommendation",
    position: "Team Member",
    author: "Lina Castro",
    authorTitle: "Senior Software Engineer | JavaScript FullStack",
    duration: "2020",
    quote: "I worked with Carlos in same projects and Carlos is a good person, have many skills very importants like backend developer.",
    highlights: [
      "Strong backend development skills",
      "Excellent collaboration and teamwork",
      "Valuable technical expertise in multiple projects"
    ]
  },
  {
    company: "LinkedIn Recommendation",
    position: "Backend Colleague",
    author: "Steven Mosquera",
    authorTitle: "Software Developer Ssr | JavaScript | TypeScript | Node.js",
    duration: "2020",
    quote: "I had the great opportunity to work with him, being my Backend colleague, he demonstrated great skills in Leadership and teamwork, as well as his technical skills, he has great strengths as a Backend developer applying good practices. There is no doubt that he is a great developer.",
    highlights: [
      "Demonstrated great leadership and teamwork skills",
      "Strong technical skills as a Backend developer",
      "Applies good development practices consistently",
      "Excellent collaboration and professional development"
    ]
  },
  {
    company: "LinkedIn Recommendation",
    position: "Team Member",
    author: "Karla Judith Paredes Avelar",
    authorTitle: "Sr SQE | AUTOMOTIVE INDUSTRY",
    duration: "2020",
    quote: "I had the opportunity to work with Carlos at Marelli. Carlos is a person who learns very fast, who loves teamwork and for whom the professional development of candidates is very important. I really enjoyed working with him and I think any company wins in having a person like him on their team.",
    highlights: [
      "Fast learner with strong adaptability",
      "Loves teamwork and collaboration",
      "Committed to professional development",
      "Valuable team member for any organization"
    ]
  },
  {
    company: "LinkedIn Recommendation",
    position: "Team Member",
    author: "Atziri Castro",
    authorTitle: "Project Engineer",
    duration: "2020",
    quote: "Carlos is proactive and hardworking, he works great in a team environment as well!",
    highlights: [
      "Proactive and hardworking professional",
      "Excellent team player",
      "Strong collaborative skills"
    ]
  },
  {
    company: "LinkedIn Recommendation",
    position: "Backend Developer",
    author: "Xavier Carrera",
    authorTitle: "Senior Data Scientist | AI, Machine Learning, Advanced Analytics",
    duration: "2020",
    quote: "Carlos worked with me as a Backend Developer within the Platzi Master Program. He's a hardworking developer and fluent on technologies such as Node.js, Docker and PostgreSQL.",
    highlights: [
      "Hardworking and dedicated developer",
      "Fluent in Node.js, Docker, and PostgreSQL",
      "Strong technical capabilities in backend development",
      "Excellent performance in advanced programs"
    ]
  },
  {
    company: "LinkedIn Recommendation",
    position: "Backend Lead",
    author: "José Alberto Ortiz Vargas",
    authorTitle: "Ingeniero de datos (Azure)",
    duration: "2020",
    quote: "Trabajé con Carlos, él lideró la parte de backend y demostró conocimientos sólidos en diferentes tecnologías como node.js, postgresql, heroku y AWS. Tiene buena disciplina y disposición para llevar a cabo un proyecto de desarrollo de software.",
    highlights: [
      "Led backend development with solid knowledge",
      "Expertise in Node.js, PostgreSQL, Heroku, and AWS",
      "Good discipline and willingness to carry out software projects",
      "Strong leadership and technical capabilities"
    ]
  }
];

export const highlights: Highlight[] = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "572+", label: "NPM Downloads" },
  { number: "3", label: "Certifications" }
];
