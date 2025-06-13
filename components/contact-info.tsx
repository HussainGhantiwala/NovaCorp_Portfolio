import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center rounded-lg border border-border/50 bg-card/30 p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-bold">Contact Information</h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="mr-4 rounded-full bg-primary/10 p-2">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Office Location</h4>
            <address className="not-italic text-muted-foreground">
              123 Web Street
              <br />
              Digital City, DC 10101
            </address>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 rounded-full bg-primary/10 p-2">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email Us</h4>
            <p className="text-muted-foreground">
              <a href="mailto:contact@pixelforge.studio" className="transition-colors hover:text-primary">
                contact@pixelforge.studio
              </a>
            </p>
            <p className="text-muted-foreground">
              <a href="mailto:support@pixelforge.studio" className="transition-colors hover:text-primary">
                support@pixelforge.studio
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 rounded-full bg-primary/10 p-2">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Call Us</h4>
            <p className="text-muted-foreground">
              <a href="tel:+15551234567" className="transition-colors hover:text-primary">
                (555) 123-4567
              </a>
            </p>
            <p className="text-xs text-muted-foreground">Monday-Friday, 9am-5pm EST</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="mb-2 font-medium">Business Hours</h4>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="py-1 pr-4 font-medium">Monday-Friday:</td>
              <td className="py-1 text-muted-foreground">9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td className="py-1 pr-4 font-medium">Saturday:</td>
              <td className="py-1 text-muted-foreground">By appointment</td>
            </tr>
            <tr>
              <td className="py-1 pr-4 font-medium">Sunday:</td>
              <td className="py-1 text-muted-foreground">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
