import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, ChevronDown, MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import Sobre from './pages/Sobre.jsx'
import Servicos from './pages/Servicos.jsx'
import Produtos from './pages/Produtos.jsx'
import Contato from './pages/Contato.jsx'
import Suporte from './pages/Suporte.jsx'
import './App.css'

// Componente de Header
const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <motion.header 
      className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AM</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Apezato Marketing</span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Início</Link>
            <Link to="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sobre</Link>
            
            {/* Dropdown Serviços */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Serviços <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <Link to="/servicos" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors">Consultoria de Marketing</Link>
                    <Link to="/servicos" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors">Gestão de Redes Sociais</Link>
                    <Link to="/servicos" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors">Tráfego Pago</Link>
                    <Link to="/servicos" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors">Identidade Visual</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/produtos" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Produtos</Link>
            <Link to="/contato" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contato</Link>
            <Link to="/suporte" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Suporte</Link>
          </nav>

          {/* CTA e Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
            >
              Agende sua Consultoria Gratuita
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-gray-300 dark:border-gray-600"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-gray-300 dark:border-gray-600"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-gray-300 dark:border-gray-600"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors">Início</Link>
                <Link to="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors">Sobre</Link>
                <Link to="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors">Serviços</Link>
                <Link to="/produtos" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors">Produtos</Link>
                <Link to="/contato" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors">Contato</Link>
                <Link to="/suporte" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors">Suporte</Link>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                  onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
                >
                  Agende sua Consultoria Gratuita
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

// Componente de Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <span className="text-xl font-bold">Apezato Marketing</span>
            </div>
            <p className="text-gray-400 mb-4">
              Impulsione sua marca com estratégia, design e resultados reais. 
              Especialistas em marketing digital para empreendedoras online.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/danielleapezato?igsh=MXNqbzZzM3MxbTdwMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@apezatomarketing?_t=ZM-8ygRdVBOmbo&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Send className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/5512991895547"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Menu de Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-emerald-400 transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-emerald-400 transition-colors">Serviços</Link></li>
              <li><Link to="/produtos" className="text-gray-400 hover:text-emerald-400 transition-colors">Produtos</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-emerald-400 transition-colors">Contato</Link></li>
              <li><Link to="/suporte" className="text-gray-400 hover:text-emerald-400 transition-colors">Suporte</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(12) 2023-8569</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>(12) 99189-5547</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>apezatomarketing@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Jacareí, SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>9h às 18h, seg-sex</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Todos os direitos reservados - Apezato Marketing © 2025
          </p>
          <div className="mt-2">
            <a href="/politica-privacidade" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Botão WhatsApp Flutuante
const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5512991895547"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  )
}

// Página Inicial
const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      business: "Loja de Roupas Online",
      text: "A Apezato Marketing transformou completamente minha presença digital. Em 3 meses, triplicamos as vendas online!",
      rating: 5
    },
    {
      name: "Ana Costa",
      business: "Consultoria Nutricional",
      text: "Profissionalismo e resultados excepcionais. Meu Instagram cresceu 300% em seguidores qualificados.",
      rating: 5
    },
    {
      name: "Carla Mendes",
      business: "Estúdio de Beleza",
      text: "O calendário de conteúdo e a gestão das redes sociais aumentaram muito meu engajamento. Recomendo!",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Impulsione sua marca com{' '}
                <span className="text-emerald-600">estratégia, design</span>{' '}
                e resultados reais.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Somos especialistas em marketing digital para empreendedoras online. 
                Transformamos ideias em negócios de sucesso através de estratégias personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
                >
                  Agende sua Consultoria Gratuita
                </Button>
                <Link 
                  to="/servicos"
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  Conheça nossos serviços
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Resultados Comprovados</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">300%</div>
                    <div className="text-sm opacity-90">Crescimento médio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Clientes atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24h</div>
                    <div className="text-sm opacity-90">Suporte</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ajudando empreendedoras online a crescer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nossa missão é transformar pequenos negócios em grandes sucessos através de estratégias 
              de marketing digital personalizadas e resultados mensuráveis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Estratégia Personalizada",
                description: "Cada negócio é único. Criamos estratégias sob medida para seus objetivos específicos."
              },
              {
                icon: "📈",
                title: "Resultados Mensuráveis",
                description: "Acompanhamos métricas reais e fornecemos relatórios detalhados do seu crescimento."
              },
              {
                icon: "🚀",
                title: "Crescimento Acelerado",
                description: "Técnicas comprovadas para acelerar o crescimento da sua marca nas redes sociais."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Instagram e TikTok */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Conheça nossos bastidores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Acompanhe nosso dia a dia e veja como criamos estratégias vencedoras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                onClick={() => window.open('https://www.instagram.com/danielleapezato?igsh=MXNqbzZzM3MxbTdwMQ==', '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Seguir no Instagram
              </Button>
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-white"
                onClick={() => window.open('https://www.tiktok.com/@apezatomarketing?_t=ZM-8ygRdVBOmbo&_r=1', '_blank')}
              >
                <Send className="mr-2 h-5 w-5" />
                Seguir no TikTok
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              O que nossos clientes dizem
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-emerald-600">{testimonials[currentTestimonial].business}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Como funciona o processo de trabalho?",
                answer: "Iniciamos com uma consultoria gratuita para entender suas necessidades, depois criamos uma estratégia personalizada e executamos com acompanhamento constante."
              },
              {
                question: "Qual o prazo médio de entrega?",
                answer: "Varia conforme o serviço: Identidade visual (7 dias), Logotipo (5 dias), Calendário de conteúdo (10 dias), Packs de post (5 dias)."
              },
              {
                question: "Quais formas de pagamento são aceitas?",
                answer: "Aceitamos Pix, cartão de crédito e débito através do PagSeguro, facilitando o pagamento para nossos clientes."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
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
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende sua consultoria gratuita e descubra como podemos impulsionar sua marca
            </p>
            <Button 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
              onClick={() => window.open('https://wa.me/5512991895547', '_blank')}
            >
              Agendar Consultoria Gratuita
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// App Principal
function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/suporte" element={<Suporte />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App


import ScrollToTopButton from './components/ScrollToTopButton.jsx';

