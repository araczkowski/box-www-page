"use client";

import { useState, useEffect } from "react";

export default function MobileTopBar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme") as "dark" | "light";
      if (newTheme) {
        setTheme(newTheme);
      }
    };

    window.addEventListener("themeChanged", handleThemeChange);

    return () => {
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
    window.dispatchEvent(new Event("themeChanged"));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      document.getElementById("mobile-top-menu")?.classList.add("hidden");
    }
  };

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-top-menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <>
      {/* Top Bar - widoczny zawsze na mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-40 ${
          theme === "dark"
            ? "bg-slate-900/80 border-slate-700"
            : "bg-white/80 border-slate-200"
        } backdrop-blur-lg border-b`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-bold text-xl transition-colors ${
              theme === "dark"
                ? "text-white hover:text-purple-400"
                : "text-slate-900 hover:text-purple-600"
            }`}
          >
            🐧 Linux Box
          </button>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800 hover:bg-slate-700 border border-slate-700"
                  : "bg-slate-100 hover:bg-slate-200 border border-slate-300"
              }`}
              aria-label="Przełącz motyw"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
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
                <svg
                  className="w-5 h-5 text-purple-600"
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

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-slate-800"
                  : "text-slate-900 hover:bg-slate-100"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-top-menu"
          className={`hidden ${
            theme === "dark"
              ? "bg-slate-900/95 border-slate-700"
              : "bg-white/95 border-slate-200"
          } backdrop-blur-lg border-t`}
        >
          <div className="flex flex-col gap-3 p-4">
            <button
              onClick={() => scrollToSection("tech-specs")}
              className={`text-left py-3 px-4 rounded-lg transition-colors font-medium ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Specyfikacja
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`text-left py-3 px-4 rounded-lg transition-colors font-medium ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Funkcje
            </button>
            <button
              onClick={() => scrollToSection("comparison")}
              className={`text-left py-3 px-4 rounded-lg transition-colors font-medium ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Porównanie
            </button>
            <button
              onClick={() => scrollToSection("opensource")}
              className={`text-left py-3 px-4 rounded-lg transition-colors font-medium ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Download
            </button>
            <a
              href="https://allegro.pl/uzytkownik/AI-Speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold text-center hover:shadow-lg transition-all duration-300"
            >
              🛒 Kup teraz
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
