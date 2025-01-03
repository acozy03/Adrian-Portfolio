"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  // Start with dark mode as default
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage for saved preference
    const isDarkMode = localStorage.getItem("darkMode") !== "false"; // Default to dark mode
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full text-gray-800 dark:text-gray-200"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
