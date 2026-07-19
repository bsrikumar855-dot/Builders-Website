import { Service } from "./services";

export const securityServices: Service[] = [
  {
    slug: "cctv-installation",
    name: "CCTV Installation & Configuration",
    category: "security",
    brand: "sabari",
    tagline: "High-definition camera networks with edge analytics and remote access",
    description:
      "Design and installation of high-resolution digital IP camera networks. We map viewing angles, calculate storage requirements, and set up secure remote access on your phone and computer, backed by a 2-year equipment warranty.",
    problem:
      "Blind spots, low-resolution footage, and offline cameras leave your property vulnerable. Substandard DIY setups fail to capture face details or license plates when an incident actually occurs.",
    includes: [
      "Full site survey and camera positioning plan",
      "4MP / 8MP (4K) IP dome and bullet cameras",
      "Network Video Recorder (NVR) with high-end storage",
      "Cat-6 structured cabling with PoE switches",
      "Mobile app setup for secure, lag-free live viewing",
      "Tamil Nadu Private Security Agencies rules compliance",
    ],
    process: [
      { step: 1, title: "Threat & Angle Assessment", description: "We visit your property to identify entry points, blind spots, and light conditions." },
      { step: 2, title: "System Design", description: "We draft a blueprint detailing camera specs, lenses, and storage capacity (15–30 days retention)." },
      { step: 3, title: "Installation & Cabling", description: "Our team runs concealed Cat-6 cables and mounts cameras in weatherproof housings." },
      { step: 4, title: "Focus & App Configuration", description: "We adjust focal ranges, set up motion alerts, and configure the viewing app on your devices." },
    ],
    faqs: [
      {
        question: "Do these cameras work during power outages?",
        answer: "Yes, we connect the NVR and PoE switches to your UPS or backup power system so recording is uninterrupted.",
      },
      {
        question: "Can I view the footage when I am away from Coimbatore?",
        answer: "Absolutely. Secure remote viewing is set up via an encrypted mobile app so you can watch live or view backups anywhere.",
      },
      {
        question: "How long is the recorded footage stored?",
        answer: "Typically 30 days. We size the hard drives (Seagate SkyHawk / WD Purple) based on your camera count and resolution.",
      },
    ],
    image: "/images/security/cctv-camera.svg",
    icon: "Camera",
    featured: true,
    relatedSlugs: ["cctv-monitoring", "alarm-systems"],
  },
  {
    slug: "cctv-monitoring",
    name: "24/7 Remote CCTV Monitoring",
    category: "security",
    brand: "sabari",
    tagline: "Real-time threat detection and rapid intervention from our monitoring center",
    description:
      "Transform your passive cameras into active defense. Our command center monitors your feeds 24/7 using AI-powered motion analytics. We verify intrusions instantly and coordinate emergency dispatch with local services.",
    problem:
      "Traditional cameras only show you *how* you were robbed after it happened. Passive recording does not prevent theft, vandalism, or trespassing in real time.",
    includes: [
      "Connection to Sabari Command Center",
      "AI edge-analytics setup for smart tripwires",
      "Instant intrusion notification (under 10 seconds)",
      "Audio talkback integration (voice warnings)",
      "Coimbatore police and local station coordination",
      "Daily system health and uptime checks",
    ],
    process: [
      { step: 1, title: "Feed Integration", description: "We test and bridge your existing or new CCTV system to our secure monitoring platform." },
      { step: 2, title: "Analytics Calibration", description: "We set up virtual boundaries (tripwires) around gates and fences to prevent false alarms." },
      { step: 3, title: "Command Center Activation", description: "Our trained analysts begin round-the-clock monitoring and checking alerts." },
      { step: 4, title: "Response Protocol Setup", description: "We establish a clear escalation matrix (who to call first, emergency contacts, local stations)." },
    ],
    faqs: [
      {
        question: "What happens if a monitored camera goes offline?",
        answer: "Our system detects connection loss immediately. An alert is sent to our support team, and we contact you to resolve it.",
      },
      {
        question: "How do you prevent false alarms from stray animals?",
        answer: "We use advanced AI object classification that distinguishes human and vehicle movement from animals or shaking trees.",
      },
    ],
    image: "/images/security/monitoring-station.svg",
    icon: "Monitor",
    featured: true,
    relatedSlugs: ["cctv-installation", "alarm-systems"],
  },
  {
    slug: "alarm-systems",
    name: "Alarm Systems & Intrusion Detection",
    category: "security",
    brand: "sabari",
    tagline: "Wireless and hybrid alarm panels with glass-break and vibration sensors",
    description:
      "Complete perimeter protection for homes, shops, and offices. Our systems combine door contacts, motion detectors, glass-break sensors, and high-decibel outdoor sirens to halt intruders at the boundary.",
    problem:
      "Forced entry through windows, rear doors, or roofs often goes unnoticed until the intruder is inside. Unprotected entry points are invitations to organized break-ins.",
    includes: [
      "Control panel with dual-path communication (GSM + Wi-Fi)",
      "Wireless door/window magnetic contact sensors",
      "Dual-tech PIR motion sensors (pet-immune)",
      "Vibration and glass-break sensors",
      "Outdoor siren (110dB) with strobe light",
      "Panic buttons for emergency situations",
    ],
    process: [
      { step: 1, title: "Perimeter Mapping", description: "We assess all potential entry points: doors, ground-floor windows, and skylights." },
      { step: 2, title: "Sensor Positioning", description: "We map out where to place vibration, contact, and motion sensors to cover all paths." },
      { step: 3, title: "Panel Installation", description: "We mount the central hub, wire the siren, and pair all wireless devices." },
      { step: 4, title: "System Testing & Handover", description: "We run a full walk-test to verify all sensors, then train you on arming profiles." },
    ],
    faqs: [
      {
        question: "Does the system work if my Wi-Fi is cut?",
        answer: "Yes. Our panels have a backup SIM slot that automatically switches to GSM mobile networks if Wi-Fi goes down.",
      },
      {
        question: "Is the system pet-friendly?",
        answer: "Yes, our motion sensors ignore pets up to 20kg, preventing false alarms from cats and dogs.",
      },
    ],
    image: "/images/security/alarm-panel.svg",
    icon: "Bell",
    featured: false,
    relatedSlugs: ["cctv-installation", "access-control"],
  },
  {
    slug: "access-control",
    name: "Access Control & Biometric Entry",
    category: "security",
    brand: "sabari",
    tagline: "Secure restriction of entry points with facial, fingerprint, and card systems",
    description:
      "Restrict sensitive areas and keep an audit trail of everyone entering. We install biometric readers, face-recognition terminals, card systems, and electromagnetic locks for server rooms, offices, and main gates.",
    problem:
      "Lost keys, unauthorized entry, and unaccounted visits compromise security. Physical keys can be copied, and door locks provide no record of entry times.",
    includes: [
      "Biometric fingerprint and RFID card readers",
      "AI face-recognition terminals (contactless)",
      "Heavy-duty electromagnetic locks (600 lbs / 1200 lbs)",
      "Access control software with audit log logging",
      "Emergency fire-alarm integration (auto-release)",
      "Battery backup for lock operations",
    ],
    process: [
      { step: 1, title: "Flow Assessment", description: "We review access permission levels and user traffic flow at each entry point." },
      { step: 2, title: "Hardware Selection", description: "We choose the appropriate locks, brackets, and terminal types (e.g. face vs card)." },
      { step: 3, title: "Installation", description: "We fit electromagnetic locks, route cables, and mount terminals and exit buttons." },
      { step: 4, title: "Software Configuration", description: "We load user data, define access groups, and test emergency release actions." },
    ],
    faqs: [
      {
        question: "What happens in a fire emergency?",
        answer: "We integrate the access system directly with your fire alarm. If the fire alarm triggers, all electromagnetic locks release automatically.",
      },
      {
        question: "How do locks operate during power failures?",
        answer: "Each lock has a dedicated backup battery that keeps the door locked for 4 to 8 hours during power cuts.",
      },
    ],
    image: "/images/security/access-control.svg",
    icon: "Fingerprint",
    featured: false,
    relatedSlugs: ["alarm-systems", "security-amc"],
  },
  {
    slug: "manned-guarding",
    name: "Manned Guarding / Security Personnel",
    category: "security",
    brand: "sabari",
    tagline: "Trained, vetted, and disciplined security personnel for residential and commercial assets",
    description:
      "Protect your property with physical presence. We supply trained, background-verified security guards for factories, apartments, and corporate offices. All personnel are strictly trained in visitor tracking and emergency response.",
    problem:
      "Trained intruders bypass systems. Physical assets need human eyes to manage gates, check materials, handle disputes, and respond to alarms on the ground.",
    includes: [
      "Trained, uniformed security guards (male/female)",
      "Background-checked and verified personnel",
      "Strict gate register and visitor logging management",
      "Patrol management systems with RFID checkpoints",
      "First-aid and fire-safety certified personnel",
      "24/7 supervisor check-ins and audits",
    ],
    process: [
      { step: 1, title: "Security Survey", description: "We map patrol routes, gates, and specific post instructions (e.g., visitor logs)." },
      { step: 2, title: "Guard Selection", description: "We match guards with the specific experience required for your type of property." },
      { step: 3, title: "On-site Briefing", description: "We conduct on-site orientation with guards regarding layout, contacts, and logs." },
      { step: 4, title: "Deployment & Audit", description: "Guards begin shifts, with regular night audits from our supervisor team." },
    ],
    faqs: [
      {
        question: "Are your guards licensed under PSARA?",
        answer: "Yes. Sabari Security Service is fully compliant with the Private Security Agencies (Regulation) Act and rules in Tamil Nadu.",
      },
      {
        question: "How do you verify the guards' background?",
        answer: "All personnel undergo police verification, address checks, and previous employment reference audits before deployment.",
      },
    ],
    image: "/images/security/guard-patrol.svg",
    icon: "UserCheck",
    featured: false,
    relatedSlugs: ["cctv-monitoring", "security-amc"],
  },
  {
    slug: "security-amc",
    name: "Annual Maintenance Contracts (AMC)",
    category: "security",
    brand: "sabari",
    tagline: "Preventive maintenance, camera cleaning, and emergency support for your security systems",
    description:
      "Ensure your security systems are functional when it matters. Our AMC includes quarterly preventive maintenance, urgent repairs, camera lens cleaning, connection testing, and battery health checks for all your alarm and CCTV networks.",
    problem:
      "Many security systems fail because of dirty lenses, loose cable connections, or flat backup batteries — issues only noticed *after* a break-in occurred.",
    includes: [
      "Quarterly planned preventive maintenance visits",
      "Camera lens cleaning and focus adjustment",
      "Cable inspection and connector re-crimping",
      "Battery backup check and power supply test",
      "Priority response for system faults (within 6 hours)",
      "Firmware updates for NVRs and alarm panels",
    ],
    process: [
      { step: 1, title: "System Audit", description: "We inventory all security devices, test performance, and note current health." },
      { step: 2, title: "Contract Agreement", description: "We agree on service intervals and emergency response times (SLA)." },
      { step: 3, title: "Quarterly Maintenance", description: "We clean, check connections, measure battery levels, and run system diagnostics." },
      { step: 4, title: "Service Log & Review", description: "We provide a written health report after every check, flagging any components needing upgrade." },
    ],
    faqs: [
      {
        question: "Do you service security systems installed by other vendors?",
        answer: "Yes. We run a full audit of your current system first. Once verified, we can cover it under a Sabari AMC.",
      },
      {
        question: "Are replacement parts included in the AMC?",
        answer: "We offer both comprehensive AMCs (including parts) and labor-only AMCs. We customize the plan based on your preference.",
      },
    ],
    image: "/images/security/access-control.svg",
    icon: "ClipboardCheck",
    featured: false,
    relatedSlugs: ["cctv-installation", "access-control"],
  },
];
