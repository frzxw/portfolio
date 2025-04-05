"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllTags } from "@/lib/projects"

export default function ProjectFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const allTags = getAllTags()

  // Extract tags from URL on initial load
  useEffect(() => {
    const tagParam = searchParams.get("tags")
    if (tagParam) {
      setSelectedTags(tagParam.split(","))
    } else {
      setSelectedTags([])
    }
  }, [searchParams])

  // Create a memoized function to update the URL
  const updateUrl = useCallback(
    (tags: string[]) => {
      const params = new URLSearchParams(searchParams.toString())

      if (tags.length > 0) {
        params.set("tags", tags.join(","))
      } else {
        params.delete("tags")
      }

      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams],
  )

  // Toggle tag selection
  const toggleTag = useCallback(
    (tag: string) => {
      const newSelectedTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]

      setSelectedTags(newSelectedTags)
      updateUrl(newSelectedTags)
    },
    [selectedTags, updateUrl],
  )

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSelectedTags([])
    updateUrl([])
  }, [updateUrl])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear filters
        </Button>
      )}
    </div>
  )
}

