'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Mail, Phone } from 'lucide-react'
import { trackLinkClick, trackWhatsAppClick } from '@/lib/analytics/analytics'

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
  const email = process.env.NEXT_PUBLIC_EMAIL || 'contato@revolux.digital'
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM || 'revoluxpage'

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('footer')
    window.open(`https://wa.me/${whatsappNumber}`, '_blank')
  }

  const handleInstagramClick = () => {
    trackLinkClick('Instagram', `https://instagram.com/${instagram}`)
    window.open(`https://instagram.com/${instagram}`, '_blank')
  }

  const handleEmailClick = () => {
    trackLinkClick('Email', `mailto:${email}`)
    window.location.href = `mailto:${email}`
  }

  return (
    <footer className="bg-revolux-dark-light border-t border-revolux-dark-lighter">
      <div className="container-revolux py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo-full.png"
              alt="Revolux Digital"
              width={180}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 max-w-md">
              Transformamos ideias em experiências digitais incríveis. Sites profissionais,
              e-commerce e projetos personalizados com entrega rápida e qualidade garantida.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  onClick={() => trackLinkClick('Sobre Footer', '/sobre')}
                  className="text-gray-400 hover:text-revolux-green transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/sites-personalizados"
                  onClick={() => trackLinkClick('Sites Personalizados Footer', '/sites-personalizados')}
                  className="text-gray-400 hover:text-revolux-green transition-colors"
                >
                  Sites Personalizados
                </Link>
              </li>
              <li>
                <Link
                  href="/site-expresso"
                  onClick={() => trackLinkClick('Site Expresso Footer', '/site-expresso')}
                  className="text-gray-400 hover:text-revolux-green transition-colors"
                >
                  Site Expresso 24h
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center text-gray-400 hover:text-revolux-green transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center text-gray-400 hover:text-revolux-green transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {email}
                </button>
              </li>
              <li>
                <button
                  onClick={handleInstagramClick}
                  className="flex items-center text-gray-400 hover:text-revolux-green transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  @{instagram}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-revolux-dark-lighter mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Revolux Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
