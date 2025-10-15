'use client'
import type { Metadata } from 'next'



import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, Zap, Brain, Target, TrendingUp, AlertCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CopywritingPaginaVendasConverte() {
  return (
    <>
      <ArticleSchema
        title="Copywriting para Página de Vendas que Converte | Guia Completo"
        description="Domine copywriting estratégico para páginas de vendas. Framework AIDA, gatilhos mentais, headlines matadoras e técnicas comprovadas para multiplicar conversões."
        publishedDate="2025-01-01T00:00:00Z"
        slug="copywriting-pagina-vendas-converte"
        keywords={['copywriting', 'página de vendas', 'AIDA', 'gatilhos mentais', 'conversão', 'headline', 'storytelling', 'CTA']}
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

              <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Página de Vendas
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Copywriting</span> para Página de Vendas que Converte
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>01 de Janeiro, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>12 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Copywriting não é escrever bonito - é escrever de forma que o leitor TENHA QUE comprar. Neste guia completo, você vai dominar as técnicas, frameworks e gatilhos mentais que transformam páginas de vendas em máquinas de conversão.
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
                  <Brain className="h-8 w-8 text-revolux-green" />
                  Framework AIDA: A Base de Todo Copy que Vende
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  AIDA é o framework mais testado e comprovado da história do marketing. Foi criado em 1898 e continua sendo a base de bilhões em vendas. AIDA = Atenção → Interesse → Desejo → Ação.
                </p>

                <div className="space-y-4">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">A - Atenção (Headline)</h3>
                    <p className="text-gray-300 mb-3">
                      Você tem 3 segundos para prender a atenção. Se a headline não chocar, o visitante vai embora.
                    </p>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Fórmulas matadoras:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">"Como [Público] consegue [Resultado] em [Tempo] sem [Objeção]"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">"[Número] Maneiras de [Benefício] que [Autoridade] Não Quer Que Você Saiba"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">"Descubra o Segredo de [Resultado Desejado] Usado por [Prova Social]"</span>
                        </li>
                      </ul>
                      <div className="mt-4 bg-revolux-dark rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-2">Exemplo real:</p>
                        <p className="text-revolux-green font-bold">"Como Empreendedores Iniciantes Faturam R$50 Mil/Mês em 90 Dias sem Investir em Anúncios"</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">I - Interesse (Conexão Emocional)</h3>
                    <p className="text-gray-300 mb-3">
                      Agora que você tem atenção, precisa gerar interesse mostrando que ENTENDE a dor do cliente.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Descreva a situação atual (frustrações, problemas, medos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Use perguntas que fazem o leitor pensar: "Você já tentou X e não funcionou?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Apresente a solução (seu produto) como a resposta</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">D - Desejo (Transformação)</h3>
                    <p className="text-gray-300 mb-3">
                      Mostre a vida DEPOIS de comprar seu produto. Venda a transformação, não o produto.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Benefícios emocionais: "Imagine acordar sem se preocupar com dinheiro"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Benefícios práticos: "Economize 20 horas por semana"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Prova social: Depoimentos de quem já viveu a transformação</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">A - Ação (CTA Irresistível)</h3>
                    <p className="text-gray-300 mb-3">
                      Seu CTA deve ser impossível de ignorar. Use urgência, escassez e clareza.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Target className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Sim, Quero Transformar Minha Vida Agora"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Garantir Minha Vaga Antes Que Acabe"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Começar Agora por R$97 (Economize R$200)"</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-revolux-green/10 border border-revolux-green/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-revolux-green mb-3">💡 Regra de Ouro</h3>
                  <p className="text-gray-300 mb-0">
                    Pessoas não compram produtos - compram <strong>resultados</strong>. Não venda um curso, venda o salário de R$10 mil/mês que o curso proporciona. Não venda um software, venda as 15 horas por semana que ele economiza.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Zap className="h-8 w-8 text-revolux-green" />
                  Gatilhos Mentais que Multiplicam Conversões
                </h2>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">1. Escassez</h3>
                    <p className="text-gray-300 mb-3">
                      Quanto mais raro, mais valioso. Nosso cérebro é programado para não perder oportunidades.
                    </p>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Como usar:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">"Restam apenas 5 vagas para esta turma"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">"Edição limitada: Apenas 100 unidades produzidas"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">"23 pessoas estão vendo este produto agora"</span>
                        </li>
                      </ul>
                      <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <p className="text-red-400 font-bold text-sm">⚠️ CUIDADO: Só use escassez REAL. Mentir destrói confiança.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">2. Urgência</h3>
                    <p className="text-gray-300 mb-3">
                      Tempo limitado cria pressão para agir AGORA, não amanhã.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Oferta válida apenas até meia-noite de hoje"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Desconto de 50% termina em 3 horas" (com cronômetro)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Bônus especial para os 50 primeiros compradores"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">3. Prova Social</h3>
                    <p className="text-gray-300 mb-3">
                      Se outras pessoas compraram e tiveram resultados, você também vai querer.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Depoimentos em vídeo (10x mais poderoso que texto)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Estudos de caso com números: "Aumentou faturamento em 340%"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Quantidade: "Mais de 10.000 alunos satisfeitos"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Avaliações: "4.9/5 estrelas com 2.347 avaliações"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">4. Autoridade</h3>
                    <p className="text-gray-300 mb-3">
                      Compramos de quem consideramos especialista. Estabeleça sua autoridade.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"15 anos de experiência ajudando empresas a..."</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Certificações, prêmios, menções na mídia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">"Recomendado por [Autoridade Reconhecida]"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Resultados pessoais: "Construí 3 empresas de 7 dígitos"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">5. Reciprocidade</h3>
                    <p className="text-gray-300 mb-3">
                      Quando você dá algo primeiro, as pessoas sentem obrigação de retribuir.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Conteúdo gratuito de alto valor (ebooks, webinars, ferramentas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Bônus surpreendentes: "Compre o curso e ganhe consultoria de R$2 mil grátis"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Garantia estendida: "30 dias de garantia incondicional"</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Target className="h-8 w-8 text-revolux-green" />
                  Headlines Matadoras: Fórmulas Comprovadas
                </h2>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-revolux-green mb-2">Fórmula 1: Especificidade + Prazo + Objeção</h4>
                      <p className="text-gray-300">"Como Ganhar R$10.347 por Mês em 90 Dias Trabalhando de Casa (Mesmo sem Experiência)"</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-blue-400 mb-2">Fórmula 2: Revelação de Segredo</h4>
                      <p className="text-gray-300">"O Método Secreto que Milionários Usam para Multiplicar Patrimônio (e Por Que Ninguém Te Conta)"</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-purple-400 mb-2">Fórmula 3: Contraste (Antes vs Depois)</h4>
                      <p className="text-gray-300">"De Endividado a Milionário: Como Sair do Vermelho e Construir Riqueza em 2 Anos"</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-yellow-400 mb-2">Fórmula 4: Curiosidade + Benefício</h4>
                      <p className="text-gray-300">"Por Que Médicos Recomendam ISTO para Emagrecer 15kg em 60 Dias (Sem Dieta Maluca)"</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-revolux-green" />
                  Storytelling: Venda Através de Histórias
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Nosso cérebro é programado para histórias. Uma boa história vende melhor que 100 argumentos lógicos.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-400">Estrutura de História que Vende:</h3>
                  <div className="space-y-4">
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-revolux-green mb-2">1. Situação Inicial (Dor)</h4>
                      <p className="text-gray-300">"Há 3 anos, eu estava quebrado, com R$40 mil de dívida e sem saber como pagar as contas..."</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-blue-400 mb-2">2. Momento de Virada (Descoberta)</h4>
                      <p className="text-gray-300">"Até que descobri este método simples que mudou tudo..."</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-purple-400 mb-2">3. Resultado (Transformação)</h4>
                      <p className="text-gray-300">"Hoje, 3 anos depois, faturei R$2 milhões e ajudo outras pessoas a fazer o mesmo..."</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-yellow-400 mb-2">4. Convite (Oferta)</h4>
                      <p className="text-gray-300">"E agora, pela primeira vez, vou revelar exatamente como fiz isso..."</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Como Destruir Objeções</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Toda venda tem objeções mentais. Seu trabalho é destruí-las ANTES do cliente pensar nelas.
                </p>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Objeção: "É muito caro"</h4>
                    <p className="text-gray-300">
                      <strong>Resposta:</strong> "Compare com o custo de NÃO ter isso. Se você economiza 10 horas por semana, são 520 horas por ano. Seu tempo vale R$50/hora? Então isso te economiza R$26 mil/ano."
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Objeção: "E se não funcionar pra mim?"</h4>
                    <p className="text-gray-300">
                      <strong>Resposta:</strong> "Garantia de 30 dias. Se não funcionar, devolvemos 100% do seu dinheiro. Sem perguntas. O risco é todo nosso."
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2 text-purple-400">Objeção: "Não tenho tempo"</h4>
                    <p className="text-gray-300">
                      <strong>Resposta:</strong> "É exatamente por isso que você precisa disto. Nosso método economiza 15 horas por semana. Você GANHA tempo, não perde."
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 text-yellow-400">Objeção: "Vou pensar"</h4>
                    <p className="text-gray-300">
                      <strong>Resposta:</strong> "Perfeito! Mas saiba que esta oferta especial termina hoje à meia-noite. Amanhã, o preço volta para R$997."
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">✍️ Quer Copy que Realmente Converte?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux cria páginas de vendas com copywriting estratégico, gatilhos mentais aplicados e estrutura otimizada para conversão máxima. Testes A/B, análise de objeções e otimização contínua.
                  </p>
                  <Link
                    href="/pagina-de-vendas"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Criar Minha Página de Vendas
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Checklist: Copy de Vendas Matador</h2>

                <Card className="bg-revolux-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Headline que prende em 3 segundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Identificação profunda com a dor do cliente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Venda transformação, não produto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Pelo menos 5 depoimentos com resultados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Gatilhos de escassez e urgência (reais)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Destruição de todas as objeções principais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Garantia forte (30+ dias)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">CTA repetido (topo, meio, final)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">História pessoal/caso de sucesso</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Comparação de preço com valor real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Bônus irresistíveis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">FAQ respondendo dúvidas comuns</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 mt-12">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  Copywriting é ciência + psicologia + persuasão. Não é mágica - é entender profundamente seu cliente, falar a língua dele e mostrar que seu produto é a solução óbvia.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Use o framework AIDA, aplique gatilhos mentais com ética, destrua objeções e teste TUDO. Uma palavra diferente na headline pode dobrar suas conversões. Copy não é custo - é investimento.
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
