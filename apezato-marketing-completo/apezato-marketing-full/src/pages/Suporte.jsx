import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  MessageCircle, 
  Mail, 
  Clock, 
  Shield,
  CheckCircle,
  CreditCard,
  FileText,
  Download,
  Send,
  User,
  Package,
  AlertCircle,
  Phone,
  Palette,
  Zap,
  Calendar,
  Image,
  Globe,
  Monitor,
  BarChart3,
  GraduationCap
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Suporte = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    produto: '',
    duvida: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const faqItems = [
    {
      id: 1,
      pergunta: "Vocês entregam identidade visual impressa?",
      resposta: "Sim! Entregamos todos os arquivos da identidade visual em alta resolução, incluindo versões específicas para impressão (CMYK) e digital (RGB). Você receberá arquivos em formatos PNG, JPG, PDF e AI (Adobe Illustrator) que podem ser utilizados em qualquer gráfica ou material impresso. Também fornecemos um manual de uso com especificações técnicas para garantir a qualidade na impressão."
    },
    {
      id: 2,
      pergunta: "Quais os prazos de entrega dos serviços?",
      resposta: "Nossos prazos variam conforme o serviço: Identidade visual completa (7-10 dias úteis), Logotipo (5-7 dias úteis), Calendário de conteúdo (10 dias úteis), Packs de posts (5 dias úteis), Landing page (7-10 dias úteis), Site institucional (10-15 dias úteis), Análise de perfil (3-5 dias úteis), Mentoria express (agendamento em até 48h). Todos os prazos são contados a partir da confirmação do pagamento e aprovação do briefing."
    },
    {
      id: 3,
      pergunta: "Como recebo os arquivos dos produtos?",
      resposta: "Os arquivos são entregues via e-mail em uma pasta compactada (.zip) ou através de link para download no Google Drive. Você receberá todos os arquivos em alta resolução, nas versões e formatos especificados em cada produto. Para produtos físicos como sites, você receberá acesso ao painel administrativo e treinamento para uso. Mantemos backup dos arquivos por 1 ano após a entrega."
    },
    {
      id: 4,
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta: "Aceitamos as seguintes formas de pagamento: PIX (desconto de 5%), Cartão de crédito (até 12x via PagSeguro), Cartão de débito, Transferência bancária. Para projetos acima de R$ 1.000, oferecemos parcelamento personalizado. O pagamento deve ser realizado antes do início do projeto, exceto para serviços mensais que são cobrados antecipadamente."
    },
    {
      id: 5,
      pergunta: "Oferecem suporte após a entrega?",
      resposta: "Sim! Oferecemos suporte gratuito por diferentes períodos conforme o produto: Produtos digitais (30 dias), Identidade visual (60 dias), Sites e landing pages (90 dias), Serviços mensais (suporte contínuo). O suporte inclui esclarecimento de dúvidas, orientações de uso e pequenos ajustes. Para alterações maiores, oferecemos orçamento personalizado."
    },
    {
      id: 6,
      pergunta: "É possível fazer alterações após a entrega?",
      resposta: "Sim, oferecemos revisões conforme especificado em cada serviço. Logotipos incluem ajustes ilimitados durante o desenvolvimento. Após a entrega final, pequenos ajustes são inclusos no período de suporte. Para alterações maiores ou mudanças de escopo, elaboramos um orçamento adicional. Sempre buscamos a satisfação total do cliente."
    },
    {
      id: 7,
      pergunta: "Como funciona a garantia de 7 dias?",
      resposta: "Nossa garantia de 7 dias úteis garante sua total satisfação. Se não ficar satisfeita com o resultado final, devolvemos 100% do valor investido, conforme especificado em contrato. A garantia se aplica a todos os nossos produtos e serviços. Para acionar a garantia, basta entrar em contato via WhatsApp ou e-mail dentro do prazo estabelecido."
    },
    {
      id: 8,
      pergunta: "Atendem clientes de todo o Brasil?",
      resposta: "Sim! Atendemos clientes de todo o Brasil através de nossos serviços digitais. Nosso atendimento é 100% online via WhatsApp, e-mail e videoconferência. Todos os processos são digitalizados para sua comodidade. Para clientes da região de Jacareí/SP, também oferecemos atendimento presencial quando necessário."
    },
    {
      id: 9,
      pergunta: "Como funciona o processo de briefing?",
      resposta: "Após a confirmação do pagamento, enviamos um questionário detalhado (briefing) para entender suas necessidades, objetivos e preferências. Este processo é fundamental para garantir que o resultado final atenda exatamente às suas expectativas. O briefing é analisado por nossa equipe antes do início do projeto, e pode incluir uma reunião online para esclarecimentos adicionais."
    },
    {
      id: 10,
      pergunta: "Oferecem treinamento para usar os materiais?",
      resposta: "Sim! Para sites e landing pages, oferecemos treinamento completo via videoconferência. Para produtos como templates do Canva, fornecemos vídeos tutoriais e manuais passo a passo. Identidades visuais incluem manual de uso detalhado. Estamos sempre disponíveis para esclarecer dúvidas sobre como utilizar os materiais entregues."
    }
  ]

  const prazosEntrega = [
    { servico: "Identidade Visual Completa", prazo: "7-10 dias úteis", icone: <Palette className="h-5 w-5" /> },
    { servico: "Criação de Logotipo", prazo: "5-7 dias úteis", icone: <Zap className="h-5 w-5" /> },
    { servico: "Calendário de Conteúdo", prazo: "10 dias úteis", icone: <Calendar className="h-5 w-5" /> },
    { servico: "Pack de Posts", prazo: "5 dias úteis", icone: <Image className="h-5 w-5" /> },
    { servico: "Landing Page", prazo: "7-10 dias úteis", icone: <Globe className="h-5 w-5" /> },
    { servico: "Site Institucional", prazo: "10-15 dias úteis", icone: <Monitor className="h-5 w-5" /> },
    { servico: "Análise de Perfil", prazo: "3-5 dias úteis", icone: <BarChart3 className="h-5 w-5" /> },
    { servico: "Mentoria Express", prazo: "Agendamento em 48h", icone: <GraduationCap className="h-5 w-5" /> }
  ]

  const handleFaqToggle = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        nome: '',
        email: '',
        produto: '',
        duvida: ''
      })
      
      const mensagemWhatsApp = `Olá! Preciso de suporte. Meu nome é ${formData.nome}, produto: ${formData.produto}. Dúvida: ${formData.duvida}`
      const whatsappUrl = `https://wa.me/5512991895547?text=${encodeURIComponent(mensagemWhatsApp)}`
      window.open(whatsappUrl, '_blank')
      
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 2000)
  }

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
              Central de <span className="text-emerald-600">Suporte</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Estamos aqui para ajudar você! Encontre respostas para suas dúvidas, 
              acesse informações sobre garantias e entre em contato conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Suporte via WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver FAQ
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Perguntas Frequentes (FAQ)
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços e produtos
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => handleFaqToggle(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 dark:text-white">{item.pergunta}</span>
                  </div>
                  {openFaq === item.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openFaq === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pl-14">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.resposta}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia e Reembolso */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Garantia e Reembolso
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sua satisfação é nossa prioridade. Conheça nossa política de garantia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-emerald-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Garantia de 7 Dias Úteis
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Oferecemos garantia de satisfação de 7 dias úteis para todos os nossos produtos e serviços. 
                Se não ficar completamente satisfeita com o resultado, devolvemos 100% do seu investimento 
                conforme acordado em contrato.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Reembolso integral em até 7 dias úteis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Processo simples e transparente</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Sem burocracia desnecessária</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <CreditCard className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Política de Pagamentos
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Trabalhamos com total transparência em nossos pagamentos e reembolsos. 
                Conheça nossa política detalhada.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">PIX, Cartão e PagSeguro aceitos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Parcelamento em até 12x no cartão</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Reembolso no mesmo método de pagamento</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prazos de Entrega */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Prazos de Entrega Detalhados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conheça os prazos específicos para cada um dos nossos serviços
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prazosEntrega.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
              >
                <div className="text-emerald-600 mb-4 flex justify-center">{item.icone}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.servico}</h3>
                <div className="flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm font-semibold">{item.prazo}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center"
          >
            <AlertCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Importante sobre os Prazos
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Todos os prazos são contados a partir da confirmação do pagamento e aprovação do briefing. 
              Finais de semana e feriados não são contabilizados. Para projetos urgentes, 
              consulte disponibilidade de entrega expressa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulário de Suporte */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Formulário de Suporte
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Não encontrou a resposta que procurava? Envie sua dúvida através do formulário 
                e nossa equipe entrará em contato em até 24 horas.
              </p>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 dark:text-green-200 font-semibold">
                      Solicitação enviada! Redirecionando para o WhatsApp...
                    </span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="produto" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Produto/Serviço *
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="produto"
                      name="produto"
                      value={formData.produto}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    >
                      <option value="">Selecione o produto/serviço</option>
                      <option value="identidade-visual">Identidade Visual</option>
                      <option value="logotipo">Criação de Logotipo</option>
                      <option value="pack-posts">Pack de Posts</option>
                      <option value="calendario-conteudo">Calendário de Conteúdo</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="site-institucional">Site Institucional</option>
                      <option value="mentoria">Mentoria Express</option>
                      <option value="analise-perfil">Análise de Perfil</option>
                      <option value="gestao-redes">Gestão de Redes Sociais</option>
                      <option value="trafego-pago">Tráfego Pago</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="duvida" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Dúvida/Problema *
                  </label>
                  <textarea
                    id="duvida"
                    name="duvida"
                    value={formData.duvida}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                    placeholder="Descreva sua dúvida ou problema detalhadamente..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Canais de Suporte */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Canais de Suporte
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-600 mr-4" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">(12) 99189-5547</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Resposta mais rápida</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
                    >
                      Abrir
                    </Button>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">E-mail</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">apezatomarketing@gmail.com</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Resposta em até 24h</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('mailto:apezatomarketing@gmail.com', '_blank')}
                    >
                      Enviar
                    </Button>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Phone className="h-6 w-6 text-purple-600 mr-4" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Telefone</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">(12) 2023-8569</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Seg-Sex, 9h às 18h</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('tel:+551220238569', '_blank')}
                    >
                      Ligar
                    </Button>
                  </div>
                </div>
              </div>

              {/* Política de Confidencialidade */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <FileText className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Política de Confidencialidade
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Todos os arquivos e informações dos clientes são tratados com total confidencialidade. 
                  Mantemos backup seguro por 1 ano e não compartilhamos dados com terceiros.
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>• Arquivos protegidos por senha</p>
                  <p>• Backup seguro por 1 ano</p>
                  <p>• Conformidade com LGPD</p>
                  <p>• Não compartilhamento de dados</p>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ainda tem Dúvidas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe está sempre pronta para ajudar você. Entre em contato conosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
                onClick={() => window.open('mailto:apezatomarketing@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Suporte

