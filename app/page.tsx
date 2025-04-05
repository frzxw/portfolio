"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 md:py-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-heading">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Fariz Wibisono')
                .pauseFor(Infinity)
                .start();
            }}
          />  
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">Full Stack Developer</p>

        <div className="mt-8 flex justify-center space-x-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:jane.doe@example.com">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold font-heading">Software Development</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Building robust, maintainable software with modern best practices and clean architecture to ensure quality and scalability.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold font-heading">Artificial Intelligence</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Implementing machine learning solutions and AI-powered features to enhance application capabilities.
          </p>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-12">
        <Link href="/projects">
          <Button className="mr-4">View Projects</Button>
        </Link>
        <Link href="/blog">
          <Button variant="outline">Read Blog</Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

