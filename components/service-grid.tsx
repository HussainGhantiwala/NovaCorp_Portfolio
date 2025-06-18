"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { services } from "@/lib/services"

export default function ServiceGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="service-card flex flex-col rounded-lg border border-border/50 bg-card/30 p-6 shadow-sm"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {<service.iconComponent />}
          </div>
          <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
          <p className="mb-6 text-sm text-muted-foreground">{service.shortDescription}</p>
          <div className="mt-auto flex w-full gap-2">
            <Button variant="outline" asChild className="flex-1">
              <Link href={`/services/${service.slug}`}>View Details</Link>
            </Button>
            <Button asChild className="flex-1">
              <Link href={`/quote?service=${service.slug}`}>Get Quote</Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
