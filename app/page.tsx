import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code2, Megaphone, Palette } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container py-10">
      <section className="flex flex-col items-center text-center space-y-8 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Designer. Developer. Marketer.
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Bridging creativity and technology to build meaningful digital experiences
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Palette className="h-10 w-10 mb-4" />
              <CardTitle>Design</CardTitle>
              <CardDescription>
                Creating beautiful, intuitive interfaces that delight users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                UI/UX design, branding, visual identity, and design systems that bring ideas to life
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link href="/design">
                  Explore Design Work <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="h-10 w-10 mb-4" />
              <CardTitle>Development</CardTitle>
              <CardDescription>
                Building fast, scalable applications with modern technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Full-stack development, responsive websites, and web applications that perform
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link href="/code">
                  View Code Projects <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Megaphone className="h-10 w-10 mb-4" />
              <CardTitle>Marketing</CardTitle>
              <CardDescription>
                Driving growth through strategic digital marketing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                SEO, content strategy, social media, and campaigns that connect with audiences
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <Link href="/marketing">
                  See Marketing Work <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Create Something Amazing</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Ready to bring your ideas to life?
        </p>
        <Button size="lg" asChild>
          <Link href="/projects">
            Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  )
}