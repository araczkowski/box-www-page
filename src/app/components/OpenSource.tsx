"use client";

import { motion } from "framer-motion";
import { ArrowRight, Command, Globe, Settings2, Download } from "lucide-react";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Open Source.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed"
          >
            Pełna wolność. Nieskończone możliwości.
            <br />
            System na Linux Box jest w pełni otwarty.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title="Wolny Dostęp"
            description="Pobierz i zainstaluj system na USB, karcie SD lub pamięci eMMC. Linux Box ma włączony multiboot - wystarczy podłączyć nośnik."
            delay={0.2}
          />
          <FeatureCard
            icon={<Command className="w-8 h-8" />}
            title="Ubuntu 25.04"
            description="Gotowy do użycia system z preinstalowanym oprogramowaniem. W pełni funkcjonalny i zoptymalizowany dla Linux Box."
            delay={0.3}
          />
          <FeatureCard
            icon={<Settings2 className="w-8 h-8" />}
            title="Pełna Kontrola"
            description="Modyfikuj, instaluj i dostosowuj do swoich potrzeb. Dostęp do konta root i pełna swoboda konfiguracji."
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <a
            href="https://drive.google.com/file/d/1QR6u-WGWogbvLDciO9ELbaHB35zI3ucf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-lg font-medium transition-all hover:bg-slate-800 hover:scale-105 active:scale-95"
          >
            <Download className="w-5 h-5" />
            <span>Pobierz Obraz Systemu</span>
            <span className="text-slate-400 ml-2 text-sm">Ubuntu 25.04</span>
          </a>

          <p className="text-slate-500 text-sm">
            Instrukcje instalacji znajdziesz w{" "}
            <a
              href="/docs"
              rel="noopener noreferrer"
              className="text-slate-900 font-medium hover:underline inline-flex items-center gap-1"
            >
              dokumentacji
              <ArrowRight className="w-3 h-3" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300"
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
