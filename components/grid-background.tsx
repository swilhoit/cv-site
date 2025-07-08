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
      
      // Save the current transformation matrix
      ctx.save()
      
      // Grid parameters
      const gridSize = 60
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Apply transformations
      ctx.translate(centerX, centerY)
      
      // Z-axis rotation simulation
      const rotationZ = Math.sin(time * 0.0001) * 0.1
      ctx.rotate(rotationZ)
      
      // Drift effect
      const driftX = Math.sin(time * 0.0002) * 50
      const driftY = Math.cos(time * 0.00015) * 30
      ctx.translate(driftX, driftY)
      
      // 50% transparent lines
      const isDark = document.documentElement.classList.contains('dark')
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
      ctx.lineWidth = isDark ? 0.5 : 0.7
      
      // Calculate visible grid bounds
      const gridBounds = Math.max(canvas.width, canvas.height) * 1.5
      const startGrid = -Math.ceil(gridBounds / gridSize)
      const endGrid = Math.ceil(gridBounds / gridSize)
      
      // Draw grid with melting effect
      for (let i = startGrid; i <= endGrid; i++) {
        for (let j = startGrid; j <= endGrid; j++) {
          const x = i * gridSize
          const y = j * gridSize
          
          // Distance from center for effects
          const distFromCenter = Math.sqrt(x * x + y * y)
          const normalizedDist = distFromCenter / (gridBounds * 0.7)
          
          // Melting effect - more pronounced at edges
          const meltAmount = normalizedDist * 20
          const meltY = Math.sin(time * 0.001 + i * 0.3) * meltAmount
          const meltX = Math.cos(time * 0.0008 + j * 0.2) * meltAmount * 0.5
          
          // Wave effect
          const waveX = Math.sin(time * 0.0003 + i * 0.1 + j * 0.05) * 5
          const waveY = Math.cos(time * 0.0004 + j * 0.1 + i * 0.05) * 5
          
          // Combine effects
          const finalX = x + waveX + meltX
          const finalY = y + waveY + meltY
          
          // Opacity based on distance
          const opacity = Math.max(0.1, 1 - normalizedDist * 0.8)
          ctx.globalAlpha = opacity
          
          // Draw horizontal lines with bezier curves for melting
          if (i < endGrid) {
            const nextX = finalX + gridSize
            const nextMeltY = Math.sin(time * 0.001 + (i + 1) * 0.3) * meltAmount
            const nextWaveY = Math.cos(time * 0.0004 + j * 0.1 + (i + 1) * 0.05) * 5
            const nextY = y + nextWaveY + nextMeltY
            
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            
            // Add melting drip effect
            const controlY = finalY + Math.sin(time * 0.002 + i * j) * meltAmount * 0.5
            ctx.quadraticCurveTo(
              finalX + gridSize * 0.5, 
              controlY, 
              nextX, 
              nextY
            )
            ctx.stroke()
          }
          
          // Draw vertical lines with melting
          if (j < endGrid) {
            const nextY = finalY + gridSize
            const nextMeltX = Math.cos(time * 0.0008 + (j + 1) * 0.2) * meltAmount * 0.5
            const nextWaveX = Math.sin(time * 0.0003 + i * 0.1 + (j + 1) * 0.05) * 5
            const nextX = x + nextWaveX + nextMeltX
            
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            
            // Add melting drip effect
            const controlX = finalX + Math.cos(time * 0.002 + i * j) * meltAmount * 0.3
            ctx.quadraticCurveTo(
              controlX, 
              finalY + gridSize * 0.5, 
              nextX, 
              nextY
            )
            ctx.stroke()
          }
        }
      }
      
      // Restore the transformation matrix
      ctx.restore()
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