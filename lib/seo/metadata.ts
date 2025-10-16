import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revolux.digital'

interface PageMetadataProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/images/og-image.png',
}: PageMetadataProps): Metadata {
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Revolux Digital',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
