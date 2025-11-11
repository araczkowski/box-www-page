"use client";

import { motion } from "framer-motion";
import {
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
    icon: Smartphone,
    title: "Android TV",
    description: "Zainstaluj system Android TV i ciesz się aplikacjami.",
  },
  {
    icon: Container,
    title: "Docker & Home Assistant",
    description: "Uruchamiaj aplikacje w lekkich kontenerach.",
  },
  {
    icon: Server,
    title: "Wiele systemów",
    description: "Uruchom Ubuntu, Debian, Armbian i inne.",
  },
  {
    icon: Monitor,
    title: "Wyświetlacz LED",
    description: "Monitoruj status urządzenia, czas, pogodę i inne.",
  },
  {
    icon: Gamepad2,
    title: "Gry Retro",
    description: "Zmień swój box w konsolę z Batocera.linux.",
  },
  {
    icon: Home,
    title: "Smart Home",
    description: "Centrum dla Home Assistant, SUPLA, Domoticz.",
  },
  {
    icon: Film,
    title: "Centrum Multimedialne",
    description: "Oglądaj filmy i seriale w 4K z CoreELEC (Kodi).",
  },
  {
    icon: Zap,
    title: "Energooszczędność",
    description: "Pobór mocy na poziomie 2-3W. Koszt ~2zł/miesiąc.",
  },
  {
    icon: Code,
    title: "Dev Server",
    description: "Idealny do hostowania Twoich projektów i botów.",
  },
  {
    icon: Sparkles,
    title: "Nieograniczone możliwości",
    description: "Twoja kreatywność to jedyne ograniczenie.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mały box, wielkie możliwości.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Odkryj, co potrafi nasze urządzenie. To więcej niż myślisz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#111] p-8 rounded-3xl border border-gray-800 transition-all duration-300 hover:border-purple-500/60 hover:bg-[#1a1a1a] hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
