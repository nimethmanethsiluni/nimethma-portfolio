// ─── Personal Info ───────────────────────────────────────────────────
export const personalInfo = {
  name: "Nimethma Nethsiluni",
  title:
    "Information Systems Undergraduate | Project Management • Business Analysis • Data Analytics • Software Engineering",
  tagline:
    "Bridging business needs with technology — from requirements to delivery.",
  email: "nimethma@example.com",
  github: "https://github.com/nimethma",
  linkedin: "https://linkedin.com/in/nimethma",
  location: "Colombo, Sri Lanka",
  cvPath: "/assets/cv/Nimethma_Nethsiluni_CV.pdf",
  profileImage: "/assets/profile.jpg",
};

// ─── About / Bio ─────────────────────────────────────────────────────
export const about = {
  bio: "Motivated, organized Information Systems undergraduate at Sabaragamuwa University of Sri Lanka with strong interest in project management, technology, and business. Experienced supporting project planning, coordination, and cross-functional collaboration on real-world platforms, with hands-on exposure to data analytics and software development.",
  education: [
    {
      degree: "BSc (Hons) in Information Systems",
      institution:
        "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
      period: "2024 – Present",
    },
    {
      degree: "Advanced Level — Physical Science Stream",
      institution: "Sujatha Vidyalaya, Matara",
      period: "2022",
    },
  ],
};

// ─── Technical Skills (categorised) ──────────────────────────────────
export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "PHP", "JavaScript", "HTML", "CSS", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Project Management & Design Tools",
    items: ["Trello", "Jira", "ClickUp", "Figma"],
  },
  {
    category: "Data & Analytics",
    items: [
      "Power BI",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Microsoft Excel",
      "Google Sheets",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
  {
    category: "Version Control & Tools",
    items: ["GitHub", "VS Code"],
  },
];

// ─── Projects ────────────────────────────────────────────────────────
export const projects = [
  {
    id: "justicepal",
    title: "JusticePal",
    subtitle: "AI Lawyer Recommendation & Legal Assistance Platform",
    role: "Knowledge Base Specialist",
    description:
      'Contributed to an AI-powered legal assistance platform connecting clients with suitable legal professionals. Supported project planning, task coordination, documentation, feature development, and cross-functional collaboration across frontend, backend, database, AI, and system integration. Built the RAG-based "Consult AI" FAQ chatbot and managed the Pinecone vector database.',
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Prisma",
      "Firebase",
      "REST APIs",
      "Vector Database",
      "RAG",
      "LLMs",
    ],
    image: "/assets/projects/justicepal.jpg",
    github: "https://github.com/nimethma/justicepal",
    live: null,
  },
  {
    id: "exchange-rate",
    title: "Sri Lanka Exchange Rate & Inflation Analysis",
    subtitle: null,
    role: null,
    description:
      "Analyzed Sri Lanka's 2022 currency crisis, uncovering the depreciation timeline and its lagged link to inflation. Cleaned government data with Python, built a PostgreSQL database, and designed an interactive Power BI dashboard using window-function SQL analysis.",
    tech: ["PostgreSQL (Neon)", "Python", "Power BI", "SQL"],
    image: "/assets/projects/exchange-rate.jpg",
    github: "https://github.com/nimethma/exchange-rate-analysis",
    live: null,
  },
  {
    id: "loome",
    title: "Loome",
    subtitle: "Handcrafted Batik E-Commerce Platform",
    role: null,
    description:
      "Developed a responsive e-commerce platform for showcasing and selling handcrafted Sri Lankan batik products — product browsing, cart management, user authentication, custom orders, and an artisan dashboard.",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/assets/projects/loome.jpg",
    github: "https://github.com/nimethma/loome",
    live: "https://loome.vercel.app",
  },
];

// ─── Volunteering & Leadership ───────────────────────────────────────
export const volunteering = [
  {
    id: "socs-vice-sec",
    role: "Vice Secretary",
    organization:
      "Society of Computer Sciences (SOCS), Sabaragamuwa University of Sri Lanka",
    period: "2025 – Present",
    image: "/assets/volunteering/socs.jpg",
  },
  {
    id: "designora",
    role: "Secretary Team Lead",
    organization:
      "Designora Workshop, IEEE Women in Engineering Affinity Group, SUSL",
    period: "2026 – Present",
    image: "/assets/volunteering/designora.jpg",
  },
  {
    id: "aurelia",
    role: "Secretary Team Member",
    organization:
      "AURELIA IEEE WIE Day 2026, IEEE Women in Engineering Affinity Group, SUSL",
    period: "2026",
    image: "/assets/volunteering/aurelia.jpg",
  },
  {
    id: "pixel-pioneers",
    role: "Program Team Member",
    organization:
      "Pixel Pioneers Game Jam v1, IEEE Computer Society Student Branch Chapter of SUSL",
    period: "2026",
    image: "/assets/volunteering/pixel-pioneers.jpg",
  },
  {
    id: "icarc",
    role: "Volunteer",
    organization:
      "ICARC 2026, International Conference on Advanced Research and Computing, Faculty of Computing, SUSL",
    period: "2026",
    image: "/assets/volunteering/icarc.jpg",
  },
];

// ─── Navigation links ───────────────────────────────────────────────
export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Volunteering", to: "volunteering" },
  { label: "Resume", to: "resume" },
  { label: "Contact", to: "contact" },
];
