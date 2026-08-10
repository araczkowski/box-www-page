"use client";

import { motion } from "framer-motion";
import { Cpu, MemoryStick, HardDrive, Box, Zap, Thermometer } from "lucide-react";

const comparisonData = [
  {
    feature: "Procesor",
    icon: <Cpu className="w-5 h-5" />,
    rpi: "Broadcom BCM2712",
    linuxBox: "Amlogic S922X-H",
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
    rpi: "Brak",
    linuxBox: "64GB eMMC",
    highlight: true,
  },
  {
    feature: "Obudowa",
    icon: <Box className="w-5 h-5" />,
    rpi: "Brak",
    linuxBox: "W zestawie",
    highlight: true,
  },
  {
    feature: "Radiator procesora",
    icon: <Thermometer className="w-5 h-5" />,
    rpi: "Brak",
    linuxBox: "W zestawie",
    highlight: true,
  },
  {
    feature: "Zasilacz",
    icon: <Zap className="w-5 h-5" />,
    rpi: "Brak",
    linuxBox: "W zestawie",
    highlight: true,
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-32 bg-white text-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Porównanie.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed"
          >
            Więcej możliwości. Mniej wydatków.
            <br />
            Sprawdź, dlaczego Linux Box to lepszy wybór.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 mb-6 px-6 py-4 border-b border-slate-200 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <div className="text-left">Cecha</div>
            <div className="text-center">Raspberry Pi 5</div>
            <div className="text-center text-blue-600 font-extrabold">Linux Box</div>
          </div>

          {/* Data Rows */}
          <div className="space-y-3.5">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="grid grid-cols-3 gap-4 items-center px-6 py-5 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors border border-slate-200/80 shadow-sm"
              >
                <div className="flex items-center gap-3 text-slate-800 font-semibold">
                  <div className="p-2.5 rounded-xl bg-white text-blue-600 border border-slate-200/80 shadow-sm">
                    {row.icon}
                  </div>
                  <span className="hidden sm:inline">{row.feature}</span>
                </div>
                <div className="text-center text-slate-500 font-medium flex justify-center items-center">
                  {row.rpi}
                </div>
                <div className={`text-center font-bold flex justify-center items-center ${row.highlight ? 'text-blue-600' : 'text-slate-700'}`}>
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 grid grid-cols-3 gap-4 items-center px-8 py-8 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-100 shadow-xl"
          >
            <div className="text-xl font-bold text-slate-900 pl-2">Cena zestawu</div>
            <div className="text-center">
              <span className="text-2xl text-slate-400 line-through decoration-slate-400 font-medium">~1029,00 zł</span>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                xxx zł
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-400 text-sm">
              * Ceny orientacyjne. Zestaw Raspberry Pi uwzględnia płytkę, obudowę, chłodzenie, zasilacz, kartę SD i kabel HDMI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
