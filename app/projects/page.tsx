import { client } from "@/sanity/lib/client"
import { projectsQuery, projectsByCategoryQuery } from "@/sanity/lib/queries"
import { ProjectsView } from "@/components/projects-view"
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
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  
  const projects: Project[] = category
    ? await client.fetch(projectsByCategoryQuery, { category })
    : await client.fetch(projectsQuery)

  return (
    <div className="container py-10">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-light mb-6">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Projects` : 'All Projects'}
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Explore my latest work across design, development, and marketing
        </p>
      </section>

      <ProjectsView projects={projects} />
    </div>
  )
}