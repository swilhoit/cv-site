'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: string
  mainImage?: any
  description?: string
  year?: string
  client?: string
}

// Dummy data for initial display
const dummyProjects: Project[] = [
  {
    _id: '1',
    title: 'Minimalist Brand Identity',
    slug: { current: 'minimalist-brand' },
    category: 'brand',
    description: 'Clean and modern brand design for tech startup',
    year: '2024',
    client: 'TechCo',
  },
  {
    _id: '2',
    title: 'E-commerce Platform',
    slug: { current: 'ecommerce-platform' },
    category: 'development',
    description: 'Full-stack e-commerce solution with Next.js',
    year: '2024',
    client: 'ShopNow',
  },
  {
    _id: '3',
    title: 'Mobile App Design',
    slug: { current: 'mobile-app' },
    category: 'product',
    description: 'iOS app design for fitness tracking',
    year: '2023',
    client: 'FitTrack',
  },
  {
    _id: '4',
    title: 'Content Strategy',
    slug: { current: 'content-strategy' },
    category: 'growth',
    description: 'SEO and content marketing campaign',
    year: '2023',
    client: 'BlogHub',
  },
  {
    _id: '5',
    title: 'Dashboard Interface',
    slug: { current: 'dashboard-ui' },
    category: 'product',
    description: 'Analytics dashboard for SaaS platform',
    year: '2024',
    client: 'DataViz',
  },
  {
    _id: '6',
    title: 'Brand Refresh',
    slug: { current: 'brand-refresh' },
    category: 'brand',
    description: 'Complete visual identity overhaul',
    year: '2023',
    client: 'OldCo',
  },
]

export function PortfolioGallery() {
  const [projects, setProjects] = useState<Project[]>(dummyProjects)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(orderRank) {
          _id,
          title,
          slug,
          category,
          mainImage,
          description,
          year,
          client
        }`
        const data = await client.fetch(query)
        if (data && data.length > 0) {
          setProjects(data)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {projects.map((project, index) => (
        <Link
          key={project._id}
          href={`/projects/${project.slug.current}`}
          className="group relative aspect-square overflow-hidden bg-muted hover:opacity-90 transition-opacity"
        >
          {project.mainImage ? (
            <Image
              src={urlForImage(project.mainImage).url()}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : (
            <Image
              src={`https://picsum.photos/seed/project${index}/600/600`}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-serif text-xl mb-1">{project.title}</h3>
              <p className="text-sm opacity-90">{project.category}</p>
              {project.year && (
                <p className="text-xs opacity-75 mt-1">{project.year}</p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}