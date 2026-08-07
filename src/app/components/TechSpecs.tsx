"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, HardDrive, Wifi, Zap, Monitor, Server, Database } from "lucide-react";

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
        value: "Amlogic S922X-H",
        desc: "Potężny 6-rdzeniowy procesor (4x ARM Cortex-A73 @ 1,8 GHz i 2x ARM Cortex-A53 @ 2,21 GHz). Zapewnia wybitną wydajność i płynną pracę systemu.",
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
        value: "64 GB",
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
                        Wszystko, czego potrzebujesz!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* 1. Procesor */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-600 text-white shadow-lg shadow-blue-900/50">
                                <Cpu className="w-8 h-8" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Procesor</h3>
                            <p className="text-2xl font-bold text-white mb-2">Amlogic S922X-H</p>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">
                            Potężny 6-rdzeniowy procesor (4x ARM Cortex-A73 @ 1,8 GHz i 2x ARM Cortex-A53 @ 2,21 GHz). Zapewnia wybitną wydajność i płynną pracę systemu.
                        </p>
                    </motion.div>

                    {/* 2. Pamięć RAM */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Pamięć RAM</h3>
                            <p className="text-2xl font-bold text-white mb-2">4 GB</p>
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">LPDDR4</p>
                    </motion.div>

                    {/* 3. Pamięć wbudowana */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <HardDrive className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Pamięć wbudowana</h3>
                            <p className="text-2xl font-bold text-white mb-2">64 GB</p>
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">Szybka pamięć eMMC 5.1</p>
                    </motion.div>

                    {/* 4. Łączność */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Łączność</h3>
                            <p className="text-2xl font-bold text-white mb-2">Dual Band WiFi</p>
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">2.4GHz / 5GHz AC + Bluetooth</p>
                    </motion.div>

                    {/* CENTRUM: Obraz na białym tle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 flex items-center justify-center p-4 sm:p-6 rounded-3xl bg-white shadow-2xl overflow-hidden transition-all duration-500 group hover:shadow-white/10"
                    >
                        <Image
                            src="/Code_Generated_Image2.png"
                            alt="Specyfikacja Linux Box"
                            width={700}
                            height={450}
                            className="rounded-2xl mx-auto object-cover hover:scale-[1.02] transition-transform duration-500 bg-white"
                        />
                    </motion.div>

                    {/* 5. Ethernet */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Ethernet</h3>
                            <p className="text-2xl font-bold text-white mb-2">Gigabit LAN</p>
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">1000 Mbps RJ45</p>
                    </motion.div>

                    {/* 6. Porty USB */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Porty USB</h3>
                            <p className="text-2xl font-bold text-white mb-2">USB 3.0 + 2.0</p>
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">Szybki transfer danych i obsługa urządzeń peryferyjnych.</p>
                    </motion.div>

                    {/* 7. Wideo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-900/20"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Wideo</h3>
                            <p className="text-2xl font-bold text-white mb-2">4K Ultra HD</p>
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">HDMI 2.1 z obsługą HDR.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
