import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Institucional Profissional | Revolux Digital',
  description: 'Site institucional completo que transmite credibilidade, gera autoridade e converte visitantes em clientes corporativos. Presença digital profissional para empresas.',
  alternates: {
    canonical: 'https://revolux.digital/site-institucional'
  }
}

export default function SiteInstitucionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
