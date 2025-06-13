import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Pixel Forge",
  description: "Get in touch with our team for your web design and development needs.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Have questions or ready to start your project? Get in touch with our team.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}
