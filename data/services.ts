import { securityServices } from "./security-services";

export type ServiceCategory = "electrical" | "plumbing" | "security";

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  problem: string;
  includes: string[];
  process: { step: number; title: string; description: string }[];
  faqs: FAQ[];
  image: string;
  icon: string; // lucide icon name
  featured: boolean;
  relatedSlugs: string[];
  brand?: "shreekumar" | "sabari";
}

const shreekumarServices: Service[] = [
  // ── ELECTRICAL ─────────────────────────────────────────────────────────────
  {
    slug: "wiring-rewiring",
    name: "House Wiring & Rewiring",
    category: "electrical",
    tagline: "Safe, code-compliant wiring for new builds and older homes",
    description:
      "Complete residential and commercial wiring and full rewiring for homes where ageing insulation or aluminium wiring poses a fire risk. We survey, quote, and complete work with minimal disruption.",
    problem:
      "Flickering lights, warm switch-plates, tripping breakers, and aluminium wiring are danger signals. Outdated wiring causes over 20 % of all house fires — and your insurer may void a claim if substandard wiring is found.",
    includes: [
      "Full wiring survey and load calculation",
      "Supply and installation of copper cables (IS 694)",
      "Concealed or surface conduit routing",
      "Switch-board and socket installation",
      "Earth bonding and residual-current protection",
      "EB inspection clearance support",
    ],
    process: [
      {
        step: 1,
        title: "Survey & Estimate",
        description:
          "We visit, audit your current system, and deliver a written quote — no obligation.",
      },
      {
        step: 2,
        title: "Material Selection",
        description:
          "You choose the grade of switches and fittings; we use only ISI-marked cable.",
      },
      {
        step: 3,
        title: "Installation",
        description:
          "Our certified electricians complete the work with dust covers and daily clean-up.",
      },
      {
        step: 4,
        title: "Test & Hand-Over",
        description:
          "We run full insulation resistance and earth continuity tests, then walk you through the board.",
      },
    ],
    faqs: [
      {
        question: "How long does a full house rewire take?",
        answer:
          "A typical 2 BHK takes 3–4 days. Larger properties are scoped during the survey.",
      },
      {
        question: "Will you cut into walls?",
        answer:
          "Concealed wiring requires chasing, which we patch and plaster. Surface conduit is available if you prefer no wall-cutting.",
      },
      {
        question: "Is a permit required?",
        answer:
          "Yes. We handle the EB inspection paperwork as part of our service.",
      },
    ],
    image: "/images/services/house-wiring.svg",
    icon: "Zap",
    featured: true,
    relatedSlugs: ["distribution-board-upgrade", "earthing-lightning-protection"],
  },
  {
    slug: "distribution-board-upgrade",
    name: "Distribution Board Upgrade",
    category: "electrical",
    tagline: "Modern MCB panels that protect your home and appliances",
    description:
      "Replace ageing fuse-wire boards with a modern miniature circuit-breaker (MCB) distribution board — the single most effective electrical safety upgrade you can make.",
    problem:
      "Old fuse-wire boards offer no protection against earth faults or overloads. A single short circuit can ignite wiring behind walls before anyone notices.",
    includes: [
      "Removal of old fuse board",
      "Supply and fitting of ISI-marked MCB panel",
      "RCCB / ELCB installation for shock protection",
      "Proper neutral and earth bar arrangement",
      "Circuit labelling and test report",
    ],
    process: [
      { step: 1, title: "Assessment", description: "We count circuits, check load, and size the new board." },
      { step: 2, title: "Board Supply", description: "We source a panel matching your circuit count with 20 % spare ways." },
      { step: 3, title: "Changeover", description: "Power is off for 2–4 hours while we transfer and re-terminate each circuit." },
      { step: 4, title: "Commissioning", description: "Each MCB is tested, labelled, and a test certificate issued." },
    ],
    faqs: [
      {
        question: "How long will power be off?",
        answer: "Typically 2–4 hours for a standard residential board changeover.",
      },
      {
        question: "Which brands do you use?",
        answer: "Schneider Electric, Havells, and Legrand — all carry ISI marks and a 2-year manufacturer warranty.",
      },
    ],
    image: "/images/services/distribution-board.svg",
    icon: "LayoutGrid",
    featured: false,
    relatedSlugs: ["wiring-rewiring", "earthing-lightning-protection"],
  },
  {
    slug: "earthing-lightning-protection",
    name: "Earthing & Lightning Protection",
    category: "electrical",
    tagline: "Protect life and equipment from earth faults and lightning",
    description:
      "Proper earthing prevents electric shock; a lightning protection system prevents catastrophic damage to structure and appliances. We design and install both for residential and industrial sites.",
    problem:
      "In Coimbatore, summer thunderstorms cause repeated appliance burn-outs and risk of electrocution where earthing is inadequate — especially in high-rise buildings and factories.",
    includes: [
      "Earth electrode installation (GI / copper)",
      "Earth resistance measurement (target < 1 Ω)",
      "Main equipotential bonding",
      "Surge protection devices at the panel",
      "Lightning finial, down-conductor, and earth termination",
      "Inspection and test report",
    ],
    process: [
      { step: 1, title: "Site Survey", description: "Soil resistivity test to determine electrode type and depth." },
      { step: 2, title: "Design", description: "We produce a simple sketch and material list for your approval." },
      { step: 3, title: "Installation", description: "Electrodes driven or buried, down-conductors fixed to wall." },
      { step: 4, title: "Verification", description: "Earth resistance measured with a clamp-meter tester; certificate provided." },
    ],
    faqs: [
      {
        question: "How often should earthing be tested?",
        answer: "IS 3043 recommends annual testing for industrial sites and every 3 years for residential.",
      },
      {
        question: "Will lightning protection save my appliances?",
        answer: "A properly installed system diverts the strike to ground. Surge protection devices at the panel further protect sensitive equipment.",
      },
    ],
    image: "/images/services/earthing-protection.svg",
    icon: "ShieldCheck",
    featured: false,
    relatedSlugs: ["wiring-rewiring", "distribution-board-upgrade"],
  },
  {
    slug: "power-point-installation",
    name: "Power Point & Socket Installation",
    category: "electrical",
    tagline: "New sockets, USB ports, and dedicated appliance circuits",
    description:
      "Need an extra socket for your new AC, EV charger, or home office? We add correctly wired and earthed power points without disturbing the rest of your installation.",
    problem:
      "Extension cords snaking across floors are a trip hazard and a fire risk. Each high-load appliance should have its own dedicated circuit with the correct cable size and protection.",
    includes: [
      "Circuit assessment and cable sizing",
      "Concealed or surface-mounted socket installation",
      "USB-A / USB-C combination outlets",
      "Dedicated circuits for ACs, ovens, EV chargers",
      "Weatherproof sockets for outdoor/bathroom areas",
    ],
    process: [
      { step: 1, title: "Consultation", description: "Discuss location, load, and finish — modular or industrial-grade." },
      { step: 2, title: "Routing", description: "Cable route planned to avoid chase work where possible." },
      { step: 3, title: "Wiring", description: "Circuit added to the existing board with correct MCB rating." },
      { step: 4, title: "Test", description: "Polarity, earth, and insulation resistance checked before energising." },
    ],
    faqs: [
      {
        question: "Can I add a socket to any room?",
        answer: "Yes, as long as your panel has a spare way. We check before starting.",
      },
      {
        question: "What is the cost of adding one socket?",
        answer: "Pricing depends on cable run length. Contact us for a free estimate.",
      },
    ],
    image: "/images/services/power-socket.svg",
    icon: "Plug",
    featured: false,
    relatedSlugs: ["wiring-rewiring", "distribution-board-upgrade"],
  },
  {
    slug: "cctv-smart-home",
    name: "CCTV & Smart Home Wiring",
    category: "electrical",
    tagline: "Structured cabling for cameras, automation, and networking",
    description:
      "We pre-wire new builds for CCTV, video door-phones, automation controllers, and data networks so you can install smart devices without ripping walls open later.",
    problem:
      "Retrofitting structured cabling into a finished home is costly and messy. Planning it at the build stage adds minimal cost but unlimited future flexibility.",
    includes: [
      "CCTV power and coaxial / Cat-6 cable routing",
      "DVR/NVR cabinet installation",
      "Video door-phone wiring",
      "Home automation controller wiring",
      "Network patch panel and Cat-6 data points",
      "Conduit for future expansion",
    ],
    process: [
      { step: 1, title: "Planning", description: "Camera positions and cable routes marked on your floor plan." },
      { step: 2, title: "Pre-wire", description: "All conduits and cables pulled before plastering." },
      { step: 3, title: "Termination", description: "Connections made at DVR, patch panel, and outlets." },
      { step: 4, title: "Commissioning", description: "System tested with live camera feeds and network connectivity verified." },
    ],
    faqs: [
      {
        question: "Do you supply the CCTV cameras?",
        answer: "We can supply and install a complete system or wire only if you already have equipment.",
      },
      {
        question: "Is this suitable for apartments?",
        answer: "Yes. We work in flats, villas, and commercial premises.",
      },
    ],
    image: "/images/services/cctv-smart-home.svg",
    icon: "Camera",
    featured: true,
    relatedSlugs: ["wiring-rewiring", "power-point-installation"],
  },
  {
    slug: "generator-ups-installation",
    name: "Generator & UPS Installation",
    category: "electrical",
    tagline: "Seamless standby power for homes and businesses",
    description:
      "We install diesel generators, petrol gensets, and online UPS systems with proper changeover panels, ensuring you are never left without power during outages.",
    problem:
      "Frequent load-shedding in Tamil Nadu's summer months costs businesses hours of productivity and risks data loss on computers and servers.",
    includes: [
      "Generator sizing and selection advice",
      "Manual or automatic changeover switch (ATS)",
      "Earthing and bonding of generator frame",
      "Load distribution across phases",
      "UPS wiring with bypass circuit",
      "Annual maintenance contract option",
    ],
    process: [
      { step: 1, title: "Load Survey", description: "We log your actual consumption to right-size the generator." },
      { step: 2, title: "Placement", description: "We advise on ventilation, noise, and exhaust routing." },
      { step: 3, title: "Installation", description: "ATS panel fitted; generator cabled and earthed." },
      { step: 4, title: "Test Run", description: "Automatic or manual changeover tested under load before sign-off." },
    ],
    faqs: [
      {
        question: "What size generator do I need for a 3 BHK home?",
        answer: "Typically 5–7.5 kVA covers lights, fans, refrigerator, and one AC. We calculate your exact load.",
      },
      {
        question: "Is an ATS mandatory?",
        answer: "Not mandatory, but an ATS eliminates the manual switch-over and protects the EB supply from back-feed.",
      },
    ],
    image: "/images/services/generator-ups.svg",
    icon: "BatteryCharging",
    featured: false,
    relatedSlugs: ["distribution-board-upgrade", "wiring-rewiring"],
  },

  // ── PLUMBING ────────────────────────────────────────────────────────────────
  {
    slug: "pipe-leak-repair",
    name: "Pipe Leak Detection & Repair",
    category: "plumbing",
    tagline: "Find and fix hidden leaks before they damage your structure",
    description:
      "We use pressure testing and acoustic leak detection to locate leaks inside walls and slabs without unnecessary demolition, then repair with the appropriate material.",
    problem:
      "A pinhole leak behind a wall can cause unseen mould, corrode reinforcement, and double your water bill within months. Damp patches on walls or ceilings are the first sign.",
    includes: [
      "Pressure test to confirm and locate leak",
      "Acoustic / thermal detection where needed",
      "Targeted opening — minimal tile or plaster damage",
      "Pipe repair or section replacement",
      "Patch and plaster reinstatement",
      "Post-repair pressure test",
    ],
    process: [
      { step: 1, title: "Diagnosis", description: "We isolate zones and pressure-test to confirm leak location." },
      { step: 2, title: "Minimal Access", description: "Only the smallest necessary opening is made." },
      { step: 3, title: "Repair", description: "Pipe repaired or section replaced with high-quality fittings." },
      { step: 4, title: "Reinstate & Test", description: "Surface made good and a final pressure test confirms the fix." },
    ],
    faqs: [
      {
        question: "Will you damage my tiles?",
        answer: "We try hard to cut the minimum area. Tile matching and relaying is included in the quote.",
      },
      {
        question: "How quickly can you attend?",
        answer: "For active leaks we aim for same-day attendance. Call us now.",
      },
    ],
    image: "/images/services/pipe-leak.svg",
    icon: "Droplets",
    featured: true,
    relatedSlugs: ["bathroom-kitchen-plumbing", "water-tank-installation"],
  },
  {
    slug: "bathroom-kitchen-plumbing",
    name: "Bathroom & Kitchen Plumbing",
    category: "plumbing",
    tagline: "Complete fit-out for new builds and renovations",
    description:
      "From rough-in plumbing during construction to full sanitary-ware installation in renovations — we handle all hot and cold pipework, drainage, and fixtures.",
    problem:
      "Poor bathroom plumbing leads to drain blockages, leaking joints hidden under tiles, and water-pressure issues that never fully get resolved without a complete redo.",
    includes: [
      "Hot and cold supply pipework (CPVC / UPVC)",
      "Concealed shower, basin, and WC connections",
      "Floor trap and drainage installation",
      "Sanitary-ware fitting (WCs, basins, showers)",
      "Mixer tap and shower mixer installation",
      "Geyser / instant water heater connection",
    ],
    process: [
      { step: 1, title: "Design Consultation", description: "We review your layout and discuss fixture placement." },
      { step: 2, title: "Rough-In", description: "All pipe routes completed before tiling begins." },
      { step: 3, title: "Fixture Fit-Out", description: "Sanitary-ware installed and connected after tiling." },
      { step: 4, title: "Commission & Snag", description: "Full flow and drain test; any snags fixed immediately." },
    ],
    faqs: [
      {
        question: "Do you supply the sanitary ware?",
        answer: "We can procure and install or install what you have purchased. Both options available.",
      },
      {
        question: "How long does a bathroom plumb take?",
        answer: "Rough-in takes 1 day; fit-out after tiling another day. Total 2–3 working days.",
      },
    ],
    image: "/images/services/bathroom-plumbing.svg",
    icon: "ShowerHead",
    featured: true,
    relatedSlugs: ["pipe-leak-repair", "drain-cleaning"],
  },
  {
    slug: "water-tank-installation",
    name: "Water Tank & Pump Installation",
    category: "plumbing",
    tagline: "Overhead tanks, sump pumps, and booster sets installed right",
    description:
      "We size, supply, and install rooftop overhead tanks, underground sumps, and the pump systems that link them — including float valves, pressure gauges, and control panels.",
    problem:
      "Incorrect pump sizing causes low pressure on upper floors or overheated pump motors that fail within months. Correct engineering at the design stage avoids both problems.",
    includes: [
      "Tank sizing calculation",
      "Overhead / underground tank supply and installation",
      "Pump selection and installation (submersible / jet)",
      "Float valve and ball-valve set",
      "Auto cut-off control panel",
      "Supply and return pipe connections",
    ],
    process: [
      { step: 1, title: "Sizing", description: "Daily demand and head pressure calculated to select the right pump and tank." },
      { step: 2, title: "Civil Coordination", description: "We coordinate with your civil team on sump dimensions." },
      { step: 3, title: "Installation", description: "Pump, tank, and pipework installed and connected." },
      { step: 4, title: "Test Run", description: "Full cycle tested: pump on, tank fills, float cuts off, pressure verified at all taps." },
    ],
    faqs: [
      {
        question: "What size sump and overhead tank do I need?",
        answer: "For a family of 4 we typically recommend a 5,000 L sump and 1,000 L overhead tank. We calculate precisely for your situation.",
      },
      {
        question: "How often should the pump be serviced?",
        answer: "Annual service is recommended. We offer an annual maintenance contract.",
      },
    ],
    image: "/images/services/water-tank.svg",
    icon: "Container",
    featured: false,
    relatedSlugs: ["pipe-leak-repair", "bathroom-kitchen-plumbing"],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning & Unblocking",
    category: "plumbing",
    tagline: "High-pressure jetting clears even the toughest blockages",
    description:
      "Our motorised drain auger and high-pressure water-jetting equipment clear blockages in kitchen drains, bathroom traps, soil stacks, and underground drain lines.",
    problem:
      "Slow drains and sewage odours indicate partial blockages that will become complete — and expensive — if left. Chemical drain cleaners damage pipes and rarely clear a full blockage.",
    includes: [
      "Camera inspection where needed",
      "Drain auger (electric) for solid blockages",
      "High-pressure water jetting for grease and scale",
      "Inspection chamber cleaning",
      "Drain-flow test post-clearance",
      "Advice on future prevention",
    ],
    process: [
      { step: 1, title: "Inspection", description: "We identify the blockage location and cause." },
      { step: 2, title: "Equipment Selection", description: "Auger or jetter selected based on blockage type." },
      { step: 3, title: "Clearance", description: "Blockage cleared and flushed through." },
      { step: 4, title: "Flow Test", description: "Water flow confirmed adequate; camera inspection if requested." },
    ],
    faqs: [
      {
        question: "Can you clear tree-root intrusion?",
        answer: "Our heavy-duty auger handles root intrusion. Severe cases may need pipe relining — we will advise.",
      },
      {
        question: "Is same-day service available?",
        answer: "Yes, for complete blockages we prioritise same-day attendance. Call us now.",
      },
    ],
    image: "/images/services/drain-cleaning.svg",
    icon: "Wind",
    featured: false,
    relatedSlugs: ["bathroom-kitchen-plumbing", "pipe-leak-repair"],
  },
  {
    slug: "water-heater-installation",
    name: "Water Heater Installation & Repair",
    category: "plumbing",
    tagline: "Storage and instant geysers installed safely and correctly",
    description:
      "Incorrect geyser installation is one of the most common causes of electric shock in bathrooms. We install storage and instant water heaters to manufacturer and IS standards.",
    problem:
      "Many geysers are installed without a proper earth, pressure relief valve outlet, or anti-scald thermostatic valve — turning every shower into a potential hazard.",
    includes: [
      "Geyser selection advice",
      "Supply and installation (storage or instant)",
      "Dedicated electrical circuit with ELCB",
      "Proper earth bonding of water pipe",
      "Pressure relief valve and drain pipe",
      "Temperature setting and safety check",
    ],
    process: [
      { step: 1, title: "Site Check", description: "We check water pressure and available electrical supply." },
      { step: 2, title: "Supply", description: "Unit sourced or customer-supplied unit inspected." },
      { step: 3, title: "Installation", description: "Mechanical and electrical connections made per IS 2082." },
      { step: 4, title: "Safety Test", description: "Earth continuity, ELCB trip test, and PRV function confirmed." },
    ],
    faqs: [
      {
        question: "Storage or instant — which is better?",
        answer: "Instant heaters are compact and save energy; storage heaters suit high-demand households. We help you choose.",
      },
      {
        question: "My geyser keeps tripping the MCB — why?",
        answer: "Usually an element fault or undersized cable. Call us — do not reset and ignore.",
      },
    ],
    image: "/images/services/water-heater.svg",
    icon: "Thermometer",
    featured: false,
    relatedSlugs: ["bathroom-kitchen-plumbing", "wiring-rewiring"],
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    category: "plumbing",
    tagline: "Large-scale plumbing for offices, factories, and institutions",
    description:
      "We design and install plumbing systems for commercial and industrial premises — hotels, hospitals, factories, and large apartment complexes — with compliance documentation.",
    problem:
      "Commercial plumbing systems involve multiple floors, fire-suppression integration, and strict regulatory requirements that domestic contractors are not equipped to handle.",
    includes: [
      "System design and isometric drawings",
      "GI / CPVC header and riser installation",
      "Centralised water treatment / softener connections",
      "Fire hydrant and sprinkler supply connections",
      "Regulatory compliance documentation",
      "Preventive maintenance contracts",
    ],
    process: [
      { step: 1, title: "Design Brief", description: "We collect load data, floor plans, and regulatory requirements." },
      { step: 2, title: "Detailed Design", description: "Isometric drawings and material schedule prepared for approval." },
      { step: 3, title: "Installation", description: "Work phased to avoid disruption to occupied areas." },
      { step: 4, title: "Inspection & Handover", description: "Third-party inspection and full as-built documentation provided." },
    ],
    faqs: [
      {
        question: "Do you undertake turnkey commercial projects?",
        answer: "Yes. We manage from design through to handover, coordinating with civil and HVAC contractors.",
      },
      {
        question: "What is the minimum project size you accept?",
        answer: "We work on projects from small offices to large factories. Contact us to discuss your scope.",
      },
    ],
    image: "/images/services/commercial-plumbing.svg",
    icon: "Building2",
    featured: false,
    relatedSlugs: ["water-tank-installation", "pipe-leak-repair"],
];

export const services: Service[] = [
  ...shreekumarServices.map((s) => ({ ...s, brand: "shreekumar" as const })),
  ...securityServices,
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
