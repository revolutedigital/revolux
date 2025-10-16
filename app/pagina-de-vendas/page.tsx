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
  TrendingUp,
  DollarSign,
  Target,
  Zap,
  CheckCircle,
  Award,
  Users,
  BarChart,
  Clock,
  Sparkles,
  Play,
  ShoppingCart,
} from 'lucide-react'

export default function PaginaDeVendas() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Copy de Vendas Profissional',
      description: 'Textos persuasivos que vendem enquanto você dorme. Framework AIDA aplicado',
    },
    {
      icon: Target,
      title: 'Estrutura Long-Form',
      description: 'Dor → Solução → Prova Social → Garantia → Oferta Irresistível',
    },
    {
      icon: Zap,
      title: 'CTAs Estratégicos',
      description: 'Botões de compra posicionados em momentos-chave da jornada',
    },
    {
      icon: Award,
      title: 'Prova Social Integrada',
      description: 'Seções para depoimentos, resultados e cases de alunos',
    },
    {
      icon: BarChart,
      title: 'Rastreamento Completo',
      description: 'Pixel do Facebook, Google Analytics e conversões configuradas',
    },
    {
      icon: ShoppingCart,
      title: 'Checkout Integrado',
      description: 'Link direto para Hotmart, Eduzz, Monetizze ou plataforma que usar',
    },
  ]

  const included = [
    'Copywriting profissional de vendas',
    'Estrutura long-form persuasiva',
    'Seções: Dor, Solução, Transformação, Prova Social, Garantia, FAQ',
    'Até 5 blocos de depoimentos',
    'Contador de tempo/urgência (opcional)',
    'Múltiplos CTAs estratégicos',
    'Integração com checkout',
    'Meta Pixel + Google Analytics',
    'Responsivo total',
    'Domínio + Hospedagem 12 meses GRÁTIS',
    'SEO otimizado',
    '30 dias de suporte e ajustes',
  ]

  const perfect = [
    {
      title: 'Cursos Online',
      description: 'Venda seu conhecimento de forma automatizada',
    },
    {
      title: 'Mentorias e Treinamentos',
      description: 'Converta visitantes em alunos comprometidos',
    },
    {
      title: 'E-books e Infoprodutos',
      description: 'Demonstre valor e transformação do seu material',
    },
    {
      title: 'Programas de Assinatura',
      description: 'Mostre benefícios recorrentes e gere MRR',
    },
  ]

  const structure = [
    {
      section: 'Headline Magnética',
      description: 'Prende atenção e promete transformação clara',
    },
    {
      section: 'Dor e Problema',
      description: 'Identifica frustrações do público-alvo',
    },
    {
      section: 'Solução Única',
      description: 'Apresenta seu produto como a resposta definitiva',
    },
    {
      section: 'Transformação',
      description: 'Antes vs Depois, vida atual vs vida desejada',
    },
    {
      section: 'Prova Social',
      description: 'Depoimentos, cases e resultados reais',
    },
    {
      section: 'Oferta Irresistível',
      description: 'Preço, bônus, garantia e urgência',
    },
    {
      section: 'FAQ Estratégico',
      description: 'Elimina objeções finais antes da compra',
    },
    {
      section: 'CTA Final Poderoso',
      description: 'Última chance de conversão com urgência',
    },
  ]

  const faqs = [
    {
      question: 'Qual a diferença entre Landing Page e Página de Vendas?',
      answer: 'Landing Page captura LEAD (email). Página de Vendas converte em COMPRA direta. São estratégias diferentes para momentos diferentes do funil.',
    },
    {
      question: 'Vocês escrevem o copy ou eu preciso enviar?',
      answer: 'Nós escrevemos! Você nos passa informações sobre o produto, público, dores e transformações. Nosso copywriter monta a página completa.',
    },
    {
      question: 'Funciona para qualquer nicho?',
      answer: 'SIM! Já criamos páginas para marketing digital, saúde, fitness, desenvolvimento pessoal, finanças, relacionamentos e muito mais.',
    },
    {
      question: 'Posso usar com Hotmart/Eduzz/Monetizze?',
      answer: 'Perfeitamente! Integramos o checkout de qualquer plataforma. O cliente clica no botão e vai direto para o pagamento.',
    },
  ]

  return (
    <>
      <Head>
        <title>Página de Vendas para Infoprodutores | Copywriting que Converte 24/7</title>
        <meta name="description" content="Estrutura long-form com copywriting profissional que vende cursos, mentorias e infoprodutos no automático. Copy de vendas com framework AIDA, prova social integrada e CTAs estratégicos posicionados em momentos-chave da jornada." />
        <meta name="keywords" content="página de vendas, copywriting, infoprodutos, landing page de vendas, copy persuasivo, vendas automáticas, hotmart, eduzz, monetizze, página long-form" />
        <link rel="canonical" href="https://revolux.digital/pagina-de-vendas" />
        <meta property="og:title" content="Página de Vendas para Infoprodutores | Copywriting que Converte 24/7" />
        <meta property="og:description" content="Estrutura long-form com copywriting profissional que vende cursos, mentorias e infoprodutos no automático. Copy de vendas com framework AIDA, prova social integrada e CTAs estratégicos." />
        <meta property="og:url" content="https://revolux.digital/pagina-de-vendas" />
        <meta property="og:site_name" content="Revolux Digital" />
        <meta property="og:type" content="website" />
      </Head>
      <ProductSchema
        name="Página de Vendas de Alta Conversão"
        description="Estrutura long-form com copywriting profissional que vende cursos, mentorias e infoprodutos no automático. Copy de vendas profissional com framework AIDA aplicado, prova social integrada e CTAs estratégicos posicionados em momentos-chave da jornada."
        price="R$ 1.997"
        category="Web Development Services"
      />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        name="Página de Vendas de Alta Conversão"
        description="Estrutura long-form com copywriting profissional que vende cursos, mentorias e infoprodutos no automático. Copy de vendas profissional com framework AIDA aplicado, prova social integrada e CTAs estratégicos posicionados em momentos-chave da jornada."
        price="R$ 1.997"
        category="Web Development Services"
        url="https://revolux.digital/pagina-de-vendas"
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark opacity-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container-revolux relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Play className="inline-block h-5 w-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">Para Infoprodutores</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Página de Vendas que{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Converte 24/7
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Estrutura long-form com <span className="text-blue-400 font-bold">copywriting profissional</span> que vende cursos, mentorias e infoprodutos no automático
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-revolux-dark-light border border-blue-500/30 rounded-2xl px-8 py-4">
                  <div className="text-sm text-gray-400 mb-1">Investimento</div>
                  <div className="text-4xl font-bold gradient-text">R$ 1.997</div>
                  <div className="text-sm text-gray-500">ou 6x de R$ 332,83 sem juros</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-revolux-green">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Entrega em 10-14 dias</span>
                  </div>
                  <div className="flex items-center gap-2 text-revolux-green">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-medium">Copywriter especializado</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
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
                O Que Torna Nossa <span className="gradient-text">Página de Vendas Diferente?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Não é só design. É persuasão científica aplicada ao seu produto.
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
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Structure */}
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
                Estrutura <span className="gradient-text">Comprovada de Conversão</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Seguimos frameworks testados por milhares de infoprodutores
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {structure.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-blue-400">{item.section}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
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
                Perfeito Para <span className="gradient-text">Infoprodutores</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perfect.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false} className="text-center">
                    <CheckCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
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
                    <div className="text-5xl font-bold gradient-text mb-2">R$ 1.997</div>
                    <div className="text-gray-400 mb-4">Copy profissional + domínio/hospedagem grátis por 12 meses</div>
                    <div className="inline-flex items-center gap-2 text-blue-400">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-bold">Taxa de conversão média: 3-5% (vs 0.5-1% sem otimização)</span>
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
                    <h3 className="text-xl font-bold mb-3 text-blue-400">
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
              <TrendingUp className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Comece a Vender <span className="gradient-text">No Automático</span>
              </h2>
              <p className="text-xl text-gray-300">
                Sua página trabalhando 24/7 enquanto você cria mais conteúdo
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <ContactForm formType="sales-page" />
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
