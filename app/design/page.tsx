import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DesignPage() {
  return (
    <div className="container max-w-4xl py-10">
      <section className="text-center py-32">
        <h1 className="text-2xl sm:text-3xl font-extralight tracking-wide mb-8">
          Design
        </h1>
        <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Creating visual experiences that connect with people and elevate brands through thoughtful, user-centered design
        </p>
      </section>

      <section className="py-20 space-y-16">
        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">UI/UX Design</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            User interface design, experience research, wireframing and prototyping, design systems
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Brand Identity</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Logo design, brand guidelines, visual identity systems, growth materials
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Digital Design</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Website design, mobile app design, social media graphics, email templates
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Design Consulting</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Design audits, UX strategy, design workshops, team training
          </p>
        </div>
      </section>

      <section className="py-32 text-center">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-8">Ready to Elevate Your Design?</h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-12">
          Let&apos;s create something beautiful together
        </p>
        <Button size="sm" asChild className="text-xs">
          <Link href="/projects?category=design">
            View Design Projects <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </section>
    </div>
  )
}