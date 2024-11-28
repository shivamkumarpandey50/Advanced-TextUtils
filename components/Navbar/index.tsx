"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

// ... (keep existing themes array)

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const pathname = usePathname();

  useEffect(() => {
    document.body.className = `${currentTheme.colors.background} ${currentTheme.colors.text}`;
  }, [currentTheme]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
  ];

  // ... (keep rest of the component code the same)
};