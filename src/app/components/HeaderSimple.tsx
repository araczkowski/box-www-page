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
          <h1 className="mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <div className="flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-3xl bg-white/90 border border-gray-200/80 shadow-md backdrop-blur-md hover:shadow-lg transition-all duration-300">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Linux Box PRO
                </span>
                <div className="w-px h-7 sm:h-9 bg-gray-200 mx-1" />
                <Image
                  src="/linux.svg"
                  alt="Linux"
                  width={36}
                  height={36}
                  className="w-7 h-7 sm:w-9 sm:h-9 object-contain hover:scale-110 transition-transform"
                  title="Linux"
                />
                <div className="w-px h-6 sm:h-7 bg-gray-200" />
                <Image
                  src="/home-assistant.svg"
                  alt="Home Assistant"
                  width={36}
                  height={36}
                  className="w-7 h-7 sm:w-9 sm:h-9 object-contain hover:scale-110 transition-transform"
                  title="Home Assistant"
                />
                <div className="w-px h-6 sm:h-7 bg-gray-200" />
                <div className="flex items-center gap-2" title="Thread / Matter">
                  <Image
                    src="/thread.svg"
                    alt="Thread"
                    width={60}
                    height={24}
                    className="h-5 sm:h-7 w-auto object-contain hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-300 text-xs font-semibold">/</span>
                  <Image
                    src="/matter.svg"
                    alt="Matter"
                    width={60}
                    height={24}
                    className="h-5 sm:h-7 w-auto object-contain hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>
          </h1>

          {/* Device Image with enhanced styling */}
          <div className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <div className="relative mx-auto" style={{ maxWidth: "800px" }}>
              <div className="relative">
                <Image
                  src="/Code_Generated_Image.png"
                  alt="Linux Box"
                  width={500}
                  height={500}
                  className="mx-auto hover:scale-105 transition-transform duration-500 rounded-2xl drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Subtitle placed under device image */}
          <p className="mb-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]">
            Twój dom, Twoje zasady. Bez chmury, bez ograniczeń.
          </p>

          {/* Specs with modern cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            {[
              {
                value: "S922X-H",
                suffix: "",
                label: "Procesor",
                color: "from-gray-700 to-gray-800",
              },
              {
                value: "64 / 4",
                suffix: " GB",
                label: "eMMC / RAM",
                color: "from-blue-500 to-purple-600",
              },

              {
                value: "Ubuntu",
                suffix: "",
                label: "System",
                color: "from-orange-500 to-orange-600",
              },
              {
                value: "Thread",
                suffix: "",
                label: "Border Router",
                color: "from-emerald-500 to-teal-600",
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
                <div className="relative text-center">
                  <div
                    className={`${typeof spec.value === "string" && spec.value.length > 8
                      ? "text-xl sm:text-2xl"
                      : "text-3xl sm:text-4xl"
                      } font-bold mb-1 bg-gradient-to-r ${spec.color} bg-clip-text text-transparent`}
                  >
                    {spec.value}
                    {spec.suffix}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
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
