'use client'

import { useEffect, useRef } from 'react'

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Grid parameters
      const gridSize = 50
      const cols = Math.ceil(canvas.width / gridSize) + 2
      const rows = Math.ceil(canvas.height / gridSize) + 2
      
      // More contrasted colors
      const isDark = document.documentElement.classList.contains('dark')
      ctx.strokeStyle = isDark ? 'rgba(120, 120, 120, 0.3)' : 'rgba(80, 80, 80, 0.4)'
      ctx.lineWidth = isDark ? 0.5 : 0.7

      // Draw animated grid with slow wave
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize
          
          // Slow wave animation
          const waveX = Math.sin(time * 0.0003 + i * 0.1 + j * 0.05) * 10
          const waveY = Math.cos(time * 0.0004 + j * 0.1 + i * 0.05) * 10
          
          // Draw horizontal lines
          if (i < cols - 1) {
            ctx.beginPath()
            ctx.moveTo(x + waveX, y + waveY)
            ctx.lineTo(x + gridSize + waveX, y + waveY)
            ctx.stroke()
          }
          
          // Draw vertical lines
          if (j < rows - 1) {
            ctx.beginPath()
            ctx.moveTo(x + waveX, y + waveY)
            ctx.lineTo(x + waveX, y + gridSize + waveY)
            ctx.stroke()
          }
        }
      }

      time += 16
      animationFrameId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      draw()
    })
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    })

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
      aria-hidden="true"
    />
  )
}