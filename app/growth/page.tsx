import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Megaphone, Search, Target } from "lucide-react"

export default function GrowthPage() {
  return (
    <div className="container py-10">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
          Growth That Drives Results
        </h1>
        <p className="text-xl text-muted-foreground font-light mb-8">
          Strategic digital growth to expand your brand and reach your audience
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-mono font-light uppercase tracking-wider mb-12">Growth Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Search className="h-8 w-8 mb-3" />
              <CardTitle>SEO & Content</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                Boost your visibility and attract organic traffic
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• SEO optimization</li>
                <li>• Content strategy</li>
                <li>• Keyword research</li>
                <li>• Blog writing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Megaphone className="h-8 w-8 mb-3" />
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                Engage your audience across all platforms
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• Social media strategy</li>
                <li>• Content creation</li>
                <li>• Community management</li>
                <li>• Influencer partnerships</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-8 w-8 mb-3" />
              <CardTitle>Digital Advertising</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                Targeted campaigns that deliver ROI
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• Google Ads</li>
                <li>• Facebook & Instagram Ads</li>
                <li>• LinkedIn campaigns</li>
                <li>• Retargeting strategies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 mb-3" />
              <CardTitle>Analytics & Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 font-light">
                Data-driven insights to optimize performance
              </CardDescription>
              <ul className="text-sm text-muted-foreground font-light space-y-2">
                <li>• Growth analytics</li>
                <li>• Conversion optimization</li>
                <li>• A/B testing</li>
                <li>• Performance reporting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-mono font-light uppercase tracking-wider mb-8">Growth Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1</div>
            <h3 className="text-xl font-mono font-light uppercase tracking-wider mb-2">Research</h3>
            <p className="text-muted-foreground font-light">
              Understanding your audience, market, and competition
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2</div>
            <h3 className="text-xl font-mono font-light uppercase tracking-wider mb-2">Strategy</h3>
            <p className="text-muted-foreground font-light">
              Creating targeted campaigns that resonate
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">3</div>
            <h3 className="text-xl font-mono font-light uppercase tracking-wider mb-2">Optimize</h3>
            <p className="text-muted-foreground font-light">
              Continuous improvement based on data insights
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-mono font-light uppercase tracking-wider mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl text-muted-foreground font-light mb-8">
          Let&apos;s create a growth strategy that delivers results
        </p>
        <Button size="lg" asChild>
          <Link href="/projects?category=growth">
            View Growth Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  )
}