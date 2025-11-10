"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż button po scrollu 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://allegro.pl/uzytkownik/AI-Speaker"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="group relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>

        {/* Button */}
        <div className="relative px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-2xl group-hover:shadow-orange-500/50 transform group-hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛒</span>
              <span className="text-white font-bold text-lg whitespace-nowrap">
                Kup teraz
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/90 text-sm">Tylko</span>
              <span className="text-white font-bold text-xl">199 zł</span>
            </div>
          </div>
        </div>

        {/* Ping animation */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
      </div>
    </a>
  );
}
