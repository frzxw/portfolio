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

export const projects: Project[] = [
  {
    slug: "my-first-project",
    title: "My First Project",
    description: "An e-commerce website built with a modern tech stack, featuring product listings, cart, and checkout.",
    content: `<p>This project showcases a basic but complete e-commerce web app built with full-stack JavaScript.</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/username/my-first-project",
    demo: "https://demo-one.example.com",
  },
  {
    slug: "my-second-project",
    title: "My Second Project",
    description: "A personal blog platform with markdown support and custom themes.",
    content: `<p>This is a simple blogging platform where users can write and share articles using markdown.</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/username/my-second-project",
    demo: "https://demo-two.example.com",
  },
  {
    slug: "my-third-project",
    title: "My Third Project",
    description: "A real-time chat application with private and group messaging.",
    content: `<p>Chat app built with WebSocket technology for instant messaging and smooth user experience.</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/username/my-third-project",
    demo: "https://demo-three.example.com",
  },
  {
    slug: "my-fourth-project",
    title: "My Fourth Project",
    description: "A portfolio website to showcase developer projects, skills, and experience.",
    content: `<p>This responsive portfolio site helps developers present their work and background professionally.</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/username/my-fourth-project",
    demo: "https://demo-four.example.com",
  },
  {
    slug: "my-fifth-project",
    title: "My Fifth Project",
    description: "A simple CMS for managing blog posts, categories, and authors.",
    content: `<p>This lightweight content management system is perfect for blogs or small editorial teams.</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/username/my-fifth-project",
    demo: "https://demo-five.example.com",
  },
  {
    slug: "my-sixth-project",
    title: "My Sixth Project",
    description: "A task management tool with Kanban board functionality.",
    content: `<p>Manage your tasks visually using boards, columns, and drag-and-drop cards.</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    github: "https://github.com/username/my-sixth-project",
    demo: "https://demo-six.example.com",
  },
]
