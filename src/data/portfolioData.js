export const personalInfo = {
  name: "Arib Akhtar",
  role: "Full Stack Web Developer | MERN Stack Developer",
  positioning: "Full-Stack Developer crafting thoughtful digital experiences.",
  supportingCopy:
    "First-year BCA student and entry-level MERN Stack Developer skilled in building responsive web applications using React, Node.js, Express.js, REST APIs, and MongoDB.",
  availability: "Available for select freelance & full-stack opportunities",
  location: "Ranchi, Jharkhand, India",
  phone: "+91 8789963987",
  email: "arib.000789@gmail.com",
  socials: {
    github: "https://github.com/arib-akhtar",
    instagram: "https://www.instagram.com/arib___007/",
    linkedin: "https://www.linkedin.com/in/arib-akhtar-02292442b",
    twitter: "https://twitter.com/aribakhtar",
  },
  resumeUrl: "/resume",
};

export const aboutPillars = [
  {
    number: "01",
    title: "Thoughtful Architecture",
    description:
      "Constructing modular, single-responsibility components and robust state flows that scale without friction.",
  },
  {
    number: "02",
    title: "Purposeful Interaction",
    description:
      "Crafting deliberate micro-interactions and transitions that guide focus and elevate usability rather than distract.",
  },
  {
    number: "03",
    title: "Accessible & Semantic",
    description:
      "Writing clean HTML5 semantics, managing focus states, and prioritizing inclusive keyboard navigation across viewports.",
  },
  {
    number: "04",
    title: "Performance-Conscious",
    description:
      "Optimizing rendering lifecycles, asset payloads, and animation performance to preserve smooth frame rates.",
  },
];

export const projects = [
  {
    id: "aivon-tech",
    title: "Aivon Tech — Agency Platform",
    subtitle: "Official Web Platform & Interactive AI Service Hub",
    category: "Frontend Web App",
    image: "/aivontech.webp",
    description:
      "Frontend agency web application built with React and Tailwind CSS, delivering high-performance responsive experiences, interactive AI client inquiry assistance, and modern brand presence.",
    challenge:
      "Designing fluid micro-interactions and animations that maintain 60fps performance alongside an interactive AI chat widget for client inquiries.",
    contribution:
      "Architected and deployed the official site with React and Tailwind CSS, integrated smooth responsive layouts and React Router DOM, and built an automated AI client inquiry widget.",
    tags: ["React.js", "Tailwind CSS", "React Router", "AI Assistant", "Netlify"],
    featured: true,
    stats: {
      metrics: "Live on Netlify",
      status: "Production Agency Site",
      type: "Frontend React App",
    },
    links: {
      live: "https://theaivontech.netlify.app",
      github: "https://github.com/arib-akhtar",
    },
    accentGlow: "rgba(139, 92, 246, 0.35)",
  },
  {
    id: "job-portal",
    title: "MERN Job Portal",
    subtitle: "Role-Based Recruitment & Career Management Platform",
    category: "Full-Stack Web App",
    image: "/jobportal.webp",
    description:
      "A complete full-stack job portal application featuring dedicated dashboards for Job Seekers, Recruiters, and Administrators, complete with role-based authentication, real-time application pipelines, and dynamic job listings.",
    challenge:
      "Structuring isolated role-based permissions (Job Seekers vs Recruiters vs Administrators) and secure REST API contracts while managing application state and CRUD listings seamlessly.",
    contribution:
      "Architected backend REST APIs using Node.js and Express.js, implemented JWT user authentication and role guards, structured MongoDB schemas, and crafted a responsive React client with Tailwind CSS.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    featured: true,
    stats: {
      metrics: "Live on Vercel",
      status: "Production Deployment",
      type: "Full-Stack MERN",
    },
    links: {
      live: "https://job-portal-2627.vercel.app",
      github: "https://github.com/arib-akhtar",
    },
    accentGlow: "rgba(168, 85, 247, 0.35)",
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone — E-Commerce",
    subtitle: "Frontend E-Commerce Platform with Cart & Checkout",
    category: "E-Commerce Web App",
    image: "/amazon.webp",
    description:
      "A comprehensive Amazon e-commerce frontend clone built with React and Tailwind CSS, featuring dynamic product catalogs, persistent cart state management, responsive UI design, and interactive checkout user flows.",
    challenge:
      "Designing a responsive e-commerce product grid, persistent shopping cart state across browser sessions, and simulating dynamic checkout processing flows.",
    contribution:
      "Constructed dynamic product filtering and search, modeled persistent shopping cart context with local storage, and crafted pixel-accurate UI components with responsive mobile design.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Context API", "Netlify"],
    featured: true,
    stats: {
      metrics: "Live on Netlify",
      status: "Production Demo",
      type: "E-Commerce App",
    },
    links: {
      live: "https://clonebrand.netlify.app",
      github: "https://github.com/arib-akhtar",
    },
    accentGlow: "rgba(168, 85, 247, 0.35)",
  },
];

export const experienceData = [
  {
    role: "Full Stack Web Developer | MERN Stack Developer",
    organization: "Freelance & Independent Projects",
    period: "2024 — Present",
    location: "Ranchi, Jharkhand, India (Remote)",
    description:
      "Architecting and delivering full-stack web applications, dynamic client platforms, and responsive interfaces with React, Node.js, Express, MongoDB, and Tailwind CSS.",
    highlights: [
      "Built and launched official agency web platform for Aivon Tech with interactive AI chat inquiry widget.",
      "Engineered complete MERN Job Portal with distinct candidate and recruiter portals, JWT auth, and CRUD operations.",
      "Designed and deployed performant production builds to Vercel, Netlify, and cloud hosts.",
    ],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Doranda College, Ranchi",
    period: "2026 — 2029",
    status: "Currently pursuing 1st Year",
    details:
      "Core curriculum covering computer science foundations, data structures, algorithms, database management systems, and modern software engineering.",
  },
];

export const certificationsData = [
  {
    title: "Full-Stack MERN Development Certificate",
    issuer: "Emancipation Edutech Private Limited",
    date: "2026",
    type: "Verified Credential",
    image: "/Mern.certificate.jpeg",
    credentialUrl: "/MERN-CERTIFICATE.pdf",
    description:
      "Completed rigorous 6-month hands-on immersion in modern JavaScript full-stack development, mastering React.js, Node.js, Express.js, MongoDB schemas, REST API architecture, and JWT authentication.",
    skillsCovered: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
  },
  {
    title: "Simplilearn Professional Certificate",
    issuer: "Simplilearn SkillUp",
    date: "2026",
    type: "Verified Credential",
    image: "/Java.certificate.png",
    credentialUrl: "https://simpli-web.app.link/e/wZdTNPhug7b",
    description:
      "Foundational object-oriented programming in Java SE, focusing on OOP encapsulation, inheritance hierarchies, polymorphism, interfaces, robust exception handling, and algorithmic logic.",
    skillsCovered: ["Java SE", "OOP", "Exception Handling", "Inheritance", "Algorithms"],
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy (Cisco NetAcad)",
    recipientName: "Arib Akhtar",
    date: "22 Oct 2026",
    credentialId: "3dc663c5-80eb-43d5-a017-c6bcb0ef1cb4",
    type: "Verified Credential",
    image: "/Python.certificate.png",
    credentialUrl:
      "/Python_Essentials_1_certificate_arib-000789-gmail-com_3dc663c5-80eb-43d5-a017-c6bcb0ef1cb4.pdf",
    description:
      "Successfully completed Python Essentials 1 through the Cisco Networking Academy program.",
    skillsCovered: ["Python 3", "Data Structures", "Algorithms", "OOP Logic", "Automation"],
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy (Cisco NetAcad)",
    recipientName: "Arib Akhtar",
    date: "22 Oct 2026",
    credentialId: "6560b440-40fa-486e-b674-e826fcb9055b",
    type: "Verified Credential",
    image: "/Python2.certificate.png",
    credentialUrl:
      "/Python_Essentials_2_certificate_arib-000789-gmail-com_b560b440-40fa-486e-b674-e826fcb9055b.pdf",
    description:
      "Successfully completed Python Essentials 2 through the Cisco Networking Academy program.",
    skillsCovered: ["Python 3", "Advanced OOP", "Packages & Modules", "Generators & Closures", "File I/O"],
  },
];

export const certificationsOverviewData = [
  {
    title: "Production Client Deployment — Aivon Tech",
    date: "2024",
    description:
      "Successfully launched the live agency web application (theaivontech.netlify.app) featuring custom animations, responsive layouts, and integrated AI assistant.",
  },
  {
    title: "End-to-End MERN Stack Job Portal Deployment",
    date: "2024",
    description:
      "Engineered and deployed a full-scale job recruitment portal with dual role auth, live application pipelines, and MongoDB database architecture on Vercel.",
  },
  {
    title: "Completed 6-Month Comprehensive MERN Stack Program",
    date: "2024",
    description:
      "Earned formal certificate of completion mastering full-stack web development, RESTful API design, and modern JavaScript engineering.",
  },
];
export const achievementsData = certificationsOverviewData;

export const badgesData = [
  {
    name: "MERN Stack Specialist",
    category: "Full-Stack Development",
    icon: "MERN",
    issuer: "Certified",
  },
  {
    name: "React & Modern UI",
    category: "Frontend Engineering",
    icon: "REACT",
    issuer: "Verified",
  },
  {
    name: "REST API Architecture",
    category: "Backend Systems",
    icon: "API",
    issuer: "Verified",
  },
  {
    name: "Git & Version Control",
    category: "Developer Workflow",
    icon: "GIT",
    issuer: "Verified",
  },
];

export const skillCategories = [
  {
    name: "Frontend Development",
    description:
      "Building modern, responsive, and interactive user interfaces with crisp component architecture.",
    skills: [
      { name: "React.js", level: "Primary", highlight: true },
      { name: "JavaScript", level: "Core", highlight: true },
      { name: "HTML5", level: "Core", highlight: false },
      { name: "CSS3", level: "Core", highlight: false },
      { name: "Tailwind CSS", level: "Styling", highlight: true },
    ],
  },
  {
    name: "Backend Development",
    description:
      "Structuring reliable server environments, REST API contracts, and secure authentication flows.",
    skills: [
      { name: "Node.js", level: "Runtime", highlight: true },
      { name: "Express.js", level: "Framework", highlight: true },
      { name: "REST APIs", level: "Architecture", highlight: true },
      { name: "JWT Auth", level: "Security", highlight: true },
      { name: "CRUD Operations", level: "Logic", highlight: false },
    ],
  },
  {
    name: "Databases & Services",
    description:
      "Schema modeling, data persistence, and query structuring for scalable application state.",
    skills: [
      { name: "MongoDB", level: "Database", highlight: true },
      { name: "Mongoose ODM", level: "Data Layer", highlight: true },
      { name: "Data Validation", level: "Integrity", highlight: false },
    ],
  },
  {
    name: "Developer Tools & Deployment",
    description:
      "Version control, build automation, continuous deployment, and testing workflows.",
    skills: [
      { name: "Git", level: "Version Control", highlight: true },
      { name: "GitHub", level: "Collaboration", highlight: true },
      { name: "Vercel", level: "Deployment", highlight: true },
      { name: "Netlify", level: "Deployment", highlight: true },
      { name: "Vite", level: "Build Tool", highlight: true },
    ],
  },
];

export const processStages = [
  {
    number: "01",
    phase: "Understand",
    summary: "Clarify the problem, audience, functional requirements, and technical constraints.",
    detail:
      "Before writing code, I analyze user flows, define component hierarchies, and clarify the core challenge to avoid wasted cycles.",
  },
  {
    number: "02",
    phase: "Architect",
    summary: "Plan component boundaries, data models, APIs, and styling design tokens.",
    detail:
      "Establishing predictable state patterns, clean folder structures, and reusable design primitives early ensures high velocity and maintainability.",
  },
  {
    number: "03",
    phase: "Build",
    summary: "Develop responsive interfaces, application logic, and full-stack integrations.",
    detail:
      "Writing clean, self-documenting code with semantic markup, modern CSS tokens, and robust server handlers that handle real edge cases gracefully.",
  },
  {
    number: "04",
    phase: "Refine",
    summary: "Test responsiveness, fix edge cases, improve accessibility, and tune performance.",
    detail:
      "Validating keyboard navigation, verifying contrast ratios, inspecting mobile viewports, and ensuring animations respect reduced motion.",
  },
  {
    number: "05",
    phase: "Ship",
    summary: "Prepare deployment, verify production bundle, and document important decisions.",
    detail:
      "Executing production builds, verifying asset caching, checking Core Web Vitals, and packaging code for seamless continuous deployment.",
  },
];
