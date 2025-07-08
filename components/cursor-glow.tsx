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
        transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
      }}
    >
      <div className="relative h-[500px] w-[500px]">
        {/* Wavy distortion layer 1 */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 0%,
                rgba(139, 92, 246, 0.2) 25%,
                rgba(236, 72, 153, 0.2) 40%,
                rgba(59, 130, 246, 0.2) 55%,
                rgba(16, 185, 129, 0.2) 70%,
                transparent 100%
              )
            `,
            filter: 'blur(60px)',
            animation: 'waveDistort 8s ease-in-out infinite',
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Wavy distortion layer 2 */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 10%,
                rgba(168, 85, 247, 0.15) 30%,
                rgba(236, 72, 153, 0.15) 45%,
                rgba(59, 130, 246, 0.15) 60%,
                transparent 85%
              )
            `,
            filter: 'blur(50px)',
            animation: 'waveDistort 11s ease-in-out infinite reverse',
            transform: 'rotate(45deg)',
          }}
        />
        
        {/* Subtle core */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            background: `
              radial-gradient(
                circle at center,
                transparent 0%,
                rgba(217, 70, 239, 0.3) 15%,
                rgba(99, 102, 241, 0.3) 25%,
                rgba(59, 130, 246, 0.3) 35%,
                transparent 60%
              )
            `,
            filter: 'blur(40px)',
            animation: 'floatRandom 15s ease-in-out infinite',
          }}
        />

        {/* Random floating orb 1 */}
        <div
          className="absolute h-32 w-32 left-1/4 top-1/4 opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)',
            filter: 'blur(30px)',
            animation: 'floatOrb 20s ease-in-out infinite',
          }}
        />

        {/* Random floating orb 2 */}
        <div
          className="absolute h-24 w-24 right-1/3 bottom-1/3 opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent)',
            filter: 'blur(25px)',
            animation: 'floatOrb 17s ease-in-out infinite reverse',
          }}
        />
      </div>
    </div>
  )
}