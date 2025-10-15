import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página de Vendas que Converte 24/7 | Revolux Digital',
  description: 'Estrutura long-form com copywriting profissional que vende cursos, mentorias e infoprodutos no automático. Para infoprodutores que querem vender enquanto dormem.',
  alternates: {
    canonical: 'https://revolux.digital/pagina-de-vendas'
  }
}

export default function PaginaDeVendasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
