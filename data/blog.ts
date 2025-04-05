export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
  image?: string
}

export const posts: Post[] = [
  {
    slug: "my-first-post",
    title: "My First Post",
    date: "2025-04-05",
    readingTime: "1 min read",
    excerpt: "This is my first blog post. I'm excited to share my thoughts and experiences with you.",
    content: "<p>This is the content of my first post. I'm excited to share my thoughts and experiences with you.</p>",
  },
  {
    slug: "my-second-post",
    title: "My Second Post",
    date: "2025-04-06",
    readingTime: "2 min read",
    excerpt: "This is my second blog post. I'm learning a lot about blogging.",
    content: "<p>This is the content of my second post. I'm learning a lot about blogging.</p>",
  },
  {
    slug: "my-third-post",
    title: "My Third Post",
    date: "2025-04-07",
    readingTime: "3 min read",
    excerpt: "This is my third blog post. I'm getting better at this.",
    content: "<p>This is the content of my third post. I'm getting better at this.</p>",
  }
]

export function getPosts(): Post[] {
  if (!Array.isArray(posts)) {
    return [];
  }
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | undefined {
  if (!slug) return undefined
  return posts.find((post) => post.slug === slug)
}

// Calculate estimated reading time based on content length
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

// Export the posts array only

