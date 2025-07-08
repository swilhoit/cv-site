import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function GrowthPage() {
  return (
    <div className="container max-w-4xl py-10">
      <section className="text-center py-32">
        <h1 className="text-2xl sm:text-3xl font-extralight tracking-wide mb-8">
          Growth
        </h1>
        <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Driving sustainable growth through strategic digital initiatives and data-driven decision making
        </p>
      </section>

      <section className="py-20 space-y-16">
        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Growth Strategy</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Market analysis, growth planning, conversion optimization, retention strategies
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Content & SEO</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Content strategy, search optimization, keyword research, technical SEO
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Digital Campaigns</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Paid acquisition, social media campaigns, email marketing, influencer partnerships
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Analytics & Insights</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Performance tracking, A/B testing, user analytics, ROI measurement
          </p>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-12 text-center">Growth Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xs font-mono font-extralight uppercase tracking-[0.2em] mb-4">Research</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Understanding your audience and market landscape
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono font-extralight uppercase tracking-[0.2em] mb-4">Strategy</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Creating data-driven plans for sustainable growth
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono font-extralight uppercase tracking-[0.2em] mb-4">Optimize</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Continuous improvement based on performance data
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 text-center">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-8">Ready to Grow Your Business?</h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-12">
          Let&apos;s create a growth strategy that delivers results
        </p>
        <Button size="sm" asChild className="text-xs">
          <Link href="/projects?category=growth">
            View Growth Projects <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </section>
    </div>
  )
}