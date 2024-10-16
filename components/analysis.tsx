"use client";

import { CheckCircle } from "lucide-react";
import { Footer } from "./footer";
import { NavbarWhite } from "./navbar-white";

export function AnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <NavbarWhite />

      {/* Header Section */}
      <section id="header" className="py-16 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Análises de Desempenho
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Explore como nosso sistema pode revolucionar a gestão da sua empresa
          </p>
        </div>
      </section>

      {/* Utilization Analysis */}
      <section id="utilization" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Análise de Utilização do Sistema
          </h2>
          <p className="mt-5 text-lg text-gray-500 text-center">
            Nossa plataforma demonstrou alta eficiência, com uma redução de até
            30% no tempo de operações diárias em comparação com sistemas manuais
            ou antiquados.
          </p>
          <p className="mt-5 text-lg text-gray-500 text-center">
            O acompanhamento contínuo da utilização garante um fluxo de trabalho
            otimizado, mantendo seu estoque e operações sob controle.
          </p>
        </div>
      </section>

      {/* ERP Comparison Section */}
      <section id="erp-comparison" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Comparação com Outros ERPs
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Implementação Rápida",
                description:
                  "Implementação até 50% mais rápida comparada a sistemas ERP tradicionais.",
              },
              {
                title: "Custo de Manutenção",
                description:
                  "Custo reduzido de manutenção, sem taxas ocultas ou surpresas.",
              },
              {
                title: "Interface Intuitiva",
                description:
                  "Design moderno e fácil de usar para maximizar a eficiência da equipe.",
              },
              {
                title: "Suporte Técnico",
                description:
                  "Suporte 24/7 disponível para resolver problemas em tempo real.",
              },
              {
                title: "Flexibilidade",
                description:
                  "Flexibilidade para customizações específicas sem custos adicionais.",
              },
              {
                title: "Integrações",
                description:
                  "Integração completa com APIs e outras soluções corporativas.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              >
                <CheckCircle className="w-10 h-10 text-blue-600 mx-auto" />
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
            Benefícios para sua Empresa
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automatização Completa",
                description:
                  "Automatize totalmente o gerenciamento de estoque, economizando tempo e recursos.",
              },
              {
                title: "Redução de Erros",
                description:
                  "Reduza erros manuais em até 40%, garantindo precisão nas operações.",
              },
              {
                title: "Relatórios Personalizados",
                description:
                  "Crie relatórios sob medida para insights precisos e decisões rápidas.",
              },
              {
                title: "Controle de Fluxo",
                description:
                  "Melhor controle sobre o fluxo de materiais para minimizar desperdícios.",
              },
              {
                title: "Otimização de Recursos",
                description:
                  "Use o espaço e os recursos de forma mais eficiente com nossa solução.",
              },
              {
                title: "ROI Rápido",
                description:
                  "Recupere seu investimento em menos de 12 meses com ganhos operacionais significativos.",
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
            Empresas que adotaram nossa solução relataram economias de até 20%
            nos custos operacionais no primeiro ano.
          </p>
          <p className="mt-5 text-lg text-gray-500 text-center">
            O retorno sobre o investimento (ROI) foi obtido em menos de 12
            meses, com impacto positivo na produtividade e na redução de custos
            com manutenção e suporte.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Pronto para melhorar a eficiência da sua empresa?
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Fale conosco e veja como nossa solução pode atender às necessidades
            específicas da sua empresa.
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
