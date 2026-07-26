"use client";

import Link from "next/link";
import { useBrand } from "@/lib/useBrand";
import { cn } from "@/lib/utils";

export default function BrandSwitcher() {
  const { brand } = useBrand();

  return (
    <div className="text-xs transition-colors duration-300 py-1.5 sm:py-2 bg-slate-50/60 backdrop-blur-md border-b border-slate-200/50">
      <div className="section-container flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono tracking-wider uppercase text-[9px] sm:text-[10px] text-slate-body/60">
            Coimbatore Division
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 font-semibold">
          <Link
            href="/"
            className={cn(
              "transition-colors",
              brand === "shreekumar"
                ? "text-voltage font-bold"
                : "text-slate-body/60 hover:text-graphite"
            )}
          >
            Shreekumar Builders
          </Link>
          <span className="text-slate-200">|</span>
          <Link
            href="/security"
            className={cn(
              "transition-colors",
              brand === "sabari"
                ? "text-security-accent font-bold"
                : "text-slate-body/60 hover:text-graphite"
            )}
          >
            Sabari Security
          </Link>
        </div>
      </div>
    </div>
  );
}

