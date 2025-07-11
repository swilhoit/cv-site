import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { ProjectMarquee } from "@/components/project-marquee"
import { HeroSection } from "@/components/hero-section"
import { client } from "@/sanity/lib/client"
import { projectsQuery } from "@/sanity/lib/queries"

export default async function HomePage() {
  const projects = await client.fetch(projectsQuery)
  return (
    <div className="container py-10">
      <HeroSection />

      <ProjectMarquee projects={projects} />

      <section id="services" className="py-32">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] text-center mb-20">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pt-8">
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm mb-3">Brand</CardTitle>
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
              <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm mb-3">Product</CardTitle>
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