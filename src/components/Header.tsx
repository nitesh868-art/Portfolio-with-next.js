'use client';

import React from 'react';

interface HeaderProps {
  bgMode?: 'dark';
  onBgToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ bgMode = 'dark', onBgToggle }) => {
  return (
    <header className="absolute top-6 left-6 z-50">
      <div className="text-left">
        {/* Name removed as requested */}
      </div>
    </header>
  );
};

export default Header; 