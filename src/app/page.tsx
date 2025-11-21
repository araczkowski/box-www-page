"use client";

import HeaderSimple from "./components/HeaderSimple";
import StickyNav from "./components/StickyNav";
import FloatingCTA from "./components/FloatingCTA";
import CounterAnimation from "./components/CounterAnimation";
import MobileTopBar from "./components/MobileTopBar";
import TechSpecs from "./components/TechSpecs";
import Features from "./components/Features";
import OpenSource from "./components/OpenSource";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MobileTopBar />
      <StickyNav />
      <FloatingCTA />
      <HeaderSimple />

      <TechSpecs />

      {/* Features */}

      {/* Features */}
      <Features />
      {/* Comparison */}
      <section id="comparison" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Porównanie z Raspberry Pi
            </h2>
            <p className="text-xl text-gray-600">
              Zobacz, dlaczego Linux Box to lepsza opcja
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="min-w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-white border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-black font-bold">
                    Cecha
                  </th>
                  <th className="px-6 py-4 text-center text-black font-bold">
                    Raspberry Pi 4
                  </th>
                  <th className="px-6 py-4 text-center text-black font-bold">
                    Linux Box
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">Procesor</td>
                  <td className="px-6 py-4 text-gray-600 text-center">
                    Broadcom BCM2711
                  </td>
                  <td className="px-6 py-4 text-blue-400 text-center">
                    Amlogic S905X3
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">
                    Pamięć RAM
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-center">
                    <CounterAnimation end={4} />
                    GB LPDDR4
                  </td>
                  <td className="px-6 py-4 text-blue-400 text-center">
                    <CounterAnimation end={4} />
                    GB DDR4
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">
                    Pamięć masowa
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-center">Brak</td>
                  <td className="px-6 py-4 text-blue-400 text-center">
                    <CounterAnimation end={128} />
                    GB eMMC
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">Obudowa</td>
                  <td className="px-6 py-4 text-gray-600 text-center">Brak</td>
                  <td className="px-6 py-4 text-blue-400 text-center">
                    W zestawie
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">Zasilacz</td>
                  <td className="px-6 py-4 text-gray-600 text-center">Brak</td>
                  <td className="px-6 py-4 text-blue-400 text-center">
                    W zestawie
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">
                    Kabel HDMI
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-center">Brak</td>
                  <td className="px-6 py-4 text-blue-400 text-center">
                    W zestawie
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">
                    Wyświetlacz LED
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-center">Brak</td>
                  <td className="px-6 py-4 text-blue-400 text-center">Tak</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-black font-medium">Android</td>
                  <td className="px-6 py-4 text-gray-600 text-center">Brak</td>
                  <td className="px-6 py-4 text-blue-400 text-center">
                    Tak, różne dystrybucje
                  </td>
                </tr>
                <tr className="bg-blue-50 font-bold">
                  <td className="px-6 py-4 text-black">Cena kompletu</td>
                  <td className="px-6 py-4 text-black text-center text-xl">
                    ~<CounterAnimation end={410} />
                    zł
                  </td>
                  <td className="px-6 py-4 text-blue-400 text-center text-xl">
                    <CounterAnimation end={199} />
                    zł
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <div className="inline-block bg-blue-50 px-8 py-4 rounded-2xl border border-blue-200">
              <p className="text-2xl font-bold text-black">
                Oszczędź ponad{" "}
                <span className="text-blue-400">
                  <CounterAnimation end={50} />%
                </span>{" "}
                z Linux Box!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <OpenSource />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-600">
                  SEO Keywords:
                </span>{" "}
                Raspberry Pi, alternatywa dla Raspberry Pi, Home Assistant,
                serwer domowy, Ubuntu, Docker, Amlogic S905X3, Mini PC,
                CoreELEC, Batocera, Domoticz, SUPLA, OpenHAB, Pi-hole,
                Nextcloud, self-hosting, tani serwer, kompaktowy serwer, serwer
                multimedialny, konsola retro.
              </p>
            </div>

            <div className="mb-6">
              <a
                href="mailto:info@sviete.pl"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
              >
                ✉️ info@sviete.pl
              </a>
            </div>

            <p className="text-gray-600 mb-6">
              &copy; 2025 Linux Box. Wszystkie prawa zastrzeżone.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Dokumentacja
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="https://allegro.pl/uzytkownik/AI-Speaker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sklep Allegro
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
