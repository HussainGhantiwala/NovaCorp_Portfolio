"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Pixel Forge transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. The increase in leads has been remarkable.",
      author: "Sarah Johnson",
      position: "CEO, Retail Solutions Inc.",
    },
    {
      quote:
        "Working with the team was a breeze. They understood our vision immediately and delivered a website that exceeded our expectations, on time and within budget.",
      author: "Michael Chen",
      position: "Marketing Director, TechGrow",
    },
    {
      quote:
        "Our e-commerce sales increased by 45% within three months of launching our new website. The UX improvements and mobile optimization made all the difference.",
      author: "Emma Rodriguez",
      position: "Owner, Artisan Crafts",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Client Testimonials</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Don't just take our word for it. Here's what our clients have to say.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <div className="relative rounded-xl border border-border/50 bg-card/30 p-6 md:p-10">
          <Quote className="absolute left-4 top-4 h-10 w-10 text-primary/20 md:h-16 md:w-16" />

          <div className="relative z-10 min-h-[200px] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-6 text-lg italic md:text-xl">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <p className="font-medium">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentIndex === index ? "w-4 bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
