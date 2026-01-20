"use client";

import Image from "next/image";

export default function HeaderSimple() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background elements removed */}

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Linux Box
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
              Twój mini serwer.
            </span>
          </h1>

          {/* Subtitle with gradient */}
          <div className="mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
            <p className="inline-block text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Za 199 zł
            </p>
            <div className="mt-2 text-sm text-gray-500">Gotowy do użycia od razu po wyjęciu z pudełka</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            <a
              href="https://allegro.pl/uzytkownik/AI-Speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              <span>Kup teraz</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 text-gray-900 border-2 border-transparent hover:border-gray-300"
            >
              Dowiedz się więcej
            </a>
          </div>

          {/* Device Image with enhanced styling */}
          <div className="mb-16 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <div className="relative mx-auto" style={{ maxWidth: "800px" }}>
              {/* Glow effect behind image */}
              {/* Glow effect removed */}
              <div className="relative">
                <Image
                  src="/ais_gate_3_main.png"
                  alt="Linux Box"
                  width={420}
                  height={420}
                  className="mx-auto hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Specs with modern cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            {[
              { value: 128, suffix: "GB", label: "eMMC", color: "from-blue-500 to-blue-600" },
              { value: 4, suffix: "GB", label: "RAM", color: "from-purple-500 to-purple-600" },
              { value: "S905X3", suffix: "", label: "Procesor", color: "from-gray-700 to-gray-800" },
              { value: "Ubuntu", suffix: "", label: "System", color: "from-orange-500 to-orange-600" },
            ].map((spec, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative text-center">
                  <div className={`text-3xl sm:text-4xl font-bold mb-1 bg-gradient-to-r ${spec.color} bg-clip-text text-transparent`}>
                    {spec.value}
                    {spec.suffix}
                  </div>
                  <div className="text-sm font-medium text-gray-600">{spec.label}</div>
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
