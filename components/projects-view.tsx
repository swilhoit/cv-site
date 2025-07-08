'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LayoutGrid, List } from "lucide-react"
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

interface ProjectsViewProps {
  projects: Project[]
}

export function ProjectsView({ projects }: ProjectsViewProps) {
  const [viewMode, setViewMode] = useState<'table' | 'card'>('table')

  const categoryColors = {
    design: 'bg-amber-100 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200',
    coding: 'bg-stone-100 text-stone-900 dark:bg-stone-900/20 dark:text-stone-200',
    marketing: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-200',
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No projects found. Check back soon!</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-end mb-6">
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'table' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('table')}
          >
            <List className="h-4 w-4 mr-2" />
            Table
          </Button>
          <Button
            variant={viewMode === 'card' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('card')}
          >
            <LayoutGrid className="h-4 w-4 mr-2" />
            Cards
          </Button>
        </div>
      </div>

      {viewMode === 'table' ? (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-mono font-light uppercase tracking-wider">Project</TableHead>
                <TableHead className="font-mono font-light uppercase tracking-wider">Category</TableHead>
                <TableHead className="font-mono font-light uppercase tracking-wider">Description</TableHead>
                <TableHead className="font-mono font-light uppercase tracking-wider">Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project._id} className="hover:bg-muted/50 transition-colors">
                  <TableCell>
                    <Link 
                      href={`/projects/${project.slug?.current || project._id}`}
                      className="font-medium hover:underline"
                    >
                      {project.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={categoryColors[project.category]}
                    >
                      {project.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-md">
                    <span className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies?.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-stone-50 dark:bg-stone-900/50">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies?.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-stone-50 dark:bg-stone-900/50">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug?.current || project._id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                {project.mainImage && (
                  <div className="relative aspect-video">
                    <Image
                      src={urlForImage(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover"
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
                  <CardTitle className="font-mono font-light uppercase tracking-wider">{project.title}</CardTitle>
                  <CardDescription className="font-light">{project.description}</CardDescription>
                </CardHeader>
                {project.technologies && project.technologies.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-stone-50 dark:bg-stone-900/50">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-stone-50 dark:bg-stone-900/50">
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