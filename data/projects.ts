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
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A personal website showcasing projects and blog posts.",
    content: `
        <p>
          Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong  >, this website is designed to be fast, responsive, and accessible.
        </p>
    
        <p>
          It features a clean UI powered by <strong>Radix UI</strong>, MDX-based blog integration, and reusable components for scalability.
        </p>
    
        <h3>Key Features</h3>
        <ul>
          <li>Mobile-first layout</li>
          <li>Optimized performance</li>
          <li>Dark mode support</li>
          <li>Reusable components</li>
          <li>Node background animation</li>
        </ul>
    `,
    image: "/images/portfolio-project.png?height=600&width=1200",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/frzxw/portfolio",
    demo: "https://frzxw.me",
     
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
