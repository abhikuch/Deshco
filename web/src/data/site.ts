export const siteConfig = {
  name: 'Deshco Holiday Homes',
  tagline: 'Holiday home management in Dubai',
  description:
    'Deshco Holiday Homes is a trusted holiday home and Airbnb management company in Dubai. We manage properties for owners and list them on Airbnb and top booking platforms.',
  url: 'https://deshco.ae',
  phone: '+971 585190982',
  phoneHref: 'tel:+971585190982',
  email: 'homes@deshco.ae',
  whatsapp: 'https://wa.me/message/NDPQBUN57L6VB1',
  address: '603, Exchange Tower, Business Bay, Dubai, UAE',
  social: {
    instagram: 'https://www.instagram.com/deshcodubai/',
    facebook: 'https://www.facebook.com/deshcoholidays',
    linkedin: 'https://www.linkedin.com/company/deshco-dubai/about/',
    twitter: 'https://twitter.com/deshcodubai',
    youtube: 'https://www.youtube.com/channel/UCX9x_eqveF-PsfJMY1VXLDQ',
    tiktok: 'https://www.tiktok.com/@deshcodubai',
  },
} as const;

export const pageSeo = {
  home: {
    title: 'Dubai Holiday Home Management',
    description:
      'Founder-managed holiday home management in Dubai. DET permits, listings, dynamic pricing, guest support, housekeeping, and transparent monthly payouts for property owners.',
  },
  about: {
    title: 'About Us',
    description:
      'Meet the Deshco team. We help Dubai homeowners turn properties into high-performing holiday rentals with transparent, owner-first management.',
  },
  partner: {
    title: 'List Your Property',
    description:
      'Partner with Deshco to list your Dubai home on Airbnb and top booking platforms. Full-service management, DET compliance, and itemised owner reporting.',
  },
  privacy: {
    title: 'Privacy Policy',
    description:
      'How Deshco Holiday Homes collects, uses, and protects personal data for guests, homeowners, and website visitors in the UAE.',
  },
  terms: {
    title: 'Terms & Conditions',
    description:
      'Terms and conditions for using Deshco Holiday Homes services, bookings, and property management in Dubai.',
  },
  cancellation: {
    title: 'Cancellation Policy',
    description:
      'Deshco Holiday Homes cancellation, refund, and booking change policy for holiday home stays in Dubai.',
  },
} as const;

export const navLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Services', href: '/#services' },
  { label: 'Areas', href: '/#areas' },
  { label: 'About', href: '/about' },
  { label: 'List your property', href: '/list-your-property' },
] as const;

export const heroContent = {
  eyebrow: 'For Dubai property owners',
  headline: 'Turn your Dubai home into steady short-stay income — without the hassle.',
  subheadline:
    'Deshco handles DET permits, listings, pricing, guests, cleaning, and monthly payouts. Founder-managed. Fully transparent.',
  ctaPrimary: 'Get a free revenue estimate',
  ctaSecondary: 'Chat on WhatsApp',
  image: '/images/hero-interior.jpg',
} as const;

export const trustStrip = [
  { label: '100% DET-compliant listings' },
  { label: 'Founder-managed operations' },
  { label: 'Key Dubai districts covered' },
  { label: '24/7 guest support' },
] as const;

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Free property assessment',
    description:
      'Share your property details. We review location, layout, and revenue potential — then send a tailored estimate within 48 hours.',
  },
  {
    step: '02',
    title: 'Setup, photos & listing launch',
    description:
      'We handle DET permits, professional listing content, pricing strategy, and go live on Airbnb and top booking platforms.',
  },
  {
    step: '03',
    title: 'Monthly reporting & payouts',
    description:
      'Guests, housekeeping, and maintenance are managed end-to-end. You receive itemised statements and on-time payouts every month.',
  },
] as const;

export const whatsIncluded = [
  {
    title: 'Listing & distribution',
    description:
      'Airbnb and Booking.com setup, photography guidance, calendar management, and channel optimisation.',
  },
  {
    title: 'Dynamic pricing',
    description:
      'Seasonality, events, comps, and booking-window tuning to maximise occupancy and ADR.',
  },
  {
    title: 'Guest experience',
    description:
      '24/7 guest communication, check-in support, and fast issue resolution — so you never field a late-night call.',
  },
  {
    title: 'Housekeeping & compliance',
    description:
      'Hotel-grade turnovers, Tourism Dirham collection, DET compliance, and post-stay photo inspections.',
  },
] as const;

export const ourServices = [
  {
    title: 'Listing & distribution',
    description:
      'Airbnb/Booking listing creation, content, photography guidance, and calendar management.',
    icon: '/images/listing.png',
  },
  {
    title: 'Dynamic pricing',
    description: 'Seasonality, events, comps, booking window optimization.',
    icon: '/images/price.png',
  },
  {
    title: 'Guest experience (24/7)',
    description: 'Fast response, check-in support, issue resolution.',
    icon: '/images/satisfaction.png',
  },
  {
    title: 'Maintenance coordination',
    description: 'Vendor dispatch, issue triage, and owner approvals above thresholds.',
    icon: '/images/house.png',
  },
  {
    title: 'Compliance & reporting',
    description: 'Tourism Dirham collection and monthly remittance workflows.',
    icon: '/images/regulatory-compliance.png',
  },
  {
    title: 'Housekeeping & linen',
    description: 'Hotel-grade cleaning standards with QC checks.',
    icon: '/images/cleaning.png',
  },
] as const;

export const areasWeServe = [
  {
    name: 'Downtown Dubai',
    note: 'Dubai Opera, Dubai Mall, and premium nightly rates',
    image: '/images/location-1.jpg',
  },
  {
    name: 'Burj Khalifa District',
    note: 'Iconic Downtown address · strong tourist demand',
    image: '/images/location-4.jpg',
  },
  {
    name: 'Business Bay',
    note: 'Corporate and leisure mix · canal-side stays',
    image: '/images/location-5.jpg',
  },
  {
    name: 'Dubai Marina & JBR',
    note: 'Waterfront appeal · high guest occupancy',
    image: '/images/location-6.jpg',
  },
  {
    name: 'Al Fahidi / Bur Dubai',
    note: 'Heritage stays · close to Old Dubai attractions',
    image: '/images/location-7.jpg',
  },
] as const;

export const whyDeshco = [
  {
    title: 'Founder-managed, not call-centre',
    description:
      'Every owner works directly with our founding team. No ticket queues, no account hand-offs — just people who know your property.',
  },
  {
    title: 'Itemised payouts, no hidden fees',
    description:
      'Fixed payout schedules with detailed income and expense breakdowns. You always know exactly what you earned and why.',
  },
  {
    title: 'Post-stay inspection proof',
    description:
      'Photo inspections shared after every guest turnover, so you see the condition of your home without being there.',
  },
  {
    title: 'Listed only when fully compliant',
    description:
      'We never go live without DET approvals and licences in place. Your property stays protected from day one.',
  },
] as const;

/** @deprecated Use ourServices on homepage */
export const services = ourServices;

/** @deprecated Use whyDeshco on homepage */
export const transparencyFeatures = whyDeshco;

/** @deprecated Use areasWeServe on homepage */
export const locations = areasWeServe.map(({ name, image }) => ({ name, image }));

export const partnerBenefits = [
  {
    title: 'Increased exposure',
    description:
      'Your property listed on Airbnb, Booking.com, and our distribution channels — positioned for high-value short-stay guests.',
  },
  {
    title: 'Hands-off maintenance',
    description:
      'Cleaning, linen, vendor coordination, and post-stay inspections handled end-to-end. Your home stays guest-ready.',
  },
  {
    title: 'Vetted guests only',
    description:
      'We screen every booking. Your property is protected with clear house rules and documented check-in/out.',
  },
  {
    title: 'Owner flexibility',
    description:
      'Block dates for personal use anytime. You stay in control of your calendar while we manage everything else.',
  },
] as const;

export const aboutContent = {
  headline: 'Who We Are',
  intro: [
    'Deshco Holiday Homes helps Dubai property owners earn from short-stay rentals — without the operational burden.',
    'We are a founder-managed holiday home company built on transparency: DET-compliant listings, itemised monthly payouts, and direct access to the people running your property.',
    'Whether you own in Downtown, the Marina, or Business Bay, we handle permits, pricing, guests, housekeeping, and maintenance so you can focus on returns, not day-to-day hosting.',
  ],
  experience: {
    title: 'Our approach',
    text: 'We keep portfolios intentionally small so every home gets founder-level attention — not a call-centre script. That means faster decisions, clearer reporting, and a management partner who treats your property like their own.',
  },
  founders: [
    {
      name: 'Anish Deshpande',
      role: 'Co-founder',
      image: '/images/founders/anish-deshpande.jpg',
      linkedin: 'https://in.linkedin.com/in/anishsdeshpande',
      message:
        "Deshco Holiday Homes was founded to make private luxury stays accessible to guests seeking refined escapes across Dubai and the UAE — from iconic city stays near Downtown and the Marina to serene retreats along the coast and desert. Our aim is to create an aspirational hospitality experience, inviting guests to immerse themselves in the elegance and privacy of ultra-luxurious homes — curated to the standards of the region's most discerning homeowners.",
    },
    {
      name: 'Manisha Garje',
      role: 'Co-founder',
      image: '/images/founders/manisha-garje.jpg',
      linkedin: 'https://www.linkedin.com/in/manisha-garje/',
      message:
        "Deshco Holiday Homes began with one belief: holidays should feel personal, not transactional — a place where you don't just stay, you belong. Each home is thoughtfully curated to feel warm, private, and effortlessly comfortable, so your getaway becomes a memory you'll return to. Thank you for trusting us to be part of your journey.",
    },
  ],
} as const;

export const footerLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'List your property', href: '/list-your-property' },
  ],
  policies: [
    { label: 'Cancellation policy', href: '/cancellation-policy' },
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Terms & conditions', href: '/terms-conditions' },
  ],
} as const;
