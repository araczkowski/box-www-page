"use client";

import { useState } from "react";
import {
  FileText,
  ArrowRight,
  Download,
  BookOpen,
  Home,
  Sparkles,
  ExternalLink,
  Zap,
  Shield,
  Code,
  Cpu,
  Box,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "../components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type ModelType = "all" | "standard" | "pro";

interface DocItem {
  id: "standard" | "pro";
  title: string;
  badge: string;
  badgeColor: string;
  subtitle: string;
  description: string;
  onlineUrl: string;
  pdfUrl: string;
  topics: string[];
}

const docsData: DocItem[] = [
  {
    id: "standard",
    title: "Linux Box",
    badge: "Wersja Standard",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    subtitle: "Bramka AIoT / Home Assistant (S922X-H, 4GB RAM, 64GB eMMC)",
    description:
      "Kompleksowa instrukcja instalacji, szybkiego startu, konfiguracji oprogramowania Home Assistant oraz rozwiązywania problemów dla bramki Linux Box.",
    onlineUrl:
      "https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing",
    pdfUrl:
      "https://docs.google.com/document/export?format=pdf&id=1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I",
    topics: [
      "Pierwsze uruchomienie i podłączenie sprzętu",
      "Instalacja i konfiguracja Home Assistant",
      "Konfiguracja sieci (Ethernet & Dual Band WiFi)",
      "Kopie zapasowe i przywracanie systemu",
    ],
  },
  {
    id: "pro",
    title: "Linux Box PRO",
    badge: "Wersja PRO",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    subtitle: "Wydajna bramka AIoT z zaawansowanymi możliwościami rozbudowy",
    description:
      "Dedykowana dokumentacja techniczna dla modelu Linux Box PRO. Zawiera szczegółowe instrukcje konfiguracji zaawansowanych usług, integracji i rozbudowy.",
    onlineUrl:
      "https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing",
    pdfUrl:
      "https://docs.google.com/document/export?format=pdf&id=1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I",
    topics: [
      "Uruchomienie kontenerów Docker na Linux Box PRO",
      "Konfiguracja Home Assistant",
      "Obsługa Matter / Thread",
      "Optymalizacja wydajności i monitoring systemu",
    ],
  },
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<ModelType>("all");

  const filteredDocs =
    activeTab === "all"
      ? docsData
      : docsData.filter((doc) => doc.id === activeTab);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="pt-24 pb-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Back link */}
            <motion.div className="mb-12" variants={fadeInUp}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200/60 text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group shadow-sm"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Powrót do strony głównej
                </span>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Page Header */}
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <motion.div
                className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BookOpen className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Dokumentacja
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Wybierz model swojej bramki i uzyskaj dostęp do instrukcji
                oraz poradników technicznych.
              </p>
            </motion.div>

            {/* Model Filter Tabs */}
            <motion.div
              className="flex justify-center mb-12"
              variants={fadeInUp}
            >
              <div className="inline-flex p-1.5 rounded-2xl bg-gray-100/80 border border-gray-200/60 shadow-inner">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === "all"
                    ? "bg-white text-gray-900 shadow-md font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  <Layers className="w-4 h-4" />
                  Wszystkie modele
                </button>
                <button
                  onClick={() => setActiveTab("standard")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === "standard"
                    ? "bg-white text-blue-600 shadow-md font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  <Box className="w-4 h-4" />
                  Linux Box
                </button>
                <button
                  onClick={() => setActiveTab("pro")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === "pro"
                    ? "bg-white text-purple-600 shadow-md font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  <Cpu className="w-4 h-4" />
                  Linux Box PRO
                </button>
              </div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-16"
              variants={fadeInUp}
            >
              {[
                { icon: Zap, label: "Szybki start", value: "5 min" },
                {
                  icon: Shield,
                  label: "Sprawdzone instrukcje",
                  value: "100%",
                },
                { icon: Code, label: "Wsparcie dla modeli", value: "Box & PRO" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 rounded-2xl bg-white border border-gray-200/60 shadow-sm text-center group-hover:border-blue-200 group-hover:shadow-md transition-all">
                    <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Documentation Cards Section per Model */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12 mb-16"
              >
                {filteredDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="rounded-3xl bg-white border border-gray-200/70 shadow-xl overflow-hidden p-8 md:p-10 relative"
                  >
                    {/* Header Banner */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-semibold border ${doc.badgeColor}`}
                        >
                          {doc.badge}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900">
                          Dokumentacja: {doc.title}
                        </h2>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        {doc.subtitle}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-3xl">
                      {doc.description}
                    </p>

                    {/* Topics / Features checklist */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        Zawartość dokumentacji
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {doc.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-gray-700 text-sm font-medium bg-gray-50/80 p-3 rounded-xl border border-gray-100"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Cards grid (Online + PDF Download) */}
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      {/* Online doc button card */}
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="inline-flex p-3 rounded-xl bg-blue-600 text-white mb-4 shadow-md shadow-blue-500/20">
                            <FileText className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            Dokumentacja Online ({doc.title})
                          </h4>
                          <p className="text-sm text-gray-600 mb-6">
                            Przeglądaj w przeglądarce pełny poradnik krok po kroku z wyszukiwaniem i aktualnymi informacjami.
                          </p>
                        </div>
                        <Link
                          href={doc.onlineUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-500/20 group/btn"
                        >
                          <span>Otwórz dokumentację</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Link>
                      </motion.div>

                      {/* Download PDF card */}
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group p-6 rounded-2xl bg-gradient-to-br from-orange-50/50 to-amber-50/30 border border-orange-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="inline-flex p-3 rounded-xl bg-orange-600 text-white mb-4 shadow-md shadow-orange-500/20">
                            <Download className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            Pobierz PDF ({doc.title})
                          </h4>
                          <p className="text-sm text-gray-600 mb-6">
                            Pobierz oficjalny plik PDF na swój dysk, aby uzyskać dostęp offline w dowolnym momencie.
                          </p>
                        </div>
                        <Link
                          href={doc.pdfUrl}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-md shadow-orange-500/20 group/btn"
                        >
                          <span>Pobierz plik PDF</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Continuous expansion banner */}
            <motion.div className="text-center" variants={fadeInUp}>
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(245, 158, 11, 0)",
                    "0 0 20px rgba(245, 158, 11, 0.15)",
                    "0 0 20px rgba(245, 158, 11, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-amber-700 font-medium">
                  Dokumentacja dla Linux Box oraz Linux Box PRO jest w ciągłej rozbudowie!
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
