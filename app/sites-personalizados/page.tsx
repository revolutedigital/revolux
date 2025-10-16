'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ContactForm } from '@/components/sections/ContactForm'
import { Portfolio } from '@/components/sections/Portfolio'
import { InstagramVideos } from '@/components/sections/InstagramVideos'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { motion } from 'framer-motion'
import Head from 'next/head'
import {
  Code,
  Bot,
  Zap,
  Workflow,
  Database,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Cpu,
  BarChart,
  Clock,
  Target,
  Users,
  Rocket,
} from 'lucide-react'

export default function SitesPersonalizados() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Sistemas web personalizados, ERPs, CRMs e plataformas sob medida para seu negócio',
      features: [
        'Dashboards e painéis gerenciais',
        'Sistemas de gestão customizados',
        'Integrações com APIs e serviços',
        'Automação de processos internos',
      ],
    },
    {
      icon: Bot,
      title: 'Atendentes de IA',
      description: 'Chatbots inteligentes que atendem seus clientes 24/7 com respostas personalizadas',
      features: [
        'WhatsApp Business automatizado',
        'Chat para site com IA',
        'Qualificação automática de leads',
        'Integração com CRM',
      ],
    },
    {
      icon: Workflow,
      title: 'Automações Personalizadas',
      description: 'Fluxos automatizados que economizam horas do seu time e eliminam trabalho manual',
      features: [
        'Integração entre plataformas (Zapier/Make)',
        'Automatização de emails e follow-ups',
        'Scraping e coleta de dados',
        'Relatórios automáticos',
      ],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Economia de Tempo',
      description: 'Automatize tarefas repetitivas e libere seu time para o que importa',
    },
    {
      icon: Target,
      title: 'Sob Medida',
      description: 'Desenvolvemos exatamente o que você precisa, não soluções prontas genéricas',
    },
    {
      icon: Sparkles,
      title: 'Tecnologia Moderna',
      description: 'IA, automação e as melhores tecnologias do mercado',
    },
    {
      icon: Users,
      title: 'Suporte Dedicado',
      description: 'Time técnico disponível para manutenção e evolução contínua',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Entendemos seu processo, dor e objetivo de negócio',
    },
    {
      step: '02',
      title: 'Proposta Técnica',
      description: 'Apresentamos solução, tecnologias e cronograma detalhado',
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description: 'Criamos o sistema/automação com entregas incrementais',
    },
    {
      step: '04',
      title: 'Homologação',
      description: 'Você testa e validamos juntos antes de ir para produção',
    },
    {
      step: '05',
      title: 'Deploy',
      description: 'Colocamos no ar e treinamos seu time',
    },
    {
      step: '06',
      title: 'Suporte',
      description: 'Manutenção, melhorias e suporte contínuo',
    },
  ]

  const useCases = [
    {
      title: 'Sistema de Gestão Interna',
      description: 'Dashboard customizado para controlar operações, equipes e KPIs em tempo real',
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Chatbot WhatsApp IA',
      description: 'Atendente virtual que responde clientes, qualifica leads e agenda reuniões automaticamente',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Automação de Vendas',
      description: 'Fluxo completo: lead entra → IA qualifica → agenda na agenda → follow-up automático',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Integração de Sistemas',
      description: 'Conecte diferentes ferramentas (CRM + Planilhas + Email + WhatsApp) em um único fluxo',
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const faqs = [
    {
      question: 'Quanto custa um projeto personalizado?',
      answer: 'Depende da complexidade. Projetos simples de automação começam em R$ 3.000. Sistemas completos e chatbots de IA a partir de R$ 8.000. Fazemos proposta após entender sua necessidade.',
    },
    {
      question: 'Quanto tempo leva?',
      answer: 'Automações simples: 1-2 semanas. Chatbots de IA: 2-4 semanas. Sistemas completos: 1-3 meses. Trabalhamos com entregas incrementais.',
    },
    {
      question: 'Vocês dão manutenção depois?',
      answer: 'SIM! Todos os projetos incluem período de garantia. Depois oferecemos planos de manutenção mensal para evoluções e suporte técnico.',
    },
    {
      question: 'Preciso saber programar?',
      answer: 'NÃO! Entregamos tudo funcionando + treinamento. Você só usa. Para automações, criamos interfaces visuais simples quando necessário.',
    },
  ]

  return (
    <>
      <Head>
        <title>Desenvolvimento Web Personalizado | Sistemas, IA e Automações</title>
        <meta name="description" content="Desenvolvemos soluções personalizadas que automatizam processos, economizam horas e multiplicam resultados com inteligência artificial. Sistemas web customizados, chatbots de IA, automações e integrações sob medida para seu negócio." />
        <meta name="keywords" content="desenvolvimento personalizado, sistema web, chatbot IA, automação, inteligência artificial, desenvolvimento sob medida, CRM customizado, ERP personalizado, WhatsApp bot, integração de sistemas" />
        <link rel="canonical" href="https://revolux.digital/sites-personalizados" />
        <meta property="og:title" content="Desenvolvimento Web Personalizado | Sistemas, IA e Automações" />
        <meta property="og:description" content="Desenvolvemos soluções personalizadas que automatizam processos e multiplicam resultados com IA. Sistemas web, chatbots, automações e integrações sob medida." />
        <meta property="og:url" content="https://revolux.digital/sites-personalizados" />
        <meta property="og:site_name" content="Revolux Digital" />
        <meta property="og:type" content="website" />
      </Head>
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        name="Desenvolvimento Web Personalizado"
        description="Desenvolvemos soluções personalizadas que automatizam processos, economizam horas e multiplicam resultados com inteligência artificial. Sistemas web customizados, chatbots de IA, automações e integrações sob medida para seu negócio."
        price="R$ 3.000"
        category="Web Development Services"
        url="https://revolux.digital/sites-personalizados"
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
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
              <div className="inline-block bg-revolux-green/10 border border-revolux-green/30 rounded-full px-4 py-2 mb-6">
                <Cpu className="inline-block h-5 w-5 text-revolux-green mr-2" />
                <span className="text-revolux-green font-medium">Desenvolvimento Personalizado</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Sistemas, Automações e{' '}
                <span className="gradient-text">IA Sob Medida</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                Desenvolvemos <span className="text-revolux-green font-bold">soluções personalizadas</span> que automatizam processos, economizam horas e multiplicam resultados com inteligência artificial
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="inline-flex items-center gap-3 bg-revolux-dark-light border border-revolux-green/30 rounded-full px-6 py-3">
                  <Clock className="h-6 w-6 text-revolux-green" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Projetos a partir de</div>
                    <div className="text-lg font-bold gradient-text">R$ 3.000</div>
                    <div className="text-xs text-gray-500">Pagamento facilitado</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
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
                O Que <span className="gradient-text">Desenvolvemos</span>
              </h2>
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
                  <Card hover={false} className="h-full">
                    <div className="bg-revolux-green/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-revolux-green" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-revolux-green flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                Exemplos de <span className="gradient-text">Projetos Reais</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center flex-shrink-0`}>
                        <useCase.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-revolux-green">{useCase.title}</h3>
                        <p className="text-gray-400">{useCase.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                Por Que <span className="gradient-text">Personalizado?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false} className="text-center">
                    <div className="bg-revolux-green/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-7 w-7 text-revolux-green" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
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
                Como <span className="gradient-text">Trabalhamos</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
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

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Sparkles className="h-16 w-16 text-revolux-green mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Vamos Criar Sua <span className="gradient-text">Solução Personalizada?</span>
              </h2>
              <p className="text-xl text-gray-300">
                Conte sua necessidade e vamos desenvolver a solução ideal
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <ContactForm formType="custom" />
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
