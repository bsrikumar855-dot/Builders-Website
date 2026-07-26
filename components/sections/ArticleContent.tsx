import type { ContentBlock } from "@/data/blog-posts";

interface ArticleContentProps {
  blocks: ContentBlock[];
}

export default function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="text-2xl font-bold text-graphite !mt-10 mb-2">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-voltage shrink-0 mt-2.5" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-slate-body leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
