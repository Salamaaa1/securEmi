"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Shield, Users, Calendar, Trophy, BookOpen, Mail, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Shield },
  { name: "About", href: "/about", icon: Users },
  { name: "Team", href: "/team", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "CTF Platform", href: "/ctf", icon: Trophy },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center space-x-2" href="/">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl text-gradient">SecurEMI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="default" size="sm" className="glow-effect">
              Join Club
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 hover:bg-muted/50"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card/95 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                  <Link 
                    className="flex items-center space-x-2" 
                    href="/" 
                    onClick={() => setIsOpen(false)}
                  >
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl text-gradient">SecurEMI</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button 
                    className="w-full glow-effect" 
                    onClick={() => setIsOpen(false)}
                  >
                    Join Club
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
