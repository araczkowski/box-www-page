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

const LinuxPenguinWatermark = () => (
  <div className="absolute right-4 top-4 md:right-8 md:top-6 pointer-events-none opacity-30 select-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 z-0">
    <svg
      width="140"
      height="140"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-500/20"
    >
      {/* Body */}
      <ellipse cx="50" cy="60" rx="30" ry="32" fill="currentColor" />
      {/* Belly */}
      <ellipse
        cx="50"
        cy="62"
        rx="20"
        ry="24"
        fill="#F8FAFC"
        fillOpacity="0.9"
      />
      {/* Head */}
      <circle cx="50" cy="28" r="20" fill="currentColor" />
      {/* Eyes */}
      <ellipse cx="43" cy="24" rx="4" ry="6" fill="#F8FAFC" />
      <ellipse cx="57" cy="24" rx="4" ry="6" fill="#F8FAFC" />
      <circle cx="44" cy="24" r="2" fill="#0F172A" />
      <circle cx="56" cy="24" r="2" fill="#0F172A" />
      {/* Beak */}
      <polygon points="50,28 42,34 58,34" fill="#F59E0B" />
      {/* Wings */}
      <path
        d="M 22 50 C 12 55 12 70 24 75 C 24 65 24 55 22 50 Z"
        fill="currentColor"
      />
      <path
        d="M 78 50 C 88 55 88 70 76 75 C 76 65 76 55 78 50 Z"
        fill="currentColor"
      />
      {/* Feet */}
      <ellipse cx="38" cy="90" rx="10" ry="4" fill="#F59E0B" />
      <ellipse cx="62" cy="90" rx="10" ry="4" fill="#F59E0B" />
    </svg>
  </div>
);

const BoxWatermark = () => (
  <div className="absolute right-4 top-4 md:right-8 md:top-6 pointer-events-none opacity-10 select-none text-emerald-600 z-0">
    <Box className="w-36 h-36" />
  </div>
);

type ModelType = "all" | "pro" | "standard";

interface DocItem {
  id: "pro" | "standard";
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
    id: "pro",
    title: "Linux Box PRO",
    badge: "Wersja PRO",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300 font-semibold",
    subtitle:
      "Wydajna bramka IoT z Home Assistant (S922X-H, 4GB RAM, 64GB eMMC)",
    description:
      "Dedykowana dokumentacja techniczna dla modelu Linux Box PRO. Zawiera szczegółowe instrukcje konfiguracji zaawansowanych usług, integracji i rozbudowy.",
    onlineUrl:
      "https://docs.google.com/document/d/1mFhOg6x7Zc9KEqYhMHZ5xfaH0QP8Uc2ZnkgWfM_to2U/edit?usp=drive_link",
    pdfUrl:
      "https://docs.google.com/document/export?format=pdf&id=1mFhOg6x7Zc9KEqYhMHZ5xfaH0QP8Uc2ZnkgWfM_to2U",
    topics: [
      "Uruchomienie kontenerów Docker na Linux Box PRO",
      "Konfiguracja Home Assistant",
      "Obsługa Matter / Thread",
      "Optymalizacja wydajności i monitoring systemu",
    ],
  },
  {
    id: "standard",
    title: "Linux Box (Standard)",
    badge: "Wersja Standard",
    badgeColor:
      "bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold",
    subtitle: "Bramka IoT z zaawansowanymi możliwościami rozbudowy",
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
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<ModelType>("pro");

  const filteredDocs =
    activeTab === "all"
      ? docsData
      : docsData.filter((doc) => doc.id === activeTab);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-emerald-50/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-pulse"
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
                className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100/50 mb-6"
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
                Wybierz model swojej bramki i uzyskaj dostęp do instrukcji oraz
                poradników technicznych.
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
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeTab === "all"
                      ? "bg-white text-gray-900 shadow-md font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  Wszystkie modele
                </button>
                <button
                  onClick={() => setActiveTab("pro")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeTab === "pro"
                      ? "bg-blue-600 text-white shadow-md font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  🐧 Linux Box PRO
                </button>
                <button
                  onClick={() => setActiveTab("standard")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeTab === "standard"
                      ? "bg-emerald-600 text-white shadow-md font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Box className="w-4 h-4" />
                  Linux Box Standard
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
                {
                  icon: Code,
                  label: "Wsparcie dla modeli",
                  value: "PRO & Standard",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-emerald-100/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                {filteredDocs.map((doc) => {
                  const isPro = doc.id === "pro";
                  return (
                    <div
                      key={doc.id}
                      className={`group relative rounded-3xl border shadow-2xl overflow-hidden p-8 md:p-10 transition-all duration-500 ${
                        isPro
                          ? "bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-50/50 border-blue-200/90 text-slate-900 shadow-xl shadow-blue-100/50"
                          : "bg-gradient-to-br from-emerald-50/90 via-teal-50/80 to-green-50/60 border-emerald-200/90 text-slate-900 shadow-xl shadow-emerald-100/50"
                      }`}
                    >
                      {/* Background Watermark */}
                      {isPro ? <LinuxPenguinWatermark /> : <BoxWatermark />}

                      {/* Top Glowing Accent for PRO */}
                      {isPro && (
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                      )}

                      {/* Header Banner */}
                      <div
                        className={`flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b relative z-10 ${
                          isPro
                            ? "border-blue-100 pr-24 md:pr-36"
                            : "border-emerald-200/80"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3.5 py-1 rounded-full text-xs font-semibold border ${doc.badgeColor}`}
                          >
                            {doc.badge}
                          </span>
                          <h2 className="text-3xl font-bold text-slate-900">
                            Dokumentacja: {doc.title}
                          </h2>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            isPro
                              ? "text-blue-900 font-semibold"
                              : "text-emerald-900 font-semibold"
                          }`}
                        >
                          {doc.subtitle}
                        </span>
                      </div>

                      <p className="mb-8 leading-relaxed text-lg max-w-3xl relative z-10 text-slate-700">
                        {doc.description}
                      </p>

                      {/* Topics / Features checklist */}
                      <div className="mb-8 relative z-10">
                        <h3
                          className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                            isPro ? "text-blue-900/80" : "text-emerald-900/80"
                          }`}
                        >
                          Zawartość dokumentacji
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {doc.topics.map((topic, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-3 text-sm font-medium p-3.5 rounded-xl border backdrop-blur-sm transition-all ${
                                isPro
                                  ? "bg-white/90 text-slate-800 border-blue-100 hover:border-blue-200 shadow-sm"
                                  : "bg-white/90 text-slate-800 border-emerald-200/80 hover:border-emerald-300 shadow-sm"
                              }`}
                            >
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isPro ? "text-blue-600" : "text-emerald-600"
                                }`}
                              />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Cards grid (Online + PDF Download) */}
                      <div className="grid md:grid-cols-2 gap-6 pt-2 relative z-10">
                        {/* Online doc button card */}
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`relative group/card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                            isPro
                              ? "bg-gradient-to-br from-blue-50/90 to-indigo-50/70 border-blue-200/80"
                              : "bg-white/90 border-emerald-200/90 hover:border-emerald-300"
                          }`}
                        >
                          <div>
                            <div
                              className={`inline-flex p-3 rounded-xl mb-4 shadow-md ${
                                isPro
                                  ? "bg-blue-600 text-white shadow-blue-500/20"
                                  : "bg-emerald-600 text-white shadow-emerald-500/20"
                              }`}
                            >
                              <FileText className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-slate-900">
                              Dokumentacja Online ({doc.title})
                            </h4>
                            <p className="text-sm mb-6 text-slate-600">
                              Przeglądaj w przeglądarce pełny poradnik krok po
                              kroku z wyszukiwaniem i aktualnymi informacjami.
                            </p>
                          </div>
                          <Link
                            href={doc.onlineUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold rounded-xl transition-all duration-300 shadow-md group/btn ${
                              isPro
                                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20"
                                : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/20"
                            }`}
                          >
                            <span>Otwórz dokumentację</span>
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </Link>
                        </motion.div>

                        {/* Download PDF card */}
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`relative group/card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                            isPro
                              ? "bg-gradient-to-br from-amber-50/90 to-orange-50/70 border-amber-200/80 hover:border-amber-300"
                              : "bg-gradient-to-br from-emerald-50/90 to-teal-50/70 border-emerald-200/80 hover:border-emerald-300"
                          }`}
                        >
                          <div>
                            <div
                              className={`inline-flex p-3 rounded-xl mb-4 shadow-md ${
                                isPro
                                  ? "bg-amber-600 text-white shadow-amber-500/20"
                                  : "bg-emerald-600 text-white shadow-emerald-500/20"
                              }`}
                            >
                              <Download className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-slate-900">
                              Pobierz PDF ({doc.title})
                            </h4>
                            <p className="text-sm mb-6 text-slate-600">
                              Pobierz oficjalny plik PDF na swój dysk, aby
                              uzyskać dostęp offline w dowolnym momencie.
                            </p>
                          </div>
                          <Link
                            href={doc.pdfUrl}
                            className={`inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold rounded-xl transition-all duration-300 shadow-md group/btn ${
                              isPro
                                ? "bg-amber-600 text-white hover:bg-amber-700 shadow-amber-500/20"
                                : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/20"
                            }`}
                          >
                            <span>Pobierz plik PDF</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Continuous expansion banner */}
            <motion.div className="text-center" variants={fadeInUp}>
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16, 185, 129, 0)",
                    "0 0 20px rgba(16, 185, 129, 0.15)",
                    "0 0 20px rgba(16, 185, 129, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-800 font-medium">
                  Dokumentacja dla Linux Box oraz Linux Box PRO jest w ciągłej
                  rozbudowie!
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
