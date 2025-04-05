import type { Metadata } from "next"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "Blog | Fariz Wibisono",
  description: "Technical and personal blog posts by Fariz Wibisono",
}

export default function BlogPage() {
  return <BlogPageClient />
}

