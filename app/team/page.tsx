import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Mail, Linkedin, Github, Code, Search } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
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
              <Link href="/team" className="text-primary font-medium">
                Team
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
            Our Team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Meet the
            <span className="text-gradient block">SecurEMI Team</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Our diverse team of cybersecurity enthusiasts, researchers, and professionals working together to advance
            digital security education and practice.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-lg">The founding members leading SecurEMI's mission</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-primary-foreground">SH</span>
                </div>
                <CardTitle>Salama HARBAL</CardTitle>
                <CardDescription>Co-Founder & President</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Penetration Testing</Badge>
                  <Badge variant="secondary">Malware Analysis</Badge>
                  <Badge variant="secondary">OSCP</Badge>
                  <Badge variant="secondary">CEH</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Leading cybersecurity researcher specializing in advanced persistent threats and network security.
                  Conducted 20+ security audits for major organizations.
                </p>
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-primary-foreground">AO</span>
                </div>
                <CardTitle>Ayoub OUBELLA</CardTitle>
                <CardDescription>Co-Founder & Technical Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Web Security</Badge>
                  <Badge variant="secondary">Cryptography</Badge>
                  <Badge variant="secondary">CTF Champion</Badge>
                  <Badge variant="secondary">CEH</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert in web application security and cryptographic protocols. Multiple-time CTF winner with 5+
                  international competition victories.
                </p>
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-primary-foreground">OS</span>
                </div>
                <CardTitle>Omar SERGHINI</CardTitle>
                <CardDescription>Co-Founder & Infrastructure Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Cloud Security</Badge>
                  <Badge variant="secondary">DevSecOps</Badge>
                  <Badge variant="secondary">CISSP</Badge>
                  <Badge variant="secondary">AWS Security</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Cloud security architect focused on secure development practices. Leads infrastructure security
                  initiatives and compliance frameworks.
                </p>
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Organizing Committee</h2>
            <p className="text-muted-foreground text-lg">
              Committee members organizing events and activities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">JM</span>
                </div>
                <CardTitle className="text-lg">Jihad MAHDAD</CardTitle>
                <CardDescription>Chef Cellule Conception</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Conception
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Leadership
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Leading the conception and design cell</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">OR</span>
                </div>
                <CardTitle className="text-lg">Oussama RABII</CardTitle>
                <CardDescription>Co Chef Conception</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Conception
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Co-Leadership
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Co-leading the conception and design cell</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">MB</span>
                </div>
                <CardTitle className="text-lg">Mohamed BAKLOUL</CardTitle>
                <CardDescription>Chef Cellule Formation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Formation
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Training
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Leading the training and education cell</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">OB</span>
                </div>
                <CardTitle className="text-lg">Othman BOUDI</CardTitle>
                <CardDescription>Chef Cellule Logistique</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Logistique
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Operations
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Leading the logistics and operations cell</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">ML</span>
                </div>
                <CardTitle className="text-lg">Malak LAAROUSI</CardTitle>
                <CardDescription>Chef Cellule Media</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Media
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Communication
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Leading the media and communication cell</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">IEH</span>
                </div>
                <CardTitle className="text-lg">Imane EL HASSANI</CardTitle>
                <CardDescription>Secretaire General</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Secretariat
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Administration
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">General secretary and administrative coordination</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Are you passionate about cybersecurity? We're always looking for talented individuals to join our mission of
            advancing digital security education and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect">
              <Users className="mr-2 h-5 w-5" />
              Apply to Join
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">6</div>
              <div className="text-muted-foreground">Organizing Committee</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Departments</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
