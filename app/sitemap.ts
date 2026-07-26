import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { securityServices } from "@/data/security-services";
import { areas } from "@/data/areas";
import { posts } from "@/data/blog-posts";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/electrical`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/plumbing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    // Sabari Security Brand Static Routes
    { url: `${base}/security`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/security/services`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/security/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/security/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/security/quote`, lastModified: now, changeFrequency: "yearly", priority: 0.85 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const securityServiceRoutes: MetadataRoute.Sitemap = securityServices.map((s) => ({
    url: `${base}/security/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedDate).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...securityServiceRoutes, ...areaRoutes, ...blogRoutes];
}
