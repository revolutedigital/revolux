import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing Page de Alta Conversão | Revolux Digital',
  description: 'Landing page estratégica focada em uma ação: capturar o contato do seu cliente ideal e transformá-lo em venda. Copy persuasivo e otimizado para tráfego pago.',
  alternates: {
    canonical: 'https://revolux.digital/landing-page'
  }
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
