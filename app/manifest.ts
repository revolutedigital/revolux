import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Revolux Digital',
    short_name: 'Revolux',
    description: 'Criação de sites profissionais, e-commerce e projetos personalizados',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0E1A',
    theme_color: '#00FF88',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
