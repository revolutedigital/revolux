import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revolux.digital'

  // Blog posts com suas datas de publicação
  const blogPosts = [
    { slug: 'como-criar-landing-page-alta-conversao', date: '2025-01-15' },
    { slug: 'pagina-vendas-infoprodutos-guia-completo', date: '2025-01-12' },
    { slug: 'site-institucional-empresas-b2b', date: '2025-01-10' },
    { slug: 'ecommerce-inteligencia-artificial-2025', date: '2025-01-08' },
    { slug: 'chatbot-whatsapp-business-ia', date: '2025-01-05' },
    { slug: 'landing-page-otimizada-google-ads', date: '2025-01-03' },
    { slug: 'copywriting-pagina-vendas-converte', date: '2025-01-01' },
    { slug: 'seo-local-site-institucional', date: '2024-12-29' },
    { slug: 'social-commerce-instagram-vendas', date: '2024-12-27' },
    { slug: 'automacao-processos-ia-empresas', date: '2024-12-25' },
  ]

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    // Páginas principais de serviços
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sites-personalizados`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/site-expresso`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/landing-page`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pagina-de-vendas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/site-institucional`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecommerce`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    // Artigos do blog
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Loja (se houver produtos)
    {
      url: `${baseUrl}/loja`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]
}
