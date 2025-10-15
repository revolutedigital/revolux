'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { trackFormSubmit } from '@/lib/analytics/analytics'
import toast from 'react-hot-toast'
import { Send } from 'lucide-react'

interface ContactFormProps {
  formType: 'custom' | 'express' | 'ecommerce'
}

export function ContactForm({ formType }: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Track form submission
    trackFormSubmit(`contact_form_${formType}`, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      has_company: !!formData.company,
      message_length: formData.message.length,
    })

    // Create WhatsApp message
    const formTypeLabels = {
      custom: 'Sites Personalizados',
      express: 'Site Expresso (24h)',
      ecommerce: 'E-commerce',
    }

    const message = `
🚀 *Nova Solicitação - ${formTypeLabels[formType]}*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
${formData.company ? `*Empresa:* ${formData.company}` : ''}

*Mensagem:*
${formData.message}

_Enviado via revolux.digital_
    `.trim()

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Simulate sending (você pode integrar com API aqui)
    setTimeout(() => {
      setLoading(false)
      toast.success('Redirecionando para WhatsApp...')
      window.open(whatsappUrl, '_blank')

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-revolux-dark-lighter border border-revolux-dark-lighter rounded-lg focus:outline-none focus:border-revolux-green text-white placeholder-gray-500"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-revolux-dark-lighter border border-revolux-dark-lighter rounded-lg focus:outline-none focus:border-revolux-green text-white placeholder-gray-500"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-revolux-dark-lighter border border-revolux-dark-lighter rounded-lg focus:outline-none focus:border-revolux-green text-white placeholder-gray-500"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Empresa (opcional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-revolux-dark-lighter border border-revolux-dark-lighter rounded-lg focus:outline-none focus:border-revolux-green text-white placeholder-gray-500"
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Conte-nos sobre seu projeto *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-revolux-dark-lighter border border-revolux-dark-lighter rounded-lg focus:outline-none focus:border-revolux-green text-white placeholder-gray-500 resize-none"
          placeholder="Descreva seu projeto, objetivos, prazo desejado, etc."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={loading}
        className="w-full"
        trackingName={`Submit Form ${formType}`}
        trackingLocation="contact-form"
      >
        {loading ? 'Enviando...' : 'Enviar Mensagem'}
        {!loading && <Send className="inline-block ml-2 h-5 w-5" />}
      </Button>

      <p className="text-sm text-gray-400 text-center">
        Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa
      </p>
    </form>
  )
}
