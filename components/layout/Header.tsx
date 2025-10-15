'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { trackLinkClick } from '@/lib/analytics/analytics'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Sites Personalizados', href: '/sites-personalizados' },
  { name: 'Site Expresso', href: '/site-expresso' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (name: string, href: string) => {
    trackLinkClick(name, href)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-revolux-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-revolux">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleLinkClick('Logo', '/')}
            className="flex items-center space-x-2"
          >
            <Image
              src="/images/logo-full.png"
              alt="Revolux Digital"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleLinkClick(item.name, item.href)}
                className="text-white hover:text-revolux-green transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-revolux-dark-lighter">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleLinkClick(item.name, item.href)}
                className="block text-white hover:text-revolux-green transition-colors font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
