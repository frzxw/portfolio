import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import NodeBackground from "@/components/node-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Full Stack Developer | Fariz Wibisono",
  description: "Portfolio website of Fariz Wibisono, a full stack developer",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
    other: [
      { rel: "icon", sizes: "192x192", url: "/favicon-192x192.png" },
      { rel: "icon", sizes: "512x512", url: "/favicon-512x512.png" },
      { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden">
            <NodeBackground />
            <div className="relative z-10">
              <Navigation />
              <main className="container mx-auto px-4 py-8">{children}</main>
              <footer className="border-t py-6 md:py-8">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Fariz Wibisono. All rights reserved.
                </div>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'