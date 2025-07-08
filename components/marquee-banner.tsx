'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function MarqueeBanner() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    const scrollContent = scrollContainer.firstElementChild as HTMLElement
    if (!scrollContent) return
    
    // Clone the content for seamless loop
    const clone = scrollContent.cloneNode(true) as HTMLElement
    scrollContainer.appendChild(clone)
    
    let scrollPos = 0
    const scrollSpeed = 0.5 // pixels per frame
    
    const animate = () => {
      scrollPos += scrollSpeed
      
      // Reset position when first set is fully scrolled
      if (scrollPos >= scrollContent.offsetWidth) {
        scrollPos = 0
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPos}px)`
      requestAnimationFrame(animate)
    }
    
    const animationId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      <div 
        className="relative h-10 flex items-center"
        style={{
          background: 'linear-gradient(90deg, #fde2e4 0%, #fad2e1 14%, #e2ece9 28%, #bee1e6 42%, #f0efeb 56%, #dfe7fd 70%, #cddafd 85%, #fde2e4 100%)',
        }}
      >
        <div 
          className="dark:hidden absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #fde2e4 0%, #fad2e1 14%, #e2ece9 28%, #bee1e6 42%, #f0efeb 56%, #dfe7fd 70%, #cddafd 85%, #fde2e4 100%)',
          }}
        />
        <div 
          className="hidden dark:block absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #4a0e11 0%, #4a1429 14%, #1d2926 28%, #1f2937 42%, #262522 56%, #1e1b4b 70%, #1e3a5f 85%, #4a0e11 100%)',
          }}
        />
        
        <div 
          ref={scrollRef}
          className="relative flex whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          <div className="flex items-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <Link
                key={i}
                href="/contact"
                className="inline-flex items-center px-8 text-xs font-mono font-extralight uppercase tracking-[0.2em] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                Schedule a call with me here
                <span className="mx-8">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}