// Ensure environment variables are properly typed and always have a value
// Trim any whitespace/newlines from environment variables
export const apiVersion: string =
  (process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01').trim()

export const dataset: string = 
  (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim()

export const projectId: string = 
  (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ld6z30ky').trim()

// Debug logging for production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  console.log('Sanity Config Debug:', {
    projectId,
    dataset,
    apiVersion,
    env_projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    env_dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  })
}

export const useCdn = false