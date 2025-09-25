import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Lock, Search, Cpu, Globe, Trophy, Play, BookOpen, Target } from "lucide-react"
import Link from "next/link"

export default function CTFPage() {
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
              <Link href="/ctf" className="text-primary font-medium">
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
            CTF Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Capture The
            <span className="text-gradient block">Flag</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Challenge yourself with our comprehensive CTF platform. Practice your skills, compete with peers, and
            prepare for international competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect">
              <Play className="mr-2 h-5 w-5" />
              Start Challenges
            </Button>
            <Button variant="outline" size="lg">
              <Trophy className="mr-2 h-5 w-5" />
              View Leaderboard
            </Button>
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Challenge Categories</h2>
            <p className="text-muted-foreground text-lg">
              Master different aspects of cybersecurity through our diverse challenge categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Web Security</CardTitle>
                <CardDescription>25 Challenges Available</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  SQL injection, XSS, CSRF, authentication bypasses, and modern web application vulnerabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    SQL Injection
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    XSS
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CSRF
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Target className="mr-2 h-4 w-4" />
                  Start Challenges
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <Lock className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Cryptography</CardTitle>
                <CardDescription>18 Challenges Available</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Classical ciphers, modern encryption, hash functions, digital signatures, and cryptanalysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    RSA
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AES
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Hashing
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Target className="mr-2 h-4 w-4" />
                  Start Challenges
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Reverse Engineering</CardTitle>
                <CardDescription>15 Challenges Available</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Binary analysis, malware reverse engineering, assembly language, and debugging techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Assembly
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Debugging
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Malware
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Target className="mr-2 h-4 w-4" />
                  Start Challenges
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <Search className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Digital Forensics</CardTitle>
                <CardDescription>12 Challenges Available</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  File system analysis, network forensics, memory dumps, and digital evidence investigation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    File Analysis
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Network
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Memory
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Target className="mr-2 h-4 w-4" />
                  Start Challenges
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <Cpu className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Binary Exploitation</CardTitle>
                <CardDescription>20 Challenges Available</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Buffer overflows, ROP chains, format string bugs, and advanced exploitation techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Buffer Overflow
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    ROP
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Shellcode
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Target className="mr-2 h-4 w-4" />
                  Start Challenges
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Miscellaneous</CardTitle>
                <CardDescription>10 Challenges Available</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  OSINT, steganography, programming puzzles, and unique cybersecurity challenges.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    OSINT
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Steganography
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Puzzles
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Target className="mr-2 h-4 w-4" />
                  Start Challenges
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Performers</h2>
            <p className="text-muted-foreground text-lg">Current leaderboard standings for our CTF platform</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="bg-primary">
                        1st
                      </Badge>
                      <span className="font-medium">CyberNinja</span>
                    </div>
                    <span className="text-primary font-bold">2,450 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="bg-accent">
                        2nd
                      </Badge>
                      <span className="font-medium">SecureHacker</span>
                    </div>
                    <span className="text-accent font-bold">2,180 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">3rd</Badge>
                      <span className="font-medium">CodeBreaker</span>
                    </div>
                    <span className="text-muted-foreground font-bold">1,920 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">4th</Badge>
                      <span className="font-medium">PentestPro</span>
                    </div>
                    <span className="text-muted-foreground">1,750 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">5th</Badge>
                      <span className="font-medium">CryptoMaster</span>
                    </div>
                    <span className="text-muted-foreground">1,680 pts</span>
                  </div>
                </div>
                <Button className="w-full mt-6 glow-effect">View Full Leaderboard</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h2>
            <p className="text-muted-foreground text-lg">
              Enhance your skills with our comprehensive learning materials and guides
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Tutorials & Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Step-by-step tutorials covering fundamental and advanced cybersecurity concepts.
                </CardDescription>
                <Button variant="outline" className="w-full bg-transparent">
                  Browse Tutorials
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Code className="h-10 w-10 text-accent mb-3" />
                <CardTitle>Solution Writeups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Detailed explanations of challenge solutions and exploitation techniques.
                </CardDescription>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Writeups
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Practice Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Hands-on virtual labs for practicing penetration testing and security analysis.
                </CardDescription>
                <Button variant="outline" className="w-full bg-transparent">
                  Access Labs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
