"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const comparisonData = [
  { feature: "Procesor", rpi: "Broadcom BCM2711 (4x Cortex-A72 @ 1.8GHz)", linuxBox: "Amlogic S905X3 (4x Cortex-A55 @ 1.9GHz)" },
  { feature: "Pamięć RAM", rpi: "4GB LPDDR4", linuxBox: "4GB DDR4" },
  { feature: "Pamięć masowa", rpi: "Brak", linuxBox: "128GB eMMC" },
  { feature: "Wyświetlacz LED", rpi: "Brak", linuxBox: "Tak" },
  { feature: "Android", rpi: "Brak", linuxBox: "Tak, różne dystrybucje, także Android TV" },
  { feature: "Płytka", rpi: "~250zł", linuxBox: "W zestawie" },
  { feature: "Obudowa", rpi: "~30zł", linuxBox: "W zestawie" },
  { feature: "Zasilacz", rpi: "~40zł", linuxBox: "W zestawie" },
  { feature: "Kabel HDMI", rpi: "~15zł", linuxBox: "W zestawie" },
  { feature: "Karta microSD 128GB", rpi: "~60zł", linuxBox: "Nie wymagana" },
  { feature: "Wysyłka", rpi: "~15zł", linuxBox: "Gratis" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Porównanie z Raspberry Pi
          </h2>
          <p className="text-xl text-gray-400">
            Zobacz, dlaczego Linux Box to lepsza opcja
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <table className="min-w-full divide-y divide-slate-700">
                <thead>
                  <tr className="bg-slate-900/50">
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Cecha
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative w-32 h-24">
                          <Image
                            src="/rpi4.png"
                            alt="Raspberry Pi 4"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-semibold text-white">Raspberry Pi 4</span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative w-32 h-24">
                          <Image
                            src="/ais_gate_dev3_1.webp"
                            alt="Linux Box"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-semibold text-white">Linux Box (S905X3)</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="hover:bg-slate-700/30 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400 text-center">
                        {row.rpi}
                      </td>
                      <td className="px-6 py-4 text-sm text-purple-400 font-medium text-center">
                        {row.linuxBox}
                      </td>
                    </motion.tr>
                  ))}
                  <tr className="bg-gradient-to-r from-purple-900/20 to-blue-900/20">
                    <td className="px-6 py-4 text-base font-bold text-white whitespace-nowrap">
                      Podsumowanie
                    </td>
                    <td className="px-6 py-4 text-xl font-bold text-white text-center">
                      ~410zł
                    </td>
                    <td className="px-6 py-4 text-xl font-bold text-purple-400 text-center">
                      199zł
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-purple-500/30">
            <p className="text-2xl font-bold text-white">
              Oszczędź ponad <span className="text-purple-400">50%</span> z Linux Box!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
