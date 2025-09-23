import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Calendar, User, ArrowRight, BookOpen, Code, Lock, Search, Zap } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
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
              <Link href="/blog" className="text-primary font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 matrix-bg">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 text-sm">
            Technical Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Cybersecurity
            <span className="text-gradient block">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Explore the latest in cybersecurity research, tutorials, and industry insights from our team of experts and
            guest contributors.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
            <p className="text-muted-foreground text-lg">Our latest deep-dive into cybersecurity</p>
          </div>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default" className="bg-primary">
                  Featured
                </Badge>
                <Badge variant="secondary">Web Security</Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Advanced SQL Injection Techniques in Modern Web Applications
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Ayoub OUBELLA
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  December 15, 2024
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  12 min read
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-6">
                Explore advanced SQL injection techniques that bypass modern security measures, including WAF evasion,
                blind injection methods, and time-based attacks. This comprehensive guide covers both offensive and
                defensive perspectives with practical examples.
              </CardDescription>
              <Button className="glow-effect">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Articles</h2>
            <p className="text-muted-foreground text-lg">Latest insights from our cybersecurity experts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Cryptography</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Understanding Post-Quantum Cryptography
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Sara ZIANI
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Dec 10, 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Preparing for the quantum computing era: exploring NIST-approved post-quantum cryptographic algorithms
                  and their implementation challenges.
                </CardDescription>
                <Button
                  variant="outline"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Penetration Testing</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Red Team vs Blue Team: A Comprehensive Guide
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Khalid ESSAIDI
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Dec 8, 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Understanding the roles, methodologies, and tools used by offensive and defensive security teams in
                  modern cybersecurity operations.
                </CardDescription>
                <Button
                  variant="outline"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Digital Forensics</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Memory Forensics: Analyzing RAM Dumps
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Meryem ALAMI
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Dec 5, 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Step-by-step guide to memory forensics using Volatility framework, including malware detection and
                  process analysis techniques.
                </CardDescription>
                <Button
                  variant="outline"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">IoT Security</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Securing IoT Devices: Common Vulnerabilities
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Imane MANSOURI
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Dec 3, 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Exploring the most common security flaws in IoT devices and practical mitigation strategies for
                  manufacturers and users.
                </CardDescription>
                <Button
                  variant="outline"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">AI Security</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Adversarial Attacks on Machine Learning Models
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Rachid BENALI
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Dec 1, 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Understanding how adversarial examples can fool AI systems and defensive techniques to build robust
                  machine learning models.
                </CardDescription>
                <Button
                  variant="outline"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Blockchain</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Smart Contract Security Best Practices
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Fatima ZAHRA
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Nov 28, 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Essential security practices for smart contract development, including common vulnerabilities and
                  auditing techniques.
                </CardDescription>
                <Button
                  variant="outline"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground text-lg">Explore articles by your area of interest</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all text-center group cursor-pointer">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Web Security</CardTitle>
                <CardDescription>15 Articles</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all text-center group cursor-pointer">
              <CardHeader>
                <Lock className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Cryptography</CardTitle>
                <CardDescription>12 Articles</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all text-center group cursor-pointer">
              <CardHeader>
                <Search className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Digital Forensics</CardTitle>
                <CardDescription>8 Articles</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all text-center group cursor-pointer">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Penetration Testing</CardTitle>
                <CardDescription>10 Articles</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest cybersecurity insights, tutorials, and research directly
            in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="glow-effect">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
