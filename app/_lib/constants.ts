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

  // Frameworks / Libraries
  {
    name: "React",
    description: "JavaScript library for UI",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/60",
  },
  {
    name: "TensorFlow",
    description: "Machine learning framework",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/tensorflow.svg",
    bgColor: "bg-[#FF6F00]/60",
  },
  {
    name: "Pytorch",
    description: "Deep learning framework",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/pytorch.svg",
    bgColor: "bg-[#EE4C2C]/60",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime environment",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/nodejs.svg",
    bgColor: "bg-[#68A063]/60",
  },
  {
    name: "Angular",
    description: "Web application framework",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/angular.svg",
    bgColor: "bg-[#DD0031]/60",
  },
  {
    name: ".NET",
    description: "Microsoft dev framework",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/dotnet.svg",
    bgColor: "bg-[#512BD4]/60",
  },
  {
    name: "Express.js",
    description: "Web framework for Node.js",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/express.svg",
    bgColor: "bg-[#ffffff]/60",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS framework",
    category: "Frameworks / Libraries",
    imageUrl: "/imgs/logos/tailwindcss.svg",
    bgColor: "bg-[#38B2AC]/60",
  },
  

  // Other Technologies
  {
    name: "Git",
    description: "Version control system",
    category: "Other",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F05032]/60",
  },
  {
    name: "Microsoft 365",
    description: "Cloud-based office tools",
    category: "Other",
    imageUrl: "/imgs/logos/microsoft365.svg",
    bgColor: "bg-[#0078D4]/60",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    category: "Other",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#4DB33D]/60",
  },
  {
    name: "Firebase",
    description: "Backend as a service",
    category: "Other",
    imageUrl: "/imgs/logos/firebase.svg",
    bgColor: "bg-[#FFCA28]/70",
  },
  {
    name: "MySQL",
    description: "Relational database tool",
    category: "Other",
    imageUrl: "/imgs/logos/mysql.svg",
    bgColor: "bg-[#ffffff]/60",
  },
  {
    name: "PostgreSQL",
    description: "Best open-source database",
    category: "Other",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/60",
  },
  {
    name: "Docker",
    description: "Containerization platform",
    category: "Other",
    imageUrl: "/imgs/logos/docker.svg",
    bgColor: "bg-[#2496ED]/60",
  },
  {
    name: "Figma",
    description: "Design Tool",
    category: "Other",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
  
];



export const portfolioProjects = [
  {
    id: "tracktion",
    heading: "Tracktion",
    subheading: "a modern habit trackting website",
    description:
      "A habit tracking app that allows the user to keep track of their progress through streaks... The application is developed with react + typescript for frontend part, and javascript as backend.",
    imageUrl: "/imgs/projects/portfolio-mockup1.png",
    techStack: [
      "TypeScript",
      "React",
      "Git",
      "MUI",
      "TailwindCSS",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    liveDemoUrl: "https://tracktion-jade.vercel.app",
    sourceCodeUrl: "https://github.com/acozy03/Tracktion",
  },

  {
    id: "continuum",
    heading: "Continuum",
    subheading: "A 2D Platformer Game",
    description:
      "A simple platformer game developed with Unity and C#... introduction to game development and practical coding.",
    imageUrl: "/imgs/projects/portfolio-mockup2.png",
    techStack: [
      "Unity",
      "C#",
      "Git",
      "Behavior Trees",
      "TextMeshPro",
      "Finite State Machines"
    ],
    liveDemoUrl: "https://acozy03.itch.io/continuum",
    sourceCodeUrl: "https://github.com/Suaremente/Continuum",
  },

  {
    id: "C3",
    heading: "C3 UCF Collegiate Cybersecurity Competition Team",
    subheading: "",
    description:
      "Quality Assurance Leader for the University of Central Florida's C3 Team's official website. The website is for any and all students interested in joining the team, or for any individual just looking to learn more about the orginization.",
    imageUrl: "/imgs/projects/portfolio-mockup3.png",
    techStack: [
      "TypeScript",
      "React",
      "Git",
      "Node.js",
      "TailwindCSS",
      "MongoDB",
      "Express",
    ],
    liveDemoUrl: "https://cs.ucf.edu/CyberCompetitionTeam/#/",
    sourceCodeUrl: "https://github.com/SadieNiBu/UXTeam14",
  },

  {
    id: "AIforForeignLanguageDLPT",
    heading: "AI for Foreign Language DLPT Generation",
    subheading: "UCF Collaboration with The National Security Agency (NSA)",
    description:
      "An AI Model for DLPT Text Classification and Passage Generation, currently in progress...",
    imageUrl: "/imgs/projects/portfolio-mockup4.png",
    techStack: [
      "TensorFlow",
      "PostgreSQL",
      "Git",
      "OPUS Tools",
      "Python",
      "TextStat",
      "Pandas & NumPy"
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/acozy03/AIDLPT-Data",
  },
];

