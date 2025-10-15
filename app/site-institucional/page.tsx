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
  Layout,
  Building2,
  Users,
  Award,
  CheckCircle,
  Globe,
  Mail,
  Phone,
  FileText,
  Image as ImageIcon,
  Search,
  Shield,
  Clock,
  DollarSign,
} from 'lucide-react'

export default function SiteInstitucional() {
  const benefits = [
    {
      icon: Building2,
      title: 'Presença Profissional',
      description: 'Site completo que transmite credibilidade e profissionalismo da sua empresa',
    },
    {
      icon: Search,
      title: 'Otimizado para Google',
      description: 'SEO configurado para aparecer nas buscas quando procurarem seu serviço',
    },
    {
      icon: Users,
      title: 'Múltiplas Páginas',
      description: 'Até 5 páginas para contar toda a história da sua empresa',
    },
    {
      icon: Mail,
      title: 'Formulários de Contato',
      description: 'Capture leads de clientes interessados nos seus serviços',
    },
    {
      icon: Globe,
      title: 'Blog Integrado',
      description: 'Publique artigos e conquiste autoridade no seu mercado',
    },
    {
      icon: Shield,
      title: 'Área Administrativa',
      description: 'Painel simples para você atualizar conteúdos sem programar',
    },
  ]

  const pages = [
    {
      title: 'Home',
      description: 'Primeira impressão poderosa com seus diferenciais',
    },
    {
      title: 'Sobre',
      description: 'História, missão, valores e equipe da empresa',
    },
    {
      title: 'Serviços/Produtos',
      description: 'Detalhamento de tudo que você oferece',
    },
    {
      title: 'Portfólio/Cases',
      description: 'Mostre projetos e resultados entregues',
    },
    {
      title: 'Contato',
      description: 'Formulário, localização, horários e canais',
    },
  ]

  const included = [
    'Design profissional corporativo',
    'Até 5 páginas completas',
    'Blog integrado para artigos',
    'Área administrativa (CMS)',
    'Formulários de contato',
    'Galeria de imagens/portfólio',
    'Integração WhatsApp Business',
    'Google Maps integrado',
    'Google Analytics + Search Console',
    'SEO otimizado',
    'Responsivo total',
    'Domínio + Hospedagem 12 meses GRÁTIS',
    'Certificado SSL (HTTPS)',
    'Treinamento de uso do painel',
    '30 dias de suporte técnico',
  ]

  const perfect = [
    'Escritórios de advocacia, contabilidade, arquitetura',
    'Clínicas médicas e odontológicas',
    'Consultorias e agências',
    'Empresas de serviços B2B',
    'Indústrias e distribuidores',
    'Escolas e instituições de ensino',
  ]

  const faqs = [
    {
      question: 'Quantas páginas posso ter?',
      answer: 'Até 5 páginas estão incluídas (Home, Sobre, Serviços, Portfólio, Contato). Páginas adicionais podem ser incluídas por valor extra.',
    },
    {
      question: 'Consigo atualizar o site sozinho?',
      answer: 'SIM! Você recebe acesso a um painel administrativo simples. Pode atualizar textos, imagens, adicionar posts no blog, tudo sem precisar programar.',
    },
    {
      question: 'O site vai aparecer no Google?',
      answer: 'Sim! Fazemos todo o SEO básico e cadastramos no Google Search Console. Com o blog, você pode criar conteúdo e ganhar mais visibilidade orgânica.',
    },
    {
      question: 'Posso usar meu domínio atual?',
      answer: 'Perfeitamente! Se já tem um domínio registrado, podemos usá-lo. Caso contrário, registramos um novo gratuito por 12 meses.',
    },
  ]

  return (
    <>
      <ProductSchema
        name="Site Institucional Profissional"
        description="Site institucional completo que transmite credibilidade, gera autoridade e converte visitantes em clientes corporativos. Design profissional corporativo com até 5 páginas, blog integrado, área administrativa e SEO otimizado para Google."
        price="R$ 2.997"
        category="Web Development Services"
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark opacity-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="container-revolux relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <Building2 className="inline-block h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Para Empresas</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Presença Digital{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Profissional
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Site institucional completo que <span className="text-green-400 font-bold">transmite credibilidade,</span> gera autoridade e converte visitantes em clientes corporativos
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-revolux-dark-light border border-green-500/30 rounded-2xl px-8 py-4">
                  <div className="text-sm text-gray-400 mb-1">Investimento</div>
                  <div className="text-4xl font-bold gradient-text">R$ 2.997</div>
                  <div className="text-sm text-gray-500">ou 6x de R$ 499,50 sem juros</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-revolux-green">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Entrega em 14-21 dias</span>
                  </div>
                  <div className="flex items-center gap-2 text-revolux-green">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Painel administrativo incluído</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
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
                Muito Mais que um <span className="gradient-text">Cartão de Visitas Digital</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Plataforma completa para sua empresa brilhar online
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
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pages Structure */}
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
                Estrutura <span className="gradient-text">Completa</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Até 5 páginas para contar toda a história da sua empresa
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-green-400">{page.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{page.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect For */}
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
                Ideal Para <span className="gradient-text">Seu Segmento</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card hover={false}>
                <div className="grid md:grid-cols-2 gap-4">
                  {perfect.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
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
                    <div className="text-5xl font-bold gradient-text mb-2">R$ 2.997</div>
                    <div className="text-gray-400 mb-4">Plataforma completa + domínio/hospedagem grátis por 12 meses</div>
                    <div className="inline-flex items-center gap-2 text-green-400">
                      <Building2 className="h-5 w-5" />
                      <span className="font-bold">Solução profissional para empresas que querem crescer online</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
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
                    <h3 className="text-xl font-bold mb-3 text-green-400">
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
              <Building2 className="h-16 w-16 text-green-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Coloque Sua Empresa <span className="gradient-text">No Mapa Digital</span>
              </h2>
              <p className="text-xl text-gray-300">
                Credibilidade profissional que converte visitantes em clientes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <ContactForm formType="site-institucional" />
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
