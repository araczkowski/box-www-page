"use client";

import HeaderSimple from "./components/HeaderSimple";
import StickyNav from "./components/StickyNav";
import FloatingCTA from "./components/FloatingCTA";
import CounterAnimation from "./components/CounterAnimation";
import MobileTopBar from "./components/MobileTopBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MobileTopBar />
      <StickyNav />
      <FloatingCTA />
      <HeaderSimple />

      {/* Tech Specs */}
      <section id="tech-specs" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Specyfikacja Techniczna
            </h2>
            <p className="text-xl text-gray-600">
              Wszystko, czego potrzebujesz w jednym urządzeniu
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "Wydajność",
                description:
                  "Procesor Amlogic S905X3 i 4 GB RAM zapewniają płynną pracę.",
              },
              {
                icon: "💾",
                title: "Pamięć/Dysk",
                description:
                  "128 GB eMMC + rozszerzalność przez microSD i/lub USB.",
              },
              {
                icon: "📶",
                title: "WiFi 5GHz",
                description: "Szybkie bezprzewodowe połączenie",
              },
              {
                icon: "🔌",
                title: "Ethernet 1GB",
                description: "Stabilne połączenie przewodowe",
              },
              {
                icon: "⚡",
                title: "USB 3.0",
                description: "Szybki transfer danych",
              },
              {
                icon: "🖥️",
                title: "HDMI 2.0A",
                description: "Wyjście wideo 4K",
              },
              {
                icon: "🖵",
                title: "Wyświetlacz LED",
                description: "Pokazuje czas, temperaturę i IP",
              },
              {
                icon: "💲",
                title: "Niskie zużycie energii",
                description: "Około 2 kWh miesięcznie",
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{spec.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Dlaczego Linux Box?
            </h2>
            <p className="text-xl text-gray-600">
              Niewiarygodne możliwości w kompaktowej obudowie
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: "🖥️",
                title: "System",
                description:
                  "Oprócz Ubuntu, możesz uruchomić Debian, Armbian i inne systemy.",
              },
              {
                icon: "🐳",
                title: "Docker",
                description: "Uruchamiaj aplikacje w kontenerach.",
              },
              {
                icon: "🎮",
                title: "Batocera.linux",
                description: "Zmień swój Linux Box w konsolę do gier retro.",
              },
              {
                icon: "🏠",
                title: "Automatyka domowa",
                description: "Home Assistant, SUPLA, Domoticz, OpenHAB i inne.",
              },
              {
                icon: "🎬",
                title: "CoreElec",
                description: "Oglądaj filmy i seriale z Kodi.",
              },
              {
                icon: "👨‍💻",
                title: "Dla deweloperów",
                description: "Kompaktowy dev-server do Twoich projektów.",
              },
              {
                icon: "📱",
                title: "System Android",
                description:
                  "Różne obrazy oparte na Android TV lub Android AOSP.",
              },
              {
                icon: "✨",
                title: "I wiele więcej...",
                description: "Zobacz sekcję Zastosowania poniżej.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section id="opensource" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Open Source
            </h2>
            <p className="text-xl text-blue-600 font-semibold">
              System na Linux Box jest w pełni otwarty!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 text-center">
              <div className="text-6xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Wolny Dostęp
              </h3>
              <p className="text-gray-600">
                Pobierz i zainstaluj system na USB, karcie SD lub pamięci eMMC.
                Linux Box ma włączony multiboot - wystarczy podłączyć nośnik z
                systemem.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 text-center">
              <div className="text-6xl mb-6">🐧</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Ubuntu 25.04
              </h3>
              <p className="text-gray-600">
                Gotowy do użycia system z preinstalowanym oprogramowaniem. W
                pełni funkcjonalny i zoptymalizowany dla Linux Box.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 text-center">
              <div className="text-6xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Pełna Kontrola
              </h3>
              <p className="text-gray-600">
                Modyfikuj, instaluj i dostosowuj do swoich potrzeb. Dostęp do
                konta root-a i pełna swoboda w instalacji programów i
                konfiguracji systemu.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <a
              href="https://drive.google.com/file/d/1QR6u-WGWogbvLDciO9ELbaHB35zI3ucf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-6 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">⬇️</span>
                <span className="text-xl">POBIERZ OBRAZ SYSTEMU</span>
                <span className="text-sm font-normal flex items-center gap-2">
                  <span>🐧</span> Ubuntu 25.04
                </span>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Instrukcje instalacji znajdziesz w{" "}
              <a
                href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors underline"
              >
                dokumentacji
              </a>
              .
            </p>
          </div>
        </div>
      </section>

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
