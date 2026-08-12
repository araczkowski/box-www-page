"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Sparkles, X } from "lucide-react";

export default function HeaderSimple() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <header className="relative pt-16 pb-24 overflow-hidden bg-[#fafafa]">
      {/* Ambient Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0071e3]/10 blur-[120px] animate-aurora" />
        <div
          className="absolute top-1/4 -right-40 w-[450px] h-[450px] rounded-full bg-[#00e5c8]/10 blur-[120px] animate-aurora"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#a855f7]/10 blur-[120px] animate-aurora"
          style={{ animationDelay: "8s" }}
        />
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title & Tech Badges */}
          <h1 className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <div className="flex flex-col items-center gap-4">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight gradient-text-black-navy">
                Linux Box PRO.
              </span>
              <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-6 py-2.5 rounded-full glass-light shadow-lg border border-white/60">
                <Image
                  src="/linux.svg"
                  alt="Linux"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  title="Linux"
                />
                <span className="text-slate-300 text-xs font-semibold">•</span>
                <Image
                  src="/home-assistant.svg"
                  alt="Home Assistant"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  title="Home Assistant"
                />
                <span className="text-slate-300 text-xs font-semibold">•</span>
                <div
                  className="flex items-center gap-2"
                  title="Thread / Matter"
                >
                  <Image
                    src="/thread.svg"
                    alt="Thread"
                    width={50}
                    height={20}
                    className="h-4 sm:h-5 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <span className="text-slate-300 text-xs font-semibold">
                    /
                  </span>
                  <Image
                    src="/matter.svg"
                    alt="Matter"
                    width={50}
                    height={20}
                    className="h-4 sm:h-5 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </h1>

          {/* Subtitle placed above device image */}
          <p className="mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#86868b] max-w-3xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.5s_forwards]">
            Twój dom, Twoje zasady. Bez chmury, bez ograniczeń.
          </p>

          {/* Device Image with glow effect */}
          <div className="mb-10 opacity-0 animate-[fadeIn_1s_ease-out_0.7s_forwards]">
            <div className="relative mx-auto" style={{ maxWidth: "720px" }}>
              <div className="absolute inset-0 bg-[#0071e3]/20 blur-[100px] rounded-full"></div>
              <div className="relative">
                <Image
                  src="/Code_Generated_Image.png"
                  alt="Linux Box"
                  width={560}
                  height={560}
                  className="mx-auto hover:scale-[1.03] transition-transform duration-700 rounded-3xl drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Prominent "Kup teraz" CTA button */}
          <div className="mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] flex flex-col items-center gap-4">
            <button
              onClick={() => setShowNotice(true)}
              className="btn-shine btn-glow group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#0071e3] via-[#0084ff] to-[#00c6ff] hover:from-[#0084ff] hover:via-[#0099ff] hover:to-[#00e5ff] text-white text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-pulse-ring"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Kup teraz</span>
            </button>

            {/* Notification when button is clicked */}
            {showNotice && (
              <div className="animate-in fade-in slide-in-from-top-3 duration-300 flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-dark text-white shadow-2xl border border-white/20 max-w-md">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                <span className="text-base font-semibold tracking-tight">
                  Sprzedaż już wkrótce
                </span>
                <button
                  onClick={() => setShowNotice(false)}
                  className="ml-auto p-1 rounded-full hover:bg-white/20 transition-colors text-slate-400 hover:text-white"
                  title="Zamknij"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Specs with Apple #f5f5f7 surface cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]">
            {[
              {
                value: "S922X-H",
                suffix: "",
                label: "Procesor",
              },
              {
                value: "64 / 4",
                suffix: " GB",
                label: "eMMC / RAM",
              },
              {
                value: "Ubuntu",
                suffix: "",
                label: "System",
              },
              {
                value: "Thread",
                suffix: "",
                label: "Border Router",
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="card-hover card-glow group relative p-6 rounded-3xl glass-light shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div
                    className={`${
                      typeof spec.value === "string" && spec.value.length > 8
                        ? "text-lg sm:text-xl"
                        : "text-2xl sm:text-3xl"
                    } font-extrabold mb-1 bg-gradient-to-r from-[#1d1d1f] to-[#0071e3] bg-clip-text text-transparent tracking-tight`}
                  >
                    {spec.value}
                    {spec.suffix}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#86868b]">
                    {spec.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
