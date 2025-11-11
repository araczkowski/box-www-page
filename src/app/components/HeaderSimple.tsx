"use client";

import Image from "next/image";
import CounterAnimation from "./CounterAnimation";

export default function HeaderSimple() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] text-black">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-2">
              Linux Box
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-500">
              Twój domowy serwer.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] text-gray-700">
            Za <CounterAnimation end={199} />zł
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            <a
              href="https://allegro.pl/uzytkownik/AI-Speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-lg transition-all duration-200 hover:scale-105"
            >
              Kup
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 bg-gray-100 hover:bg-gray-200 text-black"
            >
              Dowiedz się więcej
            </a>
          </div>

          {/* Device Image */}
          <div className="mb-16 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <div className="relative mx-auto" style={{ maxWidth: "800px" }}>
              <Image
                src="/box_1_transparent.png"
                alt="Linux Box"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            {[
              { value: 128, suffix: "GB", label: "eMMC" },
              { value: 4, suffix: "GB", label: "RAM" },
              { value: "S905X3", suffix: "", label: "Procesor" },
              { value: "Ubuntu", suffix: "", label: "System" },
            ].map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold mb-1 text-black">
                  {typeof spec.value === "number" ? (
                    <>
                      <CounterAnimation end={spec.value} />
                      {spec.suffix}
                    </>
                  ) : (
                    spec.value
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  {spec.label}
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
            transform: translateY(30px);
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
