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
      const gridSize = 60
      const perspective = 1000
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // More contrasted colors
      const isDark = document.documentElement.classList.contains('dark')
      ctx.strokeStyle = isDark ? 'rgba(140, 140, 140, 0.4)' : 'rgba(100, 100, 100, 0.5)'
      ctx.lineWidth = isDark ? 0.8 : 1

      // Draw animated 3D grid with more dramatic warping
      for (let x = -15; x <= 15; x++) {
        for (let z = -20; z <= 30; z++) {
          // More dramatic wave animation with multiple frequencies
          const wave1 = Math.sin(time * 0.002 + z * 0.3 + x * 0.1) * 30
          const wave2 = Math.cos(time * 0.001 + x * 0.4) * 20
          const wave3 = Math.sin(time * 0.0015 + (x + z) * 0.2) * 15
          const y = wave1 + wave2 + wave3
          
          // Add perspective distortion
          const distanceFromCenter = Math.sqrt(Math.pow(x * gridSize, 2) + Math.pow(z * 50, 2))
          const warp = Math.sin(time * 0.001 + distanceFromCenter * 0.001) * 10
          
          const scale = perspective / (perspective + z * 50 + warp)
          const projX = centerX + (x * gridSize - centerX) * scale
          const projY = centerY + (y + (z * 40)) * scale

          if (z < 30) {
            // Draw horizontal lines with opacity based on distance
            const opacity = Math.max(0.1, 1 - (z + 20) / 50)
            ctx.globalAlpha = opacity
            
            const nextScale = perspective / (perspective + (z + 1) * 50 + warp)
            const nextWave1 = Math.sin(time * 0.002 + (z + 1) * 0.3 + x * 0.1) * 30
            const nextWave2 = Math.cos(time * 0.001 + x * 0.4) * 20
            const nextWave3 = Math.sin(time * 0.0015 + (x + (z + 1)) * 0.2) * 15
            const nextY = nextWave1 + nextWave2 + nextWave3
            const nextProjX = centerX + (x * gridSize - centerX) * nextScale
            const nextProjY = centerY + (nextY + ((z + 1) * 40)) * nextScale

            ctx.beginPath()
            ctx.moveTo(projX, projY)
            ctx.lineTo(nextProjX, nextProjY)
            ctx.stroke()
          }

          if (x < 15) {
            // Draw vertical lines with warping
            const nextScale = perspective / (perspective + z * 50 + warp)
            const nextWave1 = Math.sin(time * 0.002 + z * 0.3 + (x + 1) * 0.1) * 30
            const nextWave2 = Math.cos(time * 0.001 + (x + 1) * 0.4) * 20
            const nextWave3 = Math.sin(time * 0.0015 + ((x + 1) + z) * 0.2) * 15
            const nextY = nextWave1 + nextWave2 + nextWave3
            const nextProjX = centerX + ((x + 1) * gridSize - centerX) * nextScale
            const nextProjY = centerY + (nextY + (z * 40)) * nextScale

            ctx.beginPath()
            ctx.moveTo(projX, projY)
            ctx.lineTo(nextProjX, nextProjY)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
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
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  )
}