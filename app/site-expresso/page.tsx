'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ContactForm } from '@/components/sections/ContactForm'
import { Portfolio } from '@/components/sections/Portfolio'
import { InstagramVideos } from '@/components/sections/InstagramVideos'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ProductSchema } from '@/components/seo/ProductSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { motion } from 'framer-motion'
import Head from 'next/head'
import {
  Zap,
  Clock,
  Rocket,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

export default function SiteExpresso() {
  const benefits = [
    {
      icon: Clock,
      title: 'HOJE',
      description: 'Sim, você leu certo: fechou hoje, está online amanhã',
    },
    {
      icon: Target,
      title: 'Zero Enrolação',
      description: 'Nada de esperar semanas. Entrega expressa garantida',
    },
    {
      icon: Rocket,
      title: 'Já Convertendo',
      description: 'Sai pronto para capturar leads e gerar vendas imediatamente',
    },
    {
      icon: Sparkles,
      title: 'Design Profissional',
      description: 'Nada de amador. Template premium adaptado à sua marca',
    },
    {
      icon: TrendingUp,
      title: 'Tráfego Pago Ready',
      description: 'Otimizado para Facebook Ads, Google Ads e Instagram',
    },
    {
      icon: CheckCircle,
      title: 'Garantia Total',
      description: '7 dias de ajustes gratuitos. Sua satisfação garantida',
    },
  ]

  const included = [
    'Design responsivo (mobile, tablet, desktop)',
    'Até 3 páginas (Home, Sobre, Contato)',
    'Formulário de contato funcional',
    'Integração com WhatsApp',
    'Google Analytics e Pixel configurados',
    'SEO básico otimizado',
    'Domínio + Hospedagem 12 meses GRÁTIS',
    '30 dias de suporte',
    'Certificado SSL (HTTPS)',
    'Treinamento de uso',
  ]

  const process = [
    {
      time: '0h',
      title: 'Contrato',
      description: 'Fechamos o projeto e você envia os materiais (logo, textos, fotos)',
    },
    {
      time: '2h',
      title: 'Desenvolvimento',
      description: 'Iniciamos a criação do seu site',
    },
    {
      time: '12h',
      title: 'Preview',
      description: 'Enviamos prévia para sua aprovação',
    },
    {
      time: '18h',
      title: 'Ajustes',
      description: 'Fazemos os ajustes solicitados',
    },
    {
      time: '24h',
      title: 'No Ar!',
      description: 'Seu site está online e funcionando',
    },
  ]

  const faqs = [
    {
      question: 'Sério? 24 horas mesmo?',
      answer: 'SIM! Desde que você nos envie o material (logo, textos, imagens) assim que fecharmos. Trabalhamos em regime de urgência e entregamos em 24h úteis.',
    },
    {
      question: 'A qualidade é a mesma de um projeto normal?',
      answer: 'Absolutamente! Usamos templates premium já testados e comprovados. Você ganha velocidade SEM perder qualidade.',
    },
    {
      question: 'Posso rodar tráfego pago direto?',
      answer: 'Pode e DEVE! O site sai 100% pronto para Facebook Ads, Google Ads e Instagram. Com pixel configurado e tudo.',
    },
    {
      question: 'E se eu não gostar?',
      answer: 'Você tem 7 dias de ajustes GRATUITOS. Vamos fazer até você ficar satisfeito.',
    },
  ]

  return (
    <>
      <Head>
        <title>Site Expresso 24h | Landing Page Profissional Entregue Amanhã</title>
        <meta name="description" content="Entregamos landing pages profissionais em 24 horas, otimizadas para conversão e prontas para gerar vendas. Design responsivo, formulário de contato funcional, integração com WhatsApp, Google Analytics e Pixel configurados, SEO básico otimizado." />
        <meta name="keywords" content="site 24 horas, landing page rápida, site urgente, entrega rápida, site expresso, landing page profissional, site em 1 dia, urgência" />
        <link rel="canonical" href="https://revolux.digital/site-expresso" />
        <meta property="og:title" content="Site Expresso 24h | Landing Page Profissional Entregue Amanhã" />
        <meta property="og:description" content="Entregamos landing pages profissionais em 24 horas, otimizadas para conversão e prontas para gerar vendas. Design responsivo e pronto para tráfego pago." />
        <meta property="og:url" content="https://revolux.digital/site-expresso" />
        <meta property="og:site_name" content="Revolux Digital" />
        <meta property="og:type" content="website" />
      </Head>
      <ProductSchema
        name="Site Expresso 24h"
        description="Entregamos landing pages profissionais em 24 horas, otimizadas para conversão e prontas para gerar vendas. Design responsivo, formulário de contato funcional, integração com WhatsApp, Google Analytics e Pixel configurados, SEO básico otimizado."
        price="R$ 2.197"
        category="Web Development Services"
      />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        name="Site Expresso 24h"
        description="Entregamos landing pages profissionais em 24 horas, otimizadas para conversão e prontas para gerar vendas. Design responsivo, formulário de contato funcional, integração com WhatsApp, Google Analytics e Pixel configurados, SEO básico otimizado."
        price="R$ 2.197"
        category="Web Development Services"
        url="https://revolux.digital/site-expresso"
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark opacity-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="container-revolux relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                <Zap className="inline-block h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-medium">Entrega em 24 Horas</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Seu Site No Ar{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Em 24 Horas
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                <span className="text-yellow-400 font-bold">Precisa urgente?</span> Entregamos landing pages profissionais em 24 horas, otimizadas para conversão e prontas para gerar vendas <span className="text-revolux-green font-bold">HOJE MESMO</span>
              </p>

              <div className="inline-flex items-center gap-4 bg-revolux-dark-light border border-revolux-green/30 rounded-full px-6 py-3">
                <Clock className="h-6 w-6 text-revolux-green" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">A partir de</div>
                  <div className="text-2xl font-bold gradient-text">R$ 2.197</div>
                  <div className="text-xs text-gray-500">ou 6x de R$ 366,17 sem juros</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
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
                Por Que <span className="gradient-text">24 Horas?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Porque você não pode esperar semanas enquanto seus concorrentes capturam seus clientes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
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
                Como Funciona a <span className="gradient-text">Entrega Expressa</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Processo ágil e transparente em 24 horas
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-revolux flex items-center justify-center text-revolux-dark font-bold text-lg">
                      {step.time}
                    </div>
                  </div>
                  <Card hover={false} className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 bg-revolux-dark-light">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                O Que Está <span className="gradient-text">Incluído</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="grid md:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-revolux-dark-lighter">
                  <div className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <AlertCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <div className="font-bold text-yellow-400 mb-1">ATENÇÃO - Para garantir 24h</div>
                      <div className="text-sm text-gray-300">
                        <span className="font-bold">Envie IMEDIATAMENTE:</span> Logo, cores da marca, textos e imagens. Quanto mais rápido você enviar, mais rápido estará online gerando resultados.
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Perguntas <span className="gradient-text">Frequentes</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <h3 className="text-xl font-bold mb-3 text-revolux-green">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <Portfolio />

        {/* Instagram Videos */}
        <InstagramVideos />

        {/* Contact Form */}
        <section className="py-20 px-4 bg-revolux-dark-light">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Rocket className="h-16 w-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Cada Hora Perdida = <span className="gradient-text">Dinheiro na Mesa</span>
              </h2>
              <p className="text-xl text-gray-300">
                Feche agora e receba seu site amanhã. Literalmente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <ContactForm formType="express" />
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
