"use client";

import HeaderSimple from "./components/HeaderSimple";
import StickyNav from "./components/StickyNav";
import FloatingCTA from "./components/FloatingCTA";
import MobileTopBar from "./components/MobileTopBar";
import TechSpecs from "./components/TechSpecs";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import OpenSource from "./components/OpenSource";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MobileTopBar />
      <StickyNav />
      <FloatingCTA />
      <HeaderSimple />

      <TechSpecs />

      {/* Features */}

      {/* Features */}
      <Features />
      {/* Comparison */}
      <Comparison />

      {/* Open Source */}
      <OpenSource />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-600">
                  SEO Keywords:
                </span>{" "}
                Raspberry Pi, alternatywa dla Raspberry Pi, Home Assistant,
                serwer domowy, Ubuntu, Docker, Amlogic S905X3, Mini PC,
                CoreELEC, Batocera, Domoticz, SUPLA, OpenHAB, Pi-hole,
                Nextcloud, self-hosting, tani serwer, kompaktowy serwer, serwer
                multimedialny, konsola retro.
              </p>
            </div>

            <div className="mb-6">
              <a
                href="mailto:info@sviete.pl"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
              >
                ✉️ info@sviete.pl
              </a>
            </div>

            <p className="text-gray-600 mb-6">
              &copy; 2025 - 2026 Linux Box. Wszystkie prawa zastrzeżone.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Dokumentacja
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="https://allegro.pl/uzytkownik/AI-Speaker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sklep Allegro
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
