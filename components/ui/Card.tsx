import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`card-revolux ${hover ? 'hover:scale-105 cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
