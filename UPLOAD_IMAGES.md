# How to Upload Images to Your Portfolio

You have 18 high-quality stock images ready in the `scripts/images/` directory. Here are two ways to add them to your projects:

## Option 1: Upload via Sanity Studio (Recommended)

1. Visit your Sanity Studio: https://personal-portfolio-swilhoits-projects.vercel.app/studio
2. Login with your Sanity account
3. For each project:
   - Click on the project to edit
   - Upload the Main Image
   - Upload Gallery images (if applicable)

### Image Mappings:

**Design Projects:**
- Brand Identity for TechStart
  - Main: `design-brand-1.jpg`
  - Gallery: `design-brand-2.jpg`, `design-brand-3.jpg`
  
- Mobile App UI Design for FitTrack
  - Main: `mobile-app-1.jpg`
  - Gallery: `mobile-app-2.jpg`, `mobile-app-3.jpg`

**Coding Projects:**
- E-commerce Platform with Next.js
  - Main: `ecommerce-1.jpg`
  - Gallery: `ecommerce-2.jpg`, `ecommerce-3.jpg`
  
- Real-time Chat Application
  - Main: `chat-app-1.jpg`
  - Gallery: `chat-app-2.jpg`
  
- API Development for SaaS Platform
  - Main: `api-code-1.jpg`

**Marketing Projects:**
- SEO Campaign for Local Business Network
  - Main: `seo-1.jpg`
  - Gallery: `seo-2.jpg`, `seo-3.jpg`
  
- Social Media Growth Strategy for Tech Startup
  - Main: `social-media-1.jpg`
  - Gallery: `social-media-2.jpg`
  
- Content Marketing Campaign for E-learning Platform
  - Main: `content-marketing-1.jpg`

## Option 2: Programmatic Upload

1. Get a Sanity API token:
   - Go to: https://www.sanity.io/manage/project/ld6z30ky/api#tokens
   - Create a new token with "Editor" permissions
   - Copy the token

2. Set the token as environment variable:
   ```bash
   export SANITY_AUTH_TOKEN="your-token-here"
   ```

3. Run the upload script:
   ```bash
   npx tsx scripts/upload-images.ts
   ```

## Current Status

Your portfolio is fully functional with:
- ✅ 8 sample projects with rich content
- ✅ Categories and filtering working
- ✅ All text content in place
- ⏳ Images ready to upload (18 stock images downloaded)

The site will display project cards without images until you upload them. Once uploaded, they'll appear automatically!