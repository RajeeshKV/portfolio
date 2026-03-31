export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroInfo = {
  title: "Rajeesh KV.",
  subtitle: "Staff Engineer | Backend Architect",
  summary:
    "Staff Engineer with 5+ years of experience designing and scaling enterprise backend platforms using ASP.NET Core and Microservices architecture. Specialized in Clean Architecture, Domain-Driven Design, CQRS, and Azure cloud integrations.",
};

export const projects = [
  {
    id: 1,
    title: "Seraphine Flowers",
    subtitle: "Frontend Architect",
    description:
      "A high-performance floral e-commerce platform built with React 18 and Vite, developed entirely through AI-assisted prompting using Antigravity. Firebase powers real-time data and authentication.",
    tags: ["React 18", "Vite", "Firebase", "Cloudinary"],
    features: [
      "Cloudinary + LocalStorage Caching",
      "Dynamic Weather Context Engine",
      "WhatsApp Integrated Order Flow",
      "Firebase Auth & Firestore",
    ],
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ui5suLfiOcfsaNriGszT4I1Jevk9Rbp-59PMsHu0NIyJ5uWhfe8OhABGeVU7e0O-l2gawQbpvQkNHOgS6RCZ_XankUw8aWrqSHKDHJmSzrx_91JaUgr8pkFuQP_zTPLRXdZn2v3XdD7qB_uk1AF-ZvxrN_ndGXDIAzeJL-ChSJsVzZH8kXKYmt4qHxKVGAjj16uusIvYWeeQl4nJi9Ygbnx0RB2FX_WYB1Qhorjz5rRi6NSVXvmgGqYnX4hLZztG4o2Y1HYjRvR3A",
    link: "#",
    featured: true,
    span: "col-span-12",
  },
  {
    id: 2,
    title: "Enterprise Leasing Platform",
    company: "Odessa Inc",
    logo: "/logos/odessa.svg",
    logoSize: "lg",
    description:
      "Architected and enhanced scalable backend services for enterprise leasing platforms, improving modularity, extensibility, and long-term maintainability of core financial systems.",
    tags: ["ASP.NET Core", "Clean Architecture", "DDD", "CQRS", "Azure"],
    highlights: [
      "High-throughput REST APIs with CQRS & MediatR",
      "Azure Service Bus for async processing",
      "Cross-Site Hybrid Portal via API orchestration",
      "Real-time chatbot with SignalR",
      "CI/CD pipelines via Azure DevOps",
      "Production support for HPE, MCB & TICF",
      "AI-assisted development workflows for accelerated delivery",
    ],
    techStack: ["C#", "Entity Framework", "Azure Key Vault", "Docker", "Application Insights"],
    span: "col-span-12",
    type: "company",
  },
  {
    id: 3,
    title: "AVIVA Insurance Platform",
    company: "Wipro",
    logo: "/logos/aviva.svg",
    logoSize: "md",
    description:
      "Developed and maintained enterprise insurance platforms supporting business-critical policy processing systems with high availability and regulatory compliance.",
    tags: ["ASP.NET MVC/Core", "SQL Server", "AWS EC2", "C++/C#"],
    highlights: [
      "Legacy VBScript modernization to C#",
      "Secure validation & compliance APIs",
      "Performance-sensitive C++ migrations",
      "Cloud deployments on AWS EC2",
    ],
    techStack: ["Git", "Bitbucket", "JIRA", "VBScript", "SQL Server"],
    span: "col-span-12 md:col-span-6",
    type: "company",
  },
  {
    id: 4,
    title: "Microservices Modernization",
    company: "V Software Consulting",
    logo: "/logos/vsoftware.svg",
    logoSize: "md",
    logoRounded: true,
    description:
      "Modernized legacy monolithic applications by decomposing them into ASP.NET Core Web API microservices, improving scalability and deployment independence.",
    tags: ["ASP.NET Core", "Web API", "Entity Framework", "Microservices"],
    highlights: [
      "Monolith to microservices decomposition",
      "Reusable RESTful service layer design",
      "Repository & service layer abstractions",
      "Frontend integration with JS & Bootstrap",
    ],
    techStack: ["C#", "jQuery", "Bootstrap", "GitHub"],
    span: "col-span-12 md:col-span-6",
    type: "company",
  },
];

export const skills = {
  backend: {
    icon: "terminal",
    title: "Backend Core",
    color: "primary",
    items: [
      { name: "ASP.NET Core / MVC", level: 95 },
      { name: "Web API / REST", level: 92 },
      { name: "Entity Framework / Fluent API", level: 88 },
      { name: "C# / LINQ", level: 94 },
    ],
  },
  architecture: {
    icon: "architecture",
    title: "Architecture & Patterns",
    color: "secondary",
    items: [
      { name: "Clean Architecture / DDD", level: 90 },
      { name: "Microservices", level: 88 },
      { name: "CQRS / MediatR", level: 85 },
      { name: "SOLID / Dependency Injection", level: 90 },
    ],
  },
  tools: [
    { icon: "cloud", name: "Azure Services" },
    { icon: "deployed_code", name: "Docker" },
    { icon: "settings_suggest", name: "CI/CD Pipelines" },
    { icon: "database", name: "SQL / PostgreSQL" },
    { icon: "code", name: "Git / GitHub / TFS" },
    { icon: "monitoring", name: "App Insights" },
    { icon: "integration_instructions", name: "Postman / Swagger" },
    { icon: "dns", name: "MongoDB" },
  ],
};

export const experiences = [
  {
    period: "JUL 2022 — PRESENT",
    role: "Staff Engineer",
    company: "ODESSA INC",
    location: "Bengaluru, India",
    description:
      "Architected and enhanced scalable backend services for enterprise leasing platforms using ASP.NET Core, Clean Architecture, and Domain-Driven Design.",
    highlights: [
      "Designed high-throughput REST APIs leveraging CQRS and MediatR for separation of command/query workloads",
      "Led secure integrations using Azure Service Bus and Azure Key Vault for async processing and secrets management",
      "Engineered Cross-Site Hybrid Portal enabling centralized execution of distributed platform actions",
      "Implemented real-time chatbot using SignalR for live customer interaction workflows",
      "Key role in production support for global clients including HPE, MCB, and TICF",
      "Optimized CI/CD pipelines using Azure DevOps for deployment automation",
      "Mentored junior developers on EF optimization, LINQ design, and Clean Architecture patterns",
      "Awarded the Launchpad Innovation Award for delivering high-impact enhancements",
    ],
    current: true,
  },
  {
    period: "FEB 2022 — JUL 2022",
    role: "Software Developer",
    company: "V SOFTWARE CONSULTING",
    location: "Bengaluru, India",
    description:
      "Modernized legacy monolithic applications by decomposing them into ASP.NET Core Web API microservices.",
    highlights: [
      "Designed reusable RESTful services using C# and Entity Framework",
      "Implemented repository and service layer abstractions for separation of concerns",
      "Collaborated with frontend teams integrating APIs with JavaScript, jQuery, and Bootstrap",
      "Strengthened version control workflows through GitHub branching and PR governance",
    ],
    current: false,
  },
  {
    period: "MAY 2019 — FEB 2022",
    role: "Software Engineer",
    company: "WIPRO",
    location: "Bengaluru, India",
    description:
      "Developed and maintained enterprise insurance platforms for AVIVA using ASP.NET MVC/Core and SQL Server.",
    highlights: [
      "Developed and maintained enterprise insurance platforms for AVIVA using ASP.NET MVC/Core and SQL Server",
      "Maintained and refactored legacy VBScript modules, ensuring operational continuity while enabling gradual modernization",
      "Migrated performance-sensitive components to C++/C#, improving execution efficiency and reducing processing latency",
      "Built secure internal APIs for validation workflows, structured data processing, and regulatory compliance handling",
      "Managed cloud deployments and infrastructure monitoring on AWS EC2, supporting stable production releases",
      "Utilized Git, Bitbucket, and JIRA for release management, defect tracking, and agile delivery cycles",
    ],
    current: false,
  },
];

export const education = {
  degree: "Bachelor of Computer Applications",
  institution: "St. Joseph's College",
  location: "Kerala, India",
  cgpa: "7.75",
};

export const contactInfo = {
  email: "rajeeshkva2z@gmail.com",
  phone: "+91 9656010927",
  linkedin: "https://linkedin.com/in/rajeesh-kv",
};
