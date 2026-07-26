import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { Post } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: Post;
  className?: string;
}

const categoryLabels: Record<string, string> = {
  electrical: "Electrical",
  plumbing: "Plumbing",
  maintenance: "Maintenance",
};

const categoryStyles: Record<string, string> = {
  electrical: "category-chip-electrical",
  plumbing: "category-chip-plumbing",
  maintenance: "category-chip bg-security-accent/10 text-security-primary",
};

export default function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group bg-white rounded-2xl border border-warm-white overflow-hidden card-hover",
        className
      )}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-warm-white">
          <Image
            src={post.coverImage}
            alt={`${post.title} — Shreekumar Builders blog`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent" />
          <span className={cn("absolute top-3 left-3", categoryStyles[post.category])}>
            {categoryLabels[post.category]}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-graphite leading-snug mb-2 line-clamp-2 group-hover:text-graphite transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-slate-body leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-slate-body/50">
            <span>{post.author}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
