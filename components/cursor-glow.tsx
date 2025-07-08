'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if device has mouse
    const hasPointer = window.matchMedia('(pointer: fine)').matches
    if (!hasPointer) return

    setIsVisible(true)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-30 hidden md:block"
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
      }}
    >
      <div className="relative h-[400px] w-[400px]">
        {/* Outer glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(
                circle at center,
                transparent 0%,
                rgba(139, 92, 246, 0.3) 20%,
                rgba(236, 72, 153, 0.3) 35%,
                rgba(59, 130, 246, 0.3) 50%,
                rgba(16, 185, 129, 0.3) 65%,
                rgba(245, 158, 11, 0.3) 80%,
                transparent 100%
              )
            `,
            filter: 'blur(40px)',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
        
        {/* Inner glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(
                circle at center,
                transparent 0%,
                rgba(168, 85, 247, 0.4) 15%,
                rgba(236, 72, 153, 0.4) 30%,
                rgba(59, 130, 246, 0.4) 45%,
                rgba(16, 185, 129, 0.4) 60%,
                transparent 75%
              )
            `,
            filter: 'blur(20px)',
            animation: 'pulse 4s ease-in-out infinite 0.5s',
          }}
        />
        
        {/* Core glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(
                circle at center,
                transparent 0%,
                rgba(217, 70, 239, 0.5) 10%,
                rgba(99, 102, 241, 0.5) 20%,
                rgba(59, 130, 246, 0.5) 30%,
                transparent 50%
              )
            `,
            filter: 'blur(10px)',
            animation: 'pulse 4s ease-in-out infinite 1s',
          }}
        />
      </div>
    </div>
  )
}