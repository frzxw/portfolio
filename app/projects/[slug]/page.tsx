import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProject, getProjects } from "@/lib/projects"

export async function generateStaticParams() {
  const projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProject(params.slug)

  if (!project) {
    return {
      title: "Project Not Found | Fariz Wibisono",
    }
  }

  return {
    title: `${project.title} | Fariz Wibisono`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="py-8 md:py-12">
      <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">
          {project.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
          )}
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </Link>
          )}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border">
          <div className="relative aspect-video w-full">
            <Image
              src={project.image || "/placeholder.svg?height=600&width=1200"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-8 prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed">{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </div>
    </div>
  )
}

