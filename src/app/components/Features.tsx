"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Monitor,
  Gamepad2,
  Home,
  Film,
  Code2,
  Smartphone,
  ShieldCheck,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "System",
    description: "Ubuntu, Debian, Armbian, Android. Wybierz to, co lubisz najbardziej.",
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Docker",
    description:
      "Gotowy na konteneryzację. Uruchamiaj aplikacje w izolowanych środowiskach.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Retro Gaming",
    description: "Zmień Linux Box w konsolę do gier dzięki Batocera.linux.",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Smart Home",
    description: "Idealny hub dla Home Assistant, SUPLA, Domoticz czy OpenHAB.",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Multimedia",
    description: "CoreELEC i Kodi zamienią go w potężne centrum rozrywki 4K.",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Dla deweloperów",
    description: "Twój osobisty, energooszczędny serwer deweloperski.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Hakowanie i testy",
    description:
      "Idealne narzędzie do nauki cyberbezpieczeństwa i testów penetracyjnych.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Android",
    description: "Dostępne obrazy Android TV oraz Android AOSP.",
  },

];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 bg-white text-black overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <div className="max-w-3xl md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Możliwości. <span className="text-gray-400">Nieskończone.</span>
            </h2>
            <p className="text-xl text-gray-500 mx-auto md:mx-0 leading-relaxed">
              Od serwera domowego po centrum multimedialne. Linux Box dostosowuje
              się do Twoich potrzeb, oferując wydajność i elastyczność, której
              oczekujesz.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
            <a
              href="/docs"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:underline text-lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              <span className="font-bold">Przejdź do dokumentacji</span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-gray-50 text-black group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
