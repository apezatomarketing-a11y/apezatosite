import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Image, 
  Palette, 
  Zap, 
  GraduationCap, 
  BarChart3, 
  Globe, 
  Monitor,
  CheckCircle,
  Star,
  Clock,
  Download,
  MessageCircle,
  ShoppingCart,
  Gift
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Produtos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const produtos = [
    {
      id: 1,
      icon: <Image className="h-12 w-12" />,
      title: "Pack de Posts",
      subtitle: "Posts prontos e personalizáveis para engajar seguidores",
      description: "Conjunto completo de posts profissionais prontos para usar, totalmente editáveis e estrategicamente desenvolvidos para aumentar o engajamento.",
      preco: "R$ 197",
      precoOriginal: "R$ 297",
      desconto: "34% OFF",
      detalhes: [
        "30 posts editáveis no Canva",
        "Designs modernos e profissionais",
        "Textos persuasivos incluídos",
        "Paleta de cores personalizável",
        "Formatos para Instagram e Facebook",
        "Guia de uso e dicas de publicação",
        "Sugestões de hashtags",
        "Atualizações gratuitas por 3 meses"
      ],
      beneficios: [
        "Economia de tempo na criação",
        "Visual profissional garantido",
        "Aumento do engajamento",
        "Consistência visual da marca",
        "Facilidade de personalização"
      ],
      entrega: "Imediata após pagamento",
      formato: "Templates Canva + PDF com instruções",
      color: "from-pink-500 to-pink-600",
      popular: true
    },
    {
      id: 2,
      icon: <Palette className="h-12 w-12" />,
      title: "Identidade Visual Completa",
      subtitle: "Paleta, logo, fontes, guia de uso",
      description: "Identidade visual completa para sua marca, incluindo logotipo, paleta de cores, tipografia e manual de aplicação.",
      preco: "R$ 697",
      precoOriginal: "R$ 997",
      desconto: "30% OFF",
      detalhes: [
        "Logotipo principal + variações",
        "Paleta de cores estratégica",
        "Seleção de tipografia",
        "Manual de identidade visual",
        "Aplicações em diferentes materiais",
        "Versões para redes sociais",
        "Cartão de visitas digital",
        "Arquivos em alta resolução (PNG, JPG, PDF, AI)"
      ],
      beneficios: [
        "Marca profissional e memorável",
        "Diferenciação no mercado",
        "Consistência em todos os materiais",
        "Aumento da credibilidade",
        "Facilidade para criar novos materiais"
      ],
      entrega: "7-10 dias úteis",
      formato: "Arquivos digitais + Manual PDF",
      color: "from-purple-500 to-purple-600",
      popular: false
    },
    {
      id: 3,
      icon: <Zap className="h-12 w-12" />,
      title: "Criação de Logotipo",
      subtitle: "De 2 a 3 propostas + ajustes ilimitados + arquivo final",
      description: "Criação de logotipo exclusivo para sua marca com múltiplas propostas, ajustes ilimitados e entrega de arquivos finais.",
      preco: "R$ 397",
      precoOriginal: "R$ 597",
      desconto: "33% OFF",
      detalhes: [
        "2-3 propostas iniciais diferentes",
        "Ajustes ilimitados na proposta escolhida",
        "Versões colorida, monocromática e negativa",
        "Aplicação em diferentes fundos",
        "Arquivos vetoriais e bitmap",
        "Guia básico de uso",
        "Versões horizontais e verticais",
        "Suporte pós-entrega por 30 dias"
      ],
      beneficios: [
        "Logo exclusivo e original",
        "Múltiplas opções para escolher",
        "Ajustes até ficar perfeito",
        "Arquivos profissionais",
        "Suporte especializado"
      ],
      entrega: "5-7 dias úteis",
      formato: "Arquivos AI, PNG, JPG, PDF",
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      id: 4,
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Mentoria Express (1h30)",
      subtitle: "Diagnóstico + passo a passo para crescimento digital",
      description: "Sessão intensiva de mentoria com diagnóstico completo do seu negócio e plano de ação para crescimento digital.",
      preco: "R$ 297",
      precoOriginal: "R$ 497",
      desconto: "40% OFF",
      detalhes: [
        "Sessão de 1h30 via Google Meet",
        "Diagnóstico completo do negócio",
        "Análise da presença digital atual",
        "Plano de ação personalizado",
        "Estratégias específicas para seu nicho",
        "Material de apoio exclusivo",
        "Gravação da sessão",
        "Follow-up por WhatsApp (30 dias)"
      ],
      beneficios: [
        "Clareza sobre próximos passos",
        "Estratégias personalizadas",
        "Economia de tempo e recursos",
        "Suporte especializado",
        "Resultados mais rápidos"
      ],
      entrega: "Agendamento em até 48h",
      formato: "Sessão online + materiais digitais",
      color: "from-green-500 to-green-600",
      popular: true
    },
    {
      id: 5,
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Análise de Perfil Completa",
      subtitle: "Diagnóstico profundo com relatório detalhado",
      description: "Análise completa do seu perfil nas redes sociais com relatório detalhado e sugestões de melhoria.",
      preco: "R$ 197",
      precoOriginal: "R$ 297",
      desconto: "33% OFF",
      detalhes: [
        "Auditoria completa do Instagram",
        "Análise da bio, destaques e feed",
        "Estudo da audiência e engajamento",
        "Análise da concorrência",
        "Relatório com gráficos e métricas",
        "Sugestões práticas de melhoria",
        "Plano de ação para crescimento",
        "Suporte para implementação (7 dias)"
      ],
      beneficios: [
        "Visão clara dos pontos de melhoria",
        "Estratégias baseadas em dados",
        "Conhecimento da concorrência",
        "Plano de ação direcionado",
        "Crescimento mais eficiente"
      ],
      entrega: "3-5 dias úteis",
      formato: "Relatório PDF + Planilha Excel",
      color: "from-orange-500 to-orange-600",
      popular: false
    },
    {
      id: 6,
      icon: <Globe className="h-12 w-12" />,
      title: "Landing Page Profissional",
      subtitle: "Página de captura otimizada para conversão",
      description: "Landing page profissional desenvolvida para capturar leads e converter visitantes em clientes.",
      preco: "R$ 897",
      precoOriginal: "R$ 1.297",
      desconto: "31% OFF",
      detalhes: [
        "Design responsivo e moderno",
        "Otimizada para conversão",
        "Formulário de captura integrado",
        "Integração com ferramentas de email",
        "Hospedagem por 1 ano inclusa",
        "Certificado SSL gratuito",
        "Otimização para SEO básico",
        "Suporte técnico por 3 meses"
      ],
      beneficios: [
        "Aumento na captura de leads",
        "Profissionalização da marca",
        "Maior credibilidade",
        "Facilidade de compartilhamento",
        "Métricas de conversão"
      ],
      entrega: "7-10 dias úteis",
      formato: "Site online + acesso ao painel",
      color: "from-indigo-500 to-indigo-600",
      popular: false
    },
    {
      id: 7,
      icon: <Monitor className="h-12 w-12" />,
      title: "Site Institucional (até 5 páginas)",
      subtitle: "Site completo para sua empresa",
      description: "Site institucional completo com até 5 páginas, design responsivo e otimizado para conversão.",
      preco: "R$ 1.497",
      precoOriginal: "R$ 2.197",
      desconto: "32% OFF",
      detalhes: [
        "Até 5 páginas personalizadas",
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Formulário de contato",
        "Integração com redes sociais",
        "Hospedagem por 1 ano inclusa",
        "Certificado SSL gratuito",
        "Painel administrativo",
        "Suporte técnico por 6 meses"
      ],
      beneficios: [
        "Presença digital profissional",
        "Credibilidade da marca",
        "Facilidade de encontrar online",
        "Geração de leads qualificados",
        "Diferenciação da concorrência"
      ],
      entrega: "10-15 dias úteis",
      formato: "Site online + treinamento",
      color: "from-teal-500 to-teal-600",
      popular: true
    }
  ]

  const vantagens = [
    {
      icon: <Download className="h-8 w-8" />,
      title: "Entrega Imediata",
      description: "Produtos digitais com acesso instantâneo após confirmação do pagamento"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Garantia de 7 Dias",
      description: "Satisfação garantida ou seu dinheiro de volta conforme contrato"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Suporte Incluso",
      description: "Suporte especializado para tirar dúvidas e ajudar na implementação"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Bônus Exclusivos",
      description: "Materiais extras e atualizações gratuitas para maximizar seus resultados"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Nossos <span className="text-emerald-600">Produtos</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Produtos digitais prontos para usar que vão acelerar o crescimento do seu negócio. 
              Desenvolvidos por especialistas e testados por centenas de empreendedoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Produtos
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
              >
                Orçamento Personalizado
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Por que Escolher Nossos Produtos?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vantagens.map((vantagem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="text-emerald-600 mb-4 flex justify-center">{vantagem.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{vantagem.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{vantagem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section id="produtos" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cada produto foi cuidadosamente desenvolvido para resolver problemas específicos do seu negócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {produtos.map((produto, index) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative ${
                  produto.popular ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                {produto.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${produto.color} rounded-lg p-4 w-fit mb-6`}>
                  <div className="text-white">{produto.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{produto.title}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{produto.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{produto.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{produto.preco}</span>
                    {produto.precoOriginal && (
                      <>
                        <span className="text-lg text-gray-500 line-through">{produto.precoOriginal}</span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                          {produto.desconto}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {produto.entrega}
                  </div>
                </div>

                <Button
                  className="w-full mb-4 bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar Agora
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  onClick={() => setSelectedProduct(selectedProduct === produto.id ? null : produto.id)}
                >
                  {selectedProduct === produto.id ? 'Ver Menos' : 'Ver Detalhes'}
                </Button>

                {/* Detalhes Expandidos */}
                {selectedProduct === produto.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">O que está incluído:</h4>
                        <ul className="space-y-2">
                          {produto.detalhes.map((detalhe, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{detalhe}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Benefícios:</h4>
                        <ul className="space-y-2">
                          {produto.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="flex items-start">
                              <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">Entrega:</span>
                            <p className="text-gray-600 dark:text-gray-300">{produto.entrega}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">Formato:</span>
                            <p className="text-gray-600 dark:text-gray-300">{produto.formato}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Orçamento Personalizado */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Precisa de Algo Personalizado?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Não encontrou exatamente o que precisa? Criamos soluções personalizadas para seu negócio. 
              Entre em contato e vamos desenvolver o produto ideal para suas necessidades.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Orçamento Personalizado
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Conte-nos sobre seu projeto e receba uma proposta sob medida em até 24 horas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  onClick={() => window.location.href = '/contato'}
                >
                  Formulário de Contato
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Compre com Total Segurança
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Garantia de 7 Dias Úteis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Se não ficar completamente satisfeita com qualquer produto, devolvemos 100% do seu investimento 
                conforme acordado em contrato. Sua satisfação é nossa prioridade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Produtos Testados</p>
                  <p className="text-gray-600 dark:text-gray-300">Validados por centenas de clientes</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Suporte Incluso</p>
                  <p className="text-gray-600 dark:text-gray-300">Ajuda para implementar tudo</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Atualizações Gratuitas</p>
                  <p className="text-gray-600 dark:text-gray-300">Melhorias sem custo adicional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comece a Transformar seu Negócio Hoje
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Escolha o produto ideal para seu momento e veja resultados reais em poucos dias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
                onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Todos os Produtos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Produtos

