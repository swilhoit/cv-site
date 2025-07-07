const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: 'ld6z30ky',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  // We'll use the public dataset since we don't have a token
});

// For now, let's create placeholder image references
const imagePlaceholders = {
  'project-design-1': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-design-1' }},
    gallery: [
      { _type: 'image', _key: 'g1', asset: { _type: 'reference', _ref: 'image-placeholder-design-1-g1' }},
      { _type: 'image', _key: 'g2', asset: { _type: 'reference', _ref: 'image-placeholder-design-1-g2' }}
    ]
  },
  'project-design-2': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-design-2' }},
    gallery: [
      { _type: 'image', _key: 'g1', asset: { _type: 'reference', _ref: 'image-placeholder-design-2-g1' }},
      { _type: 'image', _key: 'g2', asset: { _type: 'reference', _ref: 'image-placeholder-design-2-g2' }}
    ]
  },
  'project-code-1': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-code-1' }},
    gallery: [
      { _type: 'image', _key: 'g1', asset: { _type: 'reference', _ref: 'image-placeholder-code-1-g1' }},
      { _type: 'image', _key: 'g2', asset: { _type: 'reference', _ref: 'image-placeholder-code-1-g2' }}
    ]
  },
  'project-code-2': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-code-2' }},
    gallery: [
      { _type: 'image', _key: 'g1', asset: { _type: 'reference', _ref: 'image-placeholder-code-2-g1' }}
    ]
  },
  'project-code-3': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-code-3' }}
  },
  'project-marketing-1': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-marketing-1' }},
    gallery: [
      { _type: 'image', _key: 'g1', asset: { _type: 'reference', _ref: 'image-placeholder-marketing-1-g1' }},
      { _type: 'image', _key: 'g2', asset: { _type: 'reference', _ref: 'image-placeholder-marketing-1-g2' }}
    ]
  },
  'project-marketing-2': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-marketing-2' }},
    gallery: [
      { _type: 'image', _key: 'g1', asset: { _type: 'reference', _ref: 'image-placeholder-marketing-2-g1' }}
    ]
  },
  'project-marketing-3': {
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder-marketing-3' }}
  }
};

console.log(`
Since we need authentication to upload images via API, here's what you can do:

1. Go to Sanity Studio: https://personal-portfolio-swilhoits-projects.vercel.app/studio
2. Login with your Sanity account
3. For each project, click Edit and upload images:
   - Main Image: Upload the primary image
   - Gallery: Upload additional images

The stock images are available in: scripts/images/

Or, if you want to upload programmatically:
1. Create an API token at: https://www.sanity.io/manage/project/ld6z30ky/api#tokens
2. Set it as environment variable: export SANITY_AUTH_TOKEN="your-token"
3. Run the upload script with authentication

For now, your projects are ready with all content except images!
`);