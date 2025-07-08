import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container py-10">
      <section className="flex flex-col items-center text-center space-y-12 py-32">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-8">
          <Image
            src="https://picsum.photos/seed/samwilhoit/400/400"
            alt="Sam Wilhoit"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-wide">
          Designer and Builder
        </h1>
        <p className="text-sm text-muted-foreground max-w-[600px] font-light leading-loose">
          Currently Product Design Lead at Geo.studio and CMO of Intercept.club
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
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm mb-3">Design</CardTitle>
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
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm mb-3">Development</CardTitle>
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
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm mb-3">Growth</CardTitle>
              <CardDescription className="text-xs leading-relaxed mt-2">
                Driving growth through strategic digital initiatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground leading-relaxed">
                SEO, content strategy, social media, and campaigns that connect with audiences
              </p>
              <Button variant="link" className="mt-4 p-0 text-xs font-light" asChild>
                <Link href="/growth">
                  See Growth Work <ArrowRight className="ml-1 h-3 w-3" />
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