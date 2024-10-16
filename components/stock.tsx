"use client";

import { PackageCheck, ClipboardList, BarChart2 } from "lucide-react";
import { Footer } from "./footer";
import { NavbarWhite } from "./navbar-white";

export function StockManagementPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <NavbarWhite />

      {/* Header Section */}
      <section id="header" className="py-16 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Gestão de Estoque
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Controle completo do seu estoque, garantindo disponibilidade e
            eficiência na gestão dos produtos.
          </p>
        </div>
      </section>

      {/* Stock Control Section */}
      <section id="stock-control" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Controle Total do Estoque
          </h2>
          <p className="mt-5 text-lg text-gray-500 text-center">
            Com nossa solução de gestão de estoque, você tem controle em tempo
            real sobre entradas, saídas e níveis de produtos.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Monitoramento em Tempo Real",
                description:
                  "Acompanhe o nível de estoque em tempo real, evitando rupturas ou excessos.",
              },
              {
                title: "Alertas de Reposição",
                description:
                  "Receba notificações automáticas quando o estoque atingir níveis mínimos.",
              },
              {
                title: "Controle de Lote e Validade",
                description:
                  "Gerencie produtos por lote e validade, garantindo rotatividade adequada.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <PackageCheck className="w-10 h-10 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Reports Section */}
      <section id="stock-reports" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Relatórios de Estoque
          </h2>
          <p className="mt-5 text-lg text-gray-500 text-center">
            Gere relatórios completos para análise dos níveis de estoque,
            movimentações e desempenho do controle.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Relatórios de Movimentação",
                description:
                  "Acompanhe todas as entradas e saídas do estoque em relatórios detalhados.",
              },
              {
                title: "Análise de Desempenho",
                description:
                  "Identifique produtos com alta e baixa rotatividade, otimizando a gestão.",
              },
              {
                title: "Personalização de Relatórios",
                description:
                  "Crie relatórios personalizados com os dados mais importantes para sua operação.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              >
                <ClipboardList className="w-10 h-10 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Optimization Section */}
      <section id="stock-optimization" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Otimização de Estoque
          </h2>
          <p className="mt-5 text-lg text-gray-500 text-center">
            Utilize ferramentas avançadas para otimizar o controle de estoque,
            melhorando a eficiência e reduzindo custos operacionais.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gestão de Espaço",
                description:
                  "Aproveite ao máximo seu espaço de armazenamento com layouts otimizados.",
              },
              {
                title: "Redução de Custos",
                description:
                  "Controle seu estoque de forma inteligente, evitando desperdícios e minimizando custos.",
              },
              {
                title: "Análise de Demanda",
                description:
                  "Preveja a demanda futura e ajuste o nível de estoque para atender às necessidades do mercado.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <BarChart2 className="w-10 h-10 text-blue-600 mx-auto" />
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
            A gestão eficiente de estoque pode gerar economias de até 20%,
            otimizando a operação e reduzindo desperdícios.
          </p>
          <p className="mt-5 text-lg text-gray-500 text-center">
            Controle preciso de entradas, saídas e produtos estocados ajuda a
            evitar perdas e reduz a necessidade de compras emergenciais.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Pronto para otimizar sua gestão de estoque?
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Fale com nossos especialistas e descubra como nossa solução pode
            transformar a eficiência do seu estoque.
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
