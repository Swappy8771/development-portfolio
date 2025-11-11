import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Tech from "../components/Tech";
import ScrollToTop from "../components/ScrollToTop";
import { Metadata } from 'next';
import { aboutData } from '../data/aboutData';

export const metadata: Metadata = {
  title: 'Swappy.dev - Full Stack Developer Portfolio',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and get in touch.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Development', 'Portfolio'],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950" style={{ scrollBehavior: 'smooth' }}>
        <Navbar />
        
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Tech Stack Section */}
        <Tech />
        
        {/* About Section */}
        <section id="about">
          <AboutSection data={aboutData} />
        </section>
        
        {/* Experience Section */}
        <section id="experience">
          <ExperienceSection />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
  );
}
