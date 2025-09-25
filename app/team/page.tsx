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

      {/* Core Team by Department */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Team Members</h2>
            <p className="text-muted-foreground text-lg">
              Dedicated members driving our various initiatives and departments
            </p>
          </div>

          {/* Technical Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <Code className="inline-block mr-2 h-6 w-6 text-primary" />
              Technical Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">YB</span>
                  </div>
                  <CardTitle className="text-lg">Youssef BENALI</CardTitle>
                  <CardDescription>Senior Developer</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Full Stack
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Security
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Platform development and security integration</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">MA</span>
                  </div>
                  <CardTitle className="text-lg">Meryem ALAMI</CardTitle>
                  <CardDescription>Security Analyst</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Forensics
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      SIEM
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Digital forensics and incident response specialist</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">KE</span>
                  </div>
                  <CardTitle className="text-lg">Khalid ESSAIDI</CardTitle>
                  <CardDescription>Penetration Tester</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      PenTest
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Red Team
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Advanced penetration testing and red team operations</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">SZ</span>
                  </div>
                  <CardTitle className="text-lg">Sara ZIANI</CardTitle>
                  <CardDescription>Crypto Specialist</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Cryptography
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      PKI
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Cryptographic protocols and secure communications</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Operations Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <Users className="inline-block mr-2 h-6 w-6 text-accent" />
              Operations Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">AB</span>
                  </div>
                  <CardTitle className="text-lg">Ahmed BOUALI</CardTitle>
                  <CardDescription>Event Coordinator</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Events
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Logistics
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Workshop and competition event management</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">LK</span>
                  </div>
                  <CardTitle className="text-lg">Laila KADIRI</CardTitle>
                  <CardDescription>Media Manager</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Social Media
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Content
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Social media and content creation specialist</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">HT</span>
                  </div>
                  <CardTitle className="text-lg">Hassan TAZI</CardTitle>
                  <CardDescription>Sponsorship Lead</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Partnerships
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Funding
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Corporate partnerships and sponsorship management</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">NE</span>
                  </div>
                  <CardTitle className="text-lg">Nadia ELKHOURI</CardTitle>
                  <CardDescription>Training Coordinator</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Education
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Workshops
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Training program development and coordination</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Research & Development */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <Search className="inline-block mr-2 h-6 w-6 text-primary" />
              Research & Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">IM</span>
                  </div>
                  <CardTitle className="text-lg">Imane MANSOURI</CardTitle>
                  <CardDescription>Security Researcher</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      IoT Security
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Research
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">IoT and embedded systems security research</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">RB</span>
                  </div>
                  <CardTitle className="text-lg">Rachid BENALI</CardTitle>
                  <CardDescription>AI Security Specialist</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      AI/ML Security
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Research
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">AI/ML security and adversarial attacks research</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">FZ</span>
                  </div>
                  <CardTitle className="text-lg">Fatima ZAHRA</CardTitle>
                  <CardDescription>Blockchain Security</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Blockchain
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Smart Contracts
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Blockchain and smart contract security analysis</p>
                </CardContent>
              </Card>
            </div>
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
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Core Team</div>
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
