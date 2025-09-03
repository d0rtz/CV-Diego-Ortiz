"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair gradient-text">Contacto</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card
              className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-slide-in-left animate-delay-100" : "opacity-0"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary font-playfair">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:diegoortizruescas@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      diegoortizruescas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <a href="tel:+34611511651" className="text-muted-foreground hover:text-primary transition-colors">
                      +34 611 51 16 51
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Getafe, Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/d0rtz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/d0rtz
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card
              className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-slide-in-left animate-delay-200" : "opacity-0"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary font-playfair">Envíame un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tu mensaje"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="transition-all duration-200 focus:scale-[1.02] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-bg hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
