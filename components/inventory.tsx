"use client";

import { CheckCircle, ClipboardCheck } from "lucide-react";
import { Footer } from "./footer";
import { NavbarWhite } from "./navbar-white";

export function InventoryTransfersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <NavbarWhite />

      {/* Header Section */}
      <section id="header" className="py-16 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Inventários e Transferências
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Gerencie seus inventários e transfira produtos entre locais de forma
            eficiente e simplificada
          </p>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Gestão de Inventários
          </h2>
          <p className="mt-5 text-lg text-gray-500 text-center">
            O módulo de inventários permite o controle detalhado do seu estoque,
            garantindo precisão nas contagens e evitando rupturas ou excessos.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inventários Automatizados",
                description:
                  "Automatize processos de contagem, economizando tempo e reduzindo erros.",
              },
              {
                title: "Visão em Tempo Real",
                description:
                  "Acompanhe as atualizações de inventário em tempo real, com dados sempre acessíveis.",
              },
              {
                title: "Relatórios Personalizados",
                description:
                  "Gere relatórios detalhados para análise completa do estoque.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <ClipboardCheck className="w-10 h-10 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfers Section */}
      <section id="transfers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Gestão de Transferências
          </h2>
          <p className="mt-5 text-lg text-gray-500 text-center">
            Facilite a movimentação de produtos entre diferentes locais de
            armazenamento com total controle e rastreamento.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transferências Rápidas",
                description:
                  "Transfira produtos entre armazéns de maneira simples e eficiente.",
              },
              {
                title: "Rastreamento Completo",
                description:
                  "Acompanhe cada transferência com histórico detalhado de movimentações.",
              },
              {
                title: "Integração com Inventários",
                description:
                  "Atualize automaticamente os saldos dos inventários com cada transferência realizada.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              >
                <ClipboardCheck className="w-10 h-10 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Benefícios da Gestão Integrada
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Precisão nas Operações",
                description:
                  "A gestão integrada garante maior precisão tanto nas contagens de inventário quanto nas transferências.",
              },
              {
                title: "Redução de Erros",
                description:
                  "Com os processos automatizados, erros manuais são minimizados, aumentando a confiabilidade do sistema.",
              },
              {
                title: "Otimização de Estoque",
                description:
                  "Evite a falta ou excesso de produtos com uma visão clara e organizada do estoque.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <CheckCircle className="w-10 h-10 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Impact Section */}
      <section id="financial-impact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Impacto Financeiro
          </h2>
          <p className="mt-5 text-lg text-gray-500 text-center">
            Com a gestão de inventários e transferências integradas, sua empresa
            poderá economizar até 15% em custos operacionais, com menor risco de
            perdas e melhor gestão de recursos.
          </p>
          <p className="mt-5 text-lg text-gray-500 text-center">
            O controle eficiente de movimentações e estoques reduz a necessidade
            de compras emergenciais e evita desperdícios.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Pronto para transformar a gestão do seu estoque?
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Entre em contato conosco e descubra como podemos otimizar seus
            processos de inventário e transferências.
          </p>
          <a
            href="#"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Fale com um Especialista
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
