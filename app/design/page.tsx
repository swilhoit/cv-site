import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Figma, Palette, Sparkles, Users } from "lucide-react"

export default function DesignPage() {
  return (
    <div className="container py-10">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
          Design That Inspires
        </h1>
        <p className="text-xl text-muted-foreground font-light mb-8">
          Creating visual experiences that connect with people and elevate brands
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-mono font-light uppercase tracking-wider mb-12">Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 mb-3" />
              <CardTitle>UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                User-centered design that prioritizes functionality and aesthetics
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• User interface design</li>
                <li>• User experience research</li>
                <li>• Wireframing and prototyping</li>
                <li>• Design systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="h-8 w-8 mb-3" />
              <CardTitle>Brand Identity</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                Building memorable brands that stand out in the market
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• Logo design</li>
                <li>• Brand guidelines</li>
                <li>• Visual identity systems</li>
                <li>• Marketing materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Figma className="h-8 w-8 mb-3" />
              <CardTitle>Digital Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                Modern digital designs for web and mobile platforms
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• Website design</li>
                <li>• Mobile app design</li>
                <li>• Social media graphics</li>
                <li>• Email templates</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-3" />
              <CardTitle>Design Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                Strategic design guidance to elevate your product
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• Design audits</li>
                <li>• UX strategy</li>
                <li>• Design workshops</li>
                <li>• Team training</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-mono font-light uppercase tracking-wider mb-4">Ready to Elevate Your Design?</h2>
        <p className="text-xl text-muted-foreground font-light mb-8">
          Let&apos;s create something beautiful together
        </p>
        <Button size="lg" asChild>
          <Link href="/projects?category=design">
            View Design Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  )
}