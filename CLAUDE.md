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

This is a Next.js 14 agency website using the App Router pattern with TypeScript and Tailwind CSS. It's a complete agency portfolio website for Buildnweb, featuring comprehensive UI components built with Radix UI primitives.

### Key Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety with strict mode enabled (strict: true)
- **Tailwind CSS** - Utility-first CSS framework with dark mode support
- **Radix UI** - Comprehensive set of UI primitives (20+ components)
- **Framer Motion** - Animation library (v12.19.2)
- **GSAP** - Advanced animations (v3.13.0)
- **React Hook Form** - Form handling with validation
- **Heroicons & Lucide** - Icon libraries
- **Service Worker** - PWA support with offline capabilities

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page with scroll tracking and breadcrumb navigation
  - `layout.tsx` - Root layout with comprehensive SEO metadata, PWA manifest, and service worker registration
  - `globals.css` - Global styles and Tailwind configuration
- `src/components/` - React components for each website section
  - Main sections: Header, Hero, About, Services, Portfolio, Testimonials, Contact, Footer
  - `InteractivePricing.tsx` - Interactive pricing component
  - `ui/` - Custom UI components (Toast, BackToTop, Breadcrumb, etc.)
  - `ui/ui/` - Radix UI component library with shadcn/ui patterns
- `src/contexts/` - React contexts
  - `ThemeContext.tsx` - Theme management for light/dark mode

### UI Component System
The project uses a comprehensive design system with:
- **Radix UI primitives** for accessibility and behavior
- **shadcn/ui patterns** for consistent styling
- **Custom components** in `src/components/ui/`
- **Utility components** like Toast notifications, progress indicators, and micro-interactions

### PWA Features
- Service Worker registration in layout
- Web App Manifest configuration
- Offline support capabilities
- Mobile-optimized experience

### SEO & Performance
- Comprehensive metadata configuration in layout.tsx
- OpenGraph and Twitter Card support
- Structured data implementation
- Google Analytics integration
- Optimized loading with lazy loading components

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

## Component Architecture

The website follows a modular component structure where the main page (`src/app/page.tsx`) orchestrates section components with scroll tracking and breadcrumb navigation. Each section component is self-contained and uses client-side rendering.

Current sections flow:
1. Header - Navigation with mobile support
2. Hero - Landing section with value proposition
3. About - Agency information
4. Services - Service offerings (Web Dev, Mobile Apps, Desktop Apps, College Projects)
5. Portfolio - Project showcase
6. Testimonials - Client feedback
7. Contact - Contact form with React Hook Form
8. InteractivePricing - Dynamic pricing component
9. Footer - Site links and information

The page includes:
- **Scroll tracking** to update current section
- **Sticky breadcrumb** navigation that appears after scrolling
- **Progressive disclosure** of UI elements

## Development Notes

### Styling
- Uses Tailwind CSS with custom animations (fadeInUp, pulse)
- Primary color scheme: Blue (#3b82f6) with theme support
- Dark mode support with 'class' strategy
- Custom keyframe animations defined in tailwind.config.ts
- Responsive design with mobile-first approach

### State Management
- Theme context for light/dark mode switching
- Local state management for scroll tracking and UI interactions

### Forms
- Contact form uses React Hook Form for validation
- Toast notifications for user feedback
- Backend integration needed for form submissions

### Images & Assets
- PWA manifest and icons configured
- Service worker for offline support
- Currently using placeholder images for portfolio

### Pricing Structure
Three-tier pricing structure:
- Starter Package: ₹25,000
- Growth Package: ₹75,000 (Most Popular)
- Enterprise Package: ₹2,00,000+

### Performance Optimizations
- Lazy loading components
- Service Worker for caching
- Optimized imports and code splitting
- Custom animations for smooth UX