import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Target, Users, BookOpen, Zap, Globe, Trophy } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-primary font-medium">
                About
              </Link>
              <Link href="#events" className="text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="#team" className="text-muted-foreground hover:text-primary transition-colors">
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
            About SecurEMI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Pioneering Cybersecurity
            <span className="text-gradient block">Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Founded at École Mohammadia d'Ingénieurs, SecurEMI is Morocco's premier cybersecurity club dedicated to
            fostering the next generation of security professionals through hands-on learning and real-world experience.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To cultivate cybersecurity expertise through practical training, competitive programming, and
                  real-world security assessments, preparing students for the evolving digital threat landscape.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To establish EMI as a leading institution in cybersecurity education and research, contributing to
                  Morocco's digital security infrastructure and global cybersecurity community.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Excellence in security practices, ethical hacking principles, continuous learning, collaborative
                  research, and commitment to protecting digital assets and privacy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The visionary leaders who established SecurEMI and continue to drive our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">SH</span>
                </div>
                <CardTitle>Salama HARBAL</CardTitle>
                <CardDescription>Co-Founder & Security Researcher</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Penetration Testing</Badge>
                  <Badge variant="secondary">Malware Analysis</Badge>
                  <Badge variant="secondary">OSCP</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized in advanced persistent threats and network security. Led multiple security audits for
                  government and private sector organizations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">AO</span>
                </div>
                <CardTitle>Ayoub OUBELLA</CardTitle>
                <CardDescription>Co-Founder & CTF Champion</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Web Security</Badge>
                  <Badge variant="secondary">Cryptography</Badge>
                  <Badge variant="secondary">CEH</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert in web application security and cryptographic protocols. Multiple-time CTF winner with
                  international competition experience.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">OS</span>
                </div>
                <CardTitle>Omar SERGHINI</CardTitle>
                <CardDescription>Co-Founder & Infrastructure Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Cloud Security</Badge>
                  <Badge variant="secondary">DevSecOps</Badge>
                  <Badge variant="secondary">CISSP</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Focused on cloud security architecture and secure development practices. Leads infrastructure security
                  initiatives and compliance frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Club Objectives */}
      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Objectives</h2>
            <p className="text-muted-foreground text-lg">
              Strategic goals that drive our mission and shape our activities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Trophy className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">CTF Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Represent EMI in national and international CTF competitions, achieving top rankings and recognition.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-lg">Knowledge Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Conduct workshops, seminars, and training sessions to spread cybersecurity awareness and skills.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Security Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provide professional security assessment services to organizations and contribute to digital safety.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-lg">Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Foster a vibrant community of cybersecurity enthusiasts and professionals in Morocco.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground text-lg">
              Milestones that showcase our commitment to cybersecurity excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">CTF Competitions</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Security Audits</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Workshop Attendees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Be part of Morocco's cybersecurity future. Whether you're a student, professional, or enthusiast, there's a
            place for you in SecurEMI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect">
              <Zap className="mr-2 h-5 w-5" />
              Become a Member
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
