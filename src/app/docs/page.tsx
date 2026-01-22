"use client";

import { FileText, ArrowRight, Download, BookOpen } from "lucide-react";
import Link from "next/link";
import StickyNav from "../components/StickyNav";
import MobileTopBar from "../components/MobileTopBar";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../components/Footer";

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

      <MobileTopBar />
      <StickyNav />
      <FloatingCTA />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Dokumentacja
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kompleksowe materiały dokumentacyjne dla Twojego Linux Box
              </p>
            </div>

            {/* Main content card */}
            <div className="bg-white rounded-2xl border border-gray-200/60 shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Pełna dokumentacja
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Szczegółowa dokumentacja z przykładami konfiguracji,
                        instrukcjami instalacji i wskazówkami dotyczącymi
                        rozwiązywania problemów.
                      </p>
                      <Link
                        href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <span>Otwórz dokumentację</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-green-50 text-green-600">
                      <Download className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Pobierz dokumentację
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Pobierz pełną dokumentację w formacie PDF, aby mieć
                        dostęp offline.
                      </p>
                      <Link
                        href="https://docs.google.com/document/export?format=pdf&id=1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <span>Pobierz dokumentację</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coming soon notice */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-full">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-sm text-amber-800">
                  Dokumentacja w ciągłej rozbudowie - wkrótce więcej treści i
                  przykładów!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
