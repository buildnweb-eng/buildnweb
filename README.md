# WebCraft Agency Website

A modern, professional website for your web development agency built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Complete Agency Website
- **Hero Section** - Eye-catching landing with your value proposition
- **About Section** - Why clients should choose your agency
- **Services Section** - Detailed overview of your offerings:
  - Website Development
  - SEO Services
  - Social Media Management
  - Instagram Advertising
- **Pricing Section** - Three-tier pricing structure:
  - Starter Package (₹25,000)
  - Growth Package (₹75,000) - Most Popular
  - Enterprise Package (₹2,00,000+)
- **Portfolio Section** - Showcase your best work
- **Contact Section** - Contact form and information
- **Footer** - Professional footer with links and social media

### Modern Design Features
- Fully responsive design for all devices
- Smooth scrolling navigation
- Professional animations and hover effects
- Clean, modern UI with gradient accents
- Mobile-first approach
- Fast loading and optimized performance

### Technical Features
- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS
- Professional icons from Heroicons
- SEO-friendly structure
- Clean, maintainable code

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
# Navigate to the project directory
cd agency

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` to see your website!

## 📝 Customization Guide

### 1. Update Company Information
Edit `src/app/page.tsx` to customize:

- **Company Name**: Change "WebCraft Agency" to your agency name
- **Contact Information**: Update phone, email, and address
- **Statistics**: Modify the numbers in the hero section (50+ projects, 95% satisfaction, etc.)

### 2. Customize Services
In the `services` array, you can:
- Add or remove services
- Update service descriptions
- Modify feature lists
- Change service icons

### 3. Update Pricing
Modify the `pricingPlans` array to:
- Adjust pricing amounts
- Add or remove features
- Change package descriptions
- Update the "Most Popular" badge

### 4. Portfolio Section
Update the `portfolio` array with:
- Your actual project screenshots
- Real project descriptions
- Client testimonials
- Case study links

### 5. Styling and Colors
The website uses a blue color scheme. To change:
- Primary color: Search for `blue-600` and replace with your brand color
- Secondary elements: Update gradient colors in CSS
- Custom animations: Modify in `globals.css`

### 6. Add Your Logo
- Replace the text logo with your actual logo
- Update the favicon in `src/app/favicon.ico`
- Add your brand assets to the `public` folder

## 🎨 Color Scheme
- Primary Blue: `#3b82f6`
- Secondary Purple: `#8b5cf6`
- Background: Clean whites and subtle grays
- Text: Professional dark grays

## 📱 Responsive Design
The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📈 SEO Optimization
The website includes:
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags for social sharing
- Fast loading times
- Mobile-friendly design

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Options
- Netlify
- Digital Ocean
- AWS
- Any hosting provider that supports Node.js

## 📞 Contact Form Setup
To make the contact form functional:
1. Set up a backend service (e.g., Formspree, Netlify Forms)
2. Add form handling logic
3. Integrate with your email service

## 🎯 Marketing Tips
Based on your business plan:

1. **Target Gaming Companies**: Highlight gaming industry experience
2. **Focus on Startups**: Emphasize startup-friendly pricing
3. **Local SEO**: Add local business schema markup
4. **Content Marketing**: Start a blog section for SEO
5. **Client Testimonials**: Add real testimonials as you grow

## 📊 Analytics Setup
Consider adding:
- Google Analytics
- Google Search Console
- Facebook Pixel (for Instagram ads)
- Hotjar for user behavior analysis

## 🔒 Security Best Practices
- Keep dependencies updated
- Use HTTPS in production
- Implement proper form validation
- Add rate limiting for contact forms

## 📝 Next Steps
1. **Customize Content**: Replace placeholder content with your information
2. **Add Real Portfolio**: Include actual project screenshots and case studies
3. **Set Up Contact Form**: Implement backend for form submissions
4. **SEO Optimization**: Add meta tags, schema markup, and analytics
5. **Performance Testing**: Test loading speeds and optimize images
6. **Launch**: Deploy to your chosen hosting platform

## 🤝 Support
If you need help customizing your website or have questions about any features, feel free to reach out!

---

**Built with ❤️ for your web development agency success!**
