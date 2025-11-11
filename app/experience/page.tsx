import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ExperienceSection from "../../components/ExperienceSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Swappy.dev | Full Stack Developer Portfolio',
  description: 'My professional experience and career journey as a Full Stack Developer working with modern web technologies.',
  keywords: ['Experience', 'Career', 'Full Stack Developer', 'Professional Background', 'Work History'],
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
