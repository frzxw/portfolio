import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { format } from "date-fns"
import { getPost, getPosts } from "@/lib/blog"

export async function generateStaticParams() {
  const posts = getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Fariz Wibisono",
    }
  }

  return {
    title: `${post.title} | Fariz Wibisono`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="py-8 md:py-12">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <article className="mt-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">{post.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        <div className="mt-8 prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed font-medium">{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  )
}

