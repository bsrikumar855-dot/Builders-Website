"use client";

import { useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { MapPin, Calendar, MoveHorizontal } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
  commercial: "bg-voltage/15 text-graphite",
  industrial: "bg-copper/15 text-graphite",
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  // Not a true before/after (the data has no "before" state — these are all
  // completed-project photos) so the UI is honest about that: it compares an
  // overview shot against a detail shot, using the same divider/toggle
  // interaction pattern a before/after slider would use.
  const hasCompare = project.gallery.length > 1;
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const clipPath = useTransform(x, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(x, (v) => `${v}%`);
  const [mobileDetail, setMobileDetail] = useState(false);

  const updateFromPointer = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    x.set(Math.max(0, Math.min(100, pct)));
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateFromPointer(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.buttons !== 1) return;
    updateFromPointer(e.clientX);
  };

  return (
    <article
      className={cn("group bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover", className)}
    >
      {/* Image / compare area */}
      <div
        ref={containerRef}
        className={cn("relative h-52 overflow-hidden bg-slate-100 select-none", hasCompare && "md:cursor-ew-resize")}
        onPointerDown={hasCompare ? handlePointerDown : undefined}
        onPointerMove={hasCompare ? handlePointerMove : undefined}
      >
        <Image
          src={hasCompare ? project.gallery[0] : project.image}
          alt={`${project.title} — Shreekumar Builders, Coimbatore`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {hasCompare && (
          <>
            {/* Detail layer — desktop: clipped by drag position; mobile: swapped on tap */}
            <motion.div className="absolute inset-0 hidden md:block pointer-events-none" style={{ clipPath }}>
              <Image
                src={project.gallery[1]}
                alt={`${project.title} — detail view`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {mobileDetail && (
              <div className="absolute inset-0 md:hidden">
                <Image
                  src={project.gallery[1]}
                  alt={`${project.title} — detail view`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}

            {/* Desktop drag handle */}
            <motion.div
              className="hidden md:block absolute top-0 bottom-0 w-0.5 bg-warm-white/90 pointer-events-none"
              style={{ left: handleLeft }}
            />
            <motion.div
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-warm-white shadow-md items-center justify-center text-graphite pointer-events-none"
              style={{ left: handleLeft }}
            >
              <MoveHorizontal className="w-4 h-4" />
            </motion.div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileDetail((v) => !v)}
              className="md:hidden absolute bottom-3 right-3 text-xs font-semibold bg-warm-white/95 text-graphite px-3 py-1.5 rounded-full shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {mobileDetail ? "Overview" : "Detail"}
            </button>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 flex gap-2 pointer-events-none">
          <span className={cn("category-chip text-xs font-bold", typeStyles[project.type])}>
            {typeLabels[project.type]}
          </span>
          <span className="category-chip bg-graphite/80 text-warm-white text-xs">
            {project.category === "both" ? "Electrical + Plumbing" : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-graphite mb-2 line-clamp-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-slate-body leading-relaxed mb-4 line-clamp-2">
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
