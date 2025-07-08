'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LayoutGrid, List, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Image as SanityImage } from "sanity"

interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: 'design' | 'coding' | 'growth'
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
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const categoryColors = {
    design: 'bg-amber-100 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200',
    coding: 'bg-stone-100 text-stone-900 dark:bg-stone-900/20 dark:text-stone-200',
    growth: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-200',
  }

  // Collect all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies || []))
  ).sort()

  // Filter projects if a technology is selected
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies?.includes(selectedTech))
    : projects

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No projects found. Check back soon!</p>
      </div>
    )
  }

  return (
    <div>
      {/* Filters Section */}
      <div className="mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 font-mono font-extralight uppercase tracking-[0.2em] text-xs mb-4 hover:text-primary transition-colors"
        >
          Filters
          <ChevronDown className={cn("h-3 w-3 transition-transform", showFilters && "rotate-180")} />
        </button>
        
        {showFilters && allTechnologies.length > 0 && (
          <div className="animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech(null)}
                className={cn(
                  "px-3 py-1 text-xs font-mono font-extralight uppercase tracking-wider border rounded-full transition-colors",
                  selectedTech === null 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-stone-50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-800/50"
                )}
              >
                All
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={cn(
                    "px-3 py-1 text-xs font-mono font-extralight uppercase tracking-wider border rounded-full transition-colors",
                    selectedTech === tech 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-stone-50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-800/50"
                  )}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

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
                <TableHead className="font-mono font-extralight uppercase tracking-[0.2em] text-xs">Project</TableHead>
                <TableHead className="font-mono font-extralight uppercase tracking-[0.2em] text-xs">Category</TableHead>
                <TableHead className="font-mono font-extralight uppercase tracking-[0.2em] text-xs">Description</TableHead>
                <TableHead className="font-mono font-extralight uppercase tracking-[0.2em] text-xs">Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project._id} className="hover:bg-muted/50 transition-colors">
                  <TableCell>
                    <Link 
                      href={`/projects/${project.slug?.current || project._id}`}
                      className="text-sm font-light hover:underline"
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
                    <span className="text-xs text-muted-foreground line-clamp-2">
                      {project.description}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies?.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs font-mono font-extralight uppercase tracking-wider bg-stone-50 dark:bg-stone-900/50">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies?.length > 3 && (
                        <Badge variant="outline" className="text-xs font-mono font-extralight uppercase tracking-wider bg-stone-50 dark:bg-stone-900/50">
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
          {filteredProjects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug?.current || project._id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={`https://picsum.photos/seed/${project._id}/600/400`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={categoryColors[project.category]}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="font-mono font-extralight uppercase tracking-[0.2em] text-sm">{project.title}</CardTitle>
                  <CardDescription className="font-light text-xs leading-relaxed mt-2">{project.description}</CardDescription>
                </CardHeader>
                {project.technologies && project.technologies.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs font-mono font-extralight uppercase tracking-wider bg-stone-50 dark:bg-stone-900/50">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs font-mono font-extralight uppercase tracking-wider bg-stone-50 dark:bg-stone-900/50">
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