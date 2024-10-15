"use client";

import { Footer } from "./footer";
import { NavbarWhite } from "./navbar-white";

export function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarWhite />

      {/* Terms of Use Section */}
      <section id="terms-of-use" className="py-16 bg-gray-50 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-neutral-900 font-semibold tracking-wide uppercase dark:text-neutral-50">
              Termos de Uso
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Aceitação e Compromisso
            </p>
          </div>
          <div className="mt-10 max-w-2xl lg:mx-auto">
            <p className="mt-4 text-xl text-gray-500">
              Ao acessar e utilizar o sistema de estoque SmartStock, você concorda com os seguintes termos de uso. Se você não concorda com algum dos termos, não utilize nosso sistema.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Uso do Sistema
            </h3>
            <p className="mt-2 text-gray-600">
              O sistema SmartStock é fornecido para gerenciar e controlar o estoque de forma eficiente. Você se compromete a utilizar o sistema apenas para fins legais e conforme as diretrizes estabelecidas.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Responsabilidade do Usuário
            </h3>
            <p className="mt-2 text-gray-600">
              Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta. Notifique-nos imediatamente se suspeitar de qualquer uso não autorizado.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Propriedade Intelectual
            </h3>
            <p className="mt-2 text-gray-600">
              Todo o conteúdo e software do sistema SmartStock são protegidos por direitos autorais e outras leis de propriedade intelectual. Você não deve copiar, modificar, distribuir ou criar obras derivadas do sistema sem a nossa autorização expressa.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Limitação de Responsabilidade
            </h3>
            <p className="mt-2 text-gray-600">
              Não nos responsabilizamos por qualquer dano ou perda resultante do uso do sistema, incluindo, mas não se limitando a, perdas de dados ou interrupções de serviço.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Alterações nos Termos
            </h3>
            <p className="mt-2 text-gray-600">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações serão publicadas nesta página e entrarão em vigor assim que forem publicadas. Recomendamos que você revise periodicamente os termos para se manter informado.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Contato
            </h3>
            <p className="mt-2 text-gray-600">
              Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco através do e-mail: contato@smartstock.com.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
