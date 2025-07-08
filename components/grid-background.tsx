'use client'

import { useEffect, useRef } from 'react'

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

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
      
      // Earthier tones for grid lines
      const isDark = document.documentElement.classList.contains('dark')
      ctx.strokeStyle = isDark ? 'rgba(222, 209, 194, 0.12)' : 'rgba(89, 71, 56, 0.08)'
      ctx.lineWidth = isDark ? 0.5 : 0.5
      
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
          
          // Mouse influence for bubble effect
          const mouseWorldX = mouseRef.current.x - centerX - driftX
          const mouseWorldY = mouseRef.current.y - centerY - driftY
          const mouseDistX = x - mouseWorldX
          const mouseDistY = y - mouseWorldY
          const mouseDist = Math.sqrt(mouseDistX * mouseDistX + mouseDistY * mouseDistY)
          
          // Bubble parameters
          const bubbleRadius = 250
          const bubbleStrength = 120
          
          // Calculate bubble effect
          let warpX = 0
          let warpY = 0
          
          if (mouseDist < bubbleRadius) {
            // Inside the bubble radius
            const normalizedDist = mouseDist / bubbleRadius
            // Create a smooth falloff - stronger push near center
            const pushStrength = Math.pow(1 - normalizedDist, 2) * bubbleStrength
            
            // Push lines away from cursor center
            if (mouseDist > 0) {
              warpX = (mouseDistX / mouseDist) * pushStrength
              warpY = (mouseDistY / mouseDist) * pushStrength
            } else {
              // At exact center, push straight up
              warpY = -pushStrength
            }
            
            // Add slight spherical distortion for 3D bubble effect
            const sphericalFactor = Math.sqrt(1 - normalizedDist * normalizedDist)
            warpX *= (1 + sphericalFactor * 0.3)
            warpY *= (1 + sphericalFactor * 0.3)
          }
          
          // Melting effect - more pronounced at edges
          const meltAmount = normalizedDist * 20
          const meltY = Math.sin(time * 0.001 + i * 0.3) * meltAmount
          const meltX = Math.cos(time * 0.0008 + j * 0.2) * meltAmount * 0.5
          
          // Wave effect
          const waveX = Math.sin(time * 0.0003 + i * 0.1 + j * 0.05) * 5
          const waveY = Math.cos(time * 0.0004 + j * 0.1 + i * 0.05) * 5
          
          // Combine effects
          const finalX = x + waveX + meltX + warpX
          const finalY = y + waveY + meltY + warpY
          
          // Opacity based on distance
          const opacity = Math.max(0.1, 1 - normalizedDist * 0.8)
          ctx.globalAlpha = opacity
          
          // Draw horizontal lines with bezier curves for melting
          if (i < endGrid) {
            // Calculate next point with bubble effect
            const nextGridX = (i + 1) * gridSize
            const nextGridY = j * gridSize
            
            // Apply bubble effect to next point
            const nextMouseDistX = nextGridX - mouseWorldX
            const nextMouseDistY = nextGridY - mouseWorldY
            const nextMouseDist = Math.sqrt(nextMouseDistX * nextMouseDistX + nextMouseDistY * nextMouseDistY)
            
            let nextWarpX = 0
            let nextWarpY = 0
            
            if (nextMouseDist < bubbleRadius) {
              const nextNormalizedDist = nextMouseDist / bubbleRadius
              const nextPushStrength = Math.pow(1 - nextNormalizedDist, 2) * bubbleStrength
              
              if (nextMouseDist > 0) {
                nextWarpX = (nextMouseDistX / nextMouseDist) * nextPushStrength
                nextWarpY = (nextMouseDistY / nextMouseDist) * nextPushStrength
              }
              
              const nextSphericalFactor = Math.sqrt(1 - nextNormalizedDist * nextNormalizedDist)
              nextWarpX *= (1 + nextSphericalFactor * 0.3)
              nextWarpY *= (1 + nextSphericalFactor * 0.3)
            }
            
            const nextMeltY = Math.sin(time * 0.001 + (i + 1) * 0.3) * meltAmount
            const nextWaveX = Math.sin(time * 0.0003 + (i + 1) * 0.1 + j * 0.05) * 5
            const nextWaveY = Math.cos(time * 0.0004 + j * 0.1 + (i + 1) * 0.05) * 5
            
            const nextX = nextGridX + nextWaveX + meltX + nextWarpX
            const nextY = nextGridY + nextWaveY + nextMeltY + nextWarpY
            
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            ctx.lineTo(nextX, nextY)
            ctx.stroke()
          }
          
          // Draw vertical lines with bubble effect
          if (j < endGrid) {
            // Calculate next point with bubble effect
            const nextGridX = i * gridSize
            const nextGridY = (j + 1) * gridSize
            
            // Apply bubble effect to next point
            const nextMouseDistX = nextGridX - mouseWorldX
            const nextMouseDistY = nextGridY - mouseWorldY
            const nextMouseDist = Math.sqrt(nextMouseDistX * nextMouseDistX + nextMouseDistY * nextMouseDistY)
            
            let nextWarpX = 0
            let nextWarpY = 0
            
            if (nextMouseDist < bubbleRadius) {
              const nextNormalizedDist = nextMouseDist / bubbleRadius
              const nextPushStrength = Math.pow(1 - nextNormalizedDist, 2) * bubbleStrength
              
              if (nextMouseDist > 0) {
                nextWarpX = (nextMouseDistX / nextMouseDist) * nextPushStrength
                nextWarpY = (nextMouseDistY / nextMouseDist) * nextPushStrength
              }
              
              const nextSphericalFactor = Math.sqrt(1 - nextNormalizedDist * nextNormalizedDist)
              nextWarpX *= (1 + nextSphericalFactor * 0.3)
              nextWarpY *= (1 + nextSphericalFactor * 0.3)
            }
            
            const nextMeltX = Math.cos(time * 0.0008 + (j + 1) * 0.2) * meltAmount * 0.5
            const nextWaveX = Math.sin(time * 0.0003 + i * 0.1 + (j + 1) * 0.05) * 5
            const nextWaveY = Math.cos(time * 0.0004 + (j + 1) * 0.1 + i * 0.05) * 5
            
            const nextX = nextGridX + nextWaveX + nextMeltX + nextWarpX
            const nextY = nextGridY + nextWaveY + meltY + nextWarpY
            
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            ctx.lineTo(nextX, nextY)
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
    
    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)
    
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
      window.removeEventListener('mousemove', handleMouseMove)
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