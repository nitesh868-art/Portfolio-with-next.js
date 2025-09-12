'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Loading...
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-300"
        >
          Preparing your experience
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
