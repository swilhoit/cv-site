'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Image as SanityImage } from 'sanity'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: SanityImage
}

interface ProjectMarqueeProps {
  projects: Project[]
}

export function ProjectMarquee({ projects }: ProjectMarqueeProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    const scrollContent = scrollContainer.firstElementChild as HTMLElement
    if (!scrollContent) return
    
    // Clone the content for seamless loop
    const clone = scrollContent.cloneNode(true) as HTMLElement
    scrollContainer.appendChild(clone)
    
    let scrollPos = 0
    const scrollSpeed = 1 // pixels per frame
    
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

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }
  
  if (projects.length === 0) return null
  
  return (
    <div className="w-full overflow-hidden py-8">
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-center gap-4">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug?.current || project._id}`}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-800/50 transition-colors group"
              onMouseEnter={() => setHoveredProject(project._id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={`https://picsum.photos/seed/${project._id}/100/100`}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="text-xs font-mono font-extralight uppercase tracking-wider">
                {project.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hover Image */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 170,
            opacity: hoveredProject ? 1 : 0,
          }}
        >
          <div className="relative w-[200px] h-[133px] rounded-lg overflow-hidden shadow-2xl border border-border bg-background">
            <Image
              src={`https://picsum.photos/seed/${hoveredProject}/400/266`}
              alt=""
              fill
              className="object-cover"
              sizes="200px"
              priority
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-border"></div>
        </div>
      )}
    </div>
  )
}