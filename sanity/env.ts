// Ensure environment variables are properly typed and always have a value
// Trim any whitespace/newlines from environment variables
export const apiVersion: string =
  (process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01').trim()

export const dataset: string = 
  (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim()

export const projectId: string = 
  (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ld6z30ky').trim()

export const useCdn = false