import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
      <div className="pt-20 pb-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Coming Soon! I&apos;m currently working on showcasing my professional journey here.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-md mx-auto">
              <div className="text-6xl mb-4">💼</div>
              <p className="text-gray-300">
                This section is under construction. Check back soon for my professional experience!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
