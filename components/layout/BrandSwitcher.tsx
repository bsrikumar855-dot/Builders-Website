"use client";

import Link from "next/link";
import { useBrand } from "@/lib/useBrand";
import { cn } from "@/lib/utils";

export default function BrandSwitcher() {
  const { brand } = useBrand();

  return (
    <div className="bg-graphite text-warm-white/60 text-xs border-b border-white/5 py-1.5 sm:py-2">
      <div className="section-container flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="opacity-70 font-mono tracking-wider uppercase text-[9px] sm:text-[10px]">
            Coimbatore Division
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 font-semibold">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-white",
              brand === "shreekumar" ? "text-voltage font-bold" : "text-warm-white/60"
            )}
          >
            Shreekumar Builders
          </Link>
          <span className="opacity-20">|</span>
          <Link
            href="/security"
            className={cn(
              "transition-colors hover:text-white",
              brand === "sabari" ? "text-security-accent font-bold" : "text-warm-white/60"
            )}
          >
            Sabari Security
          </Link>
        </div>
      </div>
    </div>
  );
}
