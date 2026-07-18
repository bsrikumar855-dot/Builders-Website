"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function FloatingCTA() {
  return (
    <div
      className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 lg:hidden"
      aria-label="Quick contact options"
    >
      {/* WhatsApp */}
      <Link
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20need%20help%20with%20electrical%2Fplumbing%20work.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>

      {/* Call */}
      <Link
        href={`tel:${siteConfig.phone}`}
        aria-label={`Call us at ${siteConfig.phone}`}
        className="relative w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "hsl(var(--primary))" }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
        <Phone className="w-6 h-6 relative" />
      </Link>
    </div>
  );
}
