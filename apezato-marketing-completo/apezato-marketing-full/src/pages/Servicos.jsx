import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Calendar, 
  BarChart3, 
  GraduationCap, 
  Megaphone, 
  Video, 
  Palette,
  CheckCircle,
  Clock,
  Star,
  MessageCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Servicos = () => {
  const [selectedService, setSelectedService] = useState(null)

  const servicos = [
    {
      id: 1,
      icon: <Target className="h-12 w-12" />,
      title: "Consultoria de Marketing Digital",
      subtitle: "Diagnóstico + plano personalizado",
      description: "Análise completa do seu negócio digital com diagnóstico detalhado e plano estratégico personalizado para acelerar seu crescimento.",
      detalhes: [
        "Análise completa da presença digital atual",
        "Diagnóstico de pontos fortes e oportunidades de melhoria",
        "Definição de personas e público-alvo",
        "Estratégia de posicionamento de marca",
        "Plano de ação com metas e prazos definidos",
        "Recomendações de ferramentas e plataformas",
        "Acompanhamento mensal dos resultados"
      ],
      beneficios: [
        "Visão clara do potencial do seu negócio",
        "Estratégia personalizada para seus objetivos",
        "Redução de custos com ações desnecessárias",
        "Aceleração do crescimento digital",
        "Suporte especializado contínuo"
      ],
      prazo: "7-10 dias úteis",
      investimento: "A partir de R$ 497",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 2,
      icon: <Users className="h-12 w-12" />,
      title: "Gerenciamento de Redes Sociais",
      subtitle: "Criação de conteúdo, calendário e atendimento estratégico",
      description: "Gestão completa das suas redes sociais com criação de conteúdo estratégico, calendário editorial e atendimento ao cliente.",
      detalhes: [
        "Criação de conteúdo personalizado (posts, stories, reels)",
        "Calendário editorial estratégico mensal",
        "Copywriting persuasivo e engajador",
        "Hashtags estratégicas para alcance orgânico",
        "Atendimento e resposta aos comentários",
        "Monitoramento de métricas e engajamento",
        "Relatórios mensais de performance",
        "Sugestões de melhorias contínuas"
      ],
      beneficios: [
        "Presença digital consistente e profissional",
        "Aumento do engajamento e seguidores",
        "Economia de tempo para focar no negócio",
        "Conteúdo estratégico que converte",
        "Relacionamento próximo com o público"
      ],
      prazo: "Serviço contínuo mensal",
      investimento: "A partir de R$ 897/mês",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      icon: <Calendar className="h-12 w-12" />,
      title: "Calendário de Conteúdo",
      subtitle: "Planejamento completo com ideias de posts, reels e stories",
      description: "Calendário editorial estratégico com 30 dias de conteúdo planejado, incluindo posts, stories e reels para suas redes sociais.",
      detalhes: [
        "30 ideias de posts para feed do Instagram",
        "15 ideias de stories interativos",
        "10 roteiros para reels virais",
        "Sugestões de hashtags para cada post",
        "Datas comemorativas e sazonalidades",
        "Calls-to-action estratégicos",
        "Cronograma de publicação otimizado",
        "Templates editáveis no Canva"
      ],
      beneficios: [
        "Organização total do seu conteúdo",
        "Nunca mais ficar sem ideias para postar",
        "Conteúdo estratégico que engaja",
        "Economia de tempo no planejamento",
        "Crescimento orgânico consistente"
      ],
      prazo: "10 dias úteis",
      investimento: "R$ 297",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Análise de Perfil e Comportamento do Público",
      subtitle: "Diagnóstico com sugestões práticas de melhoria",
      description: "Análise profunda do seu perfil e audiência com insights valiosos e sugestões práticas para otimizar sua presença digital.",
      detalhes: [
        "Auditoria completa do perfil no Instagram",
        "Análise da bio, destaques e feed",
        "Estudo do comportamento da audiência",
        "Identificação de horários de maior engajamento",
        "Análise da concorrência direta",
        "Sugestões de melhoria no conteúdo",
        "Recomendações de hashtags estratégicas",
        "Plano de ação para crescimento"
      ],
      beneficios: [
        "Conhecimento profundo da sua audiência",
        "Otimização do perfil para conversão",
        "Estratégias baseadas em dados reais",
        "Vantagem competitiva no mercado",
        "Crescimento direcionado e eficiente"
      ],
      prazo: "5-7 dias úteis",
      investimento: "R$ 197",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Mentorias Estratégicas",
      subtitle: "Individuais ou em grupo, voltadas para crescimento digital",
      description: "Sessões de mentoria personalizadas para acelerar seu aprendizado e crescimento no marketing digital.",
      detalhes: [
        "Sessões de 1h30 individuais ou em grupo",
        "Diagnóstico personalizado do seu negócio",
        "Estratégias específicas para seu nicho",
        "Plano de ação passo a passo",
        "Suporte para implementação",
        "Material de apoio exclusivo",
        "Gravação da sessão para revisão",
        "Follow-up de 30 dias"
      ],
      beneficios: [
        "Aprendizado acelerado e direcionado",
        "Estratégias personalizadas para seu negócio",
        "Suporte especializado contínuo",
        "Economia de tempo e recursos",
        "Resultados mais rápidos e eficientes"
      ],
      prazo: "Agendamento imediato",
      investimento: "R$ 297 (individual) / R$ 197 (grupo)",
      color: "from-green-500 to-green-600"
    },
    {
      id: 6,
      icon: <Megaphone className="h-12 w-12" />,
      title: "Gestão de Tráfego Pago",
      subtitle: "Campanhas no Google Ads e Meta, com relatórios",
      description: "Criação e gestão de campanhas de tráfego pago para maximizar seu ROI e acelerar o crescimento do seu negócio.",
      detalhes: [
        "Criação de campanhas no Google Ads",
        "Campanhas no Facebook e Instagram Ads",
        "Segmentação avançada de público",
        "Criação de anúncios persuasivos",
        "Otimização contínua das campanhas",
        "Relatórios semanais de performance",
        "Análise de ROI e conversões",
        "Suporte e ajustes constantes"
      ],
      beneficios: [
        "Resultados rápidos e mensuráveis",
        "Aumento qualificado de leads",
        "Otimização do investimento em anúncios",
        "Crescimento acelerado das vendas",
        "Dados precisos para tomada de decisão"
      ],
      prazo: "Setup em 3-5 dias",
      investimento: "Taxa de gestão: 20% do investimento + R$ 497/mês",
      color: "from-red-500 to-red-600"
    },
    {
      id: 7,
      icon: <Video className="h-12 w-12" />,
      title: "Edição de Vídeos Profissional",
      subtitle: "Reels, vídeos para YouTube e anúncios",
      description: "Edição profissional de vídeos para suas redes sociais, YouTube e campanhas publicitárias com qualidade cinematográfica.",
      detalhes: [
        "Edição de reels para Instagram e TikTok",
        "Vídeos longos para YouTube",
        "Anúncios em vídeo para campanhas",
        "Correção de cor e áudio",
        "Inserção de legendas e textos",
        "Efeitos visuais e transições",
        "Trilha sonora e sound design",
        "Entrega em múltiplos formatos"
      ],
      beneficios: [
        "Vídeos com qualidade profissional",
        "Maior engajamento e alcance",
        "Economia de tempo na produção",
        "Conteúdo que se destaca na multidão",
        "Aumento da credibilidade da marca"
      ],
      prazo: "3-5 dias úteis por vídeo",
      investimento: "A partir de R$ 97 por vídeo",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 8,
      icon: <Palette className="h-12 w-12" />,
      title: "Identidade Visual e Branding",
      subtitle: "Criação completa da identidade da marca, logotipo, manual etc.",
      description: "Desenvolvimento completo da identidade visual da sua marca, incluindo logotipo, paleta de cores, tipografia e manual de uso.",
      detalhes: [
        "Criação de logotipo exclusivo",
        "Paleta de cores estratégica",
        "Seleção de tipografia",
        "Manual de identidade visual",
        "Aplicações em diferentes materiais",
        "Versões para redes sociais",
        "Cartão de visitas digital",
        "Templates para posts e stories",
        "Arquivos em alta resolução"
      ],
      beneficios: [
        "Marca profissional e memorável",
        "Diferenciação no mercado",
        "Consistência visual em todos os materiais",
        "Aumento da credibilidade",
        "Facilidade para criar novos materiais"
      ],
      prazo: "7-10 dias úteis",
      investimento: "A partir de R$ 697",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const processoTrabalho = [
    {
      numero: "01",
      titulo: "Diagnóstico",
      descricao: "Análise completa do seu negócio e objetivos"
    },
    {
      numero: "02",
      titulo: "Estratégia",
      descricao: "Desenvolvimento de plano personalizado"
    },
    {
      numero: "03",
      titulo: "Execução",
      descricao: "Implementação das ações planejadas"
    },
    {
      numero: "04",
      titulo: "Acompanhamento",
      descricao: "Monitoramento e otimização contínua"
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
              Nossos <span className="text-emerald-600">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Soluções completas de marketing digital para impulsionar seu negócio. 
              Cada serviço é desenvolvido com foco em resultados reais e crescimento sustentável.
            </p>
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
            >
              Agende sua Consultoria Gratuita
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nosso processo é estruturado para garantir os melhores resultados em cada projeto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processoTrabalho.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{etapa.numero}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{etapa.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300">{etapa.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cada serviço é cuidadosamente desenvolvido para atender às necessidades específicas do seu negócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicos.map((servico, index) => (
              <motion.div
                key={servico.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedService(selectedService === servico.id ? null : servico.id)}
              >
                <div className={`bg-gradient-to-r ${servico.color} rounded-lg p-4 w-fit mb-6`}>
                  <div className="text-white">{servico.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{servico.title}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{servico.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{servico.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {servico.prazo}
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold">{servico.investimento}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    {selectedService === servico.id ? 'Ver Menos' : 'Ver Detalhes'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Detalhes Expandidos */}
                {selectedService === servico.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">O que está incluído:</h4>
                        <ul className="space-y-2">
                          {servico.detalhes.map((detalhe, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{detalhe}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Benefícios:</h4>
                        <ul className="space-y-2">
                          {servico.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="flex items-start">
                              <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Button 
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Por que Escolher a Apezato Marketing?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Estratégia Personalizada",
                description: "Cada projeto é único. Desenvolvemos estratégias sob medida para seus objetivos específicos e realidade do seu negócio."
              },
              {
                icon: "📊",
                title: "Resultados Mensuráveis",
                description: "Acompanhamos métricas reais e fornecemos relatórios detalhados para que você veja o retorno do seu investimento."
              },
              {
                icon: "🚀",
                title: "Crescimento Acelerado",
                description: "Técnicas comprovadas e atualizadas para acelerar o crescimento da sua marca de forma sustentável."
              },
              {
                icon: "💬",
                title: "Suporte Dedicado",
                description: "Atendimento personalizado e suporte contínuo para tirar dúvidas e ajustar estratégias quando necessário."
              },
              {
                icon: "⚡",
                title: "Agilidade na Entrega",
                description: "Prazos cumpridos rigorosamente e entregas sempre dentro do cronograma estabelecido."
              },
              {
                icon: "🏆",
                title: "Qualidade Garantida",
                description: "Padrão de excelência em todos os nossos serviços, com garantia de satisfação e retrabalho se necessário."
              }
            ].map((diferencial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="text-4xl mb-4">{diferencial.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{diferencial.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{diferencial.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Garantia de Satisfação
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Estamos tão confiantes na qualidade dos nossos serviços que oferecemos garantia de 7 dias úteis. 
              Se não ficar satisfeita com o resultado, devolvemos seu investimento conforme acordado em contrato.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Garantia de 7 Dias Úteis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Trabalhamos com total transparência e comprometimento. Sua satisfação é nossa prioridade.
              </p>
              <Button 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
              >
                Começar Agora com Segurança
              </Button>
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
              Pronta para Transformar seu Negócio?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Escolha o serviço ideal para seu momento e comece a ver resultados reais em poucos dias
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
                onClick={() => window.location.href = '/contato'}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Servicos

