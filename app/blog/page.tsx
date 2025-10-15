'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { motion } from 'framer-motion'
import { BookOpen, Clock, ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { trackLinkClick } from '@/lib/analytics/analytics'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  keywords: string[]
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      slug: 'como-criar-landing-page-alta-conversao',
      title: 'Como Criar Landing Page de Alta Conversão em 2025',
      excerpt: 'Descubra as técnicas comprovadas para criar landing pages que convertem visitantes em leads qualificados. Guia completo com exemplos práticos.',
      category: 'Landing Pages',
      readTime: '8 min',
      date: '15 Jan 2025',
      keywords: ['landing page', 'conversão', 'leads', 'CTA']
    },
    {
      slug: 'pagina-vendas-infoprodutos-guia-completo',
      title: 'Página de Vendas para Infoprodutos: Guia Completo 2025',
      excerpt: 'Aprenda a estrutura exata de uma página de vendas persuasiva que converte visitantes em compradores. Ideal para cursos online e infoprodutos.',
      category: 'Página de Vendas',
      readTime: '10 min',
      date: '12 Jan 2025',
      keywords: ['página de vendas', 'infoproduto', 'copywriting']
    },
    {
      slug: 'site-institucional-empresas-b2b',
      title: 'Site Institucional para Empresas B2B: O Que Não Pode Faltar',
      excerpt: 'Entenda por que um site institucional profissional é essencial para empresas B2B e quais elementos são indispensáveis para gerar credibilidade.',
      category: 'Site Institucional',
      readTime: '7 min',
      date: '10 Jan 2025',
      keywords: ['site institucional', 'B2B', 'presença digital']
    },
    {
      slug: 'ecommerce-inteligencia-artificial-2025',
      title: 'E-commerce com Inteligência Artificial: Tendências 2025',
      excerpt: 'Descubra como a IA está revolucionando o e-commerce com personalização, chatbots e análise preditiva. O futuro das lojas virtuais já chegou.',
      category: 'E-commerce',
      readTime: '9 min',
      date: '08 Jan 2025',
      keywords: ['e-commerce', 'IA', 'loja virtual', 'automação']
    },
    {
      slug: 'chatbot-whatsapp-business-ia',
      title: 'Chatbot com IA para WhatsApp Business: Guia Prático',
      excerpt: 'Aprenda como implementar um chatbot inteligente no WhatsApp Business para automatizar atendimento, qualificar leads e aumentar vendas 24/7.',
      category: 'Automação e IA',
      readTime: '11 min',
      date: '05 Jan 2025',
      keywords: ['chatbot', 'IA', 'WhatsApp', 'automação']
    },
    {
      slug: 'landing-page-otimizada-google-ads',
      title: 'Landing Page Otimizada para Google Ads: Checklist Completo',
      excerpt: 'Maximize seu ROI em tráfego pago com landing pages otimizadas para Google Ads. Pixel configurado, formulários estratégicos e copy persuasivo.',
      category: 'Landing Pages',
      readTime: '6 min',
      date: '03 Jan 2025',
      keywords: ['landing page', 'Google Ads', 'tráfego pago']
    },
    {
      slug: 'copywriting-pagina-vendas-converte',
      title: 'Copywriting para Página de Vendas que Converte',
      excerpt: 'Domine as técnicas de copywriting persuasivo para criar páginas de vendas irresistíveis. Framework AIDA, gatilhos mentais e CTAs estratégicos.',
      category: 'Página de Vendas',
      readTime: '12 min',
      date: '01 Jan 2025',
      keywords: ['copywriting', 'página de vendas', 'conversão']
    },
    {
      slug: 'seo-local-site-institucional',
      title: 'SEO Local para Site Institucional: Como Aparecer no Google',
      excerpt: 'Estratégias de SEO local para fazer seu site institucional aparecer quando clientes procurarem por seus serviços na sua região.',
      category: 'Site Institucional',
      readTime: '8 min',
      date: '29 Dez 2024',
      keywords: ['SEO local', 'site institucional', 'Google']
    },
    {
      slug: 'social-commerce-instagram-vendas',
      title: 'Social Commerce: Como Vender pelo Instagram em 2025',
      excerpt: 'Transforme seu Instagram em uma máquina de vendas com social commerce. Live shopping, catálogo integrado e checkout nativo.',
      category: 'E-commerce',
      readTime: '7 min',
      date: '27 Dez 2024',
      keywords: ['social commerce', 'Instagram', 'vendas']
    },
    {
      slug: 'automacao-processos-ia-empresas',
      title: 'Automação de Processos com IA para Empresas',
      excerpt: 'Como a automação inteligente está economizando horas de trabalho manual e multiplicando resultados em empresas de todos os tamanhos.',
      category: 'Automação e IA',
      readTime: '10 min',
      date: '25 Dez 2024',
      keywords: ['automação', 'IA', 'processos', 'empresas']
    },
  ]

  const categories = ['Todos', 'Landing Pages', 'Página de Vendas', 'Site Institucional', 'E-commerce', 'Automação e IA']

  return (
    <>
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
                <BookOpen className="inline-block h-5 w-5 text-revolux-green mr-2" />
                <span className="text-revolux-green font-medium">Blog Revolux</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Conteúdos Sobre <span className="gradient-text">Marketing Digital</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Guias, estratégias e tendências para você dominar landing pages, páginas de vendas, e-commerce e automação com IA
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4 bg-revolux-dark-light">
          <div className="container-revolux">
            {/* Categories Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center mb-16"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    category === 'Todos'
                      ? 'bg-revolux-green text-revolux-dark border-revolux-green font-bold'
                      : 'bg-revolux-dark border-revolux-dark-lighter text-gray-300 hover:border-revolux-green hover:text-revolux-green'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={() => trackLinkClick(`Blog Post: ${post.title}`, `/blog/${post.slug}`)}
                  >
                    <Card hover={true} className="h-full flex flex-col">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-block bg-revolux-green/10 text-revolux-green text-xs font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-revolux-green transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 mb-4 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-revolux-dark-lighter">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime} de leitura</span>
                        </div>
                        <span>{post.date}</span>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 mt-4 text-revolux-green font-medium group-hover:gap-3 transition-all">
                        <span>Ler artigo</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card>
                <TrendingUp className="h-16 w-16 text-revolux-green mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4">
                  Pronto para <span className="gradient-text">Aplicar Essas Estratégias?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Deixe a Revolux criar seu site otimizado com todas essas técnicas
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300 hover:scale-105"
                >
                  Ver Nossos Serviços
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
