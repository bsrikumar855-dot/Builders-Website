"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Phone, ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import { useBrand } from "@/lib/useBrand";
import BrandSwitcher from "./BrandSwitcher";

const shreekumarNavLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const securityNavLinks = [
  { label: "Services", href: "/security/services", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/security/about" },
  { label: "Contact", href: "/security/contact" },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const { brand, isSecurity, config, btnPrimaryClass } = useBrand();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = isSecurity ? securityNavLinks : shreekumarNavLinks;

  const electrical = services.filter((s) => s.category === "electrical");
  const plumbing = services.filter((s) => s.category === "plumbing");

  const securitySystems = services.filter(
    (s) => s.brand === "sabari" && ["cctv-installation", "alarm-systems", "access-control"].includes(s.slug)
  );
  const securityOperations = services.filter(
    (s) => s.brand === "sabari" && ["cctv-monitoring", "manned-guarding", "security-amc"].includes(s.slug)
  );

  const navLinkClass = cn(
    "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "text-slate-body hover:text-graphite hover:bg-graphite/5"
  );

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-lg shadow-sm"
      >
        {/* Discreet Brand Switcher inside the header so it remains fixed */}
        <BrandSwitcher />

        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={isSecurity ? "/security" : "/"}
              className="flex items-center gap-3 group"
              aria-label={isSecurity ? "Sabari Security Service — Home" : "Shreekumar Builders — Home"}
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center text-warm-white font-display font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow",
                isSecurity ? "bg-gradient-to-br from-security-primary to-security-accent" : "gradient-brand"
              )}>
                S
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-base leading-none transition-colors text-graphite">
                  {isSecurity ? "Sabari" : "Shreekumar"}
                </p>
                <p className="text-xs font-medium tracking-wide transition-colors text-slate-body">
                  {isSecurity ? "SECURITY" : "BUILDERS"}
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      id="services-menu-btn"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      className={cn("flex items-center gap-1", navLinkClass)}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          role="menu"
                          aria-labelledby="services-menu-btn"
                          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: EASE }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 origin-top"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            {!isSecurity ? (
                              <>
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-widest text-graphite mb-3">
                                    Electrical
                                  </p>
                                  <ul className="space-y-1">
                                    {electrical.map((s) => (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/services/${s.slug}`}
                                          role="menuitem"
                                          onClick={() => setServicesOpen(false)}
                                          className="block px-3 py-2 rounded-lg text-sm text-slate-body hover:bg-voltage/10 hover:text-graphite transition-colors"
                                        >
                                          {s.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-widest text-copper mb-3">
                                    Plumbing
                                  </p>
                                  <ul className="space-y-1">
                                    {plumbing.map((s) => (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/services/${s.slug}`}
                                          role="menuitem"
                                          onClick={() => setServicesOpen(false)}
                                          className="block px-3 py-2 rounded-lg text-sm text-slate-body hover:bg-copper/10 hover:text-graphite transition-colors"
                                        >
                                          {s.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-widest text-security-primary mb-3">
                                    Systems & Devices
                                  </p>
                                  <ul className="space-y-1">
                                    {securitySystems.map((s) => (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/security/services/${s.slug}`}
                                          role="menuitem"
                                          onClick={() => setServicesOpen(false)}
                                          className="block px-3 py-2 rounded-lg text-sm text-slate-body hover:bg-security-accent/15 hover:text-security-primary transition-colors"
                                        >
                                          {s.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-widest text-security-accent mb-3">
                                    Monitoring & Personnel
                                  </p>
                                  <ul className="space-y-1">
                                    {securityOperations.map((s) => (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/security/services/${s.slug}`}
                                          role="menuitem"
                                          onClick={() => setServicesOpen(false)}
                                          className="block px-3 py-2 rounded-lg text-sm text-slate-body hover:bg-security-accent/15 hover:text-security-primary transition-colors"
                                        >
                                          {s.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            )}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                            <Link
                              href={isSecurity ? "/security/services" : "/services"}
                              onClick={() => setServicesOpen(false)}
                              className="text-sm font-semibold text-graphite hover:underline"
                            >
                              View all services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.label} href={link.href!} className={navLinkClass}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={`tel:${config.phone}`}
                className="flex items-center gap-2 text-sm font-bold font-mono tracking-wide transition-colors rounded-lg px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-graphite"
              >
                <Phone className="w-4 h-4" />
                <span>{config.phone}</span>
              </Link>
              <Link
                href={isSecurity ? "/security/quote" : "/quote"}
                className={cn(
                  "text-sm px-5 py-2.5 font-semibold active:scale-95 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isSecurity
                    ? "text-warm-white bg-security-primary hover:bg-security-accent"
                    : "btn-primary"
                )}
              >
                {isSecurity ? "Book a Survey" : "Get a Quote"}
              </Link>
            </div>

            {/* Mobile: phone always visible + menu toggle */}
            <div className="flex items-center gap-1 lg:hidden">
              <Link
                href={`tel:${config.phone}`}
                aria-label={`Call us at ${config.phone}`}
                className="flex items-center gap-1.5 px-2 py-2 rounded-lg text-xs font-bold font-mono tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-graphite"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{config.phone}</span>
              </Link>
              <button
                className="p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-graphite hover:bg-graphite/5"
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
