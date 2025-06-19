import { notFound } from "next/navigation"
import { services } from "@/lib/services"
import { ServicePageClient } from "./ServicePageClient"

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

  // Remove iconComponent since it can't be serialized to client component
  const { iconComponent, ...serializableService } = service

  return <ServicePageClient service={serializableService} />
}