"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "development",
      tags: ["Web Development", "E-commerce"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Corporate Website",
      category: "design",
      tags: ["Web Design", "Branding"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mobile App UI",
      category: "ui-ux",
      tags: ["UI/UX Design", "Mobile"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Restaurant Booking System",
      category: "development",
      tags: ["Web Application", "UI/UX"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Fashion Brand Website",
      category: "design",
      tags: ["Web Design", "E-commerce"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Travel App Interface",
      category: "ui-ux",
      tags: ["UI/UX Design", "Mobile"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filters = [
    { id: "all", label: "All" },
    { id: "design", label: "Web Design" },
    { id: "ui-ux", label: "UI/UX" },
    { id: "development", label: "Development" },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="portfolio" className="bg-muted/30 px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Work</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our recent projects and see how we've helped businesses transform their online presence.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="portfolio-card group overflow-hidden rounded-lg border border-border/50 bg-card/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
