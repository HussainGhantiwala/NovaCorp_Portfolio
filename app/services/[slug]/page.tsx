import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { services } from "@/lib/services"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found | Nova Corp",
    }
  }

  return {
    title: `${service.title} | Nova Corp`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-16">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <Badge variant="outline" className="border-primary/50 text-primary">
            {service.category}
          </Badge>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{service.title}</h1>
        <p className="max-w-3xl text-xl text-muted-foreground">{service.description}</p>
      </div>

      <div className="mb-16 grid gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">What's Included</h2>
          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-6 mt-12 text-2xl font-bold md:text-3xl">Technologies We Use</h2>
          <div className="mb-8 flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/quote">
                Get a Quote for {service.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
            <Image
              src={service.image || "/placeholder.svg?height=600&width=800"}
              alt={service.title}
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Our Process</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {service.process.map((step, index) => (
            <div key={index} className="rounded-lg border border-border/50 bg-card/30 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                {index + 1}
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {service.examples && service.examples.length > 0 && (
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Project Examples</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {service.examples.map((example, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
                <div className="relative aspect-video">
                  <Image
                    src={example.image || "/placeholder.svg?height=400&width=600"}
                    alt={example.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{example.title}</h3>
                  <p className="mb-4 text-muted-foreground">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to get started?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Let's discuss your project and create a tailored solution that meets your specific requirements.
        </p>
        <Button asChild size="lg">
          <Link href="/quote">
            Get a Custom Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
