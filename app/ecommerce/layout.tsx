import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Completo - Venda Online 24/7 | Revolux Digital',
  description: 'E-commerce completo com gestão de produtos, pagamento integrado e frete automático. Loja virtual profissional para vender sem parar, 24 horas por dia.',
  alternates: {
    canonical: 'https://revolux.digital/ecommerce'
  }
}

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
