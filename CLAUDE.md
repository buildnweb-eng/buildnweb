# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint for code quality checks
```

### Testing
No test scripts are currently configured. Consider adding tests with Jest or Vitest when implementing new features.

## Architecture

This is a Next.js 14 agency website using the App Router pattern with TypeScript and Tailwind CSS.

### Key Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety with strict mode enabled
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library (v12.19.2)
- **GSAP** - Advanced animations (v3.13.0)
- **Heroicons & Lucide** - Icon libraries

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page that imports all section components
  - `layout.tsx` - Root layout with metadata
- `src/components/` - React components for each website section
  - Each component is self-contained (Header, Hero, About, Services, Portfolio, Testimonials, Contact, Footer)
  - Components use client-side rendering ('use client' directive)

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

## Component Architecture

The website follows a modular component structure where the main page (`src/app/page.tsx`) orchestrates section components. Each section component is responsible for its own presentation and can be modified independently.

Current sections flow:
1. Header - Navigation
2. Hero - Landing section with value proposition
3. About - Agency information
4. Services - Service offerings (Web Dev, SEO, Social Media, Instagram Ads)
5. Portfolio - Project showcase
6. Testimonials - Client feedback
7. Contact - Contact form and information
8. Footer - Site links and information

## Development Notes

### Styling
- Uses Tailwind CSS with custom gradient utilities
- Primary color scheme: Blue (#3b82f6) and Purple (#8b5cf6)
- Responsive design breakpoints follow Tailwind defaults

### Forms
Contact form is currently frontend-only. Backend integration needed for functionality.

### Images
Currently using placeholder images. Replace with actual project screenshots and assets in production.

### Pricing
Three-tier pricing structure defined in components (Starter: ₹25,000, Growth: ₹75,000, Enterprise: ₹2,00,000+)