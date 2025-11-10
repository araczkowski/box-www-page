"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Settings } from "lucide-react";

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Open Source
          </h2>
          <p className="text-xl text-purple-400 font-semibold">
            System na Linux Box jest w pełni otwarty!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src="/Open_Source_Initiative.svg"
                    alt="Open Source"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Wolny Dostęp
              </h3>

              <p className="text-gray-400">
                Pobierz i zainstaluj system na USB, karcie SD lub pamięci eMMC.
                Linux Box ma włączony multiboot - wystarczy podłączyć nośnik z
                systemem.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  🐧
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Ubuntu 25.04
              </h3>

              <p className="text-gray-400">
                Gotowy do użycia system z preinstalowanym oprogramowaniem. W
                pełni funkcjonalny i zoptymalizowany dla Linux Box.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Pełna Kontrola
              </h3>

              <p className="text-gray-400">
                Modyfikuj, instaluj i dostosowuj do swoich potrzeb. Dostęp do
                konta root-a i pełna swoboda w instalacji programów i
                konfiguracji systemu.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <a
            href="https://drive.google.com/file/d/1QR6u-WGWogbvLDciO9ELbaHB35zI3ucf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-2">
              <Download className="w-8 h-8 group-hover:animate-bounce" />
              <span className="text-xl">POBIERZ OBRAZ SYSTEMU</span>
              <span className="text-sm font-normal flex items-center gap-2">
                <span>🐧</span> Ubuntu 25.04
              </span>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400">
            Instrukcje instalacji znajdziesz w{" "}
            <a
              href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors underline"
            >
              dokumentacji
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
