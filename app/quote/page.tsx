import type { Metadata } from "next"
import { Suspense } from "react"
import LoadingScreen from "@/components/loading-screen"
import QuoteForm from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Get a Quote | Nova Corp",
  description: "Request a custom quote for your web design and development project.",
}

export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Suspense fallback={<LoadingScreen />}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  )
}
