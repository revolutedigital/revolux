'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, Instagram, ShoppingBag, Video, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function SocialCommerceInstagramVendas() {
  return (
    <>
      <ArticleSchema
        title="Social Commerce: Como Vender pelo Instagram em 2025 | Revolux"
        description="Guia completo de social commerce no Instagram. Instagram Shopping, live shopping, stories com produtos, reels e influencer marketing para multiplicar vendas online."
        publishedDate="2024-12-27T00:00:00Z"
        slug="social-commerce-instagram-vendas"
        keywords={['social commerce', 'Instagram Shopping', 'vendas Instagram', 'live shopping', 'influencer marketing', 'reels', 'checkout nativo']}
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

              <span className="inline-block bg-orange-500/10 text-orange-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                E-commerce
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Social Commerce</span>: Como Vender pelo Instagram em 2025
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>27 de Dezembro, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>7 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                O Instagram deixou de ser apenas uma rede social - virou uma loja gigante com 2 bilhões de usuários. Em 2025, 70% das compras online começam em redes sociais. Se você não está vendendo pelo Instagram, está perdendo uma fortuna. Vamos mudar isso agora.
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
                  <Instagram className="h-8 w-8 text-revolux-green" />
                  O Que é Social Commerce e Por Que Explodiu em 2025?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Social Commerce é vender DENTRO das redes sociais, sem precisar sair do app. O cliente vê o produto no Instagram, clica, compra e paga - tudo sem abrir um navegador. Menos atrito = mais vendas.
                </p>

                <div className="bg-revolux-green/10 border border-revolux-green/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-revolux-green mb-3">📊 Números Impressionantes</h3>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>81% dos usuários</strong> usam Instagram para pesquisar produtos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>130 milhões</strong> de pessoas clicam em posts de compras todo mês</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Social commerce vai movimentar <strong>R$200 bilhões no Brasil</strong> em 2025</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
                  <ShoppingBag className="h-8 w-8 text-revolux-green" />
                  Instagram Shopping: Seu Catálogo na Palma da Mão
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Instagram Shopping transforma seu perfil em uma loja completa. Produtos marcados em fotos, reels e stories com preço e botão de compra direto.
                </p>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-orange-400">Como Configurar Instagram Shopping:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>1. Conta Business:</strong> Converta seu perfil pessoal em conta comercial (gratuito)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>2. Conecte Facebook:</strong> Instagram Shopping funciona via Facebook Commerce Manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>3. Crie Catálogo:</strong> Suba seus produtos com fotos, preços, descrições</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>4. Ative Shopping:</strong> Solicite aprovação (24-48h para análise)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>5. Marque Produtos:</strong> Em posts, reels e stories - até 5 produtos por post</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Dica de Ouro</h4>
                    <p className="text-gray-300">
                      Posts com produtos marcados têm 80% mais engajamento. O algoritmo FAVORECE conteúdo shoppable porque o Instagram ganha comissão.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Video className="h-8 w-8 text-revolux-green" />
                  Instagram Live Shopping: Vendas ao Vivo
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Live Shopping é fazer live e vender produtos EM TEMPO REAL. Clientes compram sem sair da transmissão. Taxa de conversão: 30% (10x maior que e-commerce tradicional).
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-400">Como Fazer Live Shopping que Vende:</h3>
                  <div className="space-y-4">
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-revolux-green mb-2">Antes da Live</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Anuncie com 2-3 dias de antecedência nos stories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Crie expectativa: mostre prévia dos produtos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Ofereça desconto exclusivo para quem assistir</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-blue-400 mb-2">Durante a Live</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Video className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Mostre produtos EM USO (não só parado)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Video className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Responda perguntas em tempo real</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Video className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Crie urgência: "Últimas 5 unidades com desconto"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Video className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Incentive compartilhamento: "Marque uma amiga"</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-yellow-400 mb-2">Depois da Live</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Grave e salve no IGTV para quem não assistiu</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Reposte momentos no feed e stories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Oferta pós-live: "Perdeu? Desconto até meia-noite"</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Users className="h-8 w-8 text-revolux-green" />
                  Stories com Produtos: Vendas no Automático
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  500 milhões de pessoas veem stories TODO DIA. É o lugar perfeito para vender de forma casual e autêntica.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-400">Estratégias de Stories que Vendem:</h3>
                  <div className="space-y-4">
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                      <h4 className="font-bold text-revolux-green mb-2">Unboxing e Bastidores</h4>
                      <p className="text-gray-300">
                        Mostre produtos chegando, embalagem sendo aberta, preparação de pedidos. Autenticidade gera confiança.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-400 mb-2">Enquetes e Caixinhas de Pergunta</h4>
                      <p className="text-gray-300">
                        "Qual cor vocês preferem: rosa ou azul?" - Engaja e dá insights sobre preferências dos clientes.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                      <h4 className="font-bold text-purple-400 mb-2">Tutorial Rápido</h4>
                      <p className="text-gray-300">
                        "3 formas de usar este produto" - Educação que vende. Mostre aplicações práticas.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-400 mb-2">Contagem Regressiva</h4>
                      <p className="text-gray-300">
                        Use adesivo de countdown para promoções: "Flash sale termina em 6 horas!" - Urgência funciona.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-revolux-green" />
                  Checkout Nativo: Compra sem Sair do Instagram
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Instagram Checkout permite que o cliente compre, pague e finalize tudo DENTRO do app. Sem redirecionamentos = conversão 3x maior.
                </p>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Como Funciona</h4>
                    <p className="text-gray-300">
                      Cliente clica em produto → Escolhe variação (cor, tamanho) → Adiciona ao carrinho → Paga com cartão salvo → Pronto. Tudo em 30 segundos.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Requisitos</h4>
                    <p className="text-gray-300">
                      Disponível para marcas aprovadas pela Meta. Alternativa: use link direto para checkout no seu site (Stripe, Mercado Pago, PagSeguro).
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Influencer Marketing e UGC</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  70% dos jovens confiam mais em influenciadores do que em celebridades tradicionais. User Generated Content (UGC) - conteúdo de clientes - converte ainda mais.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-400">Estratégia de Influencer:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Micro-influencers:</strong> 5-50k seguidores têm engajamento 60% maior que mega-influencers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Nicho relevante:</strong> Influencer de fitness para produto fitness - óbvio mas ignorado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Autenticidade:</strong> Deixe o influencer criar conteúdo do jeito dele, não script rígido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Link direto:</strong> Sempre inclua link de compra com código de desconto exclusivo</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold mb-3 mt-6 text-orange-400">UGC - Clientes como Vendedores:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Crie hashtag da marca: #MinhaExperienciaComXYZ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Reposte fotos de clientes (com permissão) nos seus stories e feed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Incentive reviews em vídeo: "Grave um vídeo e ganhe 10% de desconto"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Destaque cliente do mês: engajamento e prova social simultâneos</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Reels: O Algoritmo Favorito do Instagram</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Reels têm 67% mais engajamento que posts normais. O Instagram está empurrando reels FORTE porque compete com TikTok.
                </p>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Reels que Vendem</h4>
                    <p className="text-gray-300">
                      Antes e depois, transformação, problema → solução. Ganchos nos primeiros 3 segundos: "Você está errando ao..."
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Frequência</h4>
                    <p className="text-gray-300">
                      Poste 3-5 reels por semana. Algoritmo favorece contas ativas. Use áudios em alta (aba "Tendências").
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2 text-purple-400">CTA no Final</h4>
                    <p className="text-gray-300">
                      "Link na bio", "Salve este reel", "Compartilhe com quem precisa". Direcione para ação específica.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">🛍️ Quer Vender no Instagram Profissionalmente?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux integra seu e-commerce com Instagram Shopping, configura catálogos, cria estratégia de social commerce e otimiza para conversão máxima. Transforme seguidores em clientes.
                  </p>
                  <Link
                    href="/ecommerce"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Integrar Meu E-commerce ao Instagram
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Checklist: Social Commerce no Instagram</h2>

                <Card className="bg-revolux-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Instagram Shopping configurado e aprovado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Catálogo completo com fotos profissionais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Posts marcando produtos (mínimo 3 por semana)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Stories diários mostrando produtos em uso</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Live shopping mensal (mínimo)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Reels com produtos 3-5x por semana</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Parcerias com 3+ micro-influencers do nicho</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Hashtag da marca incentivando UGC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Resposta rápida a DMs (máximo 1 hora)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Link na bio otimizado (Linktree ou similar)</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 mt-12">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  Social commerce não é o futuro - é o presente. Instagram já é a segunda maior plataforma de vendas online no Brasil, atrás apenas da Amazon. Empresas que ignoram isso estão deixando dinheiro na mesa.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Comece simples: configure Instagram Shopping, marque produtos em posts, faça stories mostrando bastidores. Depois escale com lives, reels e influencers. Em 3 meses, o Instagram pode ser seu principal canal de vendas.
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
