import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Tech from "../components/Tech";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swappy.dev - Full Stack Developer Portfolio',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and get in touch.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Development', 'Portfolio'],
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Tech />
      <Footer />
    </main>
  );
}
