import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como Criar Landing Page de Alta Conversão em 2025 | Guia Completo',
  description: 'Descubra as técnicas comprovadas para criar landing pages que convertem visitantes em leads qualificados. Guia completo com exemplos práticos, CTAs estratégicos e otimização de formulários.',
  keywords: ['landing page', 'conversão', 'leads', 'CTA', 'página de captura', 'marketing digital', 'otimização de conversão'],
  openGraph: {
    title: 'Como Criar Landing Page de Alta Conversão em 2025',
    description: 'Técnicas comprovadas para criar landing pages que convertem visitantes em leads qualificados',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
    authors: ['Revolux Digital'],
    tags: ['landing page', 'conversão', 'leads', 'CTA', 'marketing digital'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como Criar Landing Page de Alta Conversão em 2025',
    description: 'Técnicas comprovadas para criar landing pages que convertem visitantes em leads qualificados',
  },
}

'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, Target, TrendingUp, Zap, Users } from 'lucide-react'
import Link from 'next/link'

export default function LandingPageAltaConversao() {
  return (
    <>
      <ArticleSchema
        title="Como Criar Landing Page de Alta Conversão em 2025 | Guia Completo"
        description="Descubra as técnicas comprovadas para criar landing pages que convertem visitantes em leads qualificados. Guia completo com exemplos práticos, CTAs estratégicos e otimização de formulários."
        publishedDate="2025-01-15T00:00:00Z"
        slug="como-criar-landing-page-alta-conversao"
        keywords={['landing page', 'conversão', 'leads', 'CTA', 'página de captura', 'marketing digital', 'otimização de conversão']}
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        {/* Article Hero */}
        <section className="relative pt-32 pb-12 px-4">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-revolux-green hover:underline mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o Blog
              </Link>

              <span className="inline-block bg-purple-500/10 text-purple-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Landing Pages
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Como Criar Landing Page de <span className="gradient-text">Alta Conversão</span> em 2025
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>15 de Janeiro, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Landing pages são a arma secreta de quem vende online. Enquanto um site comum tem múltiplos objetivos e páginas, uma landing page tem UMA missão: converter visitantes em leads ou clientes. Neste guia, você vai aprender exatamente como criar uma landing page que converte.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 px-4 bg-revolux-dark-light">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <Card>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Target className="h-8 w-8 text-revolux-green" />
                  O Que é Landing Page de Alta Conversão?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Uma landing page de alta conversão é uma página focada em UMA ação específica: capturar um email, vender um produto, inscrever em um webinar. A taxa média de conversão de landing pages é de 2-5%, mas as melhores chegam a 15-25%.
                </p>

                <div className="bg-revolux-green/10 border border-revolux-green/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-revolux-green mb-3">💡 Dado Importante</h3>
                  <p className="text-gray-300 mb-0">
                    Segundo estudos recentes, landing pages específicas convertem até <strong>5x mais</strong> que homepages genéricas. Isso porque eliminam distrações e focam 100% na oferta.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-revolux-green" />
                  Elementos Essenciais de Uma Landing Page Que Converte
                </h2>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">1. Headline Magnética</h3>
                    <p className="text-gray-300 mb-3">
                      Sua headline tem 3 segundos para prender a atenção. Ela deve comunicar CLARAMENTE o benefício principal. Use fórmulas como:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"[Resultado Desejado] em [Tempo] sem [Objeção]"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Como [Público] consegue [Resultado] com [Método]"</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-revolux-dark-light rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Exemplo ruim:</p>
                      <p className="text-gray-400 line-through mb-4">"Bem-vindo ao nosso site de vendas"</p>
                      <p className="text-sm text-gray-500 mb-2">Exemplo bom:</p>
                      <p className="text-revolux-green font-bold">"Capture 300+ Leads Qualificados em 30 Dias sem Gastar com Anúncios"</p>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">2. CTA (Call-to-Action) Estratégico</h3>
                    <p className="text-gray-300 mb-3">
                      Seu botão de ação é o coração da landing page. Regras de ouro:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Use verbos de ação: "Baixar Agora", "Começar Grátis", "Quero Meu Desconto"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Contraste visual: o botão deve SALTAR aos olhos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Repita o CTA: topo, meio e fim da página</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Adicione urgência: "Últimas vagas", "Oferta termina em..."</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">3. Prova Social</h3>
                    <p className="text-gray-300 mb-3">
                      92% das pessoas confiam mais em recomendações de outros clientes do que em propagandas. Inclua:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Depoimentos com foto e nome real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Números de resultados: "+400% de conversão"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Logos de clientes/empresas conhecidas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Quantidade: "Mais de 10.000 empresas confiam"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">4. Formulário Otimizado</h3>
                    <p className="text-gray-300 mb-3">
                      Quanto menos campos, maior a conversão. A regra é simples:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Para capturar leads: apenas nome + email (ou só email)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Para qualificar: adicione 1-2 campos relevantes (ex: telefone, empresa)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Use placeholders claros: "Seu melhor email"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Adicione mensagem de privacidade: "Seus dados estão seguros"</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-revolux-green" />
                  Otimização Técnica para Alta Conversão
                </h2>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Velocidade de Carregamento</h4>
                    <p className="text-gray-300">
                      Cada segundo de atraso reduz as conversões em 7%. Use imagens otimizadas (WebP), lazy loading e hospedagem rápida.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Mobile First</h4>
                    <p className="text-gray-300">
                      Mais de 70% do tráfego vem de celulares. Teste TUDO no mobile: botões grandes, texto legível, formulários fáceis de preencher.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2 text-purple-400">Pixel e Analytics</h4>
                    <p className="text-gray-300">
                      Configure Meta Pixel e Google Analytics ANTES de rodar tráfego. Você precisa medir conversões, rastrear visitantes e fazer remarketing.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 text-yellow-400">SEO Básico</h4>
                    <p className="text-gray-300">
                      Mesmo para tráfego pago, otimize: título com palavra-chave, meta description persuasiva, URL limpa (/oferta-especial em vez de /page?id=123).
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">🚀 Quer uma Landing Page Profissional?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux cria landing pages de alta conversão com todos esses elementos otimizados. Pixel configurado, copywriting estratégico e design focado em resultados.
                  </p>
                  <Link
                    href="/landing-page"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Criar Minha Landing Page
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Checklist Final: Landing Page de Alta Conversão</h2>

                <Card className="bg-revolux-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Headline clara comunicando benefício em 3 segundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">CTA visível acima da dobra (sem precisar rolar)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Formulário com no máximo 3 campos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Pelo menos 3 depoimentos com foto e nome</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Elementos de urgência/escassez (quando verdadeiros)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Carregamento em menos de 3 segundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">100% responsivo e testado em mobile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Meta Pixel e Google Analytics configurados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Sem links de saída (exceto o CTA principal)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Página de obrigado configurada com próximos passos</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 mt-12">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  Uma landing page de alta conversão não é mágica - é ciência. Seguindo esses elementos comprovados, você vai transformar visitantes em leads qualificados e multiplicar seus resultados online.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Lembre-se: teste, teste e teste. A/B tests com headlines, CTAs e cores podem aumentar suas conversões em 50-100%. Comece com essas bases sólidas e otimize continuamente.
                </p>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="text-center">
                <h3 className="text-2xl font-bold mb-4">Gostou desse conteúdo?</h3>
                <p className="text-gray-300 mb-6">
                  Continue aprendendo no nosso blog com mais guias práticos sobre marketing digital
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-revolux-green text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Ver Todos os Artigos
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
