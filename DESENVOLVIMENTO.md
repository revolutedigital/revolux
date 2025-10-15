# Guia de Desenvolvimento - Revolux Digital

## Início Rápido

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# 3. Rodar servidor de desenvolvimento
npm run dev

# 4. Abrir no navegador
# http://localhost:3000
```

## Estrutura do Projeto

```
revolux/
├── app/                          # App Router do Next.js
│   ├── page.tsx                  # Home/Linktree
│   ├── sites-personalizados/     # Página de sites customizados
│   ├── site-expresso/            # Página de site expresso 24h
│   ├── loja/                     # E-commerce
│   ├── carrinho/                 # Carrinho de compras
│   ├── layout.tsx                # Layout principal
│   ├── globals.css               # Estilos globais
│   ├── sitemap.ts                # Sitemap dinâmico
│   ├── robots.ts                 # Robots.txt
│   └── manifest.ts               # PWA manifest
│
├── components/                   # Componentes React
│   ├── ui/                       # Componentes de UI
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ProductCard.tsx
│   ├── layout/                   # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/                 # Seções de páginas
│       └── ContactForm.tsx
│
├── lib/                          # Bibliotecas e utilitários
│   ├── analytics/                # Sistema de analytics
│   │   ├── analytics.tsx         # Google Analytics + Meta Pixel
│   │   └── scroll-tracker.tsx    # Rastreamento de scroll
│   ├── store/                    # Estado global (Zustand)
│   │   └── cart-store.ts         # Store do carrinho
│   └── utils/                    # Funções utilitárias
│       └── products.ts           # Dados dos produtos
│
├── types/                        # TypeScript types
│   └── product.ts
│
├── public/                       # Arquivos estáticos
│   └── images/                   # Imagens
│
└── Arquivos de configuração
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.js
    └── railway.json
```

## Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor dev (porta 3000)

# Build
npm run build        # Build de produção
npm run start        # Roda build de produção

# Linting
npm run lint         # Roda ESLint
```

## Tecnologias Utilizadas

### Core
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **React 18** - Biblioteca UI

### Styling
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações

### State Management
- **Zustand** - Gerenciamento de estado simples e performático

### Analytics
- **Google Analytics (GA4)** - Analytics web
- **Meta Pixel** - Tracking do Facebook

### UI/UX
- **Lucide React** - Ícones
- **React Hot Toast** - Notificações

## Identidade Visual

### Cores

```css
/* Verde principal */
--revolux-green: #00FF88
--revolux-green-light: #00FFB2
--revolux-green-dark: #00CC6F

/* Dark/Background */
--revolux-dark: #0A0E1A
--revolux-dark-light: #141823
--revolux-dark-lighter: #1F2532

/* Gradiente */
background: linear-gradient(135deg, #00FF88 0%, #00D9FF 100%)
```

### Tipografia

- **Font:** Inter (Google Fonts)
- **Títulos:** Bold, 2xl-7xl
- **Corpo:** Regular, base-xl

## Adicionando Novas Funcionalidades

### 1. Nova Página

```bash
# Criar arquivo em app/
app/nova-pagina/page.tsx
```

```tsx
'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollTracker } from '@/lib/analytics/scroll-tracker'

export default function NovaPagina() {
  return (
    <>
      <ScrollTracker />
      <Header />

      <main className="min-h-screen pt-32 pb-20">
        {/* Seu conteúdo aqui */}
      </main>

      <Footer />
    </>
  )
}
```

### 2. Novo Componente

```bash
# Criar em components/ui/
components/ui/NomeComponente.tsx
```

```tsx
interface NomeComponenteProps {
  // Props aqui
}

export function NomeComponente(props: NomeComponenteProps) {
  return (
    // JSX aqui
  )
}
```

### 3. Novo Produto no E-commerce

Edite `lib/utils/products.ts`:

```tsx
{
  id: 'id-unico',
  name: 'Nome do Produto',
  description: 'Descrição',
  price: 997,
  image: '/images/products/produto.jpg',
  category: 'sites', // ou 'templates' ou 'servicos'
  features: [
    'Feature 1',
    'Feature 2',
  ],
}
```

## Analytics & Tracking

### Eventos Personalizados

```tsx
import { trackEvent } from '@/lib/analytics/analytics'

// Rastrear evento customizado
trackEvent('nome_evento', {
  parametro1: 'valor1',
  parametro2: 'valor2',
})

// Eventos específicos já prontos:
trackButtonClick('Nome do Botão', 'localização')
trackLinkClick('Nome do Link', '/destino')
trackFormSubmit('nome_formulario', { dados })
trackWhatsAppClick('contexto')
trackProductView(id, nome, preco)
trackAddToCart(id, nome, preco)
trackPurchase(transactionId, valor, items)
```

## SEO

### Metadata por Página

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Título da Página',
  description: 'Descrição para SEO',
}
```

### Open Graph

Já configurado no `layout.tsx`. Para personalizar por página, adicione:

```tsx
export const metadata: Metadata = {
  openGraph: {
    title: 'Título OG',
    description: 'Descrição OG',
    images: ['/images/og-custom.png'],
  },
}
```

## Boas Práticas

### 1. Componentes
- Use 'use client' apenas quando necessário
- Prefira Server Components quando possível
- Mantenha componentes pequenos e reutilizáveis

### 2. Performance
- Use Next.js Image component para imagens
- Lazy load quando apropriado
- Minimize uso de JavaScript no cliente

### 3. TypeScript
- Sempre defina tipos para props
- Use interfaces para objetos complexos
- Evite 'any' ao máximo

### 4. Styling
- Use classes do Tailwind
- Crie classes customizadas em globals.css quando necessário
- Mantenha consistência com a identidade visual

## Debug

### Logs de Desenvolvimento

```tsx
// Use apenas em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data)
}
```

### Analytics Debug

Analytics já loga no console em modo desenvolvimento.

## Problemas Comuns

### Build falha
- Verifique sintaxe TypeScript
- Rode `npm run lint`
- Limpe cache: `rm -rf .next && npm run build`

### Estilos não aparecem
- Verifique se o Tailwind está configurado
- Restart do dev server
- Clear cache do browser

### Analytics não funciona
- Verifique IDs no .env
- Use Network tab do DevTools
- Aguarde propagação (pode levar horas)

## Próximos Passos

### Features Sugeridas

1. **Blog:**
   - Adicionar CMS (Contentful, Sanity)
   - Páginas dinâmicas de posts
   - SEO otimizado para artigos

2. **Dashboard Admin:**
   - Gerenciar produtos
   - Ver analytics
   - Gerenciar pedidos

3. **Sistema de Pagamento:**
   - Stripe ou Mercado Pago
   - Checkout completo
   - Confirmação de pedidos

4. **Autenticação:**
   - NextAuth.js
   - Login de clientes
   - Área do cliente

5. **CRM Integration:**
   - Webhook para capturar leads
   - Integração com email marketing
   - Automações

## Suporte

- Documentação Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion

---

**Desenvolvido com ❤️ pela Revolux Digital**
