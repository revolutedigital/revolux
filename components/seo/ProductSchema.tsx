interface ProductSchemaProps {
  name: string
  description: string
  price: string
  image?: string
  category?: string
}

export function ProductSchema({
  name,
  description,
  price,
  image,
  category = 'Web Development Services',
}: ProductSchemaProps) {
  const baseUrl = 'https://revolux.digital'

  // Extrair o valor numérico do preço (ex: "R$ 1.497" -> "1497")
  const numericPrice = price.replace(/[^\d]/g, '')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image || `${baseUrl}/images/og-image.png`,
    brand: {
      '@type': 'Brand',
      name: 'Revolux Digital',
    },
    offers: {
      '@type': 'Offer',
      price: numericPrice,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Revolux Digital',
      },
    },
    category: category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '150',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
