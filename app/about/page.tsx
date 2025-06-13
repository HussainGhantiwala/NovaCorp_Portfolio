import type { Metadata } from "next"
import TeamMembers from "@/components/team-members"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Nova Corp",
  description: "Learn about our team and mission at Nova Corp.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">About Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We're a team of passionate designers and developers dedicated to creating exceptional web experiences.
        </p>
      </div>

      <div className="mb-24 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            At Nova Corp, we believe every business deserves a powerful online presence. Our mission is to forge
            digital experiences that not only look stunning but drive real business results.
          </p>
          <p className="mb-6 text-lg text-muted-foreground">
            We combine creativity with technical expertise to build websites that stand out in today's crowded digital
            landscape. Our focus is on creating user-centered designs that convert visitors into customers.
          </p>
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg border border-border/50 bg-card/30 md:h-80">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Our team collaborating"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-24">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-border/50 bg-card/30 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              1
            </div>
            <h3 className="mb-2 text-xl font-bold">User-Centered Design</h3>
            <p className="text-muted-foreground">
              We prioritize your users' experience, creating intuitive interfaces that guide them toward conversion.
            </p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/30 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              2
            </div>
            <h3 className="mb-2 text-xl font-bold">Technical Excellence</h3>
            <p className="text-muted-foreground">
              We build with clean, efficient code and stay at the forefront of web development technologies.
            </p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/30 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              3
            </div>
            <h3 className="mb-2 text-xl font-bold">Transparent Communication</h3>
            <p className="text-muted-foreground">
              We believe in clear, honest communication throughout every stage of your project.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Meet Our Team</h2>
        <TeamMembers />
      </div>
    </div>
  )
}
