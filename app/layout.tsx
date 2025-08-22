import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { GridBackground } from "@/components/grid-background"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-sans"
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300"],
  variable: "--font-mono"
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: "Sam Wilhoit",
  description: "Designer, Developer, Growth Strategist",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <GridBackground />
          <Navigation />
          <main className="min-h-screen pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}