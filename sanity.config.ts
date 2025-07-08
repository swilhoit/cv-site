import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

// Ensure environment variables are trimmed and valid
const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ld6z30ky').trim()
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim()
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').trim()

// Validate projectId
if (!/^[a-z0-9-]+$/.test(projectId)) {
  console.error('Invalid Sanity project ID:', projectId)
}

export default defineConfig({
  name: 'default',
  title: 'Personal Portfolio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: '/studio',
  document: {
    productionUrl: async (prev, context) => {
      const {document} = context
      
      if (document._type === 'project' && (document as any).slug?.current) {
        return `${siteUrl}/projects/${(document as any).slug.current}`
      }
      
      return prev
    },
  },
})