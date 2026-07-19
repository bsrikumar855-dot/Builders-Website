export const siteConfig = {
  name: "Shreekumar Builders",
  shortName: "Shreekumar",
  description:
    "Licensed electrical and plumbing services in Coimbatore, Tamilnadu. Residential and commercial solutions with guaranteed workmanship.",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "info@shreekumarbuilders.com",
  address: "42, Avinashi Road, Coimbatore, Tamilnadu 641018",
  city: "Coimbatore",
  state: "Tamilnadu",
  country: "IN",
  licence: "TN-ELEC-2008-04521",
  established: 2008,
  url: "https://www.shreekumarbuilders.com",
  ogImage: "/images/og-image.svg",
  social: {
    facebook: "https://facebook.com/shreekumarbuilders",
    instagram: "https://instagram.com/shreekumarbuilders",
    youtube: "",
  },
  hours: {
    weekdays: "Mon – Sat: 8:00 AM – 7:00 PM",
    sunday: "Sun: Emergency calls only",
    emergency: "24/7 Emergency Service Available",
  },
  brands: {
    shreekumar: {
      name: "Shreekumar Builders",
      shortName: "Shreekumar",
      description:
        "Licensed electrical and plumbing services in Coimbatore, Tamilnadu. Residential and commercial solutions with guaranteed workmanship.",
      phone: "+91 98765 43210",
      whatsapp: "+919876543210",
      email: "info@shreekumarbuilders.com",
      address: "42, Avinashi Road, Coimbatore, Tamilnadu 641018",
      licence: "TN-ELEC-2008-04521",
      established: 2008,
      ogImage: "/images/og-image.svg",
      hours: {
        weekdays: "Mon – Sat: 8:00 AM – 7:00 PM",
        sunday: "Sun: Emergency calls only",
        emergency: "24/7 Emergency Service Available",
      },
    },
    sabari: {
      name: "Sabari Security Service",
      shortName: "Sabari Security",
      description:
        "Professional CCTV installation, 24/7 remote monitoring, alarm systems, and biometric access control in Coimbatore.",
      phone: "+91 98765 43220",
      whatsapp: "+919876543220",
      email: "info@sabarisecurity.com",
      address: "42, Avinashi Road, Coimbatore, Tamilnadu 641018",
      licence: "TN-SEC-2015-08942",
      established: 2015,
      ogImage: "/images/security/security-hero-bg.svg",
      hours: {
        weekdays: "Mon – Sat: 8:00 AM – 7:00 PM",
        sunday: "Sun: Emergency calls only",
        emergency: "24/7 Remote Monitoring & Response",
      },
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
