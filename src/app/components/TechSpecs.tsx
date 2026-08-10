"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, HardDrive, Zap, Volume2, Server, Database } from "lucide-react";

const MatterIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={className}
    >
        <path
            fill="currentColor"
            d="M12 9.95c-1 0 -1.94165 -0.17915 -2.825 -0.5375 -0.88335 -0.35835 -1.675 -0.84585 -2.375 -1.4625l1.375 -0.825c0.4 0.3 0.85835 0.5625 1.375 0.7875 0.51665 0.225 1.08335 0.3875 1.7 0.4875V2.95L12 2.5l0.75 0.45v5.45c0.6 -0.1 1.1625 -0.2625 1.6875 -0.4875 0.525 -0.225 0.9875 -0.4875 1.3875 -0.7875l1.375 0.825c-0.7 0.61665 -1.49165 1.10415 -2.375 1.4625C13.94165 9.77085 13 9.95 12 9.95Zm-1.65 9.925 -1.4 -0.75c0.01665 -0.13335 0.02915 -0.25835 0.0375 -0.375 0.00835 -0.11665 0.0125 -0.24165 0.0125 -0.375 0 -0.4 -0.04585 -0.82085 -0.1375 -1.2625 -0.09165 -0.44165 -0.22085 -0.87915 -0.3875 -1.3125l-4.7 2.85L3 18.225V17.35l4.675 -2.825c-0.38335 -0.45 -0.80415 -0.84585 -1.2625 -1.1875 -0.45835 -0.34165 -0.92915 -0.60415 -1.4125 -0.7875v-1.6c1.6 0.48335 2.91665 1.40415 3.95 2.7625 1.03335 1.35835 1.55 2.9125 1.55 4.6625 0 0.26665 -0.0125 0.525 -0.0375 0.775 -0.025 0.25 -0.0625 0.49165 -0.1125 0.725Zm3.3 0c-0.05 -0.23335 -0.0875 -0.475 -0.1125 -0.725 -0.025 -0.25 -0.0375 -0.50835 -0.0375 -0.775 0 -1.75 0.51665 -3.30415 1.55 -4.6625 1.03335 -1.35835 2.35 -2.27915 3.95 -2.7625v1.6c-0.48335 0.18335 -0.95415 0.44585 -1.4125 0.7875 -0.45835 0.34165 -0.87915 0.7375 -1.2625 1.1875L21 17.35v0.875l-0.775 0.425 -4.7 -2.85c-0.16665 0.43335 -0.29585 0.87085 -0.3875 1.3125 -0.09165 0.44165 -0.1375 0.8625 -0.1375 1.2625 0 0.13335 0.00415 0.25835 0.0125 0.375 0.00835 0.11665 0.02085 0.24165 0.0375 0.375l-1.4 0.75Z"
        />
    </svg>
);

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
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
                        Specyfikacja.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Wszystko, czego potrzebujesz!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* 1. OBRAZ BRAMKI (Pierwszy kafelek) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2 flex items-center justify-center p-4 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden transition-all duration-500 group hover:scale-[1.01]"
                    >
                        <Image
                            src="/Code_Generated_Image2.png"
                            alt="Specyfikacja Linux Box"
                            width={700}
                            height={450}
                            className="rounded-2xl mx-auto object-cover hover:scale-[1.02] transition-transform duration-500 bg-white"
                        />
                    </motion.div>

                    {/* 2. Procesor */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-blue-300 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                                <Cpu className="w-8 h-8" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Procesor</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-2">Amlogic S922X-H</p>
                        </div>
                        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                            Potężny 6-rdzeniowy procesor (4x ARM Cortex-A73 @ 1,8 GHz i 2x ARM Cortex-A53 @ 2,21 GHz). Zapewnia wybitną wydajność i płynną pracę systemu.
                        </p>
                    </motion.div>

                    {/* 3. Pamięć RAM */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-blue-300 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Pamięć RAM</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-2">4 GB</p>
                        </div>
                        <p className="text-sm text-slate-600 font-medium">LPDDR4</p>
                    </motion.div>

                    {/* 4. Pamięć wbudowana */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-blue-300 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <HardDrive className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Pamięć wbudowana</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-2">64 GB</p>
                        </div>
                        <p className="text-sm text-slate-600 font-medium">Szybka pamięć eMMC 5.1</p>
                    </motion.div>

                    {/* 5. Łączność -> Thread / Matter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-blue-300 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <MatterIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Łączność</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-2">Thread Border Router</p>
                        </div>
                        <p className="text-sm text-slate-600 font-medium">Wbudowany router Thread i obsługa Matter</p>
                    </motion.div>

                    {/* 6. Ethernet */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-blue-300 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Ethernet</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-2">Gigabit LAN</p>
                        </div>
                        <p className="text-sm text-slate-600 font-medium">1000 Mbps RJ45</p>
                    </motion.div>

                    {/* 7. Porty USB */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-blue-300 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Porty USB</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-2">USB 3.0 + 2.0</p>
                        </div>
                        <p className="text-sm text-slate-600 font-medium">Szybki transfer danych i obsługa urządzeń peryferyjnych.</p>
                    </motion.div>

                    {/* 8. Audio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-blue-300 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Volume2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Audio</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-2">Wbudowane Audio Digital Stereo</p>
                        </div>
                        <p className="text-sm text-slate-600 font-medium">Wyjścia HDMI i S/PDIF – idealne do odtwarzania muzyki z Music Assistant.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
