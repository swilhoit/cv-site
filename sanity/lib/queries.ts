import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    description,
    mainImage,
    technologies,
    publishedAt
  }
`

export const projectsByCategoryQuery = groq`
  *[_type == "project" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    description,
    mainImage,
    technologies,
    publishedAt
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    category,
    description,
    mainImage,
    technologies,
    publishedAt
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    description,
    mainImage,
    gallery,
    technologies,
    liveUrl,
    githubUrl,
    content,
    publishedAt
  }
`

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`