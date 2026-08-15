export type Project = {
  slug: string
  title: string
  type: 'Client project' | 'Academic project' | 'Independent project' | 'Internship project'
  category: 'AI/ML' | 'Fullstack'
  category_order: number
  year: string
  live: string | null
  github: string | null
  tagline: string
  problem: string
  role: string
  stat: { value: string; label: string } | null
  pullQuote: string | null
  overview: string
  approach: string
  impact: string[]
  impactStats: ({ value: string; label: string } | { icon: string; phrase: string })[] | null
  architecture: { flow: string[]; branchFrom?: string; branches?: string[] } | null
  stack: string[]
  image: string | null
  images: string[] | null
}

export const projects: Project[] = [
  {
    slug: 'traffic-hotspot',
    title: 'Traffic Accident Hotspot Detection',
    category: 'AI/ML',
    category_order: 2,
    type: 'Independent project',
    year: '2026',
    live: null,
    github: 'https://github.com/chris-bhaila/Traffic-Accident-Hotspot-Detection-System',
    tagline: 'Live ML system that clusters 1,498 real accident records to identify hazard zones and predict risk by time, weather, and road type.',
    problem: 'Road safety in Kathmandu lacks data-driven infrastructure — accident patterns exist in the raw data but aren\'t visible or actionable to anyone without a way to surface them.',
    role: 'Solo project — I designed the data pipeline, engineered features from the raw accident records, trained the DBSCAN and Random Forest models, and built the full Django backend, REST API, and Leaflet/Chart.js map interface end to end.',
    stat: { value: '43', label: 'hotspots identified from 1,498 real accident records' },
    pullQuote: null,
    overview: 'Road safety in Kathmandu lacks data-driven infrastructure. This system ingests real accident records, applies DBSCAN clustering to surface 43 statistically significant hotspots, and layers a Random Forest model on top to predict risk given conditions like time of day, weather, and road type. The result is a live map interface that makes the patterns visible and actionable.',
    approach: 'DBSCAN was chosen over k-means because accident hotspots are irregularly shaped and vary in density — k-means would have forced arbitrary cluster boundaries. The Random Forest model was trained on engineered features from the accident records including hour bins, weather codes, and road classifications. The Django backend serves predictions via REST API, with Leaflet.js rendering the map and Chart.js handling the risk breakdowns.',
    impact: [
      '1,498 real accident records processed and clustered',
      '43 distinct hotspots identified across the dataset',
      'Risk prediction by time, weather, and road type — live in production',
      'Deployed on Render with a fully interactive map interface',
    ],
    impactStats: null,
    architecture: null,
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
    category: 'Fullstack',
    category_order: 3,
    type: 'Client project',
    year: '2026',
    live: 'https://lms.recc.com.np',
    github: 'https://github.com/chris-bhaila/Learning-Management-System---AU',
    tagline: 'Private instructor-led LMS with token-based enrollment, role-based access control, and Google OAuth — built for focused learning.',
    problem: 'Most LMS platforms are built as marketplaces first and learning tools second, which meant unnecessary payment infrastructure and complexity for a client who just wanted a focused, private space for their own students.',
    role: 'Solo client project — I handled the build end to end, from architecture through the token-based enrollment system, role-based access control, and Google OAuth integration, working directly with the client on requirements.',
    stat: null,
    pullQuote: 'A focused, private environment where instructors control exactly who gets in.',
    overview: 'Most LMS platforms are marketplaces first and learning tools second. EduNest was built for a client who wanted the opposite — a focused, private environment where instructors control exactly who gets in. Token-based enrollment replaces the payment flow entirely, removing the need for payment infrastructure and keeping the experience clean for both instructors and students.',
    approach: 'The entire codebase is structured around the repository pattern, keeping business logic out of controllers and making the data layer swappable. Role-based access control is enforced at the middleware level so route protection is declarative rather than scattered through individual controllers. Google SSO was added to reduce signup friction without storing passwords.',
    impact: [
      'Deployed and live for a real client',
      'Token enrollment removes payment infrastructure entirely',
      'Google SSO reduced signup friction significantly',
      'Role-based access control covering instructor, student, and admin flows',
    ],
    impactStats: null,
    architecture: null,
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Google OAuth'],
    image: '/images/hero-image/lms.png',
    images: null,
  },
  {
    slug: 'dwellcasa',
    title: 'DwellCasa',
    category: 'Fullstack',
    category_order: 2,
    type: 'Client project',
    year: '2026',
    live: 'https://dwellcasanepal.com',
    github: null,
    tagline: 'Hotel management platform for a boutique property in Lalitpur — listings, bookings, inventory, and a full admin panel.',
    problem: 'The client needed to run day-to-day hotel operations — listings, bookings, multi-location inventory — from one place, without paying for an off-the-shelf SaaS tool that would be over-engineered for a single boutique property.',
    role: 'Solo client project — I designed and built the entire platform, including the multi-location inventory architecture, role-based access for front desk, manager, and admin staff, and Google OAuth onboarding.',
    stat: null,
    pullQuote: 'One admin panel for listings, bookings, and staff — instead of an off-the-shelf tool built for a scale they didn\'t need.',
    overview: 'DwellCasa is a complete hotel management platform built for a boutique property in Lalitpur. The client needed to manage listings, handle bookings, track inventory across multiple locations, and run day-to-day operations from a single admin panel — without paying for an off-the-shelf SaaS tool that would be over-engineered for their scale.',
    approach: 'Built with the repository pattern for a clean separation between data access and business logic, which made the multi-location inventory support significantly easier to reason about. Role-based access control ensures front desk staff, managers, and admins each see only what they need. Google SSO was included to simplify staff onboarding.',
    impact: [
      'Deployed and live for a boutique hotel in Lalitpur',
      'Multi-location inventory support built into the core architecture',
      'Full admin panel covering listings, bookings, and staff management',
      'Clean architecture that makes future feature additions straightforward',
    ],
    impactStats: [
      { value: '3', label: 'staff roles with dedicated access — front desk, manager, admin' },
      { value: '2026', label: 'shipped and live for a boutique hotel in Lalitpur' },
      { value: '3', label: 'core admin modules — listings, bookings & staff' },
      { icon: 'layers', phrase: 'Multi-location inventory built into the core architecture' },
    ],
    architecture: {
      flow: ['Client', 'Laravel', 'Repository Layer', 'MySQL'],
      branchFrom: 'Laravel',
      branches: ['Front Desk', 'Manager', 'Admin'],
    },
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
    category: 'AI/ML',
    category_order: 1,
    type: 'Academic project',
    year: '2024',
    live: null,
    github: 'https://github.com/chris-bhaila/E-commerce-website-with-Product-Recommendation',
    tagline: 'Semantic product recommendation engine using SBERT embeddings and cosine similarity — finds relevant bikes from natural language queries.',
    problem: 'Standard e-commerce search relies on exact keyword matching, so a query like "fast bike" returns nothing against a listing titled "high performance motorcycle" — relevant products get missed simply because the wording doesn\'t line up.',
    role: 'Solo academic project — I built the full recommendation pipeline myself, from embedding the product catalogue with SBERT to implementing the cosine similarity ranking and integrating it into the e-commerce flow.',
    stat: null,
    pullQuote: 'Relevant products surface even when the exact words don\'t match.',
    overview: 'Standard e-commerce search is keyword matching — if you search "fast bike" and the listing says "high performance motorcycle," you get nothing. MotoVault uses SBERT embeddings to understand the semantic meaning of both the query and the product descriptions, then ranks results by cosine similarity. The result is a recommendation engine that surfaces relevant products even when the exact words don\'t match.',
    approach: 'The all-MiniLM-L6-v2 model was chosen for its balance of embedding quality and inference speed — important for a product recommendation use case where latency matters. Product descriptions are embedded at index time and stored, so queries only need a single forward pass at runtime. Cosine similarity was used over dot product because it\'s length-normalised, which matters when product descriptions vary significantly in length.',
    impact: [
      'Semantic search that works without exact keyword matches',
      'all-MiniLM-L6-v2 embeddings for fast, quality semantic retrieval',
      'Cosine similarity ranking across the full product catalogue',
    ],
    impactStats: null,
    architecture: null,
    stack: ['Python', 'SBERT', 'all-MiniLM-L6-v2', 'Cosine Similarity', 'scikit-learn'],
    image: '/images/hero-image/motovault.png',
    images: null,
  },
  {
    slug: 'floranepal',
    title: 'FloraNepal',
    category: 'Fullstack',
    category_order: 1,
    type: 'Internship project',
    year: '2024',
    live: 'https://a.floranepal.com',
    github: null,
    tagline: 'A hotspot for plant sellers to showcase their products and for buyers to discover and purchase them — built with a clean, modern UI.',
    problem: 'Plant sellers in Nepal lacked a dedicated online space to showcase their products, and buyers had no central place to discover and purchase plants — the market was fragmented and offline.',
    role: 'Solo internship project — I designed and built the entire platform, including the product listing flow, search and discovery features, and a clean, modern UI for both sellers and buyers.',
    stat: null,
    pullQuote: 'A dedicated online marketplace for plant sellers and buyers in Nepal.',
    overview: 'FloraNepal is an online marketplace that connects plant sellers with buyers. Sellers can create listings for their plants, while buyers can browse, search, and purchase them. The platform provides a clean, modern UI that makes it easy for both parties to interact.',
    approach: 'The platform was built with a focus on user experience, ensuring that both sellers and buyers have intuitive interfaces. Search functionality was implemented to allow buyers to easily find plants based on various criteria. The backend was designed to handle product listings, user accounts, and transactions securely and efficiently.',
    impact: [
      'Centralized marketplace for plant sellers and buyers in Nepal',
      'Clean, modern UI for easy navigation and interaction',
      'Secure handling of product listings and transactions',
    ],
    impactStats: null,
    architecture: null,
    stack: ['Laravel', 'MySQL', 'Alpine.js', 'Tailwind CSS'],
    image: '/images/hero-image/floranepal1.png',
    images: null,
  },
]