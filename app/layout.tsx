import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { GridBackground } from "@/components/grid-background"
import { CustomCursor } from "@/components/custom-cursor"
import { MarqueeBanner } from "@/components/marquee-banner"

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <GridBackground />
          <MarqueeBanner />
          <Navigation />
          <main className="min-h-screen px-4 md:px-8 pt-10">
            <PageTransition>{children}</PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}