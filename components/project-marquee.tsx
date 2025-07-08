'use client'

import { useEffect, useRef } from 'react'
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
  
  if (projects.length === 0) return null
  
  return (
    <div className="w-full overflow-hidden py-8">
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        <div className="flex items-center gap-4">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug?.current || project._id}`}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-800/50 transition-colors group"
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
    </div>
  )
}