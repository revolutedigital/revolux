'use client'

import { useEffect } from 'react'
import { trackScrollDepth, trackTimeOnPage } from './analytics'

export function ScrollTracker() {
  useEffect(() => {
    let scrollDepths = new Set<number>()
    let startTime = Date.now()

    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      // Track at 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollDepths.has(milestone)) {
          scrollDepths.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    // Track time on page every 30 seconds
    const timeInterval = setInterval(() => {
      const secondsOnPage = Math.round((Date.now() - startTime) / 1000)
      trackTimeOnPage(secondsOnPage)
    }, 30000)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timeInterval)

      // Final time tracking on unmount
      const finalSeconds = Math.round((Date.now() - startTime) / 1000)
      if (finalSeconds > 10) {
        trackTimeOnPage(finalSeconds)
      }
    }
  }, [])

  return null
}
