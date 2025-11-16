'use client';

import { motion } from 'framer-motion';
import { Eye, ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
  };

  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Radial gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-pink-500/20 via-violet-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-400/5 via-purple-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300 text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Swapnil
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Full Stack Developer</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              I&apos;m a Full Stack Developer who enjoys turning real-world problems into simple, usable digital solutions.
I’ve worked across education, healthcare, logistics and finance, building products that actually get used.
Clean UI, reliable backend, and practical problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA - View My Work */}
              <motion.button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl overflow-hidden transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Eye className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary CTA - Contact Me */}
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats or Quick Info */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Hero Image/Avatar */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              {/* Floating Animation Container */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl scale-110" />
                
                {/* Hero Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                  {/* Placeholder for hero image */}
                  <div className="w-full h-full flex items-center justify-center">
                    {/* You can replace this with an actual image */}
                    <Image
                      src="/images/hero.png"
                      alt="Swapnil- Full Stack Developer"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                      priority
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback Avatar */}
                    <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                      <span className="text-8xl font-bold text-white">S</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    x: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl"
                >
                  💻
                </motion.div>

                <motion.div
                  animate={{
                    y: [5, -5, 5],
                    x: [2, -2, 2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full flex items-center justify-center text-white font-bold shadow-2xl"
                >
                  ⚡
                </motion.div>

                <motion.div
                  animate={{
                    y: [-3, 3, -3],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-xl"
                />

                <motion.div
                  animate={{
                    y: [3, -3, 3],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/4 -right-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;