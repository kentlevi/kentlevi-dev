export type WorkItem = {
  slug: string;
  title: string;
  platform: string;
  tags: string[];
  href: string;
  image?: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  highlights: string[];
  colors?: { hex: string; name: string }[];
  featured?: boolean;
};

export const workItems: WorkItem[] = [
  {
    slug: 'musticker',
    title: 'MUSTICKER',
    platform: 'Bilingual Commerce',
    tags: ['Vue.js', 'Nuxt.js', 'Frontend Architecture'],
    href: 'https://musticker.com/us',
    image: '/images/portfolio/musticker.jpg',
    year: '2025 — Ongoing',
    role: 'Lead Frontend Developer',
    summary: 'New sticker commerce platform built from scratch with multilingual EN/KR support.',
    description:
      'Musticker is a new sticker commerce platform currently in production where I am the primary frontend developer, building the storefront from scratch. The project modernizes the older sticker storefront pattern with an upgraded Nuxt stack, cleaner component contracts, and a multilingual rollout currently focused on English and Korean.',
    highlights: [
      'Designed the frontend architecture and component conventions from the ground up',
      'Modernized the legacy sticker storefront foundation into a cleaner Nuxt 3 codebase',
      'Implemented multilingual routing and content for English and Korean markets',
      'Built reusable product, cart, and merchandising UI consumed across the site',
      'Coordinated with backend and design to ship features ahead of public launch',
    ],
    colors: [
      { hex: '#F7D03C', name: 'Brand Yellow' },
      { hex: '#000000', name: 'Ink Black' },
      { hex: '#FFFFFF', name: 'Paper White' },
      { hex: '#2A2A2B', name: 'Charcoal' },
      { hex: '#E9E9EA', name: 'Soft Grey' },
    ],
    featured: true,
  },
  {
    slug: 'sticker-printing-network',
    title: 'STICKER PRINTING NETWORK',
    platform: 'Multi-Market E-commerce Maintenance',
    tags: ['Vue.js', 'Nuxt.js', 'SEO Metadata', 'Maintenance'],
    href: 'https://www.allstickerprinting.com/',
    image: '/images/portfolio/all-sticker-printing.jpg',
    year: '2025 — Ongoing',
    role: 'Frontend Support Developer',
    summary: 'Ongoing frontend support across seven localized sticker printing storefronts.',
    description:
      'A maintenance and frontend support role covering seven related sticker printing storefronts — All Sticker Printing, OZ Sticker Printing, StickerDot NZ, Sticker Market UK, Sticker Canada, Singa Printing, and Sticker Japan. I handle campaign updates, banner rollouts, responsive fixes, merchandising UI, and consistency across localized market sites.',
    highlights: [
      'Maintain seven live storefronts under one unified frontend support workflow',
      'Roll out promotional banners and seasonal merchandising updates across markets',
      'Resolve responsive and cross-browser issues without regressing localized SEO',
      'Keep dynamic metadata and indexing behavior stable across regional sites',
      'Coordinate sitewide design tweaks while preserving per-market overrides',
    ],
    colors: [
      { hex: '#D52941', name: 'Signal Red' },
      { hex: '#FFF176', name: 'Accent Yellow' },
      { hex: '#333333', name: 'Body Dark' },
      { hex: '#FFFFFF', name: 'Surface' },
      { hex: '#C4C4C4', name: 'Mid Grey' },
    ],
    featured: true,
  },
  {
    slug: 'postcards-from-mars',
    title: 'POSTCARDS FROM MARS',
    platform: 'Experimental Motion',
    tags: ['GSAP', 'Three.js', 'Vanilla Frontend'],
    href: 'https://postcards-from-mars-rho.vercel.app/',
    image: '/images/portfolio/postcards-from-mars.jpg',
    year: '2025',
    role: 'Solo Build',
    summary: 'Experimental editorial landing exploring Mars through layered motion.',
    description:
      'An experimental landing page exploring Mars through layered motion, atmospheric photography, and editorial pacing. Built around deep parallax layering and GSAP-driven scroll motion, with a Three.js scene anchoring the centerpiece. The project was a sandbox for refining scroll choreography and pacing — every section is timed against a single master timeline.',
    highlights: [
      'Built a single GSAP master timeline driving every scroll-bound section',
      'Designed a Three.js centerpiece with custom shaders for atmospheric depth',
      'Engineered multi-layer parallax that holds up across viewport sizes',
      'Tuned motion and asset loading for stable performance on lower-end devices',
      'Wrote the editorial copy and pacing alongside the technical implementation',
    ],
    colors: [
      { hex: '#0A0A0A', name: 'Deep Space' },
      { hex: '#C7522A', name: 'Mars Rust' },
      { hex: '#E8D5B7', name: 'Sand' },
      { hex: '#6BB6C9', name: 'Descent Cyan' },
      { hex: '#1A1A1A', name: 'Orbit Black' },
    ],
    featured: true,
  },
  {
    slug: 'vesper-coffee',
    title: 'VESPER COFFEE',
    platform: 'Specialty E-commerce',
    tags: ['Vue.js', 'Nuxt.js', 'Editorial UI'],
    href: 'https://vesper-v2.vercel.app/',
    image: '/images/portfolio/vesper-coffee.jpg',
    year: '2025',
    role: 'Solo Build',
    summary: 'Luxury small-batch coffee storefront with editorial pacing and dark, refined typography.',
    description:
      'Vesper Coffee is a premium small-batch roastery storefront framed around the brand line "The Depth of Darkness Refined." The site pairs an editorial, dark-mode aesthetic with a working product catalog — six signature coffees, a bespoke process walkthrough, and testimonials — built as a Nuxt application focused on typography, restraint, and product imagery.',
    highlights: [
      'Designed and implemented the dark editorial visual language end-to-end',
      'Built the product catalog with pricing, cart actions, and merchandise items',
      'Composed the bespoke five-step process section as a narrative scroll flow',
      'Tuned typography and spacing for an unhurried, ritualistic reading rhythm',
      'Integrated anchor navigation across story, products, process, and contact',
    ],
    colors: [
      { hex: '#18100A', name: 'Espresso' },
      { hex: '#322318', name: 'Roast' },
      { hex: '#D4AF37', name: 'Vesper Gold' },
      { hex: '#C5A059', name: 'Amber' },
      { hex: '#F4ECDE', name: 'Cream' },
    ],
  },
  {
    slug: 'cozina-de-marray',
    title: 'COZINA DE MARRAY',
    platform: 'Premium Grill & Bar',
    tags: ['React', 'Vite', 'Tailwind', 'Hospitality UI'],
    href: 'https://cozina-marray-v2.vercel.app/',
    image: '/images/portfolio/cozina-de-marray.jpg',
    year: '2025',
    role: 'Solo Build',
    summary: 'Upscale grill and bar concept site positioning the venue as elevated casual dining.',
    description:
      'Cozina de Marray is a premium grill and bar concept site built to position the venue as elevated casual dining. The storefront centers on atmosphere — large hero imagery, menu highlights, and a reservation-friendly layout — built on a React + Vite foundation that keeps content easy to update season to season.',
    highlights: [
      'Defined the visual identity through hero imagery, type pairings, and color',
      'Structured menu sections so seasonal items can be swapped without dev time',
      'Built the reservation and contact flow against a mobile-first layout',
      'Optimized hero and gallery imagery for fast first paint on hospitality traffic',
      'Set up the site to scale into a multi-location structure if the brand grows',
    ],
    colors: [
      { hex: '#1A1A1A', name: 'Charcoal' },
      { hex: '#B8421F', name: 'Ember' },
      { hex: '#6B0F1A', name: 'Wine' },
      { hex: '#C9A961', name: 'Brass' },
      { hex: '#F5E6D3', name: 'Linen' },
    ],
  },
  {
    slug: 'habibi-shaun-rentals',
    title: 'HABIBI & SHAUN RENTALS',
    platform: 'Siquijor Island Vehicle Rentals',
    tags: ['React', 'Vite', 'Tailwind', 'Booking UI'],
    href: 'https://habibi-rentals-platform.vercel.app/',
    image: '/images/portfolio/habibi-shaun.jpg',
    year: '2025',
    role: 'Solo Build',
    summary: 'Verified island rental booking flow for scooters, cars, tuktuks, and vans on Siquijor.',
    description:
      'Habibi & Shaun Rentals is a vehicle rental booking frontend for Siquijor island — scooters, cars, tuktuks, and vans delivered to ports and resorts. The page leads with a fleet-and-date search, then walks travelers through how to book, the fleet, and support, with chat-first booking through Messenger and WhatsApp and 24/7 port delivery as the core promise.',
    highlights: [
      'Designed the verified-island-rentals positioning around an instant pick-up promise',
      'Built the multi-tab fleet search (motorbikes, cars, vans, tuktuks) with date and pick-up location',
      'Structured the page around three pillars: fast chat booking, 24/7 port delivery, clear requirements',
      'Wired Messenger and WhatsApp as the primary booking handoff for low-friction conversion',
      'Tuned mobile usability for travelers arriving by boat with limited time on the ground',
    ],
    colors: [
      { hex: '#1A2942', name: 'Island Navy' },
      { hex: '#4A5A75', name: 'Slate' },
      { hex: '#6B8BB5', name: 'Sky' },
      { hex: '#E8E5DE', name: 'Sand' },
      { hex: '#FFFFFF', name: 'Surface' },
    ],
  },
  {
    slug: 'solenne-bay',
    title: 'SOLENNE BAY',
    platform: 'Luxury Coastal Resort',
    tags: ['React', 'Vite', 'Tailwind', 'Hospitality UI'],
    href: 'https://solenne-v2.vercel.app/',
    image: '/images/portfolio/solenne-bay.jpg',
    year: '2025',
    role: 'Solo Build',
    summary: 'Luxury coastal resort site targeting affluent travelers seeking upscale relaxation.',
    description:
      'Solenne Bay is a luxury coastal resort site positioning a premium beachfront destination for affluent travelers. The frontend leans on cinematic imagery, refined typography, and a structure that supports accommodations, dining, amenities, and booking-ready CTAs — all on a React + Vite foundation tuned for fast loads on travel traffic.',
    highlights: [
      'Designed a cinematic hero and gallery system around resort photography',
      'Structured accommodations, dining, and amenities as independent content blocks',
      'Built booking-ready CTAs that can plug into a PMS or third-party reservation tool',
      'Optimized image delivery so travel traffic loads quickly on mobile networks',
      'Set up the layout so seasonal campaigns can be swapped without code changes',
    ],
    colors: [
      { hex: '#F4EFE9', name: 'Coastal Cream' },
      { hex: '#D4C5A9', name: 'Sand' },
      { hex: '#8FA68E', name: 'Sage' },
      { hex: '#2C5F7E', name: 'Ocean' },
      { hex: '#1A2E33', name: 'Deep Tide' },
    ],
  },
  {
    slug: 'rsr-smart-attendance',
    title: 'RSR SMART ATTENDANCE',
    platform: 'Workforce Attendance Platform',
    tags: ['React', 'Vite', 'Firebase', 'Face Recognition'],
    href: 'https://rsr-smart-attendance.onrender.com/',
    image: '/images/portfolio/rsr-smart-attendance.jpg',
    year: '2025',
    role: 'Solo Build',
    summary: 'Three-portal attendance system for RSR Engineering — Time Clock, Employee Portal, and Management.',
    description:
      'RSR Smart Attendance is a workforce attendance platform built for RSR Engineering, structured around three distinct portals: Time Clock for recording attendance and work hours, Employee Portal for profile, leaves, and timesheets, and Management for admin oversight, employees, and system settings. The system combines face recognition, QR check-in, and geolocation to log staff time. Built as a React + Vite SPA on Firebase/Firestore and deployed on Render.',
    highlights: [
      'Designed three role-based portals — Time Clock, Employee, and Management — from one codebase',
      'Implemented face-recognition check-in alongside QR and geolocation fallbacks',
      'Wired Firestore as the live data layer for attendance, employees, leaves, and payroll',
      'Built employee self-service for profile, leaves, and timesheet review',
      'Added CSV export and reporting charts for HR and payroll reconciliation',
    ],
    colors: [
      { hex: '#1F7A3E', name: 'RSR Green' },
      { hex: '#C7E5CB', name: 'Mint' },
      { hex: '#F0F8F2', name: 'Page Mint' },
      { hex: '#2C3E50', name: 'Slate Ink' },
      { hex: '#FFFFFF', name: 'Surface' },
    ],
  },
];

export const featuredWorkItems = workItems.filter((item) => item.featured);
