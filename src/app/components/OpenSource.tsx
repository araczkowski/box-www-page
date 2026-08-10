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
            title="Ubuntu Resolute Raccoon (v26.04 LTS)"
            description="Gotowy do użycia system z jądrem Linux 6.18.40 oraz preinstalowanym oprogramowaniem. W pełni funkcjonalny i zoptymalizowany dla Linux Box PRO."
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
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-5xl px-4">
            <a
              href="https://drive.google.com/file/d/1QR6u-WGWogbvLDciO9ELbaHB35zI3ucf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-base md:text-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20 text-center w-full sm:w-auto"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>Pobierz obraz systemu Linux BOX Standard</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1k_emkVVHaHPSF7OMyaLP4WuSo5NNRz6F/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-base md:text-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 text-center w-full sm:w-auto"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>Pobierz obraz systemu Linux BOX PRO</span>
            </a>
          </div>

          <p className="text-slate-400 text-xs md:text-sm">
            Ubuntu Resolute Raccoon (v26.04 LTS) with Linux kernel 6.18.40
          </p>

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
