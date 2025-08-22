'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <>
      {/* Top Marquee Banner - always visible */}
      <div
        className="fixed top-0 left-0 right-0 z-[70] h-10 bg-gradient-to-r from-blue-50/70 to-blue-100/70 dark:from-blue-950/15 dark:to-blue-950/15 overflow-hidden border-b border-border"
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

      {/* Hero Content - left aligned */}
      <div className="space-y-8">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="https://picsum.photos/seed/samwilhoit/400/400"
            alt="Sam Wilhoit"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl font-normal">
            Sam Wilhoit
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-[500px]">
            Currently Product Design Lead at Geo.studio and CMO of Intercept.club
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Living in Los Angeles
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button asChild size="default" className="text-base font-light">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="default" className="text-base font-light">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </>
  )
}