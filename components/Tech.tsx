'use client';

import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiExpress, 
  SiPhp, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiAngular, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiLaravel, 
  SiGit, 
  SiMysql 
} from 'react-icons/si';

const Tech = () => {
  const technologies = [
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiAngular, name: 'Angular', color: '#DD0031' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express', color: '#000000' },
    { icon: SiPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-16 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies for building exceptional web applications
          </p>
        </motion.div>

        {/* Waving Tech Icons */}
        <div className="relative">
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8 md:space-x-12"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2 + (index % 3) * 0.5, // Staggered wave effect
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      },
                      scale: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ backgroundColor: tech.color }}
                      />
                      
                      {/* Icon container */}
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <IconComponent 
                          className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110" 
                          style={{ color: tech.color }}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap border border-white/10">
                          {tech.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Additional Tech Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-pink-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Built</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-violet-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Passion Driven</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to bring your ideas to life with these powerful technologies?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Build Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;