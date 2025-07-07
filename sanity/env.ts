// Ensure environment variables are properly typed and always have a value
export const apiVersion: string =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset: string = 
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId: string = 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ld6z30ky'

export const useCdn = false

// Log for debugging (will be removed after confirming it works)
if (typeof window === 'undefined') {
  console.log('Sanity config:', { projectId, dataset, apiVersion })
}