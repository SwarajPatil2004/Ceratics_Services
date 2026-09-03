import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  readingTime?: string;
  author?: string;
}

export interface BlogPost {
  meta: BlogPostMetadata;
  content: string;
}

// Calculate rough reading time from content words
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Ensure the directory exists
function ensureBlogDir(): void {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

export function getAllPosts(): BlogPostMetadata[] {
  ensureBlogDir();
  const fileNames = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts: BlogPostMetadata[] = fileNames.map((fileName) => {
    const fullPath = path.join(BLOG_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const slug = data.slug || fileName.replace(/\.mdx$/, "");

    return {
      title: data.title || "Untitled Post",
      description: data.description || "",
      date: data.date
        ? new Date(data.date).toISOString().split("T")[0]
        : "2026-09-01",
      slug,
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime: data.readingTime || calculateReadingTime(content),
      author: data.author || "Ceratics Team",
    };
  });

  // Sort chronologically descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir();
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    // Try finding by matching frontmatter slug across all files
    const allFiles = fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".mdx"));
    for (const file of allFiles) {
      const p = path.join(BLOG_DIR, file);
      const raw = fs.readFileSync(p, "utf8");
      const { data, content } = matter(raw);
      if (data.slug === slug) {
        return {
          meta: {
            title: data.title || "Untitled Post",
            description: data.description || "",
            date: data.date
              ? new Date(data.date).toISOString().split("T")[0]
              : "2026-09-01",
            slug: data.slug,
            tags: Array.isArray(data.tags) ? data.tags : [],
            readingTime: data.readingTime || calculateReadingTime(content),
            author: data.author || "Ceratics Team",
          },
          content,
        };
      }
    }
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      title: data.title || "Untitled Post",
      description: data.description || "",
      date: data.date
        ? new Date(data.date).toISOString().split("T")[0]
        : "2026-09-01",
      slug: data.slug || slug,
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime: data.readingTime || calculateReadingTime(content),
      author: data.author || "Ceratics Team",
    },
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagsSet.add(tag)));
  return Array.from(tagsSet);
}
