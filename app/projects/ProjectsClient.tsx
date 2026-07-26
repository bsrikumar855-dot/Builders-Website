"use client";

import { useState } from "react";
import ProjectCard from "@/components/sections/ProjectCard";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/data/projects";
import type { ProjectType } from "@/data/projects";

type Filter = "all" | ProjectType;

const filters: { label: string; value: Filter }[] = [
  { label: "All Projects", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            aria-pressed={activeFilter === f.value}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeFilter === f.value
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-800"
            }`}
          >
            {f.label}
            <span className="ml-2 text-xs opacity-70">
              ({f.value === "all" ? projects.length : projects.filter((p) => p.type === f.value).length})
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-slate-500 py-16">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
