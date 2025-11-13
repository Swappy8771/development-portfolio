'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projectsData';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories from projects data
  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category).filter(Boolean)))];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="bg-gray-950 text-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Featured & Client Work
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A selection of products, client work, and tools I've built recently.
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.6,
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                demo={project.demo}
                repo={project.repo}
                tags={project.tags}
                category={project.category}
                isClient={project.isClient}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#projects-bottom"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            View All Projects
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        {/* Anchor for "View All Projects" scroll target */}
        <div id="projects-bottom" className="h-1" />
      </div>
    </section>
  );
};

export default ProjectsSection;
