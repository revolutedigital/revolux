# Revolux Digital

Site profissional da Revolux Digital - Agência de desenvolvimento web e e-commerce.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Zustand** - Gerenciamento de estado
- **Google Analytics & Meta Pixel** - Analytics completo

## 🎯 Funcionalidades

- ✅ Landing page (Linktree)
- ✅ Página de Sites Personalizados com formulário
- ✅ Página de Site Expresso (24h) com formulário
- ✅ E-commerce completo (produtos, carrinho, checkout)
- ✅ Sistema de Analytics detalhado
- ✅ SEO otimizado
- ✅ Responsivo (mobile-first)
- ✅ Performance otimizada

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Editar .env com suas credenciais:
# - Google Analytics ID
# - Meta Pixel ID
# - WhatsApp
# - Email
# - Instagram
```

## 🔧 Desenvolvimento

```bash
# Rodar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar produção
npm start
```

## 📊 Analytics

O projeto possui tracking completo de:

- Page views
- Eventos personalizados
- Cliques em botões
- Cliques em links
- Submissões de formulários
- Scroll depth
- Tempo na página
- Visualizações de produtos
- Adicionar ao carrinho
- Compras

## 🎨 Identidade Visual

- **Cor primária:** Verde vibrante (#00FF88)
- **Cor secundária:** Dark (#0A0E1A)
- **Tipografia:** Inter (Google Fonts)

## 📱 Páginas

- `/` - Home (Linktree)
- `/sites-personalizados` - Sites sob medida
- `/site-expresso` - Sites em 24h
- `/loja` - E-commerce
- `/loja/[id]` - Página do produto
- `/carrinho` - Carrinho de compras

## 🚀 Deploy

### Railway

O projeto está configurado para deploy no Railway:

```bash
# Fazer deploy
railway up
```

### Variáveis de ambiente necessárias:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_EMAIL=contato@revolux.digital
NEXT_PUBLIC_INSTAGRAM=revoluxpage
NEXT_PUBLIC_SITE_URL=https://revolux.digital
```

## 📄 Licença

© 2024 Revolux Digital. Todos os direitos reservados.
