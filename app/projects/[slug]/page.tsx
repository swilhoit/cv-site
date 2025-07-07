import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { PortableText } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { client } from "@/sanity/lib/client"
import { projectBySlugQuery, projectSlugsQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import type { Image as SanityImage } from "sanity"

interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: 'design' | 'coding' | 'marketing'
  description: string
  mainImage: SanityImage
  gallery: SanityImage[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  content: PortableTextBlock[]
  publishedAt: string
}

export async function generateStaticParams() {
  const slugs = await client.fetch(projectSlugsQuery)
  return slugs.map((slug: string) => ({ slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project: Project = await client.fetch(projectBySlugQuery, {
    slug,
  })

  if (!project) {
    notFound()
  }

  const categoryColors = {
    design: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    coding: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  }

  return (
    <div className="container py-10">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Badge 
            variant="secondary" 
            className={`mb-4 ${categoryColors[project.category]}`}
          >
            {project.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
          
          <div className="flex gap-4 mb-6">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {project.mainImage && (
          <div className="relative aspect-video mb-12">
            <Image
              src={urlForImage(project.mainImage).url()}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        {project.content && (
          <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
            <PortableText
              value={project.content}
              components={{
                types: {
                  image: ({ value }: { value: SanityImage }) => (
                    <div className="relative aspect-video my-8">
                      <Image
                        src={urlForImage(value).url()}
                        alt={value.alt || ' '}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ),
                },
              }}
            />
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video">
                  <Image
                    src={urlForImage(image).url()}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}