import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const typeLabels: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
};

const typeStyles: Record<string, string> = {
  residential: "bg-green-100 text-green-800",
  commercial: "bg-blue-100 text-blue-800",
  industrial: "bg-orange-100 text-orange-800",
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.title} — completed project by Shreekumar Builders`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className={cn("category-chip text-xs font-bold", typeStyles[project.type])}>
            {typeLabels[project.type]}
          </span>
          <span className="category-chip bg-slate-800/80 text-white text-xs">
            {project.category === "both" ? "Electrical + Plumbing" : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
        </div>
      </div>
    </article>
  );
}
