'use client';

import React from 'react';
import Link from 'next/link';
import { Code, User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center text-center px-6 py-20 min-h-[80vh] section-transparent overflow-hidden"
    >
      <div
        className="z-10 flex flex-col items-center gap-8 max-w-5xl glass-card p-10 card-hover-effect"
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
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl professional-heading text-white mb-8">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 professional-body max-w-4xl mx-auto leading-relaxed">
            I&apos;m a passionate Software Developer and B.Tech CSE student at Rai University, 
            dedicated to creating exceptional digital experiences through innovative web technologies 
            and cutting-edge development practices.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center text-center hover:shadow-blue-500/20 transition-all duration-500 card-hover-effect professional-glass-card"
          >
            <div className="p-6 rounded-full bg-gradient-to-r from-blue-500/20 to-white/10 mb-6">
              <Code className="h-10 w-10 text-blue-400" />
            </div>
            <h4 className="font-bold text-2xl text-white mb-4 professional-subheading">
              Frontend Development
            </h4>
            <p className="text-gray-200 text-lg leading-relaxed professional-body">
              Expert in React.js, TypeScript, Next.js, and modern JavaScript frameworks. 
              Building scalable, performant web applications with cutting-edge technologies.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center text-center hover:shadow-blue-500/20 transition-all duration-500 card-hover-effect professional-glass-card"
          >
            <div className="p-6 rounded-full bg-gradient-to-r from-white/10 to-gray-300/10 mb-6">
              <User className="h-10 w-10 text-white" />
            </div>
            <h4 className="font-bold text-2xl text-white mb-4 professional-subheading">
              UI/UX Design
            </h4>
            <p className="text-gray-200 text-lg leading-relaxed professional-body">
              Creating intuitive, accessible, and visually stunning user interfaces. 
              Focused on user-centered design principles and modern design systems.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center text-center hover:shadow-blue-500/20 transition-all duration-500 card-hover-effect professional-glass-card sm:col-span-2 lg:col-span-1"
          >
            <div className="p-6 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 mb-6">
              <Briefcase className="h-10 w-10 text-green-400" />
            </div>
            <h4 className="font-bold text-2xl text-white mb-4 professional-subheading">
              Full-Stack Development
            </h4>
            <p className="text-gray-200 text-lg leading-relaxed professional-body">
              Building end-to-end solutions with modern technologies. 
              Experience in both frontend and backend development with a focus on scalability.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 professional-subheading">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "React.js", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3",
              "Tailwind CSS", "Node.js", "Git", "Figma", "VS Code", "Responsive Design"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-tag text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 btn-primary text-white professional-btn shadow-2xl font-semibold text-lg min-w-[200px]"
          >
            Get In Touch
          </Link>

          <a
            href="/my_resume.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-4 btn-secondary professional-btn font-semibold text-lg min-w-[200px]"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 