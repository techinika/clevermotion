# Clevermotion

Strategic Storytelling & Media Production website for organizations that create impact.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS utilities
- **Fonts:** Google Fonts (Playfair Display, DM Sans, Space Mono) via `next/font`

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles, animations, CSS utilities
│   ├── layout.tsx       # Root layout with font configuration
│   ├── page.tsx         # Landing page (redirects to LandingPage component)
│   └── work/
│       └── page.tsx     # Portfolio page
├── components/
│   └── pages/
│       ├── LandingPage.tsx   # Main landing page component
│       └── Portfolio.tsx     # Portfolio/work page component
├── public/              # Static assets
└── package.json
```

## Pages

- `/` - Landing page with hero, problem/solution sections, client marquee, gallery, tools, and contact form
- `/work` - Portfolio page with project grid, filtering, and modal details

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

### Tailwind Classes Used
- Custom font utilities: `.font-display`, `.font-body`, `.font-mono-cm`
- Animation utilities: `.anim-fadeup`, `.anim-fadein`, `.anim-slideup`, `.anim-scalein`
- Animation delays: `.delay-100`, `.delay-200`, `.delay-300`
- Custom utilities: `.card-shimmer`, `.hide-scroll`, `.pattern-border`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

All rights reserved.