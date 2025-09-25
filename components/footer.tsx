import Link from "next/link"
import { Shield, Github, Linkedin, Twitter, Mail } from "lucide-react"

const footerLinks = {
  club: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "CTF Platform", href: "/ctf" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Challenges", href: "/challenges" },
    { name: "Gallery", href: "/gallery" },
  ],
  connect: [
    { name: "Contact", href: "/contact" },
    { name: "Join Us", href: "/join" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Partners", href: "/partners" },
  ],
}

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Email", href: "mailto:contact@securemi.ma", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Logo and Description - Centered */}
        <div className="text-center mb-12">
          <Link className="inline-flex items-center space-x-2 mb-4" href="/">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl text-gradient">SecurEMI</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Morocco's premier cybersecurity club at École Mohammadia d'Ingénieurs. Advancing cybersecurity through
            education, competition, and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Links Grid - Centered */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto mb-12">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-foreground mb-4">Club</h3>
            <ul className="space-y-3">
              {footerLinks.club.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="border-t border-border pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 SecurEMI. All rights reserved. Built with security in mind.
            </p>
            <p className="text-sm text-muted-foreground">
              École Mohammadia d'Ingénieurs - Rabat, Morocco
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
