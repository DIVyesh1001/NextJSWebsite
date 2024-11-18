"use client"

import { useState } from 'react'
import { Button } from "./components/ui/Button"
import { Card, CardContent } from "./components/ui/Card"
import { ChevronDown, ArrowRight, Check, Star, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="DCT Logo" width={40} height={40} priority />
            <span className="font-bold">Data Culture Technologies</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">Services</Link>
            <Link href="#industries" className="text-sm font-medium hover:underline underline-offset-4">Industries</Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">Projects</Link>
            <Link href="#partners" className="text-sm font-medium hover:underline underline-offset-4">Partners</Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex-1 p-4 space-y-2">
                <Link href="#about" className="block py-2 hover:underline" onClick={toggleMenu}>About</Link>
                <Link href="#services" className="block py-2 hover:underline" onClick={toggleMenu}>Services</Link>
                <Link href="#industries" className="block py-2 hover:underline" onClick={toggleMenu}>Industries</Link>
                <Link href="#projects" className="block py-2 hover:underline" onClick={toggleMenu}>Projects</Link>
                <Link href="#partners" className="block py-2 hover:underline" onClick={toggleMenu}>Partners</Link>
                <Link href="#contact" className="block py-2 hover:underline" onClick={toggleMenu}>Contact</Link>
              </nav>
              <div className="p-4 border-t">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Revolutionizing Industries with AI & ML Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Data Culture Technologies: Empowering businesses with cutting-edge AI and machine learning solutions for a smarter future.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-primary hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Data Culture Technologies</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are an innovative company specializing in custom AI and machine learning solutions. Our mission is to provide cutting-edge, creative, and practical technology solutions that help organizations and individuals achieve their objectives, optimize processes, and maintain a competitive edge.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image 
                  src="/placeholder.svg" 
                  alt="About DCT" 
                  width={400} 
                  height={400} 
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Custom AI Solutions", description: "Tailored artificial intelligence solutions to meet your specific business needs." },
                { title: "Machine Learning Integration", description: "Seamlessly integrate machine learning models into your existing systems." },
                { title: "Data Analytics", description: "Advanced data analytics to derive actionable insights from your data." },
                { title: "Predictive Modeling", description: "Develop predictive models to forecast trends and make informed decisions." },
                { title: "Natural Language Processing", description: "Implement NLP solutions for text analysis and language understanding." },
                { title: "Computer Vision", description: "Leverage computer vision technology for image and video analysis." }
              ].map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6">
                  <CardContent>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-500">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Industries We Serve</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Transportation", icon: "🚗" },
                { name: "Healthcare", icon: "🏥" },
                { name: "Agriculture", icon: "🌾" },
                { name: "Automotive", icon: "🚙" }
              ].map((industry, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6">
                  <CardContent>
                    <span className="text-4xl mb-4">{industry.icon}</span>
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Smart Traffic Management", description: "AI-powered traffic optimization system for urban areas.", image: "/placeholder.svg" },
                { title: "Precision Agriculture", description: "Machine learning models for crop yield prediction and optimization.", image: "/placeholder.svg" },
                { title: "Healthcare Diagnostics", description: "Advanced image recognition for early disease detection.", image: "/placeholder.svg" }
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={200} 
                    className="w-full h-48 object-cover" 
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-500">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5, 6].map((partner) => (
                <div key={partner} className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image 
                    src="/placeholder.svg" 
                    alt={`Partner ${partner}`} 
                    width={80} 
                    height={80} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "John Doe", company: "Tech Innovators Inc.", quote: "DCT's AI solutions have transformed our business operations, leading to significant improvements in efficiency and decision-making." },
                { name: "Jane Smith", company: "HealthCare Plus", quote: "The machine learning models developed by DCT have revolutionized our diagnostic processes, enabling earlier and more accurate disease detection." },
                { name: "Mike Johnson", company: "AgriTech Solutions", quote: "Thanks to DCT's precision agriculture solutions, we've seen a 30% increase in crop yields and a significant reduction in resource usage." }
              ].map((testimonial, index) => (
                <Card key={index} className="flex flex-col justify-between p-6">
                  <CardContent>
                    <div className="flex items-center space-x-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-500 mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vision</h2>
                <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Data Culture Technologies, we envision a future where technology seamlessly integrates into daily life, enhancing productivity, improving quality of life, and fostering sustainable development. We are committed to being at the forefront of the technological revolution, continually pushing the boundaries of what is possible.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image 
                  src="/placeholder.svg" 
                  alt="DCT Vision" 
                  width={400} 
                  height={400} 
                  className="rounded-lg object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Get in Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Data Culture Technologies: Empowering businesses with cutting-edge AI and machine learning solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:underline">About</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:underline">Services</Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:underline">Projects</Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>123 AI Street, Tech City</li>
                <li>contact@dataculturetech.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
            © {new Date().getFullYear()} Data Culture Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}