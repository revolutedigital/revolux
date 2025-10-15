import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre - Revolux Digital',
  description: 'Landing pages, páginas de vendas, sites institucionais e lojas virtuais estrategicamente projetadas para transformar visitantes em clientes',
  alternates: {
    canonical: 'https://revolux.digital/sobre'
  }
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
