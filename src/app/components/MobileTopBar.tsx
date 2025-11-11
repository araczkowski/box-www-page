"use client";

export default function MobileTopBar() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      document.getElementById("mobile-top-menu")?.classList.add("hidden");
    }
  };

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-top-menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <>
      {/* Top Bar - widoczny zawsze na mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/80 border-gray-200 backdrop-blur-lg border-b">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-xl transition-colors text-black hover:text-blue-600"
          >
            🐧 Linux Box
          </button>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors text-black hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-top-menu"
          className="hidden bg-white/95 border-gray-200 backdrop-blur-lg border-t"
        >
          <div className="flex flex-col gap-3 p-4">
            <button
              onClick={() => scrollToSection("tech-specs")}
              className="text-left py-3 px-4 rounded-lg transition-colors font-medium text-gray-600 hover:bg-gray-100"
            >
              Specyfikacja
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-left py-3 px-4 rounded-lg transition-colors font-medium text-gray-600 hover:bg-gray-100"
            >
              Funkcje
            </button>
            <button
              onClick={() => scrollToSection("comparison")}
              className="text-left py-3 px-4 rounded-lg transition-colors font-medium text-gray-600 hover:bg-gray-100"
            >
              Porównanie
            </button>
            <button
              onClick={() => scrollToSection("opensource")}
              className="text-left py-3 px-4 rounded-lg transition-colors font-medium text-gray-600 hover:bg-gray-100"
            >
              Download
            </button>
            <a
              href="https://allegro.pl/uzytkownik/AI-Speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold text-center hover:shadow-lg transition-all duration-300"
            >
              🛒 Kup teraz
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
