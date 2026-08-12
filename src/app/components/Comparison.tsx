"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  MemoryStick,
  HardDrive,
  Box,
  Zap,
  Thermometer,
  Radio,
} from "lucide-react";

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
    feature: "Thread & Matter",
    icon: <Radio className="w-5 h-5" />,
    rpi: "Brak",
    linuxBox: "W zestawie",
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
    feature: "Zasilacz i Kabel HDMI",
    icon: <Zap className="w-5 h-5" />,
    rpi: "Brak",
    linuxBox: "W zestawie",
    highlight: true,
  },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="relative py-32 bg-[#fafafa] text-[#1d1d1f] overflow-hidden"
    >
      {/* Ambient Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 -left-40 w-[450px] h-[450px] rounded-full bg-[#00c6ff]/8 blur-[120px] animate-aurora" />
        <div
          className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full bg-[#a855f7]/8 blur-[120px] animate-aurora"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="gradient-text-emerald">Porównanie.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed"
          >
            Więcej możliwości. Mniej wydatków.
            <br />
            Sprawdź, dlaczego Linux Box to lepszy wybór.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 mb-6 px-6 py-4 border-b border-slate-200/80 text-xs font-bold text-[#86868b] uppercase tracking-wider">
            <div className="text-left">Cecha</div>
            <div className="text-center">Raspberry Pi 5</div>
            <div className="text-center text-[#0071e3] font-extrabold">
              Linux Box PRO
            </div>
          </div>

          {/* Data Rows */}
          <div className="space-y-3">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card-hover grid grid-cols-3 gap-4 items-center px-6 py-5 rounded-2xl glass-light border border-white/60 hover:border-[#0071e3]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-[#1d1d1f] font-semibold">
                  <div className="p-2.5 rounded-xl bg-white text-[#0071e3] shadow-sm">
                    {row.icon}
                  </div>
                  <span className="hidden sm:inline">{row.feature}</span>
                </div>
                <div className="text-center text-[#86868b] font-medium flex justify-center items-center">
                  {row.rpi}
                </div>
                <div
                  className={`text-center font-bold flex justify-center items-center ${row.highlight ? "text-[#0071e3]" : "text-[#1d1d1f]"}`}
                >
                  {row.linuxBox}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Price Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-hover card-glow mt-10 grid grid-cols-3 gap-4 items-center px-8 py-8 rounded-3xl glass-light border border-white/60 shadow-md"
          >
            <div className="text-xl font-bold text-[#1d1d1f] pl-2">
              Cena zestawu
            </div>
            <div className="text-center">
              <span className="text-2xl text-[#86868b]  font-medium">
                ~1229,00 zł
              </span>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-extrabold gradient-text-blue tracking-tight">
                xxx zł
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-[#86868b] text-xs sm:text-sm">
              * Ceny orientacyjne. Zestaw Raspberry Pi uwzględnia płytkę, thread
              dongle, obudowę, chłodzenie, zasilacz, kartę SD i kabel HDMI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
