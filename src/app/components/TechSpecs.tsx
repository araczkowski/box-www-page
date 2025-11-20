"use client";

import { motion } from "framer-motion";
import { Cpu, HardDrive, Wifi, Zap, Monitor, Layout, Server, Database } from "lucide-react";

interface SpecItem {
    icon: React.ReactNode;
    label: string;
    value: string;
    desc: string;
    colSpan?: string;
    iconColor?: string;
}

const specs: SpecItem[] = [
    {
        icon: <Cpu className="w-8 h-8" />,
        label: "Procesor",
        value: "Amlogic S905X3",
        desc: "Potężny 4-rdzeniowy procesor Cortex-A55 taktowany zegarem 1.9GHz. Zapewnia płynną pracę systemu i aplikacji.",
        colSpan: "md:col-span-2",
        iconColor: "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
    },
    {
        icon: <Database className="w-6 h-6" />,
        label: "Pamięć RAM",
        value: "4 GB",
        desc: "LPDDR4"
    },
    {
        icon: <HardDrive className="w-6 h-6" />,
        label: "Pamięć wbudowana",
        value: "128 GB",
        desc: "Szybka pamięć eMMC 5.1"
    },
    {
        icon: <Wifi className="w-6 h-6" />,
        label: "Łączność",
        value: "Dual Band WiFi",
        desc: "2.4GHz / 5GHz AC + Bluetooth"
    },
    {
        icon: <Server className="w-6 h-6" />,
        label: "Ethernet",
        value: "Gigabit LAN",
        desc: "1000 Mbps RJ45"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        label: "Porty USB",
        value: "USB 3.0 + 2.0",
        desc: "Szybki transfer danych"
    },
    {
        icon: <Monitor className="w-6 h-6" />,
        label: "Wideo",
        value: "4K Ultra HD",
        desc: "HDMI 2.1 z obsługą HDR"
    }
];

export default function TechSpecs() {
    return (
        <section id="tech-specs" className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        Specyfikacja.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Wszystko, czego potrzebujesz, w jednej kompaktowej obudowie.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col items-start p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20 ${spec.colSpan || ""}`}
                        >
                            <div className={`mb-6 p-4 rounded-2xl transition-colors ${spec.iconColor || "bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10"}`}>
                                {spec.icon}
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">{spec.label}</h3>
                            <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{spec.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
