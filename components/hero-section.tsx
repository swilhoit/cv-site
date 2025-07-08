'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { AnimatedHeadline } from '@/components/animated-headline'

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Push down the navigation when marquee is visible
    const nav = document.querySelector('header')
    const main = document.querySelector('main')
    if (nav) {
      if (isHovered) {
        nav.style.top = '40px'
        nav.style.transition = 'top 500ms ease'
      } else {
        nav.style.top = '0'
      }
    }
    // Also push down main content
    if (main) {
      if (isHovered) {
        main.style.paddingTop = '40px'
        main.style.transition = 'padding-top 500ms ease'
      } else {
        main.style.paddingTop = '0'
      }
    }
  }, [isHovered])

  return (
    <>
      {/* Top Marquee Banner - shown on hover */}
      <div
        className={`fixed top-0 left-0 right-0 z-[70] bg-gradient-to-r from-orange-100/70 to-amber-100/70 dark:from-amber-950/15 dark:to-orange-950/15 transition-all duration-500 overflow-hidden border-b border-border ${
          isHovered ? 'h-10' : 'h-0'
        }`}
        style={{ margin: 0 }}
      >
        <div className="animate-marquee-reverse whitespace-nowrap py-2">
          <span className="mx-4 text-sm font-mono font-extralight uppercase tracking-[0.2em]">
            Schedule a call with me here • Available for new projects • Let&apos;s work together • 
          </span>
          <span className="mx-4 text-sm font-mono font-extralight uppercase tracking-[0.2em]">
            Schedule a call with me here • Available for new projects • Let&apos;s work together • 
          </span>
        </div>
      </div>

      {/* Hero Section with extended hover area */}
      <section 
        className="flex flex-col items-center text-center space-y-6 py-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile Picture */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden transition-all duration-300 hover:scale-110">
          <Image
            src={isHovered ? "https://picsum.photos/seed/samwilhoit2/400/400" : "https://picsum.photos/seed/samwilhoit/400/400"}
            alt="Sam Wilhoit"
            fill
            className="object-cover transition-opacity duration-300"
            priority
          />
        </div>
        
        <AnimatedHeadline />
        
        <p className="text-xl sm:text-2xl font-extralight tracking-wide max-w-[700px]">
          Currently Product Design Lead at Geo.studio and CMO of Intercept.club • Living in Los Angeles
        </p>
        
        <div className="flex gap-4">
          <Button asChild size="sm" className="text-xs font-light">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="sm" className="text-xs font-light">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>
    </>
  )
}