"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* SEO Keywords Section */}
          <div className="mb-8 bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800">
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-400">SEO Keywords:</span>{" "}
              Raspberry Pi, alternatywa dla Raspberry Pi, Home Assistant, serwer domowy,
              Ubuntu, Docker, Amlogic S905X3, Mini PC, CoreELEC, Batocera, Domoticz,
              SUPLA, OpenHAB, Pi-hole, Nextcloud, self-hosting, tani serwer,
              kompaktowy serwer, serwer multimedialny, konsola retro.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <a
              href="mailto:info@sviete.pl"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
            >
              <Mail className="w-5 h-5" />
              info@sviete.pl
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500">
            &copy; 2025 Linux Box. Wszystkie prawa zastrzeżone.
          </p>

          {/* Additional Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Dokumentacja
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://allegro.pl/uzytkownik/AI-Speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Sklep Allegro
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
