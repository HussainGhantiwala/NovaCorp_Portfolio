import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FooterCTA() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Automate the boring. Focus on growth.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Stop wasting time on repetitive tasks. From billing to reminders, we build automation tools that save hours and boost efficiency.
        </p>
        <Button size="lg" asChild>
          <Link href="/quote">
            Start Automating
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
