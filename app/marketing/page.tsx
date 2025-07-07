import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Megaphone, Search, Target } from "lucide-react"

export default function MarketingPage() {
  return (
    <div className="container py-10">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Marketing That Drives Results
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Strategic digital marketing to grow your brand and reach your audience
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-12">Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Search className="h-8 w-8 mb-3" />
              <CardTitle>SEO & Content</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Boost your visibility and attract organic traffic
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
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
              <CardDescription className="mb-4">
                Engage your audience across all platforms
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
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
              <CardDescription className="mb-4">
                Targeted campaigns that deliver ROI
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
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
              <CardDescription className="mb-4">
                Data-driven insights to optimize performance
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Marketing analytics</li>
                <li>• Conversion optimization</li>
                <li>• A/B testing</li>
                <li>• Performance reporting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Marketing Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2">Research</h3>
            <p className="text-muted-foreground">
              Understanding your audience, market, and competition
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2">Strategy</h3>
            <p className="text-muted-foreground">
              Creating targeted campaigns that resonate
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2">Optimize</h3>
            <p className="text-muted-foreground">
              Continuous improvement based on data insights
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let's create a marketing strategy that delivers results
        </p>
        <Button size="lg" asChild>
          <Link href="/projects?category=marketing">
            View Marketing Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  )
}