export interface Area {
  slug: string;
  name: string;
  district: string;
  description: string;
  highlights: string[];
  services: string[]; // service slugs available here
  image: string;
  coordinates?: { lat: number; lng: number };
}

export const areas: Area[] = [
  {
    slug: "rs-puram",
    name: "RS Puram",
    district: "Coimbatore",
    description:
      "RS Puram is one of Coimbatore's most established residential neighbourhoods, home to a mix of independent bungalows and newer apartment complexes. Shreekumar Builders serves the entire RS Puram area with same-day electrical and plumbing attendance.",
    highlights: [
      "Same-day response for emergencies",
      "Experienced with older 1970s–1990s construction",
      "24/7 emergency plumbing for the locality",
    ],
    services: [
      "wiring-rewiring",
      "pipe-leak-repair",
      "bathroom-kitchen-plumbing",
      "distribution-board-upgrade",
    ],
    image: "/images/areas/rs-puram.svg",
    coordinates: { lat: 11.0053, lng: 76.9643 },
  },
  {
    slug: "gandhipuram",
    name: "Gandhipuram",
    district: "Coimbatore",
    description:
      "Gandhipuram is Coimbatore's commercial heart, with dense commercial blocks, hotels, and retail spaces requiring robust electrical and plumbing infrastructure. We handle both high-load commercial fitouts and residential buildings in the area.",
    highlights: [
      "Commercial electrical specialists",
      "High-load and three-phase installations",
      "Rapid response to minimise business downtime",
    ],
    services: [
      "generator-ups-installation",
      "commercial-plumbing",
      "distribution-board-upgrade",
      "cctv-smart-home",
    ],
    image: "/images/areas/gandhipuram.svg",
    coordinates: { lat: 11.0168, lng: 76.9558 },
  },
  {
    slug: "saravanampatti",
    name: "Saravanampatti",
    district: "Coimbatore",
    description:
      "Saravanampatti is Coimbatore's fastest-growing IT and residential suburb. With many new construction projects underway, Shreekumar Builders provides pre-wire and first-fix services alongside full fit-out solutions.",
    highlights: [
      "Pre-wire specialists for new construction",
      "Smart home and structured cabling",
      "Serving all major new housing developments",
    ],
    services: [
      "wiring-rewiring",
      "cctv-smart-home",
      "water-tank-installation",
      "bathroom-kitchen-plumbing",
    ],
    image: "/images/areas/saravanampatti.svg",
    coordinates: { lat: 11.0674, lng: 77.0202 },
  },
  {
    slug: "singanallur",
    name: "Singanallur",
    district: "Coimbatore",
    description:
      "Singanallur is a major industrial and residential area southeast of Coimbatore city. Our team regularly works with textile units, small factories, and the growing residential population demanding reliable services.",
    highlights: [
      "Industrial electrical installations",
      "Three-phase and HT supply coordination",
      "Large-scale commercial plumbing",
    ],
    services: [
      "generator-ups-installation",
      "earthing-lightning-protection",
      "commercial-plumbing",
      "drain-cleaning",
    ],
    image: "/images/areas/singanallur.svg",
    coordinates: { lat: 10.9803, lng: 77.0218 },
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
