import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Link from "next/link";
import ReadingProgress from "@/components/ReadingProgress";

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(".mdx", "") }));
}

async function getArticle(slug) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  return { ...data, html: processed.toString() };
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);

  return (
    <>
      <ReadingProgress />

      <section className="min-h-[calc(100vh-80px)] bg-[#f7f5f1]">
        <div className="container mx-auto px-4 pt-16 pb-24 max-w-[740px]">

          {/* Retour */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-inter text-[12px] text-muted hover:text-primary-dark transition-colors mb-10"
          >
            <span>←</span>
            <span>Tous les articles</span>
          </Link>

          {/* Catégorie */}
          <span
            className="inline-block font-inter text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-6"
            style={{ background: "#f3f0ff", color: "#7c3aed" }}
          >
            {article.category}
          </span>

          {/* Titre */}
          <h1
            className="font-syne font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#0a0a0a", letterSpacing: "-0.02em" }}
          >
            {article.title}
          </h1>

          {/* Meta */}
          <div
            className="flex flex-wrap items-center gap-4 mb-10 pb-8"
            style={{ borderBottom: "0.5px solid #e5e0d8" }}
          >
            <span className="font-inter text-[12px] text-muted">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span style={{ width: 1, height: 12, background: "#e5e0d8" }} />
            <span className="font-inter text-[12px] text-muted">{article.readingTime}</span>
            <div className="flex flex-wrap gap-2">
              {article.tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-inter text-[10px] px-2 py-0.5 rounded"
                  style={{ background: "#fff", color: "#999", border: "0.5px solid #e5e0d8" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Corps MDX */}
          <div
            className="mdx-body"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {/* Footer */}
          <div className="mt-16 pt-8" style={{ borderTop: "0.5px solid #e5e0d8" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-inter text-[13px] font-medium hover:text-accent transition-colors"
              style={{ color: "#0a0a0a" }}
            >
              <span>←</span>
              <span>Tous les articles</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
