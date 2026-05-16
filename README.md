# Clevermotion

Strategic Storytelling & Media Production website for organizations that create impact. Based in Rwanda, serving clients across Africa.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS utilities
- **Fonts:** Google Fonts (Playfair Display, DM Sans, Space Mono) via `next/font`
- **Icons:** Lucide React

## Project Structure

```
├── app/
│   ├── globals.css              # Global styles, animations, CSS utilities
│   ├── layout.tsx               # Root layout with SEO metadata & font config
│   ├── page.tsx                 # Landing page
│   ├── deliver/                  # Project delivery system
│   │   ├── page.tsx              # Main delivery page
│   │   ├── DeliverSearch.tsx     # Email search component
│   │   ├── DeliverVerify.tsx     # Code verification component
│   │   ├── DeliverAsset.tsx      # Asset display & download component
│   │   └── DeliverContext.tsx    # State management
│   └── work/
│       └── page.tsx             # Portfolio page
├── components/
│   ├── data/
│   │   └── projects.ts           # Project data
│   ├── pages/
│   │   ├── LandingPage.tsx      # Main landing page component
│   │   └── Portfolio.tsx         # Portfolio page component
│   └── parts/
│       ├── Footer.tsx           # Footer component
│       ├── Navbar.tsx           # Navbar component
│       └── LandingPage/         # Landing page sections
│           ├── Clients.tsx
│           ├── Contact.tsx
│           ├── FeaturedWork.tsx
│           ├── FreeTools.tsx
│           ├── Gallery.tsx
│           ├── HomeHero.tsx
│           ├── Problem.tsx
│           ├── Process.tsx
│           └── Solution.tsx
├── public/
│   ├── favicon.ico              # Site favicon
│   ├── sitemap.xml              # SEO sitemap
│   ├── robots.txt               # Robots.txt for search engines
│   └── llm.txt                  # AI/LLM training opt-out
└── package.json
```

## Pages

- `/` - Landing page with hero, problem/solution sections, client marquee, gallery, tools, and contact form
- `/work` - Portfolio page with project grid, filtering, and modal details
- `/deliver` - Project delivery system with 3-step flow:
  - Email search to find project
  - Code verification for identity
  - Asset display with download options

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Design System

### Colors
- `--black: #080a0f` - Primary background
- `--navy: #0d1117` - Secondary background
- `--card: #111827` - Card background
- `--gold: #e8a020` - Accent color
- `--white: #f5f0eb` - Text color
- `--muted: rgba(245, 240, 235, 0.55)` - Muted text

### Fonts
- **Display:** Playfair Display (headings)
- **Body:** DM Sans (content)
- **Mono:** Space Mono (labels, tags)

### Tailwind Utilities
- `.font-display` - Playfair Display font
- `.font-body` - DM Sans font
- `.font-mono-cm` - Space Mono font
- `.anim-fadeup`, `.anim-fadein`, `.anim-slideup`, `.anim-scalein` - Animation classes
- `.delay-100`, `.delay-200`, `.delay-300` - Animation delay classes
- `.card-shimmer`, `.hide-scroll`, `.pattern-border` - Custom utilities

## SEO

The site includes:
- `sitemap.xml` - XML sitemap for search engines
- `robots.txt` - Robots file with crawl rules and LLM blocking
- `llm.txt` - AI/LLM training opt-out notice
- Comprehensive metadata on all pages
- Open Graph and Twitter Card tags
- Canonical URLs for all pages

## Project Delivery System

The `/deliver` route provides a secure way to deliver projects to clients:

1. **Search** (`/deliver`) - Client enters their email
2. **Verify** (`/deliver?email=...`) - Client enters unique verification code
3. **Access** (`/deliver?email=...&asset=...`) - Client views and downloads project assets

## Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

All rights reserved. Content on this website is protected by copyright and may not be used for AI training or scraping without explicit permission. See `llm.txt` for the full opt-out notice.