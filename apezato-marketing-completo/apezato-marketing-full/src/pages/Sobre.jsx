import React from 'react'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  Target,
  Handshake,
  Users,
  Award,
  Briefcase,
  Sparkles,
  TrendingUp,
  Star,
  CheckCircle
} from 'lucide-react'

const Sobre = () => {
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
              Sobre a <span className="text-emerald-600">Apezato Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Conheça nossa história, nossa missão e como transformamos pequenos negócios em grandes sucessos através do marketing digital estratégico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                A Apezato Marketing nasceu da paixão por ajudar empreendedoras a realizarem seus sonhos no mundo digital. Fundada em 2023, nossa agência começou como um projeto pessoal para apoiar pequenos negócios que precisavam de uma presença digital forte e estratégica.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Desde o início, nosso foco sempre foi entregar resultados reais e mensuráveis. Começamos atendendo empreendedoras locais em Jacareí e região, e rapidamente expandimos nosso alcance para todo o Brasil, sempre mantendo o atendimento personalizado que nos diferencia no mercado.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hoje, somos reconhecidos como uma das principais agências especializadas em marketing digital para empreendedoras online, com mais de 50 clientes atendidos e resultados que falam por si só.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-emerald-600 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Marcos Importantes</h3>
              <ul className="space-y-4 text-white text-lg">
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-white mr-3" /> 2023 - Fundação da Apezato Marketing</li>
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-white mr-3" /> 2023 - Primeiros 10 clientes atendidos</li>
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-white mr-3" /> 2024 - Expansão para todo o Brasil</li>
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-white mr-3" /> 2024 - Mais de 50 clientes atendidos</li>
                <li className="flex items-center"><CheckCircle className="h-6 w-6 text-white mr-3" /> 2025 - Lançamento de novos serviços</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nossa Missão, Visão e Valores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Guiamos nosso trabalho por princípios que garantem excelência e resultados para nossos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-md"
            >
              <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Missão</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Impulsionar o crescimento de empreendedoras online, transformando suas ideias em negócios de sucesso através de estratégias de marketing digital inovadoras e personalizadas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-md"
            >
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Visão</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ser a agência de marketing digital referência para empreendedoras no Brasil, reconhecida pela excelência, inovação e pelo impacto positivo nos resultados de nossos clientes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-md"
            >
              <Handshake className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Valores</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transparência, Inovação, Compromisso com Resultados, Atendimento Personalizado e Ética em todas as relações.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Pilares */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nossos Pilares de Atuação
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Construímos estratégias sólidas baseadas em fundamentos que garantem o sucesso do seu negócio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
            >
              <Sparkles className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Criatividade</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Soluções inovadoras e designs que capturam a atenção e expressam a essência da sua marca.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
            >
              <TrendingUp className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Resultados</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Foco em métricas e estratégias que geram crescimento real e retorno sobre o investimento.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
            >
              <Users className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Parceria</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Construímos relacionamentos duradouros, trabalhando lado a lado com você para alcançar seus objetivos.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
            >
              <Award className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Excelência</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Buscamos a perfeição em cada detalhe, entregando serviços de alta qualidade que superam as expectativas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conheça a Fundadora */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="/images/fundadora.jpg" 
                alt="Danielle Apezato - Fundadora da Apezato Marketing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold">Danielle Apezato</h3>
                <p className="text-lg opacity-90">Fundadora e CEO</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Conheça nossa Fundadora
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Danielle Apezato é a mente criativa e estratégica por trás da Apezato Marketing. Com uma paixão inabalável por empreendedorismo e marketing digital, Danielle fundou a agência com o objetivo de capacitar mulheres a transformarem seus negócios online.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Sua expertise abrange desde a criação de identidades visuais impactantes até a gestão de tráfego pago e estratégias de conteúdo que geram resultados reais. Com anos de experiência no mercado, Danielle lidera a equipe da Apezato Marketing com uma visão clara: oferecer soluções personalizadas que impulsionam o sucesso de cada cliente.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Acredita que o marketing digital é uma ferramenta poderosa para democratizar o acesso ao sucesso no empreendedorismo, e dedica-se a construir parcerias duradouras baseadas em confiança e resultados.
              </p>
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
              Pronta para Impulsionar sua Marca?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende sua consultoria gratuita e descubra como podemos transformar seu negócio.
            </p>
            <a 
              href="https://wa.me/5512991895547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              💬 Agendar Consultoria
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Sobre


