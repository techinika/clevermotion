# Clevermotion

Strategic Storytelling & Media Production website for organizations that create impact. Based in Rwanda, serving clients across Africa.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS utilities
- **Fonts:** Google Fonts (Playfair Display, DM Sans, Space Mono) via `next/font`
- **Icons:** Lucide React
- **Email:** Nodemailer for contact form submissions

## Project Structure

```
├── app/
│   ├── globals.css              # Global styles, animations, CSS utilities
│   ├── layout.tsx               # Root layout with SEO metadata & font config
│   ├── page.tsx                 # Landing page
│   ├── deliver/                  # Project delivery system
│   │   └── page.tsx              # Main delivery page
│   ├── work/
│   │   └── page.tsx             # Portfolio page
│   ├── admin/
│   │   └── page.tsx             # Admin dashboard
│   └── api/
│       └── contact/
│           └── route.ts         # Contact form API endpoint
├── components/
│   ├── data/
│   │   └── projects.ts           # Project data
│   ├── pages/
│   │   ├── LandingPage.tsx       # Main landing page component
│   │   ├── Portfolio.tsx          # Portfolio page component
│   │   └── AdminPage.tsx          # Admin dashboard page
│   └── parts/
│       ├── Footer.tsx             # Footer component
│       ├── Navbar.tsx             # Navbar component
│       ├── Admin/                 # Admin components
│       │   ├── FontLoader.tsx
│       │   ├── Icons.tsx
│       │   └── MockData.ts
│       └── LandingPage/           # Landing page sections
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
│   ├── images/                   # Project images for gallery & portfolio
│   ├── logos/                    # Client logos for partners marquee
│   ├── videos/                   # Demo videos
│   ├── sitemap.xml               # SEO sitemap
│   ├── robots.txt                # Robots.txt for search engines
│   └── llm.txt                   # AI/LLM training opt-out
└── package.json
```

## Pages

- `/` - Landing page with hero, problem/solution sections, client marquee, gallery, free tools with subscription modal, and contact form
- `/work` - Portfolio page with project grid, filtering, and modal details with video support
- `/deliver` - Project delivery system with 3-step flow:
  - Email search to find project
  - Code verification for identity
  - Asset display with download options
- `/admin` - Admin dashboard for managing customers, projects, deliverables, and activity logs

## Features

### Landing Page
- SEO-optimized hero section with company description
- Client logos marquee with real partner logos
- Featured work section with real project images
- Gallery with actual project thumbnails
- Free resources with subscription modal (lead capture)
- Contact form with message textarea and email notifications

### Portfolio (/work)
- Project grid with filtering by category
- Real images for all projects
- Video support in project modals
- Keyboard navigation (arrow keys, ESC)

### Project Delivery (/deliver)
- Secure 3-step delivery flow
- Email-based project lookup
- Unique code verification
- Asset download access

### Admin Dashboard (/admin)
- Dashboard with project pipeline stats
- Customer management (add, delete)
- Project management with status tracking
- Deliverables management with file upload
- Activity log tracking

## Environment Variables

Create a `.env.local` file with the following:

```env
# Admin email to receive contact form submissions
ADMIN_EMAIL=admin@example.com

# SMTP Configuration for sending emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
SMTP_FROM=your-email@gmail.com
```

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