'use client';

import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
  <footer className="relative bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border-t border-white/10 py-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-gray-300"
        >
          <span>&copy; 2025 Nitesh Pandey. All rights reserved.</span>
          <Heart className="w-4 h-4 text-red-500" />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-6"
        >
          <a
            href="mailto:niteshpandey868@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/nitesh868-art"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nitesh-pandey-901b07331/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer; 