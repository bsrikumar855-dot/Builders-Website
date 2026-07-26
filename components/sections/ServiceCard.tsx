import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export default function ServiceCard({ service, variant = "default", className }: ServiceCardProps) {
  // Dynamically resolve lucide icon
  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Wrench;

  const categoryLabel = service.category === "electrical" ? "Electrical" : "Plumbing";
  const categoryClass =
    service.category === "electrical" ? "category-chip-electrical" : "category-chip-plumbing";

  if (variant === "compact") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "group flex items-center gap-4 p-4 rounded-xl bg-white border border-warm-white hover:border-voltage/40 hover:shadow-md transition-all duration-200",
          className
        )}
      >
        <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-warm-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-graphite text-sm truncate">{service.name}</p>
          <p className="text-xs text-slate-body mt-0.5 truncate">{service.tagline}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-body/50 group-hover:text-graphite group-hover:translate-x-1 transition-all shrink-0" />
      </Link>
    );
  }

  // First "included" item doubles as the one-line detail revealed on hover.
  const hoverDetail = service.includes[0];

  return (
    <article
      className={cn(
        "group h-full flex flex-col bg-white rounded-2xl border border-warm-white overflow-hidden card-hover",
        variant === "featured" && "ring-1 ring-graphite/10",
        className
      )}
    >
      {/* Image */}
      <div className="relative flex-1 min-h-[12rem] overflow-hidden bg-warm-white">
        <Image
          src={service.image}
          alt={`${service.name} service — Shreekumar Builders, Coimbatore`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent" />
        <span className={cn("absolute top-3 left-3", categoryClass)}>{categoryLabel}</span>
      </div>

      {/* Content */}
      <div className="p-6 shrink-0">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-warm-white" />
          </div>
          <h3 className="text-lg font-bold text-graphite leading-snug">{service.name}</h3>
        </div>

        <p className="text-sm text-slate-body leading-relaxed line-clamp-2">{service.tagline}</p>

        {/* Hover-revealed detail — space is always reserved, only opacity/transform change */}
        {hoverDetail && (
          <p
            className="flex items-center gap-1.5 text-xs text-slate-body font-medium mt-2 leading-relaxed line-clamp-1 opacity-0 -translate-y-1 transition-all duration-200 motion-reduce:transition-none group-hover:opacity-100 group-hover:translate-y-0"
            aria-hidden="true"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
            {hoverDetail}
          </p>
        )}

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-graphite hover:underline group/link mt-4"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
