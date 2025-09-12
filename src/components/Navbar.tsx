'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/skills', label: 'Skills', icon: Code },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-gradient-to-r from-black/90 via-gray-900/90 to-blue-900/90 backdrop-blur-2xl border-b border-blue-400/30 shadow-2xl shadow-blue-500/20' 
          : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-blue-800/80 backdrop-blur-xl border-b border-blue-400/20'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 navbar-container">
        {/* Navigation Bar - Centered */}
        <div className="flex items-center justify-center h-16">
          
          {/* Navigation - Always Visible */}
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`navbar-item group relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-blue-600/20 to-white/10 border border-blue-400/50 shadow-lg shadow-blue-500/25'
                        : 'text-white hover:text-blue-200 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-white/5 border border-transparent hover:border-blue-400/30'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-white/10 border border-blue-400/50"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar; 