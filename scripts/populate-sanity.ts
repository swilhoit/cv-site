import { createClient } from '@sanity/client'
import { nanoid } from 'nanoid'

const client = createClient({
  projectId: 'ld6z30ky',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

const sampleProjects = [
  // Design Projects
  {
    _type: 'project',
    title: 'Brand Identity for TechStart',
    slug: { current: 'brand-identity-techstart' },
    category: 'design',
    description: 'Complete brand identity design including logo, color palette, and brand guidelines for a tech startup',
    featured: true,
    technologies: ['Figma', 'Adobe Illustrator', 'Brand Strategy'],
    liveUrl: 'https://www.behance.net',
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'TechStart needed a fresh, modern brand identity that would appeal to both investors and their target audience of young professionals. The project involved creating a comprehensive brand system from scratch.',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'The Challenge' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The client wanted a brand that felt innovative and trustworthy while standing out in the crowded tech startup space. They needed a flexible visual system that could work across digital and print media.',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'The Solution' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'I developed a bold, geometric logo mark that represents growth and connectivity. The color palette combines vibrant blues with neutral grays, creating a professional yet approachable feel. The brand guidelines ensure consistency across all touchpoints.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Mobile App UI Design for FitTrack',
    slug: { current: 'mobile-app-fittrack' },
    category: 'design',
    description: 'User interface design for a fitness tracking mobile application with focus on usability and engagement',
    technologies: ['Figma', 'Principle', 'User Testing'],
    liveUrl: 'https://www.dribbble.com',
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'FitTrack is a comprehensive fitness tracking app that helps users monitor their workouts, nutrition, and progress. The design focuses on creating an intuitive and motivating user experience.',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'Design Process' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Started with user research and competitive analysis, followed by wireframing and prototyping. Conducted multiple rounds of user testing to refine the interface and ensure optimal usability.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },

  // Coding Projects
  {
    _type: 'project',
    title: 'E-commerce Platform with Next.js',
    slug: { current: 'ecommerce-platform-nextjs' },
    category: 'coding',
    description: 'Full-stack e-commerce solution built with Next.js, featuring real-time inventory, secure payments, and admin dashboard',
    featured: true,
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo-ecommerce.vercel.app',
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'A modern e-commerce platform built from the ground up using Next.js 14 with App Router. The platform features a responsive design, real-time inventory management, and seamless checkout experience.',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'Key Features' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '• Server-side rendering for optimal SEO\n• Real-time inventory updates\n• Secure payment processing with Stripe\n• Admin dashboard for order management\n• Customer authentication and profiles\n• Responsive design for all devices',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'Technical Implementation' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The application uses Next.js for both frontend and API routes, with PostgreSQL for data persistence. Implemented optimistic UI updates for cart operations and used React Query for efficient data fetching and caching.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Real-time Chat Application',
    slug: { current: 'realtime-chat-app' },
    category: 'coding',
    description: 'WebSocket-based chat application with rooms, direct messages, and file sharing capabilities',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Redis'],
    githubUrl: 'https://github.com',
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Built a scalable real-time chat application supporting thousands of concurrent users. Features include public rooms, private messaging, file sharing, and message history.',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'Architecture' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Implemented a microservices architecture with Socket.io for real-time communication, Redis for session management and pub/sub, and MongoDB for message persistence. The frontend uses React with custom hooks for WebSocket management.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'API Development for SaaS Platform',
    slug: { current: 'api-saas-platform' },
    category: 'coding',
    description: 'RESTful API design and implementation for a multi-tenant SaaS application',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker', 'AWS'],
    githubUrl: 'https://github.com',
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Designed and implemented a comprehensive API for a SaaS platform serving multiple tenants. The API handles authentication, authorization, data isolation, and complex business logic.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },

  // Marketing Projects
  {
    _type: 'project',
    title: 'SEO Campaign for Local Business Network',
    slug: { current: 'seo-campaign-local-business' },
    category: 'marketing',
    description: 'Comprehensive SEO strategy that increased organic traffic by 250% in 6 months',
    featured: true,
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Content Strategy'],
    liveUrl: 'https://www.example.com',
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Developed and executed a comprehensive SEO strategy for a network of local businesses, focusing on local search optimization, content creation, and technical SEO improvements.',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'Strategy Overview' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '• Conducted comprehensive keyword research\n• Optimized Google My Business profiles\n• Created location-specific landing pages\n• Implemented schema markup\n• Built high-quality local backlinks\n• Developed content calendar targeting local search terms',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'Results' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The campaign resulted in a 250% increase in organic traffic, 180% increase in local search visibility, and a 45% increase in conversion rate from organic search.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Social Media Growth Strategy for Tech Startup',
    slug: { current: 'social-media-tech-startup' },
    category: 'marketing',
    description: 'Grew social media following from 1K to 50K followers across platforms in 8 months',
    technologies: ['Hootsuite', 'Canva', 'Facebook Ads', 'LinkedIn Campaign Manager'],
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Developed and implemented a multi-platform social media strategy that significantly increased brand awareness and engagement for a B2B tech startup.',
          },
        ],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'h2',
        children: [{ _type: 'span', text: 'Approach' }],
      },
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Created platform-specific content strategies, implemented consistent posting schedules, engaged with community, and ran targeted ad campaigns. Focused on thought leadership content and industry insights to establish authority.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'project',
    title: 'Content Marketing Campaign for E-learning Platform',
    slug: { current: 'content-marketing-elearning' },
    category: 'marketing',
    description: 'Developed content strategy that generated 10,000+ qualified leads in 12 months',
    technologies: ['HubSpot', 'WordPress', 'Google Analytics', 'Mailchimp'],
    liveUrl: 'https://blog.example.com',
    content: [
      {
        _type: 'block',
        _key: nanoid(),
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Created and executed a comprehensive content marketing strategy including blog posts, ebooks, webinars, and email campaigns that positioned the client as an industry leader.',
          },
        ],
      },
    ],
    publishedAt: new Date().toISOString(),
  },
]

async function populateSanity() {
  console.log('Starting to populate Sanity with sample projects...')
  
  try {
    for (const project of sampleProjects) {
      const result = await client.create(project)
      console.log(`Created project: ${result.title}`)
    }
    
    console.log('Successfully populated all sample projects!')
  } catch (error) {
    console.error('Error populating Sanity:', error)
  }
}

populateSanity()