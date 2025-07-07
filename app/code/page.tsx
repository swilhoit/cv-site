import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code2, Database, Globe, Smartphone } from "lucide-react"

export default function CodePage() {
  return (
    <div className="container py-10">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Code That Performs
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Building robust, scalable applications with modern technologies
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-12">Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 mb-3" />
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Full-stack web applications built for performance
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• React/Next.js applications</li>
                <li>• Node.js backends</li>
                <li>• RESTful & GraphQL APIs</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 mb-3" />
              <CardTitle>Mobile Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Native and cross-platform mobile solutions
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• React Native apps</li>
                <li>• iOS & Android development</li>
                <li>• App optimization</li>
                <li>• Push notifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-8 w-8 mb-3" />
              <CardTitle>Backend Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Scalable server infrastructure and databases
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Database design</li>
                <li>• Cloud deployments</li>
                <li>• Microservices</li>
                <li>• Authentication systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="h-8 w-8 mb-3" />
              <CardTitle>Technical Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Expert guidance for your technical challenges
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Code reviews</li>
                <li>• Architecture planning</li>
                <li>• Performance optimization</li>
                <li>• Technology selection</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "Docker",
            "GraphQL",
            "Tailwind CSS",
            "Git"
          ].map((tech) => (
            <div
              key={tech}
              className="text-center p-4 rounded-lg border bg-card"
            >
              <p className="font-medium">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Ready to turn your ideas into reality?
        </p>
        <Button size="lg" asChild>
          <Link href="/projects?category=coding">
            View Code Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  )
}