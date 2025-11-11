'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { AboutData } from '@/data/aboutData';

interface AboutSectionProps {
  data: AboutData;
}

const AboutSection = ({ data }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      // Animate the experience counter
      const targetValue = parseInt(data.highlights[0].value);
      let current = 0;
      const increment = targetValue / 30; // 30 frames for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setExperienceCount(targetValue);
          clearInterval(timer);
        } else {
          setExperienceCount(Math.floor(current));
        }
      }, 50);
    }
  }, [isInView, controls, data.highlights]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
          </svg>
        );
      case 'Code':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'MapPin':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio and Skills */}
          <div className="space-y-8">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h2>
              <p className="text-xl text-blue-400 font-medium mb-6">{data.title}</p>
              <p className="text-gray-300 leading-relaxed text-lg">{data.description}</p>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-100">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {data.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Highlights and CTA */}
          <div className="space-y-8">
            {/* Highlights Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-100">Highlights</h3>
              <div className="space-y-4">
                {data.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-violet-400/50 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {getIcon(highlight.icon)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-300 text-sm font-medium">{highlight.label}</h4>
                        <p className="text-xl font-bold text-gray-100">
                          {index === 0 ? (
                            <span>
                              {experienceCount}
                              {highlight.value.includes('+') ? '+' : ''} Years
                            </span>
                          ) : (
                            highlight.value
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <motion.a
                href={data.resumeUrl}
                download
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl overflow-hidden transition-all duration-300 hover:from-blue-600 hover:to-violet-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <svg
                  className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h4 className="text-xl font-bold text-gray-100 mb-4">Let&apos;s Connect!</h4>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m always excited to collaborate on interesting projects and discuss new opportunities. 
                Feel free to reach out if you&apos;d like to work together or just have a chat about technology!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
