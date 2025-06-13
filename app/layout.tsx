import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import BackToTop from "@/components/back-to-top"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  title: "Nova Corp | Web Design & Development Studio",
  description: "Professional web design, UI/UX solutions, and custom website development for modern businesses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          <div className="flex min-h-screen flex-col bg-background">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
