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
    description:
      "Ubuntu, Debian, Armbian, Android. Wybierz to, co lubisz najbardziej.",
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
      className="relative py-32 bg-white text-[#1d1d1f] overflow-hidden"
    >
      {/* Ambient Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[450px] h-[450px] rounded-full bg-[#10b981]/5 blur-[120px] animate-aurora" />
        <div
          className="absolute bottom-20 -right-32 w-[400px] h-[400px] rounded-full bg-[#0071e3]/5 blur-[120px] animate-aurora"
          style={{ animationDelay: "6s" }}
        />
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8"
        >
          <div className="max-w-3xl md:w-2/3">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-[#1d1d1f]">
              <span className="gradient-text-emerald">Możliwości.</span>{" "}
              <span className="text-[#86868b]">Nieskończone.</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed">
              Od serwera domowego po centrum multimedialne. Linux Box
              dostosowuje się do Twoich potrzeb.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href="/docs"
              rel="noopener noreferrer"
              className="btn-shine btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full glass-light border border-white/60 text-[#1d1d1f] font-semibold transition-all hover:scale-105"
            >
              <FileText className="h-4 w-4 text-[#0071e3]" />
              <span>Dokumentacja</span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-hover card-glow flex flex-col justify-between p-8 rounded-3xl glass-light border border-white/60 hover:border-[#0071e3]/40 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div>
                <div className="mb-6 p-4 rounded-2xl bg-white text-[#1d1d1f] group-hover:bg-gradient-to-br group-hover:from-[#0071e3] group-hover:to-[#00c6ff] group-hover:text-white shadow-md transition-all duration-300 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1d1d1f] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
