"use client";

import { useState } from "react";
import { Footer } from "./footer";
import { NavbarWhite } from "./navbar-white";

export function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null as any);

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
      title: "Os Benefícios da Automação na Gestão de Estoque",
      excerpt: `
        <p>A automação na gestão de estoque não é apenas uma tendência, mas uma necessidade para empresas que buscam eficiência e precisão. Veja alguns dos principais benefícios:</p>
        <ul>
          <li><strong>Aumento da Precisão:</strong> Sistemas automatizados reduzem o erro humano, melhorando a precisão dos dados de inventário.</li>
          <li><strong>Eficiência Operacional:</strong> A automação acelera processos, permitindo que as equipes se concentrem em tarefas mais estratégicas.</li>
          <li><strong>Visibilidade em Tempo Real:</strong> Acesso a dados em tempo real facilita a tomada de decisões informadas.</li>
          <li><strong>Redução de Custos:</strong> Menos erros e desperdícios resultam em economias significativas a longo prazo.</li>
        </ul>
        <p>Adotar a automação pode transformar a maneira como você gerencia seu estoque, contribuindo para o crescimento do seu negócio.</p>
      `,
      summary:
        "Explore como a automação pode melhorar a precisão e eficiência na gestão de estoque, reduzindo custos e aumentando a produtividade.",
      image:
        "https://img.freepik.com/fotos-gratis/mulher-trabalhando-em-armazem_23-2148923071.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid",
    },
    {
      title: "Estratégias para Reduzir o Excesso de Estoque",
      excerpt: `
        <p>Manter um excesso de estoque pode prejudicar a liquidez de uma empresa. Aqui estão algumas estratégias para gerenciá-lo eficazmente:</p>
        <ul>
          <li><strong>Promoções e Descontos:</strong> Crie campanhas promocionais para liquidar produtos em excesso rapidamente.</li>
          <li><strong>Gestão de Compras:</strong> Avalie suas práticas de compra para evitar encomendas excessivas e excessos desnecessários.</li>
          <li><strong>Vendas em Pacotes:</strong> Combine produtos em pacotes para incentivar os clientes a comprar mais.</li>
          <li><strong>Inventário Just-in-Time:</strong> Adote um modelo de inventário just-in-time para minimizar excessos e atender a demanda de forma eficaz.</li>
        </ul>
        <p>Implementar essas estratégias pode ajudar a manter seu estoque em níveis saudáveis, promovendo a eficiência e a rentabilidade.</p>
      `,
      summary:
        "Dicas para gerenciar e reduzir o excesso de estoque, utilizando estratégias de promoção e gestão eficaz.",
      image:
        "https://img.freepik.com/fotos-premium/pilhas-de-caixas-de-papelao-num-armazem-moderno_1222920-2233.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid",
    },
    {
      title: "Importância do Controle de Estoque para Pequenos Negócios",
      excerpt: `
        <p>Para pequenos negócios, um controle de estoque eficaz é essencial para o sucesso. Aqui estão algumas razões pelas quais isso é tão importante:</p>
        <ul>
          <li><strong>Evita Faltas de Produtos:</strong> Um bom controle ajuda a garantir que você tenha sempre os produtos disponíveis para atender a demanda dos clientes.</li>
          <li><strong>Reduz Perdas e Desperdícios:</strong> Mantendo o controle, você pode identificar produtos que não estão vendendo e tomar ações corretivas rapidamente.</li>
          <li><strong>Melhora a Tomada de Decisão:</strong> Dados precisos sobre o estoque fornecem insights valiosos que podem informar suas estratégias de vendas e marketing.</li>
          <li><strong>Facilita a Gestão Financeira:</strong> Um controle de estoque adequado contribui para uma melhor gestão financeira e fluxo de caixa.</li>
        </ul>
        <p>Investir em um sistema de controle de estoque é fundamental para a saúde e crescimento de pequenos negócios.</p>
      `,
      summary:
        "Entenda como um controle de estoque eficaz é crucial para pequenos negócios, evitando faltas e melhorando a gestão financeira.",
      image:
        "https://img.freepik.com/fotos-gratis/mulher-usando-bone-de-seguranca-no-trabalho_23-2148976255.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid",
    },
    {
      title: "Tendências em Gestão de Estoque para 2024",
      excerpt: `
        <p>À medida que o mercado evolui, novas tendências em gestão de estoque também emergem. Aqui estão algumas que você deve ficar atento em 2024:</p>
        <ul>
          <li><strong>Sustentabilidade:</strong> Práticas sustentáveis estão se tornando prioridade, com empresas buscando reduzir seu impacto ambiental.</li>
          <li><strong>Inteligência Artificial:</strong> O uso de IA para prever demanda e otimizar níveis de estoque está crescendo rapidamente.</li>
          <li><strong>Integração Omnicanal:</strong> A capacidade de gerenciar o estoque de forma integrada em diferentes canais de vendas é essencial para a experiência do cliente.</li>
          <li><strong>Blockchain:</strong> A transparência na cadeia de suprimentos através de tecnologias como blockchain pode ajudar a aumentar a confiança do consumidor.</li>
        </ul>
        <p>Adotar essas tendências pode ajudar sua empresa a se manter competitiva e preparada para o futuro.</p>
      `,
      summary:
        "Descubra as principais tendências em gestão de estoque para 2024, incluindo sustentabilidade, IA e integração omnicanal.",
      image:
        "https://img.freepik.com/fotos-gratis/homem-com-equipamento-de-seguranca-no-trabalho_23-2148976349.jpg?size=626&ext=jpg&ga=GA1.1.287483519.1728502143&semt=ais_hybrid",
    },
  ];

  const openModal = (post: any) => {
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPost(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <NavbarWhite />

      {/* Header Section */}
      <section id="header" className="py-16 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Blog: Dicas de Gestão de Estoque
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Descubra insights e práticas recomendadas para otimizar a gestão do
            seu estoque.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="content" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article Cards */}
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{post.summary}</p>
                  <button
                    onClick={() => openModal(post)}
                    className="mt-4 inline-block text-blue-500 hover:underline"
                  >
                    Leia mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {currentPost.title}
            </h2>
            <div
              className="mt-4 text-gray-600"
              dangerouslySetInnerHTML={{ __html: currentPost.excerpt }}
            />
            <button
              onClick={closeModal}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
