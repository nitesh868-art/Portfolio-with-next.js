'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageModal from '@/components/ImageModal';

const Home: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center text-center px-6 py-20 min-h-[90vh] section-transparent overflow-hidden"
    >
      <div
        className="z-10 flex flex-col items-center gap-8 max-w-4xl glass-card p-10 card-hover-effect"
        onMouseMove={e => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty('--x', `${x}%`);
          card.style.setProperty('--y', `${y}%`);
        }}
        onMouseLeave={e => {
          const card = e.currentTarget;
          card.style.setProperty('--x', '50%');
          card.style.setProperty('--y', '50%');
        }}
      >
        <div className="glass-spotlight" />
        
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl hover:brightness-110 transition-all duration-500 cursor-pointer hover:scale-105"
          onClick={() => setIsImageModalOpen(true)}
          title="Click to enlarge"
        >
          <Image
            src="/assets/profile.png"
            alt="Nitesh Pandey - Software Developer"
            width={144}
            height={144}
            className="w-full h-full object-cover"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </motion.div>

        {/* Name and Title */}
        <div className="space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="text-2xl sm:text-3xl text-white font-medium">
              Hi, I&apos;m
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-400">
              Nitesh Pandey
            </h1>
            <div className="text-xl sm:text-2xl text-white font-medium">
              React.js Enthusiast
            </div>
          </motion.div>
        </div>

        {/* Bio */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl text-lg sm:text-xl text-gray-300 leading-relaxed text-center"
        >
          Passionate about building clean, fast, and responsive web interfaces.
          Skilled in React.js, Tailwind CSS, and modern frontend tools. Always eager
          to learn and grow in the full-stack world.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-6 items-center"
        >
          {/* Resume Download */}
          <a
            href="/my_resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 btn-hover-effect font-semibold text-lg hover:brightness-110"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          {/* Contact */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full hover:bg-blue-900/20 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 btn-hover-effect font-semibold text-lg hover:brightness-110"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 flex gap-8"
        >
          <a
            href="https://github.com/nitesh868-art"
            target="_blank"
            rel="noopener noreferrer"
            className="professional-social"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/nitesh-pandey-901b07331/"
            target="_blank"
            rel="noopener noreferrer"
            className="professional-social"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        src="/assets/profile.png"
        alt="Nitesh Pandey - Software Developer"
        width={800}
        height={800}
      />
    </motion.section>
  );
};

export default Home;
