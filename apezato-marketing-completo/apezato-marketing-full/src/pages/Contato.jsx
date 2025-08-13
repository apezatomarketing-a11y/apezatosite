import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Instagram,
  CheckCircle,
  User,
  MessageSquare,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        assunto: '',
        mensagem: ''
      })
      
      // Redirecionar para WhatsApp com a mensagem
      const mensagemWhatsApp = `Olá! Meu nome é ${formData.nome}. ${formData.mensagem}`
      const whatsappUrl = `https://wa.me/5512991895547?text=${encodeURIComponent(mensagemWhatsApp)}`
      window.open(whatsappUrl, '_blank')
      
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 2000)
  }

  const informacoesContato = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      titulo: "WhatsApp",
      info: "(12) 99189-5547",
      descricao: "Atendimento rápido e direto",
      link: "https://wa.me/5512991895547",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      titulo: "Telefone Fixo",
      info: "(12) 2023-8569",
      descricao: "Horário comercial",
      link: "tel:+551220238569",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      titulo: "E-mail",
      info: "apezatomarketing@gmail.com",
      descricao: "Resposta em até 24h",
      link: "mailto:apezatomarketing@gmail.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      titulo: "Localização",
      info: "Jacareí, SP",
      descricao: "Atendimento presencial e online",
      link: null,
      color: "from-orange-500 to-orange-600"
    }
  ]

  const redesSociais = [
    {
      nome: "Instagram",
      usuario: "@danielleapezato",
      link: "https://www.instagram.com/danielleapezato?igsh=MXNqbzZzM3MxbTdwMQ==",
      icon: <Instagram className="h-6 w-6" />,
      descricao: "Acompanhe nossos bastidores e dicas diárias"
    },
    {
      nome: "TikTok",
      usuario: "@apezatomarketing",
      link: "https://www.tiktok.com/@apezatomarketing?_t=ZM-8ygRdVBOmbo&_r=1",
      icon: <Send className="h-6 w-6" />,
      descricao: "Conteúdo rápido e estratégias práticas"
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
              Entre em <span className="text-emerald-600">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Estamos aqui para ajudar você a transformar seu negócio. Entre em contato conosco 
              e vamos conversar sobre como podemos impulsionar sua marca juntas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Direto
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}
              >
                Preencher Formulário
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Informações de Contato
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Escolha a forma de contato que preferir. Estamos sempre disponíveis para ajudar você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {informacoesContato.map((contato, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className={`bg-gradient-to-r ${contato.color} rounded-lg p-4 w-fit mx-auto mb-4`}>
                  <div className="text-white">{contato.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{contato.titulo}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">{contato.info}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{contato.descricao}</p>
                {contato.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    onClick={() => window.open(contato.link, '_blank')}
                  >
                    Entrar em Contato
                  </Button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Horário de Atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center"
          >
            <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Horário de Atendimento
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Segunda a Sexta: 9h às 18h
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Atendimento via WhatsApp disponível 24h para urgências
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="formulario" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Envie sua Mensagem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Preencha o formulário abaixo e entraremos em contato em até 24 horas. 
                Quanto mais detalhes você fornecer, melhor poderemos ajudar você.
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
                      Mensagem enviada com sucesso! Redirecionando para o WhatsApp...
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      WhatsApp *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="consultoria">Consultoria Gratuita</option>
                      <option value="servicos">Informações sobre Serviços</option>
                      <option value="produtos">Informações sobre Produtos</option>
                      <option value="orcamento">Solicitar Orçamento</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="parceria">Proposta de Parceria</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Mensagem *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                      placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar você..."
                    />
                  </div>
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
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ao enviar este formulário, você será redirecionado para nosso WhatsApp para continuar a conversa.
                </p>
              </form>
            </motion.div>

            {/* Informações Adicionais */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Redes Sociais */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="space-y-4">
                  {redesSociais.map((rede, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                      <div className="text-emerald-600 mr-4">{rede.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{rede.nome}</h4>
                        <p className="text-emerald-600 dark:text-emerald-400 text-sm">{rede.usuario}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{rede.descricao}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                        onClick={() => window.open(rede.link, '_blank')}
                      >
                        Seguir
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agendar Consultoria */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
                <Calendar className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Agende sua Consultoria Gratuita
                </h3>
                <p className="mb-6 opacity-90">
                  Prefere conversar diretamente? Agende uma consultoria gratuita de 30 minutos 
                  para discutir seus objetivos e como podemos ajudar.
                </p>
                <Button
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                  onClick={() => window.open('https://wa.me/5512991895547?text=Olá! Gostaria de agendar uma consultoria gratuita.', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Agora
                </Button>
              </div>

              {/* Localização */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <MapPin className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossa Localização
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Estamos localizados em Jacareí, SP, mas atendemos clientes de todo o Brasil 
                  através de nossos serviços digitais.
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p><strong>Cidade:</strong> Jacareí, São Paulo</p>
                  <p><strong>Atendimento:</strong> Presencial e Online</p>
                  <p><strong>Cobertura:</strong> Todo o Brasil</p>
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
              Vamos Conversar sobre seu Projeto?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos ansiosas para conhecer sua história e ajudar você a alcançar seus objetivos
            </p>
            <Button 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
              onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Iniciar Conversa no WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contato

