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
          <div>
            <h1>Linux🐧Box</h1>
            <h2>Twój domowy kompaktowy serwer</h2>
            <label className="theme-switch">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <div className="header-image-container">
              <Image
                src="/ais_gate_dev3_1.png"
                alt="AIS Gate DEV 3"
                width={300}
                height={290}
              />
            </div>
            <p>
              Gotowy do działania zestaw mini-komputera!{" "}
              <a href="#comparison">Lepsza i tańsza</a> alternatywa dla
              Raspberry Pi — z wbudowany szybkim dyskiem eMMC 128 GB, LED-owym
              wyświetlaczem, zasilaczem, kablem HDMI i najnowszym Ubuntu 25.04.
              Wystarczy podłączyć i działać!{" "}
              <a
                href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing"
                target="_blank"
              >
                Dołączona instrukcja Linux Box.
              </a>{" "}
              System na bramce (Ubuntu) jest w pełni otwarty, możesz{" "}
              <a href="#opensource"> go pobrać tu. </a>
            </p>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <h2 style={{ paddingBottom: "1em" }}>
              🚀 4 GB RAM | 128 GB eMMC | Ubuntu
            </h2>
            <div className="hero-text">
              <a
                href="mailto:info@sviete.pl?subject=Zakup%20Linux%20Box&body=chc%C4%99%20kupi%C4%87%20linux%20box%2C%20"
                className="btn"
              >
                Kup przez e-mail ✉️
                <br />
                Za jedyne: 199zł
                <br />
                <span style={{ fontSize: "10px" }}>
                  (dostawa do paczkomatu gratis)
                </span>
              </a>
              <h2> Wifi 5GHz | Eternet 1GB | USB 3.0 | HDMI 2.0A </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Dlaczego Linux Box?</h2>
          <div className="feature-grid">
            <div className="feature">
              <h3>Wydajność 🚀</h3>
              <p>Procesor Amlogic S905X3 i 4 GB RAM zapewniają płynną pracę.</p>
            </div>
            <div className="feature">
              <h3>Pamięć/Dysk 💾</h3>
              <p>128 GB eMMC + rozszerzalność przez microSD i/lub USB.</p>
            </div>
            <div className="feature">
              <h3>System 🐧</h3>
              <p>
                Ubuntu 25.04 (Plucky) z najnowszym jądrem linux 6.12.41 – gotowy
                do działania.
              </p>
            </div>
            <div className="feature">
              <h3>Wyświetlacz 🖵</h3>
              <p>Pokazuje czas, temperaturę, IP i więcej.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="features">
        <div className="container">
          <h2>Porównanie</h2>
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
                  <td data-label="Raspberry Pi 4">-</td>
                  <td data-label="Linux Box (S905X3)">128GB eMMC</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Ethernet</td>
                  <td data-label="Raspberry Pi 4">Gigabit</td>
                  <td data-label="Linux Box (S905X3)">Gigabit</td>
                </tr>
                <tr>
                  <td data-label="Cecha">Wyświetlacz LED</td>
                  <td data-label="Raspberry Pi 4">Brak</td>
                  <td data-label="Linux Box (S905X3)">Tak</td>
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

      <section className="applications">
        <div className="container">
          <h2>Zastosowania</h2>
          <div className="hero-content">
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
          <ul>
            <li>
              🏠{" "}
              <a href="https://www.home-assistant.io/" target="_blank">
                Home Assistant
              </a>{" "}
              – automatyka domu
            </li>
            <li>
              ☁️{" "}
              <a href="https://nextcloud.com/" target="_blank">
                Nextcloud
              </a>{" "}
              – prywatna chmura
            </li>
            <li>
              🕳️{" "}
              <a href="https://pi-hole.net/" target="_blank">
                Pi-hole
              </a>{" "}
              – blokowanie reklam
            </li>
            <li>
              🐳{" "}
              <a href="https://www.portainer.io/" target="_blank">
                Portainer
              </a>{" "}
              – zarządzanie Dockerem
            </li>
            <li>
              💻{" "}
              <a href="https://code.visualstudio.com/" target="_blank">
                VSCode
              </a>{" "}
              – narzędzia dla programistów
            </li>
            <li>
              🐳{" "}
              <a href="https://www.docker.com/" target="_blank">
                Docker
              </a>{" "}
              - zarządzanie kontenerami
            </li>
            <li>
              🐝{" "}
              <a href="https://www.emqx.io/" target="_blank">
                EMQX
              </a>{" "}
              - mqtt broker
            </li>
            <li>
              🐝{" "}
              <a href="https://www.zigbee2mqtt.io/" target="_blank">
                Zigbee2mqtt
              </a>{" "}
              - zarządzanie urządzeniami Zigbee
            </li>
            <li>
              ✈️{" "}
              <a href="https://cockpit-project.org/" target="_blank">
                Cockpit
              </a>{" "}
              - interfejs administracyjny
            </li>
            <li>
              📊{" "}
              <a href="https://github.com/aristocratos/btop" target="_blank">
                Btop
              </a>{" "}
              - monitorowanie wydajności
            </li>
            <li>
              🛡️{" "}
              <a href="https://defguard.net/" target="_blank">
                Defguard
              </a>{" "}
              - ochrona przed atakami
            </li>
            <li>
              📈{" "}
              <a href="https://uptime.kuma.pet/" target="_blank">
                Uptime Kuma
              </a>{" "}
              - monitorowanie dostępności
            </li>
            <li>
              🐘{" "}
              <a href="https://www.postgresql.org/" target="_blank">
                Postgres DB server
              </a>{" "}
              - baza danych
            </li>
            <li>
              🐘{" "}
              <a href="https://www.pgadmin.org/" target="_blank">
                pgAdmin
              </a>{" "}
              - zarządzanie bazą danych
            </li>
            <li>
              👀{" "}
              <a href="https://nicolargo.github.io/glances/" target="_blank">
                Glances
              </a>{" "}
              - monitorowanie wydajności
            </li>
            <li>
              📊{" "}
              <a href="https://grafana.com/" target="_blank">
                Grafana
              </a>{" "}
              - wizualizacja danych.
            </li>
            <li>
              🟥{" "}
              <a href="https://nodered.org/" target="_blank">
                Node-red
              </a>{" "}
              - Low-code programowanie
            </li>
            <li>
              🏠{" "}
              <a href="https://www.domoticz.com/" target="_blank">
                Domoticz
              </a>{" "}
              - automatyka domowa
            </li>
            <li>
              🏠{" "}
              <a href="https://www.openhab.org/" target="_blank">
                OpenHAB
              </a>{" "}
              - automatyka domowa
            </li>
            <li>
              🏠{" "}
              <a href="https://supla.org/" target="_blank">
                SUPLA
              </a>{" "}
              - automatyka domowa
            </li>
            <li> I wiele więcej...</li>
          </ul>
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
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 500,
              width: "100%",
            }}
          >
            <h2>Open Source</h2>
            <p>
              <strong>System na Linux Box jest w pełni otwarty!</strong>
            </p>
            <Image
              src="/Open_Source_Initiative.svg"
              alt="Open Source"
              width={120}
              height={120}
              style={{ margin: "1em 0" }}
            />
            <p>
              Możesz pobrać i samodzielnie zainstalować system na USB, karcie SD
              lub pamięci eMMC na swoim urządzeniu. Linux Box ma włączony
              multiboot - jeśli dodasz USB lub kartę SD z system to box
              wystartuje z pamięci zewnętrznej.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2em 0",
              }}
            >
              <a
                href="https://drive.google.com/file/d/1QR6u-WGWogbvLDciO9ELbaHB35zI3ucf/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: "1.2em", padding: "1em 2.5em" }}
              >
                POBIERZ OBRAZ SYSTEMU 🐧
              </a>
            </div>
            <p style={{ marginTop: "1em", fontSize: "0.95em" }}>
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
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            &copy; 2025 Linux Box.{" "}
            <a href="mailto:info@sviete.pl">info@sviete.pl</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
