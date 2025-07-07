import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ld6z30ky',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Using Unsplash images directly (these are free to use)
const projectImages = {
  'project-design-1': {
    mainImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=1200&h=800&fit=crop'
    ]
  },
  'project-design-2': {
    mainImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=800&fit=crop'
    ]
  },
  'project-code-1': {
    mainImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    ]
  },
  'project-code-2': {
    mainImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop'
    ]
  },
  'project-code-3': {
    mainImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop'
  },
  'project-marketing-1': {
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553830591-2f39e38a013c?w=1200&h=800&fit=crop'
    ]
  },
  'project-marketing-2': {
    mainImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop'
    ]
  },
  'project-marketing-3': {
    mainImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop'
  }
}

async function updateProjectsWithExternalImages() {
  console.log('Updating projects with external image URLs...')
  
  for (const [projectId, images] of Object.entries(projectImages)) {
    try {
      const update: any = {}
      
      // Add main image
      if (images.mainImage) {
        update.mainImage = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-external-' + projectId + '-main'
          },
          externalUrl: images.mainImage
        }
      }
      
      // Add gallery images
      if (images.gallery) {
        update.gallery = images.gallery.map((url, index) => ({
          _type: 'image',
          _key: `gallery-${index}`,
          asset: {
            _type: 'reference',
            _ref: `image-external-${projectId}-gallery-${index}`
          },
          externalUrl: url
        }))
      }
      
      await client.patch(projectId).set(update).commit()
      console.log(`Updated ${projectId} with images`)
    } catch (error) {
      console.error(`Error updating ${projectId}:`, error)
    }
  }
  
  console.log('Done!')
}

updateProjectsWithExternalImages()