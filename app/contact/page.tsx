import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - Swapnil.dev',
  description: 'Get in touch with Swapnil Patil for your next project. Full Stack Developer specializing in React, Next.js, and modern web development.',
  keywords: ['Contact', 'Hire Developer', 'Full Stack Developer', 'React Developer', 'Next.js', 'Web Development'],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Visit my main portfolio page to get in touch and see all my work in one place.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-md mx-auto">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-gray-300 mb-6">
                My portfolio is now a single page application with all sections integrated.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
              >
                Go to Main Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}