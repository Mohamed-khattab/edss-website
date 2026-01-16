# EDSS Company Website

A modern, responsive company website for EDSS built with Next.js 14, featuring smooth animations, light/dark theme toggle, and comprehensive sections showcasing services, case studies, and company information.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for light/dark mode toggle
- **Fonts**: Outfit (headings) & Source Sans 3 (body)

## Features

- Responsive design for all screen sizes
- Light/Dark theme toggle with smooth transitions
- Scroll-triggered animations
- Interactive components (testimonial carousel, animated counters)
- Multi-page structure with smooth navigation
- SEO optimized with metadata

## Project Structure

```
edss-website/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with CSS variables
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── case-studies/page.tsx # Case studies page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation with theme toggle
│   │   └── Footer.tsx
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── SectionHeading.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Stats.tsx
│       ├── CaseStudies.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Static images
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **Home** (`/`): Hero section, services overview, company stats, featured case studies, testimonials, and CTA
- **About** (`/about`): Company story, mission/vision, core values, team overview, and location
- **Services** (`/services`): Detailed service offerings with features and highlights
- **Case Studies** (`/case-studies`): Project showcases with challenges, solutions, and results
- **Contact** (`/contact`): Contact form, contact information, and social links

## Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color palette:

```css
:root {
  --primary: #1E40AF;
  --accent: #0D9488;
  /* ... other variables */
}

.dark {
  --primary: #3B82F6;
  --accent: #22D3EE;
  /* ... other variables */
}
```

### Content

Update the company information, services, case studies, and testimonials directly in the respective component files.

## Contact

- **Email**: ceo@edss-group.com
- **Phone**: +20 109 999 9999
- **Location**: District 5, New Cairo, Egypt
- **Website**: www.edss-group.com

---

Built with ❤️ by EDSS Group
