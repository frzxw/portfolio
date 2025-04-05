"use client"

import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Post } from "@/lib/blog"

interface BlogPostCardProps {
  post: Post
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold font-heading">{post.title}</h3>
            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <span className="text-sm text-muted-foreground">Read more →</span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

