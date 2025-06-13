import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function PortfolioShowcase() {
  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mobile App UI",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Restaurant Booking System",
      category: "Web Application",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="bg-muted/50 px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Portfolio</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our recent projects and see how we've helped businesses transform their online presence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card group overflow-hidden rounded-lg bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">{item.category}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/services">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
