"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Bird, Settings2, Download } from "lucide-react";

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Ambient Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-[450px] h-[450px] rounded-full bg-[#0071e3]/8 blur-[120px] animate-aurora" />
        <div
          className="absolute bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-[#10b981]/8 blur-[120px] animate-aurora"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="gradient-text-emerald">Open Source.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed"
          >
            Pełna wolność. Nieskończone możliwości.
            <br />
            System na Linux Box jest w pełni otwarty.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <FeatureCard
            icon={<Bird className="w-7 h-7 text-[#10b981]" />}
            iconBg="bg-emerald-50"
            iconHover="group-hover:from-[#10b981] group-hover:to-[#34d399]"
            title="Wolny Dostęp"
            description="Pobierz i zainstaluj dodatkowy system na USB, karcie SD lub pamięci eMMC. Linux Box ma włączony multiboot - wystarczy podłączyć nośnik."
            delay={0.2}
          />
          <FeatureCard
            icon={
              <Image
                src="/linux.svg"
                alt="Linux"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            }
            iconBg="bg-orange-50"
            iconHover="group-hover:from-[#e95420] group-hover:to-[#f47951]"
            title="Ubuntu Resolute Raccoon (v26.04 LTS)"
            description="Gotowy do użycia system z jądrem Linux 6.18.40 oraz preinstalowanym oprogramowaniem. W pełni funkcjonalny i zoptymalizowany dla Linux Box PRO."
            delay={0.3}
          />
          <FeatureCard
            icon={<Settings2 className="w-7 h-7 text-[#0071e3]" />}
            iconBg="bg-blue-50"
            iconHover="group-hover:from-[#0071e3] group-hover:to-[#40c4ff]"
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
            {/* Gray button for Linux BOX Standard */}
            <a
              href="https://drive.google.com/file/d/1QR6u-WGWogbvLDciO9ELbaHB35zI3ucf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center justify-center gap-3 px-7 py-4 glass-light border border-white/60 hover:border-[#10b981]/40 text-[#1d1d1f] rounded-full text-base md:text-lg font-semibold transition-all hover:scale-105 active:scale-95 text-center w-full sm:w-auto shadow-md"
            >
              <Download className="w-5 h-5 shrink-0 text-[#1d1d1f]" />
              <span>Pobierz obraz systemu Linux BOX Standard</span>
            </a>

            {/* Blue button for Linux BOX PRO */}
            <a
              href="https://drive.google.com/file/d/1k_emkVVHaHPSF7OMyaLP4WuSo5NNRz6F/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine btn-glow group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gradient-to-r from-[#0071e3] via-[#0084ff] to-[#00c6ff] hover:from-[#0084ff] hover:via-[#0099ff] hover:to-[#00e5ff] text-white rounded-full text-base md:text-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 text-center w-full sm:w-auto"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>Pobierz obraz systemu Linux BOX PRO</span>
            </a>
          </div>

          <p className="text-[#86868b] text-xs sm:text-sm font-medium">
            Ubuntu Resolute Raccoon (v26.04 LTS) with Linux kernel 6.18.40
          </p>

          <p className="text-[#86868b] text-sm font-medium">
            Instrukcje instalacji znajdziesz w{" "}
            <a
              href="/docs"
              rel="noopener noreferrer"
              className="text-[#0071e3] font-semibold hover:underline inline-flex items-center gap-1"
            >
              dokumentacji
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  iconBg,
  iconHover,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconHover: string;
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
      className="card-hover card-glow p-8 rounded-3xl glass-light border border-white/60 hover:border-[#10b981]/40 transition-all duration-300 hover:scale-[1.02] group"
    >
      <div
        className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center text-[#1d1d1f] shadow-sm mb-6 group-hover:bg-gradient-to-br ${iconHover} group-hover:scale-105 transition-all duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-[#86868b] leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  );
}
