"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg?height=400&width=600"}
              alt={project.title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold font-heading">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

