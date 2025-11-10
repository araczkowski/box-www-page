"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  HardDrive,
  Server,
  Monitor,
  Container,
  Gamepad2,
  Home,
  Film,
  Zap,
  Code,
  Smartphone,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Wydajność",
    description: "Procesor Amlogic S905X3 i 4 GB RAM zapewniają płynną pracę.",
  },
  {
    icon: HardDrive,
    title: "Pamięć/Dysk",
    description: "128 GB eMMC + rozszerzalność przez microSD i/lub USB.",
  },
  {
    icon: Server,
    title: "System",
    description:
      "Oprócz Ubuntu, możesz uruchomić Debian, Armbian i inne systemy.",
  },
  {
    icon: Monitor,
    title: "Wyświetlacz",
    description: "Pokazuje czas, temperaturę, IP i więcej.",
  },
  {
    icon: Container,
    title: "Docker",
    description: "Uruchamiaj aplikacje w kontenerach.",
  },
  {
    icon: Gamepad2,
    title: "Batocera.linux",
    description: "Zmień swój Linux Box w konsolę do gier retro.",
  },
  {
    icon: Home,
    title: "Automatyka domowa",
    description: "Home Assistant, SUPLA, Domoticz, OpenHAB i inne.",
  },
  {
    icon: Film,
    title: "CoreElec",
    description: "Oglądaj filmy i seriale z Kodi.",
  },
  {
    icon: Zap,
    title: "Niskie zużycie energii",
    description: "Około 2 kWh miesięcznie, czyli mniej niż 2 zł.",
  },
  {
    icon: Code,
    title: "Dla deweloperów",
    description: "Kompaktowy dev-server do Twoich projektów.",
  },
  {
    icon: Smartphone,
    title: "System Android",
    description:
      "Różne obrazy oparte na Android TV lub Android AOSP do uruchomienia na boxie.",
  },
  {
    icon: Sparkles,
    title: "I wiele więcej...",
    description: "Zobacz sekcję Zastosowania poniżej.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
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
            Dlaczego Linux Box?
          </h2>
          <p className="text-xl text-gray-400">
            Niewiarygodne możliwości w kompaktowej obudowie
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
