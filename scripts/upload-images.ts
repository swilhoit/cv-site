import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { basename } from 'path'

const client = createClient({
  projectId: 'ld6z30ky',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN // You'll need to set this
})

const images = [
  { path: 'scripts/images/design-brand-1.jpg', title: 'Brand Identity Main' },
  { path: 'scripts/images/design-brand-2.jpg', title: 'Brand Guidelines' },
  { path: 'scripts/images/design-brand-3.jpg', title: 'Brand Applications' },
  { path: 'scripts/images/mobile-app-1.jpg', title: 'FitTrack App Main' },
  { path: 'scripts/images/mobile-app-2.jpg', title: 'FitTrack Dashboard' },
  { path: 'scripts/images/mobile-app-3.jpg', title: 'FitTrack Features' },
  { path: 'scripts/images/ecommerce-1.jpg', title: 'E-commerce Platform' },
  { path: 'scripts/images/ecommerce-2.jpg', title: 'Shopping Cart' },
  { path: 'scripts/images/ecommerce-3.jpg', title: 'Admin Dashboard' },
  { path: 'scripts/images/chat-app-1.jpg', title: 'Chat Application' },
  { path: 'scripts/images/chat-app-2.jpg', title: 'Chat Interface' },
  { path: 'scripts/images/api-code-1.jpg', title: 'API Development' },
  { path: 'scripts/images/seo-1.jpg', title: 'SEO Analytics' },
  { path: 'scripts/images/seo-2.jpg', title: 'SEO Strategy' },
  { path: 'scripts/images/seo-3.jpg', title: 'SEO Results' },
  { path: 'scripts/images/social-media-1.jpg', title: 'Social Media Growth' },
  { path: 'scripts/images/social-media-2.jpg', title: 'Social Analytics' },
  { path: 'scripts/images/content-marketing-1.jpg', title: 'Content Strategy' }
]

async function uploadImages() {
  console.log('Uploading images to Sanity...')
  
  const uploadedImages = []
  
  for (const [index, image] of images.entries()) {
    try {
      const imageFile = readFileSync(image.path)
      const asset = await client.assets.upload('image', imageFile, {
        filename: basename(image.path),
        title: image.title
      })
      
      uploadedImages.push({
        index: index + 1,
        assetId: asset._id,
        title: image.title
      })
      
      console.log(`Uploaded ${image.title}: ${asset._id}`)
    } catch (error) {
      console.error(`Error uploading ${image.path}:`, error)
    }
  }
  
  console.log('\nImage references for updating projects:')
  uploadedImages.forEach(img => {
    console.log(`image-${img.index} -> ${img.assetId}`)
  })
}

// Check if we have an auth token
if (!process.env.SANITY_AUTH_TOKEN) {
  console.error('Please set SANITY_AUTH_TOKEN environment variable')
  console.error('You can create one at: https://www.sanity.io/manage/project/ld6z30ky/api#tokens')
  process.exit(1)
}

uploadImages()