'use client'

import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { trackLinkClick, trackWhatsAppClick } from '@/lib/analytics/analytics'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Instagram,
  MessageCircle,
  Rocket,
  Layout,
  ShoppingBag,
  Target,
  TrendingUp,
  Bot,
} from 'lucide-react'

export default function Linktree() {
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM || 'revoluxpage'
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'

  const links = [
    {
      title: 'Conheça a Revolux',
      subtitle: '150+ PROJETOS ENTREGUES',
      description: 'Veja nosso portfólio, cases de sucesso e como transformamos negócios',
      price: '98% de satisfação',
      href: '/sobre',
      icon: Rocket,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      badge: 'SOBRE NÓS',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/60',
      hoverShadow: 'hover:shadow-blue-500/20',
    },
    {
      title: 'Site Expresso 24h',
      subtitle: 'SEU SITE NO AR AMANHÃ',
      description: 'Precisa urgente? Entregamos landing pages profissionais em 24 horas',
      price: 'A partir de R$ 2.197',
      href: '/site-expresso',
      icon: Zap,
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      badge: 'URGENTE',
      borderColor: 'border-yellow-500/30',
      hoverBorder: 'hover:border-yellow-500/60',
      hoverShadow: 'hover:shadow-yellow-500/20',
    },
    {
      title: 'Landing Page',
      subtitle: 'CAPTURA DE LEADS',
      description: 'Página única estratégica para capturar leads e gerar vendas',
      price: 'R$ 1.497',
      href: '/landing-page',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      badge: 'POPULAR',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-500/60',
      hoverShadow: 'hover:shadow-purple-500/20',
    },
    {
      title: 'Página de Vendas',
      subtitle: 'PARA INFOPRODUTORES',
      description: 'Long-form persuasiva com copy profissional que converte 24/7',
      price: 'R$ 1.997',
      href: '/pagina-de-vendas',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/60',
      hoverShadow: 'hover:shadow-blue-500/20',
    },
    {
      title: 'Site Institucional',
      subtitle: 'PRESENÇA CORPORATIVA',
      description: 'Site completo com até 5 páginas, blog e painel administrativo',
      price: 'R$ 2.997',
      href: '/site-institucional',
      icon: Layout,
      gradient: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
      hoverBorder: 'hover:border-green-500/60',
      hoverShadow: 'hover:shadow-green-500/20',
    },
    {
      title: 'E-commerce Completo',
      subtitle: 'LOJA VIRTUAL 24/7',
      description: 'Plataforma completa com produtos ilimitados, pagamento e frete',
      price: 'R$ 4.997',
      href: '/ecommerce',
      icon: ShoppingBag,
      gradient: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30',
      hoverBorder: 'hover:border-orange-500/60',
      hoverShadow: 'hover:shadow-orange-500/20',
    },
    {
      title: 'Projetos Personalizados',
      subtitle: 'SISTEMAS · IA · AUTOMAÇÕES',
      description: 'Desenvolvimento sob medida: sistemas web, chatbots de IA e automações',
      price: 'A partir de R$ 3.000',
      href: '/sites-personalizados',
      icon: Bot,
      gradient: 'from-revolux-green via-green-400 to-emerald-500',
      badge: 'SOB MEDIDA',
      borderColor: 'border-revolux-green/30',
      hoverBorder: 'hover:border-revolux-green/60',
      hoverShadow: 'hover:shadow-revolux-green/20',
    },
  ]

  const stats = [
    { value: '150+', label: 'Projetos' },
    { value: '98%', label: 'Satisfação' },
    { value: '5⭐', label: 'Avaliação' },
  ]

  const handleInstagramClick = () => {
    trackLinkClick('Instagram Linktree', `https://instagram.com/${instagram}`)
    window.open(`https://instagram.com/${instagram}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('linktree')
    window.open(`https://wa.me/${whatsappNumber}`, '_blank')
  }

  return (
    <>
      <ScrollTracker />

      <main className="min-h-screen bg-revolux-dark px-4 py-12 md:py-20">
        {/* Background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-revolux-green/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Image
              src="/images/logo-full.png"
              alt="Revolux Digital"
              width={300}
              height={80}
              className="h-20 w-auto mx-auto mb-6 animate-float"
              priority
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Transforme Visitantes em <span className="gradient-text">Clientes</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Landing pages, sites e lojas virtuais que convertem
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Fale Conosco
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                onClick={handleInstagramClick}
                className="inline-flex items-center justify-center gap-2 bg-revolux-dark-light border border-revolux-green/30 text-white px-6 py-3 rounded-full font-bold hover:border-revolux-green hover:shadow-lg hover:shadow-revolux-green/20 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
                @{instagram}
              </motion.button>
            </div>
          </motion.div>

          {/* All Links - Same Style */}
          <div className="space-y-6 mb-8">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => trackLinkClick(link.title, link.href)}
                  className="group block"
                >
                  <div className={`relative bg-revolux-dark-light border-2 ${link.borderColor} rounded-3xl p-6 md:p-8 overflow-hidden ${link.hoverBorder} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${link.hoverShadow}`}>
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />

                    {/* Badge */}
                    {link.badge && (
                      <div className={`absolute top-4 right-4 bg-gradient-to-r ${link.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {link.badge}
                      </div>
                    )}

                    <div className="relative">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${link.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <link.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-xs md:text-sm text-gray-400 font-bold mb-1 uppercase">{link.subtitle}</div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:gradient-text transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-400 mb-3">
                            {link.description}
                          </p>
                          <div className="text-lg md:text-xl font-bold gradient-text">
                            {link.price}
                          </div>
                        </div>

                        <ArrowRight className="h-6 w-6 text-revolux-green group-hover:translate-x-2 transition-transform flex-shrink-0 mt-2 hidden sm:block" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-center pt-8 border-t border-revolux-dark-lighter"
          >
            <p className="text-gray-500 text-sm mb-2">
              Todas as páginas incluem domínio + hospedagem grátis por 12 meses
            </p>
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Revolux Digital. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </main>
    </>
  )
}
