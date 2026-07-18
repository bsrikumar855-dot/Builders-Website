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
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  // Dynamically resolve lucide icon
  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Wrench;

  const categoryLabel = service.category === "electrical" ? "Electrical" : "Plumbing";
  const categoryClass =
    service.category === "electrical" ? "category-chip-electrical" : "category-chip-plumbing";

  if (variant === "compact") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
      >
        <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-900 text-sm truncate">{service.name}</p>
          <p className="text-xs text-slate-500 mt-0.5 truncate">{service.tagline}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all shrink-0" />
      </Link>
    );
  }

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover",
        variant === "featured" && "ring-2 ring-amber-400/60"
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={`${service.name} service — Shreekumar Builders, Coimbatore`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <span className={cn("absolute top-3 left-3", categoryClass)}>{categoryLabel}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 leading-snug">{service.name}</h3>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
          {service.tagline}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-900 group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
