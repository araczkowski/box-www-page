"use client";

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
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingCTA from "../components/FloatingCTA";
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

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      {/* Animated background gradient overlay - same as main page */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <FloatingCTA />

      <div className="pt-24 pb-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Back to home link */}
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

            {/* Page header */}
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <motion.div
                className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 mb-8"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BookOpen className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Dokumentacja
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kompleksowe materiały dokumentacyjne dla Twojego{" "}
                <span className="text-blue-600 font-semibold">Linux Box</span>
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-12"
              variants={fadeInUp}
            >
              {[
                { icon: Zap, label: "Szybki start", value: "5 min" },
                {
                  icon: Shield,
                  label: "Przetestowane działanie",
                  value: "100%",
                },
                { icon: Code, label: "Przykłady", value: "50+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -5 }}
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

            {/* Main content cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12"
              variants={fadeInUp}
            >
              {/* Online documentation card */}
              <motion.div
                className="relative group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-200/60 shadow-lg group-hover:border-blue-200 group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full" />

                  <div className="relative">
                    <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Pełna dokumentacja
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Szczegółowa dokumentacja z przykładami konfiguracji,
                      instrukcjami instalacji i wskazówkami dotyczącymi
                      rozwiązywania problemów.
                    </p>

                    <Link
                      href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group/btn shadow-lg shadow-blue-500/25"
                    >
                      <span>Otwórz dokumentację</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Download documentation card */}
              <motion.div
                className="relative group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-200/60 shadow-lg group-hover:border-emerald-200 group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent rounded-bl-full" />

                  <div className="relative">
                    <div className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Download className="w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Pobierz dokumentację
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Pobierz pełną dokumentację w formacie PDF, aby mieć dostęp
                      offline do wszystkich instrukcji i poradników.
                    </p>

                    <Link
                      href="https://docs.google.com/document/export?format=pdf&id=1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 group/btn shadow-lg shadow-emerald-500/25"
                    >
                      <span>Pobierz PDF</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Coming soon notice */}
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
                  Dokumentacja w ciągłej rozbudowie — wkrótce więcej treści i
                  przykładów!
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
