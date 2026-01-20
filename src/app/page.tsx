"use client";

import HeaderSimple from "./components/HeaderSimple";
import StickyNav from "./components/StickyNav";
import FloatingCTA from "./components/FloatingCTA";
import MobileTopBar from "./components/MobileTopBar";
import TechSpecs from "./components/TechSpecs";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import OpenSource from "./components/OpenSource";
import { Mail, FileText, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      {/* Animated background gradient overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <MobileTopBar />
      <StickyNav />
      <FloatingCTA />
      <HeaderSimple />

      <TechSpecs />

      <Features />
      <Comparison />

      <OpenSource />

      {/* Modern Footer with Glassmorphism */}
      <footer className="relative bg-gradient-to-b from-gray-50 via-white to-white border-t border-gray-100 overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Linux Box
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Twój kompaktowy serwer domowy. Wydajność, elastyczność i cena w jednym.
                </p>
              </div>

              {/* Links Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Przydatne linki</h4>
                <div className="space-y-3">
                  <a
                    href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Dokumentacja</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://allegro.pl/uzytkownik/AI-Speaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Sklep Allegro</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Kontakt</h4>
                <a
                  href="mailto:info@sviete.pl"
                  className="group inline-flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200"
                >
                  <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">info@sviete.pl</span>
                </a>
              </div>
            </div>

            {/* SEO Keywords Section - Modern Card */}
            <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 backdrop-blur-sm shadow-sm">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700 mr-2">
                  SEO Keywords:
                </span>
                Raspberry Pi, alternatywa dla Raspberry Pi, Home Assistant,
                serwer domowy, Ubuntu, Docker, Amlogic S905X3, Mini PC,
                CoreELEC, Batocera, Domoticz, SUPLA, OpenHAB, Pi-hole,
                Nextcloud, self-hosting, tani serwer, kompaktowy serwer, serwer
                multimedialny, konsola retro.
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-sm">
                  &copy; {new Date().getFullYear()} Linux Box. Wszystkie prawa zastrzeżone.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Made with</span>
                  <span className="text-red-500">♥</span>
                  <span>for developers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
