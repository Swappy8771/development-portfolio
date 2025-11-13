'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Lock, Construction } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demo?: string | null;
  repo?: string | null;
  tags?: string[];
  category?: string;
  isClient?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  demo,
  repo,
  tags = [],
  category,
  isClient = false,
}: ProjectCardProps) {
  const isInProgress = tags.includes('In Progress');
  const isPrivateProject = isClient && !repo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Gradient Border Animation on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-800">
        {image ? (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              className="object-cover transition-transform duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-gray-500 text-4xl font-bold opacity-50">
              {title.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {isInProgress && (
            <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30">
              <Construction size={12} />
              In Progress
            </span>
          )}
          {isPrivateProject && (
            <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-400 text-xs font-medium px-2 py-1 rounded-full border border-red-500/30">
              <Lock size={12} />
              Client Project
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category */}
        {category && (
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700 hover:border-gray-600 transition-colors"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
          )}
          
          {repo ? (
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label={`View source code of ${title} on GitHub`}
            >
              <Github size={16} />
              View Code
            </Link>
          ) : (
            <div className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-500 font-medium px-4 py-2.5 rounded-lg cursor-not-allowed">
              <Lock size={16} />
              Private Project
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}