import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Code, Lock, Target, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 matrix-bg">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-4 md:mb-6 text-xs md:text-sm">
            Emi's Cybersecurity Club
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
            Defending the Digital
            <span className="text-gradient block">Frontier</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-pretty">
            Join SecurEMI at École Mohammadia d'Ingénieurs for cutting-edge cybersecurity training, CTF competitions,
            and hands-on security research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect">
              <Target className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/ctf">
                <Trophy className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                View CTF Challenges
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why Choose SecurEMI?</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              We're building the next generation of cybersecurity professionals through practical experience and
              community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="pb-4">
                <Trophy className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
                <CardTitle className="text-lg md:text-xl">CTF Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Compete in national and international Capture The Flag competitions, representing EMI on the global
                  stage.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="pb-4">
                <Code className="h-10 w-10 md:h-12 md:w-12 text-accent mb-3 md:mb-4" />
                <CardTitle className="text-lg md:text-xl">Technical Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Hands-on training sessions covering penetration testing, malware analysis, and security auditing.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="pb-4">
                <Lock className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
                <CardTitle className="text-lg md:text-xl">Security Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Real-world experience conducting security assessments and vulnerability research for organizations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardHeader className="pb-4">
                <Users className="h-10 w-10 md:h-12 md:w-12 text-accent mb-3 md:mb-4" />
                <CardTitle className="text-lg md:text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Join a passionate community of security enthusiasts, researchers, and future cybersecurity leaders.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Recent Activities</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Stay updated with our latest achievements and events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                  CTF Competition
                </Badge>
                <CardTitle className="text-lg md:text-xl">National Cybersecurity Championship</CardTitle>
                <CardDescription>December 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SecurEMI team secured 2nd place in the national championship, solving 15 out of 18 challenges across
                  multiple categories.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                  Workshop
                </Badge>
                <CardTitle className="text-lg md:text-xl">Web Application Security</CardTitle>
                <CardDescription>November 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conducted a comprehensive workshop on OWASP Top 10 vulnerabilities with hands-on exploitation labs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                  Research
                </Badge>
                <CardTitle className="text-lg md:text-xl">IoT Security Audit</CardTitle>
                <CardDescription>October 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Published research findings on IoT device vulnerabilities discovered during our security assessment
                  project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Secure the Future?</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Join SecurEMI and become part of Morocco's leading cybersecurity community. Whether you're a beginner or
            expert, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect">
              <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Join SecurEMI
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/events">
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                View Upcoming Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
