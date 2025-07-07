# Personal Portfolio with Sanity CMS

A minimal and clean personal portfolio site for designers, developers, and digital marketers. Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Sanity CMS.

## Features

- 🎨 Clean, minimal design with light/dark mode toggle
- 📱 Fully responsive layout
- 🚀 Built with Next.js 15 and TypeScript
- 💅 Styled with Tailwind CSS and shadcn/ui components
- 📝 Sanity CMS integration for easy content management
- 🎯 Three service categories: Design, Code, and Marketing
- 🖼️ Dynamic project showcase with filtering by category

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Sanity

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Copy your project ID and dataset name
3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Access Sanity Studio

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage your content.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/sanity` - Sanity configuration and schemas
- `/lib` - Utility functions

## Adding Projects

1. Go to Sanity Studio at `/studio`
2. Create a new Project document
3. Fill in the required fields:
   - Title
   - Slug
   - Category (design/coding/marketing)
   - Description
   - Main Image
   - Technologies (optional)
   - Content (rich text)
   - Gallery images (optional)
   - Live URL (optional)
   - GitHub URL (optional)

## Deployment

1. Deploy to Vercel or your preferred hosting platform
2. Add environment variables to your deployment
3. Configure CORS settings in Sanity to allow your production domain

## Customization

- Update colors and theme in `tailwind.config.ts`
- Modify navigation links in `components/navigation.tsx`
- Customize service offerings in the static pages
- Add more fields to the project schema in `sanity/schemas/project.ts`# Trigger rebuild
