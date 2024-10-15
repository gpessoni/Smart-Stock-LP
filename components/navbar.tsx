"use client";

import { Menu, Package, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Remove as aspas simples do evento 'scroll'
    window.addEventListener("scroll", handleScroll);

    // Limpeza do listener de evento ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              {scrolled ? (
                <Package className="h-8 w-8 text-neutral-900 dark:text-neutral-50" />
              ) : (
                <Package className="h-8 w-8 text-white" />
              )}
              <span
                className={`ml-2 text-lg font-semibold ${
                  scrolled
                    ? "text-neutral-900 dark:text-neutral-50"
                    : "text-white"
                }`}
              >
                SmartStock
              </span>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Início
                </a>
                <a
                  href="#como-funciona"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Como Funciona
                </a>
                <a
                  href="#pricing"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Preços
                </a>
                <a
                  href="#blog"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled
                  ? "text-gray-800 hover:text-neutral-900 hover:bg-gray-100 dark:hover:text-neutral-50"
                  : "text-white hover:text-gray-300 hover:bg-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
            >
              Início
            </a>
            <a
              href="#como-funciona"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
            >
              Como Funciona
            </a>
            <a
              href="#precos"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
            >
              Preços
            </a>
            <a
              href="#blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
