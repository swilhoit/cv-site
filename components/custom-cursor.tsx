'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if device has mouse
    const hasPointer = window.matchMedia('(pointer: fine)').matches
    if (!hasPointer) return

    setIsVisible(true)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor circle with blur */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      >
        <div
          className={`h-10 w-10 rounded-full transition-all duration-150 ${
            isHovering ? 'scale-150' : ''
          } ${isClicking ? 'scale-75' : ''}`}
          style={{
            background: 'rgba(128, 128, 128, 0.3)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            border: '1px solid rgba(128, 128, 128, 0.4)',
          }}
        />
      </div>
      
      {/* Inner dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      >
        <div
          className={`h-1 w-1 rounded-full bg-gray-500 transition-all duration-100 ${
            isHovering ? 'opacity-0' : ''
          }`}
        />
      </div>
    </>
  )
}