import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"
import ProjectFilter from "@/components/project-filter"
import { getProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects | Fariz Wibisono",
  description: "Showcase of software projects made by Fariz Wibisono",
}

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const allProjects = getProjects()
  
  // Get tags from search params
  const tagParam = typeof searchParams.tags === 'string' ? searchParams.tags : ''
  const selectedTags = tagParam ? tagParam.split(',') : []
  
  // Filter projects based on selected tags using AND logic
  // Only show projects that contain ALL selected tags
  const filteredProjects = selectedTags.length > 0
    ? allProjects.filter(project => 
        selectedTags.every(tag => project.tags.includes(tag))
      )
    : allProjects

  return (
    <div className="py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-heading">
          Projects
      </h1>

      <ProjectFilter />

      {allProjects.length === 0 ? (
        <div className="mt-8 text-center p-8 border border-dashed rounded-lg">
          <p className="text-muted-foreground">No projects available at the moment.</p>
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center p-8 border border-dashed rounded-lg">
          <p className="text-muted-foreground">No projects found with the selected filters.</p>
        </div>
      )}
    </div>
  )
}