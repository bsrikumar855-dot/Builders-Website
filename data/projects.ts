export type ProjectType = "residential" | "commercial" | "industrial";

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  category: "electrical" | "plumbing" | "both";
  location: string;
  year: number;
  description: string;
  scope: string[];
  image: string;
  gallery: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "villa-rewire-rs-puram",
    title: "Complete Villa Rewire — RS Puram",
    type: "residential",
    category: "electrical",
    location: "RS Puram, Coimbatore",
    year: 2024,
    description:
      "Full rewire of a 1980s bungalow with four bedrooms, replacing aluminium wiring throughout with copper, installing a new 24-way MCB distribution board, and upgrading all switches and sockets to modular.",
    scope: [
      "400 m copper cable (IS 694)",
      "24-way Havells MCB board with RCCB",
      "Modular switches and USB outlets in all rooms",
      "New earthing system (< 0.5 Ω achieved)",
      "EB inspection clearance obtained",
    ],
    image: "/images/projects/villa-rewire-rs-puram.svg",
    gallery: [
      "/images/projects/villa-rewire-rs-puram.svg",
      "/images/projects/villa-rewire-board.svg",
    ],
    featured: true,
  },
  {
    id: "office-fitout-gandhipuram",
    title: "Commercial Office Electrical Fit-Out — Gandhipuram",
    type: "commercial",
    category: "electrical",
    location: "Gandhipuram, Coimbatore",
    year: 2024,
    description:
      "Design and installation of the complete electrical system for a 6,000 sq.ft. multi-tenant office building, including three-phase supply, structured cabling for data, and a diesel generator with automatic transfer switch.",
    scope: [
      "Three-phase LT panel with metering",
      "Structured Cat-6 cabling — 40 data points",
      "LED lighting design and installation",
      "15 kVA generator with ATS",
      "CCTV and access control cabling",
    ],
    image: "/images/projects/office-fitout-gandhipuram.svg",
    gallery: [
      "/images/projects/office-fitout-gandhipuram.svg",
      "/images/projects/office-fitout-panel.svg",
    ],
    featured: true,
  },
  {
    id: "apartment-plumbing-saravanampatti",
    title: "Apartment Block Plumbing — Saravanampatti",
    type: "residential",
    category: "plumbing",
    location: "Saravanampatti, Coimbatore",
    year: 2023,
    description:
      "Full plumbing first-fix and fit-out for a new 24-unit apartment block, including CPVC supply lines, UPVC drainage, overhead tank and sump with pump automation.",
    scope: [
      "CPVC hot and cold supply risers",
      "Individual apartment meter points",
      "50,000 L underground sump",
      "10 kL overhead tank with float automation",
      "24 bathrooms and 24 kitchens fitted out",
    ],
    image: "/images/projects/apartment-plumbing-saravanampatti.svg",
    gallery: ["/images/projects/apartment-plumbing-saravanampatti.svg"],
    featured: true,
  },
  {
    id: "factory-earthing-singanallur",
    title: "Factory Earthing & Lightning Protection — Singanallur",
    type: "industrial",
    category: "electrical",
    location: "Singanallur, Coimbatore",
    year: 2023,
    description:
      "Design and installation of a comprehensive earthing grid and lightning protection system for a 20,000 sq.ft. textile factory, meeting IS 3043 and IS 2309 standards.",
    scope: [
      "16-point earthing grid (< 0.3 Ω grid resistance)",
      "Main equipotential bonding bus",
      "6 lightning finials with copper down-conductors",
      "Surge protection devices on all LT panels",
      "Third-party test certificate obtained",
    ],
    image: "/images/projects/factory-earthing-singanallur.svg",
    gallery: ["/images/projects/factory-earthing-singanallur.svg"],
    featured: false,
  },
  {
    id: "hotel-plumbing-gandhipuram",
    title: "Hotel Plumbing Renovation — Gandhipuram",
    type: "commercial",
    category: "plumbing",
    location: "Gandhipuram, Coimbatore",
    year: 2022,
    description:
      "Floor-by-floor plumbing renovation of a 40-room hotel, replacing GI pipes with CPVC, upgrading all bathroom fixtures, and installing a centralised water softener system — with the hotel remaining partially operational throughout.",
    scope: [
      "GI to CPVC conversion across 5 floors",
      "40 ensuite bathrooms refitted",
      "Centralised water softener (15,000 LPH)",
      "Solar water heater integration",
      "Phased execution with zero full shutdowns",
    ],
    image: "/images/projects/hotel-plumbing-gandhipuram.svg",
    gallery: ["/images/projects/hotel-plumbing-gandhipuram.svg"],
    featured: false,
  },
  {
    id: "smart-villa-saravanampatti",
    title: "Smart Home Electrical — Saravanampatti Villa",
    type: "residential",
    category: "both",
    location: "Saravanampatti, Coimbatore",
    year: 2025,
    description:
      "Complete electrical and smart home wiring for a newly built 4,500 sq.ft. villa, including home automation pre-wire, CCTV, video door-phone, and solar-ready main panel.",
    scope: [
      "Full copper wiring with 32-way MCB panel",
      "Home automation conduit and wiring (KNX-ready)",
      "16-camera CCTV pre-wire",
      "Video door-phone and intercom",
      "Solar PV inverter connection and net-metering preparation",
      "Complete bathroom plumbing fit-out",
    ],
    image: "/images/projects/smart-villa-saravanampatti.svg",
    gallery: ["/images/projects/smart-villa-saravanampatti.svg"],
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((p) => p.type === type);
}
