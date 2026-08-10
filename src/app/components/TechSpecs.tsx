"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, HardDrive, Zap, Volume2, Server } from "lucide-react";

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
        <section id="tech-specs" className="py-32 bg-white text-[#1d1d1f] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-[#1d1d1f]">
                        Specyfikacja.
                    </h2>
                    <p className="text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl mx-auto">
                        Moc, wydajność i pełne wyposażenie.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* 1. OBRAZ BRAMKI */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2 flex items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#f5f5f7] border border-slate-200/50 shadow-sm overflow-hidden transition-all duration-500 group hover:border-slate-300 hover:scale-[1.01]"
                    >
                        <Image
                            src="/Code_Generated_Image2.png"
                            alt="Specyfikacja Linux Box"
                            width={700}
                            height={450}
                            className="rounded-2xl mx-auto object-cover hover:scale-[1.02] transition-transform duration-700 bg-[#f5f5f7]"
                        />
                    </motion.div>

                    {/* 2. Procesor */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#f5f5f7] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 group hover:scale-[1.01]"
                    >
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="mb-5 p-4 rounded-2xl inline-block bg-[#0071e3] text-white shadow-md shadow-blue-500/20">
                                <Cpu className="w-8 h-8" />
                            </div>
                            <h3 className="text-xs font-semibold text-[#86868b] mb-1 uppercase tracking-widest">Procesor</h3>
                            <p className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] mb-3 tracking-tight">Amlogic S922X-H</p>
                            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-xl mx-auto">
                                Potężny 6-rdzeniowy procesor (4x ARM Cortex-A73 @ 1,8 GHz i 2x ARM Cortex-A53 @ 2,21 GHz).
                            </p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#86868b] font-medium text-center mt-6">
                            Zapewnia płynną pracę Home Assistant i aplikacji w kontenerach Docker.
                        </p>
                    </motion.div>

                    {/* 3. Pamięć 64 GB / 4 GB */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-[#f5f5f7] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 group hover:scale-[1.02]"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white text-[#1d1d1f] group-hover:text-[#0071e3] shadow-sm transition-colors">
                                <HardDrive className="w-6 h-6" />
                            </div>
                            <h3 className="text-xs font-semibold text-[#86868b] mb-2 uppercase tracking-widest">Pamięć</h3>
                            <p className="text-3xl font-extrabold text-[#1d1d1f] mb-2 tracking-tight">64 GB / 4 GB</p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#86868b] font-medium">64 GB eMMC 5.1 + 4 GB RAM LPDDR4</p>
                    </motion.div>

                    {/* 4. Thread & Matter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col justify-between p-8 rounded-3xl bg-[#f5f5f7] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 group hover:scale-[1.02]"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white text-[#1d1d1f] group-hover:text-[#0071e3] shadow-sm transition-colors">
                                <MatterIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xs font-semibold text-[#86868b] mb-2 uppercase tracking-widest">Smart Home</h3>
                            <p className="text-3xl font-extrabold text-[#1d1d1f] mb-2 tracking-tight">Thread & Matter</p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#86868b] font-medium">Wbudowany router Thread i obsługa Matter</p>
                    </motion.div>

                    {/* 5. Ethernet */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-[#f5f5f7] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 group hover:scale-[1.01]"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white text-[#1d1d1f] group-hover:text-[#0071e3] shadow-sm transition-colors">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="text-xs font-semibold text-[#86868b] mb-2 uppercase tracking-widest">Ethernet</h3>
                            <p className="text-3xl font-extrabold text-[#1d1d1f] mb-2 tracking-tight">Gigabit LAN</p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#86868b] font-medium">1000 Mbps RJ45 (1 Gbps)</p>
                    </motion.div>

                    {/* 6. Porty USB */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-[#f5f5f7] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 group hover:scale-[1.01]"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white text-[#1d1d1f] group-hover:text-[#0071e3] shadow-sm transition-colors">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xs font-semibold text-[#86868b] mb-2 uppercase tracking-widest">Porty USB</h3>
                            <p className="text-3xl font-extrabold text-[#1d1d1f] mb-2 tracking-tight">USB 3.0 + 2.0</p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#86868b] font-medium">Szybki transfer danych i obsługa urządzeń peryferyjnych.</p>
                    </motion.div>

                    {/* 7. Audio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-[#f5f5f7] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 group hover:scale-[1.01]"
                    >
                        <div>
                            <div className="mb-6 p-4 rounded-2xl inline-block bg-white text-[#1d1d1f] group-hover:text-[#0071e3] shadow-sm transition-colors">
                                <Volume2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xs font-semibold text-[#86868b] mb-2 uppercase tracking-widest">Audio</h3>
                            <p className="text-3xl font-extrabold text-[#1d1d1f] mb-2 tracking-tight">Wbudowane Audio Digital Stereo</p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#86868b] font-medium">Wyjścia HDMI i S/PDIF – idealne do odtwarzania muzyki z Music Assistant.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
