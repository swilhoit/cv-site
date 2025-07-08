'use client'

import { useState, useEffect } from 'react'
import { 
  Bungee_Shade, 
  Fascinate_Inline, 
  Monoton, 
  Nabla, 
  Rubik_Wet_Paint,
  Bungee_Inline,
  Rubik_Moonrocks,
  Creepster,
  Rubik_Glitch,
  Modak
} from 'next/font/google'

const bungeeShade = Bungee_Shade({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee-shade'
})

const fascinateInline = Fascinate_Inline({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fascinate'
})

const monoton = Monoton({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monoton'
})

const nabla = Nabla({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-nabla'
})

const rubikWetPaint = Rubik_Wet_Paint({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik-wet'
})

const bungeeInline = Bungee_Inline({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee-inline'
})

const rubikMoonrocks = Rubik_Moonrocks({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik-moon'
})

const creepster = Creepster({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-creepster'
})

const rubikGlitch = Rubik_Glitch({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik-glitch'
})

const modak = Modak({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-modak'
})

const fonts = [
  { className: bungeeShade.className, variable: bungeeShade.variable },
  { className: fascinateInline.className, variable: fascinateInline.variable },
  { className: monoton.className, variable: monoton.variable },
  { className: nabla.className, variable: nabla.variable },
  { className: rubikWetPaint.className, variable: rubikWetPaint.variable },
  { className: bungeeInline.className, variable: bungeeInline.variable },
  { className: rubikMoonrocks.className, variable: rubikMoonrocks.variable },
  { className: creepster.className, variable: creepster.variable },
  { className: rubikGlitch.className, variable: rubikGlitch.variable },
  { className: modak.className, variable: modak.variable },
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
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight transition-all duration-300 whitespace-nowrap ${currentFont.className}`}
        style={{ fontWeight: 400 }}
      >
        Hello, I&apos;m Sam
      </h1>
    </div>
  )
}