"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Soluções
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="stock"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Gestão de Estoque
                    </a>
                  </li>
                  <li>
                    <a
                      href="inventarios"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Inventários e Transfêrencias
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Suporte
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="/preco"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Preços
                    </a>
                  </li>
                  <li>
                    <a
                      href="analises"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Análises
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Empresa
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="sobre"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="blog"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="privacidade"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Privacidade
                    </a>
                  </li>
                  <li>
                    <a
                      href="termos"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Termos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Assine nosso boletim informativo
            </h3>
            <p className="mt-4 text-base text-gray-300">
              As últimas notícias, artigos e recursos, enviados para sua caixa
              de entrada semanalmente.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-neutral-200 border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 dark:border-neutral-800"
                placeholder="Digite seu e-mail"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-neutral-900 border border-neutral-200 border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-neutral-900 dark:bg-neutral-50 dark:border-neutral-800 dark:focus:ring-neutral-50"
                >
                  Assinar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2024 SmartStock, Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
