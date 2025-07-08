'use client'

import { useState, useEffect } from 'react'
import { Playfair_Display, Bebas_Neue, Oswald, Abril_Fatface, Anton, Bungee, Rubik_Mono_One, Righteous, Poppins, Space_Grotesk } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: '900',
  variable: '--font-playfair'
})

const bebas = Bebas_Neue({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas'
})

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: '700',
  variable: '--font-oswald'
})

const abril = Abril_Fatface({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abril'
})

const anton = Anton({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton'
})

const bungee = Bungee({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee'
})

const rubik = Rubik_Mono_One({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik'
})

const righteous = Righteous({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: '900',
  variable: '--font-poppins'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: '700',
  variable: '--font-space'
})

const fonts = [
  { className: playfair.className, variable: playfair.variable },
  { className: bebas.className, variable: bebas.variable },
  { className: oswald.className, variable: oswald.variable },
  { className: abril.className, variable: abril.variable },
  { className: anton.className, variable: anton.variable },
  { className: bungee.className, variable: bungee.variable },
  { className: rubik.className, variable: rubik.variable },
  { className: righteous.className, variable: righteous.variable },
  { className: poppins.className, variable: poppins.variable },
  { className: spaceGrotesk.className, variable: spaceGrotesk.variable },
]

export function AnimatedHeadline() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const currentFont = fonts[currentFontIndex]

  return (
    <div className={`${fonts.map(f => f.variable).join(' ')}`}>
      <h1 
        className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight transition-all duration-300 ${currentFont.className}`}
        style={{ fontWeight: 900 }}
      >
        Hello, I&apos;m Sam
      </h1>
    </div>
  )
}