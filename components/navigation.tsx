"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const navigation = [
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono font-extralight uppercase tracking-[0.3em] text-xs">
          Portfolio
        </Link>
        
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-mono font-extralight uppercase tracking-[0.2em] text-xs transition-colors hover:text-primary",
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
                  "font-mono font-extralight uppercase tracking-[0.2em] text-xs transition-colors hover:text-primary flex items-center gap-1",
                  services.some(item => pathname === item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}>
                  Services
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {services.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "font-mono font-extralight uppercase tracking-[0.15em] text-xs",
                          pathname === item.href && "font-light"
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
      </nav>
    </header>
  )
}