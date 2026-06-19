export type Project = {
  slug: string
  title: string
  type: 'Client project' | 'Academic project'
  year: string
  live: string | null
  github: string | null
  tagline: string
  overview: string
  approach: string
  impact: string[]
  stack: string[]
  image: string | null
  images: string[] | null
}

export const projects: Project[] = [
  {
    slug: 'traffic-hotspot',
    title: 'Traffic Accident Hotspot Detection',
    type: 'Academic project',
    year: '2026',
    live: 'https://traffic-hotspot.onrender.com',
    github: 'https://github.com/chris-bhaila/Traffic-Accident-Hotspot-Detection-System',
    tagline: 'Live ML system that clusters 1,498 real accident records to identify hazard zones and predict risk by time, weather, and road type.',
    overview: 'Road safety in Kathmandu lacks data-driven infrastructure. This system ingests real accident records, applies DBSCAN clustering to surface 43 statistically significant hotspots, and layers a Random Forest model on top to predict risk given conditions like time of day, weather, and road type. The result is a live map interface that makes the patterns visible and actionable.',
    approach: 'DBSCAN was chosen over k-means because accident hotspots are irregularly shaped and vary in density — k-means would have forced arbitrary cluster boundaries. The Random Forest model was trained on engineered features from the accident records including hour bins, weather codes, and road classifications. The Django backend serves predictions via REST API, with Leaflet.js rendering the map and Chart.js handling the risk breakdowns.',
    impact: [
      '1,498 real accident records processed and clustered',
      '43 distinct hotspots identified across the dataset',
      'Risk prediction by time, weather, and road type — live in production',
      'Deployed on Render with a fully interactive map interface',
    ],
    stack: ['Python', 'Django', 'scikit-learn', 'DBSCAN', 'Random Forest', 'PostgreSQL', 'Leaflet.js', 'Chart.js', 'Open-Meteo', 'OpenStreetMap', 'Render'],
    image: '/images/hero-image/traffic.png',
    images: [
      '/images/traffic/1.png',
      '/images/traffic/2.png',
      '/images/traffic/3.png',
      '/images/traffic/4.png',
    ],
  },
  {
    slug: 'edunest',
    title: 'EduNest',
    type: 'Client project',
    year: '2026',
    live: 'https://lms.recc.com.np',
    github: 'https://github.com/chris-bhaila/Learning-Management-System---AU',
    tagline: 'Private instructor-led LMS with token-based enrollment, role-based access control, and Google OAuth — built for focused learning.',
    overview: 'Most LMS platforms are marketplaces first and learning tools second. EduNest was built for a client who wanted the opposite — a focused, private environment where instructors control exactly who gets in. Token-based enrollment replaces the payment flow entirely, removing the need for payment infrastructure and keeping the experience clean for both instructors and students.',
    approach: 'The entire codebase is structured around the repository pattern, keeping business logic out of controllers and making the data layer swappable. Role-based access control is enforced at the middleware level so route protection is declarative rather than scattered through individual controllers. Google SSO was added to reduce signup friction without storing passwords.',
    impact: [
      'Deployed and live for a real client',
      'Token enrollment removes payment infrastructure entirely',
      'Google SSO reduced signup friction significantly',
      'Role-based access control covering instructor, student, and admin flows',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Google OAuth'],
    image: '/images/hero-image/lms.png',
    images: null,
  },
  {
    slug: 'dwellcasa',
    title: 'DwellCasa',
    type: 'Client project',
    year: '2026',
    live: 'https://dwellcasanepal.com',
    github: null,
    tagline: 'Hotel management platform for a boutique property in Lalitpur — listings, bookings, inventory, and a full admin panel.',
    overview: 'DwellCasa is a complete hotel management platform built for a boutique property in Lalitpur. The client needed to manage listings, handle bookings, track inventory across multiple locations, and run day-to-day operations from a single admin panel — without paying for an off-the-shelf SaaS tool that would be over-engineered for their scale.',
    approach: 'Built with the repository pattern for a clean separation between data access and business logic, which made the multi-location inventory support significantly easier to reason about. Role-based access control ensures front desk staff, managers, and admins each see only what they need. Google SSO was included to simplify staff onboarding.',
    impact: [
      'Deployed and live for a boutique hotel in Lalitpur',
      'Multi-location inventory support built into the core architecture',
      'Full admin panel covering listings, bookings, and staff management',
      'Clean architecture that makes future feature additions straightforward',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Google OAuth'],
    image: '/images/hero-image/dwellcasa.png',
    images: [
      '/images/dwellcasa/1.png',
      '/images/dwellcasa/2.png',
      '/images/dwellcasa/3.png',
      '/images/dwellcasa/4.png',
      '/images/dwellcasa/5.png',
    ],
  },
  {
    slug: 'motovault',
    title: 'MotoVault',
    type: 'Academic project',
    year: '2024',
    live: null,
    github: 'https://github.com/chris-bhaila/E-commerce-website-with-Product-Recommendation',
    tagline: 'Semantic product recommendation engine using SBERT embeddings and cosine similarity — finds relevant bikes from natural language queries.',
    overview: 'Standard e-commerce search is keyword matching — if you search "fast bike" and the listing says "high performance motorcycle," you get nothing. MotoVault uses SBERT embeddings to understand the semantic meaning of both the query and the product descriptions, then ranks results by cosine similarity. The result is a recommendation engine that surfaces relevant products even when the exact words don\'t match.',
    approach: 'The all-MiniLM-L6-v2 model was chosen for its balance of embedding quality and inference speed — important for a product recommendation use case where latency matters. Product descriptions are embedded at index time and stored, so queries only need a single forward pass at runtime. Cosine similarity was used over dot product because it\'s length-normalised, which matters when product descriptions vary significantly in length.',
    impact: [
      'Semantic search that works without exact keyword matches',
      'all-MiniLM-L6-v2 embeddings for fast, quality semantic retrieval',
      'Cosine similarity ranking across the full product catalogue',
    ],
    stack: ['Python', 'SBERT', 'all-MiniLM-L6-v2', 'Cosine Similarity', 'scikit-learn'],
    image: '/images/hero-image/motovault.png',
    images: null,
  },
]