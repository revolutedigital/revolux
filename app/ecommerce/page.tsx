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
  ShoppingCart,
  Package,
  CreditCard,
  Truck,
  BarChart3,
  Shield,
  CheckCircle,
  Smartphone,
  Search,
  Users,
  Zap,
  Clock,
  DollarSign,
  Settings,
} from 'lucide-react'

export default function Ecommerce() {
  const benefits = [
    {
      icon: ShoppingCart,
      title: 'Loja Completa',
      description: 'Catálogo ilimitado de produtos com fotos, descrições e variações',
    },
    {
      icon: CreditCard,
      title: 'Pagamento Integrado',
      description: 'Mercado Pago, PagSeguro, Stripe - receba por cartão, PIX e boleto',
    },
    {
      icon: Truck,
      title: 'Frete Automático',
      description: 'Integração com Correios e transportadoras para cálculo em tempo real',
    },
    {
      icon: Package,
      title: 'Gestão de Estoque',
      description: 'Controle automático de produtos, avisos de estoque baixo',
    },
    {
      icon: BarChart3,
      title: 'Relatórios Completos',
      description: 'Dashboard com vendas, produtos mais vendidos, ticket médio',
    },
    {
      icon: Users,
      title: 'Área do Cliente',
      description: 'Seus clientes acompanham pedidos, histórico e dados',
    },
  ]

  const included = [
    'Design profissional para e-commerce',
    'Catálogo ilimitado de produtos',
    'Gateway de pagamento integrado',
    'Cálculo de frete automático',
    'Gestão completa de estoque',
    'Cupons de desconto',
    'Área administrativa avançada',
    'Área do cliente (login)',
    'Carrinho de compras otimizado',
    'Checkout em 3 passos',
    'Email marketing automático',
    'Google Analytics + Meta Pixel',
    'SEO para produtos',
    'Responsivo total',
    'Domínio + Hospedagem 12 meses GRÁTIS',
    'Certificado SSL (HTTPS)',
    'Treinamento completo',
    '30 dias de suporte técnico',
  ]

  const features = [
    {
      title: 'Catálogo Inteligente',
      description: 'Organize produtos por categorias, tags, marcas. Filtros e busca avançada',
      icon: Search,
    },
    {
      title: 'Mobile Commerce',
      description: 'Mais de 70% das vendas vêm do celular. Sua loja perfeita em smartphones',
      icon: Smartphone,
    },
    {
      title: 'Checkout Rápido',
      description: '3 passos simples: Dados → Entrega → Pagamento. Menos abandono de carrinho',
      icon: Zap,
    },
    {
      title: 'Painel Administrativo',
      description: 'Gerencie produtos, pedidos, clientes e relatórios em um só lugar',
      icon: Settings,
    },
  ]

  const perfect = [
    'Loja de roupas e acessórios',
    'Produtos digitais e físicos',
    'Dropshipping',
    'Distribuidores e atacado',
    'Artesanato e produtos personalizados',
    'Suplementos e cosméticos',
  ]

  const faqs = [
    {
      question: 'Posso vender produtos físicos e digitais?',
      answer: 'SIM! A plataforma suporta ambos. Produtos físicos com frete, produtos digitais com download automático após pagamento.',
    },
    {
      question: 'Qual gateway de pagamento vocês integram?',
      answer: 'Mercado Pago, PagSeguro, Stripe, Wirecard, PayPal. Você escolhe qual prefere. Todos aceitam cartão, PIX e boleto.',
    },
    {
      question: 'Tem limite de produtos?',
      answer: 'NÃO! Cadastre quantos produtos quiser. Sem limites de categorias ou variações (cores, tamanhos, etc).',
    },
    {
      question: 'Consigo gerenciar sozinho?',
      answer: 'SIM! Painel super intuitivo + treinamento completo. Você consegue adicionar produtos, processar pedidos, tudo sozinho. Mas terá 30 dias de suporte.',
    },
  ]

  return (
    <>
      <ProductSchema
        name="E-commerce Completo"
        description="E-commerce completo com gestão de produtos, pagamento integrado e frete automático. Catálogo ilimitado de produtos, gateway de pagamento integrado, cálculo de frete automático, gestão completa de estoque e área do cliente."
        price="R$ 4.997"
        category="Web Development Services"
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark opacity-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

          <div className="container-revolux relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <ShoppingCart className="inline-block h-5 w-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">Loja Virtual Completa</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Venda Online{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  24/7
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                E-commerce completo com <span className="text-orange-400 font-bold">gestão de produtos, pagamento integrado e frete automático.</span> Venda sem parar.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-revolux-dark-light border border-orange-500/30 rounded-2xl px-8 py-4">
                  <div className="text-sm text-gray-400 mb-1">Investimento</div>
                  <div className="text-4xl font-bold gradient-text">R$ 4.997</div>
                  <div className="text-sm text-gray-500">ou 6x de R$ 832,83 sem juros</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-revolux-green">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Entrega em 21-30 dias</span>
                  </div>
                  <div className="flex items-center gap-2 text-revolux-green">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">30 dias de suporte técnico</span>
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
                Tudo Que Sua Loja <span className="gradient-text">Precisa para Vender</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Não é só um site bonito. É uma máquina de vendas completa.
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
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
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
                Recursos <span className="gradient-text">Avançados</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-orange-400">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
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
                Perfeito Para <span className="gradient-text">Diversos Nichos</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card hover={false}>
                <div className="grid md:grid-cols-2 gap-4">
                  {perfect.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
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
                    <div className="text-5xl font-bold gradient-text mb-2">R$ 4.997</div>
                    <div className="text-gray-400 mb-4">Loja completa + domínio/hospedagem grátis por 12 meses</div>
                    <div className="inline-flex items-center gap-2 text-orange-400">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-bold">Investimento que se paga com suas primeiras vendas online</span>
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
                    <h3 className="text-xl font-bold mb-3 text-orange-400">
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
              <ShoppingCart className="h-16 w-16 text-orange-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Abra Sua Loja <span className="gradient-text">Hoje Mesmo</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comece a vender online 24/7 com uma loja profissional completa
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <ContactForm formType="ecommerce" />
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
