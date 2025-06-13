"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to transform your online presence?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Let's work together to create a website that drives results and helps your business grow.
        </p>
        <Button size="lg" asChild className="group">
          <Link href="/quote">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
