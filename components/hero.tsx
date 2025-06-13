"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 3500) // Match with the typing animation duration

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 px-4 py-24 md:py-32">
      {/* Background Doodles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-full w-full">
          {/* Code brackets */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,100 L150,150 L100,200" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M200,100 L150,150 L200,200" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Curly braces */}
            <path
              d="M250,100 C270,120 270,130 250,150 C270,170 270,180 250,200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M300,100 C280,120 280,130 300,150 C280,170 280,180 300,200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />

            {/* HTML tags */}
            <path d="M350,120 L370,120 L390,150 L370,180 L350,180" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M410,120 L390,120 L370,150 L390,180 L410,180" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Circles and dots representing data points */}
            <circle cx="450" cy="150" r="5" fill="currentColor" />
            <circle cx="480" cy="130" r="5" fill="currentColor" />
            <circle cx="510" cy="170" r="5" fill="currentColor" />
            <circle cx="540" cy="120" r="5" fill="currentColor" />
            <circle cx="570" cy="160" r="5" fill="currentColor" />

            {/* Code lines */}
            <line x1="100" y1="250" x2="200" y2="250" stroke="currentColor" strokeWidth="2" />
            <line x1="120" y1="280" x2="250" y2="280" stroke="currentColor" strokeWidth="2" />
            <line x1="140" y1="310" x2="220" y2="310" stroke="currentColor" strokeWidth="2" />

            {/* Function brackets */}
            <path d="M300,250 C320,250 320,310 340,310" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M400,250 C380,250 380,310 360,310" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Binary code */}
            <text x="450" y="260" fill="currentColor" fontSize="12">
              10110
            </text>
            <text x="450" y="280" fill="currentColor" fontSize="12">
              01001
            </text>
            <text x="450" y="300" fill="currentColor" fontSize="12">
              11010
            </text>

            {/* More code elements */}
            <rect x="100" y="350" width="50" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="200" cy="365" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
            <polygon points="250,350 280,365 250,380" stroke="currentColor" strokeWidth="1" fill="none" />

            {/* Connecting lines */}
            <line x1="150" y1="365" x2="185" y2="365" stroke="currentColor" strokeWidth="1" />
            <line x1="215" y1="365" x2="250" y2="365" stroke="currentColor" strokeWidth="1" />

            {/* More doodles on the right side */}
            <path d="M600,100 Q650,150 600,200" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M650,100 Q600,150 650,200" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Code indentation lines */}
            <line x1="600" y1="250" x2="700" y2="250" stroke="currentColor" strokeWidth="2" />
            <line x1="620" y1="280" x2="700" y2="280" stroke="currentColor" strokeWidth="2" />
            <line x1="640" y1="310" x2="700" y2="310" stroke="currentColor" strokeWidth="2" />
            <line x1="620" y1="340" x2="700" y2="340" stroke="currentColor" strokeWidth="2" />
            <line x1="600" y1="370" x2="700" y2="370" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="mb-6 font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="typing-animation inline-block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                NOVA CORP
              </span>
            </h1>
          </motion.div>

          <motion.p className="mb-8 text-xl text-muted-foreground md:text-2xl" variants={itemVariants}>
            We forge exceptional digital experiences through innovative web design and development.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 sm:flex-row" variants={itemVariants}>
            <Button asChild size="lg" className="group">
              <Link href="/quote">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract background elements */}
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -right-32 top-32 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
    </section>
  )
}
