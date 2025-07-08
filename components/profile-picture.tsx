'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function ProfilePicture() {
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
        className={`fixed top-0 left-0 right-0 z-[70] bg-gradient-to-r from-pink-100 to-blue-100 dark:from-rose-950/10 dark:to-amber-950/10 transition-all duration-500 overflow-hidden border-b border-border ${
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

      {/* Profile Picture */}
      <div 
        className="relative w-24 h-24 rounded-full overflow-hidden transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? "https://picsum.photos/seed/samwilhoit2/400/400" : "https://picsum.photos/seed/samwilhoit/400/400"}
          alt="Sam Wilhoit"
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />
      </div>
    </>
  )
}