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
      const perspective = 800
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Determine line color based on theme
      const isDark = document.documentElement.classList.contains('dark')
      ctx.strokeStyle = isDark ? 'rgba(75, 75, 75, 0.3)' : 'rgba(200, 200, 200, 0.3)'
      ctx.lineWidth = 0.5

      // Draw animated 3D grid
      for (let x = -10; x <= 10; x++) {
        for (let z = -10; z <= 20; z++) {
          // Calculate 3D to 2D projection with animation
          const y = Math.sin(time * 0.001 + z * 0.5) * 10
          
          const scale = perspective / (perspective + z * 50)
          const projX = centerX + (x * gridSize - centerX) * scale
          const projY = centerY + (y + (z * 30)) * scale

          if (z < 20) {
            // Draw horizontal lines
            const nextScale = perspective / (perspective + (z + 1) * 50)
            const nextY = Math.sin(time * 0.001 + (z + 1) * 0.5) * 10
            const nextProjX = centerX + (x * gridSize - centerX) * nextScale
            const nextProjY = centerY + (nextY + ((z + 1) * 30)) * nextScale

            ctx.beginPath()
            ctx.moveTo(projX, projY)
            ctx.lineTo(nextProjX, nextProjY)
            ctx.stroke()
          }

          if (x < 10) {
            // Draw vertical lines
            const nextScale = perspective / (perspective + z * 50)
            const nextY = Math.sin(time * 0.001 + z * 0.5) * 10
            const nextProjX = centerX + ((x + 1) * gridSize - centerX) * nextScale
            const nextProjY = centerY + (nextY + (z * 30)) * nextScale

            ctx.beginPath()
            ctx.moveTo(projX, projY)
            ctx.lineTo(nextProjX, nextProjY)
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
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  )
}