'use client'

import { Card } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { trackLinkClick } from '@/lib/analytics/analytics'

interface Project {
  title: string
  category: string
  description: string
  results?: string
  image: string
  tags: string[]
  color: string
}

export function Portfolio() {
  const projects: Project[] = [
    {
      title: 'Velozes & Famintos',
      category: 'E-commerce / Delivery App',
      description: 'Landing page para app de delivery com cashback real. Foco em conversão e download do app.',
      results: '+400% downloads em 30 dias',
      image: '/images/portfolio/velozes-famintos.webp',
      tags: ['Landing Page', 'App', 'Cashback'],
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Retiro de Implementação',
      category: 'Página de Vendas - Evento',
      description: 'Página de vendas para retiro presencial focado em alta performance e fechamento de contratos.',
      results: '2 mil reais por semana em vendas',
      image: '/images/portfolio/retiro.webp',
      tags: ['Página de Vendas', 'Evento', 'High-Ticket'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Imersão Talentos',
      category: 'Site Institucional - RH',
      description: 'Site corporativo para consultoria de RH com foco em recrutamento estratégico e headhunting.',
      results: '3x mais leads qualificados',
      image: '/images/portfolio/imersao.webp',
      tags: ['Site Institucional', 'B2B', 'Corporativo'],
      color: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Mapa do Produto Digital',
      category: 'Landing Page - Infoproduto',
      description: 'Landing page para curso sobre criação de produtos digitais rentáveis em 30 dias.',
      results: '5% taxa de conversão',
      image: '/images/portfolio/mapa-produto.webp',
      tags: ['Landing Page', 'Infoproduto', 'Curso'],
      color: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Gracie Barra Highland Village',
      category: 'Site Institucional - Sports',
      description: 'Website internacional para academia de Brazilian Jiu-Jitsu nos EUA.',
      results: '+60% trial class bookings',
      image: '/images/portfolio/gracie-barra.webp',
      tags: ['Site Institucional', 'Internacional', 'Esportes'],
      color: 'from-red-600 to-blue-600',
    },
  ]

  return (
    <section className="py-20 px-4 bg-revolux-dark-light">
      <div className="container-revolux">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-revolux-green/10 border border-revolux-green/30 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="inline-block h-5 w-5 text-revolux-green mr-2" />
            <span className="text-revolux-green font-medium">150+ Projetos Entregues</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos que <span className="gradient-text">Geram Resultados Reais</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja alguns dos sites que criamos e os resultados que geraram para nossos clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover={true} className="h-full overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-64 bg-revolux-dark mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-revolux-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <ExternalLink className="h-8 w-8 text-revolux-green mx-auto mb-2" />
                      <p className="text-white text-sm">Ver detalhes</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-revolux-green/10 text-revolux-green rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-revolux-green transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 font-medium">{project.category}</p>

                  <p className="text-gray-400">{project.description}</p>

                  {project.results && (
                    <div className="pt-4 border-t border-revolux-dark-lighter">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-revolux-green" />
                        <span className="text-sm font-bold text-revolux-green">{project.results}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Quer resultados assim no seu negócio?</p>
          <button
            onClick={() => {
              trackLinkClick('Portfolio CTA', '/sobre')
              window.location.href = '/sobre'
            }}
            className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300 hover:scale-105"
          >
            Ver Mais Projetos
            <ExternalLink className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
