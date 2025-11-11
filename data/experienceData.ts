export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  tech: string[];
  achievements?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Qodeways Technologies Pvt Ltd",
    role: "Full Stack Developer",
    duration: "Feb 2024 – Present",
    location: "Pune, India",
    tech: ["Next.js", "React.js", "Angular", "Django", "Node.js", "Redux"],
    achievements: [
      "Developed and maintained full-stack web applications using modern frameworks.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Implemented responsive designs and optimized application performance.",
    ],
  },
  {
    company: "Bright Forge Solutions",
    role: "Full Stack Developer",
    duration: "Aug 2023 – Feb 2024",
    location: "Pune, India",
    tech: ["Angular", "Spring Boot", "Java", "PostgreSQL", "PgAdmin", "Microservices"],
    achievements: [
      "Built scalable microservices architecture using Spring Boot and Java.",
      "Developed dynamic frontend applications with Angular and modern UI/UX principles.",
      "Managed database operations and optimization using PostgreSQL and PgAdmin.",
    ],
  },
];
