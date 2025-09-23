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
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link className="flex items-center space-x-2" href="/">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-gradient">SecurEMI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Morocco's premier cybersecurity club at École Mohammadia d'Ingénieurs. Advancing cybersecurity through
              education, competition, and innovation.
            </p>
            <div className="mt-6 flex space-x-4">
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Club</h3>
              <ul className="mt-4 space-y-3">
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
            <div>
              <h3 className="text-sm font-semibold text-foreground">Resources</h3>
              <ul className="mt-4 space-y-3">
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
            <div>
              <h3 className="text-sm font-semibold text-foreground">Connect</h3>
              <ul className="mt-4 space-y-3">
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
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 SecurEMI. All rights reserved. Built with security in mind.
            </p>
            <p className="text-sm text-muted-foreground">École Mohammadia d'Ingénieurs - Rabat, Morocco</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
