# My Startup

![App Preview](https://imgix.cosmicjs.com/9ff741a0-3757-11f1-b570-d17e6e46007b-autopilot-photo-1500648767791-00dcc994a43e-1776098491002.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive company website for **My Startup** built with [Next.js 16](https://nextjs.org/) and powered by [Cosmic](https://www.cosmicjs.com). Features a dynamic homepage, blog system, pricing comparison, team directory, and customer testimonials — all managed through Cosmic CMS.

## Features

- 🏠 **Dynamic Homepage** — Hero, features, pricing, testimonials, and team sections
- 📝 **Blog System** — Full blog with individual post pages, categories, and featured images
- 💰 **Pricing Page** — Side-by-side pricing tier comparison with featured plan highlighting
- 👥 **Team Page** — Team member cards with headshots, bios, and social links
- 🚀 **Features Page** — Product features grid with emoji icons and descriptions
- ⭐ **Testimonials Page** — Customer reviews with star ratings
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Server-Side Rendering** — Fast initial loads with Next.js Server Components
- 🎨 **Modern Design** — Clean aesthetic with Tailwind CSS
- 🔍 **SEO Optimized** — Proper metadata on every page

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69dd1c4d927620232a57831c&clone_repository=69dd1da5927620232a578370)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a startup product website with features, pricing tiers, team members, blog posts, and customer testimonials."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'My Startup'. The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, team-members, blog-posts, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([docs](https://www.cosmicjs.com/docs))
- [Bun](https://bun.sh/) — JavaScript runtime and package manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with the content models set up

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-startup
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Objects
```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single blog post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'blog-posts', slug: 'my-post' })
  .props(['id', 'title', 'slug', 'metadata', 'created_at'])
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with the following Cosmic object types:

| Object Type | Slug | Description |
|---|---|---|
| 🚀 Features | `features` | Product features with name, description, icon |
| 💰 Pricing Tiers | `pricing-tiers` | Plans with price, features list, CTA |
| 👥 Team Members | `team-members` | Team profiles with headshots and social links |
| 📝 Blog Posts | `blog-posts` | Blog articles with content, images, categories |
| ⭐ Testimonials | `testimonials` | Customer quotes with ratings |

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy

### Netlify
1. Push your code to GitHub
2. Import in [Netlify](https://netlify.com)
3. Set build command to `bun run build`
4. Set publish directory to `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->