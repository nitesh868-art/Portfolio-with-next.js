'use client';

import React, { useState, useEffect } from 'react';

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute text-white opacity-60"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
};

export default StarBackground; 