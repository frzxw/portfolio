export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
  image?: string
}

// Import posts data from data folder
import { posts } from "@/data/blog"

export function getPosts(): Post[] {
  if (!Array.isArray(posts)) {
    return [];
  }
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | undefined {
  if (!slug || !Array.isArray(posts)) return undefined;
  return posts.find((post) => post.slug === slug);
}

// Calculate estimated reading time based on content length
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

