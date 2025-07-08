import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code2, Megaphone, Palette } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container py-10">
      <section className="flex flex-col items-center text-center space-y-12 py-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-wide">
          Designer. Developer. Marketer.
        </h1>
        <p className="text-sm text-muted-foreground max-w-[600px] font-light leading-loose">
          Bridging creativity and technology to build meaningful digital experiences
        </p>
        <div className="flex gap-4">
          <Button asChild size="sm" className="text-xs font-light">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="sm" className="text-xs font-light">
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-32">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] text-center mb-20">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pt-8">
              <Palette className="h-6 w-6 mb-6" />
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Design</CardTitle>
              <CardDescription className="text-xs leading-relaxed mt-2">
                Creating beautiful, intuitive interfaces that delight users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground leading-relaxed">
                UI/UX design, branding, visual identity, and design systems that bring ideas to life
              </p>
              <Button variant="link" className="mt-4 p-0 text-xs font-light" asChild>
                <Link href="/design">
                  Explore Design Work <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pt-8">
              <Code2 className="h-6 w-6 mb-6" />
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Development</CardTitle>
              <CardDescription className="text-xs leading-relaxed mt-2">
                Building fast, scalable applications with modern technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full-stack development, responsive websites, and web applications that perform
              </p>
              <Button variant="link" className="mt-4 p-0 text-xs font-light" asChild>
                <Link href="/code">
                  View Code Projects <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pt-8">
              <Megaphone className="h-6 w-6 mb-6" />
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Marketing</CardTitle>
              <CardDescription className="text-xs leading-relaxed mt-2">
                Driving growth through strategic digital marketing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground leading-relaxed">
                SEO, content strategy, social media, and campaigns that connect with audiences
              </p>
              <Button variant="link" className="mt-4 p-0 text-xs font-light" asChild>
                <Link href="/marketing">
                  See Marketing Work <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-32 text-center">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-8">Let&apos;s Create Something Amazing</h2>
        <p className="text-sm text-muted-foreground mb-12 font-light leading-relaxed">
          Ready to bring your ideas to life?
        </p>
        <Button size="sm" asChild className="text-xs font-light">
          <Link href="/projects">
            Explore My Work <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </section>
    </div>
  )
}