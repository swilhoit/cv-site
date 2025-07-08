import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-10 max-w-4xl">
      {/* Hero Section */}
      <section className="space-y-8 py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="https://picsum.photos/seed/samwilhoit/800/800"
              alt="Sam Wilhoit"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extralight tracking-tight">About Me</h1>
            <p className="text-lg font-light text-muted-foreground max-w-2xl">
              I&apos;m Sam Wilhoit, a multidisciplinary creative professional passionate about crafting 
              meaningful digital experiences that bridge design, technology, and business strategy.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild size="sm">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-3 w-3" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="space-y-6 py-16 border-t">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em]">My Story</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-base font-light leading-relaxed">
            Currently serving as Product Design Lead at Geo.studio and CMO of Intercept.club, 
            I bring a unique blend of creative vision and strategic thinking to every project. 
            Based in Los Angeles, I thrive at the intersection of design, technology, and human experience.
          </p>
          <p className="text-base font-light leading-relaxed">
            My journey in design and development has been driven by a simple belief: great products 
            emerge when we deeply understand the people we&apos;re creating for. This philosophy has 
            guided me through diverse projects spanning brand identity, product design, and growth strategies.
          </p>
          <p className="text-base font-light leading-relaxed">
            With expertise in both design and code, I bridge the gap between vision and implementation, 
            ensuring that beautiful concepts become functional realities. My approach combines aesthetic 
            sensibility with technical precision, always keeping the end user at the heart of the process.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6 py-16 border-t">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em]">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <h3 className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Design</h3>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>Brand Identity & Strategy</li>
              <li>UI/UX Design</li>
              <li>Design Systems</li>
              <li>Visual Design</li>
              <li>Prototyping</li>
            </ul>
          </Card>
          <Card className="p-6 space-y-4">
            <h3 className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Development</h3>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>API Design</li>
            </ul>
          </Card>
          <Card className="p-6 space-y-4">
            <h3 className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Strategy</h3>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>Product Strategy</li>
              <li>Growth Marketing</li>
              <li>Content Strategy</li>
              <li>Analytics & Insights</li>
              <li>Team Leadership</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6 py-16 border-t">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em]">Experience</h2>
        <div className="space-y-8">
          <div className="relative pl-8 border-l border-border">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <h3 className="font-mono text-sm">Product Design Lead</h3>
              <p className="text-sm text-muted-foreground">Geo.studio • 2022 - Present</p>
              <p className="text-sm font-light leading-relaxed">
                Leading product design initiatives, establishing design systems, and collaborating 
                with cross-functional teams to deliver innovative digital experiences.
              </p>
            </div>
          </div>
          <div className="relative pl-8 border-l border-border">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <h3 className="font-mono text-sm">Chief Marketing Officer</h3>
              <p className="text-sm text-muted-foreground">Intercept.club • 2021 - Present</p>
              <p className="text-sm font-light leading-relaxed">
                Driving brand strategy, overseeing marketing initiatives, and developing growth 
                strategies for the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-6 py-16 border-t">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em]">Values & Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Human-Centered</h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Every decision starts with understanding people—their needs, behaviors, and aspirations. 
              Design is about creating meaningful connections.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Craft & Quality</h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Attention to detail matters. From pixel-perfect designs to clean code, 
              I believe in delivering work that stands the test of time.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Collaborative</h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Great work happens when diverse perspectives come together. 
              I thrive in collaborative environments where ideas flow freely.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">Always Learning</h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              The digital landscape evolves rapidly. I stay curious, continuously 
              expanding my skills and exploring new possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 border-t space-y-6">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em]">Let&apos;s Connect</h2>
        <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always interested in new challenges and collaborations. 
          Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">
              Start a Conversation <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">
              View My Work
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}