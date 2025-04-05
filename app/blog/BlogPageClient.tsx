"use client"
import BlogPostCard from "@/components/blog-post-card"
import { getPosts } from "@/lib/blog"

export default function BlogPageClient() {
  const posts = getPosts()

  return (
    <div className="py-8 md:py:12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">Blog</h1>

      <p className="mb-8 text-lg text-muted-foreground max-w-3xl">
        Welcome to my personal space where I share my journal, poetry, and occasionally insights on software development and artificial intelligence.
      </p>

      {posts.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-8">
          {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center p-8 border border-dashed rounded-lg">
          <p className="text-muted-foreground">No posts available at the moment.</p>
        </div>
      )}
    </div>
  )
}

