"use client";

import HeaderSimple from "./components/HeaderSimple";
import StickyNav from "./components/StickyNav";

import MobileTopBar from "./components/MobileTopBar";
import TechSpecs from "./components/TechSpecs";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Comparison from "./components/Comparison";
import OpenSource from "./components/OpenSource";

import { Mail, FileText, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1d1d1f]">
      <MobileTopBar />
      <StickyNav />

      <HeaderSimple />

      <TechSpecs />

      <Screenshots />

      <Features />

      <Comparison />

      <OpenSource />

      {/* Apple-style Minimal Footer */}
      <footer className="relative bg-[#f5f5f7] border-t border-slate-200/80 text-[#86868b] overflow-hidden">
        {/* Ambient gradient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0071e3]/8 blur-[120px] animate-aurora" />
          <div
            className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#00e5c8]/8 blur-[120px] animate-aurora"
            style={{ animationDelay: "5s" }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand Section */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight">
                  Linux Box
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed font-medium">
                  Twój kompaktowy serwer domowy. Wydajność, elastyczność i cena
                  w jednym.
                </p>
              </div>

              {/* Links Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                  Przydatne linki
                </h4>
                <div className="space-y-2 text-sm font-medium">
                  <a
                    href="/docs"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[#86868b] hover:text-[#0071e3] transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Dokumentacja</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                  Kontakt
                </h4>
                <a
                  href="mailto:info@sviete.pl"
                  className="group inline-flex items-center gap-3 text-[#86868b] hover:text-[#0071e3] transition-colors text-sm font-medium"
                >
                  <div className="p-2 rounded-xl bg-white text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@sviete.pl</span>
                </a>
              </div>
            </div>

            {/* SEO Keywords Section */}
            <div className="mb-12 p-6 rounded-2xl glass-light border border-white/60 shadow-md">
              <p className="text-xs text-[#86868b] leading-relaxed">
                <span className="font-semibold text-[#1d1d1f] mr-2">
                  SEO Keywords:
                </span>
                Raspberry Pi, alternatywa dla Raspberry Pi, Home Assistant,
                serwer domowy, Ubuntu, Docker, Amlogic S922X-H, Mini PC,
                CoreELEC, Batocera, Domoticz, SUPLA, OpenHAB, Pi-hole,
                Nextcloud, self-hosting, tani serwer, kompaktowy serwer, serwer
                multimedialny, konsola retro.
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-slate-200/60">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#86868b]">
                <p>
                  &copy; {new Date().getFullYear()} Linux Box. Wszystkie prawa
                  zastrzeżone.
                </p>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <span className="text-red-500 text-xl">♥</span>
                  <span>for you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
