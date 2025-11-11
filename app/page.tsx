import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

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
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project.
            </p>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+917758023925" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +91 7758023925
                </a>
              </div>
              
              {/* Email */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:swapnilpatil7050@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  swapnilpatil7050@gmail.com
                </a>
              </div>
              
              {/* Location */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <a href="https://maps.google.com/?q=Pune,Maharashtra,India" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Pune, Maharashtra, India
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
  );
}
