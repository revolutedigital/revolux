'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ContactForm } from '@/components/sections/ContactForm'
import { Portfolio } from '@/components/sections/Portfolio'
import { InstagramVideos } from '@/components/sections/InstagramVideos'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ProductSchema } from '@/components/seo/ProductSchema'
import { motion } from 'framer-motion'
import {
  Target,
  TrendingUp,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  BarChart,
  Smartphone,
  Clock,
  DollarSign,
} from 'lucide-react'

export default function LandingPageProduct() {
  const benefits = [
    {
      icon: Target,
      title: 'Foco Total em Conversão',
      description: 'Cada elemento posicionado estrategicamente para transformar visitantes em leads',
    },
    {
      icon: TrendingUp,
      title: 'Copy que Vende',
      description: 'Textos persuasivos que convencem seu público a tomar ação imediata',
    },
    {
      icon: Zap,
      title: 'Carregamento Ultra-Rápido',
      description: 'Performance otimizada para não perder nenhum visitante por lentidão',
    },
    {
      icon: Users,
      title: 'Otimizado para Tráfego Pago',
      description: 'Pixel configurado e pronto para Facebook Ads, Google Ads e Instagram',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Perfeito em celulares onde 80% do seu público está',
    },
    {
      icon: BarChart,
      title: 'Analytics Completo',
      description: 'Google Analytics e rastreamento configurados para medir resultados',
    },
  ]

  const included = [
    'Design estratégico de alta conversão',
    'Copywriting persuasivo focado em ação',
    'Formulário de captura otimizado',
    'Integração com WhatsApp Business',
    'Google Analytics + Meta Pixel configurados',
    'SEO otimizado para Google',
    'Responsivo (mobile, tablet, desktop)',
    'Domínio + Hospedagem 12 meses GRÁTIS',
    'Certificado SSL (HTTPS)',
    '30 dias de suporte e ajustes',
  ]

  const useCases = [
    {
      title: 'Captura de Leads',
      description: 'Construa sua lista de contatos para nutrição e vendas futuras',
    },
    {
      title: 'Lançamentos',
      description: 'Crie urgência e antecipação para o lançamento do seu produto',
    },
    {
      title: 'Webinários',
      description: 'Inscreva participantes para suas aulas e treinamentos online',
    },
    {
      title: 'E-books e Materiais',
      description: 'Distribua conteúdo rico em troca de informações de contato',
    },
  ]

  const faqs = [
    {
      question: 'Qual a diferença entre Landing Page e Site?',
      answer: 'Landing Page tem UMA única ação (capturar lead, venda). Site tem múltiplas páginas e objetivos. Landing Page converte MUITO mais.',
    },
    {
      question: 'Posso usar para tráfego pago?',
      answer: 'SIM! A página já sai com Meta Pixel e Google Analytics configurados. Pronta para Facebook Ads, Google Ads e Instagram.',
    },
    {
      question: 'Quantos leads vou capturar?',
      answer: 'Depende do seu tráfego e oferta. Mas nossas landing pages têm taxa de conversão média de 15-25%, muito acima da média de mercado (2-5%).',
    },
    {
      question: 'Posso integrar com meu CRM?',
      answer: 'Sim! Integramos com RD Station, HubSpot, ActiveCampaign, Mailchimp e outras ferramentas via Zapier ou webhooks.',
    },
  ]

  return (
    <>
      <ProductSchema
        name="Landing Page de Alta Conversão"
        description="Landing page estratégica focada em UMA ação: capturar o contato do seu cliente ideal e transformá-lo em venda. Design estratégico de alta conversão com copywriting persuasivo, formulário de captura otimizado e integração completa com ferramentas de marketing."
        price="R$ 1.497"
        category="Web Development Services"
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark opacity-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

          <div className="container-revolux relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <Target className="inline-block h-5 w-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Landing Page de Alta Conversão</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Capture Leads e{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Multiplique Vendas
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Landing page estratégica focada em <span className="text-purple-400 font-bold">UMA ação:</span> capturar o contato do seu cliente ideal e transformá-lo em venda
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-revolux-dark-light border border-purple-500/30 rounded-2xl px-8 py-4">
                  <div className="text-sm text-gray-400 mb-1">Investimento</div>
                  <div className="text-4xl font-bold gradient-text">R$ 1.497</div>
                  <div className="text-sm text-gray-500">ou 6x de R$ 249,50 sem juros</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-revolux-green">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Entrega em 7-10 dias</span>
                  </div>
                  <div className="flex items-center gap-2 text-revolux-green">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">30 dias de suporte</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <DollarSign className="h-5 w-5" />
                    <span className="font-medium">Até 6x sem juros</span>
                  </div>
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
                Por Que Nossa <span className="gradient-text">Landing Page Converte Mais?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Não é só bonita. É estratégica. Cada elemento pensado para converter.
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
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
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
                Perfeito Para <span className="gradient-text">Múltiplas Estratégias</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-purple-400">{useCase.title}</h3>
                        <p className="text-gray-400">{useCase.description}</p>
                      </div>
                    </div>
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
                Tudo Que Está <span className="gradient-text">Incluído</span>
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
                  <div className="text-center">
                    <div className="text-5xl font-bold gradient-text mb-2">R$ 1.497</div>
                    <div className="text-gray-400 mb-4">Investimento único + 12 meses de domínio/hospedagem grátis</div>
                    <div className="inline-flex items-center gap-2 text-revolux-green">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-bold">ROI comprovado: cada real investido retorna 10x em vendas</span>
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
                    <h3 className="text-xl font-bold mb-3 text-purple-400">
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

        {/* CTA */}
        <section className="py-20 px-4 bg-revolux-dark-light">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Target className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Comece a Capturar <span className="gradient-text">Leads Hoje</span>
              </h2>
              <p className="text-xl text-gray-300">
                Cada dia sem landing page é dinheiro deixado na mesa
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <ContactForm formType="landing-page" />
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
