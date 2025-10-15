'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

// Google Analytics ID - Altere para o seu ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Meta Pixel ID - Altere para o seu ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'XXXXXXXXXX'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      // Track page views
      trackPageView(pathname)
    }
  }, [pathname])

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />

      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters)
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event tracked:', eventName, parameters)
  }
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
    timestamp: new Date().toISOString(),
  })
}

// Track link clicks
export const trackLinkClick = (linkName: string, destination: string) => {
  trackEvent('link_click', {
    link_name: linkName,
    destination: destination,
    timestamp: new Date().toISOString(),
  })
}

// Track form submissions
export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
    timestamp: new Date().toISOString(),
  })

  // Meta Pixel specific event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formName,
    })
  }
}

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page: window.location.pathname,
  })
}

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    seconds: seconds,
    page: window.location.pathname,
  })
}

// Track WhatsApp click
export const trackWhatsAppClick = (context: string) => {
  trackEvent('whatsapp_click', {
    context: context,
    timestamp: new Date().toISOString(),
  })

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'WhatsApp',
    })
  }
}

// Track product view (for e-commerce)
export const trackProductView = (productId: string, productName: string, price: number) => {
  trackEvent('view_item', {
    items: [{
      item_id: productId,
      item_name: productName,
      price: price,
    }]
  })

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_ids: [productId],
      content_type: 'product',
      value: price,
      currency: 'BRL',
    })
  }
}

// Track add to cart
export const trackAddToCart = (productId: string, productName: string, price: number) => {
  trackEvent('add_to_cart', {
    items: [{
      item_id: productId,
      item_name: productName,
      price: price,
    }]
  })

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      content_ids: [productId],
      content_type: 'product',
      value: price,
      currency: 'BRL',
    })
  }
}

// Track purchase
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'BRL',
    items: items,
  })

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: 'BRL',
    })
  }
}

// Declare gtag and fbq types
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}
