'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { trackButtonClick } from '@/lib/analytics/analytics'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  trackingName?: string
  trackingLocation?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  trackingName,
  trackingLocation,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'text-revolux-green hover:text-revolux-green-light transition-colors',
  }

  const sizes = {
    sm: 'text-sm py-2 px-4',
    md: 'py-3 px-8',
    lg: 'text-lg py-4 px-10',
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingName && trackingLocation) {
      trackButtonClick(trackingName, trackingLocation)
    }
    onClick?.(e)
  }

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}
