import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FooterCTA() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Need a website? Let's build it together.</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Ready to take your business online or upgrade your existing web presence? Our team of experts is here to help
          you create a website that drives results.
        </p>
        <Button size="lg" asChild>
          <Link href="/quote">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
