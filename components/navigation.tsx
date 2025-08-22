"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Design", href: "/design" },
  { name: "Code", href: "/code" },
  { name: "Growth", href: "/growth" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-20">
      <nav className="flex h-full items-center justify-between px-8 md:px-16 lg:px-24">
        <Link href="/" className="font-serif text-3xl md:text-4xl font-normal">
          Sam Wilhoit
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          <ul className="flex gap-12 lg:gap-16 items-center">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-mono font-light uppercase tracking-[0.15em] text-base md:text-lg transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "font-mono font-light uppercase tracking-[0.15em] text-base md:text-lg transition-colors hover:text-primary flex items-center gap-1",
                  services.some(item => pathname === item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}>
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {services.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "font-mono font-light uppercase tracking-[0.1em] text-base",
                          pathname === item.href && "font-normal"
                        )}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
          
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden border-b bg-background/95 backdrop-blur transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-8 py-4 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block font-mono font-extralight uppercase tracking-[0.2em] text-sm py-2 transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="py-2 space-y-3">
            <div className="font-mono font-extralight uppercase tracking-[0.2em] text-xs text-muted-foreground">
              Services
            </div>
            {services.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block font-mono font-extralight uppercase tracking-[0.15em] text-sm py-1 pl-4 transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}