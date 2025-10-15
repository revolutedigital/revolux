'use client'
import type { Metadata } from 'next'



import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, MapPin, Search, Star, Building2, TrendingUp, Globe } from 'lucide-react'
import Link from 'next/link'

export default function SEOLocalSiteInstitucional() {
  return (
    <>
      <ArticleSchema
        title="SEO Local para Site Institucional: Como Aparecer no Google | Revolux"
        description="Guia completo de SEO local para sites institucionais. Google Meu Negócio, palavras-chave locais, avaliações, NAP consistency e backlinks regionais para dominar sua área."
        publishedDate="2024-12-29T00:00:00Z"
        slug="seo-local-site-institucional"
        keywords={['SEO local', 'site institucional', 'Google Meu Negócio', 'local pack', 'avaliações Google', 'NAP', 'backlinks locais']}
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
                <span className="gradient-text">SEO Local</span> para Site Institucional: Como Aparecer no Google
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>29 de Dezembro, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                46% das buscas no Google têm intenção local ("perto de mim", "em [cidade]"). Se seu site institucional não aparece nessas buscas, você está perdendo clientes para a concorrência. Neste guia, você vai dominar SEO local e colocar sua empresa no topo do Google.
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
                  <MapPin className="h-8 w-8 text-revolux-green" />
                  O Que é SEO Local e Por Que É Vital?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  SEO Local é otimizar seu site para aparecer em buscas geográficas. Quando alguém busca "contador em Porto Alegre" ou "consultoria empresarial perto de mim", o Google mostra resultados locais ANTES dos resultados orgânicos tradicionais.
                </p>

                <div className="bg-revolux-green/10 border border-revolux-green/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-revolux-green mb-3">📍 Estatística Poderosa</h3>
                  <p className="text-gray-300 mb-2">
                    Segundo o Google, <strong>76% das pessoas</strong> que buscam algo local no smartphone visitam um negócio físico em 24 horas. E <strong>28% dessas buscas resultam em compra</strong>.
                  </p>
                  <p className="text-gray-300 mb-0 mt-3">
                    Se você não aparece no Google Maps e no "Local Pack" (aqueles 3 resultados com mapa), está literalmente invisível para metade dos clientes em potencial.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-revolux-green" />
                  Google Meu Negócio: Seu Ativo Mais Importante
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Google Business Profile (antigo Google Meu Negócio) é GRATUITO e pode trazer mais clientes que qualquer anúncio pago. Mas 70% das empresas não configuram corretamente.
                </p>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">Como Configurar Perfeitamente:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Reivindique e verifique:</strong> Acesse google.com/business e confirme que sua empresa é real (cartão postal ou telefone)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Categoria EXATA:</strong> Escolha a categoria principal precisa ("Consultoria Empresarial", não apenas "Consultoria")</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>NAP perfeito:</strong> Nome, Endereço e Telefone IDÊNTICOS ao site e redes sociais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Horário completo:</strong> Todos os dias, horários especiais (feriados, eventos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Fotos profissionais:</strong> Logo, capa, fachada, escritório, equipe (mínimo 10 fotos de qualidade)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Descrição otimizada:</strong> 750 caracteres com palavras-chave naturais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300"><strong>Serviços detalhados:</strong> Liste TODOS os serviços que você oferece</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 text-yellow-400">⚠️ Erro Comum</h4>
                    <p className="text-gray-300">
                      Criar perfil e nunca mais atualizar. O Google favorece perfis ATIVOS. Poste atualizações semanais (novidades, dicas, fotos) para mostrar que sua empresa está viva.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Search className="h-8 w-8 text-revolux-green" />
                  Palavras-Chave Locais: Como Ser Encontrado
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Pessoas não buscam "serviços empresariais" - elas buscam "consultoria contábil em Curitiba" ou "agência de marketing digital Porto Alegre centro".
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-green-400">Tipos de Palavras-Chave Locais:</h3>
                  <div className="space-y-4">
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-revolux-green mb-2">1. Cidade/Bairro + Serviço</h4>
                      <p className="text-gray-300 mb-2">
                        "advogado trabalhista em São Paulo", "clínica odontológica Vila Mariana"
                      </p>
                      <p className="text-sm text-gray-400">Use essas palavras nos títulos, H1, H2 e naturalmente no conteúdo</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-blue-400 mb-2">2. "Perto de Mim"</h4>
                      <p className="text-gray-300 mb-2">
                        "restaurante japonês perto de mim", "academia perto de mim"
                      </p>
                      <p className="text-sm text-gray-400">O Google usa sua localização GPS. Certifique-se de ter endereço correto no Google Meu Negócio</p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-purple-400 mb-2">3. Bairro/Região Específica</h4>
                      <p className="text-gray-300 mb-2">
                        "coworking Pinheiros", "despachante zona sul Porto Alegre"
                      </p>
                      <p className="text-sm text-gray-400">Especialmente importante para grandes cidades</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Star className="h-8 w-8 text-revolux-green" />
                  Avaliações: O Fator de Ranqueamento Mais Poderoso
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Empresas com 4,5+ estrelas e muitas avaliações aparecem MUITO melhor no Google. E 90% dos consumidores leem avaliações antes de escolher uma empresa local.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-green-400">Estratégia de Avaliações:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Peça ATIVAMENTE:</strong> Após cada serviço bem-sucedido, envie link direto para avaliar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Facilite:</strong> QR Code, link curto, email automático</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>RESPONDA todas:</strong> Positivas E negativas. Mostra que você se importa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Incentive detalhes:</strong> "Conte como foi sua experiência" gera avaliações mais ricas em palavras-chave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Meta:</strong> 1-2 avaliações novas por semana (Google adora recência)</span>
                    </li>
                  </ul>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                    <p className="text-red-400 font-bold text-sm">⚠️ NUNCA compre avaliações falsas. O Google detecta e pode BANIR seu perfil permanentemente.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Globe className="h-8 w-8 text-revolux-green" />
                  NAP Consistency: O Segredo Escondido
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  NAP = Name, Address, Phone. O Google verifica se suas informações são CONSISTENTES em toda a internet. Inconsistências confundem o algoritmo e derrubam seu ranqueamento.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-green-400">Onde Verificar NAP:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Google Meu Negócio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Site (rodapé e página de contato)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Facebook, Instagram, LinkedIn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Diretórios (Guia Mais, Apontador, Yellow Pages)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Mapas (Waze, Apple Maps)</span>
                    </li>
                  </ul>
                  <div className="bg-revolux-dark-light rounded-lg p-4 mt-4">
                    <p className="text-gray-400 mb-2">Exemplo de inconsistência que prejudica:</p>
                    <p className="text-red-400 text-sm mb-1">❌ Site: "Rua das Flores, 123"</p>
                    <p className="text-red-400 text-sm mb-3">❌ Google: "R. Flores, 123 - Sala 5"</p>
                    <p className="text-gray-400 mb-2">Correto:</p>
                    <p className="text-revolux-green text-sm">✅ Todos: "Rua das Flores, 123 - Sala 5, Centro, São Paulo - SP, 01234-567"</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-revolux-green" />
                  Backlinks Locais: Autoridade Geográfica
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Links de sites locais (jornais da cidade, blogs regionais, parceiros locais) têm peso ENORME no SEO local.
                </p>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">Associações Comerciais</h4>
                    <p className="text-gray-300">
                      CDL, ACIC, Sebrae local. Peça para listar sua empresa no site deles (geralmente grátis para associados).
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Mídia Local</h4>
                    <p className="text-gray-300">
                      Jornais, blogs, sites de notícias da cidade. Ofereça expertise para matérias: "Empresário local dá dicas de..."
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2 text-purple-400">Parcerias Estratégicas</h4>
                    <p className="text-gray-300">
                      Empresas complementares. Escritório de contabilidade + consultoria jurídica = links mútuos relevantes.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 text-yellow-400">Eventos e Patrocínios</h4>
                    <p className="text-gray-300">
                      Patrocine eventos locais, apoie causas da comunidade. Sites de eventos sempre linkam patrocinadores.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Schema Markup Local: Fale a Língua do Google</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Schema Markup é código que "explica" para o Google o que cada informação do seu site significa. Para negócios locais, é crucial.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-green-400">Schemas Essenciais:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>LocalBusiness:</strong> Nome, endereço, telefone, horários</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Organization:</strong> Dados da empresa, logo, redes sociais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Review:</strong> Avaliações e estrelas (aparecem nos resultados de busca)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>Service:</strong> Serviços oferecidos com descrições</span>
                    </li>
                  </ul>
                  <div className="bg-revolux-dark-light rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-400">Ferramenta gratuita: Google Rich Results Test para testar seu schema</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">🗺️ Quer Dominar o SEO Local?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux otimiza sites institucionais para SEO local completo: Google Meu Negócio, palavras-chave locais, schema markup, NAP consistency e estratégia de backlinks. Apareça no topo do Google na sua região.
                  </p>
                  <Link
                    href="/site-institucional"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Otimizar Meu Site para SEO Local
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Checklist: SEO Local Perfeito</h2>

                <Card className="bg-revolux-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Google Meu Negócio 100% completo e verificado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">10+ fotos profissionais no perfil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Posts semanais no Google Meu Negócio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Palavras-chave locais em títulos e H1</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">NAP idêntico em site, redes e diretórios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">4,5+ estrelas com 50+ avaliações</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Resposta a todas avaliações</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Schema markup LocalBusiness implementado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Backlinks de 5+ sites locais relevantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Presença em diretórios locais principais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Página "Sobre" mencionando localização e região atendida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Google Maps integrado na página de contato</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 mt-12">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  SEO Local não é opcional - é obrigatório para qualquer empresa que atende clientes em uma região específica. A concorrência que domina o Local Pack do Google leva todos os clientes, enquanto quem fica na segunda página morre de fome.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Comece pelo Google Meu Negócio (80% dos resultados vêm daí), depois otimize seu site com palavras-chave locais e construa consistência NAP. Em 3-6 meses de trabalho consistente, você estará dominando sua região.
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
