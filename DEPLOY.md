# Guia de Deploy - Revolux Digital

## Deploy no Railway

### 1. Preparação

Antes de fazer deploy, certifique-se de que:

- O código está commitado no Git
- Todas as dependências estão instaladas (`npm install`)
- O build local funciona (`npm run build`)

### 2. Criar conta no Railway

1. Acesse https://railway.app
2. Faça login com GitHub
3. Autorize o Railway a acessar seus repositórios

### 3. Criar novo projeto

1. Click em "New Project"
2. Escolha "Deploy from GitHub repo"
3. Selecione o repositório `revolux`
4. Railway irá detectar automaticamente o Next.js

### 4. Configurar variáveis de ambiente

No dashboard do Railway, vá em "Variables" e adicione:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX

# Contact
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_EMAIL=contato@revolux.digital
NEXT_PUBLIC_INSTAGRAM=revoluxpage

# Site URL (depois que o Railway gerar a URL, atualize aqui)
NEXT_PUBLIC_SITE_URL=https://revolux-production.up.railway.app
```

### 5. Deploy

1. Railway fará o deploy automaticamente após você adicionar o projeto
2. Aguarde o build completar (2-5 minutos)
3. Railway gerará uma URL pública automaticamente

### 6. Configurar domínio personalizado (Opcional)

1. No dashboard do Railway, vá em "Settings"
2. Em "Domains", click em "Generate Domain" ou "Custom Domain"
3. Para domínio personalizado:
   - Adicione o domínio (ex: revolux.digital)
   - Configure os DNS records conforme instruções do Railway
   - Aguarde propagação DNS (pode levar até 24h)

### 7. Atualizar variáveis

Após obter a URL final, atualize:

1. `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente do Railway
2. Faça redeploy (Settings > Redeploy)

### 8. Google Analytics e Meta Pixel

1. **Google Analytics:**
   - Acesse https://analytics.google.com
   - Crie uma propriedade
   - Copie o ID (formato: G-XXXXXXXXXX)
   - Atualize `NEXT_PUBLIC_GA_ID` no Railway

2. **Meta Pixel:**
   - Acesse https://business.facebook.com/events_manager
   - Crie um Pixel
   - Copie o ID
   - Atualize `NEXT_PUBLIC_META_PIXEL_ID` no Railway

### 9. Monitoramento

- Railway oferece logs em tempo real
- Acesse "Deployments" para ver status
- Use "Metrics" para monitorar performance

## Alternativas de Deploy

### Vercel (Alternativa Recomendada)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy manual via dashboard
# Upload pasta .next
```

## Troubleshooting

### Build falha

- Verifique se todas as variáveis de ambiente estão configuradas
- Rode `npm run build` localmente primeiro
- Verifique os logs no Railway

### Página em branco

- Verifique se `NEXT_PUBLIC_SITE_URL` está correto
- Clear cache do browser
- Verifique os logs de runtime

### Analytics não funciona

- Verifique se os IDs estão corretos
- Aguarde algumas horas para os dados aparecerem
- Use modo desenvolvedor do browser para debug

## Manutenção

### Fazer updates

1. Commit e push no GitHub
2. Railway fará redeploy automático
3. Monitore os logs

### Rollback

1. No Railway, vá em "Deployments"
2. Click no deployment anterior
3. Click em "Redeploy"

## Suporte

- Railway: https://railway.app/help
- Next.js: https://nextjs.org/docs
- Documentação: Veja README.md

---

Desenvolvido por Revolux Digital
