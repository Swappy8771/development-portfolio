export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demo?: string | null;
  repo?: string | null;
  tags?: string[];
  category?: string;
  isClient?: boolean;
}

export const projectsData: ProjectData[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    image: "/projects/ecommerce.jpg",
    demo: "https://ecommerce-demo.vercel.app",
    repo: "https://github.com/username/ecommerce-platform",
    category: "Full Stack",
    tags: ["Featured"],
    isClient: false,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "/projects/taskapp.jpg",
    demo: "https://taskapp-demo.vercel.app",
    repo: "https://github.com/username/task-management",
    category: "Full Stack",
    tags: ["Featured"],
    isClient: false,
  },
  {
    id: "3",
    title: "Client Portfolio Website",
    description: "A stunning portfolio website for a creative agency with custom animations, CMS integration, and optimized performance.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    image: "/projects/portfolio.jpg",
    demo: "https://client-portfolio.com",
    repo: null,
    category: "Client",
    tags: ["Client Work"],
    isClient: true,
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["Vue.js", "TypeScript", "OpenWeather API", "Chart.js"],
    image: "/projects/weather.jpg",
    demo: "https://weather-dashboard.vercel.app",
    repo: "https://github.com/username/weather-dashboard",
    category: "Frontend",
    tags: ["Featured"],
    isClient: false,
  },
  {
    id: "5",
    title: "WordPress E-Learning Site",
    description: "Custom WordPress theme and plugin development for an online learning platform with course management and student progress tracking.",
    tech: ["WordPress", "PHP", "MySQL", "JavaScript", "SCSS"],
    image: "/projects/elearning.jpg",
    demo: "https://elearning-site.com",
    repo: null,
    category: "WordPress",
    tags: ["Client Work"],
    isClient: true,
  },
  {
    id: "6",
    title: "Social Media Analytics Tool",
    description: "A comprehensive analytics dashboard for social media management with data visualization and automated reporting features.",
    tech: ["React", "Python", "FastAPI", "PostgreSQL", "D3.js"],
    image: "/projects/analytics.jpg",
    demo: null,
    repo: "https://github.com/username/social-analytics",
    category: "Full Stack",
    tags: ["In Progress"],
    isClient: false,
  },
  {
    id: "7",
    title: "Mobile Banking App UI",
    description: "Modern and secure mobile banking interface design with intuitive user experience and accessibility features.",
    tech: ["React Native", "TypeScript", "Expo", "Redux"],
    image: "/projects/banking.jpg",
    demo: null,
    repo: null,
    category: "Mobile",
    tags: ["Client Work", "In Progress"],
    isClient: true,
  },
  {
    id: "8",
    title: "API Documentation Generator",
    description: "An automated tool for generating beautiful API documentation from code comments with interactive examples and testing capabilities.",
    tech: ["Node.js", "TypeScript", "Markdown", "Express"],
    image: "/projects/apidocs.jpg",
    demo: "https://api-docs-generator.vercel.app",
    repo: "https://github.com/username/api-docs-generator",
    category: "Tools",
    tags: ["Featured"],
    isClient: false,
  },
];
