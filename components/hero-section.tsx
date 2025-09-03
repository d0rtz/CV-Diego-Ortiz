"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Linkedin } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center text-primary-foreground">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">Diego Ortiz</h1>
          <p className="text-xl md:text-2xl mb-8 font-source-sans">Desarrollador Web Full Stack</p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Getafe, Madrid, España</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+34 611 51 16 51</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>diegoortizruescas@gmail.com</span>
            </div>
            <a
              href="https://www.linkedin.com/in/d0rtz"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-scale-in animate-delay-200" asChild>
              <a href="#about">Conoce más sobre mí</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="animate-scale-in animate-delay-300 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="#contact">Contactar</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
