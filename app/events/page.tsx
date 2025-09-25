import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Calendar, Clock, MapPin, Users, Trophy } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">SecurEMI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/events" className="text-primary font-medium">
                Events
              </Link>
              <Link href="/ctf" className="text-muted-foreground hover:text-primary transition-colors">
                CTF
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 matrix-bg">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 text-sm">
            Events & Competitions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Cybersecurity
            <span className="text-gradient block">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Join our workshops, competitions, and training sessions. Stay updated with the latest cybersecurity events
            and enhance your skills through hands-on experience.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">
              Don't miss these exciting cybersecurity events and learning opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader>
                <Badge variant="default" className="w-fit mb-2 bg-primary">
                  Workshop
                </Badge>
                <CardTitle>Advanced Penetration Testing</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  January 15, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    2:00 PM - 6:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    EMI Amphitheater A
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    30 participants max
                  </div>
                  <p className="text-sm">
                    Hands-on workshop covering advanced penetration testing techniques, OWASP methodology, and
                    real-world scenarios.
                  </p>
                  <Button className="w-full glow-effect">Register Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader>
                <Badge variant="default" className="w-fit mb-2 bg-accent">
                  CTF Competition
                </Badge>
                <CardTitle>SecurEMI Winter CTF 2025</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  January 20-22, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    48 hours
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Online Platform
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Trophy className="h-4 w-4" />
                    $2000 Prize Pool
                  </div>
                  <p className="text-sm">
                    Our flagship CTF competition featuring challenges in web security, cryptography, forensics, and
                    reverse engineering.
                  </p>
                  <Button className="w-full glow-effect">Join Competition</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader>
                <Badge variant="default" className="w-fit mb-2 bg-primary">
                  Seminar
                </Badge>
                <CardTitle>AI in Cybersecurity</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  February 5, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    3:00 PM - 5:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    EMI Conference Hall
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    100 participants max
                  </div>
                  <p className="text-sm">
                    Explore how artificial intelligence is revolutionizing cybersecurity defense and threat detection.
                  </p>
                  <Button className="w-full glow-effect">Reserve Seat</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events & Achievements</h2>
            <p className="text-muted-foreground text-lg">Highlights from our previous events and competition results</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">December 2024</Badge>
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>National Cybersecurity Championship</CardTitle>
                <CardDescription>Morocco National CTF Competition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Final Ranking:</span>
                    <Badge variant="default" className="bg-primary">
                      2nd Place
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Challenges Solved:</span>
                    <span className="text-sm text-muted-foreground">15/18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Team Members:</span>
                    <span className="text-sm text-muted-foreground">5 students</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Outstanding performance in web security and cryptography categories, securing our position as one of
                    Morocco's top cybersecurity teams.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">November 2024</Badge>
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <CardTitle>Web Application Security Workshop</CardTitle>
                <CardDescription>OWASP Top 10 Training Session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Participants:</span>
                    <span className="text-sm text-muted-foreground">45 students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Duration:</span>
                    <span className="text-sm text-muted-foreground">6 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Satisfaction:</span>
                    <span className="text-sm text-muted-foreground">4.8/5.0</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive hands-on workshop covering SQL injection, XSS, CSRF, and other critical web
                    vulnerabilities with practical exploitation labs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Calendar</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with all our upcoming events, workshops, and competitions. Never miss an opportunity to learn
            and grow.
          </p>
          <Button size="lg" className="glow-effect">
            <Calendar className="mr-2 h-5 w-5" />
            View Full Calendar
          </Button>
        </div>
      </section>
    </div>
  )
}
