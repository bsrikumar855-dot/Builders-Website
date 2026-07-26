import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/blog-posts";
import { services } from "@/data/services";
import ArticleContent from "@/components/sections/ArticleContent";
import BlogCard from "@/components/sections/BlogCard";
import ServiceCard from "@/components/sections/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { slug: string };
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

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Shreekumar Builders Blog`,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [{ url: post.coverImage, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedServices = post.relatedServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services;

  const relatedPosts = getRelatedPosts(post, 3);

  const midpoint = Math.ceil(post.content.length / 2);
  const firstHalf = post.content.slice(0, midpoint);
  const secondHalf = post.content.slice(midpoint);

  const publishedLabel = new Date(post.publishedDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <ArticleJsonLd
        headline={post.title}
        description={post.excerpt}
        authorName={post.author}
        datePublished={post.publishedDate}
        image={post.coverImage}
        url={`/blog/${post.slug}`}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-warm-white bg-white">
        <div className="section-container py-4">
          <ol className="flex items-center gap-2 text-sm text-slate-body">
            <li><Link href="/" className="hover:text-graphite transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li><Link href="/blog" className="hover:text-graphite transition-colors">Blog</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-graphite font-medium truncate max-w-[200px] sm:max-w-none">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="section-padding pb-10" aria-labelledby="post-heading">
        <div className="section-container max-w-3xl">
          <span className={categoryStyles[post.category]}>{categoryLabels[post.category]}</span>
          <h1 id="post-heading" className="text-graphite mt-4 mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-body mb-8">
            <span className="font-semibold text-graphite">{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {publishedLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-96 bg-warm-white">
            <Image
              src={post.coverImage}
              alt={`${post.title} — Shreekumar Builders`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section aria-label="Article content">
        <div className="section-container max-w-3xl pb-6">
          <ArticleContent blocks={firstHalf} />
        </div>

        {/* Mid-article callout */}
        <div className="section-container max-w-3xl py-6">
          <div className="bg-voltage/10 border border-voltage/20 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div>
              <p className="font-bold text-graphite mb-1">Facing this issue right now?</p>
              <p className="text-sm text-graphite">Get a free estimate — no call-out fee, no obligation.</p>
            </div>
            <Button variant="voltage" asChild className="shrink-0 whitespace-nowrap px-6 py-4">
              <Link href="/quote">
                Get a Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="section-container max-w-3xl pt-6">
          <ArticleContent blocks={secondHalf} />
        </div>
      </section>

      {/* Related service */}
      {relatedServices.length > 0 && (
        <section className="section-padding section-alt" aria-labelledby="related-service-heading">
          <div className="section-container max-w-3xl">
            <h2 id="related-service-heading" className="text-graphite mb-6">Related Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedServices.slice(0, 2).map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding" aria-labelledby="related-posts-heading">
          <div className="section-container">
            <h2 id="related-posts-heading" className="text-graphite text-center mb-10">More {categoryLabels[post.category]} Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Still Have Questions?"
        body={`Call us and speak to a technician directly, or request a free written estimate for ${post.category} work in Coimbatore.`}
        primaryLabel={`Call ${siteConfig.phone}`}
      />
    </>
  );
}
