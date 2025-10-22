"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const [typedCommand, setTypedCommand] = useState("");
  const commandToType = "doocker pull homeassistant/home-assistant";

  useEffect(() => {
    function updateClock() {
      const clockElement = document.getElementById("clock");
      if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        clockElement.textContent = `Godzina: ${hours}:${minutes}:${seconds}`;
      }
    }

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let clearingTimeout: NodeJS.Timeout;

    const typeCommand = () => {
      setTypedCommand("");
      charIndex = 0;
      typingTimeout = setInterval(() => {
        if (charIndex < commandToType.length) {
          setTypedCommand((prev) => prev + commandToType.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typingTimeout);
          clearingTimeout = setTimeout(() => {
            setTypedCommand("");
            setTimeout(typeCommand, 500); // Wait 0.5s before re-typing
          }, 1500); // Wait 1.5s after typing before clearing
        }
      }, 150); // Typing speed (150ms per character)
    };

    typeCommand(); // Start typing on mount

    return () => {
      clearInterval(intervalId);
      clearInterval(typingTimeout);
      clearTimeout(clearingTimeout);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <header>
        <div className="container">
          <div className="header-top">
            <label className="theme-switch">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="hero-grid">
            <div className="hero-content hero-1">
              <div className="hero-badge">🚀 Alternatywa dla Raspberry Pi</div>
              <div className="hero-title-container">
                <h1 className="hero-title">
                  Linux<span className="hero-penguin">🐧</span>Box
                </h1>
              </div>
              <p className="hero-subtitle">
                Twój kompaktowy domowy serwer Ubuntu
                <br />
                <strong>Gotowy do pracy od razu po wyjęciu z pudełka</strong>
              </p>
              <div className="hero-visual">
                <div className="device-showcase">
                  <Image
                    src="/ais_gate_dev3_1.webp"
                    alt="Linux Box - kompaktowy serwer domowy"
                    width={320}
                    height={220}
                    className="device-image"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="device-glow"></div>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  href="https://allegro.pl/uzytkownik/AI-Speaker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-allegro btn-secondary"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <span className="btn-main">
                    <span className="btn-icon">🛒</span>Kup teraz
                  </span>
                  <span className="btn-price">Tylko 199 zł</span>
                </a>
                <a href="#features" className="btn btn-features">
                  <span className="btn-main">
                    <span className="btn-icon">ℹ️</span>Poznaj
                  </span>
                  <span className="btn-price">możliwości</span>
                </a>
              </div>

              <div className="hero-specs">
                <div className="spec-item">
                  <span className="spec-icon">💾</span>
                  <div>
                    <span className="spec-value">128 GB</span>
                    <span className="spec-label">eMMC</span>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🧠</span>
                  <div>
                    <span className="spec-value">4 GB</span>
                    <span className="spec-label">RAM</span>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">⚡</span>
                  <div>
                    <span className="spec-value">Amlogic</span>
                    <span className="spec-label">S905X3</span>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🖥️</span>
                  <div>
                    <span className="spec-value">Ubuntu</span>
                    <span className="spec-label">25.04</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="tech-specs">
        <div className="container">
          <div className="specs-grid">
            <div className="spec-card">
              <span className="spec-icon">📶</span>
              <h3>WiFi 5GHz</h3>
              <p>Szybkie bezprzewodowe połączenie</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🔌</span>
              <h3>Ethernet 1GB</h3>
              <p>Stabilne połączenie przewodowe</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">⚡</span>
              <h3>USB 3.0</h3>
              <p>Szybki transfer danych</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🖥️</span>
              <h3>HDMI 2.0A</h3>
              <p>Wyjście wideo 4K</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🖵</span>
              <h3>Wyświetlacz LED</h3>
              <p>Pokazuje czas, temperaturę i IP</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">👾</span>
              <h3>Obsługa Androida</h3>
              <p>Różne dystrybucje Android TV/AOSP</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🐳</span>
              <h3>Docker & Home Assistant</h3>
              <p>Automatyka domowa w kontenerach</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🔌</span>
              <h3>Niskie zużycie energii</h3>
              <p>Około 2 kWh miesięcznie</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Dlaczego Linux Box?</h2>
          <div className="specs-grid">
            <div className="spec-card">
              <span className="spec-icon">🚀</span>
              <h3>Wydajność</h3>
              <p>Procesor Amlogic S905X3 i 4 GB RAM zapewniają płynną pracę.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">💾</span>
              <h3>Pamięć/Dysk</h3>
              <p>128 GB eMMC + rozszerzalność przez microSD i/lub USB.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🐧</span>
              <h3>System</h3>
              <p>
                Oprócz Ubuntu, możesz uruchomić Debian, Armbian i inne systemy.
              </p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🖵</span>
              <h3>Wyświetlacz</h3>
              <p>Pokazuje czas, temperaturę, IP i więcej.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🐳</span>
              <h3>Docker</h3>
              <p>Uruchamiaj aplikacje w kontenerach.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🎮</span>
              <h3>Batocera.linux</h3>
              <p>Zmień swój Linux Box w konsolę do gier retro.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🏠</span>
              <h3>Automatyka domowa</h3>
              <p>Home Assistant, SUPLA, Domoticz, OpenHAB i inne.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🎬</span>
              <h3>CoreElec</h3>
              <p>Oglądaj filmy i seriale z Kodi.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">🔌</span>
              <h3>Niskie zużycie energii</h3>
              <p>Około 2 kWh miesięcznie, czyli mniej niż 2 zł.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">👨‍💻</span>
              <h3>Dla deweloperów</h3>
              <p>Kompaktowy dev-server do Twoich projektów.</p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">👾</span>
              <h3>System Android</h3>
              <p>
                Różne obrazy oparte na Android TV lub Android AOSP do
                uruchomienia na boxie.
              </p>
            </div>
            <div className="spec-card">
              <span className="spec-icon">✨</span>
              <h3>I wiele więcej...</h3>
              <p>
                Zobacz <a href="#applications">Zastosowania</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="features">
        <div className="container">
          <h2>Porównanie z Raspberry Pi</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Cecha</th>
                  <th>
                    <div className="image-container">
                      <Image
                        src="/rpi4.png"
                        alt="Raspberry Pi 4"
                        width={120}
                        height={100}
                      />
                      <div className="image-caption">Raspberry Pi 4</div>
                    </div>
                  </th>
                  <th>
                    <div className="image-container">
                      <Image
                        src="/ais_gate_dev3_1.png"
                        alt="Linux Box"
                        width={120}
                        height={120}
                      />
                      <div className="image-caption">Linux Box (S905X3)</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Cecha">Procesor</td>
                  <td data-label="Raspberry Pi 4">
                    Broadcom BCM2711 (4x Cortex-A72 @ 1.8GHz)
                  </td>
                  <td data-label="Linux Box (S905X3)">
                    Amlogic S905X3 (4x Cortex-A55 @ 1.9GHz)
                  </td>
                </tr>
                <tr>
                  <td data-label="Cecha">Pamięć RAM</td>
                  <td data-label="Raspberry Pi 4">4GB LPDDR4</td>
                  <td data-label="Linux Box (S905X3)">4GB DDR4</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Pamięć masowa</td>
                  <td data-label="Raspberry Pi 4">Brak</td>
                  <td data-label="Linux Box (S905X3)">128GB eMMC</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Wyświetlacz LED</td>
                  <td data-label="Raspberry Pi 4">Brak</td>
                  <td data-label="Linux Box (S905X3)">Tak</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Android</td>
                  <td data-label="Raspberry Pi 4">Brak</td>
                  <td data-label="Linux Box (S905X3)">
                    Tak, różne dystrybucje, także Android TV
                  </td>
                </tr>
                <tr>
                  <td data-label="Cecha">Płytka</td>
                  <td data-label="Raspberry Pi 4">~250zł</td>
                  <td data-label="Linux Box (S905X3)">W zestawie</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Obudowa</td>
                  <td data-label="Raspberry Pi 4">~30zł</td>
                  <td data-label="Linux Box (S905X3)">W zestawie</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Zasilacz</td>
                  <td data-label="Raspberry Pi 4">~40zł</td>
                  <td data-label="Linux Box (S905X3)">W zestawie</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Kabel HDMI</td>
                  <td data-label="Raspberry Pi 4">~15zł</td>
                  <td data-label="Linux Box (S905X3)">W zestawie</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Karta microSD 128GB</td>
                  <td data-label="Raspberry Pi 4">~60zł</td>
                  <td data-label="Linux Box (S905X3)">Nie wymagana</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Wysyłka</td>
                  <td data-label="Raspberry Pi 4">~15zł</td>
                  <td data-label="Linux Box (S905X3)">
                    <strong>Gratis</strong>
                  </td>
                </tr>
                <tr>
                  <td data-label="Cecha">
                    <strong>Podsumowanie</strong>
                  </td>
                  <td data-label="Raspberry Pi 4">
                    <strong>~410zł</strong>
                  </td>
                  <td data-label="Linux Box (S905X3)">
                    <strong>199zł</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="applications" className="applications">
        <div className="container">
          <h2>Zastosowania</h2>
          <div className="hero-2">
            <div>
              <Image
                src="/ais_gate_dev3.png"
                alt="AIS Gate DEV 3"
                width={160}
                height={160}
                className="hero-image-side"
              />
            </div>
            <div className="connection-lines"></div>
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-button red"></span>
                  <span className="terminal-button yellow"></span>
                  <span className="terminal-button green"></span>
                </div>
                <div className="terminal-title">bash</div>
              </div>
              <div className="terminal-body">
                <p>
                  box:~# {typedCommand}
                  <span className="cursor"></span>
                </p>
              </div>
            </div>
            <div className="connection-lines"></div>
            <div className="browser">
              <div className="browser-header">
                <div className="browser-buttons">
                  <span className="browser-button red"></span>
                  <span className="browser-button yellow"></span>
                  <span className="browser-button green"></span>
                </div>
                <div className="browser-address-bar">http://box:8123</div>
              </div>
              <div className="browser-body">
                <div className="dashboard">
                  <h3>Asystent domowy</h3>
                  <div className="widget" id="clock"></div>
                  <div className="widget">Pogoda: 22°C ☀️</div>
                  <div className="widget">Oświetlenie tarasu: 💡</div>
                </div>
              </div>
            </div>
          </div>
          <div className="applications-grid">
            <div className="app-card">
              <span className="app-icon">🏠</span>
              <h3>Home Assistant</h3>
              <p>Automatyka domu</p>
              <a
                href="https://www.home-assistant.io/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">☁️</span>
              <h3>Nextcloud</h3>
              <p>Prywatna chmura</p>
              <a
                href="https://nextcloud.com/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🕳️</span>
              <h3>Pi-hole</h3>
              <p>Blokowanie reklam</p>
              <a
                href="https://pi-hole.net/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🐳</span>
              <h3>Portainer</h3>
              <p>Zarządzanie Dockerem</p>
              <a
                href="https://www.portainer.io/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">💻</span>
              <h3>VSCode</h3>
              <p>Narzędzia dla programistów</p>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🐳</span>
              <h3>Docker</h3>
              <p>Zarządzanie kontenerami</p>
              <a
                href="https://www.docker.com/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🐝</span>
              <h3>EMQX</h3>
              <p>MQTT broker</p>
              <a
                href="https://www.emqx.io/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🐝</span>
              <h3>Zigbee2mqtt</h3>
              <p>Zarządzanie urządzeniami Zigbee</p>
              <a
                href="https://www.zigbee2mqtt.io/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">✈️</span>
              <h3>Cockpit</h3>
              <p>Interfejs administracyjny</p>
              <a
                href="https://cockpit-project.org/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">📊</span>
              <h3>Btop</h3>
              <p>Monitorowanie wydajności</p>
              <a
                href="https://github.com/aristocratos/btop"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🛡️</span>
              <h3>Defguard</h3>
              <p>Ochrona przed atakami</p>
              <a
                href="https://defguard.net/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">📈</span>
              <h3>Uptime Kuma</h3>
              <p>Monitorowanie dostępności</p>
              <a
                href="https://uptime.kuma.pet/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🐘</span>
              <h3>PostgreSQL</h3>
              <p>Baza danych</p>
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🐘</span>
              <h3>pgAdmin</h3>
              <p>Zarządzanie bazą danych</p>
              <a
                href="https://www.pgadmin.org/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">👀</span>
              <h3>Glances</h3>
              <p>Monitorowanie wydajności</p>
              <a
                href="https://nicolargo.github.io/glances/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">📊</span>
              <h3>Grafana</h3>
              <p>Wizualizacja danych</p>
              <a
                href="https://grafana.com/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🟥</span>
              <h3>Node-RED</h3>
              <p>Low-code programowanie</p>
              <a
                href="https://nodered.org/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🏠</span>
              <h3>Domoticz</h3>
              <p>Automatyka domowa</p>
              <a
                href="https://www.domoticz.com/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🏠</span>
              <h3>OpenHAB</h3>
              <p>Automatyka domowa</p>
              <a
                href="https://www.openhab.org/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🏠</span>
              <h3>SUPLA</h3>
              <p>Automatyka domowa</p>
              <a href="https://supla.org/" target="_blank" className="app-link">
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card">
              <span className="app-icon">🎬</span>
              <h3>CoreELEC</h3>
              <p>Centrum multimedialne</p>
              <a
                href="https://coreelec.org/"
                target="_blank"
                className="app-link"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="app-card app-card-more">
              <span className="app-icon">✨</span>
              <h3>I wiele więcej...</h3>
              <p>Odkryj pełne możliwości Linux Box</p>
            </div>
          </div>
          <p>
            Więcej informacji w{" "}
            <a
              href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
              target="_blank"
            >
              dokumentacji
            </a>
            .
          </p>
        </div>
      </section>

      <section id="opensource" className="opensource">
        <div className="container">
          <h2 className="opensource-title">Open Source</h2>
          <p className="opensource-subtitle">
            <strong>System na Linux Box jest w pełni otwarty!</strong>
          </p>

          <div className="opensource-grid">
            <div className="opensource-card">
              <div className="opensource-icon">
                <Image
                  src="/Open_Source_Initiative.svg"
                  alt="Open Source"
                  width={80}
                  height={80}
                />
              </div>
              <h3>Wolny Dostęp</h3>
              <p>
                Pobierz i zainstaluj system na USB, karcie SD lub pamięci eMMC.
                Linux Box ma włączony multiboot - wystarczy podłączyć nośnik z
                systemem.
              </p>
            </div>

            <div className="opensource-card">
              <div className="opensource-icon">🐧</div>
              <h3>Ubuntu 25.04</h3>
              <p>
                Gotowy do użycia system z preinstalowanym oprogramowaniem. W
                pełni funkcjonalny i zoptymalizowany dla Linux Box.
              </p>
            </div>

            <div className="opensource-card">
              <div className="opensource-icon">⚙️</div>
              <h3>Pełna Kontrola</h3>
              <p>
                Modyfikuj, instaluj i dostosowuj do swoich potrzeb. Dostęp do
                konta root-a i pełna swoboda w instalacji programów i
                konfiguracji systemu.
              </p>
            </div>
          </div>

          <div className="opensource-actions">
            <a
              href="https://drive.google.com/file/d/1QR6u-WGWogbvLDciO9ELbaHB35zI3ucf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary opensource-btn"
            >
              <span className="btn-main">
                POBIERZ OBRAZ SYSTEMU
                <br />
                🐧 Ubuntu 25.04
              </span>
            </a>
          </div>

          <p className="opensource-docs">
            Instrukcje instalacji znajdziesz w{" "}
            <a
              href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
              target="_blank"
            >
              dokumentacji
            </a>
            .
          </p>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="seo-keywords">
            <p>
              SEO Keywords: Raspberry Pi, alternatywa dla Raspberry Pi, Home
              Assistant, serwer domowy, Ubuntu, Docker, Amlogic S905X3, Mini PC,
              CoreELEC, Batocera, Domoticz, SUPLA, OpenHAB, Pi-hole, Nextcloud,
              self-hosting, tani serwer, kompaktowy serwer, serwer
              multimedialny, konsola retro.
            </p>
          </div>
          <p>
            &copy; 2025 Linux Box.{" "}
            <a href="mailto:info@sviete.pl">info@sviete.pl</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
