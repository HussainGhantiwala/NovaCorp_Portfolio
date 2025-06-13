import type { Metadata } from "next"
import { Suspense } from "react"
import QuoteForm from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Get a Quote | Nova Corp",
  description: "Request a custom quote for your web design and development project.",
}

export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Get a Quote</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Tell us about your project, and we'll provide a custom quote tailored to your needs.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <Suspense fallback={<div>Loading form...</div>}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  )
}
