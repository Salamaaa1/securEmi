import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SecurEMI - Cybersecurity Club at EMI",
  description:
    "Official website of SecurEMI, the cybersecurity club at École Mohammadia d'Ingénieurs. Join us for CTF competitions, workshops, and security training.",
  generator: "v0.app",
  keywords: ["cybersecurity", "CTF", "EMI", "SecurEMI", "hacking", "security", "Morocco"],
  authors: [{ name: "SecurEMI Team" }],
  openGraph: {
    title: "SecurEMI - Cybersecurity Club at EMI",
    description: "Join Morocco's premier cybersecurity club for CTF competitions, workshops, and security training.",
    type: "website",
  },
}

export const viewport = "width=device-width, initial-scale=1"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
