"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Globe } from "lucide-react"

const education = [
  {
    degree: "Grado Superior en Desarrollo de Aplicaciones Web",
    institution: "IES Laguna de Joatzel",
    location: "Getafe, Madrid",
    period: "Septiembre 2020 - Junio 2022",
    icon: GraduationCap,
  },
  {
    degree: "Grado Medio en Sistemas Microinformáticos y Redes",
    institution: "IES Juan Bosco",
    location: "Alcázar de San Juan, Ciudad Real",
    period: "Septiembre 2018 - Junio 2020",
    icon: GraduationCap,
  },
]

const languages = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "Avanzado" },
]

export function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair gradient-text">Educación y Formación</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                      isVisible ? `animate-slide-in-left animate-delay-${(index + 1) * 100}` : "opacity-0"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <edu.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary font-playfair">{edu.degree}</h3>
                          <p className="text-foreground font-semibold">{edu.institution}</p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="lg:col-span-1">
              <Card
                className={`shadow-lg hover:shadow-xl transition-all duration-300 h-fit ${
                  isVisible ? "animate-scale-in animate-delay-300" : "opacity-0"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-bold text-primary font-playfair">Idiomas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{lang.language}</span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
