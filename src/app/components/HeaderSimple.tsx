"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeaderSimple() {
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

  return (
    <header className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-b from-slate-900 to-slate-800" : "bg-gradient-to-b from-slate-50 to-slate-100"}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Badge */}
          <div className="flex justify-center mb-8 mt-16 opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm uppercase tracking-wider shadow-lg">
              🚀 Alternatywa dla Raspberry Pi
            </span>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.2s_forwards]">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6">
              Linux
              <span className="inline-block animate-bounce mx-2">🐧</span>
              Box
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
              Twój kompaktowy domowy serwer Ubuntu
            </p>
            <p className="text-lg sm:text-xl text-purple-400 font-semibold">
              Gotowy do pracy od razu po wyjęciu z pudełka
            </p>
          </div>

          {/* Device Showcase */}
          <div className="flex justify-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.4s_forwards]">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative p-8">
                <Image
                  src="/ais_gate_dev3_1.webp"
                  alt="Linux Box - kompaktowy serwer domowy"
                  width={500}
                  height={375}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.6s_forwards]">
            <a
              href="https://allegro.pl/uzytkownik/AI-Speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex flex-col items-center gap-1">
                <span className="flex items-center gap-2">
                  🛒 Kup teraz
                </span>
                <span className="text-sm font-normal">Tylko 199 zł</span>
              </span>
            </a>
            <a
              href="#features"
              className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-purple-500/50 hover:border-purple-400 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex flex-col items-center gap-1">
                <span className="flex items-center gap-2">
                  ℹ️ Poznaj
                </span>
                <span className="text-sm font-normal">możliwości</span>
              </span>
            </a>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.8s_forwards]">
            {[
              { icon: "💾", value: "128 GB", label: "eMMC" },
              { icon: "🧠", value: "4 GB", label: "RAM" },
              { icon: "⚡", value: "Amlogic", label: "S905X3" },
              { icon: "🖥️", value: "Ubuntu", label: "25.04" },
            ].map((spec, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-2">{spec.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">
                  {spec.value}
                </div>
                <div className="text-sm text-gray-400">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-in-out_1.2s_forwards]">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-sm">Przewiń w dół</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
