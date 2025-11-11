import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Swappy.dev',
  description: 'Get in touch with Swappy for your next project. Full Stack Developer specializing in React, Next.js, and modern web development.',
  keywords: ['Contact', 'Hire Developer', 'Full Stack Developer', 'React Developer', 'Next.js', 'Web Development'],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}