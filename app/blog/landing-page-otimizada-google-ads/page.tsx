'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, Target, DollarSign, Zap, TrendingUp, Smartphone, Star } from 'lucide-react'
import Link from 'next/link'

export default function LandingPageOtimizadaGoogleAds() {
  return (
    <>
      <ArticleSchema
        title="Landing Page Otimizada para Google Ads: Checklist Completo | Revolux"
        description="Checklist completo para criar landing pages otimizadas para Google Ads. Maximize Quality Score, reduza CPC e triplique suas conversões com o mesmo orçamento."
        publishedDate="2025-01-03T00:00:00Z"
        slug="landing-page-otimizada-google-ads"
        keywords={['landing page', 'Google Ads', 'Quality Score', 'CPC', 'conversão', 'otimização', 'pixel', 'rastreamento']}
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
                Landing Page Otimizada para <span className="gradient-text">Google Ads</span>: Checklist Completo
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>03 de Janeiro, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>6 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Você está investindo em Google Ads mas as conversões não vêm? O problema provavelmente não é o anúncio - é a landing page. Uma landing otimizada pode TRIPLICAR seu ROI usando o mesmo orçamento. Neste checklist completo, você vai descobrir exatamente o que fazer.
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
                  <DollarSign className="h-8 w-8 text-revolux-green" />
                  Por Que sua Landing Pode Estar Queimando Dinheiro?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Imagine: você paga R$5 por clique. Se apenas 2% convertem, cada lead custa R$250. Mas se você otimizar para 6% de conversão, o custo cai para R$83. MESMA campanha, MENOS custo por lead, MAIS vendas.
                </p>

                <div className="bg-revolux-green/10 border border-revolux-green/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-revolux-green mb-3">💰 Impacto Real</h3>
                  <p className="text-gray-300 mb-0">
                    Segundo estudo da Unbounce, <strong>landing pages otimizadas para Google Ads convertem em média 3x mais</strong> que páginas genéricas. A diferença entre lucro e prejuízo está nos detalhes.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
                  <Star className="h-8 w-8 text-revolux-green" />
                  Quality Score: O Segredo para Pagar Menos
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  O Google avalia suas landing pages através do Quality Score (nota de 1 a 10). Quanto maior a nota, menor o CPC (custo por clique) e melhor o posicionamento. Uma landing com QS 8-10 pode pagar 50% menos que uma com QS 3-4.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-400">O Que o Google Avalia:</h3>
                  <div className="space-y-4">
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                      <h4 className="font-bold text-revolux-green mb-2">1. Relevância da Landing para o Anúncio</h4>
                      <p className="text-gray-300">
                        Se seu anúncio fala "compre tênis Nike", sua landing DEVE ter tênis Nike em destaque. Correspondência headline-anúncio é crucial.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-400 mb-2">2. Experiência do Usuário</h4>
                      <p className="text-gray-300">
                        Velocidade, mobile-friendly, navegação clara, sem pop-ups agressivos. O Google quer que o usuário tenha uma boa experiência.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                      <h4 className="font-bold text-purple-400 mb-2">3. Taxa de Cliques Esperada (CTR)</h4>
                      <p className="text-gray-300">
                        Baseado em histórico, o Google prevê se seu anúncio vai ser clicado. Landing relevante = maior CTR = melhor score.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-revolux-green" />
                  Checklist: Landing Page Otimizada para Google Ads
                </h2>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">✅ Correspondência Anúncio-Landing</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Headline idêntica ou muito similar ao anúncio:</strong> Se o anúncio diz "Aumente Vendas em 300%", a landing deve repetir isso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Palavras-chave do anúncio presentes no texto:</strong> Google busca consistência semântica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Imagens relacionadas à promessa:</strong> Visual deve reforçar o anúncio</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-revolux-dark-light rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Exemplo prático:</p>
                      <p className="text-gray-400 mb-2">Anúncio: "Landing Pages que Convertem 5x Mais"</p>
                      <p className="text-revolux-green font-bold">Landing Headline: "Crie Landing Pages que Convertem 5x Mais em 48 Horas"</p>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">✅ Pixel e Rastreamento Configurado</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Google Ads Conversion Tracking:</strong> Rastreie CADA conversão (lead, venda, cadastro)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Google Analytics 4 (GA4):</strong> Análise completa de comportamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Eventos personalizados:</strong> Clique no botão, scroll, tempo na página</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Tag Manager:</strong> Gerenciar todos os pixels em um só lugar</span>
                      </li>
                    </ul>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                      <p className="text-yellow-400 font-bold mb-2">⚠️ CRÍTICO</p>
                      <p className="text-gray-300">
                        Sem rastreamento correto, você não sabe o que funciona. É como dirigir de olhos vendados. Configure ANTES de rodar tráfego.
                      </p>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">✅ Formulário Otimizado</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Mínimo de campos:</strong> Quanto menos, melhor. Para lead, apenas nome + email ou só email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Labels claros:</strong> "Seu melhor email" funciona melhor que só "Email"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Botão com cor contrastante:</strong> Deve "pular" visualmente na página</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Texto do botão com ação:</strong> "Quero Meu Desconto" > "Enviar"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Mensagem de privacidade:</strong> "Seus dados estão seguros. Não enviamos spam."</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">✅ Velocidade e Performance</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Carregamento em menos de 3 segundos:</strong> Cada segundo a mais = 7% menos conversões</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Imagens otimizadas:</strong> Formato WebP, compressão, lazy loading</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Hospedagem de qualidade:</strong> Server response time < 200ms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Minificação de CSS/JS:</strong> Código limpo e leve</span>
                      </li>
                    </ul>
                    <div className="bg-revolux-dark-light rounded-lg p-4 mt-4">
                      <p className="text-gray-400 mb-2">Teste sua velocidade:</p>
                      <p className="text-gray-300">Google PageSpeed Insights (meta: 90+ mobile e desktop)</p>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">✅ Mobile First</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Smartphone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>100% responsivo:</strong> Mais de 70% dos cliques do Google Ads vêm de mobile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Smartphone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Botões grandes e clicáveis:</strong> Mínimo 44x44 pixels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Smartphone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Texto legível sem zoom:</strong> Fonte 16px mínimo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Smartphone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Formulário fácil de preencher:</strong> Teclado adequado (email, telefone, número)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Smartphone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Sem pop-ups invasivos:</strong> Google penaliza interstitials em mobile</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">✅ Sem Distrações</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Sem menu de navegação:</strong> Landing page tem UMA missão - converter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Sem links externos:</strong> Exceto o CTA principal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Foco visual no CTA:</strong> Use espaço em branco e contraste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Hierarquia clara:</strong> Headline → Benefícios → Prova Social → CTA</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-revolux-green" />
                  Elementos de Conversão Avançados
                </h2>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Urgência e Escassez</h4>
                    <p className="text-gray-300">
                      "Últimas 3 vagas", "Oferta termina em 2 horas". Mas CUIDADO: use apenas se for verdade. Falsidade quebra confiança.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Prova Social</h4>
                    <p className="text-gray-300">
                      Depoimentos com foto + nome, logos de clientes, números ("Mais de 10.000 empresas confiam"). Fundamental para credibilidade.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2 text-purple-400">Garantia</h4>
                    <p className="text-gray-300">
                      "Satisfação garantida ou seu dinheiro de volta". Reduz risco percebido e aumenta conversões em até 30%.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 text-yellow-400">Remarketing Pixel</h4>
                    <p className="text-gray-300">
                      Configure Google Ads Remarketing para impactar quem visitou mas não converteu. Segunda chance de conversão.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">🎯 Quer Landing Pages que Maximizam ROI?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux cria landing pages otimizadas especificamente para Google Ads. Quality Score alto, conversão maximizada, pixel configurado e testes A/B para melhorar continuamente.
                  </p>
                  <Link
                    href="/landing-page"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Criar Landing de Alta Conversão
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Checklist Final: Antes de Rodar Tráfego</h2>

                <Card className="bg-revolux-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Headline corresponde ao anúncio do Google Ads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Google Ads Conversion Tracking configurado e testado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Google Analytics 4 rastreando eventos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Formulário com no máximo 3 campos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">PageSpeed Score 90+ no mobile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">100% responsivo e testado em dispositivos reais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Sem menu de navegação ou links de saída</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">CTA visível acima da dobra</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Prova social (depoimentos, números, logos)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Página de obrigado configurada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Remarketing pixel ativo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Testado em Chrome, Safari, Firefox e Edge</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 mt-12">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  Uma landing page otimizada para Google Ads não é luxo - é necessidade. A diferença entre lucro e prejuízo está nos detalhes: correspondência com o anúncio, velocidade, mobile, rastreamento correto.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Use este checklist antes de investir em tráfego. Cada item pode parecer pequeno, mas juntos eles podem TRIPLICAR suas conversões. Teste, otimize e escale o que funciona.
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
