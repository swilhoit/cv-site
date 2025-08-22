const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'zqheyjq9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // You'll need to create this token in Sanity Studio
})

const dummyProjects = [
  {
    _type: 'project',
    title: 'Minimalist Brand Identity',
    slug: { _type: 'slug', current: 'minimalist-brand' },
    category: 'design',
    description: 'Clean and modern brand design for tech startup. Focused on creating a timeless visual identity that communicates innovation and simplicity.',
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'E-commerce Platform',
    slug: { _type: 'slug', current: 'ecommerce-platform' },
    category: 'coding',
    description: 'Full-stack e-commerce solution built with Next.js, featuring real-time inventory management and seamless checkout experience.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Mobile App Design',
    slug: { _type: 'slug', current: 'mobile-app' },
    category: 'design',
    description: 'iOS app design for fitness tracking with focus on user engagement and habit formation.',
    featured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Content Strategy Campaign',
    slug: { _type: 'slug', current: 'content-strategy' },
    category: 'growth',
    description: 'Comprehensive SEO and content marketing campaign that increased organic traffic by 250%.',
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Dashboard Interface',
    slug: { _type: 'slug', current: 'dashboard-ui' },
    category: 'design',
    description: 'Analytics dashboard for SaaS platform with real-time data visualization and intuitive UX.',
    technologies: ['React', 'D3.js', 'Material-UI'],
    featured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Brand Refresh Project',
    slug: { _type: 'slug', current: 'brand-refresh' },
    category: 'design',
    description: 'Complete visual identity overhaul for established company entering new markets.',
    featured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Social Media Growth',
    slug: { _type: 'slug', current: 'social-growth' },
    category: 'growth',
    description: 'Strategic social media campaign that grew follower base by 500% in 6 months.',
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'API Development',
    slug: { _type: 'slug', current: 'api-development' },
    category: 'coding',
    description: 'RESTful API development for mobile applications with comprehensive documentation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    featured: false,
    publishedAt: new Date().toISOString(),
  },
]

async function populateProjects() {
  console.log('Starting to populate projects...')
  
  for (const project of dummyProjects) {
    try {
      const result = await client.create(project)
      console.log(`Created project: ${result.title}`)
    } catch (error) {
      console.error(`Error creating project ${project.title}:`, error)
    }
  }
  
  console.log('Finished populating projects!')
}

// Note: To add images, you'll need to upload them through Sanity Studio
// or use the image upload API with actual image files

populateProjects().catch(console.error)