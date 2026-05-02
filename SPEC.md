# Top Tier Property Group - Website Specification

## Project Overview
- **Project Name:** Top Tier Property Group Website
- **Type:** Real Estate / Property Management Company Website
- **Core Functionality:** Premium, high-converting homepage showcasing property management and construction services
- **Target Users:** Property owners, real estate investors, businesses seeking property management services

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion

---

## UI/UX Specification

### Color Palette
- **Primary Dark:** `#0F172A` (Slate 900)
- **Primary Accent:** `#D4AF37` (Gold)
- **Secondary Accent:** `#1E3A5F` (Navy)
- **Background Light:** `#FFFFFF`
- **Background Off-White:** `#F8FAFC`
- **Text Primary:** `#0F172A`
- **Text Secondary:** `#64748B`
- **Text Light:** `#F1F5F9`

### Typography
- **Headings:** "Playfair Display" (serif) - elegant, premium feel
- **Body:** "DM Sans" (sans-serif) - modern, clean
- **Hero Headline:** 64px desktop / 36px mobile, font-bold
- **Section Titles:** 40px desktop / 28px mobile, font-semibold
- **Body Text:** 16px, font-normal

### Layout
- **Max Width:** 1280px container
- **Spacing:** 80px vertical between sections (desktop), 48px (mobile)
- **Border Radius:** Cards 16px, Buttons 8px

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Sections Specification

### 1. HERO SECTION
- Full-screen hero (100vh)
- Background: High-quality luxury property image from Unsplash with dark overlay (rgba(15, 23, 42, 0.7))
- Headline: "Premium Property Management & Construction Services"
- Subheadline: "Elevating Your Properties with Expert Care and Meticulous Attention to Detail"
- Two CTA Buttons:
  - "Get Free Consultation" - Gold background, dark text
  - "View Projects" - Transparent with white border
- Animations:
  - Fade-in up on load (staggered children)
  - Subtle zoom on background image (scale 1.1 over 20s)

### 2. TRUST INDICATORS
- Horizontal bar with animated counters
- Background: Navy (#1E3A5F)
- Three stats:
  - "100+" Projects Completed
  - "50+" Happy Clients
  - "10+" Years Experience
- Number animation: Count up from 0 on scroll into view
- Icon for each stat

### 3. SERVICES SECTION
- Section title: "Our Services"
- 6 cards in 3-column grid
- Card features:
  - Icon (Lucide React)
  - Title
  - Short description (2 lines max)
  - Hover: Scale 1.03, shadow glow
- Services:
  1. Property Management - Full-service property oversight
  2. Construction - New builds and developments
  3. Renovation - Modernizing existing properties
  4. Maintenance - Ongoing care and repairs
  5. Leasing - Tenant placement and management
  6. Consulting - Expert advisory services

### 4. FEATURED PROJECTS
- Section title: "Featured Projects"
- 4-project grid (2x2 on desktop, 1 column mobile)
- Each project:
  - Image from Unsplash
  - Overlay on hover with project name
  - "View Details" button
- Projects:
  1. Luxury Downtown Apartments
  2. Corporate Office Tower
  3. Modern Residential Complex
  4. Historic Building Restoration

### 5. ABOUT SECTION
- Split layout: Image left, Text right
- Content:
  - Title: "About Top Tier Property Group"
  - paragraphs describing company
  - Key points highlighted
- Animation: Slide-in from right

### 6. TESTIMONIALS
- Section title: "What Our Clients Say"
- 3 testimonial cards
- Each card:
  - Quote icon
  - Review text
  - Client name
  - Company/Role
- Auto-rotating carousel with smooth transitions

### 7. CTA SECTION
- Full-width section with gradient background
- Title: "Ready to Work With Us?"
- Subtitle: "Let's discuss how we can elevate your property portfolio"
- Button: "Contact Us Today" with pulse animation

### 8. FOOTER
- 4-column layout
- Columns:
  - Company info + logo
  - Quick Links
  - Services
  - Contact Details
- Social icons at bottom
- Copyright line

---

## Animations Specification

### Framer Motion Settings
- **Fade In:** opacity 0 → 1, y 20 → 0, duration 0.6s
- **Stagger Children:** 0.1s delay between items
- **Hover Scale:** scale 1.03, duration 0.3s
- **Scroll Reveal:** use InView hook with viewport margin -100px

### Specific Animations
- Hero: FadeInUp, staggered text (0.1s, 0.2s, 0.3s)
- Stats: CountUp animation on view
- Services Cards: Hover scale + shadow
- Projects: Overlay fade on hover
- Testimonials: Slide transitions
- CTA Button: Pulse (scale 1.05) infinite

---

## Image Resources (Unsplash)

### Hero Background
- https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80

### Services Icons
- Lucide React icons (Building, Hammer, Wrench, PaintBucket, Users, Lightbulb)

### Projects
1. https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80
2. https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80
3. https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80
4. https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80

### About
- https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80

---

## Code Structure

```
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── fonts.ts
components/
├── navigation.tsx
├── hero.tsx
├── trust-indicators.tsx
├── services.tsx
├── projects.tsx
├── about.tsx
├── testimonials.tsx
├── cta.tsx
├── footer.tsx
lib/
└── data.ts
```

---

## Acceptance Criteria

1. ✅ Hero section loads with smooth fade-in animation
2. ✅ Background image has subtle zoom effect
3. ✅ Trust indicators animate count-up on scroll
4. ✅ Services cards have hover effects (scale + shadow)
5. ✅ Projects show overlay on hover
6. ✅ All sections are fully responsive
7. ✅ Testimonials carousel works smoothly
8. ✅ CTA button has pulse animation
9. ✅ Footer displays all information
10. ✅ Overall design feels premium and trustworthy
