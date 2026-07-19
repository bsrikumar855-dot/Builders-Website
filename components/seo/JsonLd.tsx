"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

interface LocalBusinessJsonLdProps {
  page?: string;
}

export function LocalBusinessJsonLd({ page }: LocalBusinessJsonLdProps) {
  const pathname = usePathname();
  const isSecurity = pathname?.startsWith("/security") ?? false;
  
  const brandKey = isSecurity ? "sabari" : "shreekumar";
  const brandConfig = siteConfig.brands[brandKey];

  const data = {
    "@context": "https://schema.org",
    "@type": isSecurity ? "SecurityService" : "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}${page ?? pathname ?? ""}`,
    name: brandConfig.name,
    url: `${siteConfig.url}${isSecurity ? "/security" : ""}`,
    telephone: brandConfig.phone,
    email: brandConfig.email,
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
      credentialCategory: isSecurity ? "Private Security Agency Licence" : "Electrical Contractor Licence",
      recognizedBy: {
        "@type": "Organization",
        name: isSecurity ? "Tamil Nadu Private Security Agencies Rules Authority" : "Tamil Nadu Electrical Licensing Board",
      },
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram].filter(Boolean),
    description: brandConfig.description,
    foundingDate: String(brandConfig.established),
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}${brandConfig.ogImage}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ArticleJsonLdProps {
  headline: string;
  description: string;
  authorName: string;
  datePublished: string;
  image: string;
  url: string;
}

export function ArticleJsonLd({ headline, description, authorName, datePublished, image, url }: ArticleJsonLdProps) {
  const pathname = usePathname();
  const isSecurity = pathname?.startsWith("/security") ?? false;
  const brandKey = isSecurity ? "sabari" : "shreekumar";
  const brandConfig = siteConfig.brands[brandKey];

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: `${siteConfig.url}${image}`,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: brandConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${url}`,
    },
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
  brand?: "shreekumar" | "sabari";
}

export function ServiceJsonLd({ name, description, url, brand }: ServiceJsonLdProps) {
  const pathname = usePathname();
  const isSecurity = brand ? brand === "sabari" : (pathname?.startsWith("/security") ?? false);
  const brandKey = isSecurity ? "sabari" : "shreekumar";
  const brandConfig = siteConfig.brands[brandKey];

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: brandConfig.name,
      url: `${siteConfig.url}${isSecurity ? "/security" : ""}`,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      description: isSecurity ? "Free site survey. Call for design and audit." : "Free estimate. Call for pricing.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
