"use client";

import { CheckCircle } from "lucide-react";
import { Footer } from "./footer";
import { NavbarWhite } from "./navbar-white";

export function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarWhite />

      {/* Hero Section */}
      <section id="hero" className="py-16 bg-gray-800 text-white text-center mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold">
            Soluções Perfeitas para seu Negócio
          </h1>
          <p className="mt-4 text-xl">
            Escolha o plano ideal e comece a transformar a gestão do seu estoque
            hoje mesmo.
          </p>
          <a
            href="#pricing"
            className="mt-6 inline-block bg-primary py-3 px-6 text-white rounded-md font-bold hover:bg-primary-dark transition"
          >
            Veja Nossos Planos
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">
            Por que escolher nossos planos?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Controle Total",
                description:
                  "Monitore seu inventário em tempo real com facilidade.",
                icon: "📊",
              },
              {
                title: "Suporte Prioritário",
                description:
                  "Nossa equipe está pronta para ajudar sempre que você precisar.",
                icon: "⚙️",
              },
              {
                title: "Relatórios Detalhados",
                description:
                  "Tenha insights claros sobre seu desempenho com relatórios personalizados.",
                icon: "📈",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 border border-gray-200 rounded-lg text-center"
              >
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-4 text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center">
            Planos de Preços
          </h2>
          <p className="mt-5 text-xl text-center text-gray-400">
            Escolha o plano perfeito para as necessidades do seu negócio
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Iniciante",
                price: "R$49",
                features: [
                  "Rastreamento de inventário em tempo real",
                  "Relatórios básicos",
                  "Até 1.000 SKUs",
                  "Suporte por e-mail",
                ],
              },
              {
                name: "Profissional",
                price: "R$99",
                features: [
                  "Todos os recursos do plano Iniciante",
                  "Relatórios avançados",
                  "Até 10.000 SKUs",
                  "Suporte por e-mail prioritário",
                  "Acesso à API",
                ],
              },
              {
                name: "Enterprise",
                price: "Personalizado",
                features: [
                  "Todos os recursos do plano Profissional",
                  "SKUs ilimitados",
                  "Suporte por telefone 24/7",
                  "Integrações personalizadas",
                  "Gerente de conta dedicado",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="bg-white border border-neutral-200 rounded-lg shadow-sm divide-y divide-gray-200"
              >
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {plan.name}
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">
                    {plan.name === "Enterprise"
                      ? "Soluções personalizadas para operações em grande escala"
                      : "Perfeito para negócios em crescimento"}
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.name !== "Enterprise" && (
                      <span className="text-base font-medium text-gray-500">
                        /mês
                      </span>
                    )}
                  </p>
                  <a
                    href="#"
                    className="mt-8 block w-full bg-neutral-900 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-dark transition"
                  >
                    {plan.name === "Enterprise"
                      ? "Contato com Vendas"
                      : "Começar"}
                  </a>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                    O que está incluído
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckCircle
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">
            Perguntas Frequentes
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                question: "Posso mudar de plano depois?",
                answer:
                  "Sim, você pode fazer um upgrade ou downgrade do seu plano a qualquer momento diretamente no painel de controle.",
              },
              {
                question: "Quais métodos de pagamento vocês aceitam?",
                answer:
                  "Aceitamos pagamentos via cartão de crédito, boleto bancário e transferência bancária.",
              },
              {
                question: "Tenho suporte durante a configuração?",
                answer:
                  "Sim, oferecemos suporte completo durante a configuração inicial do seu sistema.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-4 text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
