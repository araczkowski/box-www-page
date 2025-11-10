"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Sprawdź czy użytkownik ma zapisany motyw w localStorage
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");

    // Dispatch custom event dla innych komponentów
    window.dispatchEvent(new Event("themeChanged"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
      aria-label="Przełącz motyw"
    >
      {theme === "dark" ? (
        // Ikona słońca dla trybu jasnego
        <svg
          className="w-6 h-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ) : (
        // Ikona księżyca dla trybu ciemnego
        <svg
          className="w-6 h-6 text-purple-400 group-hover:-rotate-12 transition-transform duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      )}
    </button>
  );
}
