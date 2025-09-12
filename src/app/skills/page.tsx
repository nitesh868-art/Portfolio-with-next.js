'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skills = [
    { name: 'HTML/CSS', percentage: 95, category: 'Frontend' },
    { name: 'JavaScript', percentage: 90, category: 'Frontend' },
    { name: 'React', percentage: 90, category: 'Frontend' },
    { name: 'TypeScript', percentage: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', percentage: 90, category: 'Frontend' },
    { name: 'Next.js', percentage: 80, category: 'Frontend' },
    { name: 'Node.js', percentage: 80, category: 'Backend' },
    { name: 'Express', percentage: 75, category: 'Backend' },
    { name: 'MongoDB', percentage: 70, category: 'Backend' },
    { name: 'Git/GitHub', percentage: 85, category: 'Tools' },
    { name: 'Figma', percentage: 75, category: 'Tools' },
    { name: 'VS Code', percentage: 90, category: 'Tools' },
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-2">
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  />
                </div>
              </div>
              
              {/* Percentage */}
              <div className="text-right">
                <span className="text-blue-400 font-semibold text-lg">
                  {skill.percentage}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;