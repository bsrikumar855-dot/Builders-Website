import { siteConfig } from "@/lib/site-config";

interface LocalBusinessJsonLdProps {
  page?: string;
}

export function LocalBusinessJsonLd({ page }: LocalBusinessJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}${page ?? ""}`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "42, Avinashi Road",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: "641018",
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.0168,
      longitude: 76.9558,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    areaServed: [
      "Coimbatore", "RS Puram", "Gandhipuram", "Saravanampatti", "Singanallur",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Electrical Contractor Licence",
      recognizedBy: {
        "@type": "Organization",
        name: "Tamil Nadu Electrical Licensing Board",
      },
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram].filter(Boolean),
    description: siteConfig.description,
    foundingDate: String(siteConfig.established),
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      description: "Free estimate. Call for pricing.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
