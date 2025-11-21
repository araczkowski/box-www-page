"use client";

import { motion } from "framer-motion";
import { Check, X, Cpu, MemoryStick, HardDrive, Box, Zap, Monitor } from "lucide-react";

const comparisonData = [
  {
    feature: "Procesor",
    icon: <Cpu className="w-5 h-5" />,
    rpi: "Broadcom BCM2711",
    linuxBox: "Amlogic S905X3",
    highlight: true,
  },
  {
    feature: "Pamięć RAM",
    icon: <MemoryStick className="w-5 h-5" />,
    rpi: "4GB LPDDR4",
    linuxBox: "4GB DDR4",
    highlight: true,
  },
  {
    feature: "Pamięć masowa",
    icon: <HardDrive className="w-5 h-5" />,
    rpi: "Brak (wymagana karta SD)",
    linuxBox: "128GB eMMC",
    highlight: true,
  },
  {
    feature: "Obudowa",
    icon: <Box className="w-5 h-5" />,
    rpi: "Brak (płytka PCB)",
    linuxBox: "W zestawie",
    highlight: true,
  },
  {
    feature: "Zasilacz i HDMI",
    icon: <Zap className="w-5 h-5" />,
    rpi: "Brak",
    linuxBox: "W zestawie",
    highlight: true,
  },
  {
    feature: "Wyświetlacz LED",
    icon: <Monitor className="w-5 h-5" />,
    rpi: <X className="w-5 h-5 text-slate-600" />,
    linuxBox: <Check className="w-5 h-5 text-blue-400" />,
    highlight: true,
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Porównanie.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed"
          >
            Więcej możliwości. Mniej wydatków.
            <br />
            Sprawdź, dlaczego Linux Box to lepszy wybór.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 mb-8 px-6 py-4 border-b border-slate-800 text-sm font-semibold text-slate-500 uppercase tracking-wider">
            <div className="text-left">Cecha</div>
            <div className="text-center">Raspberry Pi 4</div>
            <div className="text-center text-blue-400">Linux Box</div>
          </div>

          {/* Data Rows */}
          <div className="space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-3 gap-4 items-center px-6 py-6 rounded-2xl bg-slate-900/30 hover:bg-slate-900/50 transition-colors border border-slate-800/50"
              >
                <div className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
                    {row.icon}
                  </div>
                  <span className="hidden sm:inline">{row.feature}</span>
                </div>
                <div className="text-center text-slate-500 font-medium flex justify-center items-center">
                  {row.rpi}
                </div>
                <div className={`text-center font-bold flex justify-center items-center ${row.highlight ? 'text-blue-400' : 'text-slate-300'}`}>
                  {row.linuxBox}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Price Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 items-center px-6 py-10 rounded-3xl bg-gradient-to-b from-slate-900 to-black border border-slate-800 shadow-2xl"
          >
            <div className="text-lg font-bold text-white pl-4">Cena zestawu</div>
            <div className="text-center">
              <span className="text-2xl text-slate-500 line-through decoration-slate-700">~410 zł</span>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                199 zł
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 text-sm">
              * Ceny orientacyjne na dzień 20.11.2025. Zestaw Raspberry Pi uwzględnia płytkę, obudowę, zasilacz, kartę SD i kabel HDMI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
