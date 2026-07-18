export interface Testimonial {
  id: string;
  name: string;
  location: string;
  type: "residential" | "commercial";
  rating: number; // 1–5
  text: string;
  service: string;
  date: string; // ISO date string
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ramesh Krishnamurthy",
    location: "RS Puram, Coimbatore",
    type: "residential",
    rating: 5,
    text: "Shreekumar Builders rewired our 35-year-old house in four days flat. The team was punctual, cleaned up every evening, and the new distribution board is immaculate. Their price was fair and they helped us with the EB inspection paperwork too. Highly recommend.",
    service: "wiring-rewiring",
    date: "2024-11-15",
    verified: true,
  },
  {
    id: "t2",
    name: "Priya Anand",
    location: "Saravanampatti, Coimbatore",
    type: "residential",
    rating: 5,
    text: "We hired them for our new villa's full electrical and plumbing work. The project manager kept us informed at every stage, and the quality of the concealed wiring is excellent — not a single snag six months later. The CCTV pre-wire means we can add cameras at any point without opening walls. Worth every rupee.",
    service: "cctv-smart-home",
    date: "2025-03-20",
    verified: true,
  },
  {
    id: "t3",
    name: "S. Gopalakrishnan, Managing Director",
    location: "Gandhipuram, Coimbatore",
    type: "commercial",
    rating: 5,
    text: "Our office complex has three tenants with different load requirements. Shreekumar Builders designed the three-phase distribution, installed the generator ATS, and ran Cat-6 to every desk — all on schedule. The post-completion documentation and single-line diagram they provided was exactly what our insurance company needed. Professional service from start to finish.",
    service: "generator-ups-installation",
    date: "2024-08-05",
    verified: true,
  },
];
