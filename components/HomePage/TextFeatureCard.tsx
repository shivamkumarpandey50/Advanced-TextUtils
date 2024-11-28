"use client";

import React from "react";

interface TextFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const TextFeatureCard: React.FC<TextFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};