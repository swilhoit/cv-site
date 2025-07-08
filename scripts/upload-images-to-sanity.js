const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Image mappings
const imageMappings = [
  // Design Project 1
  { file: 'design-brand-1.jpg', projectId: 'project-design-1', field: 'mainImage' },
  { file: 'design-brand-2.jpg', projectId: 'project-design-1', field: 'gallery.0' },
  { file: 'design-brand-3.jpg', projectId: 'project-design-1', field: 'gallery.1' },
  
  // Design Project 2
  { file: 'mobile-app-1.jpg', projectId: 'project-design-2', field: 'mainImage' },
  { file: 'mobile-app-2.jpg', projectId: 'project-design-2', field: 'gallery.0' },
  { file: 'mobile-app-3.jpg', projectId: 'project-design-2', field: 'gallery.1' },
  
  // Code Project 1
  { file: 'ecommerce-1.jpg', projectId: 'project-code-1', field: 'mainImage' },
  { file: 'ecommerce-2.jpg', projectId: 'project-code-1', field: 'gallery.0' },
  { file: 'ecommerce-3.jpg', projectId: 'project-code-1', field: 'gallery.1' },
  
  // Code Project 2
  { file: 'chat-app-1.jpg', projectId: 'project-code-2', field: 'mainImage' },
  { file: 'chat-app-2.jpg', projectId: 'project-code-2', field: 'gallery.0' },
  
  // Code Project 3
  { file: 'api-code-1.jpg', projectId: 'project-code-3', field: 'mainImage' },
  
  // Marketing Project 1
  { file: 'seo-1.jpg', projectId: 'project-growth-1', field: 'mainImage' },
  { file: 'seo-2.jpg', projectId: 'project-growth-1', field: 'gallery.0' },
  { file: 'seo-3.jpg', projectId: 'project-growth-1', field: 'gallery.1' },
  
  // Marketing Project 2
  { file: 'social-media-1.jpg', projectId: 'project-growth-2', field: 'mainImage' },
  { file: 'social-media-2.jpg', projectId: 'project-growth-2', field: 'gallery.0' },
  
  // Marketing Project 3
  { file: 'content-growth-1.jpg', projectId: 'project-growth-3', field: 'mainImage' },
];

console.log('Uploading images to Sanity...\n');

const uploadedAssets = [];

// Upload each image
imageMappings.forEach((mapping, index) => {
  const imagePath = path.join('scripts/images', mapping.file);
  
  console.log(`Uploading ${mapping.file}...`);
  
  try {
    // Upload image and capture output
    const output = execSync(
      `sanity assets upload "${imagePath}" --project ld6z30ky --dataset production`,
      { encoding: 'utf8' }
    );
    
    // Extract asset ID from output
    const assetIdMatch = output.match(/Asset ID:\s*(image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+)/);
    
    if (assetIdMatch) {
      const assetId = assetIdMatch[1];
      uploadedAssets.push({
        ...mapping,
        assetId
      });
      console.log(`✓ Uploaded: ${assetId}`);
    } else {
      console.log(`✗ Failed to extract asset ID for ${mapping.file}`);
    }
  } catch (error) {
    console.error(`Error uploading ${mapping.file}:`, error.message);
  }
});

// Generate update data
console.log('\n\nGenerating update data...\n');

// Group by project
const projectUpdates = {};

uploadedAssets.forEach(asset => {
  if (!projectUpdates[asset.projectId]) {
    projectUpdates[asset.projectId] = {};
  }
  
  if (asset.field === 'mainImage') {
    projectUpdates[asset.projectId].mainImage = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset.assetId
      }
    };
  } else if (asset.field.startsWith('gallery.')) {
    if (!projectUpdates[asset.projectId].gallery) {
      projectUpdates[asset.projectId].gallery = [];
    }
    const index = parseInt(asset.field.split('.')[1]);
    projectUpdates[asset.projectId].gallery[index] = {
      _type: 'image',
      _key: `gallery${index}`,
      asset: {
        _type: 'reference',
        _ref: asset.assetId
      }
    };
  }
});

// Create NDJSON file with updates
const ndjsonLines = [];

Object.entries(projectUpdates).forEach(([projectId, updates]) => {
  ndjsonLines.push(JSON.stringify({
    _id: projectId,
    _type: 'project',
    ...updates
  }));
});

const ndjsonPath = 'scripts/update-images.ndjson';
fs.writeFileSync(ndjsonPath, ndjsonLines.join('\n'));

console.log(`Created ${ndjsonPath} with image updates`);
console.log('\nNow run: sanity dataset import scripts/update-images.ndjson production --replace');