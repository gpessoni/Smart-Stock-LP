"use client";

import {
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Package,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function Main() {
  const [selectedBlogPost, setSelectedBlogPost] = useState(null as any);

  const blogPosts = [
    {
      title: "Como Fazer uma Contagem Acurada de Estoque",
      excerpt: `
        <p>Realizar uma contagem acurada de estoque é fundamental para a saúde financeira de qualquer negócio. A contagem precisa garante que as informações sobre os níveis de estoque sejam confiáveis, ajudando a evitar excessos ou faltas de produtos. Aqui estão algumas dicas para garantir uma contagem eficiente:</p>
        <ul>
          <li><strong>Planejamento:</strong> Defina datas e horários estratégicos para a contagem. Escolha períodos de baixa atividade para minimizar as interrupções nas operações normais.</li>
          <li><strong>Organização do Estoque:</strong> Antes da contagem, organize o estoque. Certifique-se de que todos os itens estão claramente identificados e acessíveis. Um ambiente limpo e bem-arrumado facilita a contagem e a identificação de discrepâncias.</li>
          <li><strong>Treinamento da Equipe:</strong> Treine sua equipe sobre os métodos de contagem e a importância da precisão. Forneça orientações claras e crie um manual de procedimentos que todos possam consultar durante a contagem.</li>
          <li><strong>Uso de Tecnologia:</strong> Utilize ferramentas de gestão de estoque e sistemas de código de barras para facilitar o processo de contagem. A tecnologia pode ajudar a registrar os dados em tempo real e reduzir erros humanos.</li>
          <li><strong>Verificação Cruzada:</strong> Após a contagem, faça uma verificação cruzada dos dados. Compare os resultados da contagem física com os registros do sistema para identificar discrepâncias e investigar suas causas.</li>
        </ul>
        <p>Seguir essas práticas ajudará a garantir que sua contagem de estoque seja precisa e eficiente, resultando em uma gestão de estoques mais saudável e sustentável.</p>
      `,
      summary:
        "Dicas para realizar uma contagem precisa de estoque, incluindo planejamento, organização e uso de tecnologia.",
      image:
        "https://img.freepik.com/fotos-gratis/trabalhador-do-armazem-em-pe-no-grande-centro-de-armazenamento-e-mostrando-um-gesto-de-ok-com-a-mao-satisfeito-ao-entregar-as-mercadorias_342744-1526.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid-rr-similar",
    },
    {
      title: "Estratégias para Otimização do Armazenamento",
      excerpt: `
        <p>A otimização do espaço de armazenamento é crucial para melhorar a eficiência operacional de qualquer armazém. Um espaço de armazenamento bem organizado não só economiza tempo, mas também pode reduzir custos operacionais. Aqui estão algumas estratégias eficazes:</p>
        <ul>
          <li><strong>Utilização Vertical:</strong> Aproveite ao máximo a altura do armazém. Instale prateleiras mais altas e utilize equipamentos de elevação, como empilhadeiras, para acessar itens localizados em áreas elevadas. Isso maximiza o espaço vertical e aumenta a capacidade de armazenamento.</li>
          <li><strong>Layout Eficiente:</strong> Organize o layout do armazém de forma que as áreas de recebimento, armazenamento e expedição estejam próximas umas das outras. Isso minimiza o tempo de deslocamento e melhora a eficiência na movimentação dos produtos.</li>
          <li><strong>Classificação dos Itens:</strong> Classifique os produtos com base na demanda e na frequência de movimentação. Itens de alta rotatividade devem ser armazenados em locais de fácil acesso, enquanto produtos com baixa demanda podem ser armazenados em áreas mais distantes.</li>
          <li><strong>Implementação de Sistemas de Gestão:</strong> Adote sistemas de gestão de armazém (WMS) para monitorar o fluxo de inventário em tempo real. Esses sistemas ajudam a identificar quais produtos estão em excesso ou escassos, permitindo ajustes rápidos nas estratégias de armazenamento.</li>
          <li><strong>Treinamento Contínuo da Equipe:</strong> Proporcione treinamentos regulares para sua equipe sobre práticas de armazenamento, segurança e uso de tecnologia. Uma equipe bem treinada é essencial para manter a organização e a eficiência no armazém.</li>
        </ul>
        <p>Essas estratégias não apenas ajudam a maximizar o uso do espaço, mas também aumentam a eficiência do manuseio dos produtos, resultando em um armazém mais produtivo e organizado.</p>
      `,
      summary:
        "Estratégias eficazes para otimizar o armazenamento, incluindo utilização vertical e classificação de itens de forma inteligente.",

      image:
        "https://img.freepik.com/fotos-gratis/trabalhador-do-armazem-em-pe-no-grande-centro-de-armazenamento-e-mostrando-um-gesto-de-ok-com-a-mao-satisfeito-ao-entregar-as-mercadorias_342744-1526.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid-rr-similar",
    },
    {
      title: "Como a Automação Pode Transformar seu Armazém",
      excerpt: `
        <p>A automação está revolucionando o setor de logística e gerenciamento de estoques. Com o avanço da tecnologia, empresas estão adotando soluções automatizadas para melhorar a eficiência e reduzir custos. Aqui estão algumas maneiras pelas quais a automação pode transformar seu armazém:</p>
        <ul>
          <li><strong>Redução de Erros:</strong> Sistemas automatizados minimizam erros humanos durante o processo de armazenamento e retirada. Com tecnologias como scanners de código de barras e RFID, os dados são capturados com precisão, garantindo que os produtos certos sejam enviados aos clientes.</li>
          <li><strong>Aumento da Velocidade:</strong> A automação acelera o processo de picking e packing. Robôs e sistemas de transporte automatizados podem mover produtos rapidamente pelo armazém, reduzindo o tempo necessário para atender pedidos e melhorando a eficiência operacional.</li>
          <li><strong>Visibilidade em Tempo Real:</strong> A automação fornece visibilidade em tempo real do inventário. Isso permite que os gerentes tomem decisões informadas sobre reabastecimento e gestão de estoques, evitando excessos ou escassez de produtos.</li>
          <li><strong>Redução de Custos Operacionais:</strong> Embora a implementação de tecnologia automatizada exija um investimento inicial, a longo prazo, ela pode resultar em economias significativas. Menos erros, maior eficiência e uma equipe mais produtiva levam a custos operacionais reduzidos.</li>
          <li><strong>Escalabilidade:</strong> Sistemas automatizados podem ser facilmente escalados para atender a um aumento na demanda. Quando os volumes de pedidos crescem, a automação permite que as empresas respondam rapidamente, sem a necessidade de aumentar proporcionalmente o número de funcionários.</li>
        </ul>
        <p>Investir em automação não é apenas uma tendência, mas uma necessidade para empresas que desejam se manter competitivas no mercado atual. A transformação digital é o caminho para um gerenciamento de estoques mais eficiente e ágil.</p>
      `,
      summary:
        "Como a automação melhora a eficiência do armazém, reduzindo erros e aumentando a velocidade.",
      image:
        "https://img.freepik.com/fotos-gratis/trabalhador-do-armazem-em-pe-no-grande-centro-de-armazenamento-e-mostrando-um-gesto-de-ok-com-a-mao-satisfeito-ao-entregar-as-mercadorias_342744-1526.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid-rr-similar",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <section className="relative bg-gray-900 h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://img.freepik.com/fotos-gratis/vista-de-perto-do-armazem_23-2148923139.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid-rr-similar"
            alt="Armazém"
            className="w-full h-full object-center object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            SmartStock
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Revolucione o gerenciamento do seu estoque com rastreamento em tempo
            real, integrações perfeitas e análises poderosas.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start">
            <a
              href="#"
              className="px-8 py-3 border border-neutral-200 border-transparent text-base font-medium rounded-md text-white bg-neutral-900 hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-50"
            >
              Começar Agora
            </a>
            <a
              href="#como-funciona"
              className="ml-4 px-8 py-3 border border-neutral-200 border-transparent text-base font-medium rounded-md text-neutral-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl dark:border-neutral-800 dark:text-neutral-50"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-neutral-900 font-semibold tracking-wide uppercase dark:text-neutral-50">
              Como Funciona
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Agilize o Gerenciamento do Seu Estoque
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              O SmartStock oferece uma solução abrangente para controle e
              gerenciamento de estoque eficientes.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-white dark:bg-neutral-50">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 00-9-9m9 9H3m9 9a9 01-9-9m9 9c1.657 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 019-9"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Rastreamento em Tempo Real
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Monitore seus níveis de estoque em várias localizações em
                  tempo real, garantindo que você tenha sempre uma visão precisa
                  do seu estoque.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-white dark:bg-neutral-50">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 0M18 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Integração Inteligente
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Integre-se perfeitamente a dispositivos inteligentes como
                  Arduino para controle automatizado de ambientes de armazém e
                  gerenciamento de estoque.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-white dark:bg-neutral-50">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Gerenciamento Eficiente de Pedidos
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Crie e rastreie solicitações de estoque com facilidade,
                  garantindo que o estoque seja gerenciado de forma eficiente e
                  os pedidos sejam atendidos prontamente.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-white dark:bg-neutral-50">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 012-2h5.586a1 1 01.707.293l5.414 5.414a1 01.293.707V19a2 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Relatórios Abrangentes
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Gere relatórios detalhados sobre níveis de estoque,
                  movimentações de estoque e processamento de pedidos para tomar
                  decisões empresariais informadas.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-white sm:text-center">
              Planos de Preços
            </h1>
            <p className="mt-5 text-xl text-gray-400 sm:text-center">
              Escolha o plano perfeito para as necessidades do seu negócio
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
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
                className="bg-white border border-neutral-200 border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 dark:border-neutral-800"
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
                    className="mt-8 block w-full bg-neutral-900 border border-neutral-200 border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-dark transition duration-150 ease-in-out transform hover:scale-105 dark:bg-neutral-50 dark:border-neutral-800"
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

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Últimas do Nosso Blog
          </h2>

          <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedBlogPost(post)}
              >
                <div className="relative pb-2/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">{post.summary}</p>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-base font-semibold text-neutral-900 hover:text-primary-dark dark:text-neutral-50"
                  >
                    Ler Artigo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Blog Post Modal */}
      {selectedBlogPost && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {selectedBlogPost.title}
                    </h3>
                    <div className="mt-2">
                      <img
                        src={selectedBlogPost.image}
                        alt={selectedBlogPost.title}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <div
                        className="text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: selectedBlogPost.excerpt,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-neutral-200 border-transparent shadow-sm px-4 py-2 bg-neutral-900 text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 sm:ml-3 sm:w-auto sm:text-sm dark:border-neutral-800 dark:bg-neutral-50 dark:focus:ring-neutral-50"
                  onClick={() => setSelectedBlogPost(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
