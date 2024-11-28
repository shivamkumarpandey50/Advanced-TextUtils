"use client";

import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Palette,
  Menu,
  X,
  Laptop,
  Rocket,
  Leaf,
  Cloud,
  Flame,
  Zap,
  Globe,
  Star,
  Heart,
  Shield,
  Coffee,
} from "lucide-react";

// Theme configuration
const themes = [
  {
    name: "Light",
    icon: <Sun />,
    colors: {
      background: "bg-white",
      text: "text-gray-900",
      primary: "bg-blue-600 text-white",
      secondary: "bg-gray-100 text-gray-800",
    },
  },
  {
    name: "Dark",
    icon: <Moon />,
    colors: {
      background: "bg-gray-900",
      text: "text-gray-100",
      primary: "bg-blue-700 text-white",
      secondary: "bg-gray-800 text-gray-300",
    },
  },
  {
    name: "Ocean",
    icon: <Cloud />,
    colors: {
      background: "bg-blue-50",
      text: "text-blue-900",
      primary: "bg-blue-600 text-white",
      secondary: "bg-blue-100 text-blue-800",
    },
  },
  {
    name: "Forest",
    icon: <Leaf />,
    colors: {
      background: "bg-green-50",
      text: "text-green-900",
      primary: "bg-green-600 text-white",
      secondary: "bg-green-100 text-green-800",
    },
  },
  {
    name: "Mountain",
    icon: <Laptop />,
    colors: {
      background: "bg-gray-100",
      text: "text-gray-800",
      primary: "bg-gray-700 text-white",
      secondary: "bg-gray-200 text-gray-700",
    },
  },
  {
    name: "Sunset",
    icon: <Flame />,
    colors: {
      background: "bg-orange-50",
      text: "text-orange-900",
      primary: "bg-orange-600 text-white",
      secondary: "bg-orange-100 text-orange-800",
    },
  },
  {
    name: "Space",
    icon: <Rocket />,
    colors: {
      background: "bg-indigo-900",
      text: "text-gray-100",
      primary: "bg-purple-600 text-white",
      secondary: "bg-indigo-800 text-gray-300",
    },
  },
  {
    name: "Energy",
    icon: <Zap />,
    colors: {
      background: "bg-yellow-50",
      text: "text-yellow-900",
      primary: "bg-yellow-600 text-white",
      secondary: "bg-yellow-100 text-yellow-800",
    },
  },
  {
    name: "Global",
    icon: <Globe />,
    colors: {
      background: "bg-teal-50",
      text: "text-teal-900",
      primary: "bg-teal-600 text-white",
      secondary: "bg-teal-100 text-teal-800",
    },
  },
  {
    name: "Cosmic",
    icon: <Star />,
    colors: {
      background: "bg-purple-900",
      text: "text-gray-100",
      primary: "bg-pink-600 text-white",
      secondary: "bg-purple-800 text-gray-300",
    },
  },
  {
    name: "Cozy",
    icon: <Coffee />,
    colors: {
      background: "bg-amber-50",
      text: "text-amber-900",
      primary: "bg-amber-600 text-white",
      secondary: "bg-amber-100 text-amber-800",
    },
  },
  {
    name: "Passion",
    icon: <Heart />,
    colors: {
      background: "bg-pink-50",
      text: "text-pink-900",
      primary: "bg-pink-600 text-white",
      secondary: "bg-pink-100 text-pink-800",
    },
  },
  {
    name: "Protect",
    icon: <Shield />,
    colors: {
      background: "bg-gray-50",
      text: "text-gray-900",
      primary: "bg-gray-600 text-white",
      secondary: "bg-gray-100 text-gray-800",
    },
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    document.body.className = `${currentTheme.colors.background} ${currentTheme.colors.text}`;
  }, [currentTheme]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Tools", href: "#tools" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
  ];

  const handleThemeChange = (theme: typeof themes[0]) => {
    setCurrentTheme(theme);
    setIsThemeOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 ${currentTheme.colors.secondary}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-bold ${currentTheme.colors.text}`}>
            TextUtils
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:opacity-80 transition-opacity duration-300 ${currentTheme.colors.text}`}
            >
              {item.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className={`flex items-center ${currentTheme.colors.primary} px-3 py-2 rounded-full`}
            >
              <Palette className="mr-2" size={18} />
              Theme
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 grid grid-cols-4 gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => handleThemeChange(theme)}
                    className={`p-2 rounded-lg flex items-center justify-center 
                      ${theme.colors.background} 
                      ${theme.colors.text}
                      hover:scale-110 transition-transform
                      ${currentTheme.name === theme.name ? "ring-2 ring-blue-500" : ""}
                    `}
                    title={theme.name}
                  >
                    {theme.icon}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${currentTheme.colors.text} mr-2`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className={`fixed inset-0 z-50 md:hidden ${currentTheme.colors.background}`}>
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <span className={`text-2xl font-bold ${currentTheme.colors.text}`}>
                  TextUtils
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`${currentTheme.colors.text} focus:outline-none`}
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block text-xl hover:opacity-80 transition-opacity duration-300 ${currentTheme.colors.text}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-4">
                  <button
                    onClick={() => setIsThemeOpen(!isThemeOpen)}
                    className={`w-full flex items-center justify-center ${currentTheme.colors.primary} px-4 py-3 rounded-full`}
                  >
                    <Palette className="mr-2" size={18} />
                    Change Theme
                  </button>

                  {isThemeOpen && (
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {themes.map((theme) => (
                        <button
                          key={theme.name}
                          onClick={() => handleThemeChange(theme)}
                          className={`p-2 rounded-lg flex items-center justify-center 
                            ${theme.colors.background} 
                            ${theme.colors.text}
                            hover:scale-110 transition-transform
                            ${currentTheme.name === theme.name ? "ring-2 ring-blue-500" : ""}
                          `}
                          title={theme.name}
                        >
                          {theme.icon}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};