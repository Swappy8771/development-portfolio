import AboutSection from '@/components/AboutSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { aboutData } from '@/data/aboutData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Swapnil dev',
  description: 'Learn more about Swapnil Patil, a passionate Full Stack Developer specializing in React, Next.js, and the MERN stack.',
  keywords: ['About', 'Full Stack Developer', 'React', 'Next.js', 'MERN Stack', 'Web Development'],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutSection data={aboutData} />
      <Footer />
    </main>
  );
}