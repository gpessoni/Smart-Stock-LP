"use client";

import { Package } from "lucide-react";
import { Footer } from "./footer";
import { NavbarWhite } from "./navbar-white";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarWhite />

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-16 bg-gray-50 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-neutral-900 font-semibold tracking-wide uppercase dark:text-neutral-50">
              Nossa Política de Privacidade
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Compromisso com a sua Privacidade
            </p>
          </div>
          <div className="mt-10 max-w-2xl lg:mx-auto">
            <p className="mt-4 text-xl text-gray-500">
              Na SmartStock, respeitamos sua privacidade e estamos comprometidos
              em proteger suas informações pessoais. Esta política descreve como
              coletamos, usamos e protegemos suas informações ao interagir com
              nosso site e serviços.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Coleta de Informações
            </h3>
            <p className="mt-2 text-gray-600">
              Coletamos informações que você nos fornece diretamente, como nome,
              e-mail e outras informações de contato ao preencher formulários ou
              se inscrever em nossos serviços.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Uso de Informações
            </h3>
            <p className="mt-2 text-gray-600">
              As informações coletadas são utilizadas para:
              <ul className="list-disc list-inside mt-2">
                <li>Fornecer e gerenciar nossos serviços;</li>
                <li>Comunicar com você sobre atualizações e novidades;</li>
                <li>Melhorar nosso site e a experiência do usuário;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Segurança das Informações
            </h3>
            <p className="mt-2 text-gray-600">
              Implementamos medidas de segurança adequadas para proteger suas
              informações contra acesso não autorizado, uso ou divulgação. No
              entanto, lembre-se de que nenhuma transmissão pela internet é
              totalmente segura.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Seus Direitos
            </h3>
            <p className="mt-2 text-gray-600">
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais. Para exercer esses direitos, entre em
              contato conosco através das informações fornecidas abaixo.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Mudanças nesta Política
            </h3>
            <p className="mt-2 text-gray-600">
              Podemos atualizar nossa Política de Privacidade ocasionalmente. As
              alterações serão publicadas nesta página, e recomendamos que você
              a revise periodicamente para se manter informado sobre como
              estamos protegendo suas informações.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Contato
            </h3>
            <p className="mt-2 text-gray-600">
              Se você tiver dúvidas ou preocupações sobre nossa Política de
              Privacidade, entre em contato conosco através do e-mail:
              contato@smartstock.com.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
