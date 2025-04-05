export interface Project {
  slug: string
  title: string
  description: string
  content: string
  image?: string
  tags: string[]
  github?: string
  demo?: string
}

// Import projects data from data folder
import { projects } from "@/data/projects"

export function getProjects(): Project[] {
  return projects
}

export function getProject(slug: string): Project | undefined {
  if (!slug) return undefined
  return projects.find((project) => project.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      tags.add(tag)
    })
  })

  return Array.from(tags).sort()
}

