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

export const navLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'List your property', href: '/list-your-property' },
] as const;

export const heroContent = {
  eyebrow: 'Dubai holiday home management',
  headline: 'Turn your Dubai home into a high-performing holiday home.',
  subheadline:
    'We manage everything end-to-end: DET permits, listing, pricing, guest support, housekeeping, and maintenance.',
  cta: "Let's Connect",
  image: '/images/hero-interior.jpg',
} as const;

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Defining the Vision',
    description:
      'We understand your property goals and define the best revenue strategy.',
  },
  {
    step: '02',
    title: 'Market Research',
    description:
      'We analyze demand, pricing trends, and guest expectations in your area.',
  },
  {
    step: '03',
    title: 'Property Optimization',
    description:
      'We prepare and position your property for maximum visibility and bookings.',
  },
  {
    step: '04',
    title: 'Performance Testing',
    description:
      'We track results and continuously improve pricing and occupancy.',
  },
  {
    step: '05',
    title: 'Launch & Growth',
    description:
      'Your property starts generating consistent high-value returns.',
  },
] as const;

export const locations = [
  { name: 'Downtown Dubai', image: '/images/location-1.jpg' },
  { name: 'Marina', image: '/images/location-4.jpg' },
  { name: 'Business Bay', image: '/images/location-5.jpg' },
  { name: 'JLT', image: '/images/location-6.jpg' },
  { name: 'Al Barsha', image: '/images/location-7.jpg' },
] as const;

export const services = [
  {
    title: 'Listing & distribution',
    description:
      'Airbnb/Booking listing creation, content, photography guidance, and calendar management.',
    icon: '/images/listing.png',
  },
  {
    title: 'Dynamic pricing',
    description:
      'Seasonality, events, comps, booking window optimization.',
    icon: '/images/price.png',
  },
  {
    title: 'Guest experience (24/7)',
    description: 'Fast response, check-in support, issue resolution.',
    icon: '/images/satisfaction.png',
  },
  {
    title: 'Maintenance coordination',
    description:
      'Vendor dispatch, issue triage, and owner approvals above thresholds.',
    icon: '/images/house.png',
  },
  {
    title: 'Compliance & reporting',
    description:
      'Tourism Dirham collection and monthly remittance workflows.',
    icon: '/images/regulatory-compliance.png',
  },
  {
    title: 'Housekeeping & linen',
    description: 'Hotel-grade cleaning standards with QC checks.',
    icon: '/images/cleaning.png',
  },
] as const;

export const transparencyFeatures = [
  {
    title: 'Fixed Payouts, Itemised Statements',
    description:
      'On-time payouts with detailed income and expense breakdowns.',
  },
  {
    title: 'Pre-Approved Repair Reserve',
    description:
      'Quick fixes handled within agreed limits—no surprises.',
  },
  {
    title: 'Post-Stay Inspection Proof',
    description:
      'Photo inspections are shared after every guest turnover.',
  },
  {
    title: '100% DET-Compliant Listings',
    description:
      'We list only after all approvals and licenses are in place.',
  },
] as const;

export const partnerBenefits = [
  {
    title: 'Increased Exposure',
    description:
      'We advertise your home to discerning tourists and help you uncover its true potential as a reliable source of income.',
  },
  {
    title: 'Stress-Free Maintenance',
    description:
      'We assure complete safety and quality maintenance of your home while hosting guests.',
  },
  {
    title: 'Guest Filtering',
    description:
      'We confirm the genuinity of all our guests and assure high-value tourists access to your coveted home.',
  },
  {
    title: 'Flexibility',
    description:
      'Homeowners have complete flexibility in setting aside dates for their personal visits and hosting tourists.',
  },
] as const;

export const aboutContent = {
  headline: 'Who We Are',
  intro: [
    'Deshco Holiday Homes was born from a simple idea: luxury stays should feel personal, effortless, and memorable.',
    'We create access to exclusive holiday homes designed for families and travelers who value comfort, privacy, and refined living. A villa that feels like your own—where every stay feels familiar yet special—is a luxury few experience. We exist to make that luxury accessible.',
    'From carefully selected locations to thoughtfully designed spaces, every Deshco home is curated to deliver an elevated staycation experience that feels both indulgent and welcoming.',
  ],
  experience: {
    title: 'The Deshco Experience',
    text: "Come be part of unforgettable Dubai moments — mornings with skyline views, sunset walks by the marina, desert escapes under a sky full of stars, and nights that end with city lights and great food. The Deshco Life in Dubai is just a plan away — and we'll curate it for you, too!",
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
