import { createClient } from '@sanity/client'
import fetch from 'node-fetch'
import { createReadStream } from 'fs'
import { writeFile } from 'fs/promises'
import path from 'path'

const client = createClient({
  projectId: 'zqheyjq9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN,
})

// Function to download and upload image to Sanity
async function uploadImageFromUrl(imageUrl, filename) {
  try {
    const response = await fetch(imageUrl)
    const buffer = await response.buffer()
    
    // Upload to Sanity
    const asset = await client.assets.upload('image', buffer, {
      filename: filename
    })
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

const projects = [
  {
    _type: 'project',
    title: 'Neural Interface Dashboard',
    slug: { _type: 'slug', current: 'neural-interface' },
    category: 'design',
    description: 'Futuristic dashboard design for brain-computer interface monitoring system. Clean, minimal aesthetic with real-time data visualization.',
    featured: true,
    publishedAt: new Date('2024-03-15').toISOString(),
    imageUrl: 'https://picsum.photos/seed/neural/800/600',
  },
  {
    _type: 'project',
    title: 'Sustainable Fashion Brand',
    slug: { _type: 'slug', current: 'sustainable-fashion' },
    category: 'design',
    description: 'Complete brand identity for eco-conscious fashion label. Earthy tones meet modern minimalism.',
    featured: true,
    publishedAt: new Date('2024-02-20').toISOString(),
    imageUrl: 'https://picsum.photos/seed/fashion/800/600',
  },
  {
    _type: 'project',
    title: 'AI Writing Assistant',
    slug: { _type: 'slug', current: 'ai-writing' },
    category: 'coding',
    description: 'Full-stack application using GPT-4 API for intelligent content generation. Built with Next.js and TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    featured: true,
    publishedAt: new Date('2024-01-10').toISOString(),
    imageUrl: 'https://picsum.photos/seed/aiwriter/800/600',
  },
  {
    _type: 'project',
    title: 'Crypto Trading Platform',
    slug: { _type: 'slug', current: 'crypto-platform' },
    category: 'coding',
    description: 'Real-time cryptocurrency trading platform with advanced charting and portfolio management.',
    technologies: ['React', 'Node.js', 'WebSocket', 'TradingView'],
    featured: false,
    publishedAt: new Date('2023-12-05').toISOString(),
    imageUrl: 'https://picsum.photos/seed/crypto/800/600',
  },
  {
    _type: 'project',
    title: 'Wellness App Redesign',
    slug: { _type: 'slug', current: 'wellness-app' },
    category: 'design',
    description: 'Complete UX overhaul of meditation and wellness mobile application. Focus on accessibility and calm aesthetics.',
    featured: false,
    publishedAt: new Date('2023-11-18').toISOString(),
    imageUrl: 'https://picsum.photos/seed/wellness/800/600',
  },
  {
    _type: 'project',
    title: 'E-Learning Platform Growth',
    slug: { _type: 'slug', current: 'elearning-growth' },
    category: 'growth',
    description: 'SEO and content marketing strategy that increased organic traffic by 400% in 6 months.',
    featured: true,
    publishedAt: new Date('2024-04-01').toISOString(),
    imageUrl: 'https://picsum.photos/seed/elearning/800/600',
  },
  {
    _type: 'project',
    title: 'Social Commerce Campaign',
    slug: { _type: 'slug', current: 'social-commerce' },
    category: 'growth',
    description: 'Integrated social media and e-commerce campaign driving $2M in revenue through influencer partnerships.',
    featured: false,
    publishedAt: new Date('2023-10-25').toISOString(),
    imageUrl: 'https://picsum.photos/seed/social/800/600',
  },
  {
    _type: 'project',
    title: 'AR Museum Experience',
    slug: { _type: 'slug', current: 'ar-museum' },
    category: 'coding',
    description: 'Augmented reality application for interactive museum tours. Built with Unity and ARCore.',
    technologies: ['Unity', 'ARCore', 'C#', 'Firebase'],
    featured: true,
    publishedAt: new Date('2024-05-10').toISOString(),
    imageUrl: 'https://picsum.photos/seed/armuseum/800/600',
  },
  {
    _type: 'project',
    title: 'Luxury Hotel Rebrand',
    slug: { _type: 'slug', current: 'luxury-hotel' },
    category: 'design',
    description: 'Premium brand identity for boutique hotel chain. Sophisticated typography meets contemporary elegance.',
    featured: false,
    publishedAt: new Date('2023-09-12').toISOString(),
    imageUrl: 'https://picsum.photos/seed/hotel/800/600',
  },
  {
    _type: 'project',
    title: 'B2B SaaS Growth Strategy',
    slug: { _type: 'slug', current: 'b2b-saas' },
    category: 'growth',
    description: 'Complete growth overhaul including product-led growth tactics, resulting in 150% ARR increase.',
    featured: true,
    publishedAt: new Date('2024-06-01').toISOString(),
    imageUrl: 'https://picsum.photos/seed/saas/800/600',
  },
  {
    _type: 'project',
    title: 'Music Streaming Interface',
    slug: { _type: 'slug', current: 'music-streaming' },
    category: 'design',
    description: 'Innovative music discovery interface with AI-powered recommendations and social features.',
    featured: false,
    publishedAt: new Date('2023-08-20').toISOString(),
    imageUrl: 'https://picsum.photos/seed/music/800/600',
  },
  {
    _type: 'project',
    title: 'Food Delivery Platform',
    slug: { _type: 'slug', current: 'food-delivery' },
    category: 'coding',
    description: 'End-to-end food delivery solution with real-time tracking and restaurant management dashboard.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    featured: false,
    publishedAt: new Date('2023-07-15').toISOString(),
    imageUrl: 'https://picsum.photos/seed/food/800/600',
  },
]

async function populateProjects() {
  console.log('Starting to populate projects with images...')
  
  for (const project of projects) {
    try {
      // Upload image
      console.log(`Uploading image for ${project.title}...`)
      const imageAsset = await uploadImageFromUrl(project.imageUrl, `${project.slug.current}.jpg`)
      
      if (imageAsset) {
        project.mainImage = imageAsset
      }
      
      // Remove the imageUrl field as it's not part of the schema
      delete project.imageUrl
      
      // Create the project
      const result = await client.create(project)
      console.log(`✅ Created project: ${result.title}`)
      
    } catch (error) {
      console.error(`❌ Error creating project ${project.title}:`, error.message)
    }
  }
  
  console.log('✨ Finished populating projects!')
}

populateProjects().catch(console.error)