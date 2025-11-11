export const aboutData = {
  name: "Swappy",
  title: "Full Stack Developer",
  description:
    "I'm a passionate developer who loves building scalable and interactive web applications using the MERN stack and Next.js. I enjoy merging creativity with logic to create seamless digital experiences that solve real-world problems and deliver exceptional user experiences.",
  skills: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "Redux",
    "JavaScript",
    "Python",
    "PostgreSQL",
    "Git & GitHub",
  ],
  highlights: [
    { label: "Experience", value: "3+ Years", icon: "Briefcase" },
    { label: "Projects", value: "10+ Completed", icon: "Code" },
    { label: "Location", value: "India", icon: "MapPin" },
  ],
  resumeUrl: "/resume.pdf", // Add your resume file to public folder
};

export type AboutData = typeof aboutData;
