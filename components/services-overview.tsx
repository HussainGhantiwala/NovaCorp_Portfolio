"use client"

import { Code, Palette, Layout } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ServicesOverview() {
  const services = [
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Web Design",
      description: "Beautiful, user-focused designs that elevate your brand and engage your audience.",
      link: "/services/web-design",
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "UI/UX Solutions",
      description: "Intuitive interfaces and seamless user experiences that convert visitors into customers.",
      link: "/services/ui-ux-solutions",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Website Development",
      description: "Fast, responsive, and accessible websites built with modern technologies.",
      link: "/services/website-development",
    },
  ]

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
    <section className="container mx-auto px-4 py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          We provide end-to-end web solutions to help your business thrive online.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="service-card flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm"
          >
            <div className="mb-4 rounded-full bg-primary/10 p-3">{service.icon}</div>
            <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
            <p className="mb-6 text-muted-foreground">{service.description}</p>
            <div className="mt-auto flex w-full gap-2">
              <Button variant="outline" asChild className="flex-1">
                <Link href={service.link}>View Details</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  )
}
