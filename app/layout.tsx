import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/lib/analytics/analytics'
import { Toaster } from 'react-hot-toast'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://revolux.digital'),
  title: {
    default: 'Revolux Digital | Landing Pages de Alta Conversão',
    template: '%s | Revolux Digital'
  },
  description: 'Landing pages, páginas de captura e lojas virtuais projetadas para converter visitantes em clientes. Opção expressa de 24h disponível.',
  keywords: ['landing page', 'página de captura', 'página de vendas', 'conversão', 'infoprodutores', 'e-commerce', 'site expresso 24h'],
  authors: [{ name: 'Revolux Digital' }],
  creator: 'Revolux Digital',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://revolux.digital',
    title: 'Revolux Digital | Landing Pages de Alta Conversão',
    description: 'Páginas que transformam visitantes em clientes. Para infoprodutores, negócios e e-commerce.',
    siteName: 'Revolux Digital',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Revolux Digital',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revolux Digital | Landing Pages de Alta Conversão',
    description: 'Páginas que transformam visitantes em clientes. Para infoprodutores, negócios e e-commerce.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#141823',
              color: '#fff',
              border: '1px solid #00FF88',
            },
          }}
        />
      </body>
    </html>
  )
}
