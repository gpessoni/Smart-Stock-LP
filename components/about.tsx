"use client";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://img.freepik.com/fotos-gratis/jovem-que-trabalha-em-um-armazem-com-caixas_1303-16647.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid-rr-similar"
            alt="Company Overview"
            className="w-full h-full object-center object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sobre a Empresa
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Na SmartStock, somos dedicados a transformar a gestão de inventário,
            oferecendo soluções inovadoras que garantem eficiência e
            visibilidade em tempo real.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 border border-neutral-200 border-transparent text-base font-medium rounded-md text-white bg-neutral-900 hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-50"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section id="company-history" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-neutral-900 font-semibold tracking-wide uppercase dark:text-neutral-50">
              Nossa História
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              De uma Necessidade ao Sucesso
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A SmartStock nasceu da observação atenta dos desafios enfrentados
              por pequenas e médias empresas na gestão de estoques. Com um time
              apaixonado por tecnologia e inovação, decidimos criar uma solução
              que unisse simplicidade e eficiência.
            </p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Em nossa jornada, conversamos com diversos empresários que
              relataram dificuldades em gerenciar seus estoques devido a
              sistemas complexos e caros. A partir dessas conversas,
              identificamos uma lacuna no mercado: a necessidade de uma
              plataforma acessível, intuitiva e que realmente atenda às
              necessidades do dia a dia das empresas.
            </p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Com esse insight, começamos o desenvolvimento do SmartStock, uma
              plataforma projetada para ser fácil de usar e que proporciona
              controle eficiente sobre o estoque. Desde nosso lançamento, temos
              trabalhado constantemente para aprimorar nossas funcionalidades e
              atender cada vez melhor nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-neutral-900 font-semibold tracking-wide uppercase dark:text-neutral-50">
              Nossa Missão
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transformar a Gestão de Inventário
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Nossa missão é fornecer soluções de gestão de inventário que
              aumentem a eficiência, reduzam custos e ofereçam visibilidade em
              tempo real.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Inovação
                </h3>
                <p className="mt-2 text-gray-600">
                  Investimos em tecnologia de ponta para garantir que nossos
                  clientes tenham acesso às melhores ferramentas de gestão de
                  inventário.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Compromisso
                </h3>
                <p className="mt-2 text-gray-600">
                  Estamos comprometidos em oferecer suporte contínuo e soluções
                  personalizadas para atender às necessidades de cada cliente.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Transparência
                </h3>
                <p className="mt-2 text-gray-600">
                  Acreditamos na transparência em nossos processos, garantindo
                  que nossos clientes estejam sempre informados.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Resultados
                </h3>
                <p className="mt-2 text-gray-600">
                  Nossa principal prioridade é a satisfação do cliente e a
                  obtenção de resultados tangíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
