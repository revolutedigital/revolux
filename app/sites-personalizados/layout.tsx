import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sites Personalizados - Sistemas, Automações e IA Sob Medida | Revolux Digital',
  description: 'Desenvolvemos soluções personalizadas que automatizam processos, economizam horas e multiplicam resultados com inteligência artificial. Sistemas web, chatbots de IA e automações sob medida.',
  alternates: {
    canonical: 'https://revolux.digital/sites-personalizados'
  }
}

export default function SitesPersonalizadosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
