"use client";

import { useState } from "react";
import BlogCard from "@/components/sections/BlogCard";
import { posts } from "@/data/blog-posts";
import type { BlogCategory } from "@/data/blog-posts";

type Filter = "all" | BlogCategory;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Electrical", value: "electrical" },
  { label: "Plumbing", value: "plumbing" },
  { label: "Maintenance", value: "maintenance" },
];

export default function BlogClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all" ? posts : posts.filter((p) => p.category === activeFilter);

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
                ? "gradient-brand text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-800"
            }`}
          >
            {f.label}
            <span className="ml-2 text-xs opacity-70">
              ({f.value === "all" ? posts.length : posts.filter((p) => p.category === f.value).length})
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-slate-500 py-16">No articles found in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
