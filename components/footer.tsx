import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-muted/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-mono text-lg font-bold">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                NOVA CORP
              </span>
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              We build automation tools that cut manual work, save time, and let small businesses focus on growth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/billing-automation" className="text-muted-foreground transition-colors hover:text-primary">
                  Billing Automation
                </Link>
              </li>
              <li>
                <Link href="/services/payroll" className="text-muted-foreground transition-colors hover:text-primary">
                  Payroll Automation
                </Link>
              </li>
              <li>
                <Link href="/services/reminders" className="text-muted-foreground transition-colors hover:text-primary">
                  Smart Reminders
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-tools" className="text-muted-foreground transition-colors hover:text-primary">
                  Workflow Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-muted-foreground transition-colors hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <address className="not-italic">
              <p className="mb-2 text-sm text-muted-foreground">novamindcreation52@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
            <p>&copy; {currentYear} Nova Corp. Automating the future, one process at a time.</p>
            <div className="flex gap-4">
              <Link href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
