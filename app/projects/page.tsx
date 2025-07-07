import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { projectsQuery, projectsByCategoryQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Image as SanityImage } from "sanity"

interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: 'design' | 'coding' | 'marketing'
  description: string
  mainImage: SanityImage
  technologies: string[]
  publishedAt: string
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const { category } = searchParams
  
  const projects: Project[] = category
    ? await client.fetch(projectsByCategoryQuery, { category })
    : await client.fetch(projectsQuery)

  const categoryColors = {
    design: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    coding: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  }

  return (
    <div className="container py-10">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Projects` : 'All Projects'}
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore my latest work across design, development, and marketing
        </p>
      </section>

      {projects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No projects found. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug.current}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                {project.mainImage && (
                  <div className="relative aspect-video">
                    <Image
                      src={urlForImage(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={categoryColors[project.category]}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                {project.technologies && project.technologies.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}