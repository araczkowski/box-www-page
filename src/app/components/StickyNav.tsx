"use client";

import { useState, useEffect } from "react";

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż navbar po scrollu 300px (zarówno mobile jak i desktop)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 backdrop-blur-xl shadow-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-bold text-lg tracking-tight transition-opacity text-slate-900 hover:opacity-75"
          >
            <span>🐧</span>
            <span className="font-semibold">Linux Box</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-tight">
            <a
              href="/docs"
              className="transition-colors text-slate-600 hover:text-slate-900"
            >
              Dokumentacja
            </a>
            <button
              onClick={() => scrollToSection("tech-specs")}
              className="transition-colors text-slate-600 hover:text-slate-900"
            >
              Specyfikacja
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="transition-colors text-slate-600 hover:text-slate-900"
            >
              Funkcje
            </button>
            <button
              onClick={() => scrollToSection("comparison")}
              className="transition-colors text-slate-600 hover:text-slate-900"
            >
              Porównanie
            </button>
            <button
              onClick={() => scrollToSection("opensource")}
              className="transition-colors text-slate-600 hover:text-slate-900"
            >
              Pobierz System
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-slate-900 hover:bg-slate-100"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              className="w-5 h-5"
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

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden pb-4 border-slate-200 border-t"
        >
          <div className="flex flex-col gap-2 mt-3 text-sm font-medium">
            <a
              href="/docs"
              className="text-left py-2 px-4 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
            >
              Dokumentacja
            </a>
            <button
              onClick={() => {
                scrollToSection("tech-specs");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
            >
              Specyfikacja
            </button>
            <button
              onClick={() => {
                scrollToSection("features");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
            >
              Funkcje
            </button>
            <button
              onClick={() => {
                scrollToSection("comparison");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
            >
              Porównanie
            </button>
            <button
              onClick={() => {
                scrollToSection("opensource");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
            >
              Pobierz System
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
