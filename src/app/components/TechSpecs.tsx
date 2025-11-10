"use client";

import { motion } from "framer-motion";
import { Wifi, Cable, Usb, Monitor, Clock, Smartphone, Container, Zap } from "lucide-react";

const specs = [
  { icon: Wifi, title: "WiFi 5GHz", description: "Szybkie bezprzewodowe połączenie" },
  { icon: Cable, title: "Ethernet 1GB", description: "Stabilne połączenie przewodowe" },
  { icon: Usb, title: "USB 3.0", description: "Szybki transfer danych" },
  { icon: Monitor, title: "HDMI 2.0A", description: "Wyjście wideo 4K" },
  { icon: Clock, title: "Wyświetlacz LED", description: "Pokazuje czas, temperaturę i IP" },
  { icon: Smartphone, title: "Obsługa Androida", description: "Różne dystrybucje Android TV/AOSP" },
  { icon: Container, title: "Docker & Home Assistant", description: "Automatyka domowa w kontenerach" },
  { icon: Zap, title: "Niskie zużycie energii", description: "Około 2 kWh miesięcznie" },
];

export default function TechSpecs() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Specyfikacja Techniczna
          </h2>
          <p className="text-xl text-gray-400">
            Wszystko, czego potrzebujesz w jednym urządzeniu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {spec.title}
                </h3>

                <p className="text-gray-400">
                  {spec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
