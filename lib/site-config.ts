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
} as const;

export type SiteConfig = typeof siteConfig;
