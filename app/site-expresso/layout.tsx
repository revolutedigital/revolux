import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Expresso - Entrega em 24 Horas | Revolux Digital',
  description: 'Precisa urgente? Entregamos landing pages profissionais em 24 horas, otimizadas para conversão e prontas para gerar vendas hoje mesmo. Entrega expressa garantida.',
  alternates: {
    canonical: 'https://revolux.digital/site-expresso'
  }
}

export default function SiteExpressoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
