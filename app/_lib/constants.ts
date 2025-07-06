import { m } from "framer-motion";

export const techCardsItems = [
  // Languages
  {
    name: "Java",
    description: "Object-oriented programming",
    category: "Languages",
    imageUrl: "/imgs/logos/java.svg",
    bgColor: "bg-[#3373bd]/40",
  },
  {
    name: "Python",
    description: "ML and Scripting",
    category: "Languages",
    imageUrl: "/imgs/logos/python.svg",
    bgColor: "bg-[#306998]/60",
  },
  {
    name: "C, C#, C++",
    description: "Low-level programming ",
    category: "Languages",
    imageUrl: "/imgs/logos/c.svg",
    bgColor: "bg-[#4479A1]/60",
  },
  {
    name: "SQL",
    description: "Database query language",
    category: "Languages",
    imageUrl: "/imgs/logos/sql.svg",
    bgColor: "bg-[#439ECB]/60",
  },
  {
    name: "JavaScript",
    description: "Web development language",
    category: "Languages",
    imageUrl: "/imgs/logos/javascript.svg",
    bgColor: "bg-[#F7DF1E]/60",
  },
  {
    name: "HTML/CSS",
    description: "Markup and styling languages",
    category: "Languages",
    imageUrl: "/imgs/logos/htmlcss.svg",
    bgColor: "bg-[#d65f0b]/80",
  },
  {
    name: "PHP",
    description: "Server-side scripting language",
    category: "Languages",
    imageUrl: "/imgs/logos/php.svg",
    bgColor: "bg-[#777BB4]/60",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript",
    category: "Languages",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/60",
  },

  // Frontend Frameworks / Libraries
  {
    name: "React",
    description: "JavaScript library for UI",
    category: "Frontend",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/60",
  },
  {
    name: "Angular",
    description: "Web application framework",
    category: "Frontend",
    imageUrl: "/imgs/logos/angular.svg",
    bgColor: "bg-[#DD0031]/60",
  },
  {
    name: "Next.js",
    description: "React framework for SSR apps",
    category: "Frontend",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-[#000000]/40",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS framework",
    category: "Frontend",
    imageUrl: "/imgs/logos/tailwindcss.svg",
    bgColor: "bg-[#38B2AC]/60",
  },
  {
    name: "Webpack",
    description: "Frontend bundler",
    category: "Frontend",
    imageUrl: "/imgs/logos/webpack.svg",
    bgColor: "bg-[#bcb9b8]/40",
  },
   {
    name: "Jinja",
    description: "Python template engine",
    category: "Frontend",
    imageUrl: "/imgs/logos/jinja.svg",
    bgColor: "bg-[#db3f3f]/40",
  },
   {
    name: "Vue.js",
    description: "Progressive JS framework",
    category: "Frontend",
    imageUrl: "/imgs/logos/vue.svg",
    bgColor: "bg-[#8ED6FB]/40",
  },
  {
    name: "Figma",
    description: "Design Tool",
    category: "Frontend",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },


  // Backend & Runtime
  {
    name: ".NET",
    description: "Microsoft dev framework",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/dotnet.svg",
    bgColor: "bg-[#512BD4]/60",
  },
  {
    name: "Flask",
    description: "Python micro web framework",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/flask.svg",
    bgColor: "bg-[#ffffff]/30",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime environment",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/nodejs.svg",
    bgColor: "bg-[#68A063]/60",
  },
  {
    name: "Express.js",
    description: "Web framework for Node.js",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/express.svg",
    bgColor: "bg-[#ffffff]/60",
  },
  {
    name: "REST APIs",
    description: "Application integration standard",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/rest.svg",
    bgColor: "bg-[#4A90E2]/40",
  },
  {
    name: "GraphQL",
    description: "Query language for APIs",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/graphql.svg",
    bgColor: "bg-[#E535AB]/40",
  },
  {
    name: "WebSockets",
    description: "Communication protocol",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/websockets.svg",
    bgColor: "bg-[#ffffff]/40",
  },
  {
    name: "JWT",
    description: "Token-based authentication",
    category: "Backend & Runtime",
    imageUrl: "/imgs/logos/jwt.svg",
    bgColor: "bg-[#000000]/40",
  },


  // Machine Learning
  {
    name: "TensorFlow",
    description: "Machine learning framework",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/tensorflow.svg",
    bgColor: "bg-[#FF6F00]/60",
  },
  {
    name: "Pytorch",
    description: "Deep learning framework",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/pytorch.svg",
    bgColor: "bg-[#EE4C2C]/60",
  },
  {
    name: "scikit-learn",
    description: "Machine learning library",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/scikit-learn.svg",
    bgColor: "bg-[#F7931E]/50",
  },
  {
    name: "LlamaIndex",
    description: "Framework for LLM-leverage",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/llamaindex.svg",
    bgColor: "bg-[#1e1e1e]/60",
  },
  {
    name: "spaCy",
    description: "Industrial-strength NLP",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/spacy.svg",
    bgColor: "bg-[#09A3D5]/50",
  },
  {
    name: "Stanza",
    description: "Stanford NLP toolkit",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/stanza.svg",
    bgColor: "bg-[#800000]/50",
  },

  {
    name: "HuggingFace",
    description: "Pretrained NLP models",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/huggingface.svg",
    bgColor: "bg-[#FFD21F]/60",
  },
  {
    name: "TextStat",
    description: "Text readability analysis tool",
    category: "Machine Learning",
    imageUrl: "/imgs/logos/textstat.svg",
    bgColor: "bg-[#666666]/40",
  },

  // Databases & ORMs
  {
    name: "MySQL",
    description: "Relational database tool",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/mysql.svg",
    bgColor: "bg-[#ffffff]/60",
  },
  {
    name: "PostgreSQL",
    description: "Best open-source database",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/60",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#4DB33D]/60",
  },
  {
    name: "Firebase",
    description: "Backend as a service",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/firebase.svg",
    bgColor: "bg-[#FFCA28]/70",
  },
  {
    name: "Supabase",
    description: "Open-source backend tool",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/60",
  },
  {
    name: "SQLite",
    description: "Embedded SQL database",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/sqlite.svg",
    bgColor: "bg-[#003B57]/60",
  },
  {
    name: "Prisma",
    description: "TypeScript ORM",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/prisma.svg",
    bgColor: "bg-[#0C344B]/50",
  },
  {
    name: "Redis",
    description: "In-memory data store",
    category: "Databases & ORMs",
    imageUrl: "/imgs/logos/redis.svg",
    bgColor: "bg-[#DC382D]/60",
  },

  // Tools & DevOps
  {
    name: "Git",
    description: "Version control system",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F05032]/60",
  },
  {
    name: "Docker",
    description: "Containerization platform",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/docker.svg",
    bgColor: "bg-[#2496ED]/60",
  },
  {
    name: "Kubernetes",
    description: "Container orchestration",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/kubernetes.svg",
    bgColor: "bg-[#326CE5]/60",
  },
  {
    name: "Bash",
    description: "Shell scripting language",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/bash.svg",
    bgColor: "bg-[#4EAA25]/40",
  },
  {
    name: "Linux",
    description: "Development operating system",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/linux.svg",
    bgColor: "bg-[#FCC624]/40",
  },
  {
    name: "CUDA",
    description: "NVIDIA GPU toolkit",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/cuda.svg",
    bgColor: "bg-[#76B900]/50",
  },
  {
    name: "OAuth2",
    description: "Secure authorization framework",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/oauth.svg",
    bgColor: "bg-[#2C6BED]/40",
  },
  {
    name: "Microsoft 365",
    description: "Cloud-based office tools",
    category: "Tools & DevOps",
    imageUrl: "/imgs/logos/microsoft365.svg",
    bgColor: "bg-[#0078D4]/60",
  },


  // Cloud & Hosting
  {
    name: "Google Cloud Platform",
    description: "Cloud services by Google",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/gcp.svg",
    bgColor: "bg-[#4285F4]/60",
  },
  {
    name: "AWS",
    description: "Amazon Web Services",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/aws.svg",
    bgColor: "bg-[#FF9900]/60",
  },
  {
    name: "Azure",
    description: "Microsoft Cloud Platform",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/azure.svg",
    bgColor: "bg-[#0078D4]/60",
  },
  {
    name: "Netlify",
    description: "Cloud hosting for frontend",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/netlify.svg",
    bgColor: "bg-[#00C7B7]/60",
  },
  {
    name: "Heroku",
    description: "Cloud application platform",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/heroku.svg",
    bgColor: "bg-[#430098]/60",
  },
  {
    name: "Render",
    description: "Cloud hosting for developers",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/render.svg",
    bgColor: "bg-[#46E3B7]/40",
  },
   {
    name: "DigitalOcean",
    description: "Cloud hosting service",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/digitalocean.svg",
    bgColor: "bg-[#46E3B7]/40",
  },
   {
    name: "Vercel",
    description: "Cloud application hub",
    category: "Cloud & Hosting",
    imageUrl: "/imgs/logos/vercel.svg",
    bgColor: "bg-[#46E3B7]/40",
  },
];


export const portfolioProjects = [
   {
    id: "RadMappingPlus",
    heading: "RadMapping+",
    subheading: "Centralized Radiologist Operations Platform",
    description:
      "RadMapping+ is a centralized platform for managing radiologist schedules, specialties, facility assignments, licensing, and workload analytics, along with other related information. It integrates real-time data sync from Google Sheets with a secure Supabase backend and a Flask/Jinja-based web dashboard. Also integrates RAG using OpenAI and LlamaIndex for a fully-functional chatbot assistant leveraging existing database information to answer queries.",
    imageUrl: "/imgs/projects/portfolio-mockup5.png",
    techStack: [
      "Python",
      "Flask",
      "Supabase",
      "OpenAI",
      "LlamaIndex",
      "GCP",
      "Jinja/HTML/TailwindCSS",
      "OAuth2",
      "Docker",
      "ShadCN/UI",
    ],
    liveDemoUrl: "https://flask-app-522764157304.us-central1.run.app",
    sourceCodeUrl: "https://github.com/acozy03/RadmappingPlus",
  },
    {
    id: "ILR_Classifier",
    heading: "ILR Classifier",
    subheading: "UCF Collaboration with The National Security Agency",
    description:
      "The ILR Predictor is a deep learning-powered tool designed to analyze text complexity and linguistic features to predict the minimum Interagency Language Roundtable (ILR) proficiency level required to understand a given text. Has support in multiple languages and auto-detects input language using spaCy, refining user experience. Partnership with the DLIFLC and the NSA to aid in automating the process for creating DLPT exams.",
    imageUrl: "/imgs/projects/portfolio-mockup4.png",
    techStack: [
      "TensorFlow",
      "Keras",
      "Supabase",
      "spaCy",
      "Python",
      "TextStat",
      "Pandas & NumPy",
      "FastAPI",
      "HuggingFace",
      "CUDA",
      "Uvicorn"

    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/acozy03/ilr_predictor",
  },
    {
    id: "C3",
    heading: "C3 UCF Collegiate Cybersecurity Competition Team Website",
    subheading: "",
    description:
      "Quality Assurance Leader for the University of Central Florida's C3 Team's official website. The website is for any and all students interested in joining the team, or for any individual just looking to learn more about the orginization.",
    imageUrl: "/imgs/projects/portfolio-mockup3.png",
    techStack: [
      "TypeScript",
      "React",
      "Node.js",
      "TailwindCSS",
      "mySQL",
      "Figma",
      "Jest"
    ],
    liveDemoUrl: "https://cs.ucf.edu/CyberCompetitionTeam/#/",
    sourceCodeUrl: "https://github.com/SadieNiBu/UXTeam14",
  },
  {
    id: "tracktion",
    heading: "Tracktion",
    subheading: "a modern habit trackting website",
    description:
      "A habit tracking app that allows the user to keep track of their progress through streaks... The application is developed with React + Typescript for the frontend, and Next.js for the backend. Also with mobile compatibility using Dart, introducing JWT for user verification and forgot password functionality.",
    imageUrl: "/imgs/projects/portfolio-mockup1.png",
    techStack: [
      "TypeScript",
      "React",
      "JWT",
      "TailwindCSS",
      "MongoDB",
      "Node.js",
      "REST APIs"
    ],
    liveDemoUrl: "https://tracktion-jade.vercel.app",
    sourceCodeUrl: "https://github.com/acozy03/Tracktion",
  },

  {
    id: "continuum",
    heading: "Continuum",
    subheading: "A 2D Platformer Game",
    description:
      "A simple platformer game developed with Unity and C#... introduction to game development and practical C# programming.",
    imageUrl: "/imgs/projects/portfolio-mockup2.png",
    techStack: [
      "Unity",
      "C#",
      "Behavior Trees",
      "TextMeshPro",
      "Finite State Machines"
    ],
    liveDemoUrl: "https://acozy03.itch.io/continuum",
    sourceCodeUrl: "https://github.com/Suaremente/Continuum",
  },




  
     {
    id: "AtlasWikiAI",
    heading: "AtlasWikiAI",
    subheading: "Wiki-Based System with AI Chatbot Integration",
    description:
      "Work in progress project, will be leveraging OpenAI with vector search RAG to support embedding of user queries and retrieve context to perform similarity search on the chunks within the pages related to the current user. Implementing text editor system with QuillJS similar to Notion to introduce clean formatting to custom user Wiki Pages that dynamically link to each other and introduce flexibility for note-taking and housing important static information.",
    imageUrl: "/imgs/projects/portfolio-mockup6.png",
    techStack: [
      "Python",
      "Flask",
      "Supabase",
      "OpenAI",
      "JavaScript",
      "Quill.js:",
      "Marked.js",
      "TurndownService",
      "pgvector",
    ],
    liveDemoUrl: "https://github.com/acozy03/AtlasAI",
    sourceCodeUrl: "https://github.com/acozy03/AtlasAI",
  },
];