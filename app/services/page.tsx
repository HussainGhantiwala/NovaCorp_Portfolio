"use client"

import { services } from "@/lib/services"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ServiceGrid() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We offer comprehensive web solutions tailored to your business needs. From design to development, we've got
          you covered.
        </p>
      </div>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.iconComponent

        return (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6 shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="mb-4 text-muted-foreground">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              <Link href={`/services/${service.slug}`}>
                <Button variant="secondary">View</Button>
              </Link>
              <Link href="/quote">
                <Button variant="outline">Get Quote</Button>
              </Link>
            </div>
          </motion.div>
        )
      })}
    </div>
    </div>
  )
}
