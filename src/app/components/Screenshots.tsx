"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  Music,
  Home,
  Cpu,
  Network,
  Gauge,
  MapPin,
} from "lucide-react";

interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  icon: React.ReactNode;
}

const screenshots: ScreenshotItem[] = [
  {
    id: "music-assistant",
    title: "Music Assistant",
    subtitle: "Zarządzanie muzyką i strumieniowaniem w całym domu.",
    category: "Audio & Strumieniowanie",
    imageSrc: "/music-assistant.png",
    icon: <Music className="w-5 h-5 text-[#0071e3]" />,
  },
  {
    id: "home-assistant",
    title: "Home Assistant",
    subtitle: "Główny pulpit nawigacyjny i automatyzacje Smart Home.",
    category: "Centrum Sterowania",
    imageSrc: "/home-assistant-ui.png",
    icon: <Home className="w-5 h-5 text-[#0071e3]" />,
  },
  {
    id: "esphome",
    title: "ESP Home",
    subtitle: "Zarządzanie mikrokontrolerami i czujnikami bez chmury.",
    category: "IoT & Mikrokontrolery",
    imageSrc: "/esphome-ui.png",
    icon: <Cpu className="w-5 h-5 text-[#0071e3]" />,
  },
  {
    id: "thread-matter-map",
    title: "Wbudowany Thread & Matter",
    subtitle: "Wbudowany router Border Router i lokalna topologia urządzeń.",
    category: "Architektura Sieci",
    imageSrc: "/ha-matter-server-thread.png",
    icon: <Network className="w-5 h-5 text-[#0071e3]" />,
  },
  {
    id: "energy",
    title: "Energy Dashboard",
    subtitle:
      "Monitoruj produkcję i zużycie energii w całym domu w czasie rzeczywistym.",
    category: "Energetyka",
    imageSrc: "/energy.webp",
    icon: <Gauge className="w-5 h-5 text-[#0071e3]" />,
  },
  {
    id: "map",
    title: "Mapa Lokalizacji",
    subtitle: "Śledź położenie domowników na interaktywnej mapie.",
    category: "Lokalizacja",
    imageSrc: "/map-card.png",
    icon: <MapPin className="w-5 h-5 text-[#0071e3]" />,
  },
];

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<ScreenshotItem | null>(
    null,
  );

  return (
    <section
      id="screenshots"
      className="py-32 bg-[#fafafa] text-[#1d1d1f] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] mb-6"
          >
            Ekosystem w działaniu.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-[#86868b] font-medium leading-relaxed"
          >
            Zintegrowane interfejsy i aplikacje gotowe do pracy od pierwszej
            minuty.
          </motion.p>
        </div>

        {/* 2x2 Grid of Screenshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#f5f5f7] border border-slate-200/60 p-6 sm:p-8 hover:border-slate-300 transition-all duration-500 hover:shadow-xl hover:scale-[1.01] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Header Info */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#86868b] shadow-sm mb-3">
                    {item.icon}
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#86868b] font-medium mt-1">
                    {item.subtitle}
                  </p>
                </div>
                <div className="p-2.5 rounded-full bg-white text-[#1d1d1f] group-hover:bg-[#0071e3] group-hover:text-white shadow-sm transition-colors duration-300 shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Screenshot Preview */}
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/50 shadow-inner">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                    Kliknij, aby powiększyć
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#1c1c1e] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1c1c1e]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10">
                    {selectedImage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs text-[#86868b]">
                      {selectedImage.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black flex items-center justify-center p-4">
                <Image
                  src={selectedImage.imageSrc}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
