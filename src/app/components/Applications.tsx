"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Home, Cloud, Shield, Container, Code, Database, Activity, Gauge, Lock, TrendingUp, HardDrive, Eye, BarChart3, Workflow, Sparkles } from "lucide-react";

const applications = [
  { icon: Home, title: "Home Assistant", description: "Automatyka domu", url: "https://www.home-assistant.io/" },
  { icon: Cloud, title: "Nextcloud", description: "Prywatna chmura", url: "https://nextcloud.com/" },
  { icon: Shield, title: "Pi-hole", description: "Blokowanie reklam", url: "https://pi-hole.net/" },
  { icon: Container, title: "Portainer", description: "Zarządzanie Dockerem", url: "https://www.portainer.io/" },
  { icon: Code, title: "VSCode", description: "Narzędzia dla programistów", url: "https://code.visualstudio.com/" },
  { icon: Container, title: "Docker", description: "Zarządzanie kontenerami", url: "https://www.docker.com/" },
  { icon: Activity, title: "EMQX", description: "MQTT broker", url: "https://www.emqx.io/" },
  { icon: Activity, title: "Zigbee2mqtt", description: "Zarządzanie urządzeniami Zigbee", url: "https://www.zigbee2mqtt.io/" },
  { icon: Gauge, title: "Cockpit", description: "Interfejs administracyjny", url: "https://cockpit-project.org/" },
  { icon: BarChart3, title: "Btop", description: "Monitorowanie wydajności", url: "https://github.com/aristocratos/btop" },
  { icon: Lock, title: "Defguard", description: "Ochrona przed atakami", url: "https://defguard.net/" },
  { icon: TrendingUp, title: "Uptime Kuma", description: "Monitorowanie dostępności", url: "https://uptime.kuma.pet/" },
  { icon: Database, title: "PostgreSQL", description: "Baza danych", url: "https://www.postgresql.org/" },
  { icon: HardDrive, title: "pgAdmin", description: "Zarządzanie bazą danych", url: "https://www.pgadmin.org/" },
  { icon: Eye, title: "Glances", description: "Monitorowanie wydajności", url: "https://nicolargo.github.io/glances/" },
  { icon: BarChart3, title: "Grafana", description: "Wizualizacja danych", url: "https://grafana.com/" },
  { icon: Workflow, title: "Node-RED", description: "Low-code programowanie", url: "https://nodered.org/" },
  { icon: Home, title: "Domoticz", description: "Automatyka domowa", url: "https://www.domoticz.com/" },
  { icon: Home, title: "OpenHAB", description: "Automatyka domowa", url: "https://www.openhab.org/" },
  { icon: Home, title: "SUPLA", description: "Automatyka domowa", url: "https://supla.org/" },
  { icon: Activity, title: "CoreELEC", description: "Centrum multimedialne", url: "https://coreelec.org/" },
];

export default function Applications() {
  const [typedCommand, setTypedCommand] = useState("");
  const commandToType = "docker pull homeassistant/home-assistant";

  useEffect(() => {
    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let clearingTimeout: NodeJS.Timeout;

    const typeCommand = () => {
      setTypedCommand("");
      charIndex = 0;
      typingTimeout = setInterval(() => {
        if (charIndex < commandToType.length) {
          setTypedCommand((prev) => prev + commandToType.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typingTimeout);
          clearingTimeout = setTimeout(() => {
            setTypedCommand("");
            setTimeout(typeCommand, 500);
          }, 1500);
        }
      }, 150);
    };

    typeCommand();

    return () => {
      clearInterval(typingTimeout);
      clearTimeout(clearingTimeout);
    };
  }, []);

  const [clock, setClock] = useState("00:00:00");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setClock(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="applications" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zastosowania
          </h2>
          <p className="text-xl text-gray-400">
            Niezliczone możliwości w jednym urządzeniu
          </p>
        </motion.div>

        {/* Demo Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Device Image */}
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
                <Image
                  src="/ais_gate_dev3.png"
                  alt="Linux Box"
                  width={200}
                  height={200}
                  className="relative z-10"
                />
              </motion.div>
            </div>

            {/* Terminal */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">bash</span>
              </div>
              <div className="p-6 font-mono text-green-400">
                <p className="text-sm">
                  box:~# {typedCommand}
                  <span className="animate-pulse">▊</span>
                </p>
              </div>
            </div>

            {/* Browser/Dashboard */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 bg-slate-900 px-4 py-1 rounded-lg text-xs text-gray-400">
                  http://box:8123
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold mb-4 text-lg">Asystent domowy</h3>
                <div className="space-y-3">
                  <div className="bg-slate-800 px-4 py-2 rounded-lg text-white text-sm">
                    Godzina: {clock}
                  </div>
                  <div className="bg-slate-800 px-4 py-2 rounded-lg text-white text-sm">
                    Pogoda: 22°C ☀️
                  </div>
                  <div className="bg-slate-800 px-4 py-2 rounded-lg text-white text-sm">
                    Oświetlenie: 💡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.a
              key={index}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <app.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {app.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {app.description}
                </p>

                <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Dowiedz się więcej →
                </span>
              </div>
            </motion.a>
          ))}

          {/* More card */}
          <motion.a
            href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: applications.length * 0.03 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                I wiele więcej...
              </h3>

              <p className="text-gray-300 text-sm mb-3">
                Odkryj pełne możliwości Linux Box
              </p>

              <span className="text-purple-300 text-sm font-medium group-hover:text-purple-200 transition-colors">
                Zobacz dokumentację →
              </span>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Więcej informacji w{" "}
            <a
              href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors underline"
            >
              dokumentacji
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
