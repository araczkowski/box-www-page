"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Procesor",
    rpi: "Cortex-A72 @ 1.8GHz",
    linuxBox: "Cortex-A55 @ 1.9GHz",
  },
  { feature: "Pamięć RAM", rpi: "4GB LPDDR4", linuxBox: "4GB DDR4" },
  {
    feature: "Wbudowana pamięć",
    rpi: "Brak (wymagana karta SD)",
    linuxBox: "128GB eMMC",
  },
  {
    feature: "Wyświetlacz LED",
    rpi: <X className="text-red-500 mx-auto" />,
    linuxBox: <Check className="text-green-500 mx-auto" />,
  },
  {
    feature: "Android / Android TV",
    rpi: <X className="text-red-500 mx-auto" />,
    linuxBox: <Check className="text-green-500 mx-auto" />,
  },
  {
    feature: "Kompletny zestaw",
    rpi: "Wymaga dokupienia akcesoriów",
    linuxBox: "Wszystko w cenie",
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Wybór jest prosty.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Zobacz, dlaczego Linux Box to lepsze rozwiązanie niż popularne
            alternatywy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Raspberry Pi Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] p-8 rounded-3xl border border-gray-800"
          >
            <div className="text-center mb-8">
              <div className="relative w-48 h-36 mx-auto mb-4">
                <Image
                  src="/rpi4.png"
                  alt="Raspberry Pi 4"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-3xl font-semibold text-white">
                Raspberry Pi 4
              </h3>
              <p className="text-gray-400">Popularna płytka SBC</p>
            </div>
            <ul className="space-y-4">
              {comparisonData.map((row, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-lg"
                >
                  <span className="text-gray-300">{row.feature}</span>
                  <span className="text-white font-medium text-right">
                    {row.rpi}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-lg">Cena za kompletny zestaw</p>
              <p className="text-4xl font-bold text-white mt-2">~410 zł</p>
            </div>
          </motion.div>

          {/* Linux Box Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#111] p-8 rounded-3xl border-2 border-purple-500/80 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 rounded-full text-sm font-bold text-white">
              NAJLEPSZY WYBÓR
            </div>
            <div className="text-center mb-8">
              <div className="relative w-48 h-36 mx-auto mb-4">
                <Image
                  src="/ais_gate_dev3_1.webp"
                  alt="Linux Box"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-3xl font-semibold text-white">Linux Box</h3>
              <p className="text-purple-400">Kompletne rozwiązanie</p>
            </div>
            <ul className="space-y-4">
              {comparisonData.map((row, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-lg"
                >
                  <span className="text-gray-300">{row.feature}</span>
                  <span className="text-purple-400 font-medium text-right">
                    {row.linuxBox}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <p className="text-gray-400 text-lg">Cena za kompletny zestaw</p>
              <p className="text-5xl font-bold text-purple-400 mt-2">199 zł</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-purple-500/30">
            <p className="text-2xl font-bold text-white">
              Oszczędzasz ponad <span className="text-purple-400">50%</span> i
              zyskujesz więcej!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
