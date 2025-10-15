'use client'

import { Card } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { trackLinkClick } from '@/lib/analytics/analytics'

export function InstagramVideos() {
  const videos = [
    'DMiimxLxXhI',
    'DMddsLjP5gr',
    'DMbG2sEPKab',
    'DMQ7UX0P_z8',
  ]

  return (
    <section className="py-20 px-4 bg-revolux-dark-light">
      <div className="container-revolux">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <Instagram className="inline-block h-5 w-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-medium">@revoluxpage</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veja Nossos <span className="gradient-text">Projetos em Ação</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Confira no Instagram os sites que criamos e os resultados dos nossos clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((postId, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover={false} className="overflow-hidden">
                {/* Instagram Embed */}
                <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                  <iframe
                    src={`https://www.instagram.com/p/${postId}/embed`}
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              trackLinkClick('Instagram Profile', 'https://instagram.com/revoluxpage')
              window.open('https://instagram.com/revoluxpage', '_blank')
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            Seguir no Instagram
          </button>
        </motion.div>
      </div>
    </section>
  )
}
