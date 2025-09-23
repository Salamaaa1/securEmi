"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Shield, Users, Calendar, Trophy, BookOpen, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Shield },
  { name: "About", href: "/about", icon: Users },
  { name: "Team", href: "/team", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "CTF Platform", href: "/ctf", icon: Trophy },
  { name: "Blog & Writeups", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Shield className="h-6 w-6 text-primary" />
            <span className="hidden font-bold text-xl text-gradient sm:inline-block">SecurEMI</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-primary text-muted-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link className="flex items-center space-x-2" href="/" onClick={() => setIsOpen(false)}>
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-gradient">SecurEMI</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="inline-flex md:hidden items-center space-x-2" href="/">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-gradient">SecurEMI</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Button variant="default" size="sm" className="glow-effect">
              Join Club
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
