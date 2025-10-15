export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Revolux Digital',
    url: 'https://revolux.digital',
    logo: 'https://revolux.digital/images/logo-full.png',
    description: 'Agência de desenvolvimento web especializada em landing pages de alta conversão, páginas de vendas e e-commerce.',
    founder: {
      '@type': 'Person',
      name: 'Revolux Digital',
    },
    foundingDate: '2023',
    sameAs: [
      `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM || 'revoluxpage'}`,
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Brasil',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
      contactType: 'customer service',
      availableLanguage: ['pt-BR'],
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      lowPrice: '1497',
      highPrice: '4997',
      offerCount: '5',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
