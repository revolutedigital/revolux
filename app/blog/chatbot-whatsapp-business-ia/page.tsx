import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chatbot com IA para WhatsApp Business: Guia Prático 2025 | Revolux',
  description: 'Aprenda a implementar chatbot com IA no WhatsApp Business. Atendimento 24/7, qualificação de leads, automação de vendas e integração com CRM. Guia completo passo a passo.',
  keywords: ['chatbot', 'WhatsApp Business', 'inteligência artificial', 'automação', 'atendimento', 'leads', 'CRM', 'vendas automatizadas'],
  openGraph: {
    title: 'Chatbot com IA para WhatsApp Business: Guia Prático',
    description: 'Multiplique suas vendas com chatbot inteligente no WhatsApp. Atendimento 24/7, qualificação automática de leads e integração com CRM',
    type: 'article',
    publishedTime: '2025-01-05T00:00:00Z',
    authors: ['Revolux Digital'],
    tags: ['chatbot', 'WhatsApp Business', 'inteligência artificial', 'automação', 'vendas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatbot com IA para WhatsApp Business: Guia Prático',
    description: 'Multiplique suas vendas com chatbot inteligente no WhatsApp',
  },
}

'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, CheckCircle, MessageSquare, Bot, Zap, Users, TrendingUp, Settings } from 'lucide-react'
import Link from 'next/link'

export default function ChatbotWhatsAppBusinessIA() {
  return (
    <>
      <ArticleSchema
        title="Chatbot com IA para WhatsApp Business: Guia Prático 2025 | Revolux"
        description="Aprenda a implementar chatbot com IA no WhatsApp Business. Atendimento 24/7, qualificação de leads, automação de vendas e integração com CRM. Guia completo passo a passo."
        publishedDate="2025-01-05T00:00:00Z"
        slug="chatbot-whatsapp-business-ia"
        keywords={['chatbot', 'WhatsApp Business', 'inteligência artificial', 'automação', 'atendimento', 'leads', 'CRM', 'vendas automatizadas']}
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
                Automação e IA
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Chatbot com IA para <span className="gradient-text">WhatsApp Business</span>: Guia Prático
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>05 de Janeiro, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>11 minutos de leitura</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Atender clientes no WhatsApp 24/7, qualificar leads automaticamente e fechar vendas sem intervenção humana não é mais ficção científica. Neste guia completo, você vai aprender passo a passo como implementar um chatbot com IA no WhatsApp Business e multiplicar suas vendas.
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
                  <MessageSquare className="h-8 w-8 text-revolux-green" />
                  Por Que WhatsApp + IA é a Combinação Perfeita?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  O WhatsApp tem 2 bilhões de usuários ativos e taxa de abertura de 98% (contra 20% do email). Quando você combina esse alcance com Inteligência Artificial, você cria uma máquina de vendas que nunca dorme, nunca erra e sempre aprende.
                </p>

                <div className="bg-revolux-green/10 border border-revolux-green/30 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-revolux-green mb-3">📊 Dados Impressionantes</h3>
                  <p className="text-gray-300 mb-2">
                    Empresas que implementam chatbots com IA no WhatsApp relatam:
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>80% de redução</strong> no tempo de resposta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>40% de aumento</strong> na conversão de leads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                      <span className="text-gray-300"><strong>70% de economia</strong> em custos de atendimento</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-3">
                  <Bot className="h-8 w-8 text-revolux-green" />
                  Como Funciona um Chatbot com IA no WhatsApp?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Diferente dos chatbots antigos (aqueles que só entendem comandos específicos), os chatbots modernos usam Processamento de Linguagem Natural (NLP) para entender contexto, intenção e até sarcasmo.
                </p>

                <div className="bg-revolux-dark rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-400">Arquitetura Básica:</h3>
                  <div className="space-y-4">
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-400 mb-2">1. WhatsApp Business API</h4>
                      <p className="text-gray-300">
                        Conexão oficial do WhatsApp que permite automação. Diferente do app comum, a API aceita integrações com sistemas externos.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                      <h4 className="font-bold text-revolux-green mb-2">2. Motor de IA (GPT-4, Claude, etc)</h4>
                      <p className="text-gray-300">
                        O "cérebro" do chatbot. Recebe a mensagem do cliente, entende o contexto e gera respostas naturais e relevantes.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                      <h4 className="font-bold text-purple-400 mb-2">3. Base de Conhecimento</h4>
                      <p className="text-gray-300">
                        Catálogo de produtos, perguntas frequentes, políticas da empresa. A IA consulta essa base para responder com precisão.
                      </p>
                    </div>
                    <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-400 mb-2">4. Integrações (CRM, Pagamentos, etc)</h4>
                      <p className="text-gray-300">
                        Conecta com seu sistema para acessar dados de clientes, registrar vendas, gerar links de pagamento.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Zap className="h-8 w-8 text-revolux-green" />
                  Funcionalidades Essenciais do Chatbot com IA
                </h2>

                <div className="space-y-6">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">1. Atendimento 24/7 Inteligente</h3>
                    <p className="text-gray-300 mb-3">
                      Seu chatbot nunca dorme. Ele responde dúvidas, resolve problemas e fecha vendas a qualquer hora do dia ou da noite.
                    </p>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Exemplo de conversa:</p>
                      <div className="space-y-3">
                        <div className="bg-blue-500/10 rounded-lg p-3 text-sm">
                          <p className="text-gray-400 mb-1">Cliente (3h da manhã):</p>
                          <p className="text-gray-200">"Vocês entregam em São Paulo?"</p>
                        </div>
                        <div className="bg-revolux-green/10 rounded-lg p-3 text-sm">
                          <p className="text-gray-400 mb-1">Chatbot (resposta instantânea):</p>
                          <p className="text-gray-200">"Sim! Entregamos em toda São Paulo capital em até 48h. Para qual bairro você precisa? Posso calcular o frete agora mesmo 📦"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">2. Qualificação Automática de Leads</h3>
                    <p className="text-gray-300 mb-3">
                      Nem todo lead é igual. O chatbot faz perguntas estratégicas para identificar leads quentes e enviá-los direto para o comercial.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Identifica orçamento, prazo e necessidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Classifica em "quente", "morno" ou "frio"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Envia alertas para vendedor quando lead está pronto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Nutre leads frios com conteúdo automático</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">3. Automação de Vendas Completa</h3>
                    <p className="text-gray-300 mb-3">
                      O chatbot não só qualifica - ele VENDE. Do interesse inicial ao pagamento:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Mostra catálogo de produtos com fotos e preços</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Responde dúvidas técnicas sobre cada produto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Calcula frete em tempo real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Gera link de pagamento (Pix, cartão, boleto)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Confirma pagamento e envia código de rastreio</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">4. Integração com CRM</h3>
                    <p className="text-gray-300 mb-3">
                      Todo contato é registrado automaticamente no seu CRM (RD Station, HubSpot, Pipedrive, etc):
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Histórico completo de conversas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Tags automáticas baseadas em comportamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Atualização em tempo real do funil de vendas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Relatórios de performance e conversão</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">5. Handoff Inteligente para Humanos</h3>
                    <p className="text-gray-300 mb-3">
                      O chatbot sabe quando precisa passar para um humano. Situações complexas, clientes VIP ou solicitações específicas são transferidas com todo o contexto da conversa.
                    </p>
                    <div className="bg-revolux-dark-light rounded-lg p-4">
                      <h4 className="font-bold text-revolux-green mb-2">Quando o Bot Transfere:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Cliente explicitamente pede para falar com humano</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Problema técnico fora da base de conhecimento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Lead quente com alto ticket (definido por você)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">Reclamação ou situação delicada</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
                  <Settings className="h-8 w-8 text-revolux-green" />
                  Como Implementar: Passo a Passo
                </h2>

                <div className="space-y-4">
                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-revolux-green">Passo 1: Configure WhatsApp Business API</h3>
                    <p className="text-gray-300">
                      Você precisa de uma conta Business API (diferente do app WhatsApp Business). Plataformas como Twilio, 360dialog ou Meta fornecem acesso. Custo: R$300-800/mês dependendo do volume.
                    </p>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">Passo 2: Escolha a Plataforma de IA</h3>
                    <p className="text-gray-300">
                      Opções populares: ChatGPT (OpenAI), Claude (Anthropic), ou plataformas no-code como ManyChat + IA, Typebot, Botpress. Para negócios, recomendamos soluções personalizadas.
                    </p>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">Passo 3: Construa a Base de Conhecimento</h3>
                    <p className="text-gray-300 mb-3">
                      Documente TUDO que seu bot precisa saber:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Catálogo completo de produtos/serviços</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Perguntas frequentes (FAQ extenso)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Políticas (envio, devolução, garantia)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-revolux-green flex-shrink-0 mt-1" />
                        <span className="text-gray-300">Scripts de vendas e objeções comuns</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-yellow-400">Passo 4: Treine e Teste</h3>
                    <p className="text-gray-300">
                      Antes de lançar, teste TUDO. Crie conversas simuladas, identifique falhas, ajuste respostas. Um chatbot mal treinado pode afastar clientes.
                    </p>
                  </div>

                  <div className="bg-revolux-dark rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-orange-400">Passo 5: Lance e Monitore</h3>
                    <p className="text-gray-300">
                      Comece com um grupo pequeno de clientes, monitore as conversas, identifique melhorias. A IA aprende continuamente, mas precisa de supervisão inicial.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold mb-4">🤖 Quer um Chatbot Profissional com IA?</h3>
                  <p className="text-gray-300 mb-6">
                    A Revolux desenvolve chatbots inteligentes para WhatsApp Business integrados com IA de última geração. Qualificação de leads, automação de vendas, integração com CRM e muito mais.
                  </p>
                  <Link
                    href="/sites-personalizados"
                    className="inline-flex items-center gap-2 bg-gradient-revolux text-revolux-dark px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-revolux-green/30 transition-all duration-300"
                  >
                    Criar Meu Chatbot com IA
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Exemplos Práticos de Uso</h2>

                <div className="space-y-4">
                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-revolux-green">
                    <h4 className="font-bold text-lg mb-2 text-revolux-green">E-commerce</h4>
                    <p className="text-gray-300">
                      Catálogo visual, cálculo de frete, geração de links de pagamento, confirmação de pedidos, rastreamento de entregas.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Clínicas e Consultórios</h4>
                    <p className="text-gray-300">
                      Agendamento de consultas, envio de lembretes, confirmação de presença, informações sobre procedimentos, primeira triagem.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2 text-purple-400">Imobiliárias</h4>
                    <p className="text-gray-300">
                      Filtro de imóveis por características, agendamento de visitas, envio de fotos e vídeos, cálculo de financiamento.
                    </p>
                  </div>

                  <div className="bg-revolux-dark-light rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 text-yellow-400">Restaurantes</h4>
                    <p className="text-gray-300">
                      Menu digital, pedidos automatizados, sugestões personalizadas, rastreamento de entrega, programa de fidelidade.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12">Checklist: Chatbot WhatsApp com IA</h2>

                <Card className="bg-revolux-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">WhatsApp Business API configurado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Motor de IA treinado com sua base de conhecimento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Fluxos de qualificação de leads definidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Integração com sistema de pagamentos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Conexão com CRM para registro de contatos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Sistema de handoff para atendimento humano</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Dashboard de métricas e análises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Backup de conversas e conformidade LGPD</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Testes extensivos antes do lançamento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-revolux-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Plano de melhoria contínua</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 mt-12">Conclusão</h2>

                <p className="text-gray-300 leading-relaxed">
                  Um chatbot com IA no WhatsApp Business não é apenas uma automação - é um investimento que se paga sozinho. Com atendimento 24/7, qualificação automática e vendas sem intervenção humana, você multiplica resultados enquanto reduz custos.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Comece pequeno, teste, aprenda e escale. A tecnologia está madura, acessível e comprovada. Empresas que não adotarem agora estarão em desvantagem competitiva em 2025.
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
