import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BlogCard from "@/components/sections/BlogCard";
import CTASection from "@/components/sections/CTASection";
import { posts, getPostsByCategory } from "@/data/blog-posts";
import type { BlogCategory } from "@/data/blog-posts";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { category: string };
}

const categories: BlogCategory[] = ["electrical", "plumbing", "maintenance"];

const categoryLabels: Record<BlogCategory, string> = {
  electrical: "Electrical",
  plumbing: "Plumbing",
  maintenance: "Maintenance",
};

const categoryDescriptions: Record<BlogCategory, string> = {
  electrical: "Wiring, MCBs, earthing, and safety guidance for homeowners.",
  plumbing: "Leak detection, fixtures, water heaters, and drainage advice.",
  maintenance: "General upkeep and knowing when a problem is an emergency.",
};

function isValidCategory(category: string): category is BlogCategory {
  return categories.includes(category as BlogCategory);
}

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isValidCategory(params.category)) return {};
  const label = categoryLabels[params.category];

  return {
    title: `${label} Articles | Shreekumar Builders Blog`,
    description: `${categoryDescriptions[params.category]} Practical advice from Shreekumar Builders, Coimbatore.`,
    alternates: { canonical: `${siteConfig.url}/blog/category/${params.category}` },
  };
}

export default function BlogCategoryPage({ params }: Props) {
  if (!isValidCategory(params.category)) notFound();

  const category = params.category;
  const filtered = getPostsByCategory(category);

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <div className="section-container py-4">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-blue-800 transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li><Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-slate-900 font-medium">{categoryLabels[category]}</li>
          </ol>
        </div>
      </nav>

      <section className="gradient-brand py-16 md:py-20" aria-labelledby="blog-category-heading">
        <div className="section-container text-center">
          <p className="text-copper text-xs font-bold uppercase tracking-widest mb-3">Blog Category</p>
          <h1 id="blog-category-heading" className="text-graphite mb-4">{categoryLabels[category]} Articles</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">{categoryDescriptions[category]}</p>
        </div>
      </section>

      <section className="section-padding" aria-label={`${categoryLabels[category]} articles`}>
        <div className="section-container">
          {filtered.length === 0 ? (
            <p className="text-center text-slate-500 py-16">No articles in this category yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
          <div className="mt-10 text-center">
            <Link href="/blog" className="btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="light" heading="Have a Problem Right Now?" body="Skip the reading — call us and describe what's happening." />
    </>
  );
}
