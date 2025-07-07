import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

// Ensure projectId is always defined
const sanityProjectId = projectId || 'ld6z30ky'
const sanityDataset = dataset || 'production'

export const client = createClient({
  apiVersion,
  dataset: sanityDataset,
  projectId: sanityProjectId,
  useCdn,
})