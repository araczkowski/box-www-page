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
      className={`hidden md:block fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-white/80 border-gray-200 backdrop-blur-lg border-b shadow-lg`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-bold text-xl transition-colors text-black hover:text-blue-600"
          >
            🐧 Linux Box
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("tech-specs")}
              className="transition-colors font-medium text-gray-600 hover:text-black"
            >
              Specyfikacja
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="transition-colors font-medium text-gray-600 hover:text-black"
            >
              Funkcje
            </button>
            <button
              onClick={() => scrollToSection("comparison")}
              className="transition-colors font-medium text-gray-600 hover:text-black"
            >
              Porównanie
            </button>
            <button
              onClick={() => scrollToSection("opensource")}
              className="transition-colors font-medium text-gray-600 hover:text-black"
            >
              Download
            </button>

            {/* CTA Button */}
            <a
              href="https://allegro.pl/uzytkownik/AI-Speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🛒 Kup teraz
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-black hover:bg-gray-100"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
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

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden pb-4 border-gray-200 border-t"
        >
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={() => {
                scrollToSection("tech-specs");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-gray-600 hover:bg-gray-100"
            >
              Specyfikacja
            </button>
            <button
              onClick={() => {
                scrollToSection("features");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-gray-600 hover:bg-gray-100"
            >
              Funkcje
            </button>
            <button
              onClick={() => {
                scrollToSection("comparison");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-gray-600 hover:bg-gray-100"
            >
              Porównanie
            </button>
            <button
              onClick={() => {
                scrollToSection("opensource");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left py-2 px-4 rounded-lg transition-colors text-gray-600 hover:bg-gray-100"
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
    </nav>
  );
}
