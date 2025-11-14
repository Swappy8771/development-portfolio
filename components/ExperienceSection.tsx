'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Code, CheckCircle, MapPin } from 'lucide-react';
import { experienceData, ExperienceItem } from '@/data/experienceData';

interface ExperienceSectionProps {
  data?: ExperienceItem[];
}

const ExperienceSection = ({ data = experienceData }: ExperienceSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="min-h-screen bg-gray-950 relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and the exciting projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 h-full hidden lg:block">
            <motion.div
              variants={timelineVariants}
              className="w-full bg-gradient-to-b from-blue-400 via-violet-500 to-pink-500 rounded-full"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-16">
            {data.map((experience, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={`${experience.company}-${index}`}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-16 gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-violet-500 rounded-full border-4 border-gray-950 z-10 hidden lg:block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-500 rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-violet-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10">
                      {/* Company & Role */}
                      <div className={`mb-6 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                        <div className="flex items-center gap-3 mb-2 justify-start lg:justify-start">
                          <div className="p-2 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {experience.company}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-violet-400 mb-2">{experience.role}</p>
                        <div className="flex flex-col gap-1 text-gray-400">
                          <div className="flex items-center gap-2 justify-start lg:justify-start">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 justify-start lg:justify-start">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className={`mb-6 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                        <div className="flex items-center gap-2 mb-3 justify-start lg:justify-start">
                          <Code className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-medium text-gray-300">Tech Stack</span>
                        </div>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                          {experience.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-violet-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-violet-500/30 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className={`${isEven ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                          <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2 justify-start lg:justify-start">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-gray-400 text-sm leading-relaxed flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-violet-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="w-full lg:w-5/12 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to know more about my professional journey?
          </p>
        
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
