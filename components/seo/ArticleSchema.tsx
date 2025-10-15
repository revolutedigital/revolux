interface ArticleSchemaProps {
  title: string
  description: string
  publishedDate: string
  modifiedDate?: string
  slug: string
  keywords?: string[]
  image?: string
}

export function ArticleSchema({
  title,
  description,
  publishedDate,
  modifiedDate,
  slug,
  keywords = [],
  image,
}: ArticleSchemaProps) {
  const baseUrl = 'https://revolux.digital'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || `${baseUrl}/images/og-image.png`,
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Revolux Digital',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Revolux Digital',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo-full.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${slug}`,
    },
    keywords: keywords.join(', '),
    articleSection: 'Marketing Digital',
    inLanguage: 'pt-BR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
