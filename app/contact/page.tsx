import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Shield, Mail, MapPin, Phone, Clock, Send, Linkedin, Github, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <Link href="/contact" className="text-primary font-medium">
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
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Contact
            <span className="text-gradient block">SecurEMI</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Ready to join our cybersecurity community? Have questions about our programs? We'd love to hear from you.
            Reach out for collaborations, partnerships, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="bg-input border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="bg-input border-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" className="bg-input border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="bg-input border-border resize-none"
                    />
                  </div>
                  <Button className="w-full glow-effect">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">École Mohammadia d'Ingénieurs</h4>
                      <p className="text-sm text-muted-foreground">
                        Avenue Ibn Sina, BP 765
                        <br />
                        Agdal, Rabat 10090
                        <br />
                        Morocco
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Office Hours: Monday - Friday, 9:00 AM - 6:00 PM
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-accent" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">General Inquiries</p>
                        <p className="text-sm text-muted-foreground">contact@securemi.ma</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Partnerships</p>
                        <p className="text-sm text-muted-foreground">partnerships@securemi.ma</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+212 5 37 68 71 71</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Globe className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Stay connected with our latest updates, events, and cybersecurity insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-muted-foreground text-lg">
              Collaborate with SecurEMI to advance cybersecurity education and research
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Corporate Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Support our events, competitions, and training programs while gaining visibility in the cybersecurity
                  community.
                </CardDescription>
                <Button variant="outline" className="bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Academic Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Partner with us on research projects, joint publications, and knowledge exchange programs.
                </CardDescription>
                <Button variant="outline" className="bg-transparent">
                  Collaborate
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Industry Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Engage with our talent pool for internships, recruitment, and real-world project collaborations.
                </CardDescription>
                <Button variant="outline" className="bg-transparent">
                  Partner With Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
