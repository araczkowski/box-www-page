'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const [typedCommand, setTypedCommand] = useState('');
  const commandToType = 'doocker pull homeassistant/home-assistant';

  useEffect(() => {
    function updateClock() {
      const clockElement = document.getElementById('clock');
      if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `Godzina: ${hours}:${minutes}:${seconds}`;
      }
    }

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let clearingTimeout: NodeJS.Timeout;

    const typeCommand = () => {
      setTypedCommand('');
      charIndex = 0;
      typingTimeout = setInterval(() => {
        if (charIndex < commandToType.length) {
          setTypedCommand(prev => prev + commandToType.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typingTimeout);
          clearingTimeout = setTimeout(() => {
            setTypedCommand('');
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
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
      <header>
        <div className="container">
          <div>
            <h1>Linux🐧Box</h1>
            <h2>Twój domowy kompaktowy serwer</h2>
            <p>Wydajna alternatywa dla Raspberry Pi z wbudowanym dyskiem, ekranem LED, zasilaczem, kablem HDMI i najnowszym Ubuntu 25.04 (Plucky). Gotowy do działania! <a href="https://docs.google.com/document/d/1srCEdwxgLsXWYs3N94VMChzI6eTjtDUmplZxLtWGJ4I/edit?usp=sharing" target="_blank">Instrukcja użytkownika Linux Box          </a></p>
            <label className="theme-switch">
              <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
              <span className="slider round"></span>
            </label>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-4em'}}>
          <Image
            src="/ais_gate_dev3_1.png"
            alt="AIS Gate DEV 3"
            width={300}
            height={290}
          />
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <h2 style={{paddingBottom: '1em'}}>🚀 4 GB RAM | 128 GB eMMC | Ubuntu</h2>
            <div className="hero-text">
            <a href="mailto:andrzej@sviete.pl?subject=Zakup%20Linux%20Box&body=chc%C4%99%20kupi%C4%87%20linux%20box%2C%20" className="btn">
              🛒 Kup przez e-mail<br />Za jedyne: 199zł<br /><span style={{fontSize: '10px'}}>(dostawa do paczkomatu gratis)</span>
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
              <p>Ubuntu 25.04 (Plucky) – gotowy do działania.</p>
            </div>
            <div className="feature">
              <h3>Wyświetlacz 🖵</h3>
              <p>Pokazuje czas, temperaturę, IP i więcej.</p>
            </div>
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
                  box:~# {typedCommand}<span className="cursor"></span>
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
                <div className="browser-address-bar">http://localhost:8123</div>
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
            <li>Home Assistant – automatyka domu</li>
            <li>Nextcloud – prywatna chmura</li>
            <li>Pi-hole – blokowanie reklam</li>
            <li>Portainer – zarządzanie Dockerem</li>
            <li>VSCode – narzędzia dla programistów</li>
            <li>Docker - zarządzanie kontenerami</li>
            <li>EMQX - mqtt broker</li>
            <li>Zigbee2mqtt - zarządzanie urządzeniami Zigbee</li>
            <li>Cockpit - interfejs administracyjny</li>
            <li>Btop - monitorowanie wydajności</li>
            <li>Defguard - ochrona przed atakami</li>
            <li>Uptime Kuma - monitorowanie dostępności</li>
            <li>Postgres DB server - baza danych</li>
            <li>pgAdmin - zarządzanie bazą danych</li>
            <li>Glances - monitorowanie wydajności</li>
            <li>Grafana - wizualizacja danych.</li>
            <li>Node-red - Low-code programowanie</li>
            <li>Domoticz - automatyka domowa</li>
            <li>OpenHub - automatyka domowa</li>
            <li> I wiele więcej...</li>
          </ul>
          <p>
            Więcej informacji w{
              ' '
            }
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
          <p>&copy; 2025 Linux Box.</p>
        </div>
      </footer>
    </div>
  );
}