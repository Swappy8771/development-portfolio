'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://github.com/swappy-dev',
      icon: Github,
      label: 'GitHub',
      external: true,
    },
    {
      href: 'https://linkedin.com/in/swappy-dev',
      icon: Linkedin,
      label: 'LinkedIn',
      external: true,
    },
    {
      href: 'https://twitter.com/swappy_dev',
      icon: Twitter,
      label: 'Twitter',
      external: true,
    },
    {
      href: 'https://instagram.com/swappy.dev',
      icon: Instagram,
      label: 'Instagram',
      external: true,
    },
    {
      href: 'mailto:hello@swappy.dev',
      icon: Mail,
      label: 'Email',
      external: false,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-950/80 backdrop-blur-md border-t border-white/10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={scrollToTop}
                className="text-2xl md:text-3xl font-bold mb-4 cursor-pointer group"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-300">
                  Swappy.dev
                </span>
              </button>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Full Stack Developer passionate about creating exceptional digital experiences.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {navigationLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm block py-1 group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className="group relative p-3 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                        {social.external && (
                          <ExternalLink className="inline w-3 h-3 ml-1" />
                        )}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-gray-500 text-xs">
                Let&apos;s build something amazing together!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
        />

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
                Swappy
              </span>
              {' '}| All Rights Reserved
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Made with ❤️ using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <svg
          className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;