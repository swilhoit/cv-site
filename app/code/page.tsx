import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CodePage() {
  return (
    <div className="container max-w-4xl py-10">
      <section className="text-center py-32">
        <h1 className="text-2xl sm:text-3xl font-extralight tracking-wide mb-8">
          Code
        </h1>
        <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Building fast, scalable applications with modern technologies and clean, maintainable code
        </p>
      </section>

      <section className="py-20 space-y-16">
        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Frontend Development</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            React applications, Next.js sites, responsive interfaces, component libraries
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Backend Development</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            API design, database architecture, authentication systems, cloud infrastructure
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Full-Stack Solutions</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            End-to-end applications, SaaS platforms, e-commerce solutions, content management
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-6">Technical Consulting</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Code reviews, architecture planning, performance optimization, team mentoring
          </p>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "TypeScript", "React", "Next.js", "Node.js", 
            "Python", "PostgreSQL", "MongoDB", "AWS",
            "Tailwind CSS", "GraphQL", "Docker", "Git"
          ].map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-mono font-extralight uppercase tracking-wider border rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="py-32 text-center">
        <h2 className="text-xs font-mono font-extralight uppercase tracking-[0.3em] mb-8">Let&apos;s Build Something Great</h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-12">
          Ready to turn your ideas into reality
        </p>
        <Button size="sm" asChild className="text-xs">
          <Link href="/projects?category=coding">
            View Code Projects <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </section>
    </div>
  )
}