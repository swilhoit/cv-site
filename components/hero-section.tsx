'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="space-y-8">
        <div className="space-y-6">
          <p className="text-3xl md:text-5xl font-light max-w-[900px] leading-relaxed">
            Currently Product Design Lead at Geo.studio and CMO of Intercept.club, living in Los Angeles
          </p>
          
          {/* Bullet Points */}
          <ul className="space-y-5 text-3xl md:text-4xl font-light pt-8">
            <li className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl">•</span>
              <span>Product & Brand Design</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl">•</span>
              <span>Executive Dashboards</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl">•</span>
              <span>Growth Marketing</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl">•</span>
              <span>Web Development</span>
            </li>
          </ul>
        </div>
        
        <div className="flex gap-6">
          <Button asChild size="lg" className="text-xl md:text-2xl font-light px-10 py-7">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="text-xl md:text-2xl font-light px-10 py-7">
            <Link href="/about">About Me</Link>
          </Button>
        </div>
    </div>
  )
}