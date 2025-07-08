import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

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
          <Navigation />
          <main className="min-h-screen px-4 md:px-8">
            <PageTransition>{children}</PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}