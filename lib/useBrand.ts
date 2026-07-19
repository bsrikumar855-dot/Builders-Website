"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "./site-config";

export type BrandType = "shreekumar" | "sabari";

export function useBrand() {
  const pathname = usePathname();
  const isSecurity = pathname?.startsWith("/security") ?? false;
  const brandKey: BrandType = isSecurity ? "sabari" : "shreekumar";
  const config = siteConfig.brands[brandKey];

  return {
    brand: brandKey,
    isSecurity,
    config,
    accentClass: isSecurity ? "text-security-accent" : "text-voltage",
    bgAccentClass: isSecurity ? "bg-security-accent" : "bg-voltage",
    bgPrimaryClass: isSecurity ? "bg-security-primary" : "bg-graphite",
    // Accent styling overrides
    hoverAccentBgClass: isSecurity ? "hover:bg-security-accent" : "hover:bg-voltage",
    hoverAccentTextClass: isSecurity ? "hover:text-security-accent" : "hover:text-voltage",
    // Brand buttons
    btnPrimaryClass: isSecurity
      ? "inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-warm-white text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-security-primary hover:bg-security-accent"
      : "btn-primary",
    btnOutlineClass: isSecurity
      ? "inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 font-semibold text-base transition-all duration-200 hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-security-primary text-security-primary hover:bg-security-primary hover:text-warm-white"
      : "btn-outline",
  };
}
