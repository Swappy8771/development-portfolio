export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  tech: string[];
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Codixly Tech Solutions",
    role: "Full Stack Developer",
    duration: "Jan 2023 – Present",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
    achievements: [
      "Built and deployed a multi-vendor e-commerce platform with Razorpay integration.",
      "Developed secure authentication and role-based access for LMS system.",
      "Enhanced UI/UX across multiple products using React and Framer Motion.",
    ],
  },
  {
    company: "Freelance Projects",
    role: "Web Developer & Designer",
    duration: "2021 – 2023",
    tech: ["React", "Figma", "Firebase", "Express"],
    achievements: [
      "Designed and launched 10+ responsive business websites.",
      "Improved client conversion rates through user-centric designs.",
      "Delivered scalable backend integrations and real-time features.",
    ],
  },
  {
    company: "Personal Projects",
    role: "Independent Developer",
    duration: "2020 – 2021",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    achievements: [
      "Created dynamic portfolio websites with custom animations.",
      "Built responsive web applications with modern design principles.",
      "Learned and implemented best practices in web development.",
    ],
  },
];
