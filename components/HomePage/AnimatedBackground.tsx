"use client";

import React, { useState, useEffect } from "react";

interface BubbleProps {
  id: number;
  size: number;
  left: number;
  animationDuration: number;
  delay: number;
}

export const AnimatedBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: BubbleProps[] = Array.from({ length: 20 }).map(
        (_, index) => ({
          id: index,
          size: Math.random() * 100 + 20,
          left: Math.random() * 100,
          animationDuration: Math.random() * 10 + 5,
          delay: Math.random() * 5,
        })
      );
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bg-blue-500/20 rounded-full animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};