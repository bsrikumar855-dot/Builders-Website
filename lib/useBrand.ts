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
    btnPrimaryClass: (isSecurity ? "securityPrimary" : "graphite") as any,
    btnOutlineClass: (isSecurity ? "securityOutline" : "outline") as any,
  };
}
