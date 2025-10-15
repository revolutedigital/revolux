'use client'
import type { Metadata } from 'next'



import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, Building2, Globe, Shield, Search, FileText, Map } from 'lucide-react'
import Link from 'next/link'

export default function SiteInstitucionalEmpresasB2B() {
  return (
    <>
      <ArticleSchema
        title="Site Institucional para Empresas B2B: O Que Não Pode Faltar | Revolux"
        description="Entenda por que um site institucional profissional é essencial para empresas B2B e quais elementos são indispensáveis para gerar credibilidade e conquistar clientes corporativos."
        publishedDate="2025-01-10T00:00:00Z"
        slug="site-institucional-empresas-b2b"
        keywords={['site institucional', 'B2B', 'presença digital', 'credibilidade empresarial', 'website corporativo', 'marketing B2B']}
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

              <span className="inline-block bg-green-500/10 text-green-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Site Institucional
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Institucional para Empresas B2B: <span className="gradient-text">O Que Não Pode Faltar</span>
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>10 de Janeiro, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>7 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                No mercado B2B, seu site institucional é muito mais que um cartão de visitas digital - é sua principal ferramenta de credibilidade, geração de leads e fechamento de negócios. Neste guia, você vai descobrir exatamente o que seu site institucional precisa ter para conquistar clientes corporativos.
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
                  <Building2 className="h-8 w-8 text-revolux-green" />
                  Por Que Empresas B2B Precisam de Site Institucional Profissional?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Diferente do B2C, vendas B2B envolvem ciclos mais longos, múltiplos decisores e tickets altos. Antes de falar com seu comercial, 67% dos compradores B2B já pesquisaram sua empresa online. Se seu site não passar credibilidade, você perde a venda antes mesmo de começar.
                </p>

                <div className="bg-revolux-green/10 border border-revolux-green/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-revolux-green mb-3">📊 Estatística Importante</h3>
                  <p className="text-gray-300 mb-0">
                    Segundo pesquisa da Clutch, <strong>94% dos compradores B2B</strong> avaliam a credibilidade de uma empresa pelo design e conteúdo do site institucional. Um site amador pode custar milhões em negócios perdidos.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-revolux-green" />
                  Elementos Indispensáveis de um Site Institucional B2B
                </h2>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">1. Homepage Estratégica</h3>
                    <p className="text-gray-300 mb-3">
                      Sua home precisa responder em 5 segundos: "O que vocês fazem?" e "Por que eu deveria contratar vocês?". Elementos essenciais:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Proposta de valor clara no hero section</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Principais serviços/produtos em destaque</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Cases de sucesso ou logos de clientes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">CTA direto: "Fale com Especialista", "Solicite Orçamento"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">2. Sobre Nós com Autoridade</h3>
                    <p className="text-gray-300 mb-3">
                      No B2B, as pessoas querem saber COM QUEM estão fazendo negócio. Sua página Sobre deve transmitir:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">História da empresa (credibilidade temporal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Equipe e liderança (coloque fotos reais!)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Missão, visão e valores (mas seja autêntico)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Certificações, prêmios e diferenciais</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">3. Serviços Detalhados</h3>
                    <p className="text-gray-300 mb-3">
                      Cada serviço merece uma página própria, não apenas um parágrafo genérico. Estruture assim:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Descreva o problema que o serviço resolve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Como funciona o processo/metodologia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Benefícios mensuráveis (ROI, economia, ganho de tempo)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Cases de clientes que usaram esse serviço</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">4. Portfólio e Cases de Sucesso</h3>
                    <p className="text-gray-300 mb-3">
                      Compradores B2B querem PROVAS. Seu portfólio precisa de:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Resultados numéricos: "Reduzimos custos em 40%"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Depoimento do cliente com nome, cargo e empresa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Desafio → Solução → Resultado (storytelling)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Fotos/vídeos do projeto (quando possível)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">5. Contato Completo e Otimizado</h3>
                    <p className="text-gray-300 mb-3">
                      Facilite ao MÁXIMO o contato. Decisores B2B são ocupados:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Map className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Formulário de contato inteligente (qualifique o lead)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Map className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Telefone fixo + WhatsApp comercial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Map className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Endereço completo + Google Maps integrado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Map className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Horário de atendimento e tempo de resposta esperado</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Search className="h-8 w-8 text-revolux-green" />
                  SEO Local e Credibilidade
                </h2>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Google Meu Negócio</h4>
                    <p className="text-gray-300">
                      Configure seu perfil completo no Google Business. Isso faz seu site aparecer em buscas como "consultoria B2B [sua cidade]" e adiciona enorme credibilidade.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Palavras-chave B2B</h4>
                    <p className="text-gray-300">
                      Otimize para termos técnicos do seu setor. Empresas B2B buscam termos específicos: "ERP para indústria metalúrgica", "consultoria fiscal para exportação".
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2 text-purple-400">Certificados e Selos</h4>
                    <p className="text-gray-300">
                      Exiba certificações (ISO, prêmios, associações) em local visível. No B2B, esses selos são decisivos para transmitir confiança.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-revolux-green" />
                  Blog e Marketing de Conteúdo
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Um blog corporativo bem feito posiciona sua empresa como autoridade no setor. Publique conteúdo que responde dúvidas dos seus clientes:
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 text-revolux-green">Tipos de Conteúdo que Funcionam no B2B:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Guias técnicos e whitepapers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Cases de sucesso detalhados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Análises de tendências do mercado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Calculadoras e ferramentas de ROI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Comparativos de soluções</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">🏢 Quer um Site Institucional que Gera Negócios?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux cria sites institucionais B2B que transmitem credibilidade, geram leads qualificados e aumentam suas vendas. Design profissional, conteúdo estratégico e SEO otimizado.
                  </p>
                  <Link
                    href="/site-institucional"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Criar Meu Site Institucional
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Checklist: Site Institucional B2B Completo</h2>

                <Card className="bg-revolux-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Homepage com proposta de valor clara e CTAs diretos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Sobre Nós com equipe, história e credenciais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Página individual para cada serviço/produto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Portfólio com cases de sucesso e resultados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Contato completo com formulário, telefone e mapa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Blog corporativo com conteúdo relevante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Google Meu Negócio configurado e sincronizado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Certificações e selos de credibilidade visíveis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Design responsivo e profissional</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Velocidade de carregamento otimizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">CMS para atualização fácil de conteúdo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Política de privacidade e termos de uso</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 mt-12">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  Um site institucional B2B bem estruturado é seu vendedor 24/7. Ele qualifica leads, constrói autoridade e encurta o ciclo de vendas. Não economize aqui - investir em um site profissional pode ser a diferença entre fechar negócios de milhares ou milhões.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Lembre-se: no B2B, credibilidade é tudo. Cada elemento do seu site deve transmitir profissionalismo, experiência e confiança. Comece com esses fundamentos e evolua continuamente baseado no feedback dos seus clientes.
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
