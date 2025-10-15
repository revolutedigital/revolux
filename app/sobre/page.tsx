'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { Portfolio } from '@/components/sections/Portfolio'
import { InstagramVideos } from '@/components/sections/InstagramVideos'
import { trackLinkClick, trackWhatsAppClick } from '@/lib/analytics/analytics'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Palette, ShoppingBag, ArrowRight, Clock, Star, Instagram } from 'lucide-react'

export default function Home() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM || 'revoluxpage'

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero')
    window.open(`https://wa.me/${whatsappNumber}`, '_blank')
  }

  const handleInstagramClick = () => {
    trackLinkClick('Instagram Hero', `https://instagram.com/${instagram}`)
    window.open(`https://instagram.com/${instagram}`, '_blank')
  }

  const services = [
    {
      icon: Palette,
      title: 'Infoprodutores',
      description: 'Páginas de captura para leads e páginas de vendas long-form que convertem',
      href: '/sites-personalizados',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Donos de Negócios',
      description: 'Landing pages de conversão e sites institucionais profissionais',
      href: '/sites-personalizados',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com gestão de produtos e pagamento integrado',
      href: '/sites-personalizados',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const stats = [
    { value: '150+', label: 'Projetos Entregues' },
    { value: '98%', label: 'Satisfação' },
    { value: '24h', label: 'Suporte' },
    { value: '5⭐', label: 'Avaliação' },
  ]

  return (
    <>
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-dark opacity-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-revolux-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="container-revolux relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Logo */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex justify-center"
              >
                <Image
                  src="/images/logo-full.png"
                  alt="Revolux Digital"
                  width={300}
                  height={80}
                  className="h-20 w-auto animate-float"
                  priority
                />
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Transforme
                <span className="gradient-text"> Visitantes em Clientes</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                Landing pages, páginas de vendas, sites institucionais e lojas virtuais estrategicamente projetadas para <span className="text-revolux-green font-bold">transformar visitantes em clientes</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  variant="primary"
                  trackingName="WhatsApp CTA Hero"
                  trackingLocation="hero"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto"
                >
                  Fale Conosco no WhatsApp
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="secondary"
                  trackingName="Instagram CTA Hero"
                  trackingLocation="hero"
                  onClick={handleInstagramClick}
                  className="w-full sm:w-auto"
                >
                  <Instagram className="inline-block mr-2 h-5 w-5" />
                  Siga no Instagram
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-revolux-dark-light">
          <div className="container-revolux">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Para Quem <span className="gradient-text">Nós Trabalhamos</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Soluções estratégicas para cada tipo de negócio digital
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.href}
                    onClick={() => trackLinkClick(service.title, service.href)}
                  >
                    <Card className="h-full relative group">
                      {service.badge && (
                        <div className="absolute top-4 right-4 bg-gradient-revolux text-revolux-dark px-3 py-1 rounded-full text-sm font-bold">
                          {service.badge}
                        </div>
                      )}

                      <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-revolux-green transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 mb-6">
                        {service.description}
                      </p>

                      <div className="flex items-center text-revolux-green font-medium">
                        Saiba mais
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="container-revolux">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Por Que Escolher a <span className="gradient-text">Revolux?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Foco em Conversão',
                  description: 'Cada elemento é projetado para transformar visitantes em clientes pagantes',
                },
                {
                  icon: Star,
                  title: 'Resultados Comprovados',
                  description: '150+ projetos entregues com 98% de taxa de satisfação',
                },
                {
                  icon: Clock,
                  title: 'Entrega Ágil',
                  description: 'Opção expressa de 24h disponível para projetos urgentes',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false} className="text-center">
                    <div className="bg-revolux-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-revolux-green" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <Portfolio />

        {/* Instagram Videos */}
        <InstagramVideos />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-revolux">
          <div className="container-revolux">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-revolux-dark mb-6">
                Pronto Para Aumentar Suas Conversões?
              </h2>
              <p className="text-xl text-revolux-dark/80 mb-8 max-w-2xl mx-auto">
                Fale com nossos especialistas e descubra como multiplicar seus resultados
              </p>
              <Button
                variant="secondary"
                trackingName="WhatsApp CTA Footer"
                trackingLocation="cta-section"
                onClick={handleWhatsAppClick}
                className="bg-revolux-dark text-white hover:bg-revolux-dark-light border-0"
              >
                Falar com Especialista
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
