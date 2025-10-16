interface ServiceSchemaProps {
  name: string
  description: string
  price: string
  category?: string
  url?: string
}

export function ServiceSchema({
  name,
  description,
  price,
  category = 'Web Development',
  url,
}: ServiceSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revolux.digital'
  const serviceUrl = url || baseUrl

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Revolux Digital',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Desenvolvimento Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: name,
            description: description,
          },
          price: price.replace('R$ ', '').replace('.', '').replace(',', '.'),
          priceCurrency: 'BRL',
        },
      ],
    },
    url: serviceUrl,
    category: category,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
