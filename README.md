# noteTech Website

Production-grade company website for **noteTech** — Tanzania's leading software company.  
Built with Next.js 14, TypeScript, Tailwind CSS v3, and Framer Motion.

**Live:** [www.note.co.tz](https://www.note.co.tz)

---

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript (strict)     |
| Styling     | Tailwind CSS v3         |
| Animations  | Framer Motion v11       |
| Icons       | Lucide React            |
| Fonts       | Syne · Plus Jakarta Sans · JetBrains Mono |

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone / navigate to the project
cd c:/xampp/htdocs/note

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, Navbar/Footer)
│   ├── globals.css         # Global styles + Tailwind directives
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── projects/page.tsx   # Projects / portfolio page
│   ├── note/page.tsx       # NOTE System landing page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact page (client component with form)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav + mobile hamburger overlay
│   │   └── Footer.tsx      # Full-width footer
│   ├── home/
│   │   ├── HeroSection.tsx    # Animated hero with word stagger
│   │   ├── ServicesGrid.tsx   # 4-service cards
│   │   ├── NoteFeature.tsx    # NOTE system split section + dashboard mockup
│   │   ├── StatsBar.tsx       # Animated stat counters
│   │   ├── ClientsStrip.tsx   # Infinite CSS marquee of client logos
│   │   ├── Testimonials.tsx   # Testimonial cards
│   │   └── CTABanner.tsx      # Full-width dark CTA section
│   ├── shared/
│   │   ├── Button.tsx         # primary / secondary / ghost / outline variants
│   │   ├── SectionHeader.tsx  # Reusable eyebrow + title + subtitle
│   │   ├── AnimatedCounter.tsx # Count-up on scroll
│   │   ├── ServiceCard.tsx    # Service feature card
│   │   ├── ProjectCard.tsx    # Portfolio project card
│   │   ├── ProjectsFilter.tsx # Client-side category filter
│   │   └── WhatsAppButton.tsx # Floating WhatsApp CTA
│   └── note/
│       ├── NoteHero.tsx       # NOTE page hero
│       ├── NoteFeatures.tsx   # Feature breakdown grid
│       └── NotePricing.tsx    # 3-tier pricing section
│
├── data/
│   ├── clients.ts          # All 16 client records
│   ├── services.ts         # Services content + use cases
│   └── projects.ts         # Portfolio project details
│
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

---

## Pages

| Route        | Description                                     |
|--------------|-------------------------------------------------|
| `/`          | Home — hero, services, NOTE feature, stats, clients, testimonials, CTA |
| `/services`  | Detailed service breakdown with use cases       |
| `/projects`  | Filterable portfolio grid (all 16 clients)      |
| `/note`      | NOTE Sales System landing page with pricing     |
| `/about`     | Company story, mission/vision, team, timeline   |
| `/contact`   | Contact form (mailto) + WhatsApp CTA            |

---

## Configuration

### Brand Colors (tailwind.config.ts)

| Token               | Hex       | Usage              |
|---------------------|-----------|--------------------|
| `brand-navy`        | `#0F172A` | Headings, nav bg   |
| `brand-amber`       | `#F59E0B` | Primary accent     |
| `brand-green`       | `#10B981` | Secondary accent   |
| `brand-bg`          | `#FAFAFA` | Page background    |
| `brand-dark`        | `#1E293B` | Body text          |
| `brand-muted`       | `#64748B` | Muted text         |

### Update WhatsApp Number

In two places:

1. `src/app/layout.tsx` — `<WhatsAppButton phoneNumber="+255XXXXXXXXX" />`
2. `src/app/contact/page.tsx` — WhatsApp card `href`
3. `src/components/home/CTABanner.tsx` — WhatsApp link `href`

### Update Contact Details

Edit `src/components/layout/Footer.tsx` — phone, email, address fields.

---

## Features

- **Responsive** — mobile-first, tested at 375px → 1440px
- **Animated** — Framer Motion: staggered hero, scroll-triggered cards, count-up stats
- **SEO** — Next.js Metadata API with OpenGraph on every page
- **Accessible** — ARIA labels, keyboard navigation, semantic HTML
- **Performance** — `next/font` (zero layout shift), lazy imports, code splitting
- **WhatsApp** — Floating button + inline CTAs (critical for Tanzanian market)
- **Contact Form** — Client-side TypeScript validation → mailto fallback

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Other Hosts

The project is a standard Next.js app — deploy anywhere that supports Node.js 18+.

```bash
npm run build
npm start
```

---

## Customization Checklist

- [ ] Replace `+255000000000` with real WhatsApp number
- [ ] Update `hello@note.co.tz` with real email in Footer
- [ ] Add real team photos / names in About page
- [ ] Add real testimonials from clients
- [ ] Configure `metadataBase` URL in `layout.tsx`
- [ ] Add `favicon.ico` and `og-image.png` to `/public`
- [ ] Set up Formspree or similar for the contact form (replace mailto)

---

*Built with love in Tanzania 🇹🇿 | noteTech © 2026*
