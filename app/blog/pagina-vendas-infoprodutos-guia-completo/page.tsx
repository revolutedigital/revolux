'use client'
import type { Metadata } from 'next'



import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, TrendingUp, Target, Zap, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function PaginaVendasInfoprodutos() {
  return (
    <>
      <ArticleSchema
        title="Página de Vendas para Infoprodutos: Guia Completo 2025 | Revolux"
        description="Aprenda a estrutura exata de uma página de vendas persuasiva que converte visitantes em compradores. Guia completo para cursos online, mentorias e e-books."
        publishedDate="2025-01-12T00:00:00Z"
        slug="pagina-vendas-infoprodutos-guia-completo"
        keywords={['página de vendas', 'infoproduto', 'copywriting', 'curso online', 'sales page', 'conversão', 'vendas online']}
      />
      <ScrollTracker />
      <Header />

      <main className="min-h-screen">
        <section className="relative pt-32 pb-12 px-4">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-revolux-green hover:underline mb-8">
                <ArrowLeft className="h-4 w-4" />
                Voltar para o Blog
              </Link>

              <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Página de Vendas
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Página de Vendas para <span className="gradient-text">Infoprodutos</span>: Guia Completo 2025
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>12 de Janeiro, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>10 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Se você vende cursos online, mentorias ou e-books, sabe que uma boa página de vendas é a diferença entre faturar R$ 1.000 ou R$ 100.000 por mês. Neste guia completo, você vai aprender a estrutura exata de páginas que vendem no automático.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4 bg-revolux-dark-light">
          <div className="container-revolux max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="h-8 w-8 text-revolux-green" />
                  O Que é uma Página de Vendas de Infoprodutos?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Uma página de vendas (ou Sales Page) é uma página web focada em VENDER diretamente. Diferente de uma landing page que captura leads, a página de vendas leva o visitante direto ao checkout. É o coração do seu funil de vendas.
                </p>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">📊 Estatística Importante</h3>
                  <p className="text-gray-300 mb-0">
                    Infoprodutores com páginas de vendas bem estruturadas têm <strong>taxa de conversão de 3-5%</strong>, enquanto páginas amadoras convertem apenas 0.5-1%. Uma boa página pode <strong>multiplicar suas vendas por 10x.</strong>
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-revolux-green" />
                  Estrutura Comprovada: 8 Blocos Essenciais
                </h2>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">1. Headline Magnética (Promessa Clara)</h3>
                    <p className="text-gray-300 mb-3">
                      Sua headline tem 5 segundos para capturar atenção. Fórmula matadora:
                    </p>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                      <p className="text-blue-300 font-bold text-lg mb-2">
                        "Como [Público] Consegue [Resultado Específico] em [Tempo] sem [Objeção]"
                      </p>
                      <p className="text-sm text-gray-400 mt-3">Exemplo real que converte:</p>
                      <p className="text-revolux-green font-bold mt-2">
                        "Como Iniciantes em Marketing Digital Faturam R$ 10k/mês em 90 Dias sem Aparecer em Vídeo"
                      </p>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">2. Dor e Problema (Identificação)</h3>
                    <p className="text-gray-300 mb-3">
                      Liste 3-5 dores que seu público sente AGORA. Use formato de perguntas:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Você está cansado de trabalhar 10 horas por dia e ganhar pouco?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Tentou vários cursos mas nunca teve resultados reais?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Quer empreender online mas não sabe por onde começar?"</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4 italic">
                      💡 Dica: Quanto mais específico, mais conecta. "Ganhar pouco" é vago. "Trabalhar 10h e ganhar R$ 2.500" é específico.
                    </p>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">3. Solução Única (Seu Método)</h3>
                    <p className="text-gray-300 mb-3">
                      Apresente SEU método como A solução. Dê um nome para ele:
                    </p>
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/30">
                      <p className="text-lg font-bold text-blue-300 mb-2">O Método [Nome]™</p>
                      <p className="text-gray-300">
                        "Desenvolvi o <strong>Método Vendas no Automático™</strong> que já ajudou +5.000 alunos a faturarem seus primeiros R$ 10k online em menos de 90 dias..."
                      </p>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">4. Transformação (Antes vs Depois)</h3>
                    <p className="text-gray-300 mb-3">
                      Mostre a jornada: onde o aluno está AGORA vs onde ele vai CHEGAR:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <p className="text-red-400 font-bold mb-2">❌ ANTES (Vida Atual)</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Trabalha 10h e ganha R$ 2.500</li>
                          <li>• Sem tempo para família</li>
                          <li>• Dependente do chefe</li>
                          <li>• Medo do futuro</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-green-400 font-bold mb-2">✅ DEPOIS (Vida Desejada)</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Fatura R$ 10k+ trabalhando 4h</li>
                          <li>• Liberdade geográfica</li>
                          <li>• Dono do próprio negócio</li>
                          <li>• Segurança financeira</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">5. Prova Social (Depoimentos e Resultados)</h3>
                    <p className="text-gray-300 mb-3">
                      A prova social é O elemento que mata objeções. Inclua:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Depoimentos em vídeo:</strong> Alunos falando dos resultados (mais poderoso)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Screenshots de resultados:</strong> Prints de vendas, faturamento, dashboards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Casos de sucesso detalhados:</strong> "Como Maria saiu de R$ 0 para R$ 15k em 60 dias"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Números agregados:</strong> "+5.000 alunos", "R$ 10 milhões gerados"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">6. Oferta Irresistível</h3>
                    <p className="text-gray-300 mb-3">
                      Não venda apenas o curso. Venda uma OFERTA completa:
                    </p>
                    <div className="bg-revolux-dark-light rounded-lg p-6 border-l-4 border-revolux-green">
                      <p className="text-xl font-bold text-revolux-green mb-4">O QUE VOCÊ RECEBE:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <DollarSign className="h-6 w-6 text-revolux-green flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-white">Módulo Principal (Valor: R$ 1.997)</p>
                            <p className="text-sm text-gray-400">6 módulos completos com 40+ aulas</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <DollarSign className="h-6 w-6 text-revolux-green flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-white">Bônus #1: Templates Prontos (Valor: R$ 497)</p>
                            <p className="text-sm text-gray-400">Copie e cole e economize 20 horas</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <DollarSign className="h-6 w-6 text-revolux-green flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-white">Bônus #2: Comunidade Exclusiva (Valor: R$ 297/mês)</p>
                            <p className="text-sm text-gray-400">Networking com outros alunos</p>
                          </div>
                        </li>
                      </ul>
                      <div className="border-t border-gray-700 mt-6 pt-6">
                        <p className="text-sm text-gray-400">Valor total: <span className="line-through">R$ 2.791</span></p>
                        <p className="text-3xl font-bold text-revolux-green">POR APENAS: R$ 997</p>
                        <p className="text-sm text-gray-400 mt-2">ou 12x de R$ 97 sem juros</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">7. Garantia Forte</h3>
                    <p className="text-gray-300 mb-3">
                      Garantia elimina risco. Use garantia de 7, 15 ou 30 dias:
                    </p>
                    <div className="bg-green-500/10 border-2 border-green-500/30 rounded-lg p-6 text-center">
                      <p className="text-2xl font-bold text-green-400 mb-3">🛡️ GARANTIA INCONDICIONAL DE 30 DIAS</p>
                      <p className="text-gray-300">
                        Se você não gostar do conteúdo, não tiver resultados ou simplesmente mudar de ideia,
                        devolvemos <strong>100% do seu dinheiro</strong> sem perguntas. Você não tem NADA a perder.
                      </p>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">8. FAQ Estratégico</h3>
                    <p className="text-gray-300 mb-3">
                      Use o FAQ para eliminar objeções finais. Perguntas essenciais:
                    </p>
                    <ul className="space-y-3">
                      <li className="bg-revolux-dark-light rounded-lg p-4">
                        <p className="font-bold text-white mb-1">Quanto tempo tenho acesso?</p>
                        <p className="text-sm text-gray-400">Acesso vitalício + todas as atualizações futuras grátis</p>
                      </li>
                      <li className="bg-revolux-dark-light rounded-lg p-4">
                        <p className="font-bold text-white mb-1">Funciona para iniciantes?</p>
                        <p className="text-sm text-gray-400">SIM! 70% dos alunos começaram do absoluto zero</p>
                      </li>
                      <li className="bg-revolux-dark-light rounded-lg p-4">
                        <p className="font-bold text-white mb-1">Quanto tempo até ter resultados?</p>
                        <p className="text-sm text-gray-400">Média de 30-60 dias seguindo o método completo</p>
                      </li>
                      <li className="bg-revolux-dark-light rounded-lg p-4">
                        <p className="font-bold text-white mb-1">E se eu não conseguir?</p>
                        <p className="text-sm text-gray-400">Garantia de 30 dias - você não arrisca nada</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-revolux-green" />
                  Integração com Plataformas de Pagamento
                </h2>

                <p className="text-gray-300 mb-4">
                  Sua página de vendas precisa estar integrada com:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border border-blue-500/30">
                    <p className="font-bold text-blue-400 mb-2">🔷 Hotmart</p>
                    <p className="text-sm text-gray-400">Mais usada no Brasil para infoprodutos</p>
                  </div>
                  <div className="bg-revolux-dark-light rounded-lg p-4 border border-orange-500/30">
                    <p className="font-bold text-orange-400 mb-2">🔶 Eduzz</p>
                    <p className="text-sm text-gray-400">Taxas menores, boa para quem está começando</p>
                  </div>
                  <div className="bg-revolux-dark-light rounded-lg p-4 border border-purple-500/30">
                    <p className="font-bold text-purple-400 mb-2">💜 Monetizze</p>
                    <p className="text-sm text-gray-400">Ideal para produtos físicos e digitais</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">🚀 Quer uma Página de Vendas Profissional?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux cria páginas de vendas completas com copywriting estratégico, estrutura comprovada e integração total com plataformas de pagamento.
                  </p>
                  <Link
                    href="/pagina-de-vendas"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Criar Minha Página de Vendas
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  Uma página de vendas bem estruturada é um vendedor digital trabalhando 24/7 para você. Seguindo essa estrutura de 8 blocos, você vai criar uma máquina de vendas que converte visitantes em compradores no automático. Lembre-se: o segredo está nos detalhes - depoimentos reais, garantia forte e oferta irresistível fazem TODA a diferença.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
